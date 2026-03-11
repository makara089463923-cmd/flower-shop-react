import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../shared/schema";
import { eq, desc } from "drizzle-orm";
import { InsertUser, users, products, orders, orderItems, contactSubmissions } from "../shared/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      // Create PostgreSQL connection
      const client = postgres(process.env.DATABASE_URL);
      _db = drizzle(client, { schema });
      console.log("[Database] Connected to PostgreSQL successfully");
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Function សម្រាប់ប្រើក្នុង routes ដែលត្រូវការ db connection
export async function getDbConnection() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}

// លុបបន្ទាត់ export const db = _db; ចេញ

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    }

    // Try to update first, then insert if not found
    const result = await db.insert(users).values(values).onConflictDoUpdate({
      target: users.openId,
      set: updateSet,
    });

    console.log("[Database] User upserted successfully");
  } catch (error) {
    console.error("[Database] Error upserting user:", error);
    throw error;
  }
}

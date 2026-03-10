import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { getDb } from './db';
import { contacts, InsertContact } from '../shared/schema';
import { eq } from 'drizzle-orm';

// Initialize tRPC
const t = initTRPC.create();

// Contact submission schema
const contactSchema = z.object({
  name: z.string().min(1, "ឈ្មោះចាំបាច់ត្រូវបំពេញ"),
  phone: z.string().min(1, "លេខទូរស័ព្ទចាំបាច់ត្រូវបំពេញ"),
  email: z.string().email().optional().nullable(),
  address: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  productId: z.number().optional().nullable(),
});

// Public procedure
export const publicProcedure = t.procedure;

// Router
export const appRouter = t.router({
  // Submit contact form
  submitContact: publicProcedure
    .input(contactSchema)
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database connection not available");
      }

      const newContact = await db.insert(contacts).values({
        ...input,
        createdAt: new Date(),
        status: 'pending'
      }).returning();

      return {
        success: true,
        message: 'ទិន្នន័យត្រូវបានទទួលដោយជោគជ័យ',
        data: newContact[0]
      };
    }),

  // Get all contacts (for admin)
  getContacts: publicProcedure
    .query(async () => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database connection not available");
      }

      const allContacts = await db
        .select()
        .from(contacts)
        .orderBy(contacts.createdAt, 'desc');

      return allContacts;
    }),

  // Get contact by id
  getContactById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database connection not available");
      }

      const contact = await db
        .select()
        .from(contacts)
        .where(eq(contacts.id, input.id))
        .limit(1);

      return contact[0] || null;
    }),

  // Update contact status
  updateContactStatus: publicProcedure
    .input(z.object({
      id: z.number(),
      status: z.enum(['pending', 'contacted', 'completed'])
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database connection not available");
      }

      const updated = await db
        .update(contacts)
        .set({ 
          status: input.status,
          updatedAt: new Date()
        })
        .where(eq(contacts.id, input.id))
        .returning();

      return updated[0];
    }),
});

// Export type router type signature
export type AppRouter = typeof appRouter;

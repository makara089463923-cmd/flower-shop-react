import { pgTable, serial, text, integer, timestamp, boolean, json } from 'drizzle-orm/pg-core';
// Contact form submissions table
// កូដថ្មី (PostgreSQL syntax)
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  openId: text('open_id').notNull().unique(),
  name: text('name'),
  email: text('email'),
  loginMethod: text('login_method'),
  role: text('role').default('user').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  lastSignedIn: timestamp('last_signed_in').defaultNow().notNull(),
});

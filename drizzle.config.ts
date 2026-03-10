import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './shared/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',  // ប្តូរពី 'mysql'
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;

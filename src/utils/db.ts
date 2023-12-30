import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

const sqlite = new Database(
  import.meta.env.PROD ? '/data/db.sqlite3' : './db.sqlite3'
);
export const db = drizzle(sqlite);

migrate(db, { migrationsFolder: './drizzle' });

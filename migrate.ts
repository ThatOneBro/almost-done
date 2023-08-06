import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const sqlite = new Database("local.db");
sqlite.pragma("journal_mode = WAL");

const db = drizzle(sqlite);

// this will automatically run needed migrations on the database
await migrate(db, { migrationsFolder: "./drizzle" });

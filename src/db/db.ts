import "server-only";

import * as schema from "./schema";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";

const client = new Database("src/db/data/local.db");
client.pragma("journal_mode = WAL");
const db: BetterSQLite3Database<typeof schema> = drizzle(client, { schema });

export default db;

import { existsSync, mkdirSync } from "node:fs";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const SQLITE_FILE = new URL("../../data/local.db", import.meta.url)
  .toString()
  .replace("file://", "");

/**
 * Ensures a path to a sqlite database file exists. Defaults to `SQLITE_FILE`
 * @param filePath The path to where the database should be
 * @returns A boolean indicating whether the dir path creation succeeded or not
 */
function ensurePathToDbFile(filePath: string): boolean {
  const filePathArr = filePath.split("/");
  const pathToFile = filePathArr.slice(0, filePathArr.length - 1).join("/");
  if (!existsSync(pathToFile)) {
    mkdirSync(pathToFile, { recursive: true });
  }
  return true;
}

ensurePathToDbFile(SQLITE_FILE);
// if (!succeeded)
//   throw new Error(
//     `Failed to create path to database file: ${SQLITE_FILE}. Make sure the path is valid.`
//   );

const sqlite = new Database(SQLITE_FILE);
sqlite.pragma("journal_mode = WAL");

const db = drizzle(sqlite);

// this will automatically run needed migrations on the database
await migrate(db, { migrationsFolder: "./drizzle" });

"use server";

import "server-only";

import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import type { SchemaType } from "~/db/schema-type";

let db: BetterSQLite3Database<SchemaType>;
let schema: SchemaType;

async function initializeDb() {
  schema ??= await import("~/db/schema");
  return (await import("~/db/db")).default;
}

export async function getProjects() {
  db ??= await initializeDb();
  return await db.select().from(schema.projects);
}

export async function createProject() {}

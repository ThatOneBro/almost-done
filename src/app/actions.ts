"use server";

import "server-only";

import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import type { SchemaType } from "~/db/schema-type";

let db: BetterSQLite3Database<SchemaType>;
let schema: SchemaType;

async function initializeDbClient() {
  schema ??= await import("~/db/schema");
  return (await import("~/db/db")).default;
}

export async function getProjects() {
  db ??= await initializeDbClient();
  return db.select().from(schema.projects).all();
}

export async function createProject() {}

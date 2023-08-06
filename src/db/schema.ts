import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const projects = sqliteTable(
  "projects",
  {
    id: text("id").primaryKey(),
    name: text("name", { length: 256 }).notNull(),
    targetEndDate: integer("target_end_date", { mode: "timestamp_ms" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (projects) => ({
    nameIdx: uniqueIndex("name_idx").on(projects.name),
  })
);

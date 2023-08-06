import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable(
  "projects",
  {
    id: text("id").primaryKey(),
    name: text("name", { length: 256 }),
    targetEndDate: integer("target_end_date", { mode: "timestamp_ms" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (projects) => ({
    nameIdx: index("name_idx").on(projects.name),
  })
);

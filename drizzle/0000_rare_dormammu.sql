CREATE TABLE
    `projects` (
        `id` text PRIMARY KEY NOT NULL,
        `name` text(256),
        `target_end_date` integer DEFAULT CURRENT_TIMESTAMP
    );

--> statement-breakpoint

CREATE INDEX `name_idx` ON `projects` (`name`);
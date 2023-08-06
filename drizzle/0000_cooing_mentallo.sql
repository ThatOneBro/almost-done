CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text(256) NOT NULL,
	`target_end_date` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `name_idx` ON `projects` (`name`);
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"open_id" text NOT NULL,
	"name" text,
	"email" text,
	"login_method" text,
	"role" text DEFAULT 'user' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"last_signed_in" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_open_id_unique" UNIQUE("open_id")
);

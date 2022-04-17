
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"about" varchar(255),
	"user_pic" varchar(255),
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "treats" (
	"id" serial NOT NULL,
	"treat_name" varchar(255) NOT NULL,
	"treat_description" varchar(255) NOT NULL,
	"treat_image" varchar(255),
	"user_id" int NOT NULL,
	"bakesale_id" int NOT NULL,
	CONSTRAINT "treats_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "bakesales" (
	"id" serial NOT NULL,
	"org_name" varchar(255) NOT NULL,
	"org_description" varchar(255) NOT NULL,
	"org_website" varchar(255),
	"org_image" varchar(255),
	"fundraising_goal" int,
	"user_id" int NOT NULL,
	"treat_id" int,
	CONSTRAINT "bakesales_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "donations" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"bakesale_id" int NOT NULL,
	"donation" int NOT NULL,
	"date" DATE NOT NULL,
	"sent_status" BOOLEAN NOT NULL,
	CONSTRAINT "donations_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "bakesale_treats" (
	"id" serial NOT NULL,
	"bakesale_id" int NOT NULL,
	"treat_id" int NOT NULL,
	CONSTRAINT "bakesale_treats_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "favorites" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"bakesale_id" int NOT NULL,
	CONSTRAINT "favorites_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "treats" ADD CONSTRAINT "treats_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "treats" ADD CONSTRAINT "treats_fk1" FOREIGN KEY ("bakesale_id") REFERENCES "bakesales"("id");

ALTER TABLE "bakesales" ADD CONSTRAINT "bakesales_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "bakesales" ADD CONSTRAINT "bakesales_fk1" FOREIGN KEY ("treat_id") REFERENCES "treats"("id");

ALTER TABLE "donations" ADD CONSTRAINT "donations_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "donations" ADD CONSTRAINT "donations_fk1" FOREIGN KEY ("bakesale_id") REFERENCES "bakesales"("id");

ALTER TABLE "bakesale_treats" ADD CONSTRAINT "bakesale_treats_fk0" FOREIGN KEY ("bakesale_id") REFERENCES "bakesales"("id");
ALTER TABLE "bakesale_treats" ADD CONSTRAINT "bakesale_treats_fk1" FOREIGN KEY ("treat_id") REFERENCES "treats"("id");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("bakesale_id") REFERENCES "bakesales"("id");







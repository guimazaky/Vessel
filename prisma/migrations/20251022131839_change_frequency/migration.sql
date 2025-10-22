/*
  Warnings:

  - The values [ANNUAL] on the enum `Frequency` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Frequency_new" AS ENUM ('UNIQUE', 'DAILY', 'MONTHLY');
ALTER TABLE "public"."Income" ALTER COLUMN "frequency" TYPE "public"."Frequency_new" USING ("frequency"::text::"public"."Frequency_new");
ALTER TABLE "public"."Expenses" ALTER COLUMN "frequency" TYPE "public"."Frequency_new" USING ("frequency"::text::"public"."Frequency_new");
ALTER TYPE "public"."Frequency" RENAME TO "Frequency_old";
ALTER TYPE "public"."Frequency_new" RENAME TO "Frequency";
DROP TYPE "public"."Frequency_old";
COMMIT;

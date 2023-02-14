/*
  Warnings:

  - You are about to drop the column `timeOfDay` on the `Slot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "timeOfDay";

-- DropEnum
DROP TYPE "TimeOfDay";

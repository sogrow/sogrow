/*
  Warnings:

  - Added the required column `type` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SlotType" AS ENUM ('FIXED', 'RELATIVE');

-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "type" "SlotType" NOT NULL;

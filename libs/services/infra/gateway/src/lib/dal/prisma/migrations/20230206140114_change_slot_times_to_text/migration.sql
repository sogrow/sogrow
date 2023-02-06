/*
  Warnings:

  - The `time` column on the `Slot` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `relativeTimeStart` column on the `Slot` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `relativeTimeEnd` column on the `Slot` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "time",
ADD COLUMN     "time" CHAR(5),
DROP COLUMN "relativeTimeStart",
ADD COLUMN     "relativeTimeStart" CHAR(5),
DROP COLUMN "relativeTimeEnd",
ADD COLUMN     "relativeTimeEnd" CHAR(5);

-- CreateEnum
CREATE TYPE "UserPlan" AS ENUM ('TRIAL', 'PREMIUM_1K', 'PREMIUM_10K', 'PREMIUM_100K', 'PREMIUM_X', 'CANCELLED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "completedOnboarding" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "followersCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "locale" TEXT,
ADD COLUMN     "timeZone" VARCHAR(10),
ADD COLUMN     "trialEndsAt" DATE,
ADD COLUMN     "userPlan" "UserPlan" NOT NULL DEFAULT 'TRIAL',
ADD COLUMN     "userRole" "UserRole" NOT NULL DEFAULT 'USER';

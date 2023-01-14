-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "TimeOfDay" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING', 'NIGHT');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('DRAFT', 'SCHEDULED', 'PUBLISHED', 'DELETED');

-- CreateEnum
CREATE TYPE "CSAT" AS ENUM ('VERY_DISSATISFIED', 'DISSATISFIED', 'NEUTRAL', 'SATISFIED', 'VERY_SATISFIED');

-- CreateEnum
CREATE TYPE "MimeType" AS ENUM ('IMAGE', 'GIF', 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "SocialAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "followersCount" INTEGER NOT NULL,
    "postsCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SocialAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "day" "Weekday" NOT NULL,
    "time" TIME,
    "relativeTimeStart" TIME,
    "relativeTimeEnd" TIME,
    "timeOfDay" "TimeOfDay",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "body" TEXT,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostMeta" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "metaUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialPost" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "body" TEXT,
    "accountId" TEXT NOT NULL,
    "parentSocialPostId" TEXT,
    "socialId" TEXT,
    "socialLink" TEXT,
    "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT',
    "publishedAt" DATE,
    "updatedAt" DATE,
    "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialPostHistory" (
    "id" TEXT NOT NULL,
    "socialPostId" TEXT NOT NULL,
    "linkClicks" INTEGER,
    "views" INTEGER,
    "likes" INTEGER,
    "shares" INTEGER,
    "profileViews" INTEGER,
    "replies" INTEGER,
    "followers" INTEGER,
    "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE,

    CONSTRAINT "SocialPostHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "socialPostId" TEXT NOT NULL,
    "scheduledDateTime" DATE NOT NULL,
    "scheduledTime" TIME NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "csat" "CSAT" NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SocialAccount_accountId_key" ON "SocialAccount"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialAccount_userId_accountId_key" ON "SocialAccount"("userId", "accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_postId_socialPostId_key" ON "Schedule"("postId", "socialPostId");

-- AddForeignKey
ALTER TABLE "SocialAccount" ADD CONSTRAINT "SocialAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialAccount" ADD CONSTRAINT "SocialAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostMeta" ADD CONSTRAINT "PostMeta_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialPost" ADD CONSTRAINT "SocialPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialPostHistory" ADD CONSTRAINT "SocialPostHistory_socialPostId_fkey" FOREIGN KEY ("socialPostId") REFERENCES "SocialPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_socialPostId_fkey" FOREIGN KEY ("socialPostId") REFERENCES "SocialPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

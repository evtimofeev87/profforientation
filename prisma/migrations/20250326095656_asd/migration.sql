/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Post` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Profession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "professionCategoryId" TEXT,
    "name" TEXT NOT NULL,
    "salaryMax" INTEGER NOT NULL,
    "salaryMin" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "professionId" TEXT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    CONSTRAINT "Skill_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "professionId" TEXT,
    "title" TEXT NOT NULL,
    CONSTRAINT "Feature_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Feed" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "professionId" TEXT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER,
    "link" TEXT NOT NULL,
    CONSTRAINT "Feed_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FeedCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProfessionCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Filter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "professionCategoryId" TEXT NOT NULL,
    CONSTRAINT "Filter_professionCategoryId_fkey" FOREIGN KEY ("professionCategoryId") REFERENCES "ProfessionCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilterOption" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filterId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "FilterOption_filterId_fkey" FOREIGN KEY ("filterId") REFERENCES "Filter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profession_Filter_FilterOption" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "professionId" TEXT NOT NULL,
    "filterId" TEXT NOT NULL,
    "filterOptionId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FeedToFeedCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FeedToFeedCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Feed" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FeedToFeedCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "FeedCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "postCategoryId" TEXT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "timeToRead" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Post" ("content", "createdAt", "id", "image", "subtitle", "timeToRead", "title", "updatedAt") SELECT "content", "createdAt", "id", "image", "subtitle", "timeToRead", "title", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Profession_Filter_FilterOption_professionId_filterId_filterOptionId_key" ON "Profession_Filter_FilterOption"("professionId", "filterId", "filterOptionId");

-- CreateIndex
CREATE UNIQUE INDEX "_FeedToFeedCategory_AB_unique" ON "_FeedToFeedCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_FeedToFeedCategory_B_index" ON "_FeedToFeedCategory"("B");

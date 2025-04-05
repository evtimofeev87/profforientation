-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoryId" TEXT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "timeToRead" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "PostCategory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("categoryId", "content", "createdAt", "id", "image", "subtitle", "timeToRead", "title", "updatedAt") SELECT "categoryId", "content", "createdAt", "id", "image", "subtitle", "timeToRead", "title", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

/*
  Warnings:

  - You are about to drop the `UserPreferences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "UserPreferences_userId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserPreferences";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emailUpdated" BOOLEAN NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "age" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userPreferenceId" TEXT,
    CONSTRAINT "User_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "UserPreference" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("age", "email", "id", "name") SELECT "age", "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_userPreferenceId_key" ON "User"("userPreferenceId");
CREATE INDEX "User_email_idx" ON "User"("email");
CREATE UNIQUE INDEX "User_age_name_key" ON "User"("age", "name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

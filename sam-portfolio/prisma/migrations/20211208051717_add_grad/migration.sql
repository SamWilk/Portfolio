/*
  Warnings:

  - Added the required column `grad` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_School" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "grad" TEXT NOT NULL
);
INSERT INTO "new_School" ("degree", "id", "major", "name") SELECT "degree", "id", "major", "name" FROM "School";
DROP TABLE "School";
ALTER TABLE "new_School" RENAME TO "School";
CREATE UNIQUE INDEX "School_name_key" ON "School"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

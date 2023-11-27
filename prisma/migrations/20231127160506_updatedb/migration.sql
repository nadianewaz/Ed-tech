/*
  Warnings:

  - You are about to drop the column `instructor` on the `purchase_course` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `purchase_course` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `purchase_course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `courses` ADD COLUMN `img` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `instructor` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `price` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `purchase_course` DROP COLUMN `instructor`,
    DROP COLUMN `price`,
    DROP COLUMN `rating`;

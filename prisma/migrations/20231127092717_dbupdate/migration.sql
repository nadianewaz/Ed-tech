/*
  Warnings:

  - You are about to drop the column `instructor` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `courses` table. All the data in the column will be lost.
  - Added the required column `instructor` to the `purchase_course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `purchase_course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `purchase_course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `courses` DROP COLUMN `instructor`,
    DROP COLUMN `price`,
    DROP COLUMN `rating`;

-- AlterTable
ALTER TABLE `purchase_course` ADD COLUMN `instructor` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `rating` INTEGER NOT NULL;

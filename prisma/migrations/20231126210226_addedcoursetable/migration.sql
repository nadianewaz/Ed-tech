-- CreateTable
CREATE TABLE `courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `course_title` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `instructor` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

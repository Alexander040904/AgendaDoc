/*
  Warnings:

  - You are about to drop the column `consultation_amount` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `specialty` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Doctor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `consultationAmount` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Doctor` DROP FOREIGN KEY `Doctor_userId_fkey`;

-- DropIndex
DROP INDEX `Doctor_userId_key` ON `Doctor`;

-- AlterTable
ALTER TABLE `Doctor` DROP COLUMN `consultation_amount`,
    DROP COLUMN `specialty`,
    DROP COLUMN `userId`,
    ADD COLUMN `consultationAmount` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Discipline` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discipline` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorDiscipline` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctorId` INTEGER NOT NULL,
    `disciplineId` INTEGER NOT NULL,

    UNIQUE INDEX `DoctorDiscipline_doctorId_disciplineId_key`(`doctorId`, `disciplineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Doctor_user_id_key` ON `Doctor`(`user_id`);

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorDiscipline` ADD CONSTRAINT `DoctorDiscipline_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorDiscipline` ADD CONSTRAINT `DoctorDiscipline_disciplineId_fkey` FOREIGN KEY (`disciplineId`) REFERENCES `Discipline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

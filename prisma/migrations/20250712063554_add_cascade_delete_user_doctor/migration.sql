-- DropForeignKey
ALTER TABLE `Doctor` DROP FOREIGN KEY `Doctor_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

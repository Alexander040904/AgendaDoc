import { Module } from '@nestjs/common';
import { DoctorsController } from './infraestructure/controllers/doctors.controller';


@Module({
    controllers: [DoctorsController]
})
export class DoctorsModule {}

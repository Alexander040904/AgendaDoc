import { Module } from '@nestjs/common';
import { PatientsController } from './infrastructure/controllers/patients.controller';


@Module({
    controllers: [PatientsController]
})
export class PatientsModule {}

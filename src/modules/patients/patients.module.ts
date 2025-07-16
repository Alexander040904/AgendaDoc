import { Module } from '@nestjs/common';
import { PatientsController } from './infrastructure/controllers/patients.controller';
import { PrismaService } from 'src/core/databases/prisma.service';
import { CreatePatientUseCase } from './application/use-cases/create-patient.use-case';
import { GetPatientByIdUseCase } from './application/use-cases/getById-patient.use-case';
import { UpdatePatientUseCase } from './application/use-cases/update-patient.use-case';
import { PatientRepositoryPort } from './domain/interfaces/patient-repository.interface';
import { PrismaPatientRepository } from './infrastructure/repositories/prisma-patient.repository';


@Module({
    providers:[
        PrismaService,

        //useCase
        CreatePatientUseCase,
        GetPatientByIdUseCase,
        UpdatePatientUseCase,

        {provide:PatientRepositoryPort,
        useClass:PrismaPatientRepository,
        },
    ],

    exports:[CreatePatientUseCase, GetPatientByIdUseCase, UpdatePatientUseCase],
    controllers: [PatientsController]
})
export class PatientsModule {}

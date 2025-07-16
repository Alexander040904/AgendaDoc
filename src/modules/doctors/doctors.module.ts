import { Module } from '@nestjs/common';
import { DoctorsController } from './infraestructure/controllers/doctors.controller';
import { PrismaService } from 'src/core/databases/prisma.service';
import { CreateDoctorUseCase } from './application/use-cases/create-doctor.use-case';
import { GetDoctorByIdUseCase } from './application/use-cases/getById-doctor.use-case';
import { GetDoctorWithUserUseCase } from './application/use-cases/getWithUserById-doctor.user-case';
import { UpdateDoctorUseCase } from './application/use-cases/update-doctor.use-case';
import { DoctorRepositoryPort } from './domain/interfaces/doctor-repository.interface';
import { PrismaDoctorRepository } from './infraestructure/repositories/prisma-doctor.repository';

@Module({
    providers:[
        PrismaService,

        //usecase
        CreateDoctorUseCase,
        GetDoctorByIdUseCase,
        GetDoctorWithUserUseCase,
        UpdateDoctorUseCase,


        {provide:DoctorRepositoryPort,
        useClass:PrismaDoctorRepository,
        },
    ],
    exports:[CreateDoctorUseCase],
    controllers: [DoctorsController]
})
export class DoctorsModule {}

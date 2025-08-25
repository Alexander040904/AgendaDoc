import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/databases/prisma.service';
import { CreateAvailableScheduleDto } from './application/dtos/create-available-schedule-dto';
import { CreateAvailableScheduleUseCase } from './application/use-cases/create-available-schedule.use-case';
import { UpdateAvailableScheduleUseCase } from './application/use-cases/update-available-schedule.use-case';
import { DeleteAvailableScheduleUseCase } from './application/use-cases/delete-available-schedule.use-case';
import { AvailableScheduleRepositoryPort } from './domain/interfaces/available-schedule-repository.interface';
import { PrismaAvailableScheduleRepository } from './infraestructure/repositories/prisma-available-schedule.repository';
import { AvailableSchedulesController } from './infraestructure/controller/available-schedules.controller';

@Module({
    providers: [
        PrismaService,

        //use case
        CreateAvailableScheduleUseCase,
        UpdateAvailableScheduleUseCase,
        DeleteAvailableScheduleUseCase,

        {
            provide: AvailableScheduleRepositoryPort,
            useClass: PrismaAvailableScheduleRepository
        }
    ],
    controllers:[AvailableSchedulesController]

})
export class AvailableSchedulesModule {

}

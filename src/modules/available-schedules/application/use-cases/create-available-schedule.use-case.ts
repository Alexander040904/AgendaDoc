
import { AvailableSchedule } from '../../domain/entities/available-schedule';
import { AvailableScheduleRepositoryPort } from '../../domain/interfaces/available-schedule-repository.interface';
import { CreateAvailableScheduleDto } from '../dtos/create-available-schedule-dto';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateAvailableScheduleUseCase {
  constructor(
    private readonly repository: AvailableScheduleRepositoryPort
  ) {}


  async execute(dto: CreateAvailableScheduleDto): Promise<AvailableSchedule | null> {
  const availableSchedule = new AvailableSchedule({
    id: 0, // o null, o undefined, según como manejes el id
    doctorId: dto.doctorId,
    dayOfWeek: dto.dayOfWeek,
    startTime: dto.startTime,
    endTime: dto.endTime
  });

  return await this.repository.create(availableSchedule);
}
}

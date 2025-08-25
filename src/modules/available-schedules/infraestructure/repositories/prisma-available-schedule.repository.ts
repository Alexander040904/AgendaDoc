import { Injectable } from '@nestjs/common';
import { AvailableScheduleRepositoryPort } from '../../domain/interfaces/available-schedule-repository.interface';
import { AvailableSchedule } from '../../domain/entities/available-schedule';
import { PrismaService } from 'src/core/databases/prisma.service';
import { AvailableScheduleMapper } from '../mappers/available-schedule.mapper';

@Injectable()
export class PrismaAvailableScheduleRepository implements AvailableScheduleRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(available: AvailableSchedule): Promise<AvailableSchedule | null> {
    const result = await this.prisma.availableSchedule.create({
      data: {
        doctorId: available.doctorId,
        dayOfWeek: available.dayOfWeek,
        startTime: available.startTime,
        endTime: available.endTime,
      },
    });
    return AvailableScheduleMapper.toEntity(result);
  }

  async updatePartial(id: number, available: Partial<AvailableSchedule>): Promise<AvailableSchedule | null> {
    const dataToUpdate: any = {};
    if (available.doctorId !== undefined) dataToUpdate.doctorId = available.doctorId;
    if (available.dayOfWeek !== undefined) dataToUpdate.dayOfWeek = available.dayOfWeek;
    if (available.startTime !== undefined) dataToUpdate.startTime = available.startTime;
    if (available.endTime !== undefined) dataToUpdate.endTime = available.endTime;

    const result = await this.prisma.availableSchedule.update({
      where: { id },
      data: dataToUpdate,
    });
    return AvailableScheduleMapper.toEntity(result);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.availableSchedule.delete({ where: { id } });
  }

  async findById(id: number): Promise<AvailableSchedule | null> {
    const result = await this.prisma.availableSchedule.findUnique({
      where: { id },
    });
    if (!result) return null;
    return AvailableScheduleMapper.toEntity(result);
  }
}

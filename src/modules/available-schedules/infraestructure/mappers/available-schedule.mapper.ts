import { AvailableSchedule } from '../../domain/entities/available-schedule';

export class AvailableScheduleMapper {
  static toEntity(raw: any): AvailableSchedule {
    return new AvailableSchedule({
      id: raw.id,
      doctorId: raw.doctorId,
      dayOfWeek: raw.dayOfWeek,
      startTime: raw.startTime,
      endTime: raw.endTime,
    
    });
  }
}

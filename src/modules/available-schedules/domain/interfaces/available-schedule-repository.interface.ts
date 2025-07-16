import { AvailableSchedule } from "../entities/available-schedule";

/**
 * Puerto del repositorio de available schedules
 */
export abstract class AvailableScheduleRepositoryPort {
  abstract create(available: AvailableSchedule): Promise<AvailableSchedule | null>;

  abstract updatePartial(id: number, available: Partial<AvailableSchedule>): Promise<AvailableSchedule | null>;

  abstract delete(id: number): Promise<void>;

  //abstract findById(id: number): Promise<AvailableSchedule | null>;
}

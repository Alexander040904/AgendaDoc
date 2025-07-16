
import { AvailableSchedule } from '../../domain/entities/available-schedule';
import { AvailableScheduleRepositoryPort } from '../../domain/interfaces/available-schedule-repository.interface';


export class UpdateAvailableScheduleUseCase {
  constructor(
    private readonly repository: AvailableScheduleRepositoryPort
  ) {}

  async execute(id: number, data: Partial<AvailableSchedule>): Promise<AvailableSchedule | null> {
    return this.repository.updatePartial(id, data);
  }
}

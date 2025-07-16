
import { AvailableSchedule } from '../../domain/entities/available-schedule';
import { AvailableScheduleRepositoryPort } from '../../domain/interfaces/available-schedule-repository.interface';


export class CreateAvailableScheduleUseCase {
  constructor(
    private readonly repository: AvailableScheduleRepositoryPort
  ) {}

  async execute(data: Omit<AvailableSchedule, 'id'>): Promise<AvailableSchedule | null> {
    const availableSchedule = new AvailableSchedule({
      ...data,
      id: 0, // El repositorio debe ignorar o reemplazar este valor
    });

    return this.repository.create(availableSchedule);
  }
}

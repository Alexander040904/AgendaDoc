import { AvailableScheduleRepositoryPort } from '../../domain/interfaces/available-schedule-repository.interface';

export class DeleteAvailableScheduleUseCase {
  constructor(
    private readonly repository: AvailableScheduleRepositoryPort
  ) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

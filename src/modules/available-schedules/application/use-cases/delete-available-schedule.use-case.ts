import { AvailableScheduleRepositoryPort } from '../../domain/interfaces/available-schedule-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteAvailableScheduleUseCase {
  constructor(
    private readonly repository: AvailableScheduleRepositoryPort
  ) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

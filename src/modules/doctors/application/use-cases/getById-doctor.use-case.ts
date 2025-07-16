import { Injectable } from '@nestjs/common';
import { Doctor } from '../../domain/entities/doctor';
import { DoctorRepositoryPort } from '../../domain/interfaces/doctor-repository.interface';

@Injectable()
export class GetDoctorByIdUseCase {
  constructor(private readonly doctorRepository: DoctorRepositoryPort) {}

  async execute(id: number): Promise<Doctor | null> {
    return await this.doctorRepository.getById(id);
  }
}

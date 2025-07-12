import { Injectable } from '@nestjs/common';
import { Doctor } from '../../domain/entities/doctor';
import { DoctorRepositoryPort } from '../../domain/interfaces/doctor-repository.interface';
import { UpdateDoctorDto } from '../dtos/update-doctor.dto';

@Injectable()
export class UpdateDoctorUseCase {
  constructor(private readonly doctorRepository: DoctorRepositoryPort) {}

  async execute(id: number, dto: UpdateDoctorDto): Promise<Doctor | null> {
    return await this.doctorRepository.updatePartial(id, dto);
  }
}

import { Injectable } from '@nestjs/common';
import { DoctorWithUser } from '../../domain/types/doctor-with-user.type';
import { DoctorRepositoryPort } from '../../domain/interfaces/doctor-repository.interface';

@Injectable()
export class GetDoctorWithUserUseCase {
  constructor(private readonly doctorRepository: DoctorRepositoryPort) {}

  async execute(id: number): Promise<DoctorWithUser | null> {
    return await this.doctorRepository.getWithUserById(id);
  }
}

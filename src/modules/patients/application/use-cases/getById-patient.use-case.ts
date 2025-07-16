import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepositoryPort } from '../../domain/interfaces/patient-repository.interface';
import { Patient } from '../../domain/entities/patient';

@Injectable()
export class GetPatientByIdUseCase {
  constructor(private readonly patientRepository: PatientRepositoryPort) {}

  async execute(id: number): Promise<Patient> {
    const patient = await this.patientRepository.getById(id);

    if (!patient) {
      throw new NotFoundException('Paciente no encontrado');
    }

    return patient;
  }
}

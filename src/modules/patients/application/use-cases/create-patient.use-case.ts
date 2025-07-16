import { Injectable } from '@nestjs/common';
import { Patient } from '../../domain/entities/patient';
import { PatientRepositoryPort } from '../../domain/interfaces/patient-repository.interface';
import { CreatePatientDto } from '../dto/create-patient.dto';

@Injectable()
export class CreatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepositoryPort) {}

  async execute(dto: CreatePatientDto): Promise<Patient | null> {
    const patient = new Patient({
      id: 0,
      userId: dto.user_id,
      bloodType: dto.blood_type,
      weight: dto.weight,
      height: dto.height,
      medicalHistory: dto.medical_history,
      emergencyContact: dto.emergency_contact,
      createdAt: new Date(),
    });

    return await this.patientRepository.create(patient);
  }
}

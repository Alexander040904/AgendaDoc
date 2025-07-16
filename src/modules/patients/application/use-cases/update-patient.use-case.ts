import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientRepositoryPort } from '../../domain/interfaces/patient-repository.interface';
import { Patient } from '../../domain/entities/patient';
import { log } from 'console';


@Injectable()
export class UpdatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepositoryPort) {}

  async execute(id: number, dto: UpdatePatientDto): Promise<Patient | null >  {
  const partialPatient: Partial<Patient> = {
      bloodType: dto.blood_type,
      weight: dto.weight,
      height: dto.height,
      medicalHistory: dto.medical_history,
      emergencyContact: dto.emergency_contact,
      userId: dto.user_id,
    };
    return await this.patientRepository.updatePartial(id, partialPatient);
  }
}
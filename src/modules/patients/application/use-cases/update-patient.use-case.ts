import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientRepositoryPort } from '../../domain/interfaces/patient-repository.interface';
import { Patient } from '../../domain/entities/patient';

@Injectable()
export class UpdatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepositoryPort) {}

  async execute(id: number, dto: UpdatePatientDto): Promise<Patient> {
    const existing = await this.patientRepository.getById(id);

    if (!existing) {
      throw new NotFoundException('Paciente no encontrado');
    }

    const updated = new Patient({
      ...existing.value(),
      ...dto,
      updatedAt: new Date(),
    });

    const result = await this.patientRepository.updatePartial(id, updated);
    if (!result) {
      throw new NotFoundException('Error al actualizar paciente');
    }

    return result;
  }
}

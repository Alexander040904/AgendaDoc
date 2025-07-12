import { Patient } from '../entities/patient';

export abstract class PatientRepositoryPort {
  abstract getById(id: number): Promise<Patient | null>;
  abstract create(patient: Patient): Promise<Patient | null>;
  abstract updatePartial(id: number, patient: Partial<Patient>): Promise<Patient | null>;
  
}

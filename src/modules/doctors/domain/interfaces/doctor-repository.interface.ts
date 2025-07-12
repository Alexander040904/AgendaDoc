import { Doctor } from '../entities/doctor';
import { DoctorWithUser } from '../types/doctor-with-user.type';

/**
 * Puerto del repositorio de Doctor
 */
export abstract class DoctorRepositoryPort {
  abstract getById(id: number): Promise<Doctor | null>;
  abstract create(doctor: Doctor): Promise<Doctor | null>;
  abstract updatePartial(id: number, doctor: Partial<Doctor>): Promise<Doctor | null>;
  abstract delete(id: number): Promise<void>;

  /**
   * Obtiene un doctor junto con los datos de su usuario
   */
 abstract getWithUserById(id: number): Promise<DoctorWithUser | null>;
}

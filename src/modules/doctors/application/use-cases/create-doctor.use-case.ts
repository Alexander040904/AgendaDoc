import { Injectable } from "@nestjs/common";
import { Doctor } from "../../domain/entities/doctor";
import { DoctorRepositoryPort } from "../../domain/interfaces/doctor-repository.interface";
import { CreateDoctorDto } from "../dtos/create-doctor.dto";

/**
 * Caso de uso para registrar un doctor
 */
@Injectable()
export class CreateDoctorUseCase {
  // Requiere como provider el DoctorRepository
  constructor(private readonly doctorRepository: DoctorRepositoryPort) {}

  /**
   * Método para ejecutar el caso de uso
   * @param dto 
   * @returns Doctor registrado o null
   */
  async execute(dto: CreateDoctorDto): Promise<Doctor | null> {
    // Crear objeto de la entidad Doctor
    const doctor = new Doctor({
      id: 0, // o undefined, si lo manejas así
      userId: dto.user_id,
      consultationAmount: dto.consultationAmount,
    });

    return await this.doctorRepository.create(doctor);
  }
}

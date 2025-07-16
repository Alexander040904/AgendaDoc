// src/infrastructure/repositories/prisma-patient.repository.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/databases/prisma.service';
import { Patient } from '../../domain/entities/patient';
import { PatientRepositoryPort } from '../../domain/interfaces/patient-repository.interface';
import { Prisma } from '@prisma/client';
import { PatientMapper } from '../mappers/patient.mapper';

@Injectable()
export class PrismaPatientRepository implements PatientRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(patient: Patient): Promise<Patient | null> {
    try {
      const created = await this.prisma.patient.create({
        data: {
          user_id: patient.userId,
          blood_type: patient.bloodType,
          weight: patient.weight,
          height: patient.height,
          medical_history: patient.medicalHistory,
          emergency_contact: patient.emergencyContact,
        },
      });
      return PatientMapper.toDomain(created);
    } catch (error) {
      throw error;
    }
  }

  async getById(id: number): Promise<Patient | null> {
    const patient = await this.prisma.patient.findUnique({ where: { id } });
    return patient ? PatientMapper.toDomain(patient) : null;
  }

  async updatePartial(id: number, patient: Partial<Patient>): Promise<Patient | null> {
  try {
    console.log("repopsitory");
    
    console.log(patient);
    const result = await this.prisma.patient.update({
      where: { id },
      
      
      data: {
      ...(patient.bloodType !== undefined && { blood_type: patient.bloodType }),
      ...(patient.weight !== undefined && { weight: patient.weight }),
      ...(patient.height !== undefined && { height: patient.height }),
      ...(patient.medicalHistory !== undefined && { medical_history: patient.medicalHistory }),
      ...(patient.emergencyContact !== undefined && { emergency_contact: patient.emergencyContact }),
        
      },
    });
    console.log(result);
    

    return PatientMapper.toDomain(result);
    
   
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        return null;
      }
      throw error;
    }
  }
}

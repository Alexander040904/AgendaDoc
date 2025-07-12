// src/infrastructure/mappers/patient.mapper.ts

import { Patient as PrismaPatient } from '@prisma/client';
import { Patient } from '../../domain/entities/patient';

export class PatientMapper {
  static toDomain(prismaPatient: PrismaPatient): Patient {
    return new Patient({
      id: prismaPatient.id,
      userId: prismaPatient.user_id,
      bloodType: prismaPatient.blood_type ?? undefined,
      weight: prismaPatient.weight?.toNumber(), // Decimal a number
      height: prismaPatient.height?.toNumber(), // Decimal a number
      medicalHistory: prismaPatient.medical_history ?? undefined,
      emergencyContact: prismaPatient.emergency_contact ?? undefined,
      createdAt: prismaPatient.created_at,
      updatedAt: prismaPatient.updated_at ?? undefined,
    });
  }
}



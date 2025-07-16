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
   static toPersistence(patient: Partial<Patient>): any {
    return {
      ...(patient.bloodType !== undefined && { blood_type: patient.bloodType }),
      ...(patient.weight !== undefined && { weight: patient.weight }),
      ...(patient.height !== undefined && { height: patient.height }),
      ...(patient.medicalHistory !== undefined && { medical_history: patient.medicalHistory }),
      ...(patient.emergencyContact !== undefined && { emergency_contact: patient.emergencyContact }),
      ...(patient.userId !== undefined && { user_id: patient.userId }),
    };
  }
}



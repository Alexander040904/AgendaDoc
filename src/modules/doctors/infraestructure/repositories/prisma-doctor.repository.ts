import { Injectable } from '@nestjs/common';
import { DoctorRepositoryPort } from '../../domain/interfaces/doctor-repository.interface';
import { Doctor } from '../../domain/entities/doctor';
import { DoctorWithUser } from '../../domain/types/doctor-with-user.type';
import { PrismaService } from 'src/core/databases/prisma.service';
import { DoctorMapper } from '../mappers/doctor.mapper';


@Injectable()
export class PrismaDoctorRepository implements DoctorRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: number): Promise<Doctor | null> {
    const result = await this.prisma.doctor.findUnique({
      where: { id },
    });

    if (!result) return null;
    return DoctorMapper.toEntity(result);
  }

  async create(doctor: Doctor): Promise<Doctor | null> {
    const result = await this.prisma.doctor.create({
      data: {
        user_id: doctor.userId,
        consultationAmount: doctor.consultationAmount,
      },
    });

    return DoctorMapper.toEntity(result);
  }

  async updatePartial(id: number, doctor: Partial<Doctor>): Promise<Doctor | null> {
    const result = await this.prisma.doctor.update({
      where: { id },
      data: {
        consultationAmount: doctor.consultationAmount,
      },
    });

    return DoctorMapper.toEntity(result);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.doctor.delete({ where: { id } });
  }

  async getWithUserById(id: number): Promise<DoctorWithUser | null> {
    const result = await this.prisma.doctor.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            age: true,
            role_id: true,
          },
        },
      },
    });

    if (!result) return null;
    return DoctorMapper.toDoctorWithUser(result);
  }
}

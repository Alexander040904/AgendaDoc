// src/users/users.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { CreateDoctorDto } from './dto/doctor.dto';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string) {

    return this.prisma.user.findFirst({
      where: { email },
      include: { role: true },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const { name, email, password, age, role_id } = createUserDto;

    const existingUser = await this.prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está en uso');
    }

    const role = await this.prisma.role.findUnique({ where: { id: role_id } });
    if (!role) {
      throw new ConflictException('Rol no encontrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        age,
        role: { connect: { id: role_id } },
      },
    });
  }

  async createDoctor(createDoctorDto: CreateDoctorDto) {
    const { user_id, specialty, consultation_amount } = createDoctorDto;

    const user = await this.prisma.user.findUnique({ where: { id: user_id } });
    if (!user) {
      throw new ConflictException('Usuario no encontrado');
    }

    return this.prisma.doctor.create({
      data: {
        specialty,
        consultationAmount: consultation_amount,
        user: { connect: { id: user_id } },
      },
    });
  }
}

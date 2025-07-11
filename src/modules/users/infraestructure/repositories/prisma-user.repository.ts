import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/databases/prisma.service';
import { User } from '../../domain/entities/user';
import { UserRepositoryPort } from '../../domain/interfaces/user-repository.interface';
import { UserMapper } from '../mappers/user.mapper';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { EmailAlreadyExistsException } from '../../domain/exceptions/email-already-exists.exception';

@Injectable()
export class PrismaUserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<User | null> {
    try {
      const created = await this.prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
          age: user.age,
          role_id: user.roleId,
        },
      });
      return UserMapper.toDomain(created);
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002' &&
        ((typeof error.meta?.target === 'string' &&
          error.meta.target.includes('email')) ||
          (Array.isArray(error.meta?.target) &&
            error.meta.target.includes('email')))
      ) {
        throw new EmailAlreadyExistsException(user.email);
      }
       throw error;
    }
  }

  async getById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? UserMapper.toDomain(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? UserMapper.toDomain(user) : null;
  }

  async updatePartial(id: number, user: Partial<User>): Promise<User | null> {
    try {
      const updated = await this.prisma.user.update({
        where: { id },
        data: {
          // Solo asignamos los campos definidos para evitar sobrescribir con undefined
          ...(user.name !== undefined && { name: user.name }),
          ...(user.email !== undefined && { email: user.email }),
          ...(user.password !== undefined && { password: user.password }),
          ...(user.age !== undefined && { age: user.age }),
          ...(user.roleId !== undefined && { role_id: user.roleId }),
        },
      });
      return UserMapper.toDomain(updated);
    } catch (error) {
      // Si falla porque no existe el registro, devuelve null
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025' // Código error "Record to update not found."
      ) {
        return null;
      }
      throw error; // Otros errores se re-lanzan
    }
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}

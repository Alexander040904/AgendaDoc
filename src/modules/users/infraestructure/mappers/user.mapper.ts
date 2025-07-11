import { User as PrismaUser } from '@prisma/client';
import { User } from '../../domain/entities/user';

export class UserMapper {
  /**
   * Convierte un objeto PrismaUser (de la base de datos) a entidad User de dominio
   */
  static toDomain(prismaUser: PrismaUser): User {
    return new User({
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email,
      password: prismaUser.password,
      age: prismaUser.age,
      roleId: prismaUser.role_id,
      createdAt: prismaUser.createdAt,
      updatedAt: prismaUser.updatedAt ?? undefined,
    });
  }

  /**
   * (Opcional) Si necesitas convertir la entidad User a formato para Prisma
   */
  static toPersistence(user: User): PrismaUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      age: user.age,
      role_id: user.roleId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt ?? new Date()
    };
  }
}

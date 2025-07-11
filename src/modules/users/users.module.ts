import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UpdateUserUseCase } from './application/use-cases/update-user.use-case';
import { UserRepositoryPort } from './domain/interfaces/user-repository.interface';
import { PrismaUserRepository } from './infraestructure/repositories/prisma-user.repository';
import { PrismaService } from 'src/core/databases/prisma.service';
import { FindByEmailUserUseCase } from './application/use-cases/findByEmail-user.use-case';

@Module({
  providers: [
    PrismaService,

    // Use Cases
    CreateUserUseCase,
    UpdateUserUseCase,
    FindByEmailUserUseCase,

    // Repository Binding
    {
      provide: UserRepositoryPort,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [
    CreateUserUseCase,
    UpdateUserUseCase,
    FindByEmailUserUseCase
  ],
})
export class UserModule {}

import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../domain/interfaces/user-repository.interface';
import { User } from '../../domain/entities/user';

@Injectable()
export class FindByEmailUserUseCase {
  constructor(private readonly userRepo: UserRepositoryPort) {}

  async execute(email: string): Promise<User | null> {
    return this.userRepo.findByEmail(email);
  }
}

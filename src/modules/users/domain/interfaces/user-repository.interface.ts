import { UpdateUserDto } from '../../application/dtos/update-user.dto';
import { User } from '../entities/user';

export abstract class UserRepositoryPort {
  abstract getById(id: number): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: User): Promise<User | null>;
  abstract updatePartial(id: number, user: Partial<User>): Promise<User | null>;
  abstract delete(id: number): Promise<void>;
}


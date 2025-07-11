import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserRepositoryPort } from '../../domain/interfaces/user-repository.interface';
import { User } from '../../domain/entities/user';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(id: number, dto: UpdateUserDto): Promise<User> {
    const existingUser = await this.userRepository.getById(id);

    if (!existingUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const updatedUser = new User({
      ...existingUser.value(),
      ...dto,
    });

    const result = await this.userRepository.updatePartial(id, updatedUser);

    if (!result) {
      throw new NotFoundException('Error al actualizar usuario');
    }

    return result;
  }
}

import { Injectable } from "@nestjs/common";
import { User } from "../../domain/entities/user";
import { UserRepositoryPort } from "../../domain/interfaces/user-repository.interface";
import { CreateUserDto } from "../dtos/create-user.dto";
import * as bcrypt from 'bcrypt';
/**
 * Caso de uso para registrar producto
 */
@Injectable()
export class CreateUserUseCase{
  // requerir como provider el ProductRepository
  constructor(private readonly userRepository: UserRepositoryPort){}

  /**
   * Método para ejecutar el caso de uso
   * @param dto 
   * @returns Producto registrado o null
   */
  async execute(dto: CreateUserDto): Promise<User | null> {
    const hashedPassword = await bcrypt.hash(dto.password, 10); // 10 es el número de "salt rounds"

    
    // crear objeto de la entidad Product
    const user = new User({
      id: 0, // o undefined, dependiendo cómo lo manejas
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      age: dto.age,
      roleId: dto.role_id,
    });

    return await this.userRepository.create(user);
  }
}


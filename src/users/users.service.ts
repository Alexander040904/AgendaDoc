import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './types/user.type';
import * as bcrypt from 'bcrypt';
import { use } from 'passport';
import { UserDto } from './types/user.dto';


@Injectable()
export class UsersService {
  #users: User[];
  constructor() {
    this.#users = [];
  }

  findOne(useremail: string): User {
    const user = this.#users.find((user) => user.email === useremail);
    if (!user) {
      throw new NotFoundException(`User con email ${useremail} no encontrado`);
    }
    return user;
  }

  async create(user: UserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
      const maxId = this.#users.reduce(
      (max, user) => (user.id > max ? user.id : max),
      0,
    );
    const newUser: User = {
      id: maxId + 1,
      email: user.email,
      name: user.name,
      password: hashedPassword,
      active:true
    };

    this.#users.push(newUser);
    return newUser;
  }
}

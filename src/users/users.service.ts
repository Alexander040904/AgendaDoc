import { Injectable, NotFoundException } from '@nestjs/common';
//import { User } from './types/user.type';
import * as bcrypt from 'bcrypt';
import { use } from 'passport';
import { UserDto } from './types/user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateUserDto } from './dto/user.dto';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/doctor.dto';

@Injectable()
export class UsersService {
  #users: User[];
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {
    this.#users = [];
  }

  /*
  findOne(useremail: string): User {
    const user = this.#users.find((user) => user.email === useremail);
    if (!user) {
      throw new NotFoundException(`User con email ${useremail} no encontrado`);
    }
    return user;
  }
*/
  /*
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
*/
  findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email: email },
      relations: ['role'],
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, age, role_id } = createUserDto;

    const role = await this.rolesRepository.findOneBy({ id: role_id });
    if (!role) {
      throw new Error('Rol no encontrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      age,
      role,
    });

    return this.usersRepository.save(user);
  }

 async createDoctor(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
  const { user_id, specialty, consultation_amount } = createDoctorDto;

  const user = await this.usersRepository.findOne({
    where: { id: user_id },
  });

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const doctor = this.doctorsRepository.create({
    specialty,
    consultation_amount,
    user,
  });

  return this.doctorsRepository.save(doctor);
}


}

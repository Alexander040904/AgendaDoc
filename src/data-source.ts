import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { Doctor } from './users/entities/doctor.entity';
import { Role } from './users/entities/role.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',               
  port: 3306,
  username: 'appUser',                
  password: 'AppUser@123',       
  database: 'VetFinder_backup',          
  synchronize: false,              
  logging: true,
  entities: [User, Doctor, Role],
  migrations: ['src/migrations/*.ts'],
});

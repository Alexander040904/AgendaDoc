import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Doctor } from './entities/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Doctor])],
  providers: [UsersService],
  exports:[UsersService, TypeOrmModule],
  
})
export class UsersModule {}

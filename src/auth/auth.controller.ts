import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UserDto } from 'src/users/types/user.dto';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateDoctorDto } from 'src/users/dto/doctor.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.createJWT(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    return req.logout();
  }

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    const user = await this.usersService.create(userData);

    return this.authService.createJWT(user);

  
  }

  @UseGuards(JwtAuthGuard)
  @Post('registerDoctor')
  async registerDoctors(@Body() userData: CreateDoctorDto){
    const user = await this.usersService.createDoctor(userData);
  }
  
}



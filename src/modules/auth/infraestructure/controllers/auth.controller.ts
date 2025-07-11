import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

import { CreateUserDto } from 'src/modules/users/application/dtos/create-user.dto';
import { CreateDoctorDto } from 'src/modules/users/application/dtos/doctor.dto';
import { CreateUserUseCase } from 'src/modules/users/application/use-cases/create-user.use-case';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';
import { Public } from 'src/core/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    //private readonly usersService: UsersService,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.createJWT(req.user);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    return req.logout();
  }

  /*   @Public()
  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    const user = await this.usersService.create(userData);

    return this.authService.createJWT(user);

  
  } */

  @Public()
  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    const user = await this.createUserUseCase.execute(userData);
    return this.authService.createJWT(user);
  }
  /* 
  
  @Post('registerDoctor')
  async registerDoctors(@Body() userData: CreateDoctorDto){
    const user = await this.usersService.createDoctor(userData);
    return user;
  } */
}

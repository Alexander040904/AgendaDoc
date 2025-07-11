import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,private jwtService: JwtService ) {}

async validateUser(useremail: string, pass: string): Promise<any> {
  const user = await this.usersService.findOne(useremail);

  if (!user) return null; // Evita error si no existe

  const isMatch = await bcrypt.compare(pass, user.password);

  if (isMatch) {
    const { password, ...result } = user;
    return result;
  }

  return null;
}

  async createJWT(user: any) {
    const payload = { username: user.name, sub: user.id };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}

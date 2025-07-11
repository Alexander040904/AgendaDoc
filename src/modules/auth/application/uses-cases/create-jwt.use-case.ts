import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CreateJwtUseCase {
  constructor(private readonly jwtService: JwtService) {}

  async execute(user: any) {
    const payload = { username: user.name, sub: user.id };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}

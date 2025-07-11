import { Injectable } from '@nestjs/common';
import { ValidateUserUseCase } from '../../application/uses-cases/validate-user.use-case';
import { CreateJwtUseCase } from '../../application/uses-cases/create-jwt.use-case';



@Injectable()
export class AuthService {
  constructor(
    private readonly validateUserUseCase: ValidateUserUseCase,
    private readonly createJwtUseCase: CreateJwtUseCase,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    return this.validateUserUseCase.execute(email, pass);
  }

  async createJWT(user: any) {
    return this.createJwtUseCase.execute(user);
  }
}
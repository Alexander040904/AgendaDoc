import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { FindByEmailUserUseCase } from 'src/modules/users/application/use-cases/findByEmail-user.use-case';

@Injectable()
export class ValidateUserUseCase {
  constructor(private readonly findByEmailUserUseCase: FindByEmailUserUseCase) {}

  async execute(email: string, pass: string): Promise<any> {
    const user = await this.findByEmailUserUseCase.execute(email);
    if (!user) return null;

    const isMatch = await bcrypt.compare(pass, user.password);
    if (isMatch) {
      const { password, ...result } = user.value();
      return result;
    }
    return null;
  }
}

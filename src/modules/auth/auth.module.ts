// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './infraestructure/services/auth.service';

import { UserModule } from 'src/modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './infraestructure/strategies/local.strategy';
import { AuthController } from './infraestructure/controllers/auth.controller';

import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './infraestructure/strategies/jwt.strategy';
import { ValidateUserUseCase } from './application/uses-cases/validate-user.use-case';
import { CreateJwtUseCase } from './application/uses-cases/create-jwt.use-case';

@Module({
  imports: [
    UserModule,
    PassportModule,
    ConfigModule, // ✅ agregar esta línea

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXP') },
      }),
    }),
  ],
  providers: [AuthService,LocalStrategy, JwtStrategy,ValidateUserUseCase,CreateJwtUseCase ],
  controllers: [AuthController],
})
export class AuthModule {}


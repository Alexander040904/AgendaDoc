import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/users.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { PatientsModule } from './modules/patients/patients.module';
import { PatientsController } from './modules/patients/infrastructure/controllers/patients.controller';

import { JwtAuthGuard } from './modules/auth/infraestructure/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { AvailableSchedulesController } from './modules/available-schedules/infraestructure/controller/available-schedules.controller';
import { AvailableSchedulesModule } from './modules/available-schedules/available-schedules.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    DoctorsModule,
    PatientsModule,
    AvailableSchedulesModule,
  ],
  controllers: [AppController, PatientsController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

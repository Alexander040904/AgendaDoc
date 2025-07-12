import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/users.module';
import { PatientsModule } from './modules/patients/patients.module';
import { PatientsController } from './modules/patients/infrastructure/controllers/patients.controller';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ agregar esto
    AuthModule,
    UserModule,
    PatientsModule,
  ],
  controllers: [AppController, PatientsController],
  providers: [AppService],
})
export class AppModule {}

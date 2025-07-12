import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/users.module';
import { DoctorsModule } from './modules/doctors/doctors.module';




@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ agregar esto
    AuthModule,
    UserModule,
    DoctorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

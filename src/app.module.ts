import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Para que ConfigService esté disponible en toda la app
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa el módulo para poder inyectar ConfigService
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [],  // Aquí pones tus entidades
        synchronize: true,
      }),
      inject: [ConfigService],
    }), AuthModule, UsersModule
  ],
})
export class AppModule {}

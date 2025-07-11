import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './core/infraestructure/filters/all-exceptions.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar el ValidationPipe globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades que no están definidas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si hay propiedades no definidas en el DTO
      transform: true, // Transforma los payloads a instancias del DTO
      transformOptions: {
        enableImplicitConversion: true, // Intenta convertir automáticamente los tipos (ej. "123" a número)
      },
    }),
  );

app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
import { IsNotEmpty, IsString, IsNumber, Matches } from 'class-validator';

export class CreateAvailableScheduleDto {
  @IsNotEmpty({ message: "El ID del doctor es obligatorio." })
  @IsNumber({}, { message: "El ID del doctor debe ser un número." })
  doctorId: number;

  @IsNotEmpty({ message: "El día de la semana es obligatorio." })
  @IsString({ message: "El día de la semana debe ser una cadena de texto." })
  dayOfWeek: string;

  @IsNotEmpty({ message: 'La hora de inicio es obligatoria.' })
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'La hora de inicio debe tener el formato HH:mm o HH:mm:ss.',
  })
  startTime: string;

  @IsNotEmpty({ message: 'La hora de fin es obligatoria.' })
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'La hora de fin debe tener el formato HH:mm o HH:mm:ss.',
  })
  endTime: string;
}

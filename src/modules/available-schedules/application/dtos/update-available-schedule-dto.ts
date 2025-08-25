import { IsOptional, IsString, IsNumber, Matches } from 'class-validator';

export class UpdateAvailableScheduleDto {

  @IsOptional()
  @IsString({ message: "El día de la semana debe ser una cadena de texto." })
  dayOfWeek?: string;

  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, {
    message: "La hora de inicio debe tener el formato HH:mm o HH:mm:ss.",
  })
  startTime?: string;

  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, {
    message: "La hora de fin debe tener el formato HH:mm o HH:mm:ss.",
  })
  endTime?: string;
}

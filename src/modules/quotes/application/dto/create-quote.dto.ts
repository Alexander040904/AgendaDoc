import {IsNotEmpty,IsNumber,IsDateString,IsBoolean,
} from 'class-validator';

export class CreateQuoteDto {
  @IsNotEmpty({ message: 'El ID del doctor es obligatorio.' })
  @IsNumber({}, { message: 'El ID del doctor debe ser un número.' })
  doctorId: number;

  @IsNotEmpty({ message: 'El ID del paciente es obligatorio.' })
  @IsNumber({}, { message: 'El ID del paciente debe ser un número.' })
  patientId: number;

  @IsNotEmpty({ message: 'La fecha de la cita es obligatoria.' })
  @IsDateString({}, { message: 'La fecha debe tener un formato válido.' })
  date: string;

  @IsNotEmpty({ message: 'El estado de la cita es obligatorio.' })
  @IsBoolean({ message: 'El estado debe ser un valor booleano (true o false).' })
  status: boolean;
}

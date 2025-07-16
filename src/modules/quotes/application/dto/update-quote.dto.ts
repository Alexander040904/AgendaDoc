import {IsOptional,IsNumber,IsDateString,IsBoolean,
} from 'class-validator';

export class UpdateQuoteDto {
  @IsOptional()
  @IsNumber({}, { message: 'El ID del doctor debe ser un número.' })
  doctorId?: number;

  @IsOptional()
  @IsNumber({}, { message: 'El ID del paciente debe ser un número.' })
  patientId?: number;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha debe tener un formato válido (ISO 8601).' })
  date?: string;

  @IsOptional()
  @IsBoolean({ message: 'El estado debe ser un valor booleano (true o false).' })
  status?: boolean;
}

import { IsOptional, IsNumber } from 'class-validator';

export class UpdateDoctorDto {
  @IsOptional()
  @IsNumber({}, { message: "El monto de consulta debe ser un número." })
  consultationAmount?: number;
}

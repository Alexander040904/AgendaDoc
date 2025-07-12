import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty({ message: "El ID de usuario es obligatorio." })
  @IsNumber({}, { message: "El ID de usuario debe ser un número." })
  user_id: number;

  @IsNotEmpty({ message: "El monto de consulta es obligatorio." })
  @IsNumber({}, { message: "El monto de consulta debe ser un número." })
  consultationAmount: number;
}

import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty({ message: "El ID de usuario es obligatorio." })
  @IsNumber({}, { message: "El ID de usuario debe ser un número." })
  user_id: number;

  @IsNotEmpty({ message: "La especialidad es obligatoria." })
  @IsString({ message: "La especialidad debe ser una cadena de texto." })
  specialty: string;

  @IsNotEmpty({ message: "El monto de la consulta es obligatorio." })
  @IsNumber({}, { message: "El monto de la consulta debe ser un número." })
  consultation_amount: number;
}

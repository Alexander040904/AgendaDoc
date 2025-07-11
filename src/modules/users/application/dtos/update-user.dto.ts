import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: "El nombre debe ser una cadena de texto." })
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: "El correo electrónico no tiene un formato válido." })
  email?: string;

  @IsOptional()
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres." })
  password?: string;

  @IsOptional()
  @IsNumber({}, { message: "La edad debe ser un número." })
  age?: number;

  @IsOptional()
  @IsNumber({}, { message: "El rol debe ser un número." })
  role_id?: number;
}

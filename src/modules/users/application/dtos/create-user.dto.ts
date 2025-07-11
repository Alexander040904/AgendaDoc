import { IsEmail, IsNotEmpty, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: "El nombre es obligatorio." })
  @IsString({ message: "El nombre debe ser una cadena de texto." })
  name: string;

  @IsNotEmpty({ message: "El correo electrónico es obligatorio." })
  @IsEmail({}, { message: "El correo electrónico no tiene un formato válido." })
  email: string;

  @IsNotEmpty({ message: "La contraseña es obligatoria." })
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres." })
  password: string;

  @IsNotEmpty({ message: "La edad es obligatoria." })
  @IsNumber({}, { message: "La edad debe ser un número." })
  age: number;

  @IsNotEmpty({ message: "El rol es obligatorio." })
  @IsNumber({}, { message: "El rol debe ser un número." })
  role_id: number;
}


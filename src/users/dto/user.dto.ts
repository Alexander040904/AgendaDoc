import { IsEmail, IsNotEmpty, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNumber()
  age: number;

  @IsNumber()
  role_id: number;
}

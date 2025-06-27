import { IsEmail, IsNotEmpty, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateDoctorDto {
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  specialty: string;


  @IsNumber()
  consultation_amount: number;

  
}

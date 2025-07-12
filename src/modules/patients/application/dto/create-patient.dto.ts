import {IsNotEmpty,IsOptional,IsString,IsNumber,IsIn,MaxLength,Min,} from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty({ message: 'El ID de usuario es obligatorio.' })
  @IsNumber({}, { message: 'El ID de usuario debe ser un número.' })
  user_id: number;

  @IsNotEmpty()
  @IsString({ message: 'El tipo de sangre debe ser una cadena de texto.' })
  @MaxLength(5, { message: 'El tipo de sangre no debe superar 5 caracteres.' })
  @IsIn(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    message: 'El tipo de sangre no es válido.',
  })
  blood_type?: string;

  @IsNotEmpty()
 @IsNumber({}, { message: 'El peso debe ser un número.' })
 @Min(0, { message: 'El peso no puede ser negativo.' })
 weight?: number;

 @IsNotEmpty()
 @IsNumber({}, { message: 'La estatura debe ser un número.' })
 @Min(0, { message: 'La estatura no puede ser negativa.' })
 height?: number;

  @IsNotEmpty()
  @IsString({ message: 'El historial médico debe ser una cadena de texto.' })
  medical_history?: string;

  @IsOptional()
  @IsString({ message: 'El contacto de emergencia debe ser una cadena de texto.' })
  @MaxLength(150, { message: 'El contacto de emergencia no debe superar 150 caracteres.' })
  emergency_contact?: string;
}

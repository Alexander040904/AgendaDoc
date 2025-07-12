import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsDecimal,
  IsIn,
  MaxLength,
} from 'class-validator';

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
  @IsDecimal({ decimal_digits: '0,2' }, {
    message: 'El peso debe ser un número decimal con hasta 2 decimales.',
  })
  weight?: number;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '0,2' }, {
    message: 'La estatura debe ser un número decimal con hasta 2 decimales.',
  })
  height?: number;

  @IsNotEmpty()
  @IsString({ message: 'El historial médico debe ser una cadena de texto.' })
  medical_history?: string;

  @IsOptional()
  @IsString({ message: 'El contacto de emergencia debe ser una cadena de texto.' })
  @MaxLength(150, { message: 'El contacto de emergencia no debe superar 150 caracteres.' })
  emergency_contact?: string;
}

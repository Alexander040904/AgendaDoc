import { Body, Controller, Post } from '@nestjs/common';
import { CreatePatientDto } from 'src/modules/patients/application/dto/create-patient.dto';
import { CreatePatientUseCase } from 'src/modules/patients/application/use-cases/create-patient.use-case';


@Controller('patients')
export class PatientsController {
  constructor(
    private readonly createPatientUseCase: CreatePatientUseCase,
  ) {}

  @Post('register')
  async register(@Body() patientData: CreatePatientDto) {
    const patient = await this.createPatientUseCase.execute(patientData);
    return patient;
  }
}

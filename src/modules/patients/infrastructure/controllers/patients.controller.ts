import { Body, Controller, Get,Patch, Param, Post, Put, ParseIntPipe,NotFoundException, } from '@nestjs/common';
import { CreatePatientDto } from 'src/modules/patients/application/dto/create-patient.dto';

import { CreatePatientUseCase } from 'src/modules/patients/application/use-cases/create-patient.use-case';

import { GetPatientByIdUseCase } from '../../application/use-cases/getById-patient.use-case';
import { UpdatePatientUseCase } from '../../application/use-cases/update-patient.use-case';
import { UpdatePatientDto } from '../../application/dto/update-patient.dto';


@Controller('patients')
export class PatientsController {
  constructor(
    private readonly createPatientUseCase: CreatePatientUseCase,
    private readonly updatePatientUseCase: UpdatePatientUseCase,
    private readonly getPatientByIdUseCase: GetPatientByIdUseCase,
  ) { console.log('PatientsController cargado correctamente');}

  @Post('register')
  async register(@Body() patientData: CreatePatientDto) {
    const patient = await this.createPatientUseCase.execute(patientData);
    return patient;
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const patient = await this.getPatientByIdUseCase.execute(id);
    return patient;
  }

  @Patch(':id')
async update(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateData: UpdatePatientDto,
) {
  console.log("inicio");
  
  console.log(updateData);
  
  const updated = await this.updatePatientUseCase.execute(id, updateData)
  console.log("controlador");
  
   console.log(updated);
  return updated;
}

}

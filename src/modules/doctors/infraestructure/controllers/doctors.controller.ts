import { Controller, Get, Post, Patch, Param, Body, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { CreateDoctorDto } from '../../application/dtos/create-doctor.dto';
import { UpdateDoctorDto } from '../../application/dtos/update-doctor.dto';
import { CreateDoctorUseCase } from '../../application/use-cases/create-doctor.use-case';
import { UpdateDoctorUseCase } from '../../application/use-cases/update-doctor.use-case';
import { GetDoctorByIdUseCase } from '../../application/use-cases/getById-doctor.use-case';
import { GetDoctorWithUserUseCase } from '../../application/use-cases/getWithUserById-doctor.user-case';
import { Public } from 'src/core/decorators/public.decorator';

@Controller('doctors')
export class DoctorsController {
  constructor(
    private readonly createDoctorUseCase: CreateDoctorUseCase,
    private readonly updateDoctorUseCase: UpdateDoctorUseCase,
    private readonly getDoctorByIdUseCase: GetDoctorByIdUseCase,
    private readonly getDoctorWithUserUseCase: GetDoctorWithUserUseCase,
  ) {}

  @Public()
  @Post("registre")
  async create(@Body() dto: CreateDoctorDto) {
    const doctor = await this.createDoctorUseCase.execute(dto);
    if (!doctor) {
      throw new HttpException('No se pudo crear el doctor.', HttpStatus.BAD_REQUEST);
    }
    return doctor.value();
  }

  @Public()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDoctorDto
  ) {
    const doctor = await this.updateDoctorUseCase.execute(id, dto);
    if (!doctor) {
      throw new HttpException('Doctor no encontrado.', HttpStatus.NOT_FOUND);
    }
    return doctor.value();
  }
  
  @Public()
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const doctor = await this.getDoctorByIdUseCase.execute(id);
    if (!doctor) {
      throw new HttpException('Doctor no encontrado.', HttpStatus.NOT_FOUND);
    }
    return doctor.value();
  }

  @Public()
  @Get(':id/with-user')
  async getWithUser(@Param('id', ParseIntPipe) id: number) {
    const result = await this.getDoctorWithUserUseCase.execute(id);
    if (!result) {
      throw new HttpException('Doctor no encontrado.', HttpStatus.NOT_FOUND);
    }

    return {
      doctor: result.doctor.value(),
      user: result.user,
    };
  }
}

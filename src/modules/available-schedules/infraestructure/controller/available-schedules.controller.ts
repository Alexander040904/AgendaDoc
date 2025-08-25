import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

import { CreateAvailableScheduleUseCase } from '../../application/use-cases/create-available-schedule.use-case';
import { UpdateAvailableScheduleUseCase } from '../../application/use-cases/update-available-schedule.use-case';

import { DeleteAvailableScheduleUseCase } from '../../application/use-cases/delete-available-schedule.use-case';
import { Public } from 'src/core/decorators/public.decorator';
import { CreateAvailableScheduleDto } from '../../application/dtos/create-available-schedule-dto';
import { UpdateAvailableScheduleDto } from '../../application/dtos/update-available-schedule-dto';
import { AvailableSchedule } from '../../domain/entities/available-schedule';

@Controller('available-schedules')
export class AvailableSchedulesController {
  constructor(
    private readonly createAvailableScheduleUseCase: CreateAvailableScheduleUseCase,
    private readonly updateAvailableScheduleUseCase: UpdateAvailableScheduleUseCase,
  
    private readonly deleteAvailableScheduleUseCase: DeleteAvailableScheduleUseCase,
  ) {}


  @Public()
  @Post('register')
  async create(@Body() dto: CreateAvailableScheduleDto) {
    const availableSchedule = await this.createAvailableScheduleUseCase.execute(dto);
    if (!availableSchedule) {
      throw new HttpException('No se pudo crear el horario disponible.', HttpStatus.BAD_REQUEST);
    }
    return availableSchedule.value();
  }

  
  @Public()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAvailableScheduleDto,
  ) {
    const availableSchedule = await this.updateAvailableScheduleUseCase.execute(id, dto);
    if (!availableSchedule) {
      throw new HttpException('Horario disponible no encontrado.', HttpStatus.NOT_FOUND);
    }
    return availableSchedule.value();
  }


  @Public()
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.deleteAvailableScheduleUseCase.execute(id);
    return { message: 'Horario disponible eliminado correctamente.' };
  }
}

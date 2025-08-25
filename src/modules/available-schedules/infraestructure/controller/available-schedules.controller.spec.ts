import { Test, TestingModule } from '@nestjs/testing';
import { AvailableSchedulesController } from './available-schedules.controller';

describe('AvailableSchedulesController', () => {
  let controller: AvailableSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailableSchedulesController],
    }).compile();

    controller = module.get<AvailableSchedulesController>(AvailableSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

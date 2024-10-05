import { Test, TestingModule } from '@nestjs/testing';
import { ExoplanetController } from './exoplanet.controller';
import { ExoplanetService } from './exoplanet.service';

describe('ExoplanetController', () => {
  let controller: ExoplanetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExoplanetController],
      providers: [ExoplanetService],
    }).compile();

    controller = module.get<ExoplanetController>(ExoplanetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

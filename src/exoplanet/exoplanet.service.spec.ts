import { Test, TestingModule } from '@nestjs/testing';
import { ExoplanetService } from './exoplanet.service';

describe('ExoplanetService', () => {
  let service: ExoplanetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExoplanetService],
    }).compile();

    service = module.get<ExoplanetService>(ExoplanetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

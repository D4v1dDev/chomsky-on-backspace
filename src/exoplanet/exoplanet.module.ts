import { Module } from '@nestjs/common';
import { ExoplanetService } from './exoplanet.service';
import { ExoplanetController } from './exoplanet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExoplanetSchema } from './entities/exoplanet.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Exoplanet', schema: ExoplanetSchema }])],
  controllers: [ExoplanetController],
  providers: [ExoplanetService],
})
export class ExoplanetModule {}

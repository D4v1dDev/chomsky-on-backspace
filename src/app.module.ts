import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExoplanetModule } from './exoplanet/exoplanet.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../../.env' });

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/exoplanet'), ExoplanetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

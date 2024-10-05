import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ExoplanetService } from './exoplanet.service';
import { CreateExoplanetDto } from './dto/create-exoplanet.dto';
import { UpdateExoplanetDto } from './dto/update-exoplanet.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('exoplanet')
export class ExoplanetController {
  constructor(private readonly exoplanetService: ExoplanetService) {}

  @Post()
  create(@Body() createExoplanetDto: CreateExoplanetDto) {
    return this.exoplanetService.create(createExoplanetDto);
  }

  @Get()
  @ApiQuery({ name: 'solarSystem', required: false, type: String })
  findAll(@Query('solarSystem') solarSystem?: string) {
    return this.exoplanetService.findAll({ solarSystem });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exoplanetService.findOne(id);
  }

  @Get(':id/habitability')
  getEarthSimilarity(@Param('id') id: string) {
    return this.exoplanetService.calculateById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExoplanetDto: UpdateExoplanetDto) {
    return this.exoplanetService.update(id, updateExoplanetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exoplanetService.remove(id);
  }
}

export interface FindParams {
  solarSystem?: string;
}

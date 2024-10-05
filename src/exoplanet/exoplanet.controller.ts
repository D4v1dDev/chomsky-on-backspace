import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExoplanetService } from './exoplanet.service';
import { CreateExoplanetDto } from './dto/create-exoplanet.dto';
import { UpdateExoplanetDto } from './dto/update-exoplanet.dto';

@Controller('exoplanet')
export class ExoplanetController {
  constructor(private readonly exoplanetService: ExoplanetService) {}

  @Post()
  create(@Body() createExoplanetDto: CreateExoplanetDto) {
    return this.exoplanetService.create(createExoplanetDto);
  }

  @Get()
  findAll() {
    return this.exoplanetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exoplanetService.findOne(id);
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

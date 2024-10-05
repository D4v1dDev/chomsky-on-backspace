import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExoplanetDto } from './dto/create-exoplanet.dto';
import { UpdateExoplanetDto } from './dto/update-exoplanet.dto';
import { Exoplanet, ExoplanetDocument } from './entities/exoplanet.entity';

@Injectable()
export class ExoplanetService {
  constructor(@InjectModel('Exoplanet') private readonly exoplanetModel: Model<ExoplanetDocument>) {}

  async create(createExoplanetDto: CreateExoplanetDto): Promise<Exoplanet> {
    const createdExoplanet = new this.exoplanetModel(createExoplanetDto);
    return createdExoplanet.save();
  }

  async findAll(): Promise<Exoplanet[]> {
    return this.exoplanetModel.find().exec();
  }

  async findOne(id: string): Promise<Exoplanet> {
    return this.exoplanetModel.findById(id).exec();
  }

  async update(id: string, updateExoplanetDto: UpdateExoplanetDto): Promise<Exoplanet> {
    return this.exoplanetModel.findByIdAndUpdate(id, updateExoplanetDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Exoplanet> {
    return this.exoplanetModel.findByIdAndDelete(id).exec();
  }
}

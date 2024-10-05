import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExoplanetDto } from './dto/create-exoplanet.dto';
import { UpdateExoplanetDto } from './dto/update-exoplanet.dto';
import { Earth, Exoplanet, ExoplanetDocument } from './entities/exoplanet.entity';
import { FindParams } from './exoplanet.controller';

@Injectable()
export class ExoplanetService {
  constructor(@InjectModel('Exoplanet') private readonly exoplanetModel: Model<ExoplanetDocument>) {}

  async create(createExoplanetDto: CreateExoplanetDto): Promise<Exoplanet> {
    const createdExoplanet = new this.exoplanetModel(createExoplanetDto);
    return createdExoplanet.save();
  }

  async findAll(params: FindParams): Promise<Exoplanet[]> {

    return this.exoplanetModel.find(params).exec();
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

  async calculateById(id: string): Promise<number> {
    const planet = await this.findOne(id);
    return this.calculate(planet);
  }



  calculate (planet: Exoplanet): number {
    let res = 1;

    res *= this.calc(planet.radius, Earth.radius, 1.25);
    console.log(res)
    res *= this.calc(planet.mass, Earth.mass, 1.25);
    console.log(res)
    
    res *= this.calc(planet.orbitalPeriod, Earth.orbitalPeriod, 0.5);
    console.log(res)

    const habitableZone = this.habitableZone(planet);
    res *= this.calc(1 - Math.abs(habitableZone - 1), 1, 1);
    console.log(res)

    if (planet.type == Exoplanet.Type.GASEOUS) res -= 0.65;

    console.log(res)
    return Math.max(res, 0);
  }
  private calc(v1, e, w) {

    const numer =(e - v1); 
    const den = (v1 + e);

    console.log("ELEV", numer, den)
    console.log(Math.abs(numer / den));
    return Math.pow(1 - Math.abs(numer / den), (w/3));
  }


  /**
   * 
   * @param planet planet
   * @returns 0 is left
   * 1 is ok
   * 2 is right
   */
  habitableZone(planet: Exoplanet): number {

    const lum = planet.luminosityOfStar;

    const ro = Math.sqrt(lum/0.53);
    const ri = Math.sqrt(lum/1.1);

    const dist = (planet.distanceToStar / Earth.distanceToStar);

    if (dist > ri && dist < ro ) return 1;

    if (dist < ri) return (ri - dist) / ri;
    if (dist > ro) return 2 + ( 1 / (ro + 1 - dist) );
  }
}

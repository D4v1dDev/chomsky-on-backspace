import { PartialType } from '@nestjs/mapped-types';
import { CreateExoplanetDto } from './create-exoplanet.dto';

export class UpdateExoplanetDto extends PartialType(CreateExoplanetDto) {}

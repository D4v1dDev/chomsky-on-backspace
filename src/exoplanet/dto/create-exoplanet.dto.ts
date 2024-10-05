import { ApiProperty } from "@nestjs/swagger";
import { Exoplanet } from "../entities/exoplanet.entity";

export class CreateExoplanetDto {


    @ApiProperty()
    name: string;

    @ApiProperty()
    radius: number;
    @ApiProperty()
    mass: number;

    
    @ApiProperty()
    type: Exoplanet.Type

    @ApiProperty()
    orbitalPeriod: number 

    @ApiProperty()
    luminosityOfStar: number
    @ApiProperty()
    distanceToStar: number

}

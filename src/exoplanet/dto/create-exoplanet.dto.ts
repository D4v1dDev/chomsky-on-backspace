import { ApiProperty } from "@nestjs/swagger";
import { Exoplanet } from "../entities/exoplanet.entity";


export class CreateExoplanetDto {

    @ApiProperty()
    name: string;
    
    @ApiProperty({
        description: 'name of the solar system'
    })
    solarSystem: string;

    @ApiProperty({
        description: 'km'
    })
    radius: number;
    
    @ApiProperty({
        description: '1e21 kg'
    })
    mass: number;

    @ApiProperty({
        enum: Exoplanet.Type
    })
    type: Exoplanet.Type

    @ApiProperty({
        description: 'earth days'
    })
    orbitalPeriod: number 

    @ApiProperty({
        description: '1 is equals to the luminosity of the sun.'
    })
    luminosityOfStar: number
    
    @ApiProperty({
        description: 'Millions of km'
    })
    distanceToStar: number

    @ApiProperty({
        description: 'Value of 0 to 1 in function of how many water it has',
        minimum: 0,
        maximum: 1
    })
    aqua: number

    @ApiProperty({
        description: 'Hex color representing the surface color'
    })
    surfaceColor: string;

    @ApiProperty({
        description: 'Hex color representing the atmosphere color'
    })
    atmosphereColor: string;
}

import { Schema } from "mongoose";

export class Exoplanet {

    _id: string;

    solarSystem: string;

    name: string;

    radius: number;
    mass: number;

    type: Exoplanet.Type

    // time in terrest days
    orbitalPeriod: number 

    luminosityOfStar: number
    distanceToStar: number

    minAltitude: number
    maxAltitude: number
    aqua: number // [0, 1]

    surfaceColor: string;
    atmosphereColor: string;
}

export const Earth = {
    _id:'earth',
    solarSystem:'solar',
    name:'earth',
    
    radius: 6371, // km
    mass:5972, // 1e21

    distanceToStar: 149.597870, // 1e6 km
    luminosityOfStar: 1,

    orbitalPeriod:365,
    type: 'ROCKY',

    minAltitude: 6371,
    maxAltitude: 6380,
    aqua: 0.2,


    surfaceColor: '#006400',
    atmosphereColor: '#87CEEB44' 
} as Exoplanet

export namespace Exoplanet {
    export enum Type {
        ROCKY="ROCKY",
        GASEOUS="GASEOUS"
    }
}

export type ExoplanetDocument = Exoplanet & Document;

export const ExoplanetSchema = new Schema({
  name: { type: String, required: true },
  radius: { type: Number, required: true },
  mass: { type: Number, required: true },
  type: { type: String, enum: Object.values(Exoplanet.Type), required: true },
  orbitalPeriod: { type: Number, required: true },
  luminosityOfStar: { type: Number, required: true },
  distanceToStar: { type: Number, required: true },


  minAltitude: { type: Number, required: true },
  maxAltitude: { type: Number, required: true },

  aqua: { type: Number, required: true },
});

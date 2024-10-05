import { Schema } from "mongoose";

export class Exoplanet {

    _id: string;
    name: string;

    radius: number;
    mass: number;

    type: Exoplanet.Type

    // time in terrest days
    orbital_period: number 
}


export namespace Exoplanet {
    export enum Type {
        ROCKY,
        GASEOUS
    }
}

export type ExoplanetDocument = Exoplanet & Document;

export const ExoplanetSchema = new Schema({
  name: { type: String, required: true },
  radius: { type: Number, required: true },
  mass: { type: Number, required: true },
  type: { type: String, enum: Object.values(Exoplanet.Type), required: true },
  orbital_period: { type: Number, required: true },
});

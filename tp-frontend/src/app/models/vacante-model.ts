import { RequerimientoModel } from "./requerimiento-model";

export interface VacanteModel {

    id_vacante: number;
    cargo: string;
    descripcion: string;
    estado: string;
    requerimientos: RequerimientoModel[];
    
}
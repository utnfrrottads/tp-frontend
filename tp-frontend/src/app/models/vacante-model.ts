import { EmpresaModel } from './empresa-model';
import { RequerimientoModel } from "./requerimiento-model";

export interface VacanteModel {

    id_vacante: number;
    cargo: string;
    descripcion: string;
    estado: string;
    id_empresa: number;
    empresa: EmpresaModel;
    requirements: RequerimientoModel[];
    
}
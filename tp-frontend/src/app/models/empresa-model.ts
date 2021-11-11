import { VacanteModel } from "./vacante-model";

export interface EmpresaModel {

    id_empresa: number;
    razon_social: string;
    cuit: string;
    vacantes: VacanteModel[];
    
}
import { BaseResourceModel } from '../shared/model/base-resource-model';
import { Unidade } from './unidade';

export class Local_Locacao extends BaseResourceModel {
    id: number;
    ds_local_locacao: string;
    gera_custo: boolean;
    vlr_locacao: number;

    static fromJson(jsonData: any): Local_Locacao {
        return Object.assign(new Local_Locacao(), jsonData);
    }
}

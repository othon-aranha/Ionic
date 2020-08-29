import { BaseResourceModel } from '../shared/model/base-resource-model';
import { Local_Locacao } from './local_locacao';

export class Locacao extends BaseResourceModel {
    id: number;
    unidade_locacao: Local_Locacao;
    dt_locacao: Date;
    hora_ini: string;
    hora_fim: string;

    static fromJson(jsonData: any): Locacao {
        return Object.assign(new Locacao(), jsonData);
    }
}

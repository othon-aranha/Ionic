import { BaseResourceModel } from '../shared/model/base-resource-model';

export class Unidade extends BaseResourceModel {
    id: number;
    nr_ap: number;
    nm_proprietario: string;
    locado: boolean;
    nm_locador: string;

    static fromJson(jsonData: any): Unidade {
        return Object.assign(new Unidade(), jsonData);
    }
}

import { BaseResourceModel } from '../shared/model/base-resource-model';

export class Unidade extends BaseResourceModel {
    nrAp: number;
    nmProprietario: string;
    locado: boolean;
    nmLocador: string;

    static fromJson(jsonData: any): Unidade {
        return Object.assign(new Unidade(), jsonData);
    }
}

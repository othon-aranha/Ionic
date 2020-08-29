import { BaseResourceModel } from '../shared/model/base-resource-model';

export class Local extends BaseResourceModel {
    id: number;
    ds_local: string;
    locavel: boolean;
    vlr_locacao: number;
    
    static fromJson(jsonData: any): Local {
        return Object.assign(new Local(), jsonData);
    }
}

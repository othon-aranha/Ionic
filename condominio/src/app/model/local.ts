import { BaseResourceModel } from '../shared/model/base-resource-model';

export class Local extends BaseResourceModel {
    dsLocal: string;
    locavel: boolean;
    vlrLocacao: number;
    
    static fromJson(jsonData: any): Local {
        return Object.assign(new Local(), jsonData);
    }
}

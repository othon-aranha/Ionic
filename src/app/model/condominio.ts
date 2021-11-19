import { BaseResourceModel } from '../shared/model/base-resource-model';

export class Condominio extends BaseResourceModel {
    nome: string;
    endereco: string;
    bairro: string;
    cep: string;
    cidade: string;
    cnpj: string;
    razao_social: string;
    links: string;

    static fromJson(jsonData: any): Condominio {
        return Object.assign(new Condominio(), jsonData);
    }
}

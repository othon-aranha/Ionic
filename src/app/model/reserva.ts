import { BaseResourceModel } from '../shared/model/base-resource-model';
import { Unidade } from '../model/unidade'
import { Time } from '@angular/common';

export class Reserva extends BaseResourceModel {
    unidadeReserva: Unidade;
    localReserva: string;
    dtReserva: Date;
    dtSolicitacao: Date;
    hrIniReserva: Time;
    hrFimReserva: Time;
    links: string;

    static fromJson(jsonData: any): Reserva {
        return Object.assign(new Reserva(), jsonData);
    }
}

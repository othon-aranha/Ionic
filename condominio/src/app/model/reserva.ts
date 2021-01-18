import { BaseResourceModel } from '../shared/model/base-resource-model';
import { Unidade } from '../model/unidade'
import { Time } from '@angular/common';
import { Local } from './local';

export class Reserva extends BaseResourceModel {
    unidadeReserva: Unidade;
    localReserva: Local;
    dtReserva: Date;
    dtSolicitacao: Date;
    hrIniReserva: Time;
    hrFimReserva: Time;
    dtConfirmacao: Date;
    dtCancelamento: Date;
    links: string;

    static fromJson(jsonData: any): Reserva {
        return Object.assign(new Reserva(), jsonData);
    }
}

import { BaseResourceModel } from '../shared/model/base-resource-model';
import { Unidade } from '../model/unidade'
import { Time } from '@angular/common';
import { Local } from './local';

export class Reserva extends BaseResourceModel {
    unidadeReserva: Unidade;
    localReserva: Local;
    dtReserva: Date;
    dtSolicitacao: string;
    hrIniReserva: string;
    hrFimReserva: string;
    dtConfirmacao: string;
    dtCancelamento: string;
    links: string;

    static fromJson(jsonData: any): Reserva {
        return Object.assign(new Reserva(), jsonData);
    }
}

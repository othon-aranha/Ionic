import { BaseResourceModel } from '../shared/model/base-resource-model';
import { Unidade } from '../model/unidade'

export class Reserva extends BaseResourceModel {
    id: number;
    unidadeReserva: Unidade;
    localReserva: string;
    dataReserva: Date;
    horaIni: string;
    horaFim: string;
    links: string;

    static fromJson(jsonData: any): Reserva {
        return Object.assign(new Reserva(), jsonData);
    }
}

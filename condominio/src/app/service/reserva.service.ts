import { Injectable, Injector } from '@angular/core';
import { Reserva } from '../model/reserva';
import { BaseResourceService } from '../shared/service/base-resource.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class ReservaService extends BaseResourceService<Reserva>  {

  constructor(protected injector: Injector) {
    super('http://192.168.0.131:8082/reserva', injector, Reserva.fromJson);
   }

   protected getAllSufix(): string {
     return '/reservas';
   }

}

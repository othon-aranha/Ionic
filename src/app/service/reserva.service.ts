import { Injectable, Injector } from '@angular/core';
import { Reserva } from '../model/reserva';
import { BaseResourceService } from '../shared/service/base-resource.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class ReservaService extends BaseResourceService<Reserva>  {

  constructor(protected injector: Injector) {
    super('http://192.168.0.13:8082/reserva', injector, Reserva.fromJson);
   }

   protected getAllSufix(): string {
     return '/reservas';
   }

   listaLocais(): Observable<Array<Reserva>> {
    return this.http.get<Reserva[]>(this.apiPath + this.getAllSufix() , {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listaReservasporAnoMeseLocal(anoMes: string, local: string): Observable<Array<Reserva>> {
    return this.http.get<Reserva[]>(this.apiPath + '/anoMes/' + anoMes + '/local/' + local, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  recuperarLocal(id: string): Observable<Reserva> {
    return this.http.get<Reserva>(this.apiPath + '/' + id, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}

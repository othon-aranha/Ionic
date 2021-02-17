import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../shared/service/base-resource.service';
import { Unidade } from '../model/unidade';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService extends BaseResourceService<Unidade> {

    constructor(protected injector: Injector) {
      super('http://192.168.0.13:8082/unidade', injector, Unidade.fromJson);
     }
  
     protected getAllSufix(): string {
      return '/unidades';
    }
  
    listaUnidades(): Observable<Array<Unidade>> {
      return this.http.get<Unidade[]>(this.apiPath + this.getAllSufix() , {headers: this.headers})
      .pipe(
        map(this.jsonDataToResources.bind(this)),
        catchError(this.handleError)
      );
    }
  
    recuperarUnidade(id: string): Observable<Unidade> {
      return this.http.get<Unidade>(this.apiPath + '/' + id, {headers: this.headers})
      .pipe(
        map(this.jsonDataToResources.bind(this)),
        catchError(this.handleError)
      );
    }
  }

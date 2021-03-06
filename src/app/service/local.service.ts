import { Injectable, Injector } from '@angular/core';
import { Local } from '../model/local';
import { BaseResourceService } from '../shared/service/base-resource.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalService extends BaseResourceService<Local> {

  constructor(protected injector: Injector) {
    super('http://192.168.0.13:8082/local', injector, Local.fromJson);
   }

   protected getAllSufix(): string {
    return '/locais';
  }

  listaLocais(): Observable<Array<Local>> {
    return this.http.get<Local[]>(this.apiPath + this.getAllSufix() , {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  recuperarLocal(id: string): Observable<Local> {
    return this.http.get<Local>(this.apiPath + '/' + id, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }
}

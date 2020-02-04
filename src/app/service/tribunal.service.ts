import { Injectable, Injector } from '@angular/core';
import { Tribunal } from '../model/tribunal';
import { BaseResourceService } from '../shared/service/base-resource.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TribunalService extends BaseResourceService<Tribunal> {

  constructor(protected injector: Injector) {
    super('http://localhost:8081/tribunal', injector, Tribunal.fromJson);
   }

   protected getAllSufix(): string {
     return '/tribunais';
   }

  listaTribunais(): Observable<Array<Tribunal>> {
    return this.http.get<Tribunal[]>(this.apiPath + '/tribunais', {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  recuperarTribunal(id: string): Observable<Tribunal> {
    return this.http.get<Tribunal>(this.apiPath + '/' + id, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  recuperarTribunalLocal(): Observable<Tribunal> {
    return this.http.get(this.apiPath + '/local' , {headers: this.headers})
    .pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }


}

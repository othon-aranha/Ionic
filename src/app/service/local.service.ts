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
    super('http://localhost:8082/local', injector, Local.fromJson);
   }

   protected getAllSufix(): string {
    return '/locais';
  }

  listaLocais(): Observable<Array<Local>> {
    return super.getAll();
  }

  recuperarLocal(id: string): Observable<Local> {
    //return this.getById(id);
    return this.http.get<Local>(this.apiPath+'/'+id);
  }
}

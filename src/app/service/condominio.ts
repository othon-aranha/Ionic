import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../shared/service/base-resource.service';
import { Condominio } from '../model/condominio';



@Injectable()
export class CondominioService extends BaseResourceService<Condominio>  {

  constructor(protected injector: Injector) {
    super('condominio', injector, Condominio.fromJson);
   }

   protected getAllSufix(): string {
     return '/condominio';
   }

}

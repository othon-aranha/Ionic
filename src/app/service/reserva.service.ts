import { Injectable, Injector } from '@angular/core';
import { Tribunal } from '../model/tribunal';
import { BaseResourceService } from '../shared/service/base-resource.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Reserva } from '../model/reserva';
import { BaseSqlLiteService } from '../shared/service/base-sql-lite.service';

@Injectable()
export class ReservaService extends BaseSqlLiteService<Reserva> {

  constructor(protected injector: Injector) {
    super(injector);
  }




}

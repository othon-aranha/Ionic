import { BaseResourceModel } from '../model/base-resource-model';
import { Injectable } from '@angular/core';

import { Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseResourceService<T extends BaseResourceModel>  {
  protected host ='192.168.68.105';
  protected port = '8082';

  protected http: HttpClient;

  protected headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  
  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.http = injector.get(HttpClient);
  }

  protected abstract getAllSufix(): string;

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiPath + this.getAllSufix(), {headers: this.headers})
    .pipe(catchError(this.handleError), );
  }

  getById(id: any): Observable<T> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get<T>(url, {headers: this.headers})
    .pipe(
      catchError(this.handleError)
    );  
  }

  /*
  getById(id: number, alias: string): Observable<T> {
    const url = `${this.apiPath}/cdTrib/${id}/alias/${alias}`;

    return this.http.get(url, {headers: this.headers}).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }
  */

  create(resource: T): Observable<T> {
    return this.http.post(this.apiPath, resource)
    .pipe(
      map(() => resource),
      catchError(this.handleError)  
    );
   }

  private getKeys(resource: any): any {
    let AKey = [];
    for (const prop in resource ) {
      if ( prop === 'id') {
        if ( prop.length > 1 ) {
         AKey = this.getKeys(resource[prop]);
         break;
        }
      } else {
        AKey = [...AKey, {keyname: prop, value: resource[prop]}];
      }
    }
    return AKey;
  }

  update(resource: T): Observable<T> {
    // console.log(this.getKeys(resource));

    const url = `${this.apiPath}/${resource.id}`;

    return this.http.put(url, resource,  {headers: this.headers}).pipe(
      map(() => resource),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }


  // PROTECTED METHODS

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(
      element => resources.push( this.jsonDataToResourceFn(element) )
    );
    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handleError(error: any): Observable<any> {
    console.log('Erro na requisiçao => ', error);
    return throwError(error);
  }

}

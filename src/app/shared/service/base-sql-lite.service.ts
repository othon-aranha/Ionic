import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { BaseCrud } from '../interfaces/base-crud';
import { BaseResourceModel } from '../model/base-resource-model';
import { DatabaseService } from '../providers/database.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseSqlLiteService<T extends BaseResourceModel> 
      implements BaseCrud  {
  dbProvider: DatabaseService

  constructor(protected injector: Injector) { 
    this.dbProvider = injector.get(DatabaseService);
  }

  private getTableName(): string {
    let obj_name: T;
    return obj_name.constructor.name;
  }

  public getAll():Array<any> {
    let objs: Array<T> = [];
    this.dbProvider.get_DB()
    .then((db: SQLiteObject) => {

      db.executeSql('select * from ' + this.getTableName() , [])
        .then((data: any) => {
          if (data.rows.length > 0) {            
            for (var i = 0; i < data.rows.length; i++) {
              var obj = data.rows.item(i);
              objs.push(obj);
            }
            return objs;
          }
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }
  
  get(id: number): any {
      this.dbProvider.get_DB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from ' + this.getTableName() + ' where id = ?';
        let data = [id];
 
        db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let obj: any;
              for (const prop in item ) {
                 obj[prop] = item[prop] 
              } 
              return obj;
            }
 
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }


  remove(id: number):void {
      this.dbProvider.get_DB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from ' + this.getTableName() + ' where id = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  update(obj: T):void {
    let sql;
    let data = [];
    this.dbProvider.get_DB()
      .then((db: SQLiteObject) => {
        sql = `update ${obj.constructor.name} set `;
        let i = 0;
        for ( const prop in obj ) {
          if ( prop != 'id' ) {
             if ( i == 0) {
              sql = sql + ` ${prop} = ? `;
             }else {
              sql = sql + ` , ${prop} = ? `;
             }
             i++;
          }
          data = [...data, obj[prop]];
        }
        sql = sql + 'where id = ?';
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  insert(obj: T):any {
    let sql;
    let data = [];
    this.dbProvider.get_DB()
      .then((db: SQLiteObject) => {
        let i = 0;
        sql = `insert into ${obj.constructor.name} (`;
        for ( const prop in obj ) {
          if ( prop != 'id' ) {
             if ( i == 0) {
              sql = sql + `${prop}`;
             }else {
              sql = sql + `,${prop}`;
             }
             i++;
          }
          data = [...data, obj[prop]];
        }
        sql = sql + ')';
        sql = sql + 'values(';
        i = 0;
        for ( const prop in obj ) {
          if ( prop != 'id' ) {
            if ( i == 0) {
             sql = sql + `?`;
            }else {
             sql = sql + `,?`;
            }
            i++;
         }          
        }
        sql = sql + ')';
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  create(obj: any): any {

  }

}

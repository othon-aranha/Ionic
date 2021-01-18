import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dtbConfig: SQLiteDatabaseConfig;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  database_name = 'admcond.db';
  location_name = 'default';

  locacoes = new BehaviorSubject([]);
  unidades = new BehaviorSubject([]);
  locais   = new BehaviorSubject([]);


  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) { 
    this.plt.ready().then(() => {
    this.criar_database();
    })
  }

  public get_DB() {
    return this.sqlite.create({
      name: this.database_name,
      location: this.location_name
    });
  }

  instancia_database() {
    this.get_DB()
    .then((db: SQLiteObject) => this.database = db)
    .catch(e => console.log(e));
  }

  criar_database() {
    this.instancia_database();
    this.http.get('assets/admcond.sql', { responseType: 'text' })
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(_ => {
        this.dbReady.next(true);
      })
      .catch(e => console.error(e));
    });
   }

   criaTabela(sSQL: string, tabela: string) {
     if ( this.database != undefined ) {
      this.database.executeSql(sSQL, [])
      .then(() => console.log('Tabela ' + tabela + ' criada'))
      .catch(e => console.log(e));
     }
   }

   executa_Insert(sSQL: string) {

   }
   
   cria_Database() {
    let sSQL: string;
    
    sSQL = 'CREATE TABLE IF NOT EXISTS Locacao ( ' +
      'id              INTEGER  PRIMARY KEY ASC ON CONFLICT FAIL AUTOINCREMENT  NOT NULL,       ' +
      'unidade_locacao INTEGER  CONSTRAINT FK_LOCACAO_UNIDADE REFERENCES Unidade (id) NOT NULL, ' +                                                 
      'local_locacao   INTEGER  CONSTRAINT FK_LOCACAO_LOCAL REFERENCES Local_Locacao (id) NOT NULL ON CONFLICT FAIL, ' +
      'dt_locacao      DATETIME NOT NULL, ' +
      'hora_ini        TIME     NOT NULL, ' +
      'hora_fim        TIME     NOT NULL  ' +
      ' );';

    this.criaTabela(sSQL, 'Local'); 

    sSQL = 'CREATE TABLE IF NOT EXISTS Local ( ' +
           'id       INTEGER     PRIMARY KEY ASC ON CONFLICT FAIL AUTOINCREMENT, ' +
           'ds_local STRING (50) UNIQUE ON CONFLICT FAIL ' +
           '                NOT NULL ON CONFLICT FAIL ' +
           ');';
    
    this.criaTabela(sSQL, 'Local_Locacao');

    sSQL = 'CREATE TABLE IF NOT EXISTS Local_Locacao ( ' +
          'id              INTEGER        PRIMARY KEY ASC ON CONFLICT FAIL AUTOINCREMENT NOT NULL ON CONFLICT FAIL, ' +
          'unidade_locacao INTEGER        CONSTRAINT FK_LOCAL REFERENCES Local (id) NOT NULL ON CONFLICT FAIL, ' +
          'gera_custo      CHAR (1)       NOT NULL DEFAULT ("N"), ' +
          'vlr_locacao     NUMERIC (4, 2) ' + 
          ' CONSTRAINT ck_custo CHECK ( ( (gera_custo = "S" ) AND ( vlr_locacao > 0 ) ) OR  ' +
          '                             ( (gera_custo = "N" ) AND ( vlr_locacao = 0 ) ) )  ' +          
          ');'
    
    this.criaTabela(sSQL, 'Unidade');

    sSQL = 'CREATE TABLE  IF NOT EXISTS Unidade ( ' +
           ' id              INTEGER       PRIMARY KEY ON CONFLICT ABORT AUTOINCREMENT, ' +
           ' nr_ap           INTEGER       UNIQUE ON CONFLICT FAIL, ' +
           ' nm_proprietario VARCHAR (120) NOT NULL, ' +
           ' locado          CHAR (1)      NOT NULL DEFAULT ("N"), ' +
           ' nm_locador      VARCHAR (120), ' +
           ' CONSTRAINT ck_locado CHECK ( ( (locado = "S" ) AND (nm_locador IS NOT NULL) ) OR  ' +
           '                             ( (locado = "N" ) AND ( nm_locador IS NULL) ) )  ' +
           ' );'
    
    this.criaTabela(sSQL, 'Local_Locacao');
   }

   gera_carga_registros() {

   }


}



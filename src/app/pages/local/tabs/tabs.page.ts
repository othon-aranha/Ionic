import { Component, Injector, OnInit } from '@angular/core';
import { Local } from '../../../model/local';
import { LocalService } from '../../../service/local.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPageLocal implements OnInit {

  numLocais: number;
  locais:  Local[];
  localService: LocalService;
  constructor( protected injector: Injector) { }

  ngOnInit() {
    this.numLocais = 0;
    this.localService = new LocalService(this.injector);
    // Carregando os dominios do acesso
    this.locais = [];
    this.localService.getAll()
    .subscribe(
      (resource) => {
        this.locais = resource;
        this.numLocais = this.locais.length;
      },
      (error) => {
        let msg = this.localService.extractMsgError(error);
        if ( msg !== undefined ) {
          alert('Ocorreu um erro ao acessar o serviço (' + this.localService.apiPath  + '). Erro:' + msg );  
        } else {
          alert('Ocorreu um erro ao acessar o serviço (' + this.localService.apiPath  + ').');  
        } 
        
      }
    );
  }

}

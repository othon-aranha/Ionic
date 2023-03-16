import { Component, Injector, OnInit } from '@angular/core';
import { Condominio } from '../../../model/condominio';
import { Reserva } from '../../../model/reserva';
import { CondominioService } from '../../../service/condominio';
import { ReservaService } from '../../../service/reserva.service';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPageCondominio implements OnInit {
  
  numCondominios: number;
  condominios:  Condominio[];
  condominioService: CondominioService;
  constructor( protected injector: Injector) { }

  ngOnInit() {
    this.numCondominios = 0;
    this.condominioService = new CondominioService(this.injector);
    // Carregando os dominios do acesso
    this.condominios = [];
    this.condominioService.getAll()
    .subscribe(
      (resource) => {
        this.condominios = resource;
        this.numCondominios = this.condominios.length;
      },
      (error) => {
        let msg = this.condominioService.extractMsgError(error);
        if ( msg !== undefined ) {
          alert('Ocorreu um erro ao acessar o serviço (' + this.condominioService.apiPath  + '). Erro:' + msg );  
        } else {
          alert('Ocorreu um erro ao acessar o serviço (' + this.condominioService.apiPath  + ').');  
        } 
        
      }
    );
}

}
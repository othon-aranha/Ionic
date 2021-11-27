import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { Condominio } from '../../../model/condominio';
import { CondominioService } from '../../../service/condominio';


@Component({
  selector: 'app-condominio-list',
  templateUrl: './condominio-list.page.html',
  styleUrls: ['./condominio-list.page.scss'],
})
export class CondominioListPage implements OnInit {

//Service
condominioService: CondominioService;

protected location: Location;

//
condominios: Array<Condominio>;
constructor(protected injector: Injector) { 
  this.location = this.injector.get(Location);
}

ngOnInit() {
  
  this.InitServices();
  this.populaUnidades();
}

private InitServices() {
  this.condominioService = new CondominioService(this.injector);
}

private populaUnidades(): void {
      // Carregando os dominios do acesso
      this.condominios = [];
      this.condominioService.getAll()
      .subscribe(
        (resource) => {
          this.condominios = resource;
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
}


voltar(): void {
  this.location.back();
}

}

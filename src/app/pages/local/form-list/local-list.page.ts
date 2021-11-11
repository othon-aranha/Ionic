import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { Local } from '../../../model/local';
import { LocalService } from '../../../service/local.service';

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.page.html',
  styleUrls: ['./local-list.page.scss'],
})
export class LocalListPage implements OnInit {

//Service
localService: LocalService;

protected location: Location;

//
locais: Array<Local>;
constructor(protected injector: Injector) { 
  this.location = this.injector.get(Location);
}

ngOnInit() {
  
  this.InitServices();
  this.populaUnidades();
}

private InitServices() {
  this.localService = new LocalService(this.injector);
}

private populaUnidades(): void {
      // Carregando os dominios do acesso
      this.locais = [];
      this.localService.getAll()
      .subscribe(
        (resource) => {
          this.locais = resource;
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
}


voltar(): void {
  this.location.back();
}

}

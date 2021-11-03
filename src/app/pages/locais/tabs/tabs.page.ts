import { Component, Injector, OnInit } from '@angular/core';
import { Local } from '../../../model/local';
import { LocalService } from '../../../service/local.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

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
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

}

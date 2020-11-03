import { Component, OnInit, Injector } from '@angular/core';
import { UnidadeService } from '../../../service/unidade.service';
import { Unidade } from '../../../model/unidade';



@Component({
  selector: 'app-tabs',
  templateUrl: './unidade-tabs.page.html',
  styleUrls: ['./unidade-tabs.page.scss'],
})
export class UnidadeTabsPage implements OnInit {

  numUnidades: number;
  unidades:  Unidade[];
  unidadeService: UnidadeService;
  constructor( protected injector: Injector) { }

  ngOnInit() {
    this.numUnidades = 0;
    this.unidadeService = new UnidadeService(this.injector);
    // Carregando os dominios do acesso
    this.unidades = [];
    this.unidadeService.getAll()
    .subscribe(
      (resource) => {
        this.unidades = resource;
        this.numUnidades = this.unidades.length;
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

}

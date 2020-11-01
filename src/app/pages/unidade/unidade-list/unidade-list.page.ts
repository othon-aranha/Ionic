import { Component, OnInit, Injector } from '@angular/core';
import { UnidadeService } from '../../../service/unidade.service';
import { Unidade } from '../../../model/unidade';

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.page.html',
  styleUrls: ['./unidade-list.page.scss'],
})
export class UnidadeListPage implements OnInit {

  //Service
  unidadeService: UnidadeService;

  //
  unidades: Array<Unidade>;
  constructor(protected injector: Injector) { }

  ngOnInit() {
    
    this.InitServices();
    this.populaUnidades();
  }

  private InitServices() {
    this.unidadeService = new UnidadeService(this.injector);
  }

  private populaUnidades(): void {
        // Carregando os dominios do acesso
        this.unidades = [];
        this.unidadeService.getAll()
        .subscribe(
          (resource) => {
            this.unidades = resource;
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        );
  }

}

import { Component, OnInit, Injector } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';
import { Local } from '../../../model/local';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.page.html',
  styleUrls: ['./reserva-list.page.scss'],
})
export class ReservaListPage implements OnInit {
  
  public customDayShortNames="Seg, Ter, Qua, Qui, Sex, Sab, Dom";
  public customDayNames="Segunda, Terça, Quarta, Quinta, Sexta, Sábado, Domingo";
  public customMonthNames="janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro";
  public customMonthShortNames="jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez";
  public customCancelText="Cancelar";
  public customDoneText="Ok";
  public anoMin: string;
  public anoMax: string;

  //Services
  localService: LocalService;

  locais: Local[];
  constructor(protected injector: Injector) { }

  ngOnInit() {
    this.localService = new LocalService(this.injector);
    this.populaLocais();
  }

  private populaLocais() {
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

}

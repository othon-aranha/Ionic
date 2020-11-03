import { Component, OnInit, Injector } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';
import { Local } from '../../../model/local';
import { ReservaService } from '../../../service/reserva.service';
import { Reserva } from '../../../model/reserva';
import { Location } from '@angular/common';

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
  reservaService: ReservaService;

  protected location: Location;

  locais: Local[];
  reservas: Reserva[];
  constructor(protected injector: Injector) {
    this.location = this.injector.get(Location);
   }

  ngOnInit() {
    this.InitServices();
    this.populaLocais();
    this.consultaReservas();
  }

  private InitServices() {
    this.localService = new LocalService(this.injector);
    this.reservaService = new ReservaService(this.injector);
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

  private consultaReservas(){
    this.reservas = [];
    this.reservaService.getAll()
    .subscribe(
      (resource) => {
        this.reservas = resource;
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

  private convertInHours(milliseconds: number, withHour: boolean):string {
		let seconds = (milliseconds/1000)%60;
		let minutes = (milliseconds/(1000*60))%60;
		let hours   = (milliseconds/(1000*60*60))%24;
		var out = "";

		minutes = ( minutes + (60 * hours) );
		let s_minutes = ( minutes < 10) ? "0" + minutes : minutes;
		let s_seconds = ( seconds < 10) ? "0" + seconds : seconds;

		out = minutes + ":" + seconds;

		if(withHour) {
			let s_hours = (hours < 10) ? "0" + hours : hours;
			s_minutes = (minutes < 10) ? "0" + minutes : minutes;
			s_seconds = (seconds < 10) ? "0" + seconds : seconds;

			out = s_hours + ":" + s_minutes + ":" + s_seconds;
		} 

		return out;
  };
  
  voltar(): void {
    this.location.back();
  }

}

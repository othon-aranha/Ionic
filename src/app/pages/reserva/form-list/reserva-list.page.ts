import { Component, OnInit, Injector } from '@angular/core';
import { LocalService } from '../../../service/local.service';
import { Local } from '../../../model/local';
import { ReservaService } from '../../../service/reserva.service';
import { Reserva } from '../../../model/reserva';
import { Location } from '@angular/common';
import { AlertService } from '../../../shared/providers/alert/alert.service';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  public DataSel: string;
  vrLocal: string[];  

  serverErrorMessages: string[] = null;
  msgs = [];  

  //Services
  localService: LocalService;
  reservaService: ReservaService;

  protected location: Location;
  protected alertSrv: AlertService;

  locais: Local[];
  reservas: Reserva[];
  constructor(protected injector: Injector) {
    this.location = this.injector.get(Location);
    this.alertSrv = this.injector.get(AlertService);
   }

  ngOnInit() {
    let agora = new Date();    
    this.anoMin = agora.getFullYear().toString().concat("-").concat(agora.getMonth().toString().padStart(2,"0"));
    this.DataSel = this.anoMin;
    this.anoMax = (agora.getFullYear()+1).toString().concat("-").concat(agora.getMonth().toString().padStart(2,"0"));
    this.InitServices();
    this.populaLocais();
    this.consultaReservas();
  }

  private InitServices() {
    this.localService = new LocalService(this.injector);
    this.reservaService = new ReservaService(this.injector);
  }

  public confirmarReserva(reserva: Reserva) {
    this.alertSrv.Confirm('Confirmação', 'Confirma a reserva ?', () => {
      reserva.statusReserva = 1;
      reserva.dtConfirmacao = new Date().toTimeString();   
      this.reservaService.update(reserva)
      .subscribe(
        (resource) => {
          reserva;
          this.consultaReservas();
        },
        error => this.actionsForError(error)
      );

      
    });
  }

  public excluirReserva(reserva: Reserva) {
    this.alertSrv.Confirm('Confirmação', 'Confirma exclusão da reserva ?', () => {
      this.reservaService.delete(reserva.id)      
      .subscribe( () => {
        this.consultaReservas();
      },       
      error => this.actionsForError(error)       
    );
  });
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

  public consultaReservas(){   
    this.reservas = [];
    let anoMes: string;
    if ( ( this.anoMin != undefined ) ) {
      anoMes = this.DataSel.toString().substr(0,7);  
      if ( this.vrLocal != undefined ) {        
        this.reservaService.listaReservasporAnoMeseLocal(anoMes, this.vrLocal.toString())
        .subscribe(
          (resource) => {
            this.reservas = resource;
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        );
      } else {
        this.reservaService.listaReservasporAnoMes(anoMes)
        .subscribe(
          (resource) => {
            this.reservas = resource;
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        );        
      }

    }
  }

  protected actionsForError(error) {
    this.alertSrv.toast('Ocorreu um erro ao processar a sua solicitação!', 'top');
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Ocorreu um erro ao processar a sua solicitação!'});
    
    if (error.status === 400) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    }else if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor, tente mais tarde.'];
    }
  }


  /*
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
  */

  voltar(): void {
    this.location.back();
  }

}

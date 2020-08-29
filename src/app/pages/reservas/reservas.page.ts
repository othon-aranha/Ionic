import { Location } from '@angular/common';

import { Component, OnInit, Injector } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/providers/alert/alert.service';

import { BaseResourceFormComponent } from '../../shared/component/base-resource-form/base-resource-form.component';
import { Reserva } from '../../model/reserva';
import { ReservaService } from '../../service/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage extends BaseResourceFormComponent<Reserva> implements OnInit {
  ufs = [];
  editing = false;
  checked = false;
  // const controller = document.querySelector('ion-alert-controller');


  public customDayShortNames="Seg, Ter, Qua, Qui, Sex, Sab, Dom";
  public customDayNames="Segunda, Terça, Quarta, Quinta, Sexta, Sábado, Domingo";
  public customMonthNames="janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro";
  public customMonthShortNames="jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez";
  public customCancelText="Cancelar";
  public customDoneText="Ok";
  public anoMin: string;
  public anoMax: string;

  constructor(protected reservaService: ReservaService, protected injector: Injector, protected alertSrv: AlertService) {
    super(injector, new Reserva(), reservaService, Reserva.fromJson);
  }

  // constructor(private route: Router,  private location: Location) { }

  ngOnInit() {
    this.anoMin = new Date().getFullYear().toString();
    this.anoMax = this.anoMin;
    super.ngOnInit();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: new FormControl(this.resource.id, [Validators.required, Validators.minLength(1)] ),
      unidadeReserva: new FormControl(this.resource.unidadeReserva, [Validators.required, Validators.minLength(3), Validators.maxLength(4)] ),
      localReserva: new FormControl(this.resource.localReserva, [Validators.required, Validators.minLength(1)] ),
      dataReserva: new FormControl(this.resource.dataReserva, [Validators.required] ),
      horaIni: new FormControl(this.resource.horaIni, [Validators.required, Validators.minLength(5), Validators.maxLength(5)] ),
      horaFim: new FormControl(this.resource.horaFim, [Validators.required, Validators.minLength(5), Validators.maxLength(5)] )
    });
  }

  submitForm(): void {
    super.submitForm();
  }

  onAfterloadResource() {
    //
  }


  voltar(): void {
    this.location.back();
  }

  retornar(): void {
    this.router.navigate(['tabs']);
  }

}

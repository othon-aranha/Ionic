import { Component, OnInit, Injector } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/providers/alert/alert.service';

import { Reserva } from '../../../model/reserva';
import { ReservaService } from '../../../service/reserva.service';
import { BaseResourceFormComponent } from '../../../shared/component/base-resource-form/base-resource-form.component';
import { LocalService } from '../../../service/local.service';
import { Local } from '../../../model/local';
import { UnidadeService } from '../../../service/unidade.service';
import { Unidade } from '../../../model/unidade';


@Component({
  selector: 'app-reservas',
  templateUrl: './reserva-form.page.html',
  styleUrls: ['./reserva-form.page.scss'],
})
export class ReservaFormPage extends BaseResourceFormComponent<Reserva> implements OnInit {
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
  public dtInicial: Date;

  //Services
  localService: LocalService;
  unidadeService: UnidadeService;

  locais: Local[];
  unidades: Unidade[];

  constructor(protected reservaService: ReservaService, protected injector: Injector, 
              protected alertSrv: AlertService) {
    super(injector, new Reserva(), reservaService, Reserva.fromJson);
  }

  // constructor(private route: Router,  private location: Location) { }

  ngOnInit() {
    this.localService = new LocalService(this.injector);
    this.unidadeService = new UnidadeService(this.injector);
    this.populaLocais();
    this.populaUnidades();
    
    this.anoMin    = new Date().getFullYear().toString();
    this.dtInicial = new Date();
    this.anoMax = this.anoMin;
    super.ngOnInit();
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

  private populaUnidades() {
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

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      unidadeReserva: new FormControl(this.resource.unidadeReserva, [Validators.required, Validators.minLength(3), Validators.maxLength(4)] ),
      localReserva: new FormControl(this.resource.localReserva, [Validators.required, Validators.minLength(1)] ),
      dtReserva: new FormControl(this.resource.dtReserva, [Validators.required] ),
      dtSolicitacao: new FormControl(this.resource.dtSolicitacao, [Validators.required] ),
      hrIniReserva: new FormControl(this.resource.hrIniReserva, [Validators.required] ),
      hrFimReserva: new FormControl(this.resource.hrFimReserva, [Validators.required] ),
      dtConfirmacao: new FormControl(this.resource.dtConfirmacao, [] ),
      statusReserva: new FormControl(this.resource.statusReserva, [] )
    });
  }

  submitForm(): void {
    this.resourceForm.get("dtSolicitacao").setValue(new Date());
    this.resourceForm.get("statusReserva").setValue(0);
    super.submitForm();
    // this.clearForm();
    //
  }

  clearForm(): void {
    this.resourceForm.patchValue({
      unidadeReserva: [null],
      localReserva:   [null],
      dtReserva:      [null],
      dtSolicitacao:  [null],
      hrIniReserva:   [null],
      hrFimReserva:   [null],
      dtConfirmacao:  [null],
      dtCancelamento: [null]
    });
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

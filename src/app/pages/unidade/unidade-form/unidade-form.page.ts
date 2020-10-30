import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/component/base-resource-form/base-resource-form.component';
import { Unidade } from '../../../model/unidade';
import { UnidadeService } from '../../../service/unidade.service';
import { AlertService } from '../../../shared/providers/alert/alert.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-unidade-form',
  templateUrl: './unidade-form.page.html',
  styleUrls: ['./unidade-form.page.scss'],
})
export class UnidadeFormPage extends BaseResourceFormComponent<Unidade>  implements OnInit {

  blocado: boolean;

  constructor(protected unidadeService: UnidadeService, protected injector: Injector, 
    protected alertSrv: AlertService) {
    super(injector, new Unidade(), unidadeService, Unidade.fromJson); 
  }

  ngOnInit() {
    super.ngOnInit();
    this.blocado = false;
  }

  submitForm(): void {
    super.submitForm();
  }


  protected onAfterloadResource(): void {
    throw new Error('Method not implemented.');
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      nrAp: new FormControl(this.resource.nrAp, [Validators.required, Validators.minLength(3), Validators.maxLength(4)] ),
      nmProprietario: new FormControl(this.resource.nmProprietario, [Validators.required, Validators.minLength(1)] ),
      locado: new FormControl(this.resource.locado, [Validators.required] ),
      nmLocador: new FormControl(this.resource.nmLocador, [] )
    });
  }

  mudaLocacao(event): void {
    const isChecked = this.blocado;
    console.log(isChecked);
  }

  voltar(): void {
    this.location.back();
  }
}

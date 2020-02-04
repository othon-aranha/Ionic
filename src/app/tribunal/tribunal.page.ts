import { Component, OnInit, Injector } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

import { BaseResourceFormComponent } from '../shared/component/base-resource-form/base-resource-form.component';
import { Tribunal } from '../model/tribunal';
import { TribunalService } from '../service/tribunal.service';


@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.page.html',
  styleUrls: ['./tribunal.page.scss'],
})
export class TribunalPage extends BaseResourceFormComponent<Tribunal> implements OnInit {
  ufs = [];
  editing = false;
  checked = false;


  constructor(protected tribunalService: TribunalService, protected injector: Injector) {
    super(injector, new Tribunal(), tribunalService, Tribunal.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: new FormControl(this.id, [Validators.required, Validators.minLength(1)] ),
      nome: new FormControl(this.resource.nome, [Validators.required, Validators.minLength(6)] ),
      sigla: new FormControl({value: this.resource.sigla, disabled: ( this.editing ) } , [Validators.required, Validators.minLength(3)] ),
      logradouro: new FormControl(this.resource.logradouro, [Validators.required, Validators.minLength(10)] ),
      bairro: new FormControl(this.resource.bairro, [Validators.required, Validators.minLength(3)] ),
      uf: new FormControl(this.resource.uf, [Validators.required, Validators.minLength(2), Validators.maxLength(2)] ),
      cep: new FormControl(this.resource.cep, [Validators.required, Validators.minLength(8)] ),
      cidade: new FormControl(this.resource.cidade, [Validators.required, Validators.minLength(3)] ),
      telefone: new FormControl(this.resource.telefone, [Validators.required, Validators.minLength(11)] ),
      cgc: new FormControl(this.resource.cgc, [Validators.required, Validators.minLength(14)] ),
      numeroContrato: new FormControl(this.resource.numeroContrato, [Validators.required, Validators.minLength(3)] ),
      descricaoContrato: new FormControl(this.resource.descricaoContrato, [Validators.required, Validators.minLength(6)] ),
      codigoMunicipioIBGE: new FormControl(this.resource.codigoMunicipioIBGE, [Validators.required, Validators.minLength(3)] ),
      codigoNaturezaJuridica: new FormControl(this.resource.codigoNaturezaJuridica, [] ),
      email: new FormControl(this.resource.email, [Validators.required, Validators.minLength(6), Validators.email] ),
      acesso: new FormControl(this.resource.acesso)
     });
  }

  ngOnInit() {
    this.urlBack = 'tribunal';

    this.ufs = [
    {value: 'AC', viewValue: 'Acre'},
    {value: 'AL', viewValue: 'Alagoas'},
    {value: 'AM', viewValue: 'Amazonas'},
    {value: 'AP', viewValue: 'Amapá'},
    {value: 'BA', viewValue: 'Bahia'},
    {value: 'CE', viewValue: 'Ceará'},
    {value: 'DF', viewValue: 'Distrito Federal'},
    {value: 'ES', viewValue: 'Espírito Santo'},
    {value: 'DF', viewValue: 'Distrito Federal'},
    {value: 'GO', viewValue: 'Goiás'},
    {value: 'MA', viewValue: 'Maranhão'},
    {value: 'MG', viewValue: 'Minas Gerais'},
    {value: 'MS', viewValue: 'Mato Grosso do Sul'},
    {value: 'MT', viewValue: 'Mato Grosso'},
    {value: 'PA', viewValue: 'Pará'},
    {value: 'PB', viewValue: 'Paraíba'},
    {value: 'PE', viewValue: 'Pernambuco'},
    {value: 'PI', viewValue: 'Piauí'},
    {value: 'PR', viewValue: 'Paraná'},
    {value: 'RJ', viewValue: 'Rio de Janeiro'},
    {value: 'RN', viewValue: 'Rio Grande do Norte'},
    {value: 'RO', viewValue: 'Rondônia'},
    {value: 'RR', viewValue: 'Roraima'},
    {value: 'RS', viewValue: 'Rio Grande do Sul'},
    {value: 'SC', viewValue: 'Santa Catarina'},
    {value: 'SE', viewValue: 'Sergipe'},
    {value: 'SP', viewValue: 'São Paulo'},
    {value: 'TO', viewValue: 'Tocantins'}
    ];
    super.ngOnInit();
    this.editing = ( this.resource.id > 0 );
  }

  onAfterloadResource() {
    this.checked = ( this.resourceForm.get('acesso').value === '*' );
  }

  marcaTribunalLocal(value: boolean): void {
    if ( value ) {
      this.resourceForm.get('acesso').setValue('*');
    } else {
      this.resourceForm.get('acesso').setValue(null);
    }
  }

  submitForm(): void {
    super.submitForm();
  }


}

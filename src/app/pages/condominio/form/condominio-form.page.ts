import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Condominio } from '../../../model/condominio';
import { CondominioService } from '../../../service/condominio';
import { BaseResourceFormComponent } from '../../../shared/component/base-resource-form/base-resource-form.component';
import { AlertService } from '../../../shared/providers/alert/alert.service';

@Component({
  selector: 'app-condominio-form',
  templateUrl: './condominio-form.page.html',
  styleUrls: ['./condominio-form.page.scss'],
})
export class CondominioFormPage extends BaseResourceFormComponent<Condominio> implements OnInit {

  constructor(protected condominioService: CondominioService, protected injector: Injector, 
    protected alertSrv: AlertService) {
    super(injector, new Condominio(), condominioService, Condominio.fromJson);
  }

  ngOnInit() {
    this.getParamId();
    if ( this.id != undefined ) {
      this.currentAction = 'edit';
      this.buildResourceForm();
      this.loadResource();
    } else {
      super.ngOnInit();
    }
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      nome: new FormControl(this.resource.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(120)] ),
      endereco: new FormControl(this.resource.endereco, [Validators.required, Validators.minLength(3), Validators.maxLength(120)] ),
      bairro: new FormControl(this.resource.bairro, [Validators.required, Validators.minLength(3), Validators.maxLength(100)] ),
      cep: new FormControl(this.resource.cep, [Validators.required, Validators.minLength(8), Validators.maxLength(8)] ),
      razao_social: new FormControl(this.resource.razao_social, [Validators.required, Validators.minLength(3), Validators.maxLength(100)] ),
      cnpj: new FormControl(this.resource.cnpj, [Validators.required, , Validators.minLength(14), Validators.maxLength(14)] ),
      cidade: new FormControl(this.resource.cidade, [Validators.required, , Validators.minLength(3), Validators.maxLength(100)] )
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

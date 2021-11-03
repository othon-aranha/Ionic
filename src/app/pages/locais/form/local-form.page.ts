import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Local } from '../../../model/local';
import { LocalService } from '../../../service/local.service';
import { BaseResourceFormComponent } from '../../../shared/component/base-resource-form/base-resource-form.component';
import { AlertService } from '../../../shared/providers/alert/alert.service';

@Component({
  selector: 'app-local',
  templateUrl: './local-form.page.html',
  styleUrls: ['./local-form.page.scss'],
})
export class LocalFormPage extends BaseResourceFormComponent<Local> implements OnInit {

  constructor(protected localService: LocalService, protected injector: Injector, 
    protected alertSrv: AlertService) {
    super(injector, new Local(), localService, Local.fromJson);
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

  submitForm(): void {
    super.submitForm();
  }

  protected onAfterloadResource(): void {
    
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      dsLocal: new FormControl(this.resource.dsLocal, [Validators.required, Validators.minLength(3)] ),
      vlrLocacao: new FormControl(this.resource.vlrLocacao, [Validators.required]),
      locavel: new FormControl(this.resource.locavel, [] )
    });
  }  

  voltar(): void {
    this.location.back();
  }

  retornar(): void {
    this.router.navigate(['tabs']);
  }

}

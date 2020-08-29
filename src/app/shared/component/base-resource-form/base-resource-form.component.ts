import { AlertService } from 'src/app/shared/providers/alert/alert.service';
import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseResourceModel } from '../../model/base-resource-model';
import { BaseResourceService } from '../../service/base-resource.service';

import { switchMap, catchError } from 'rxjs/operators';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Location } from '@angular/common';


export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  id: any;
  alias: string;
  urlBack: string;
  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm = false;
  msgs = [];
  FieldKeyReadOnly: boolean;

  protected route: ActivatedRoute;
  protected router: Router;
  protected location: Location;
  protected formBuilder: FormBuilder;
  protected alertSrv: AlertService;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.location = this.injector.get(Location);
    this.formBuilder = this.injector.get(FormBuilder);
    this.alertSrv = this.injector.get(AlertService);
  }

  getParamId() {
    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
    if ( this.route.snapshot.paramMap.has('name') ) {
      this.alias = this.route.snapshot.paramMap.get('name');
    }
  }

  ngOnInit() {
    this.getParamId();
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;
    if ( this.validForm() ) {
      this.alertSrv.Confirm('Confirmação', 'Confirma a gravação', () => {
        if ( this.currentAction === 'new' ) {
          this.FieldKeyReadOnly = false;
          this.createResource();
        } else { // currentAction == "edit"
          this.FieldKeyReadOnly = true;
          this.resourceForm.get('id').setValue(this.id);
          this.updateResource();
        }
      });
    }
  }

  clearValuesForm(): void {
    Object.keys(this.resourceForm.controls).forEach((key) => {
       this.resourceForm.get(key).setValue(null);
     });
  }

  validForm(): boolean {
    let retorno = true;
    if ( this.resourceForm.status === 'INVALID'  ) {

      Object.keys(this.resourceForm.controls).forEach((key) => {
        if ( this.resourceForm.get(key).status === 'INVALID' ) {
          this.alertSrv.toast('O campo ' + key + ' está inválido', 'bottom');
          this.msgs = [];
          this.msgs.push({ severity: 'info', summary: 'O campo ' + key + ' está inválido'});
          retorno = false;
        }
       });
    }
    return retorno;
  }


  // PRIVATE METHODS

  protected setCurrentAction() {
        if ( ( this.route.snapshot.url.length === 0 ) ||
             ( ( this.route.snapshot.url.length > 0 )
            && ( this.route.snapshot.url[this.route.snapshot.url.length - 1].path === 'new' ) ) ) {
        this.currentAction = 'new';
      // this.breadcrumbitems = [...this.breadcrumbitems,{text: 'Novo'}];
      } else {
        this.currentAction = 'edit';
      // this.breadcrumbitems = [...this.breadcrumbitems,{text: 'Editar'}];
      }
  }

  protected loadResource() {
    if (this.currentAction === 'edit') {

      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(params.get('id')))
      )
      .subscribe(
        (resource) => {
          this.resource = resource;
          this.resourceForm.patchValue(resource); // binds loaded resource data to resourceForm
          this.onAfterloadResource();
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
    }
  }


  protected setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return 'Novo';
  }

  protected editionPageTitle(): string {
    return 'Edição';
  }


  protected createResource() {
    const recurso: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.create(recurso)
      .subscribe(
        resource => this.actionsForSuccess(resource),
        error => this.actionsForError(error)
      );
  }


  protected updateResource() {
    const recurso: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.update(recurso)
      .subscribe(
        resource => this.actionsForSuccess(resource),
        error => this.actionsForError(error)
      );
  }

  protected abstract onAfterloadResource(): void;


  protected actionsForSuccess(resource: T) {
    this.alertSrv.toast('Solicitação processada com sucesso!', 'top');
    // toastr.success('Solicitação processada com sucesso!');
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Solicitação processada com sucesso!'});

    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

    // redirect/reload component page
    if ( resource.id ) {
      this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
        () => this.router.navigate([baseComponentPath, resource.id, 'edit'])
      );
    }
  }


  protected actionsForError(error) {
    this.alertSrv.toast('Ocorreu um erro ao processar a sua solicitação!', 'top');
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Ocorreu um erro ao processar a sua solicitação!'});

    this.submittingForm = false;

    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor, tente mais tarde.'];
    }
  }


  protected abstract buildResourceForm(): void;
}

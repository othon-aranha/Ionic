import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CondominioFormPage } from './condominio-form.page';

describe('CondominioFormPage', () => {
  let component: CondominioFormPage;
  let fixture: ComponentFixture<CondominioFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominioFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CondominioFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

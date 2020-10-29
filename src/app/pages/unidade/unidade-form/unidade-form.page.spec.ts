import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnidadeFormPage } from './unidade-form.page';

describe('UnidadeFormPage', () => {
  let component: UnidadeFormPage;
  let fixture: ComponentFixture<UnidadeFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

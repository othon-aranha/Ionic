import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservaFormPage } from './reserva-form.page';

describe('ReservaFormPage', () => {
  let component: ReservaFormPage;
  let fixture: ComponentFixture<ReservaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

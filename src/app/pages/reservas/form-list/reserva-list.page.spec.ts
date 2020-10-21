import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservaListPage } from './reserva-list.page';

describe('ReservaListPage', () => {
  let component: ReservaListPage;
  let fixture: ComponentFixture<ReservaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CondominioListPage } from './condominio-list.page';

describe('CondominioListPage', () => {
  let component: CondominioListPage;
  let fixture: ComponentFixture<CondominioListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominioListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CondominioListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TribunalPage } from './tribunal.page';

describe('TribunalPage', () => {
  let component: TribunalPage;
  let fixture: ComponentFixture<TribunalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TribunalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

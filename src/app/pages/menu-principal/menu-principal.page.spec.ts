import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPrincipalPage } from './menu-principal.page';

describe('MenuPrincipalPage', () => {
  let component: MenuPrincipalPage;
  let fixture: ComponentFixture<MenuPrincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

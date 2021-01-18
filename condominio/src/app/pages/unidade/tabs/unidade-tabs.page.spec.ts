import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnidadeTabsPage } from './unidade-tabs.page';

describe('UnidadeTabsPage', () => {
  let component: UnidadeTabsPage;
  let fixture: ComponentFixture<UnidadeTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnidadeListPage } from './unidade-list.page';

describe('UnidadeListPage', () => {
  let component: UnidadeListPage;
  let fixture: ComponentFixture<UnidadeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

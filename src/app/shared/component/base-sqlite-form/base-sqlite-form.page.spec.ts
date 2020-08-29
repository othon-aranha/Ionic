import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaseSqliteFormPage } from './base-sqlite-form.page';

describe('BaseSqliteFormPage', () => {
  let component: BaseSqliteFormPage;
  let fixture: ComponentFixture<BaseSqliteFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseSqliteFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseSqliteFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

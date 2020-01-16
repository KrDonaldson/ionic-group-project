import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeedToComponent } from './need-to.component';

describe('NeedToComponent', () => {
  let component: NeedToComponent;
  let fixture: ComponentFixture<NeedToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedToComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

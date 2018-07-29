import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMsgComponent } from './error-msg.component';

describe('ErrorMsgComponent', () => {
  let component: ErrorMsgComponent;
  let fixture: ComponentFixture<ErrorMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

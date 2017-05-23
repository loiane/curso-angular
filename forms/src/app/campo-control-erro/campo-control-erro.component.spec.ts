import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoControlErrorComponent } from './campo-control-error.component';

describe('CampoControlErrorComponent', () => {
  let component: CampoControlErrorComponent;
  let fixture: ComponentFixture<CampoControlErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoControlErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoControlErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

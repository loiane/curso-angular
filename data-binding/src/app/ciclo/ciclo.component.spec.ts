import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloComponent } from './ciclo.component';

describe('CicloComponent', () => {
  let component: CicloComponent;
  let fixture: ComponentFixture<CicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

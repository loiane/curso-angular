/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CursoFormComponent } from './curso-form.component';

describe('CursoFormComponent', () => {
  let component: CursoFormComponent;
  let fixture: ComponentFixture<CursoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

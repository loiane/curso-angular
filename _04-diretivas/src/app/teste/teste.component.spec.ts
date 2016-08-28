/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TesteComponent } from './teste.component';

describe('Component: Teste', () => {
  it('should create an instance', () => {
    let component = new TesteComponent();
    expect(component).toBeTruthy();
  });
});

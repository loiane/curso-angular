/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CursosService } from './cursos.service';

describe('CursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosService]
    });
  });

  it('should ...', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));
});

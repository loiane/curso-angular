import { TestBed, inject } from '@angular/core/testing';

import { ConsultaCepService } from './consulta-cep.service';

describe('ConsultaCepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaCepService]
    });
  });

  it('should be created', inject([ConsultaCepService], (service: ConsultaCepService) => {
    expect(service).toBeTruthy();
  }));
});

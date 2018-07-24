import { TestBed, inject } from '@angular/core/testing';

import { VerificaEmailService } from './verifica-email.service';

describe('VerificaEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaEmailService]
    });
  });

  it('should be created', inject([VerificaEmailService], (service: VerificaEmailService) => {
    expect(service).toBeTruthy();
  }));
});

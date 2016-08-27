/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DiretivaIfService } from './diretiva-if.service';

describe('Service: DiretivaIf', () => {
  beforeEach(() => {
    addProviders([DiretivaIfService]);
  });

  it('should ...',
    inject([DiretivaIfService],
      (service: DiretivaIfService) => {
        expect(service).toBeTruthy();
      }));
});

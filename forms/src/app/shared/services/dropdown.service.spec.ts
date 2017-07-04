import { TestBed, inject } from '@angular/core/testing';

import { DropdownService } from './dropdown.service';

describe('DropdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropdownService]
    });
  });

  it('should ...', inject([DropdownService], (service: DropdownService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { VacanteService } from './vacante.service';

describe('VacanteService', () => {
  let service: VacanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { experienciasService } from './experiencias.service';

describe('ExperienciasService', () => {
  let service: experienciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(experienciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

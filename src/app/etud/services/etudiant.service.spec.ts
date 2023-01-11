import { TestBed } from '@angular/core/testing';

import { etudiantService } from './etudiant.service';

describe('etudiantService', () => {
  let service: etudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(etudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

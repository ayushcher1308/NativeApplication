import { TestBed } from '@angular/core/testing';

import { PublicAuthGuardService } from './public-auth-guard.service';

describe('PublicAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicAuthGuardService = TestBed.get(PublicAuthGuardService);
    expect(service).toBeTruthy();
  });
});

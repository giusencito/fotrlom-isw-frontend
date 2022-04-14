import { TestBed } from '@angular/core/testing';

import { FanaticGuard } from './fanatic.guard';

describe('FanaticGuard', () => {
  let guard: FanaticGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FanaticGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

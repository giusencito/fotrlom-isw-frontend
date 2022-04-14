/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmailPasswordService } from './EmailPassword.service';

describe('Service: EmailPassword', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailPasswordService]
    });
  });

  it('should ...', inject([EmailPasswordService], (service: EmailPasswordService) => {
    expect(service).toBeTruthy();
  }));
});

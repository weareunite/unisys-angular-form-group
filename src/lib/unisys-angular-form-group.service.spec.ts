import { TestBed } from '@angular/core/testing';

import { UnisysAngularFormGroupService } from './unisys-angular-form-group.service';

describe('UnisysAngularFormGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnisysAngularFormGroupService = TestBed.get(UnisysAngularFormGroupService);
    expect(service).toBeTruthy();
  });
});

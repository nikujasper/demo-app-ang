import { TestBed } from '@angular/core/testing';

import { SchoolInspectionService } from './school-inspection.service';

describe('SchoolInspectionService', () => {
  let service: SchoolInspectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolInspectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

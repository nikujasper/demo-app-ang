import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInspectionComponent } from './school-inspection.component';

describe('SchoolInspectionComponent', () => {
  let component: SchoolInspectionComponent;
  let fixture: ComponentFixture<SchoolInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolInspectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

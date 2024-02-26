import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlnComponent } from './fln.component';

describe('FlnComponent', () => {
  let component: FlnComponent;
  let fixture: ComponentFixture<FlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

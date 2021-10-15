import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOnlyComponent } from './staff-only.component';

describe('StaffOnlyComponent', () => {
  let component: StaffOnlyComponent;
  let fixture: ComponentFixture<StaffOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

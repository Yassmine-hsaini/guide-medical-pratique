import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrainageThoraciqueComponent } from './drainage-thoracique.component';

describe('DrainageThoraciqueComponent', () => {
  let component: DrainageThoraciqueComponent;
  let fixture: ComponentFixture<DrainageThoraciqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrainageThoraciqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrainageThoraciqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

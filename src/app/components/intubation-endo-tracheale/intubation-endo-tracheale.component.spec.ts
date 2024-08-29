import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntubationEndoTrachealeComponent } from './intubation-endo-tracheale.component';

describe('IntubationEndoTrachealeComponent', () => {
  let component: IntubationEndoTrachealeComponent;
  let fixture: ComponentFixture<IntubationEndoTrachealeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntubationEndoTrachealeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntubationEndoTrachealeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

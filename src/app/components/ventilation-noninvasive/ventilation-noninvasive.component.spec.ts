import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilationNoninvasiveComponent } from './ventilation-noninvasive.component';

describe('VentilationNoninvasiveComponent', () => {
  let component: VentilationNoninvasiveComponent;
  let fixture: ComponentFixture<VentilationNoninvasiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentilationNoninvasiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentilationNoninvasiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

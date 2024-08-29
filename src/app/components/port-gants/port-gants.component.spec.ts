import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortGantsComponent } from './port-gants.component';

describe('PortGantsComponent', () => {
  let component: PortGantsComponent;
  let fixture: ComponentFixture<PortGantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortGantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortGantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

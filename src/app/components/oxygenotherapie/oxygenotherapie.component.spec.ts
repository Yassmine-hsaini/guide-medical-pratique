import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenotherapieComponent } from './oxygenotherapie.component';

describe('OxygenotherapieComponent', () => {
  let component: OxygenotherapieComponent;
  let fixture: ComponentFixture<OxygenotherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OxygenotherapieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OxygenotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

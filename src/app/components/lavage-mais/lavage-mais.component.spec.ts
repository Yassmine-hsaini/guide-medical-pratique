import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavageMaisComponent } from './lavage-mais.component';

describe('LavageMaisComponent', () => {
  let component: LavageMaisComponent;
  let fixture: ComponentFixture<LavageMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LavageMaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavageMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

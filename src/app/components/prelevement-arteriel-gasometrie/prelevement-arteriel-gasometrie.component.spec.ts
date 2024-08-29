import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementArterielGasometrieComponent } from './prelevement-arteriel-gasometrie.component';

describe('PrelevementArterielGasometrieComponent', () => {
  let component: PrelevementArterielGasometrieComponent;
  let fixture: ComponentFixture<PrelevementArterielGasometrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrelevementArterielGasometrieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrelevementArterielGasometrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatheterismeArterielComponent } from './catheterisme-arteriel.component';

describe('CatheterismeArterielComponent', () => {
  let component: CatheterismeArterielComponent;
  let fixture: ComponentFixture<CatheterismeArterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatheterismeArterielComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatheterismeArterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

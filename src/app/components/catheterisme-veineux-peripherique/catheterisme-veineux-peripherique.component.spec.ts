import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatheterismeVeineuxPeripheriqueComponent } from './catheterisme-veineux-peripherique.component';

describe('CatheterismeVeineuxPeripheriqueComponent', () => {
  let component: CatheterismeVeineuxPeripheriqueComponent;
  let fixture: ComponentFixture<CatheterismeVeineuxPeripheriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatheterismeVeineuxPeripheriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatheterismeVeineuxPeripheriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

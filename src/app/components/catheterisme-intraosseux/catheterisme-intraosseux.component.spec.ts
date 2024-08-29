import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatheterismeIntraosseuxComponent } from './catheterisme-intraosseux.component';

describe('CatheterismeIntraosseuxComponent', () => {
  let component: CatheterismeIntraosseuxComponent;
  let fixture: ComponentFixture<CatheterismeIntraosseuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatheterismeIntraosseuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatheterismeIntraosseuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

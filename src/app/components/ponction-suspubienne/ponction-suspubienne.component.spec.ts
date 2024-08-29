import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonctionSuspubienneComponent } from './ponction-suspubienne.component';

describe('PonctionSuspubienneComponent', () => {
  let component: PonctionSuspubienneComponent;
  let fixture: ComponentFixture<PonctionSuspubienneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonctionSuspubienneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonctionSuspubienneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

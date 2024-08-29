import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonctionLombaireComponent } from './ponction-lombaire.component';

describe('PonctionLombaireComponent', () => {
  let component: PonctionLombaireComponent;
  let fixture: ComponentFixture<PonctionLombaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonctionLombaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonctionLombaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

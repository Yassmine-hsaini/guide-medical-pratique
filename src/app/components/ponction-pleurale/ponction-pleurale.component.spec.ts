import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonctionPleuraleComponent } from './ponction-pleurale.component';

describe('PonctionPleuraleComponent', () => {
  let component: PonctionPleuraleComponent;
  let fixture: ComponentFixture<PonctionPleuraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonctionPleuraleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonctionPleuraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

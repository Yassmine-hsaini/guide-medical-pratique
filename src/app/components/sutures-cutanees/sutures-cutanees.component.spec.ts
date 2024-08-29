import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuturesCutaneesComponent } from './sutures-cutanees.component';

describe('SuturesCutaneesComponent', () => {
  let component: SuturesCutaneesComponent;
  let fixture: ComponentFixture<SuturesCutaneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuturesCutaneesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuturesCutaneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

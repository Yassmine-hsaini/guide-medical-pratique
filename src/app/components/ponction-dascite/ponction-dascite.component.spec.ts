import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonctionDasciteComponent } from './ponction-dascite.component';

describe('PonctionDasciteComponent', () => {
  let component: PonctionDasciteComponent;
  let fixture: ComponentFixture<PonctionDasciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonctionDasciteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonctionDasciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoleEcritComponent } from './protocole-ecrit.component';

describe('ProtocoleEcritComponent', () => {
  let component: ProtocoleEcritComponent;
  let fixture: ComponentFixture<ProtocoleEcritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtocoleEcritComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocoleEcritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

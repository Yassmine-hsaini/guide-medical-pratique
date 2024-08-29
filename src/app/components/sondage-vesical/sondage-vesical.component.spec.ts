import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageVesicalComponent } from './sondage-vesical.component';

describe('SondageVesicalComponent', () => {
  let component: SondageVesicalComponent;
  let fixture: ComponentFixture<SondageVesicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SondageVesicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SondageVesicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageNasogastriqueComponent } from './sondage-nasogastrique.component';

describe('SondageNasogastriqueComponent', () => {
  let component: SondageNasogastriqueComponent;
  let fixture: ComponentFixture<SondageNasogastriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SondageNasogastriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SondageNasogastriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

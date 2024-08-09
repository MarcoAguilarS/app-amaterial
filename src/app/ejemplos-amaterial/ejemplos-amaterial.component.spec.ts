import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosAmaterialComponent } from '../app.component';

describe('EjemplosAmaterialComponent', () => {
  let component: EjemplosAmaterialComponent;
  let fixture: ComponentFixture<EjemplosAmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemplosAmaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemplosAmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

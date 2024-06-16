import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidodigitalComponent } from './contenidodigital.component';

describe('ContenidodigitalComponent', () => {
  let component: ContenidodigitalComponent;
  let fixture: ComponentFixture<ContenidodigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidodigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidodigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

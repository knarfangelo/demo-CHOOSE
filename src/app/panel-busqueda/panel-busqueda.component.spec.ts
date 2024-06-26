import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBusquedaComponent } from './panel-busqueda.component';

describe('PanelBusquedaComponent', () => {
  let component: PanelBusquedaComponent;
  let fixture: ComponentFixture<PanelBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelBusquedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

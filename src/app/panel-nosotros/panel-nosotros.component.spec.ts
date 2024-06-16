import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNosotrosComponent } from './panel-nosotros.component';

describe('PanelNosotrosComponent', () => {
  let component: PanelNosotrosComponent;
  let fixture: ComponentFixture<PanelNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

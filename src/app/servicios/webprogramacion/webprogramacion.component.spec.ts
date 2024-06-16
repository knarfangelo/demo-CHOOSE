import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebprogramacionComponent } from './webprogramacion.component';

describe('WebprogramacionComponent', () => {
  let component: WebprogramacionComponent;
  let fixture: ComponentFixture<WebprogramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebprogramacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebprogramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

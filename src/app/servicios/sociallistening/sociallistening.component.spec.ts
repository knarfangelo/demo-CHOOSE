import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociallisteningComponent } from './sociallistening.component';

describe('SociallisteningComponent', () => {
  let component: SociallisteningComponent;
  let fixture: ComponentFixture<SociallisteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociallisteningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociallisteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

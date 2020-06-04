import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialButtonComponent } from './social-button.component';

describe('SocialButtonComponent', () => {
  let component: SocialButtonComponent;
  let fixture: ComponentFixture<SocialButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorBadgeComponent } from './creator-badge.component';

describe('CreatorBadgeComponent', () => {
  let component: CreatorBadgeComponent;
  let fixture: ComponentFixture<CreatorBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

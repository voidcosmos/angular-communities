import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityItemComponent } from './community-item.component';

describe('CommunityItemComponent', () => {
  let component: CommunityItemComponent;
  let fixture: ComponentFixture<CommunityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuideListPage } from './guide-list.page';

describe('GuideListPage', () => {
  let component: GuideListPage;
  let fixture: ComponentFixture<GuideListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

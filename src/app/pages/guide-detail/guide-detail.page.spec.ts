import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuideDetailPage } from './guide-detail.page';

describe('GuideDetailPage', () => {
  let component: GuideDetailPage;
  let fixture: ComponentFixture<GuideDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

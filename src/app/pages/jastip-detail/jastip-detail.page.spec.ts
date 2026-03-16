import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JastipDetailPage } from './jastip-detail.page';

describe('JastipDetailPage', () => {
  let component: JastipDetailPage;
  let fixture: ComponentFixture<JastipDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JastipDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

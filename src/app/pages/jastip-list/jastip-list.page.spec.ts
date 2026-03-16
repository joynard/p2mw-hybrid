import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JastipListPage } from './jastip-list.page';

describe('JastipListPage', () => {
  let component: JastipListPage;
  let fixture: ComponentFixture<JastipListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JastipListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

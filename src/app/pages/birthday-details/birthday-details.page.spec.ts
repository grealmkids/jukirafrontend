import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirthdayDetailsPage } from './birthday-details.page';

describe('BirthdayDetailsPage', () => {
  let component: BirthdayDetailsPage;
  let fixture: ComponentFixture<BirthdayDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

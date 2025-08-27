import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryLogsPage } from './delivery-logs.page';

describe('DeliveryLogsPage', () => {
  let component: DeliveryLogsPage;
  let fixture: ComponentFixture<DeliveryLogsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

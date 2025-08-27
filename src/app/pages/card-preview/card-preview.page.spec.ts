import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPreviewPage } from './card-preview.page';

describe('CardPreviewPage', () => {
  let component: CardPreviewPage;
  let fixture: ComponentFixture<CardPreviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

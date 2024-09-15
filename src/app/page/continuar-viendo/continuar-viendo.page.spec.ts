import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinuarViendoPage } from './continuar-viendo.page';

describe('ContinuarViendoPage', () => {
  let component: ContinuarViendoPage;
  let fixture: ComponentFixture<ContinuarViendoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuarViendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

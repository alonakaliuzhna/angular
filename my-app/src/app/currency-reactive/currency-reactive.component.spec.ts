import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyReactiveComponent } from './currency-reactive.component';

describe('CurrencyReactiveComponent', () => {
  let component: CurrencyReactiveComponent;
  let fixture: ComponentFixture<CurrencyReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

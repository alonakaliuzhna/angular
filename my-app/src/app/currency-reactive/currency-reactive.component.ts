
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import {CurrencydataService} from "../currencydata.service"

@Component({
  selector: 'app-currency-reactive',
  templateUrl: './currency-reactive.component.html',
  styleUrls: ['./currency-reactive.component.css']
})
export class CurrencyReactiveComponent {
  private _value$ = new BehaviorSubject<number>(0);
  public value$ = this._value$.asObservable();

  currencyForm = new FormGroup({
    amount: new FormControl(0),
    originCountry: new FormControl(''),
    targetCountry: new FormControl(''),
  });

  constructor(private currencyService: CurrencydataService) {
    this.convert();
  }

  convert() {
    if (
      this.currencyForm.value.originCountry &&
      this.currencyForm.value.targetCountry &&
      this.currencyForm.value.amount
    ) {
      this.value$ = this.currencyService
        .getcurrencydata(this.currencyForm.value.originCountry)
        .pipe(
          switchMap((response) => {
            return of(
              response.rates[this.currencyForm.value.targetCountry as string] *
                (this.currencyForm.value.amount as number)
            );
          })
        );
    }
  }
}

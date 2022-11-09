import { Component, OnInit } from '@angular/core';
import { CurrencydataService } from '../currencydata.service';

@Component({
  selector: 'app-current-exchange-rate',
  templateUrl: './current-exchange-rate.component.html',
  styleUrls: ['./current-exchange-rate.component.css']
})
export class CurrentExchangeRateComponent implements OnInit {

  curencyuds = 'USD';
  currencyeur = 'EUR';
  currencyuah = 'UAH';

  uahToUsd = 0;
  uahToEur = 0;


  constructor(private currency:CurrencydataService) { }

  ngOnInit(){
    this.getBaseRates();
  }

  getBaseRates() {
    this.currency
      .getBaseCurrencyData(this.currencyuah)
      .subscribe((data: any) => {
        const rates = data.rates;

        this.uahToUsd = 1/rates[this.curencyuds]
        this.uahToEur = 1/rates[this.currencyeur]
      });
  }

}

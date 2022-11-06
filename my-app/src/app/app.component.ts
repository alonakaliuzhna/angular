import { Component } from '@angular/core';
import { CurrencydataService } from './currencydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currjson:any =[];


curencyuds = 'USD';
  currencyeur = 'EUR';
  currencyuah = 'UAH';

  uahToUsd = 0;
  uahToEur = 0;

  ngOnInit() {
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

  base ="USD";
  cont2="USD";
  result:any = [];
  amount:any = [];




  changebase(a:string){
    this.base =a;
    console.log(this.base)
  }
  tocountry(b:string){
    this.cont2 = b;
    console.log(this.cont2)

  }

  amounts(c:string){
    this.amount = c;
    console.log(this.amount)

  }



  constructor(private currency:CurrencydataService){}
  convert(){


    console.log(this.base)
    console.log(this.cont2)
    console.log(this.amount)



    this.currency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson= JSON.stringify(data);
      this.currjson= JSON.parse(this.currjson);
      this.amount = JSON.parse(this.amount)



     console.log(this.result)
     console.log(this.currjson.rates)
     console.log(this.currjson)




      if (this.cont2 ==="USD"){
        this.result = this.currjson.rates.USD * (this.amount)

      }


      if (this.cont2 ==="EUR"){
        this.result = this.currjson.rates.EUR * (this.amount)
      }


      if (this.cont2 ==="UAH"){
        this.result = this.currjson.rates.UAH * (this.amount)
      }
    })

  }
}

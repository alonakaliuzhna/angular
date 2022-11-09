
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyReactiveComponent } from './currency-reactive/currency-reactive.component';
import { CurrentExchangeRateComponent } from './current-exchange-rate/current-exchange-rate.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyReactiveComponent,
    CurrentExchangeRateComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

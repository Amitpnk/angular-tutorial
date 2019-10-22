import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from '../Utility/Service';
import { ReverseString } from '../Utility/Pipes';
import { IndianCurrency } from '../Utility/Currency.Pipes';


@NgModule({
  declarations: [CustomerComponent, ReverseString, IndianCurrency],
  imports: [
    CommonModule,
    CustomerRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [// For service
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }]
})
export class CustomerModule { }

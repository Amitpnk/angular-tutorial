import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { CustomerComponent } from './Customer/customer.component';
import { SupplierComponent } from './Supplier/supplier.component';
import { BaseLogger, DbLogger, ConsoleLogger, EmailLogger } from './Utility/Logger';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './Utility/Service';
import { ReverseString } from './Utility/Pipes';
import { IndianCurrency } from './Utility/Currency.Pipes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // CustomerComponent,
    // SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [
    // Centralised DI
    { provide: BaseLogger, useClass: DbLogger },

    // Conditional DI
    { provide: '1', useClass: ConsoleLogger },    // Customer component
    { provide: '2', useClass: EmailLogger }, // Supplier component


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

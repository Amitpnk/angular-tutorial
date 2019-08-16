import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { CustomerComponent } from './Customer/customer.component';
import { SupplierComponent } from './Supplier/supplier.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Supplier', component: SupplierComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

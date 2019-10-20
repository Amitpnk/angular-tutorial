import { Component, OnInit, Injector } from '@angular/core';
import { CustomerModel } from './customer-model';
import { BaseLogger } from '../Utility/Logger';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  logObj: BaseLogger;

  constructor(log: Injector) {
    this.logObj = log.get('1')
    this.logObj.Log();
  }

  ngOnInit() {
  }

  customerModel: CustomerModel = new CustomerModel();
  customerModels: Array<CustomerModel> = new Array<CustomerModel>();

  Add() {

    this.customerModels.push(this.customerModel);
    this.customerModel = new CustomerModel();
  }

  hasError(typeofValidator: string, controlName: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }

}

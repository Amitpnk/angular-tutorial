import { Component, OnInit, Injector } from '@angular/core';
import { CustomerModel } from './customer-model';
import { BaseLogger } from '../Utility/Logger';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  logObj: BaseLogger;

  constructor(log: Injector, public http: HttpClient) {
    this.logObj = log.get('1')
    this.logObj.Log();
    this.GetFromServer()
  }

  ngOnInit() {
  }

  customerModel: CustomerModel = new CustomerModel();
  customerModels: Array<CustomerModel> = new Array<CustomerModel>();

  Add() {

    this.customerModels.push(this.customerModel);
    this.customerModel = new CustomerModel();
  }

  PostToServer() {
    let custDTO: any = {};
    custDTO.CustomerCode = this.customerModel.CustomerCode;
    custDTO.CustomerName = this.customerModel.CustomerName;
    custDTO.CustomerAmount = this.customerModel.CustomerAmount;

    this.http.post('http://localhost:3000/Customers', custDTO)
      .subscribe(res => this.Success(res), res => this.Error(res))
  }

  
  GetFromServer() {
    this.http.get('http://localhost:3000/Customers')
      .subscribe(res => this.SuccessGet(res), res => this.Error(res))
  }

  Success(res) {
    this.GetFromServer();
    // console.log(res);
  }

  Error(res) {
    console.log(res);
  }

  
  SuccessGet(res) {
    this.customerModels = res;
    this.customerModel = new CustomerModel();
  }

  hasError(typeofValidator: string, controlName: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }

}

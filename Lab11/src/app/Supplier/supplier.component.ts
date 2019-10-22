import { Component, OnInit, Injector } from '@angular/core';
import { BaseLogger } from '../Utility/Logger';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styles: []
})
export class SupplierComponent implements OnInit {

  logObj: BaseLogger;

  constructor(log: Injector) {
    this.logObj = log.get('2')
    this.logObj.Log();
  }

  ngOnInit() {
  }

}

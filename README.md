# angular-application

Step by step creating angular application with each labs

## About Angular application

Angular is a declarative JavaScript framework to simply JavaScript code

In our applicatin, we generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1

AngularJS was originally developed in 2009 by Miško Hevery and Adam Abrons. Abrons left the project, but Hevery, who works at Google, continues to develop and maintain the library with fellow Google employees Igor Minár and Vojta Jína.

## Sending Feedback

For feedback can drop mail to my email address amit.naik8103@gmail.com or you can create [issue](https://github.com/Amitpnk/angular-customer-app/issues/new)

## Sample application with each labs

### Lab 1 - Angular overview

What and why we have to use Angular
You can find answer [here](https://dotnet-professional-amit.blogspot.com/2019/07/interview-question-one-line-on-angular.html)

#### Prerequisite to learn angular

Install Node and npm latest version <br/> 
Install Angular CLI 8 or later <br/>
Install Visual Studio Code <br/>

### Lab 2 - npm example

```

$ npm init
$ npm install jquery --save
$ npm install angular --save
```

#### package.json and versioning

What is Major version, minor version and revision version <br/>
What is difference between ^, ~ and * <br/>
What is difference between dependency and devDependency


### Lab 3 - Setting up and running first angular application

#### Angular CLI

```
// Installing Angular CLI
$ npm install -g @angular/cli 

// To verify vesion 
$ npm -v
$ node -v
$ ng v
```

Angular CLI is command line interface which helps to get basic setup of angular project <br/>
For eg: If we run, `npm install --save angular` we will able to get angular 1.7.8 as updated in package-lock.json file, so angular-cli helps to get latest version of angular (currently 8) with basic setup of angular project

AngularJS means 1.X version
Angular means 2.x or higher

```
// For dry run
$ ng new angular-application -d

// To create angular application
$ ng new angular-application

// to redirect to path
$ cd angular-application

// to run application in development mode
$ ng serve --open 
$ ng s -o
// Open http://localhost:4200 to view it in the browser.

// to build application 
$ ng build
// create dist folder which will go for production

```

#### Configuration files

angular.json -> Angular<br/>
package.json -> Node<br/>
tsconfig.json -> TypeScript<br/>
tslint.json -> Linting<br/>

#### Files in dist folder (after running ng build cmd)

runtime.js -> This is for webpack runtime<br/>
polyfill.js -> Helps to run new ES version javascript in old browser which does not support them<br/>
vendor.js -> Actual project code (component, modules, model)<br/>
main.js -> Points first module<br/>
style.js -> all css code<br/>


### Lab 4 - Installing bootstrap for Angular

In this lab we will see how to integrate old javascript frameworks like bootstrap and jQuery with Angular

install bootstrap, jquery and @types/jquery to your package.json file

```
$ npm install bootstrap@3 --save
$ npm install @types/jquery --save
$ npm install jquery --save
// or you can all these command in one go
$ npm install bootstrap@3 @types/jquery jquery --save

```

Add below jquery to angular.json 

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

Check by adding button with css in app.component.html file

```html
Welcome to {{ title }}! <br/>
<input type="button" value="Test" class="btn btn-primary">
```

### Lab 5 - Angular Routing

Create Customer, Supplier and Home page using below command

```cmd
$ ng g c Home/Home --skipTests --flat=true -is
$ ng g c Customer/Customer --skipTests --flat=true -is
$ ng g c Supplier/Supplier --skipTests --flat=true -is
```

`--skipTests` is to skipt spec files <br/>
`--flat` is to not create folder <br/>
`-is` is to skip css files <br/>

Add below code snippet in app-routing.module

```typescript
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Supplier', component: SupplierComponent },
  { path: '', component: HomeComponent }

];
```

Add below code snippet in app.component.html

```html
<div class="container">
    <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
            <li routerLinkActive="active"><a routerLink="Home" >Home</a></li>
            <li routerLinkActive="active"><a routerLink="Customer" >Customer</a></li>
            <li routerLinkActive="active"><a routerLink="Supplier" >Supplier</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
</div>
```

### Lab 6 - Creating simple UI page

Create Customer Model class in customer folder using below command

```
$ ng g class Customer/customer-model --skipTests
```

Add below code snippet in *customer-model.ts*

```typescript
export class CustomerModel {
    CustomerCode: string;
    CustomerName: string;
    CustomerAmount: number;
}
```

Create simple UI page in *customer.component.html*
```html
<div>
    Customer code : <input type="text" [(ngModel)]="customerModel.CustomerCode" name="cCode" id="cCode"> <br>
    Customer name : <input type="text" [(ngModel)]="customerModel.CustomerName" name="cName" id="cName"> <br>
    Customer amount : <input type="text" [(ngModel)]="customerModel.CustomerAmount" name="cAmount" id="cAmount"> <br>
    <input type="button" value="Add">
    <br>
    {{customerModel.CustomerCode}} <br>
    {{customerModel.CustomerName}} <br>
    {{customerModel.CustomerAmount}} <br>
</div>
```

create customer object in *customer.component.html*

```typescript
import { CustomerModel } from './customer-model';
.
export class CustomerComponent implements OnInit {
  .
  .
  customerModel: CustomerModel = new CustomerModel();
}

```

import FormsModule to *app.module.ts* file

```typescript
import { FormsModule } from "@angular/forms";
.
.
@NgModule({
 .
 .
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  .
  .
})
export class AppModule { }
```

Build and run application 
***

#### For creating html table

create customers object in *customer.component.ts*

```typescript
import { CustomerModel } from './customer-model';
.
export class CustomerComponent implements OnInit {
  .
  .
  customerModel: CustomerModel = new CustomerModel();
  customerModels: Array<CustomerModel> = new Array<CustomerModel>();

  Add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new CustomerModel();
  }
}

```

and bind to *customer.component.html* file

```html
  <table>
        <tr>
            <td>Customer code</td>
            <td>Customer name</td>
            <td>Customer amount</td>
        </tr>
        <tr *ngFor ="let cust of customerModels" >
            <td>{{cust.CustomerCode}}</td>
            <td>{{cust.CustomerName}}</td>
            <td>{{cust.CustomerAmount}}</td>
        </tr>
    </table>
```

Build and run application
***

### Lab 7 - Implementing lazy loading and increase the performance of the application

Create Customer and Supplier module w.r.t component

```
$ ng g module Customer/Customer --flat=true --routing=true

$ ng g module Supplier/Supplier --flat=true --routing=true  
```

Modify routes in *app-routing.module.ts* file

```typescript
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', loadChildren: './Customer/customer.module#CustomerModule' },
  { path: 'Supplier', loadChildren: './Supplier/supplier.module#SupplierModule' },
  { path: '', component: HomeComponent }
];
```

Modify routes in child file *customer-routing.module.ts*

```typescript
const routes: Routes = [
  { path: 'Add', component: CustomerComponent }
];
```

Modify routes in child file *supplier-routing.module.ts*

```typescript
const routes: Routes = [
  { path: '', component: SupplierComponent }
];
```

Remove *CustomerComponent* and *SupplierComponent* in *app.module.ts* file

Delcare *CustomerComponent* and *SupplierComponent* w.r.t its Module file

### Lab 8 - Implementing validation



```typescript
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

export class CustomerModel {
    CustomerCode: string;
    CustomerName: string;
    CustomerAmount: number;

    formCustomerGroup : FormGroup;
    constructor(){
        let builder = new FormBuilder();
        this.formCustomerGroup = builder.group({});

        this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));

        let validationCollection =[];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"));

        this.formCustomerGroup.addControl("CustomerCodeControl", new FormControl('',Validators.compose(validationCollection)));

    }
}

```


```html
<form [formGroup]="customerModel.formCustomerGroup">
    Customer code : <input type="text" formControlName="CustomerCodeControl" [(ngModel)]="customerModel.CustomerCode"
        name="cCode" id="cCode"> <br>
    Customer name : <input type="text" formControlName="CustomerNameControl" [(ngModel)]="customerModel.CustomerName"
        name="cName" id="cName"> <br>
    Customer amount : <input type="text" [(ngModel)]="customerModel.CustomerAmount" name="cAmount" id="cAmount"
        [ngModelOptions]="{standalone: true}"> <br>
    <input type="button" value="Add" (click)="Add()" [disabled]="!(customerModel.formCustomerGroup.valid)">
    <br>
    {{customerModel.CustomerCode}} <br>
    {{customerModel.CustomerName}} <br>
    {{customerModel.CustomerAmount}} <br>
    <div *ngIf="customerModel.formCustomerGroup.dirty" [hidden]="!(hasError('pattern', 'CustomerCodeControl'))">Customer
        code
        format is not proper</div>
    <div *ngIf="customerModel.formCustomerGroup.dirty" [hidden]="!(hasError('required', 'CustomerNameControl'))">
        Customer
        code is required</div>
    <div *ngIf="customerModel.formCustomerGroup.dirty" [hidden]="!(hasError('required', 'CustomerNameControl'))">
        Customer name is required</div>

</form>
```
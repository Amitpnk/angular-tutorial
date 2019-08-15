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
Install Angular CLI 8 or later<br/>
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
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
]
```

 

### Lab 5 - Angular Routing

Create Customer, Supplier and Home page using below command

```cmd
ng g c Home/Home --skipTests --flat=true
ng g c Customer/Customer --skipTests --flat=true
ng g c Supplier/Supplier --skipTests --flat=true
```

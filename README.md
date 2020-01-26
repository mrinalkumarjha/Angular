# GIT
…or create a new repository on the command line
echo "# Angular" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/mrinalkumarjha/Angular.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/mrinalkumarjha/Angular.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

# Git process to commit file from git bash

Ref  link : https://www.earthdatascience.org/workshops/intro-version-control-git/basic-git-commands/

git status: for checking status like tracked or untracked
git add --all: Add all the files to tracking
git reset : to unstage all changes
git reset <file> : to unstage particular file
git commit -m 'message': to commit to local directory
git push : to push in original branch
git pull : to pull changes from git


# LAB 1


# Angular what it is and why do we need it ?

Angular is binding framework. it help us to bind view and model  (view(HTML) -> <- Binding code -> <- Model(JAVASCRIPT OBJECT))  . it is one framework which you can use in
mobile and desktop.




# 1:
if we install angular via npm (npm install angular) it install angular 1.7 by default

# 2: 
Getting the new angular is difficult. And running the first angular application is MORE difficult. Reason : new angular is organised into modules. For example for angular http we can just download http module from npm and use it. if we want to do angulat animation we can just download angular animation module. So downloading each of them one by one is difficult each time.

For ex : if want to run your first application using angular you need to integrate typescript, you need to integrate node, you need to integrate webpack, tsconfig.json, packageconfig.json and  so on..  
Thats the reason we have angular cli. angular cli is command line interface(.exe file) which willl help you to get everything needed for angular. it will create directory structure, it will download angular, it will do everything for you.

# 3:
when we install any package with -g flag. it is installed globally. then we can run it from any command prompt. so we install angular cli globally

# npm install @angular/cli -g

# 4:
To create project using cli use ng new CustomerApplication

# 5:

ng serve will do compiling and bundling. it takes whole application in RAM (in memory) compile it, bundle it and host it to http://localhost:4200/. you can check no bin or dist
folder will be created after ng serve.

# 6 :
For inheritance in java script you have to use prototype. if you need to create module you need to use closures.
But in typescript we use extends keyword for inheritance. Typescript is superset of javascript. type tsc commang in terminal and it will compile all typescript file 
to js file. Typescript is object oriented suger coating language over javascript.

# 7 : Angular folder structure

1:Dist > Here final compiled js will be available. All the final output which need to take to production resides here.
2:node_modules > whatever npm package you will do all packages will copied to this folder.
3:e2e > e2e is nothing but end to end testing. here we will write all white box test and that test will fire or source code for testing purpose.
4:src > Final source code folder

# 8 : Configuration file Package.json, tsconfig.json, angular.json and tslint.json
if you see the angular application it has 3 big technologies which work togather. 1st is angular framework, 2nd typescript which help us to transpile typescript to javascript.
and last one is node which is our package manager.  for each one from these we need configuration files.

Angular : Angular.json  : All the angular configuration besides in this file. it is used for angular purpose.
sourceRoot: it is a property of angular.json says that where is your source code.
Architect: this property says which type of builder will run for which type of command. angular cli has lots of command like ng build, ng serve, ng test. for each command
partular builder is selected based on this configuration.
Here start index file , main file are configured.

# Node: Package.json  : 
all the packages are listed in package.json file. packages.json is node configuration file. it holds all the dependencies. 
when you say # npm install it will install all the framework defined in package.json
there are 2 section dependencies and devdependencies. devdependencies are thing which will not go to production. it is used in develpoment phase only. for example
testing framework like KARMA we dont need in production. Compiler is also used in coding phase only.
in dependencies we refer core component we will use in project. So this is the file by which angular is being installed.

# Typescript: tsconfig.json : tsconfig holds the typescript configuration.


Linting: tslint.json : used for linting process. linting is the process of running a program that will analyse code for potential error. During the coding phase it will raise error.

so all the json file available is for some kind of configuration.

# 9 JIT Vs AOT
REF : https://levelup.gitconnected.com/just-in-time-jit-and-ahead-of-time-aot-compilation-in-angular-8529f1d6fa9d

# 10 ng serve vs ng build

ng serve compile in inmemory . ng build create file in dist folder. you can take this dist folder to production

# 11 MODULES :
A group of component is called module in angular. So you can say that i have Accounting module and in this module i will keep journal and voucher component.
We can have module HospitalManagement in which i will keep component like patients doctor soon..
so component has binding code of ui and model. 

@NgModule decorator of modules of class defines it as module. it has following properties

 > declarations : it contains all components and directive need to be used in that module. to use any component here that component should have exported first 
	and imported in modules.
 > bootstrap : it says from all of the components which is the startup components.


# 12 Interpolation : {{}}
{{title}} : this is symtax of interpolation where title is property of typescript class. by interpolation we bind property to view.

# 13 Decorator : 
it is used to connect ui to ts code. ex @Component decorator makes typescript file a component is used to connect html file to ts file. in java decorator are
named by dataannotations. in dotnet we call it attribute. @component comes from angular core

# 14 Main.ts :
complicated application can have lots of modules. so angular needs to know from these modules which one is startup module. That is defined by main.ts file.
here we import all modules and tells angular to bootstrap module. 
But someone has to invoke this main.ts file. and that is done by index.html. 
what happens is application start. index html is requested. index.html calls main.ts. main.ts calls Apppmodule by bootstraping , app module then goes and load 
app component as it is bootstrap component. and app component goes and load html. 

life cycle Link : https://ibb.co/JFzBBfS


# 15 Polyfils.ts
it is framework which enable us to make new js code run in old browser.

# 16 WEBPACK:
Going live in case of angular is not easy. coz there are series of steps need to be performed. 
1st we need to compile all ts file to js file.
2nd we also need to do bundling. like rather then creating seperate js file we would like to create one bundle. like one bundle for each connected thing
like one bundle for one module.
3rs we need to put image and css into like bin or dist folder.
So we can see that series of steps need to performed before going live.  And # webpack is one open source framework which does this for us. it bundle webapp
compress it and put it to final folder.
cli team do this internally. for example when we use ng build or ng serve cli internally do this. inetrnally it use webpack. so after final build all js 
are included in index.html and this is done by webpack.

AFTER BUILD INSIDE DIST THERE ARE SOME IMP FILE GENERATED: these 5 file needed when we go live in angular.

 a) runtime.js :  this is for webpack runtime.
 b) pollyfils.js : this helps us to run new javascript in old browser.
 c) styles.js : all stylesheer are converted into js file and comes into this file.
 d) Vendor.js : This holds the actual code what we write in typescript.
 e) main.js : this is the file which invokes modules.
 
so when you load application with ng serve it comes from in-memory but when you load from dist it loads from physical location.


#  --------LAB2--------------


# Angular file naming convention: https://angular.io/guide/styleguide 


# Directive :
directive helps you to manipulate dom easily. Following are types of directive.

 > ngModel : used to do binding from ui to component.  ex : <input [(ngModel)]="CustomerModel.CustomerCode" type="text">

 if you need to pass data from ui to component use  ()  : ex : (ngModel)="CustomerModel.CustomerCode"
 if you need to pass data from component to ui use  []  : ex : [ngModel]="CustomerModel.CustomerCode"
 For two directional use [()] "banana in the box"  	[()] : : ex : [(ngModel)]="CustomerModel.CustomerCode"
 
 > [routerLink]   : it is directive
 
 <a [routerLink]="['Home']">Home</a> : checks the Home link for in router collection.
 
 > [formGroup] : directive to connect form with model
 ex : <form [formGroup]= "CustomerModel.formCustomerGroup">
 
 > [disabled] : directive to enable disable control by condition.
 ex : <input [disabled]="CustomerModel.formCustomerGroup.valid" type="button" value="Add" (click)="Add()" />

 
# *ngFor : the For LOOP

 <tr *ngFor="let cust of CustomerModels">
        <td>{{cust.CustomerCode}}</td>
        <td>{{cust.CustomerName}}</td>
        <td>{{cust.CustomerAmount}}</td>
    </tr>


# Create array like this :   CustomerModels: Array<Customer> = new Array<Customer>();


# PackageLock.Json :
this file talks how npm versioning works. Version is divided into three parts

# EXAMPLE 
6.1.0 : first no is major version, second no is minor version, third no is revision. 
If major version increase this is breaking changes. it means he has added new feature and removed old one. 
if minor version is increases it means there are not any breaking changes.
Revision is incremented for patched and bug fixes.

If you want to see versions of particular npm packages use following command

# npm view jquery versions  : to show all jquery version

# npm view rxjs versions  : to show all rxjs version

 # "jquery": "^3.4.1", : if you put carrot sign and say npm install it will install latest minor and Revision changes.
 # "jquery": "~3.4.1", : if you put tild sign and say npm install it will install Revision changes only.
 
 # Npm does not increment major version automatically.
 
 # package.lock.json is file which holds exact version of all npm packages.

 # -----------LAB3--------------
 
 # ROUTING  : routing helps us in navigating between each component.
 
 # VVI only master page will have selecter. this will be the bootstrap component.
 
 # Implement lazy loading  : load on demand
 if we dont implement lazy loading, in main.ts file all component will be loaded on page load. so what if you want to implement
like when you load only master page should load and then rest page should load on demand.
SO we will implement lazy loading for this. So here are steps needed

1st : divide project into smaller module
ex : create 1 module for home and master page. and create feature module for rest.

2nd : self contained route for self contained module.
ex: if you have 3 module create 3 seperate routing file for each module.

following are way to do lazy load.

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', loadChildren: '../Customer/CustomerApp.CustomerModule#CustomerModule' },
    { path: 'Supplier', loadChildren: '../Supplier/CustomerApp.SupplierModule#SupplierModule' },
    { path: '', component: HomeComponent }
];

# loadChildren is way by which we load feature module on demand.

# forRoot is only defined in main module. forChild is used in feature module.

# Remove the Browsermodule and import common module in feature module. as browsermodule is already loaded in main module, so angular
# will throw error if used in feature module.
ex : import { CommonModule } from '@angular/common';

#  so after lazy loading if you do ng build you should be getting bundle for feature modules also.


 # VALIDATION IN Angular
 
 1 Appripriate place of applying validation between ui , component and model is : model. since defination of model is
 business logic + data . hence business logic here is validation. 

To apply validation in model we need to import following from angular.

import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
at top there is formgroup then formcontrol then validations. formbuilder helps us to create tree model of FormGroup, FormControl, Validators

So applying validation is three step process . CCC process

here first C is create, 2nd C is connect, 3rd C is CHECK.

// CREATE : we create the validation object model.
// Connect : we connect the validation to ui
// Check : IsValid, IsDirty 


# Creating centralized method in controller for validation

hasError(typeofValidator: string, controlname: string): boolean {
  return this.CustomerModel
  .formCustomerGroup
  .contains[controlname]
  .hasError(typeofValidator);
}

// call like this

<div *ngIf="CustomerModel.formCustomerGroup.dirty"
 [hidden]="!(hasError('pattern','CustomerCodeControl'))">
Customer code pattern not valid</div>

<div *ngIf="CustomerModel.formCustomerGroup.dirty"
[hidden]="!(hasError('required','CustomerNameControl'))">Customer name is required</div>


<div *ngIf="CustomerModel.formCustomerGroup.dirty"
[hidden]="!(hasError('required','CustomerCodeControl'))">
Customer code is required</div>


# DEPENDENCY INJECTION : helps in creating loosely coupled architecture.

Definition of good architecture : Change at one place should not lead to change at many place.

for example logging into browser console,email, file , db and more. and in future more looger can be added.

so we create interface to following consistency.

Donot create concreate class reference and client will use only Interface like ILogger. client dosent know it is
file logger, db logger or console logger.

Creation of object should be done somewhere else. All class will point towards ILogger interface only. 

Object creation will heppen by some provider. provider will inject classes to component.

SO we use providers section of main module to create container . it will inject object based on confuguration.

As javascript dont understand interface so we use BaseLogger instead if interface while providiing in main module.

Two types of DI :

Centralised DI : in centralised if we change logger type in provider it will reflect all places.

Conditional DI : here client has authority to make choice to inject type of object. for conditional DI we use tokens.
tokens are key,  by using that key client points to concreat classes.

Now client use injector to inject object. injector holds collection of provider.

in main module :

providers: [
    // for dependency injection.
    // As javascript dont understand interface so we use BaseLogger instead if interface while providiing in main module.
    {
      // centralized DI
      provide: BaseLogger,
      useClass : DbLogger
    },
    {provide: '1', useClass: DbLogger},
    {provide: '2', useClass: ConsoleLogger}
  ]
  
  
in constructor:

 constructor(_injector : Injector) {
    this.logger = _injector.get('2');
    this.logger.Log();
  }
 
 
 
# INPUT OUTPUT AND EVENT EMITTOR

we can create user control with input output and event emittor. Refer  UserControl folder of this project for all detail.

if we need to pass data from ui to component we use @input


if we need to pass data from component to ui we use @output


eventemittor help us to create event by which output will travel.


Note : we normally use element name like grid-ui (use hiphen) as this prevent our element to collied from html element


















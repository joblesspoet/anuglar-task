# AngularJS Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Detail

This project consist of 4 assignemnt questions as shared withe me. For each single exercise, I craeted a separate components for it's running state. If you acces (http://localhost:4200) (if us use ng serve 4200 default port). Then you will be redirected to (http://localhost:4200/exercise/home). At this page you will listing of links Exercise 1 to 4.

## Exercise 1

In this exercise requested to geneate Angular Directive, that is practically implemented. For this i used ng g command to genereate a new directive that is placed under app/directives directory. In (app/exercises/component//exercise1) directory you will see a component for this exercise. A formGroup is used to Reactive Forms where input field is added and directive is applied with some validation stuff directly bind with directive.

## Exercise 2

In this exercise requested to write equalient code in Angular 11 or newer version. In this exericse two approaches are implemented using service and promises. For this created a new server AppHttpService. This service is using Angular Interceptor to intercept the request and based on request method(GET, POST, PUT, DELETE), return the response. This service is mock right now, we are not calling any uRL. So it just intercept request and return resposne. IN the exercise2 code (app/exercise/components/exercise2/exercise2.component.ts) file you can see the code.


## Exercise 3
In this exercise to write equalient code change detection in ngModel properties. if you open the file (app/exercise/components/exercise2/exercise3.component.ts). You will see I used EventMitter for ngModel and default method of angular ngModelChange is bind with input field. This method delete all teh changes made in the property. ngModelCahnge vs DOM changes are two different concepts. inputCounter is ngmodel attached with input field on change in this model ngModelChanges event fires and detect the changes.


## Exercise 4

In this exercise, I have to write a code to submit form in Angular and write test cases (no of test case). I used the same http service AppHttpService to submit form data and replace it. After that test case used angular default jasmine, Karma for this task. You can review the test and also run them using (ng run test -- --includes src/app/exercise/components/exercise4/exercise4.component.spec.ts)




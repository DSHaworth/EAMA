# Eama

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Commands

## New Component
ng generate component xyz

## Add Angular Material
ng add @angular/material

## Add PWA Support
ng add @angular/pwa

## Add Dependency
ng add _____

## Run and Watch Tests
ng test

## Build for Production
ng build --prod

# Docker
https://phoenixnap.com/kb/docker-mongodb
https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/

## Mongo

    // Download latest offical Docker image for MongoDB database.
    $> docker pull mongo

    // Start the Docker container with the 'run' command
    $> docker run -it -v d:/data/db:/mongodata --name mongodb -d mongo

    // https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/
    // Connect to the container using the interactive terminal
    $> docker exec -it mongodb bash

    // Launch the MongoDB shell client
    $> mongo

    // See list of databases
    $# show dbs

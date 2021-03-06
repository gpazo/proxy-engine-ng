# Proxy Engine NG

[![Build status][ci-image]][ci-url]

A Angular CLI, Angular Universal, [Trails](https://trailsjs.io/), and [Proxy Engine](https://github.com/CaliStyle/trailpack-proxy-engine) Boiler Plate.

Do you need to use Angular 5+ with Server Side Rendering (SSR) and an advanced node.js framework? This is the boiler plate for you!

## Trails server
run `npm run build && node dist/server.js` for the trails server to start. Navigate to `http://localhost:3000/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Quick Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Alternatively run `npm run build`. The build artifacts will be stored in the `dist/` directory.

## Production Build

Run `npm run build:prod` for a production build. The build artifacts will be stored in the `dist/` directory. To start the server run `node dist/server`.

## Running CI tests
Run `npm test` to execute the unit test, end to end tests, and mocha spec test for node.js.

## Running unit tests

Run `ng test` or `npm run test:ng` to execute the unit tests via [Karma](https://karma-runner.github.io). To continuously run unit tests, run `npm run test:ng:watch`

## Running end-to-end tests

Run `ng e2e` or `npm run test:e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying to Heroku
First you will need to create a Heroku app. The package.json includes a "heroku-postbuild" script that will build the app. The Procfile includes the location to start the node server which will serve the app on Heroku.

## Known Issues
The Trails REPL (trailpack-repl) includes some characters that production webpack builds (`webpack -p`) can not parse and fails during the uglify process.  Currently, we use the normal webpack build which is faster but has a larger slug. If you can fix this, we would love a PR!

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-engine-ng/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-engine-ng/tree/master

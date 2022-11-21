# PoleStarTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Major Components -

1. There is profile component which display data which we want to display.
2. Two pipes are there to filter data for name and based on severity.
3. Resolver is to load the data before routing.
4. profile Service for making API call to get data.
5. profile for model mapping.

Flow -

index.html ==> app.component ==> profile.component ==> display data

# Bundesland

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

________________________________________
### Developer remark

According to the StayFriends GmbH [challenge](https://gist.github.com/joaquindiazs/1a5460bc4ad7ba5068b4ae9a5b0b8489), the same project fulfills the specified tasks.

I'd like to make some observations for the code reviewer: 

- The variable **iterablePersonIndexes** defined in AppComponent can be easily resolved in a Pipe from the template side.
- The library **ngxs** is installed in the application (From I beginning I thought to store the data from the json file in the state application. I decided not to use it because the data doesn't change in the lifecycle of the app).
- Mixins and variables could be used to reuse styles.
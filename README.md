# Blog Test App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Project Info

Project built in Angular 16 with Tailwind CSS and Ngrx.  Created an application structure that I would generally 
follow: Core module, Shared Module and a folder for feature modules.  Used Tailwind CSS for styling and some basic
blog post layout.  Added a bit of animation to make the loading and transitions smoother looking.  Feature modules are
lazy loaded, but data management is handled in the Core module.
Added NgRx for state and created state at the root folder as generally state is shared among feature modules although
this is a point of discussion and perhaps a design whereby the blog state is stored only in the blog module.

## Possible Improvements
1.  In a larger app, this could possibly be broken out into libraries and child applications perhaps using a micro front 
end architecture and perhaps a mono-repo using Nx or similar.
2. As already mentioned with regard to maintaining state, some state could be stored only in the lazy loaded module if
it only applies to that module
3. Consider using NgRx Component state for managing simple state and NgRx Store for global state

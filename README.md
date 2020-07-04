# Overview
This is a basic example to show PouchDB usage with Angular and Ionic. 
In general, Database queries translating into RESTful HTTP Using an API service. But,  CouchDB throws this out the window by daring us to talk to the database directly through a little protocol HTTP, from our client-side apps.
CouchDB's killer feature Sync was designed from the bottom-up to enable easy synchronization between different databases.
special protocol, no special drivers: just REST and HTTP. You can communicate with CouchDB entirely through your browser, curl, or a REST client like Postman.

But...
This version will run after you have ran ```npm install```

If you were to start from scratch, there are several steps that would need to be configured. This example takes care of those:
* Adding ```pouchdb``` and ```@types/pouchdb``` to the project
* Adding ```allowSyntheticDefaultImports``` to tsconfig.json
* Adding ```(window as any).global = window;``` to polyfills.ts; This was a weird __gotcha__  that caused database issues. (Read https://github.com/angular/angular-cli/issues/9827#issuecomment-386154063 for more info)


#Uses
* Angular 8
* Ionic 4.7.x
* PouchDB 7.x


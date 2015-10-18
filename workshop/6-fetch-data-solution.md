## Fetch data Solution

Fichier `store-service.ts` :

```typescript
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class StoreService {
    slots:Array<any> = [];

    constructor(http:Http) {
        http.get('slots.json')
            .map((res:Response) => res.json())
            .subscribe((value:Array<any>) => this.slots = value);
    }

    getSlots() {
        return this.slots;
    }
```


Fichier `app.ts` :

```typescript
import {bootstrap, bind, Component, View, Injectable} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

import {XkeSlots} from './xke-slots';
import {XkeFilter} from './xke-filter';

@Component({
    selector: 'xke-app',
    providers: [HTTP_PROVIDERS]
})
@View({
    template: `
        <header>{{name}}</header>
        <xke-filter (filter)="xkeslots.filter($event.value)"></xke-filter>
        <xke-slots #xkeslots></xke-slots>
    `,
    directives: [XkeSlots, XkeFilter]
})

class App {
    name:string = 'XebiCon';
}

bootstrap(App, [HTTP_PROVIDERS]);
```


[< Back](6-fetch-data.md)

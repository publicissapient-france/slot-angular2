## Fetch data Solution

Fichier `store-service.js` :

```typescript
import {Http} from 'angular2/http';

export class StoreService {
    slots:Array = [];

    constructor(http:Http) {
        http.request('slots.json')
            // .map(res => res.json()) // syntaxe alternative
            .subscribe(slots => this.slots = slots.json());
    }
    
    getSlots() {
        return this.slots;
    }
}
```


Fichier `app.js` :

```typescript
import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {httpInjectables} from 'angular2/http';
import {XkeSlots} from 'xke-slots';
import {XkeFilter} from 'xke-filter';

@Component({
  selector: 'xke-app',
  appInjector: [httpInjectables]
})
@View({
  template: `<header>{{name}}</header>
        <xke-filter (filter)="xkeslots.filter($event.value)"></xke-filter>
        <xke-slots #xkeslots></xke-slots>`,
  directives: [XkeSlots, XkeFilter]
})
export class App {
  name:String = 'Xebia Knowledge Exchange';

  constructor() {
  }
}

bootstrap(App);
```


[< Back](6-fetch-data.md)

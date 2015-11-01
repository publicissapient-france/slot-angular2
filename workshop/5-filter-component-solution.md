## Filter Component Solution

Fichier `xke-filter.ts` :

```typescript
import {Component, View} from 'angular2/angular2';
import {EventEmitter, Output} from 'angular2/angular2';

@Component({
    selector: 'xke-filter'
})
@View({
    templateUrl: 'xke-filter.html'
})
export class XkeFilter {
    @Output() filter:EventEmitter = new EventEmitter();

    doFilter(term:string) {
        this.filter.next({value: term});
    }
}
```


Fichier `xke-filter.html` :

```html
<input #form type="text" placeholder="Filter slot..." (keyup)="doFilter(form.value)"/>
```

Fichier `app.ts` :

```typescript
import {bootstrap, bind, Component, View, Injectable} from 'angular2/angular2';
import {XkeSlots} from './xke-slots'
import {XkeFilter} from './xke-filter'

@Component({
    selector: 'xke-app'
})
@View({
    template: `<header>{{name}}</header>
        <xke-filter (filter)="xkeslots.filter($event.value)"></xke-filter>
        <xke-slots #xkeslots></xke-slots>
    `,
    directives: [XkeSlots, XkeFilter]
})
export class App {
    name:string = 'XebiCon';
    constructor() {
    }
}

bootstrap(App);
```



Fichier `xke-slots.ts` :

```typescript
import {Component, View, Injectable} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';
import {StoreService} from './store-service';
import {XkeSlot} from './xke-slot';

@Component({
    selector: 'xke-slots',
    providers: [StoreService]
})
@View({
    templateUrl: 'xke-slots.html',
    directives: [NgFor, XkeSlot]
})

export class XkeSlots {
    storeService: StoreService;
    term:string;

    constructor(storeService: StoreService) {
        this.storeService = storeService;
    }

    filter(term:string) {
        this.term = term;
    }

    getSlots() {
        return this.storeService.getSlots().filter((slot) => {
            return !this.term || slot.title.toLowerCase().indexOf(this.term.toLowerCase()) >= 0;
        });
    }
}
```


[< Back](5-filter-component.md)

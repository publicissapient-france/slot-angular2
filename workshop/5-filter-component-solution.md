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



[< Back](5-filter-component.md)

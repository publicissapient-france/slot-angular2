## First Component Solution

Fichier `xke-slots.ts` :

```typescript
import {bind, Component, View, Injectable} from 'angular2/angular2';

@Component({
    selector: 'xke-slots'
})
@View({
    templateUrl: 'xke-slots.html'
})
export class XkeSlots {
}
```


Fichier `xke-slots.html` :

```html
<p>
  slots count: 10
</p>

<ul>
  <li>
    Slot 1
  </li>
  <li>
    Slot 2
  </li>
</ul>
```

Fichier `app.ts` :

```typescript
import {bootstrap, bind, Component, View, Injectable} from 'angular2/angular2';
import {XkeSlots} from './xke-slots'

@Component({
    selector: 'xke-app'
})
@View({
    template: `<header>{{name}}</header>
        <xke-slots></xke-slots>
    `,
    directives: [XkeSlots]
})
export class App {
    name:string = 'XebiCon';
    constructor() {
    }
}

bootstrap(App);
```

[< Back](2-first-component.md)

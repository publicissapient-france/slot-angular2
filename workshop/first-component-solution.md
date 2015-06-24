## Data Binding

Fichier `xke-slots.js` :

```typescript
import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';

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

Fichier `app.js` :

```typescript
import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {XkeSlots} from 'xke-slots';

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
    name:String = 'Xebia Knowledge Exchange';
}

bootstrap(App);
```

[< Back](first-component.md)

## Slot Component

Fichier `xke-filter.js` :

```typescript
import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';
import {EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'xke-filter',
  events: ['filter']
})
@View({
  templateUrl: 'xke-filter.html'
})
export class XkeFilter {
  filter:EventEmitter = new EventEmitter();

  doFilter(term:string) {
    this.filter.next({value: term});
  }
}
```


Fichier `xke-filter.html` :

```html
<input #form type="text" placeholder="Filter slot..." (keyup)="doFilter(form.value)" />
```

Fichier `app.js` :

```typescript
import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {XkeSlots} from 'xke-slots';
import {XkeFilter} from 'xke-filter';

@Component({
  selector: 'xke-app'
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



[< Back](filter-component.md)

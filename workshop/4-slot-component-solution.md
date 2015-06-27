## Slot Component

Fichier `xke-slot.js` :

```typescript
import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

@Component({
  selector: 'xke-slot',
  properties: ['model']
})
@View({
  templateUrl: 'xke-slot.html',
  directives: [NgFor]
})
export class XkeSlot {
}
```


Fichier `xke-slot.html` :

```html
<div class="count">
  <div>{{model.attendees}}</div>
</div>

<div class="title">{{model.title}}</div>

<ul>
  <li *ng-for="#speaker of model.speakers">{{ speaker }}</li>
</ul>

<button>RSVP</button>
```

Fichier `xke-slots.html` :

```html
<p>
  slots count: {{ getSlots().length }}
</p>

<ul>
  <li *ng-for="#slot of getSlots()">
    <xke-slot [model]="slot"></xke-slot>
  </li>
</ul>
```

[< Back](4-slot-component.md)

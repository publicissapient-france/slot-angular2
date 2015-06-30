## Fetch data Solution

Fichier `slot-store.js` :

```typescript
import {InjectAnnotation as Inject} from 'angular2/di';
import {Http} from 'angular2/http';

export class XkeSlotStore {
    slots:Array;

    constructor(@Inject(Http) http:Http) {
        http.request('slots.json')
            // .map(res => res.json())
            .subscribe(slots => this.slots = slots.json());
    }
}
```

[< Back](6-fetch-data.md)

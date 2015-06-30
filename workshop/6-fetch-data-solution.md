## Fetch data Solution

Fichier `store-service.js` :

```typescript
import {InjectAnnotation as Inject} from 'angular2/di';
import {Http} from 'angular2/http';

export class StoreService {
    slots:Array = [];

    constructor(@Inject(Http) http:Http) {
        http.request('slots.json')
            // .map(res => res.json()) // syntaxe alternative
            .subscribe(slots => this.slots = slots.json());
    }
    
    getSlots() {
        return this.slots;
    }
}
```


[< Back](6-fetch-data.md)

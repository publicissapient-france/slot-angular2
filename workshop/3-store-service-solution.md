## Store Service Solution

Fichier `store-service.js` :

```typescript

export class StoreService {
  slots:Array = [
    { "title": "Rising Architect", "speakers": ["Pablo Lopez", "Xavier Bucchiotty"], "attendees": 15 },
    { "title": "Build rock SOLID code", "speakers": ["Clément Heliou", "Ilja Kempf", "Pierre-Jean Vardanega", "Sarah Buisson"], "attendees": 5 },
    { "title": "What's new at Google I/O and WWDC", "speakers": ["Jérémie Martinez", "Simone Civetta"], "attendees": 7 },
    { "title": "Scaling Culture - L'agilité à grande échelle en vraie", "speakers": ["Nicolas Lochet"], "attendees": 9 },
    { "title": "Présentation de CloudUnit, un PaaS Java s'appuyant sur Docker développé par Treeptik", "speakers": ["Jean-Louis Rigau"], "attendees": 2 },
    { "title": "Le cadrage Agile timeboxé", "speakers": ["Gwénaël Bonhommeau"], "attendees": 1 },
    { "title": "Breizhcamp et la suite", "speakers": ["Sameh Ben Fredj"], "attendees": 17 },
    { "title": "Rex : LV Live", "speakers": ["David Caramelo"], "attendees": 5 },
    { "title": "Brace yourselves, Angular 2 is comming !", "speakers": ["Alexandre Hebert", "Dmytro Podyachiy", "Djordje Lukic"], "attendees": 14 },
    { "title": "BDD in action by exemple for dummies", "speakers": ["Clément Rochas", "Diego Lemos"], "attendees": 8 },
    { "title": "iM-1 / The Mower World & First AI", "speakers": [], "attendees": 9 },
    { "title": "Docker Swarm", "speakers": ["Ivan Beauvais","Jean-Eudes Couignoux","Jean-Louis Rigau","Jonathan Raffre","Roksolana Ivanyshyn"], "attendees": 1 }
  ];

  getSlots() {
    return this.slots;
  }
}
```


Fichier `xke-slots.js` :

```typescript
import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';
import {StoreService} from 'store-service';

@Component({
  selector: 'xke-slots',
  appInjector: [StoreService]
})
@View({
  templateUrl: 'xke-slots.html',
  directives: [NgFor]
})
export class XkeSlots {
  constructor(storeService:StoreService) {
    this.storeService = storeService;
  }

  getSlots() {
    return this.storeService.getSlots();
  }
}
```

[< Back](3-store-service.md)

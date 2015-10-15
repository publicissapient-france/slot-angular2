import {Component, View, NgFor, Inject} from 'angular2/angular2';
//import {NgFor} from 'angular2/directives';
//import {Inject} from 'angular2/di';

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
    storeService:StoreService;
    slotFilter:string = '';

    constructor(storeService:StoreService) {
        this.storeService = storeService;
    }

    filter(searchFor:string) {
        this.slotFilter = searchFor;
    }

    getSlots() {
        return this.storeService.getSlots().filter((slot) => {
            return !this.slotFilter || slot.title.toLowerCase().indexOf(this.slotFilter.toLowerCase()) >= 0;
        });
    }
}

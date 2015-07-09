import {Component, View} from 'angular2/annotations';
import {NgFor} from 'angular2/directives';
import {Inject} from 'angular2/di';

import {XkeSlotStore} from 'slot-store';
import {XkeSlot} from 'slot';

@Component({
    selector: 'xke-slots'
})
@View({
    templateUrl: 'slots.html',
    directives: [NgFor, XkeSlot]
})
export class XkeSlots {
    slotStore:XkeSlotStore;
    slotFilter:string = '';

    constructor(slotStore:XkeSlotStore) {
        this.slotStore = slotStore;
    }

    filter(searchFor:string) {
        this.slotFilter = searchFor;
    }

    getSlots() {
        return this.slotStore.slots.filter(s => {
            return !this.slotFilter || s.name.toLowerCase().indexOf(this.slotFilter.toLowerCase()) >= 0;
        });
    }
}

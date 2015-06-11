import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {SlotStore} from 'slot-store';
import {Slot} from 'slot';

@Component({
    selector: 'xke-slots',
    appInjector: [SlotStore]
})
@View({
    templateUrl: 'slots.html',
    directives: [NgFor, Slot]
})
export class Slots {
    slotStore:SlotStore;
    constructor(slotStore:SlotStore) {
        this.slotStore = slotStore;
    }
}
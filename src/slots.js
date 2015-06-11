import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {SlotStore} from 'slot-store';

@Component({
    selector: 'xke-slots',
    appInjector: [SlotStore]
})
@View({
    templateUrl: 'slots.html',
    directives: [NgFor]
})
export class Slots {
    slotStore:SlotStore;
    constructor(slotStore:SlotStore) {
        this.slotStore = slotStore;
    }
}
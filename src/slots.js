import {ComponentAnnotation as Component, ViewAnnotation as View, NgIf, NgFor} from 'angular2/angular2';
import {SlotStore} from 'slot-store';
import {Slot} from 'slot';
import {Filter} from 'filter';

@Component({
    selector: 'xke-slots',
    appInjector: [SlotStore]
})
@View({
    templateUrl: 'slots.html',
    directives: [NgIf, NgFor, Slot, Filter]
})
export class Slots {
    slotStore:SlotStore;
    slotFilter:string = '';

    constructor(slotStore:SlotStore) {
        this.slotStore = slotStore;
    }

    onFilter(event:Event) {
        this.slotFilter = event.value;
    }
}
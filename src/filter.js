import {ComponentAnnotation as Component, ViewAnnotation as View, EventEmitter} from 'angular2/angular2';
import {SlotModel} from 'slot-store'

@Component({
    selector: 'xke-filter',
    events: ['filter']
})
@View({
    templateUrl: 'filter.html'
})
export class Filter {
    filter:EventEmitter;

    constructor() {
        this.filter = new EventEmitter();
    }

    onFilter(filter:string) {
        this.filter.next({value: filter});
    }
}
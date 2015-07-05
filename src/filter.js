import {Component, View, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'xke-filter',
    events: ['filter']
})
@View({
    templateUrl: 'filter.html'
})
export class XkeFilter {
    filter:EventEmitter = new EventEmitter();

    performFilter(filter:string) {
        this.filter.next({value: filter});
    }
}
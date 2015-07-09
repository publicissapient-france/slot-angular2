import {Component, View} from 'angular2/annotations';
import {EventEmitter} from 'angular2/core';

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
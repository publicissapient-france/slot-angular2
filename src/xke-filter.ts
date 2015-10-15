import {Component, View, EventEmitter, Output} from 'angular2/angular2';

@Component({
    selector: 'xke-filter'
})
@View({
    templateUrl: 'xke-filter.html'
})
export class XkeFilter {
    @Output() filter:EventEmitter = new EventEmitter();

    performFilter(filter:string) {
        this.filter.next({value: filter});
    }
}
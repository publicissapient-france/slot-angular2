import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {Slots} from 'slots';
import {Filter} from 'filter';

@Component({
    selector: 'xke-app'
})
@View({
    template: `
        <h1>{{title}}</h1>
        <hr />
        <xke-filter (filter)="onFilter($event)"></xke-filter>
        <p>filter value = {{ value }}</p>
        <xke-slots></xke-slots>
    `,
    directives: [Slots, Filter]
})
export class App {
    title:string = 'App XVote';
    value:string = '';

    constructor() {
    }

    onFilter(event:Event) {
        this.value = event.value;
    }
}

bootstrap(App);

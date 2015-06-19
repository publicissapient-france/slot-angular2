import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {XkeSlots} from 'slots';
import {XkeFilter} from 'filter';

@Component({
    selector: 'xke-app'
})
@View({
    template: `
        <h1>{{title}}</h1>
        <xke-filter (filter)="xkeslots.filter($event.value)"></xke-filter>
        <xke-slots #xkeslots></xke-slots>
    `,
    directives: [XkeSlots, XkeFilter]
})
export class App {
    title:string = 'xebia knowledge exchange';
}

bootstrap(App);

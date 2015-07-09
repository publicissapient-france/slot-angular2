import {bootstrap, bind} from 'angular2/angular2';
import {Component, View} from 'angular2/annotations';
import {httpInjectables, Http} from 'angular2/http';

import {XkeSlots} from 'slots';
import {XkeSlotStore} from 'slot-store';
import {XkeFilter} from 'filter';

@Component({
    selector: 'xke-app',
    viewInjector: [XkeSlotStore]
})
@View({
    template: `
        <h1>{{title}}</h1>
        <xke-filter (filter)="xkeslots.filter($event.value)"></xke-filter>
        <xke-slots #xkeslots></xke-slots>
    `,
    directives: [XkeSlots, XkeFilter]
})
class App {
    title:string = 'xebia knowledge exchange';
}

bootstrap(App, [httpInjectables]);

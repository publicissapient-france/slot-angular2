import {bootstrap, bind, Component, View, Injectable} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

import {XkeSlots} from './xke-slots';
import {XkeFilter} from './xke-filter';

@Component({
    selector: 'xke-app',
    providers: [HTTP_PROVIDERS]
})
@View({
    template: `
        <header>{{name}}</header>
        <xke-filter (filter)="xkeslots.filter($event.value)"></xke-filter>
        <xke-slots #xkeslots></xke-slots>
    `,
    directives: [XkeSlots, XkeFilter]
})

class App {
    name:string = 'xebia knowledge exchange';
}

bootstrap(App, [HTTP_PROVIDERS]);

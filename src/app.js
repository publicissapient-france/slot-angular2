import {bootstrap, bind} from 'angular2/angular2';
import {Component, View} from 'angular2/annotations';
import {httpInjectables, Http} from 'angular2/http';
import {routerInjectables, RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';

import {Xke, Copyrights} from 'xke';
import {XkeSlots} from 'slots';
import {XkeSlotStore} from 'slot-store';
import {XkeFilter} from 'filter';

@Component({
    selector: 'xke-app',
    viewInjector: [XkeSlotStore]
})
@View({
    template: `
        <h1 [router-link]="['/copyrights']">{{title}}</h1>
        <router-outlet></router-outlet>
    `,
    directives: [XkeSlots, XkeFilter, RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/', component: Xke, as: 'home'},
    {path: '#/', component: Xke, as: 'slots'},
    {path: '#/copyrights', component: Copyrights, as: 'copyrights'}
])
class App {
    title:string = 'xebia knowledge exchange';
}

bootstrap(App, [httpInjectables, routerInjectables]);

import {bootstrap, bind, Component, View} from 'angular2/angular2';
import {httpInjectables, Http} from 'angular2/http';
import {routerInjectables, RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';

//import {Xke, Copyrights} from 'xke';
//import {XkeSlots} from 'slots';
//import {XkeSlotStore} from 'slot-store';
//import {XkeFilter} from 'filter';

//@Component({
//    selector: 'xke-app',
//    viewInjector: [XkeSlotStore]
//})
//@View({
//    template: `
//        <h1 [router-link]="['/copyrights']">{{title}}</h1>
//        <router-outlet></router-outlet>
//    `,
//    directives: [XkeSlots, XkeFilter, RouterOutlet, RouterLink]
//})
//@RouteConfig([
//    {path: '/', component: Xke},
//    {path: '#/', component: Xke, as: 'slots'},
//    {path: '#/copyrights', component: Copyrights, as: 'copyrights'}
//])

@Component({
    selector: 'xke-app',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
class App {
    title:string = 'xebia knowledge exchange';

    name:string = 'Alex';
}

//bootstrap(App, [httpInjectables, routerInjectables]);
bootstrap(App);

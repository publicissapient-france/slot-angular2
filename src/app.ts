import {bootstrap, bind, Component, View, Injectable} from 'angular2/angular2';
//import {httpInjectables, Http} from 'angular2/http';
//import {routerInjectables, RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';

import {XkeSlots} from './xke-slots';
//import {Xke, Copyrights} from 'xke';
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
})
@View({
    template: `
        <header>{{name}}</header>
        <xke-slots></xke-slots>
    `,
    directives: [XkeSlots]
})

class App {
    name:string = 'xebia knowledge exchange';
    msg:String = '';
    constructor() {
        setTimeout(() => {this.msg = 'Have a good day!'}, 2000);
    }

    doGreet() {
        alert('Hello ' + this.name);
    }
}

//bootstrap(App, [httpInjectables, routerInjectables]);
bootstrap(App);

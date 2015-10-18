import {bootstrap, bind, provide, Component, View} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig, HashLocationStrategy, LocationStrategy, Location} from 'angular2/router';

import {Xke, Copyrights} from './xke';

@Component({
    selector: 'xke-app',
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@View({
    template: `
        <header>{{name}}</header>
        <a [router-link]="['/Slots']">slots</a>
        <a [router-link]="['/Copyrights']">copyrights</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: Xke},
    {path: '/slots', component: Xke, as: 'Slots'},
    {path: '/copyrights', component: Copyrights, as: 'Copyrights'}
])
class App {
    name:string = 'xebia knowledge exchange';
}

bootstrap(App, [
    HTTP_PROVIDERS, ROUTER_PROVIDERS,
    bind(LocationStrategy).toValue(HashLocationStrategy),
    bind(APP_BASE_HREF).toValue(location.pathname)
]);

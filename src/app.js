import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'xke-app'
})
@View({
    template: `<header>Hello !</header>`,
    directives: []
})
export class App {
    constructor() {
    }
}

bootstrap(App);

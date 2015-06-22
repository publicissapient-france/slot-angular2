import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'xke-app'
})
@View({
    template: `Hello {{ msg }} !`,
    directives: []
})
export class App {
    constructor() {
        setTimeout(() => {this.msg = 'Xebia Knowledge Exchange'}, 1000);
    }
}

bootstrap(App);

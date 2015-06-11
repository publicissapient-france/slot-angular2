import {ComponentAnnotation as Component, ViewAnnotation as View, Event, bootstrap} from 'angular2/angular2';
import {Slots} from 'slots';

@Component({
    selector: 'xke-app'
})
@View({
    template: `
        <h1>{{title}}</h1>
        <xke-slots></xke-slots>`,
    directives: [Slots]
})
export class App {
    title:string = 'XVote';

    constructor() {
    }
}

bootstrap(App);

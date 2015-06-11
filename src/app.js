import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';
import {Slots} from 'slots';

@Component({
    selector: 'xke-app'
})
@View({
    template: `<h1>{{title}}</h1><hr /><xke-filters></xke-filters><xke-slots></xke-slots>`,
    directives: [Slots]
})
export class App {
    title:string = 'App XVote';
    constructor() {
    }
}

bootstrap(App);

import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {SlotModel} from 'slot-store'

@Component({
    selector: 'xke-slot',
    properties: {
        model: 'model'
    }
})
@View({
    templateUrl: 'slot.html',
    directives: [NgFor]
})
export class Slot {
    constructor() {
    }

    toggleWatch() {
        this.model.watch = !this.model.watch;
    }

    changeVote(score:integer) {
        this.model.vote = score;
    }
}
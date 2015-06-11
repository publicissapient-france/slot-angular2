import {ComponentAnnotation as Component, ViewAnnotation as View, NgIf} from 'angular2/angular2';
import {SlotModel} from 'slot-store'

@Component({
    selector: 'xke-slot',
    properties: {
        model: 'model'
    }
})
@View({
    templateUrl: 'slot.html',
    directives: [NgIf]
})
export class Slot {
    constructor() {
    }

    toggleWatch() {
        this.model.watch = !this.model.watch;
    }

    changeVote(score) {
        this.model.vote = score;
    }
}
import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {XkeSlotModel} from 'slot-store'
import {RateStar} from 'cmp/rate-star';

@Component({
    selector: 'xke-slot',
    properties: {
        model: 'model'
    }
})
@View({
    templateUrl: 'slot.html',
    directives: [NgFor, RateStar]
})
export class XkeSlot {
    constructor() {
    }

    toggleWatch() {
        this.model.watch = !this.model.watch;
    }

    changeVote(score:integer) {
        this.model.vote = score;
    }

    onRate(rating) {
        console.log('rating', rating);
    }
}

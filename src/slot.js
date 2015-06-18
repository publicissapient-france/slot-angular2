import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {XkeSlotModel} from 'slot-store'
import {RateStar} from 'components/rate-star';

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
export class XkeSlot {
    status:boolean = false;

    rsvp() {
        this.status = true;
        this.model.rsvp();
    }
}

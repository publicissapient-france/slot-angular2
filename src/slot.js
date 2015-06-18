import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor, NgIf} from 'angular2/angular2';
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
    directives: [NgFor, NgIf]
})
export class XkeSlot {
    status:boolean = false;
    error:string;
    model:XkeSlot;

    rsvp() {
        this.model.rsvp()
            .then(json => this.status = true)
            .catch(error => this.error = error);
    }
}

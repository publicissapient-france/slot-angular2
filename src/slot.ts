import {Component, View} from 'angular2/annotations';
import {NgFor, NgIf, CSSClass} from 'angular2/directives';
import {Inject} from 'angular2/di';

import {XkeSlotModel} from 'slot-store';

@Component({
    selector: 'xke-slot',
    properties: ['model']
})
@View({
    templateUrl: 'slot.html',
    directives: [NgFor, NgIf, CSSClass]
})
export class XkeSlot {
    status:boolean = false;
    error:string;
    model:XkeSlotModel;

    rsvp() {
        this.model.rsvp()
            .then(json => this.status = true)
            .catch(error => this.error = error);
    }
}

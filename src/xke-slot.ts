import {Component, View, NgFor, NgIf, Input, NgClass} from 'angular2/angular2';

@Component({
    selector: 'xke-slot'
})
@View({
    templateUrl: 'xke-slot.html',
    directives: [NgFor, NgIf, NgClass]
})
export class XkeSlot {
    isRsvp:Boolean = false;
    @Input() model:any;

    rsvp() {
        this.model.attendees++;
        this.isRsvp = true;
    }
}
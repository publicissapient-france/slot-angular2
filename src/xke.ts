import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

import {XkeFilter} from './xke-filter';
import {XkeSlots} from './xke-slots';

@Component({
    selector: 'xke'
})
@View({
    template: `
        <xke-filter (filter)="xkeslots.filter($event.value)"></xke-filter>
        <xke-slots #xkeslots></xke-slots>
    `,
    directives: [XkeSlots, XkeFilter]
})
export class Xke {
}

@Component({
    selector: 'copyrights'
})
@View({
    template: `
        <a [router-link]="['/Slots']">&larr; Back</a>
        <hr />
        <ul>
            <li>@dimapod</li>
            <li>@rumpl</li>
            <li>@dijxdream</li>
        </ul>
    `,
    directives: [RouterLink]
})
export class Copyrights {
}

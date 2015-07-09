import {Component, View} from 'angular2/annotations';
import {RouterLink} from 'angular2/router';

import {XkeFilter} from 'filter';
import {XkeSlots} from 'slots';

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
        <a [router-link]="['/slots']">&larr; Back</a>
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
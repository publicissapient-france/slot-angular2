export class XkeSlotStore {
    slots:Array<XkeSlotModel> = [
        new XkeSlotModel('Angular 2', ['Speaker 1', 'Speaker 2'], 5),
        new XkeSlotModel('Java 1.9', ['Speaker 3'], 6),
        new XkeSlotModel('Clochure 0', ['Speaker 5', 'Speaker 6', 'Speaker 7'], 7)
    ];
}

export class XkeSlotModel {
    name:string;
    watch:boolean = false;
    speakers:Array<string>;
    attendees:int = 0;

    constructor(name:string, speakers:Array<string>, attendees:int) {
        this.name = name;
        this.speakers = speakers;
        this.attendees = attendees;
    }

    rsvp() {
        return fetch('/rsvp')
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    this.attendees++;
                    return response;
                }
                throw new Error(response.statusText)
            })
            .then(response => response.json());
    }
}

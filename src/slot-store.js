export class XkeSlotStore {
    slots:Array<SlotModel>;

    constructor() {
        this.slots = [
            new XkeSlotModel('Angular 2', ['Speaker 1', 'Speaker 2']),
            new XkeSlotModel('Java 1.9', ['Speaker 3']),
            new XkeSlotModel('Clochure 0', ['Speaker 5', 'Speaker 6', 'Speaker 7'])
        ];
    }
}

export class XkeSlotModel {
    name:string;
    watch:boolean = false;
    vote:integer = 1;
    speakers:Array<string>;

    constructor(name:string, speakers:Array<string>) {
        this.name = name;
        this.speakers = speakers;
    }
}

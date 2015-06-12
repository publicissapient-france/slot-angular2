export class SlotStore {
    slots:Array<SlotModel>;

    constructor() {
        this.slots = [
            new SlotModel('Angular 2'),
            new SlotModel('Java 1.9'),
            new SlotModel('Clochure 0')
        ];
    }
}

export class SlotModel {
    name:string;
    watch:boolean = false;
    vote:integer = 1;

    constructor(name:string) {
        this.name = name;
    }
}

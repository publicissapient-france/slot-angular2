
export class SlotStore {
    slots:Array<SlotModel>;

    constructor() {
        this.slots = [new SlotModel('Angular 2'), new SlotModel('Java 1.9')];
    }
}

export class SlotModel {
    name:string;
    watch:boolean = false;
    vote:integer = 0;

    constructor(name:string) {
        this.name = name;
    }
}

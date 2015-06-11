
export class SlotStore {
    slots:Array<SlotModel>;

    constructor() {
        this.slots = [new SlotModel('Angular 2'), new SlotModel('Java 1.9')];
    }
}

export class SlotModel {
    name:string;

    constructor(name:string) {
        this.name = name;
    }
}
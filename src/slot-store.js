
export class SlotStore {
    slots:Array<SlotModel>;

    constructor() {
        this.slots = [new SlotModel('Slot Angular 2'), new SlotModel('Slot Java 1.9')];
    }
}

export class SlotModel {
    name:string;

    constructor(name:string) {
        this.name = name;
    }
}
import {Http, Response} from 'angular2/http';
import {Inject} from 'angular2/core';

export class StoreService {
    slots:Array<any> = [];

    constructor(@Inject http: Http) {
        http.get('slots.json')
            .map((res:Response) => res.json())
            .subscribe((value:Array<any>) => this.slots = value);
    }

    getSlots() {
        return this.slots;
    }
}
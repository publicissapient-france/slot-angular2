import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class StoreService {
    slots:Array<any> = [];

    constructor(http: Http) {
        http.get('slots.json')
            .map((res:Response) => res.json())
            .subscribe((value:Array<any>) => this.slots = value);
    }

    getSlots() {
        return this.slots;
    }
}

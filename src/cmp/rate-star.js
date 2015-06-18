import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'rate-star'
})
@View({
  templateUrl: 'cmp/rate-star.html',
  directives: [NgFor],
  events: ['rate']
})
export class RateStar {
  rate:EventEmitter = new EventEmitter();
  stars:array = [];

  constructor() {
    for (var i = 0; i < 5; i++)
      this.stars.push({index: i, selected: false});
  }

  select(item) {
    console.log('select ', item);
    this.rate.next({value: item.index + 1});
  }

  hoverIn(item) {
    for (var i = 0; i <= item.index; i++) {
      this.stars[i].selected = true;
    }
  }

  hoverOut(item) {
    for (var i = 0; i < 5; i++) {
      this.stars[i].selected = false;
    }
  }

}

## Data Binding

Fichier `app.js` :

```typescript
@Component({
    selector: 'xke-app'
})
@View({
    template: `Hello {{name}} !
        <button (click)="doGreet()">Greet</button>
        {{msg}}
    `,
    directives: []
})
export class App {
    name:String = 'Xebia Knowledge Exchange';
    msg:String = '';
    constructor() {
        setTimeout(() => {this.msg = 'Have a good day!'}, 2000);
    }

    doGreet() {
        alert('Hello ' + this.name);
    }
}
```

[Back](data-binding.md)

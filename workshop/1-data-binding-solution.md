## Data Binding Solution

Fichier `app.ts` :

```typescript
@Component({
    selector: 'xke-app'
})
@View({
    template: `<header>{{name}}</header>
        <button (click)="doGreet()">Greet</button>
        {{msg}}
    `,
    directives: []
})

class App {
    name:string = 'XebiCon';
    msg:string;
    constructor() {
        setTimeout(() => this.msg = 'Have a good day', 2000);
    }

    doGreet() {
        alert('Hello XebiCon!')
    }
}

bootstrap(App);

```

[< Back](1-data-binding.md)
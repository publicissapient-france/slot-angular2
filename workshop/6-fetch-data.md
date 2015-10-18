## Fetch JSON Data

L'objectif de cet exercice est de découvrir la nouvelle API ajax fournie par Angular 2.
Nous allons pour cela déporter la récupération des slots en utilisant un fichier `json` distant.

_Rappel : pour le moment, le `json` est en dur dans notre StoreService._


### Classe Http

Angular 2 nous propose une nouvelle API de fetch, par dessus le standard [fetch](https://github.com/github/fetch) d'ES6.
La classe principale mise à notre disposition se nomme [Http](https://angular.io/docs/ts/latest/api/http/Http-class.html).


### Injection du service Http

Tout à l'heure, nous avons utilisé la propriété `providers` du décorateur @Component de la classe `XkeSlots`. 
Il existe un `HTTP_PROVIDERS` que nous pouvons ajouter à App. 
Il serait également possible d'utiliser le décorateur `@Inject(smtg_to_inject)` directement sur notre StoreService.

Modifiez le fichier `store-service.ts` :

```typescript
export class StoreService {
  getSlots() {...}
}
```

- importez `Http` et `Injectable` depuis le module `angular2/http`
- ajoutez le décorateur @[Injectable](https://angular.io/docs/ts/latest/api/core/Injector-class.html) à la classe `StoreService`
- ajoutez un constructeur à la classe `StoreService`
- ajoutez un paramètre de type [Http](https://angular.io/docs/ts/latest/api/http/Http-class.html) à ce constructeur

Modifiez le fichier `app.ts` :

- importez le `HTTP_PROVIDERS` depuis le module `angular2/http`
- ajoutez ces injectables à la propriété `providers` de @Component

Un petit `console.log('http', http)` pour vérifier que tout est bien injecté comme prévu ?

> Bravo ! Nous allons maintenant pouvoir utiliser le service Http !


### Exploitation du service Http

La méthode `Observable request(url, options)` d'Http effectue un appel -GET- asynchrone et nous retourne un [Observable](https://github.com/Reactive-Extensions/RxJS). Pour simplifier grossièrement, on peut voir les Observable comme des promesses itérables, ou des futures stream-able.

A l'instar des promesses, il est possible de **fournir un callback à un Observable** en utilisant sa méthode `subscribe(callback)`.

Modifiez le constructeur de StoreService :
- appelez la méthode `request` de Http en lui transmettant le nom du fichier json `slots.json`
- chainez avec la méthode `subscribe(r:Reponse => ...)` et ajoutez-y une "arrow function" callback en paramètre

Lorsque l'appel asynchrone sera terminé, notre callback sera appelé avec un paramètre de type `Response` qui nous fourni fortuitement une méthode `json` afin d'en récupérer le contenu parsé.

- dans votre callback appelez la méthode `json` susnommée
- affectez le resultat de `.json()` à un attribut `slots:Array` de la classe StoreService
- remplacez le contenu de la méthode `getSlots()` pour qu'elle retourne le tableau de slots

_Tip: en ES6, les fonctions arrow n'écrasent pas le `this`... Exit les `var self = this` !!..._

> Rechargez la page de votre navigateur et admirez le résultat !


[Solution](6-fetch-data-solution.md)

[< Prev](5-filter-component.md) [Finish >](9-congratulations.html)

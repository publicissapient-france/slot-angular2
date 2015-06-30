## Fetch Data

L'objectif de cet exercice est de découvrir la nouvelle API ajax fournie par angular 2.
Nous allons pour cela déporter la récupération des slots vers un service back tiers.


### Classe Http

Angular 2 expose une nouvelle API de fetch, par dessus le standard [fetch](https://github.com/github/fetch) d'ES6.
La classe principale mise à notre disposition se nomme **Http**. C'est elle qui expose les méthodes de fetching dont nous avons besoin pour l'exercice.


### Injection du service Http

Tout à l'heure, nous avons utilisé la propriété `appInjector` du décorateur @Component de la classe App.
Pour injecter une instance d'Http, nous allons plutôt utiliser le décorateur `@Inject`.

Modifiez le fichier **slot-store.js** :
- importez le décorateur `InjectAnnotation as Inject` depuis le module `angular/di`
- ajoutez un constructeur à la classe `XkeSlotStore`
  - ajoutez `Http` en paramètre de ce constructeur
  - à la "façon Java", ajoutez le décorateur `@Inject` sur le paramètre http

Ajoutez un `console.log` pour vérifier que tout ce passe comme prévu.

Bravo ! Nous allons maintenant pouvoir utiliser le service Http !


### Exploitation du service Http


[Solution](6-fetch-data-solution.md)

[< Prev](5-filter-component-solution.md) [Next >](9-congratulations.md)

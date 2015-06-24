## Service

Le but de cet exercice est de créer un service `StoreService` qui va fournir une liste de slots, ainsi que d'afficher les titres de chaque slot.

> Commensons par la fin - affichons les slots :)

Voici la structure [json](store-service-json.md) des slots à utiliser.

### For 

- dans le component XkeSlots ajouter une methode `getSlots()` retournant directement le [json](store-service-json.md)
- dans le template de ce même component [itérez](https://angular.io/docs/js/latest/api/directives/NgFor-class.html) sur `getSlots()` (sur la balise `li`) et affichez le title de chaque slot - `slot.title`
- attention, n'oubliez pas d'apporter la class `NgFor` dans la fichier `xke-slots.js` ainsi que le declarer dans le `@View` de component XkeSlots. Pour plus d'info, voir [NgFor](https://angular.io/docs/js/latest/api/directives/NgFor-class.html)
- finalement, afficher le nombre de slots dans la balise `p`

Votre application doit apparenter ceci :

![store service resultat](img/store-service-resultat.png)
  
  
### Service

Pour les resons évidantes, il n'est pas acceptable de laisser les données hard-codées dans le component ;).
Créons un service qui aura pour but de nous les fournir (pour l'instant toujours hard-codées).

- créer le fichier `store-service.js`
- y declarer une class `StoreService` (n'oubliez pas de l'[exporter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- implementer la méthode  `getSlots()` qui retournera le fameaux [json](store-service-json.md)

Voila, notre Service est prêt. Utilisons le !

- dans le component `XkeSlots`, [importez](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) le nouveau service
- configurez [l'injecteur](https://angular.io/docs/js/latest/api/annotations/ComponentAnnotation-class.html) dans le decorateur `@Component`:  `appInjector: [StoreService]`   
- dans le constructor, injectez le nouveau service par son type: `constructor(storeService:StoreService) { ... }`
- utilisez le dans la méthode `XkeSlots.getSlots()` 
  
[Solution](store-service-solution.md)

[< Prev](first-component.md) [Next >](exo3.md)

## Service

Le but de cet exercice est de créer un service `StoreService` qui va fournir une liste de slots, ainsi que d'afficher les titres de chaque slot.

> Commençons par la fin - affichage des slots :)

Voici le [json](3-store-service-json.md) à utiliser.


### Utilisation du 'For'

- dans le component XkeSlots ajoutez une methode `getSlots()` retournant directement ce [json](3-store-service-json.md)
- dans le template de ce même component [itérez](https://angular.io/docs/js/latest/api/directives/NgFor-class.html) sur `getSlots()` (sur la balise &lt;li&gt;) et affichez le title de chaque slot (`slot.title`)
- attention, n'oubliez pas [d'importer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) la directive `NgFor` dans la fichier `xke-slots.js` ainsi que le declarer dans le `@View` de component XkeSlots. Pour plus d'info, voir [NgFor](https://angular.io/docs/js/latest/api/directives/NgFor-class.html)
- finalement, affichez le nombre de slots dans la balise &lt;p&gt;


> Votre application ressemble bien à ça ?

![store service resultat](img/store-service-resultat.png)
  
  
### Injection de service

Pour des raisons évidentes, il n'est pas acceptable de laisser les données hard-codées dans le component ;).
Créons un [service](http://xebia-france.github.io/slot-angular2/#/5) qui aura pour but de nous les fournir (pour l'instant toujours hard-codées).

- créez le fichier `store-service.js`
- declarez-y une classe `StoreService` (n'oubliez pas de l'[exporter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- implementez la méthode  `getSlots()` qui retournera le fameux [json](3-store-service-json.md). _Attention de retourner toujours la même instance d'un array!_


> Voila, notre Service est prêt !

**[Utilisons le :](http://xebia-france.github.io/slot-angular2/#/5/1)**

- dans le component `XkeSlots`, [importez](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) le nouveau service
- configurez [l'injecteur](https://angular.io/docs/js/latest/api/annotations/ComponentAnnotation-class.html) dans le decorateur `@Component`:  `appInjector: [StoreService]`   
- dans le constructeur, injectez le nouveau service par son type: `constructor(storeService:StoreService) { ... }`
- utilisez le dans la méthode `getSlots()` du component 

[Solution](3-store-service-solution.md)

[< Prev](2-first-component.md) [Next >](4-slot-component.md)

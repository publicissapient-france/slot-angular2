## Service

Le but de cet exercice est de créer un service `StoreService` qui va fournir une liste de slots, ainsi que d'afficher les titres de chaque slot.

> Commençons par la fin - affichage des slots :)


### Utilisation du 'NgFor'

- dans le component XkeSlots ajoutez une methode `getSlots()` retournant directement ce [json](3-store-service-json.md)
- dans le template de ce même component [itérez](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdfca0523e_0_12) sur `getSlots()` (en utilisant une directive `*ng-for` sur la balise `<li>`) et affichez le title de chaque slot (`slot.title`)
- attention, n'oubliez pas [d'importer](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdfca0523e_0_12) la directive `NgFor` dans la fichier `xke-slots.ts` (depuis 'angular2/angular2') ainsi que le declarer dans le `@View` (`directives:[...]`) de component XkeSlots. Pour plus d'info, voir [NgFor](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdfca0523e_0_12)
- finalement, affichez le nombre de slots dans la balise `<p>` (utilisez la méthode `length()`);


> Votre application ressemble bien à ça ?

![store service resultat](img/store-service-resultat.png)
  
  
### Injection de service

Pour des raisons évidentes, il n'est pas acceptable de laisser les données hard-codées dans le component ;).
Créons un [service](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gccc7a6f37_1_20) qui aura pour but de nous les fournir (pour l'instant toujours hard-codées).

- créez le fichier `store-service.ts`
- declarez-y une classe `StoreService` (n'oubliez pas de l'[exporter](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdf927d755_0_80))
- implementez la méthode  `getSlots()` qui retournera le fameux [json](3-store-service-json.md). _Attention de retourner toujours la même instance d'un array! (créez un propriété `slots:Array<any> = [...]` et le retourner dans la méthode `getSlots()`)_


> Voila, notre Service est prêt !

**[Utilisons le :](http://xebia-france.github.io/slot-angular2/#/5/1)**

- dans le component `XkeSlots`, [importez](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdf927d755_0_89) le nouveau service
- configurez [l'injecteur](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.ge5d1fdac2_0_178) dans le decorateur `@Component`:  `providers: [StoreService]`   
- dans le constructeur, injectez le nouveau service par son type: `constructor(storeService:StoreService) { ... }`
- utilisez le dans la méthode `getSlots()` du component 

[Solution](3-store-service-solution.md)

[< Prev](2-first-component.md) [Next >](4-slot-component.md)

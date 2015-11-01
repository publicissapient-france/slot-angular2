## Filter component

L'objectif de cette partie est de créer un component `xke-filter` permettant de filtrer les slots. 
Pour cela il nous faudra faire communiquer deux components frères.

Le component `xke-filter` est positionné en tant que frère de component `xke-slots` :

![Components Tree](img/components-tree-filter.png)


### Component

Créez le component `XkeFilter` dans un nouveau fichier `xke-filter.ts` :
- selector: `xke-filter`
- templateUrl: `xke-filter.html`
  
**xke-filter.html :**

```html
<input type="text" placeholder="Filter slot..." />
```

Utilisez `xke-filter` dans le component App (`app.ts`) en le plaçant juste avant &lt;xke-slots&gt;. N'oubliez pas de [l'importer](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?ts=5624b3a6#slide=id.gdf927d755_0_89) (`import`) et de le declarer (`directives` dans `@View`).
_Vérifiez qu'il soit bien affiché sur l'écran_


### Communication

Pour communiquer avec le `xke-slots`, notre nouveau component doit émettre un événement ([api output](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?ts=5624b3a6#slide=id.gdf927d755_1_31)) 
dont la valeur sera ensuite transmise à `xke-slots`.

**> communication de XkeFilter vers App :**

Ecoutez la saisie du filtre au `keyup` dans `xke-filter.html` :
- au `keyup` sur &lt;input&gt; appelez une méthode `doFilter()`
- utilisez une [référence](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?ts=5624b3a6#slide=id.gdf927d755_1_80) `#...` pour passer une valeur d'&lt;input&gt; à `doFilter(...)`
- ajoutez une méthode `doFilter(...)` et vérifiez à l'aide de `console.log()` que tout marche comme sur des roulettes

Lancez un événement `filter` vers le composant parent :
- dans la classe `XkeFilter` ajoutez la propriété `filter` decorée avec `@Output`: `@Output() filter:EventEmitter = new EventEmitter();`. _N'oubliez pas d'importer EventEmitter et Output depuis 'angular2/angular2'_
- il suffit maintenant [d'émettre un événement](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?ts=5624b3a6#slide=id.gdf927d755_1_50) dans la methode `doFilter()`
 
_Tip : l'émission d'un événement s'écrit sous cette forme `this.filter.next({value: ...});`_

**> communication de App vers XkeSlots :**

Objectif : à la reception de l'événement déclenché par XkeFilter, nous devons appeler la méthode `filter(...)` du `XkeSlots` en lui passant la valeur de l'événement. Pour y parvenir :

Dans le template de component `App`:
- ajoutez une variable locale `xkeslots`, designant le component `XkeSlots` _(Tip: utilisez #)_  
- à la reception de l'événement `filter` du &lt;xke-filter&gt; appeler la méthode `xkeslots.filter(...)` avec une valeur d'événement (`$event.value`)  

Une fois que la valeur de filtre est recupérée dans `XkeSlots` vous pouvez filtrer la liste des slots.
[Voici](5-filter-component-filter-function.md) le code de filtrage pour gagner du temps.


## Résultat

> Vous devez obtenir un rendu qui s'apparente à ça :

![filter component resultat](img/filter-component-resultat.png)

  
[Solution](5-filter-component-solution.md)

[< Prev](4-slot-component.md) [Next >](6-fetch-data.md)

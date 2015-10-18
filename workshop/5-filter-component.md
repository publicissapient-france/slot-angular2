## Filter component

L'objectif de cette partie est de créer un component `xke-filter` permettant de filtrer les slots. 
Pour cela il nous faudra faire communiquer deux components frères.

Component `xke-filter` est positionné en tant que frère de component `xke-slots` :

![Components Tree](img/components-tree-filter.png)


### Component

Créez le component `XkeFilter` dans un nouveau fichier `xke-filter.ts` :
- selector: `xke-filter`
- templateUrl: `xke-filter.html`
  
**xke-filter.html :**

```html
<input type="text" placeholder="Filter slot..." />
```

Utilisez `xke-filter` dans le component App (`app.ts`) en le plaçant juste avant &lt;xke-slots&gt;


### Communication

Pour pouvoir communiquer avec le `xke-slots`, notre nouveau component doit émettre un événement (api output) 
dont la valeur sera ensuite transmise à `xke-slots`.

**> communication de XkeFilter vers App :**

Ecoutez la saisie du filtre au `keyup` :
- au `keyup` sur &lt;input&gt; appelez une méthode `doFilter()`
- utilisez une référence `#...` pour passer une valeur d'&lt;input&gt; à `doFilter(...)`
- ajoutez une méthode `doFilter(...)` et vérifiez à l'aide de `console.log()` que tout marche comme sur des roulettes

Lancez un événement `filter` vers le composant parent :
- dans la classe `XkeFilter` ajoutez la propriété `filter` decorée avec `@Output`: `@Output() filter:EventEmitter = new EventEmitter();`. _N'oubliez pas d'importer EventEmitter et Output depuis 'angular2/angular2'_

_Tip : l'émission d'un événement s'écrit sous cette forme `this.filter.next({value: ...});`_

**> communication de App vers XkeSlots :**

Le But: A la reception de l'événement de la part de XkeFilter, appeler la méthode `filter(...)` du `XkeSlots` en lui passant la valeur de l'evenement :

Dans le template de component `App`:
- ajoutez une variable locale `xkeslots`, designant le component `XkeSlots` _(Tip: utilisez #)_  
- à la reception de l'événement `filter` du &lt;xke-filter&gt; appeler la méthode filter()   
_Tip: La valeur d'un événement remonté est accessible à `$event.value`_

Une fois que la valeur de filtre est recupérée dans `XkeSlots` vous pouvez filtrer la liste des slots.
[Voici](5-filter-component-filter-function.md) le code de filtrage pour gagner du temps.


## Résultat

> Vous devez obtenir un rendu qui s'apparente à ça :

![filter component resultat](img/filter-component-resultat.png)

  
[Solution](5-filter-component-solution.md)

[< Prev](4-slot-component.md) [Next >](6-fetch-data.md)

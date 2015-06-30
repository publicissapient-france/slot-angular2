## Filter component

L'objectif de cette partie est de créer un component `xke-filter` permettant de filtrer le slots. 
Pour cela il nous faudra faire communiquer deux components frères.

Component `xke-filter` est positionné est tant que frère de component `xke-slots` :

![Components Tree](img/components-tree-filter.png)


### Component : 

- créez le component `XkeFilter` dans un nouveau fichier `xke-filter.js`
  - selector: `xke-filter`
  - templateUrl: `xke-filter.html`
  
**xke-filter.html :**

```html
<input type="text" placeholder="Filter slot..." />
```

Utilisez `xke-filter` dans le component App (`app.js`) en le plaçant juste avant &lt;xke-slots&gt;


### Communication :

Pour pouvoir communiquer avec le `xke-slots`, notre nouveau component doit émettre un événement (api output) 
dont la valeur sera ensuite tarnsmise à `xke-slots`.

**> communication de XkeFilter vers App :**

- au `keyup` sur &lt;input&gt; appelez une méthode `doFilter()`
- utilisez une référence pour passer une valeur d'&lt;input&gt; à `doFilter(...)`
- ajoutez une méthode `doFilter(...)` et vérifiez à l'aide de `console.log()` que tout marche comme sur des roulettes
- lancez un événement `filter` :
  - dans `@Component` ajouter la propriété suivante: `events: ['filter']`
  - dans la class `XkeFilter` ajoutez la propriété `filter:EventEmitter = new EventEmitter();`

Astuce : l'émission d'un événement s'écrit sous cette forme `this.filter.next({value: ...});`

**> communication de App vers XkeSlots :**

Normalement, vous avez toutes les connaissances nécessaires pour faire cette étape :-P  

Une fois que la valeur de filtre est recupérée dans `XkeSlots` vous pouvez filtrer la liste des slots.
[Voici](5-filter-component-filter-function.md) le code de filtrage pour gagner du temps.


### Le Resultat:

![filter component resultat](img/filter-component-resultat.png)
  
[Solution](5-filter-component-solution.md)

[< Prev](4-slot-component.md) [Next >](6-fetch-data.md)

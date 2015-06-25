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

Utilisez `xke-filter` dans le component App (`app.js`) en le placant juste avant &lt;xke-slots&gt;

### Comminucation :

Pour pouvoir communiquer avec le `xke-slots`, notre nouveau component doit émettre un événement (api output) 
dont la valeur sera ensuite tarnsmise à `xke-slots`.  


**XkeFilter -> App:**

- au `keyup` sur &lt;input&gt; appelez une méthode `doFilter()`
- utilisez une référence pour passer une valeur d'&lt;input&gt; à `doFilter(...)`
- ajoutez une méthode `doFilter(...)` et vérfiez à l'aide de `console.log()` que tout marche comme voulu
- lancez un événement `filter` :
  - dans `@Component` ajouter un propriété suivant: `events: ['filter']`
  - dans la class `XkeFilter` ajoutez un propriété `filter:EventEmitter = new EventEmitter();`
  - pour éméttre un événement: `this.filter.next({value: term});`

**App -> XkeSlots:**

Normallement, vous avez toutes les connaissances nécessaires pour faire cette étape :-P  

Une fois la valeur de filtre est recupérée dans `XkeSlots` vous pouvez filtrer la liste des slots.
[Voici](filter-component-filter-function.md) le code de filtrage pour gagner du temps.

Le Resultat:

![filter component resultat](img/filter-component-resultat.png)
  
[Solution](filter-component-solution.md)

[< Prev](slot-component.md) [Next >](exo2.md)

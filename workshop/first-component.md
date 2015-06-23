## First component

L'objectif de cet exercice est de créer notre propre component qui contiendera la liste des slots: `xke-slots`.

Rappelez vous, chaque application Angular 2 est faite de composants qui forment une structure arborescente.
Voici une structure de notre future application :

![Components Tree](img/components-tree.png)
 
&oast; Dans le fichier `app.js` notez l'instruction `bootstrap(App);`. 
Cette ligne permet d'indiquer à Angular que le component `App` est un component `root`.  

### Créer component `xke-slots` :

- créer le fichier `src/xke-slots.js` et y re-copier le contenue de `app.js` (sans `bootstrap(App);` bien sûr !)   
- pour selector utiliser `selector: 'xke-slots'`
- comme template, utilisez le fichier externe - `templateUrl: 'xke-slots.html'`
- créer le fichier de template: `xke-slots.html`

Voici le contenu de template statique:

```html
<p>
  slots count: 10
</p>

<ul>
  <li>
      Slot 1
  </li>
  <li>
      Slot 2
  </li>
</ul>
```
  
> Felicitation, votre nouveau component est prêt !

### Utilisation :
TODO

  
[Solution](first-component-solution.md)

[< Prev](data-binding.md) [Next >](exo3.md)

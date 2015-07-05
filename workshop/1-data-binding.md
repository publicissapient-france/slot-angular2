## Data Binding

L'objectif de cet exercice est de verifier le fonctionnement de data-binding.

### Dans le fichier `app.js` :

- ajoutez un attribut `name` dans la classe App avec la valeur "xke" ([ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)).
- modifiez la balise `header` présente dans le `template` pour afficher la valeur de `name` à l'écran
- dans le même template, ajoutez un `<button>` 'Greet'
- au [`click`](http://xebia-france.github.io/slot-angular2/#/3/10) sur ce bouton, lancez une [méthode](http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/) `doGreet()`
- implementez cette méthode dans `App` pour afficher `alert('Hello!')`

### Facultatif : 

- essayez d'afficher le "Have a good day" en asynchrone en utilisant la methode `setTimeout()` (avec un délai de 2 sec)
  
_Tip: Vous pouvez utiliser le syntaxe [fat arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) pour implementer des fonctions ES6_


[Solution](1-data-binding-solution.md)

[< Prev](0-getting-started.md) [Next >](2-first-component.md)

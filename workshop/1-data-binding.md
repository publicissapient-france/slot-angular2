## Data Binding

L'objectif de cet exercice est de verifier le fonctionnement de data-binding.

### Dans le fichier `app.ts` :

- ajoutez un attribut `name` dans la classe App avec la valeur "XebiCon" ([example dans la presentation](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdf781e475_1_63)).
- modifiez la balise `header` présente dans le `template` pour afficher la valeur de `name` à l'écran (binding)
- dans le même template, ajoutez après la balise `<header>` un `<button>` 'Greet'
- au [`click`](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdf927d755_1_36) sur ce bouton, lancez une méthode `doGreet()`
- implementez cette méthode dans `App` pour afficher `alert('Hello XebiCon!')`

### Facultatif : 

- essayez d'afficher le "Have a good day" en asynchrone en utilisant la methode `setTimeout()` (avec un délai de 2 sec) placée dans le `constructor`
  
_Tip: Vous pouvez utiliser le syntaxe [fat arrow](https://docs.google.com/presentation/d/1SBuErwnXg_bsTr3wfqXrVFI7cgMyEe6z5T5_Ti5Gg7g/edit?pli=1#slide=id.gdfca0523e_0_12) pour implementer des [fonctions ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)_


[Solution](1-data-binding-solution.md)

[< Prev](0-getting-started.md) [Next >](2-first-component.md)

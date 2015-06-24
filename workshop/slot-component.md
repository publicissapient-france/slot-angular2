## Slot component

L'objectif de cette partie est de créer un 'child' component `xke-slot` et lui passer le model de slot à afficher.

Pour vous rappeler la structure :

![Components Tree](img/components-tree-slot.png)

### Etapes : 

- créez le fichier `xke-slot.js`
- placez-y le nouveau component `XkeSlot`
  - selector: `xke-slot` (@Component)
  - templateUrl: `xke-slot.html` (@View)

Utiliser ce component dans le template de XkeSlots (`xke-slots.html`) à la place de titre dans la balise &lt;li&gt;:

- n'oubliez pas de l'importer dans le `xke-slots.js` et de le declarer dans @View `directives: []`.


Pour l'instant le nouveau component n'as pas d'accès au model d'un slot. Fixons ça !

### Component properties [] :

- declarez le propriété `model` du component `XkeSlot` dans son `@Component` :
```typescript
@Component({
    selector: 'xke-slot',
    properties: ['model']
})
```
- dans le template de XkeSlots (`xke-slots.html`) passer le `slot` dans le propriété `model` du &lt;xke-slot&gt; (utilisez les crochées)  
- finalizez le template du component `XkeSlot` :
  - model.title
  - model.attendees
  - model.speakers (utiliser ng-for)
  

Votre application doit s'approcher à ça :

![slot component resultat](img/slot-component-resultat.png)
  
[Solution](slot-component-solution.md)

[< Prev](store-service.md) [Next >](slot-component.md)

## Filter function

```typescript
...
term:string;

filter(term:string) {
  this.term = term;
}

getSlots() {
  return this.storeService.getSlots().filter((slot) => {
    return !this.term || slot.title.toLowerCase().indexOf(this.term.toLowerCase()) >= 0;
  });
}
...
```

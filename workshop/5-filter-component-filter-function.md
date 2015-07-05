## Filter function

```typescript
...
filter(term:string) {
  this.term = term;
}

getSlots() {
  return this.slots.filter((slot) => {
    return !this.term || slot.title.toLowerCase().indexOf(this.term.toLowerCase()) >= 0;
  });
}
...
```

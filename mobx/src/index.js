import { observable, isArrayLike, computed, autorun, when, reaction } from "mobx";

class Store {
  @observable array = [];
  @observable obj = {};
  @observable map = new Map();
  
  @observable string = 'hello';
  @observable number = 20;
  @observable bool = false;

  @computed get mixed() {
    return store.string + '/' + store.number;
  }
}

var store = new Store();

var foo = computed(function() {
  return store.string + '/' + store.number;
});

foo.observe(function(change){
  console.log(change);
});

console.log(foo.get());
store.string = 'world';
store.number = 30;

// autorun
autorun(() => {
  // console.log(store.string + '/' + store.number);
  console.log(store.mixed);
})

when(() => store.bool, () => console.log("It's true"));

store.bool = true;

// reaction
reaction(() => [store.string, store.number], arr => console.log(arr.join('--')));
store.string = 'hello world';
store.number = 301;
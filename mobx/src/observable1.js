import { observable, isArrayLike } from 'mobx';

// observable.box
// array object map

// array

const arr = observable(['a', 'b', 'c']);

console.log(arr, Array.isArray(arr), isArrayLike(arr));

console.log(arr.pop(), arr.push('d'), arr[10]);

const obj = observable({ a: 1, b: 1 });
console.log(obj);
console.log(obj.a, obj.b);

const map = observable(new Map());

map.set('a', 1);
console.log(map.has('a'));
// map.delete('a');
console.log(map);

var num = observable.box(20);
var str = observable.box('hello');
var bool = observable.box(true);

console.log(num.get(), str.get(), bool.get());
num.set(1000);
console.log(num.get());




class Store {
  @observable array = [];
  @observable obj = {};
  @observable map = new Map();
  
  @observable string = 'hello';
  @observable number = 20;
  @observable bool = false;
}
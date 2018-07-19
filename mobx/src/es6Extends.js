class Animal {
  name() {
    return 'Animal';
  }
  say() {
    return `I'm ${this.name()}`
  }
}

class Dog extends Animal {
  food = 'bone';
  name() {
    return 'Dog'
  }
}
// instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型
console.log(new Dog() instanceof Animal);
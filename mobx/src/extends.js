function Animal(){}

function Dog(){}


Object.defineProperties(Animal.prototype, {
  name: {
    value() {
      return 'Animal';
    }
  },
  say: {
    value() {
      return `I'm ${this.name()}`;
    }
  }
})

Dog.prototype = Object.create(Animal.prototype);
// 多态思想
Dog.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Dog,
    enumerable: false
  },
  name: {
    value() {
      return 'Dog';
    }
  }
})

// dog instanceof Animal => true
// dog.__proto__ === Dog.prototype
// Dog.prototype.__proto__ === Animal.prototype


document.write(new Dog() instanceof Animal);
document.write(new Dog().say());
console.log(Dog.prototype.constructor);
function log(target) {
  const desc = Object.getOwnPropertyDescriptors(target.prototype);
  console.log(target.prototype);
  console.log(desc);
  for (const key of Object.keys(desc)) {
    if (key === 'constructor') {
      continue;
    }
    console.log(desc[key]);
    const func = desc[key].value;

    if ('function' === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value(...args) {
          console.log('before ' + key);
          const ret = func.apply(this, args);
          console.log('after ' + key);
          return ret;
        }
      })
    }
  }
}

function readonly(target, key, descriptor) {
  descriptor.writable = false;
}

function validate(target, key, descriptor) {
  const func = descriptor.value;
  descriptor.value = function(...args) {
    for (let num of args) {
      if ('number' !== typeof num) {
        throw new Error(`${num} is not a number`);
      }
    }

    return func.apply(this, args);
  }
}


@log
class Numberic {
  @readonly PI = 3.1415926;

  @validate
  add(...nums) {
    return nums.reduce((p,n) => (p + n), 0);
  }
}

new Numberic().add('11', 2);
// new Numberic().PI = 100;
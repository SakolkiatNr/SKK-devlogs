function makeAdding (firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting (secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7



// Factory function
// What's the difference?

// this is a constructor
const User = function (name) {
    this.name = name;
    this.discordName = '@' + name;
}
// this is factory function
function createUser(name) {
    const discordName = '@' + name;
    return {name, discordName};
}
    // return object


// Destructuring
// extract property of an object into a var of the same name






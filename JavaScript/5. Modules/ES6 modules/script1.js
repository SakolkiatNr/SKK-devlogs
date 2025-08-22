export default class User {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

function printName(user) {
    console.log(`User's name is ${user.name}`)
}

function printAge(age) {
    console.log(`User is ${age} years old`)
}

export {printAge, printName};
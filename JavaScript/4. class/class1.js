// class syntax
class MyClass {
    // class methods
    constructor(){}
    method1() {}
    method2() {}
    method3() {}
}

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

let user = new User('SKK');
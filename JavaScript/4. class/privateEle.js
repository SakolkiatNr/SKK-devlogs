class ClassWithPrivateField {
    #privateField;

    constructor() {
        this.#privateField = 42;
    }
}

class Subclass extends ClassWithPrivateField {
    #subPrivateField;

    constructor() {
        super();
        this.#subPrivateField = 23;
    }
}
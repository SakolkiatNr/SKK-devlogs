function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age is calculated from current date a
    Object.defineProperty(this, 'age', {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let fiona = new User('Fiona', new Date(2000, 8, 15));

console.log(fiona.birthday);
console.log(fiona.age);

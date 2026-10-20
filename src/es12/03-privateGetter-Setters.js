class User {

    //Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //Métodos
    #
    speak() {
        return "Hello";
    }

    greeting() {
        return `${this.speak()} ${this.name}`
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n
    }
}


const mike = new User("David", 15)

console.log(mike.uAge);
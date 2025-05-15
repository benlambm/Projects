class name {
    constructor(parameters) {
        this.name = parameters.name;
        this.age = parameters.age;
    }
}
const person = new name({
    name: "John",
    age: 30
});
console.log(person.name); // John
console.log(person.age); // 30
// The above code defines a class called 'name' with a constructor that takes an object as a parameter.
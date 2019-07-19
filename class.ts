class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName, public age) {
        this.fullName = firstName + " " + middleInitial + " " + lastName + age;
    }
}

//Creates a type and simplifies the architectural complexity in the returning function(method).
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName + " , age"  + person.age;
}

//Instantiate an object from te class
var user = new Student("Jane", "M.", "Dean", 10);

document.body.innerHTML = greeter(user);
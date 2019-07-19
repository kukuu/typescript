var Student = (function () {
    function Student(firstName, middleInitial, lastName, age) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + " " + middleInitial + " " + lastName + age;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " , age" + person.age;
}
var user = new Student("Jane", "M.", "Dean", 10);
document.body.innerHTML = greeter(user);

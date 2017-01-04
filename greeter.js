/*function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";
ß
document.body.innerHTML = greeter(user); */
//Add a : string type annotation to the ‘person’ function argument as shown here:
function greeter(person) {
    return ("Hello, " + person);
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
//var result = document.getElementById("data");
//result.innerHTML = greeter(user);

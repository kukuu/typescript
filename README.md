# TypeScript

TypeScript is a superset of JavaScript.

Since TypeScript generates plain JavaScript code you can use it with any browser. Additionally, TypeScript is open source. It offers many features of object oriented programming languages such as classes, interfaces, inheritance, overloading and modules, some of which are proposed features of ECMA Script 6. Overall TypeScript is a promising language  that can certainly help you neatly write and organize your JavaScript code base making it more maintainable and extensible.

## Features

1. TypeScript Code is Converted into Plain JavaScript Code

TypeScript code consists of plain JavaScript code as well as certain keywords and constructs specific to TypeScript. However, when you compile the TypeScript code it is converted into plain JavaScript. That means the resultant JavaScript can be used with any browser that supports JavaScript. For example, consider the following code written in TypeScript:

```
class Customer {
    customerId: number;
    companyName: string;
    contactName: string;
    country: string;

    addCustomer(): number {
        //some code here
        return 0;
    }
}

```

The above code uses TypeScript specific keywords such as class and data types such as number and string. When you compile this code the resultant JavaScript that gets outputted is this:

```
var Customer = (function () {
    function Customer() { }
    Customer.prototype.addCustomer = function () {
        return 0;
    };
    return Customer;
})();

```

As you can see this is just the plain JavaScript and can be used in any browser that understands JavaScript. In your web pages you will be referring to this JavaScript code file (*.js) and not the TypeScript code file (*.ts). To compile the TypeScript code to JavaScript you have two options - you can either use the command line TypeScript compiler (tsc.exe) or you can use the TypeScript editor plugin for Visual Studio 2012. The later is highly recommended because it provides additional features such as IntelliSense and syntax highlighting.


2. Data Types

When you declare any variable in JavaScript you typically do so using var keyword without specifying any particular data type for the variable. For example consider the following variable declaration:

```

window.onload = function () {
    var data = 10;
    alert(data);
    data = "hello world";
    alert(data);
}
```

In the above piece of code, variable named data is first assigned a number and then a string. As you might have already guessed both the alert() calls correctly output the respective value. However, this can lead to hard to maintain code and can introduce serious errors. TypeScript allows you to declare variables with a specific data type. The types can be classified as primitive or object types. The primitive types include number, bool and string whereas object types include modules, classes and interfaces. The following piece of code shows how this can be done.

Declare variables

As you can see three variables age, message and flag are declared of type number, string and bool respectively. If you try to assign values to any of these variables that are not of the specific type, the TypeScript compiler will throw an error. If you are using TypeScript editor plugin for Visual Studio 2012 you will immediately see a red underline below the line in question. You can omit the type if you declare and initialize the variable in a single step (for example, var age=10; will make age of type number). Types can also be used with function parameters or return values of the functions.



```

MyFunction(message:string,flag:bool): number {
    if (flag) {
        document.getElementById("div1").innerText = message;
        return 10;
    }
    else {
        document.getElementById("div1").innerText = message;
        return 20;
    }
}

```

As you can see, the MyFunction accepts two parameters of type string and bool respectively and returns a number. TypeScript also has a data type called any that can accept any type of data.

By allowing you to declare variables of a specific type, TypeScript avoids lot of errors that may otherwise be introduced in the code.


3. Classes

If you develop applications using programming languages such as C# or Visual Basic you are probably aware of the benefit offered by object oriented constructs such as classes. In many web applications developers keep their JavaSript code merely as a collection of functions. TypeScript allows you to easily and neatly organize your code in classes. The following class declaration shows how:


```

class Customer {
    customerId: number;
    companyName: string;

    addCustomer() {
        //some code here
    }

    removeCustomer() {
        //some code here
    }

    updateCustomer() {
        //some code here
    }

    getCustomer() {
        //some code here
    }
}

```

The above code creates a class named Customer using the class keyword of TypeScript. Just like C# classes a TypeScript class can have properties, methods and constructors. Once created you can initialize an object of Customer class as shown below:


```
var obj = new Customer();
obj.customerId = 100;
obj.companyName = "Some Company";
obj.addCustomer();

```

4. Access Modifiers and Properties

Access modifiers control the accessibility of the members of a class. TypeScript has two access modifiers - public and private. By default the members are public but you can explicitly add a public or private modifier to them. Consider the following piece of code that declares two public and one private variable.


Two public and one private variable

The above code defines a class named Customer that has three members viz. customerId, companyName and country. Since by default members are public the customerId can be accessed from theoutside world as shown by the IntelliSense window. On the same lines the companyName is explicitly marked as public and hence it is accessible from the external world. The country, however, is marked as private and hence won't be accessible outside the class as can be seen from the IntelliSense window.

When you declare members as private you may want to allow access to them them via public get and set properties. Luckily TypeScript allows you to do just that. The following code shows how:

```

get Country(): string {
    return this.country;
}

set Country(value: string) {
    this.country = value;
}

```

Here, the get and a set functions for Country property are defined. Inside the get function you return the value of private variable country whereas in the set function you assign a value to it. Once created you can use this property as follows:


```

var obj = new Customer();
obj.Country = "USA";

```


Note that in order to compile the above code correctly you must use --target switch and set its value to ES5 (ECMA script version 5). This is because the property get and set are supported in ECMA5 and later versions (the error thrown at you will be "Property accessors are only available when targeting ES5 or greater"). To compile the above code from the command line you would run the following command:


```

tsc.exe --target ES5 app.ts

```

5. Static and Instance Members

The classes you create in TypeScript can either contain static members or instance members. For example consider the following piece of code:

```

class Customer {
    customerId: number;
    companyName: string;
    static data: string;

    static test() {
        alert(Customer.data);
    }
}

```

The above code declares a class named Customer. The Customer class declares a static property - data - of type string. The static function test() then displays this property value to the user. Notice how static members are accessed using <class_name>.<static_member_name> syntax.



6. Function Overloading

TypeScript allows you to define overloaded functions. This way you can invoke different implementations of a function depending on the parameter. Remember, however, that TypeScript function overloading is bit odd and requires type checking during the implementation. This limitation is due to the fact that TypeScript code finally gets compiled into plain JavaScript and JavaScript doesn't support the concept of function overloading in its true sense. The following simple example shows how two versions of a function can be created in TypeScript:



```

addCustomer(custId: number);
addCustomer(company:string);
addCustomer(value: any) {
    if (value && typeof value == "number") {
        alert("First overload - " + value);
    }
    if (value && typeof value == "string") {
        alert("Second overload - " + value);
    }
}

```

As you can see the first two are merely function signatures without any implementation. The first signature has one parameter of type number whereas the second signature has a parameter of type string. The third function contains the actual implementation and has a parameter of type any. The any data type indicates that any type of data can be passed in the parameter. The implementation then has a series of if blocks, each checking the type of the supplied parameter. Accordingly a different piece of code is executed. If you see the IntelliSense for the addCustomer() function it will indicate all the overloaded versions of the function as shown below:



The IntelliSense for the addCustomer() function above.


7. Constructors

The classes you define in TypeScript can have constructor. The constructor usually does the job of initializing the object by setting default values to its properties. The constructor can also be overloaded just like a function. The following code shows how a constructor can be created.


```
constructor(custId:number,company:string,country:string) {
    this.customerId = custId;
    this.companyName = company;
    this.country = country;
}

```

The above code declares a parameterized constructor for the Customer class. The constructor has three parameters and inside the constructor their values are assigned to the respective properties. Once created you can instantiate the Customer class as shown below:


```

var obj = new Customer(100,'Some Company','USA');
alert(obj.country);

```

As you can see the constructor parameters are specified while instantiating the class. There is also one more handy use of the constructor - instead of defining properties explicitly in the class they can be defined in the constructor signature itself. The following code shows how this can be done:


```
constructor(public customerId:number,public companyName:string,public country:string) {
}

```

The above constructor has three parameters and they are marked as public. This way the Customer class gets three public properties, viz. customerId, companyName and country, even if you didn't explicitly defined them. You can then use these properties just like any other explicitly defined properties.


8. Inheritance

TypeScript allows you to inherit from existing classes. By inheriting classes you can extend their functionality as per your requirement. For example, you may have a class named Person. You can create specialized classes based on the Person class by extending it in the other classes (say Employee or Contractor). The following code shows how this can be done.


TypeScript allows you to inherit from existing classes

The above code defines two classes Person and Employee. The Person class has two properties viz. firstName and lastName. The Employee class inherits from the Person class using the extends keyword. Notice how the base class constructor has been called in the inherited class using the super keyword. As shown in the IntelliSense the Employee class in all has four properties - two properties from base class and two properties of its own.


9. Interfaces

Just as TypeScript supports inheritance, it also supports interfaces. You can define an interface and then implement it in one or more classes. For example, you may have an interface called ITax that defines some properties and functions. You can then implement ITax in other classes say IncomeTax and ServiceTax. The following code shows how this can be done:


```

interface ITax {
    taxpayerId: string;
    calculateTax(): number;
}

class IncomeTax implements ITax {
    taxpayerId: string;
    calculateTax(): number {
        return 10000;
    }
}

class ServiceTax implements ITax {
    taxpayerId: string;
    calculateTax(): number {
        return 2000;
    }
}

```

As you can see from the above code an interface ITax has been defined using the interface keyword. It has one property named taxpayerId and a function calculateTax(). Then there is a class IncomeTax that implements ITax using the implements keyword. It is mandatory for IncomeTax class to implement taxpayerId property and the calculateTax() method. Similarly, another class named ServiceTax implements ITax.

10. Modules

As your TypeScript code base grows it becomes important to organize classes and interfaces for better maintainability. TypeScript modules allow you to do just that. A module is a container for your code that helps you organize your code in a neat way. Conceptually you may find them similar to .NET namespaces. Let's see how to create a module.

Have a look at the following code that defines a module named Company.


```

module Company {
    class Employee {
    }

    class EmployeeHelper {
        targetEmployee: Employee;
    }

    export class Customer {
    }
}

var obj = new Company.Customer();

```

The above code defines Company module using the module keyword. The Company module contains three classes - Employee, EmployeeHelper and Customer. By default all the classes from a module are accessible only within that module. That is why it is alright to access the Employee class inside the EmployeeHelper class from the same module but you can't access the Employee class from outside the Company module. If you wish to access a class from a module from the outside world you need to "export" it as in the case of the Customer class.

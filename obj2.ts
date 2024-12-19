// Multilevel Inheritance Example

// Interface defines the structure that classes will follow.
interface abc {
    names: string;  // name of the person
    age: number;    // age of the person
    add: string;    // address of the person
    zip: number;    // zip code of the person
}

// Base class (parent class)
class abc {
    // Declaring properties with types
    public names: string;
    public age: number;

    // Constructor to initialize the properties when an object is created
    public constructor(names: string, age: number) {
        this.names = names;  // Initializing 'names' property
        this.age = age;      // Initializing 'age' property
    }
}

// Class 'def' inherits from 'abc' (Multilevel inheritance: abc -> def)
class def extends abc {
    public add: string;  // address property for this class

    // Constructor initializes properties from both 'abc' and 'def'
    public constructor(names: string, age: number, add: string) {
        super(names, age);  // Call the parent class constructor to initialize 'names' and 'age'
        this.add = add;      // Initialize 'add' property for 'def'
    }
}

// Class 'efg' inherits from 'def' (extends 'def', which already extends 'abc')
class efg extends def {
    public zip: number;  // zip property for this class

    // Constructor initializes all properties for 'efg'
    public constructor(names: string, age: number, add: string, zip: number) {
        super(names, age, add);  // Call the parent class constructor to initialize 'names', 'age', and 'add'
        this.zip = zip;           // Initialize 'zip' property for 'efg'
    }

    // Method that returns all the properties of 'efg' as an object
    public show(): any {
        return {
            nm: this.names,  // name
            ag: this.age,     // age
            ad: this.add,     // address
            zp: this.zip      // zip code
        };
    }
}

// Creating multiple instances (objects) of class 'efg'
let obj1 = new efg("Avishek", 25, "Kolkata", 700091);
let obj2 = new efg("Sourav", 30, "Delhi", 110001);
let obj3 = new efg("John", 35, "USA", 10001);
let obj4 = new efg("Sara", 28, "London", 20001);
let obj5 = new efg("Peter", 40, "Paris", 30001);

// Array containing data of all the created objects
let alldata: abc[] = [
    obj1.show(), obj2.show(), obj3.show(), obj4.show(), obj5.show()
];

// Print all the data of the objects
console.log(alldata);

// ---------------------------------------

// Hierarchical Inheritance Example (Multiple classes extending from the same parent)

class A {
    public show(): void {
        console.log("Parent Class");
    }
}

// Class 'B' and class 'C' both inherit from class 'A'
class B extends A {}  // Class 'B' extends 'A'
class C extends A {}  // Class 'C' extends 'A'

// Create instances of classes 'B' and 'C'
let objB = new B();
objB.show();  // Output: "Parent Class" because 'B' inherits from 'A'

let objC = new C();
objC.show();  // Output: "Parent Class" because 'C' inherits from 'A'

// ---------------------------------------

// Abstract Class and Abstract Method Example

// Abstract class: Contains methods that are declared but not implemented
abstract class A {
    public abstract show(): any;  // Abstract method without implementation
    public demo(): void {
        console.log("Demo");  // A regular method with implementation
    }
}

// Class 'B' implements the abstract 'show' method from class 'A'
class B extends A {
    public show(): void {
        console.log("Hello from class B");
    }
}

// Class 'C' also implements the abstract 'show' method from class 'A'
class C extends A {
    public show(): void {
        console.log("Hello from class C");
    }
}

// Create instances of class 'B' and class 'C'
let objB1 = new B();
objB1.show();  // Output: "Hello from class B"

let objC1 = new C();
objC1.show();  // Output: "Hello from class C"

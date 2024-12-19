// Object-Oriented Programming Example

// Class A with a public member
class A {
    // Public modifier: Accessible anywhere
    public name: string = "jgdfhd";
}

let st1: A = new A();
console.log("Public Property:", st1.name); // Accessible because 'name' is public

// Differences Between Access Modifiers:
// public => Accessible within the class, outside the class, and in derived classes
// private => Accessible only within the class where declared
// protected => Accessible within the class and in derived classes, but not outside the class

// Example demonstrating private members
class B {
    // Private members
    private name1: string = "Private Member";

    // Private method
    private show(): void {
        console.log("Private Method Output:", this.name1);
    }

    // Public method to access private members
    public accessPrivate(): void {
        this.show(); // Accessing private method within the class
    }
}

// Class C extends B
class C extends B {
    // Cannot access private members from parent class
    public test(): void {
        // console.log(this.name1); // Error: 'name1' is private in class B
        console.log("Cannot access private members of the parent class.");
    }
}

// Create instances
let objC: C = new C();
objC.accessPrivate(); // Works: Accessing private members through a public method
objC.test(); // Demonstrates that private members are inaccessible

// Trying to access private members directly will cause errors
// console.log(objC.name1); // Error: 'name1' is private
// objC.show(); // Error: 'show' is private

// 1. Defining an Interface (like a blueprint)
interface A {
    show(): any;  // This is a function that should be implemented
    demo(): any;  // Another function that should be implemented
}

// 2. Creating a normal class (Class B with no interface or abstract methods)
class B {
    // Class B doesn't have any methods or properties for now
}

// 3. Creating another class (Class C that extends Class B and implements the Interface A)
class C extends B implements A {
    // Class C now needs to implement the functions from interface A

    // Implementing the show() method
    public show() {
        console.log("Hello World");
    }

    // Implementing the demo() method
    public demo() {
        console.log("Hello from class C");
    }
}

// 4. Creating an object (instance) of class C and calling the methods
let obj: any = new C();  // This creates a new object of class C

obj.show();  // Output: "Hello World"
obj.demo();  // Output: "Hello from class C"

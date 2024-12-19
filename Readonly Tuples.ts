var arr5: readonly [number, boolean, string] = [15, true, "Kolkata"]; // Readonly tuple
// arr5.push("newElement"); // Error: Push is not allowed on readonly tuples
// arr5.pop();              // Error: Pop is not allowed on readonly tuples
console.log(arr5);

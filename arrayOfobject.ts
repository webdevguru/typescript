interface Abc {
    Id: number;          // Corrected `Number` to `number`
    Name: string;        // Corrected `String` to `string`
    roll: number;        // Corrected `Number` to `number`
    place_Name: string;  // No change, already correct
    city_Name: string;   // Corrected `String` to `string`
}

let obj: Abc[] = [
    { Id: 1, Name: "sourav sanyal", roll: 12, place_Name: "SealDah", city_Name: "kolkata" },
    { Id: 2, Name: "sudipto sanyal", roll: 14, place_Name: "SealDah", city_Name: "kolkata" },
    { Id: 3, Name: "Malay sanyal", roll: 1, place_Name: "SealDah", city_Name: "kolkata" }
];

console.log("Original Object:", obj);

let obj1: Abc[] = obj.map((item: Abc) => {
    return item;
});
console.log("Mapped Object:", obj1);

let obj2: Abc[] = obj.filter((item: Abc) => {
    return item.Name.toLowerCase().includes("d"); // Case-insensitive filter
});
console.log("Filtered Object:", obj2);

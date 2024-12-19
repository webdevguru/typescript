var obj = [
    { Id: 1, Name: "sourav sanyal", roll: 12, place_Name: "SealDah", city_Name: "kolkata" },
    { Id: 2, Name: "sudipto sanyal", roll: 14, place_Name: "SealDah", city_Name: "kolkata" },
    { Id: 3, Name: "Malay sanyal", roll: 1, place_Name: "SealDah", city_Name: "kolkata" }
];
console.log("Original Object:", obj);
var obj1 = obj.map(function (item) {
    return item;
});
console.log("Mapped Object:", obj1);
var obj2 = obj.filter(function (item) {
    return item.Name.toLowerCase().includes("d"); // Case-insensitive filter
});
console.log("Filtered Object:", obj2);

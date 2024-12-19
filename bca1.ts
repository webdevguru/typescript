var arr = [5, 10, 15, 20, 25];
var arr3 = arr.filter((item) => {
    return item > 13; // Filters items greater than 13
});
arr.push(85); // Adds 85 to the end of arr

console.log(arr3); // Logs the filtered array
console.log(arr);  // Logs the original array after push

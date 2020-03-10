// Instructions: Write a function called map which takes an array and a function as arguments. Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.

// Have to use a for loop, that's the only way to iterate without methods
// How to get stuff into an array without .push?
// Define a new empty array within the function that takes the array and callback as parameters
// use array.length to set the index of each item in the for loop
// call the callback function on each item and insert into the new array
// return the new array

// function map(array, addOne) {
//     const newArr = [];
//     for(let i = 0; i < array.length; i++) {
//         const num = array[i];
//         newArr.push(callback(num));
//     }
//     return newArr;
// }

// Whoops, can't use .push!

function map(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray[i] = callback(item);
    }
    return newArray;
}

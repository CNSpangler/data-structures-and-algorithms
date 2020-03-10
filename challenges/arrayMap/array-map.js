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

//testing
const {
    map
} = require('../array-map.js');

function addOne(num) {
    return num + 1;
};

const numArray = [1, 2, 3, 4]

describe('validator module', () => {
    describe('basic validation', () => {
        it('adds one to every number in an array', () => {
        expect(map(numArray, addOne)).toEqual([2, 3, 4, 5]);
        });
    });
})
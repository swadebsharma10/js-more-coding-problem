// slice
// Returns a copy of a section of an array. For both start and end,
// a negative index can be used to indicate an offset from the end of the array.
// For example, -2 refers to the second to last element of the array.

const friendAges =[21, 23, 24, 32, 26, 27, 33, 22,55, 44];
const partial = friendAges.slice(2, 5);
// console.log(friendAges)
// console.log(partial);

// splice
//Removes elements from an array and, if necessary, inserts new elements in their place,
//returning the deleted elements.

const friendsAges =[21, 23, 24, 32, 26, 27, 33, 22,55, 44];
const partial2 =friendsAges.splice(2, 5, 202, 203,220);
console.log(friendsAges)
console.log(partial2);

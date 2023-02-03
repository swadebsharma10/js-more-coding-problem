const country = 'Bangladesh';
const age = 32;
const isSingle = true;
const student = {id:21, class:5, name: 'Agun'};
const friendAges =[23, 24, 25, 26, 27, 33,];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isSingle);
// check array use Array.isArray()
console.log(Array.isArray(student));
console.log(Array.isArray(friendAges));
console.log(typeof friendAges);

// includes
console.log(friendAges.includes(19));
console.log(friendAges.includes(27));

// concat: put to add together.
const newFriendAge = [12, 13, 14, 15, 16, 17];
const allFriendAge = newFriendAge.concat(friendAges);
console.log(friendAges)
console.log(allFriendAge)
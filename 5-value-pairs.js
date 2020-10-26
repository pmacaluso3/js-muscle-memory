/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

valuePair(object1, object2, 'location'); // => [ 'Remote', 'San Francisco' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

// have to return an array

function valuePair(obj1, obj2, key) {
  // this will look for a key that is literally "key" in the object. that's not what we want
  // return [ obj1.key ]

  // this will evaluate the key argument and find out what string it represents, then it will look for that string inside obj1
  return [ obj1[key], obj2[key] ]
}
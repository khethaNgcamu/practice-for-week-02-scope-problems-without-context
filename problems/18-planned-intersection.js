/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

function plannedIntersect(firstArr) {
  // Your code here
  return function(secondArr) {
    const intersection = [];
    for (let item of firstArr) {
        if (secondArr.includes(item)) {
            intersection.push(item);
        }
    }
    return intersection;
}
}

// short method 
// function plannedIntersect(firstArr) {
//   return function(secondArr) {
//       return firstArr.filter(item => secondArr.includes(item));
//   }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
try {
  module.exports = plannedIntersect;
} catch (e) {
  return null;
}
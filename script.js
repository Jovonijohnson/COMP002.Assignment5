// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function range(start, end) {
  let array = []; /*This array will be used to store the sequence of numbers from start to end*/
  for (let i = start; i <= end; i++) /*sets the loop to run as long as i is less than or equal to the end value */
     {
      array.push(i);
  }
  return array; /*returns the final array*/
}

// Example usage
let result = range(1, 5);
console.log(result); // outputs [1, 2, 3, 4, 5]

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

function sum(numbers) {
  let total = 0; /*This array will be used to store the sequence of numbers from start to end.*/

  for (let i = 0; i < numbers.length; i++)
     /*initializes the loop counter i to the start value. */
     {
      total += numbers[i];
  }
  return total; /*which now contains all the integers from start to end, inclusive */
}

// Example usage
console.log(sum(range(1, 10))); // returns 55

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]


//The original array remains unchanged.
function reverseArray(array)
 {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) 
        {
      newArray.push(array[i]);
    }
    return newArray;
  }
  
  // Example
  console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"]

  //Modifies the original array and No new array was created.
  function reverseArrayInPlace(arr) {
    let halfLength = Math.floor(arr.length / 2);
    for (let idx = 0; idx < halfLength; idx++) {
        let oppositeIndex = arr.length - 1 - idx;
        let temp = arr[idx];
        arr[idx] = arr[oppositeIndex];
        arr[oppositeIndex] = temp;
    }
    return arr; // returning the same array for reference
}

// Example usage
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

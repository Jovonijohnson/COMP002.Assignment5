// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function range(start, end) {
  let array = []; // This array will be used to store the sequence of numbers from start to end
  for (let i = start; i <= end; i++) // Sets the loop to run as long as 'i' is less than or equal to the 'end' value
  {
    array.push(i); // Adds the current value of 'i' to the array
  }
  return array; // Returns the final array containing the sequence of numbers
}

// Example usage
let result = range(1, 5); // Calls the range function with start = 1 and end = 5
console.log(result); // Outputs [1, 2, 3, 4, 5] - prints the result array to the console


// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

function sum(numbers) {
  let total = 0; // Initializes the variable 'total' to store the sum of the numbers in the array

  for (let i = 0; i < numbers.length; i++) // Loops through each element in the 'numbers' array
  {
    total += numbers[i]; // Adds the current element of the 'numbers' array to 'total'
  }
  return total; // Returns the total sum of the numbers in the array
}
// Example usage
console.log(sum(range(1, 10))); // Calls the 'sum' function with the result of 'range(1, 10)' and logs the result, which is 55


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

// The original array remains unchanged.
function reverseArray(array) {
  let newArray = []; // Initializes an empty array to store the reversed elements

  for (let i = array.length - 1; i >= 0; i--) { // Loops through the original array from the last element to the first
      newArray.push(array[i]); // Adds the current element to the new array
  }

  return newArray; // Returns the new array with the elements in reverse order
}

// Example
console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"]

// Modifies the original array and no new array was created.
function reverseArrayInPlace(arr) {
    let halfLength = Math.floor(arr.length / 2); // Calculates the halfway point of the array
    for (let idx = 0; idx < halfLength; idx++) { // Loops from the start to the halfway point of the array
        let oppositeIndex = arr.length - 1 - idx; // Finds the index of the element at the opposite end of the array
        let temp = arr[idx]; // Stores the current element in a temporary variable
        arr[idx] = arr[oppositeIndex]; // Sets the current element to the value of the opposite element
        arr[oppositeIndex] = temp; // Sets the opposite element to the value of the current element
    }
    return arr; // Returns the original array, now reversed
}

// Example usage
let arrayValue = [1, 2, 3, 4, 5]; // Defines an array with values [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue); // Calls reverseArrayInPlace to reverse the array in place
console.log(arrayValue); // Outputs [5, 4, 3, 2, 1] - prints the reversed array to the console


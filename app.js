// In this exercise, you’ll refactor some ES5 code into ES2015.

// ## **ES5 Map Callback**
arr = [1,2,4,7,.99];

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//   ## **ES2015 Arrow Functions Shorthand**
// Refactor the above code to use two arrow functions. Turn it into a one-liner.

//   arr.map ((val) => val * 2);
// nope, bad start.


  const double = arr => arr.map(val => val * 2);



  //   ## **Refactor the following function to use arrow functions:**
// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });

   // let evens = squares.filter((square) => square % 2 === 0);
   //nope, needs to be all one line. this wouldn't be included in the first half of the function. 

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);


    
 

     
   
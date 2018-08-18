/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  console.log("maxFibValue: ", maxFibValue);
  var sum = 0;

  // do your work here
  let fibNums = [1, 2];

  //Iterate through the fibNum array and add more fib numbers until the fib number is equal to the maxFibValue provided
  for (let i = 0; fibNums[fibNums.length - 1] !== maxFibValue; i++) {
    let fib = fibNums[i] + fibNums[i + 1];
    console.log("fib:", fib);
    fibNums.push(fib);
    console.log("Check fibNums:", fibNums);
  }

  //Function to for filter method to filter out even numbers
  getEvens = element => {
    //return a new array with all elements that pass true test
    return !(element % 2);
  }
  //From the fibNum array, filter out all the even numbers
  let evenNums = fibNums.filter(getEvens);
  console.log("\nevenNum arr: ", evenNums);

  //Function to add all values in the callback function. Store the sum
  sumEvens = (prevValue, currentValue) => {
    return prevValue + currentValue;
  }
  sum = evenNums.reduce(sumEvens);
  console.log("Sum: ", sum);

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
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
  let evenNums = [2];
  let fibNums = [1, 2];

  while (fibNums[fibNums.length - 1] !== maxFibValue) {

    for (let i = 0; fibNums[fibNums.length - 1] !== maxFibValue; i++) {
      let fib = fibNums[i] + fibNums[i + 1];
      fibNums.push(fib);
      console.log("Check fibNums:", fibNums);
      console.log("Check last element:", fibNums[fibNums.length - 1]);
      if (fib % 2 === 0) {
        evenNums.push(fib);
        console.log("Check evenNums:", evenNums);
      }
    }
  }
  for (j = 0; j < evenNums.length; j++) {
    sum += evenNums[j];
  }
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
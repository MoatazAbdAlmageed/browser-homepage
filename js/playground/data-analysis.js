/**
 *
 * https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript
 */
//
// Calculating the average/mean
// https://www.sitepoint.com/community/t/calculating-the-average-mean/7302/3
//

/**
 * The "mean" is the "average" you're used to, where you add up all the numbers
 * and then divide by the number of numbers.
 *
 * For example, the "mean" of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated average (or mean) value from the specified
 *     numbers.
 */
function mean(numbers) {
  console.log(` * The "mean" is the "average" you're used to, where you add up all the numbers
      * and then divide by the number of numbers.`);
  var total = 0,
    i;
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total / numbers.length;
}

//
// // alternative mean/average method (from https://www.30secondsofcode.org/snippet/average):
// const mean = (...numbers) =>
//   numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
// //
// usage:
// mean(...[1, 2, 3]); // 2
// mean(...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 5
// mean(...[1, 2, 3]); // 2

/**
 * The "median" is the "middle" value in the list of numbers.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated median value from the specified numbers.
 */
// function median(numbers) {
// not valid
//   console.log(`The "median" is the "middle" value in the list of numbers.`);
//   // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
//   var median = 0,
//     numsLen = numbers.length;
//   numbers.sort();

//   if (
//     numsLen % 2 ===
//     0 // is even
//   ) {
//     // average of two middle numbers
//     median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
//   } else {
//     // is odd
//     // middle number only
//     median = numbers[(numsLen - 1) / 2];
//   }

//   return median;
// }

const median = (arr) => {
  console.log(`The "median" is the "middle" value in the list of numbers.`);
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

/**
 * The "mode" is the number that is repeated most often.
 *
 * For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
 *
 * @param {Array} numbers An array of numbers.
 * @return {Array} The mode of the specified numbers.
 */
function mode(numbers) {
  console.log(`The "mode" is the number that is repeated most often.`);
  // as result can be bimodal or multi-modal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  var modes = [],
    count = [],
    i,
    number,
    maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
}

/**
 * The "range" of a list a numbers is the difference between the largest and
 * smallest values.
 *
 * For example, the "range" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 5].
 *
 * @param {Array} numbers An array of numbers.
 * @return {Array} The range of the specified numbers.
 */
function range(numbers) {
  numbers.sort();
  return [numbers[0], numbers[numbers.length - 1]];

const nums = [5, 8, 15, 7, 10, 22, 3, 1, 15, 10];
console.log(nums);
console.log(mean(nums));
console.log(median(nums));
console.log(mode(nums));

// const scores = [78, 45, 92, 61, 38, 85, 70, 55];
// function analyzeScores(scores) {
//   let a60 = 0;
//   let b60 = 0;
//   let high = scores[0];
//   let low = scores[0];
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] >= 60) {
//       a60++;
//     } else {
//       b60++;
//     }
//     if (scores[i] > high) {
//       high = scores[i];
//     }
//     if (scores[i] < low) {
//       low = scores[i];
//     }
//   }
//   return {
//     a60,
//     b60,
//     high,
//     low,
//   };
// }
// console.log(analyzeScores(scores));

const scores = [2, 3, 6, 8, 9, -3, 12];
function filterNumbers(numbers) {
  let result = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 0 && scores[i] % 3 == 0) {
      result.push(scores[i]);
    }
  }
  return result;
}

console.log(filterNumbers(scores));

function findAverage(arr) {
  let bag = 0;
  for (let i = 0; i < arr.length; i++) {
    bag += arr[i];
  }
  return bag / arr.length;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(findAverage(arr));


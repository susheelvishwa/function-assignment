function character(char) {
  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < small.length; i++) {
    if (char === capital[i]) {
      return small[i];
    }
  }
}
function convertWord(word) {
  let bag = "";
  for (let i = 0; i < word.length; i++) {
    bag = bag + character(word[i]);
  }
  return bag;
}
function convertArray(arr) {
  let bag = [];
  for (let i = 0; i < arr.length; i++) {
    bag.push(convertWord(arr[i]));
  }
  return bag;
}
let arr = ["MA", "SA", "I", "SCH", "OOL"];
console.log(convertArray(arr));

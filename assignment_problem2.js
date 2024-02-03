function findAbsolute(num){
  if(num < 0){
    num = num* -1
  }
  return num
}
function findDifference(a,b){
  return a - b
}

let a = 12
let b = 4
let x = findDifference(a,b)
let y = findAbsolute(x)
console.log(y)

let c = 4
let d = 18
let l = findDifference(c,d)
let m = findAbsolute(l)
console.log(m)
// MY SOLUTION

const sumAll = function(a,b) {
  sumArray = []
  if ((typeof(a, b) == "number") && (a >= 0 && b >= 0)){
    if (b > a) {
      for (i = a; i <= b; i++) {
        sumArray.push(i)
      }
      let sum = 0;
      sumArray.forEach(element => {
        sum += element;
      });
      return sum;
    }
    else if (a > b) {
      for (i = b; i <= a; i++) {
        sumArray.push(i)
      }
      let sum = 0;
      sumArray.forEach(element => {
        sum += element;
      });
      return sum;
    } 
  }
  else
    return "ERROR"
};

// BETTER SOLUTION
// Did not need array
// Use temp variable to swap a and b
// Use || instead of  &&

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};









// Do not edit below this line
module.exports = sumAll;
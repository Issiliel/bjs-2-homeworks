"use strict"

function solveEquation(a, b, c) {
  let arr =[];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr[0] = -b / (2 * a);
  } else  {
    arr[0] = (-b + Math.sqrt(D) ) / (2*a);
    arr[1] = (-b - Math.sqrt(D) ) / (2*a);
  }
 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

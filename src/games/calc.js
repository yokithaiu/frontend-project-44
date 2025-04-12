import { generalLogic } from '../index.js';
import { arrOfReadyData } from './even.js';

export function getRandomNum() {
  const randomNum = Math.floor(Math.random() * (100 - 0 + 1) + 1);
  return randomNum;
}
export function rulesOfCalcGame() {
  return 'What is the result of the expression?';
}
export function dataOfCalcGame() {
  const readyData = [];
  const firstNumOfExpression = getRandomNum();
  const secondNumOfExpression = getRandomNum();
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  if (randomIndex === '*') {
    readyData.push(`${firstNumOfExpression} * ${secondNumOfExpression}`, (firstNumOfExpression * secondNumOfExpression).toString());
  } else if (randomIndex === '-') {
    readyData.push(`${firstNumOfExpression} - ${secondNumOfExpression}`, (firstNumOfExpression - secondNumOfExpression).toString());
  } else {
    readyData.push(`${firstNumOfExpression} + ${secondNumOfExpression}`, (firstNumOfExpression + secondNumOfExpression).toString());
  }
  return readyData;
}

export function brainCalc() {
  console.log(rulesOfCalcGame());
  return generalLogic(arrOfReadyData(dataOfCalcGame(), dataOfCalcGame(), dataOfCalcGame()));
}

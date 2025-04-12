import { generalLogic } from '../index.js';
import { arrOfReadyData } from './even.js';

export function getRandomNum(min, max) {
  const randomNum = min + Math.floor(Math.random() * (max - min) + 1);
  return randomNum;
}

export function rulesOfCalcGame() {
  return 'What is the result of the expression?';
}

export function calcGame() {
  const readyData = [];
  const firstNumOfExpression = getRandomNum(0, 100);
  const secondNumOfExpression = getRandomNum(0, 100);
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

export default function brainCalc() {
  return generalLogic(arrOfReadyData(calcGame(), calcGame(), calcGame()), rulesOfCalcGame());
}

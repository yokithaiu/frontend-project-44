import { generalLogic } from '../index.js';
import { arrOfReadyData, getRandomNum } from '../utilits.js';

export function calcGame() {
  const dataOfGame = [];
  const firstNumOfExpression = getRandomNum(0, 100);
  const secondNumOfExpression = getRandomNum(0, 100);
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  if (randomIndex === '*') {
    dataOfGame.push(`${firstNumOfExpression} * ${secondNumOfExpression}`, (firstNumOfExpression * secondNumOfExpression).toString());
  } else if (randomIndex === '-') {
    dataOfGame.push(`${firstNumOfExpression} - ${secondNumOfExpression}`, (firstNumOfExpression - secondNumOfExpression).toString());
  } else {
    dataOfGame.push(`${firstNumOfExpression} + ${secondNumOfExpression}`, (firstNumOfExpression + secondNumOfExpression).toString());
  }
  return dataOfGame;
}

const rulesOfCalcGame = 'What is the result of the expression?';
const readyDataOfCalcGame = arrOfReadyData(calcGame(), calcGame(), calcGame());

export default function brainCalc() {
  return generalLogic(readyDataOfCalcGame, rulesOfCalcGame);
}

import { generalLogic } from '../index.js';
import { arrOfReadyData } from './even.js';
import { getRandomNum } from './calc.js';

export function rulesOfGcdGame() {
  return 'Find the greatest common divisor of given numbers.';
}

export function getMinNum(a, b) {
  if (a <= b) {
    return a;
  }

  return b;
}
export function dataOfGcdGame() {
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);
  const minNum = getMinNum(firstNum, secondNum);
  let div = 0;
  for (let i = 0; i <= minNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      div = i;
    }
  }
  return [`${firstNum} ${secondNum}`, div.toString()];
}
export function gcdGame() {
  return (generalLogic(arrOfReadyData(dataOfGcdGame(), dataOfGcdGame(), dataOfGcdGame()), rulesOfGcdGame()));
}

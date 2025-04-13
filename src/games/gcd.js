import { generalLogic } from '../index.js';
import { arrOfReadyData, getRandomNum, getMinNum } from '../utilits.js';

export function gcdGame() {
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

const rulesOfGcdGame = 'Find the greatest common divisor of given numbers.';
const readyDataOfGcdGame = arrOfReadyData(gcdGame(), gcdGame(), gcdGame());

export default function brainGcd() {
  return (generalLogic(readyDataOfGcdGame, rulesOfGcdGame));
}

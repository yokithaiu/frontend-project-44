import { generalLogic } from '../index.js';
import { arrOfReadyData, getRandomNum } from '../utilits.js';

export function evenGame() {
  const randomNum = getRandomNum(0, 100);
  const readyData = [];
  if (randomNum % 2 === 0) {
    readyData.push(randomNum, 'yes');
  } else {
    readyData.push(randomNum, 'no');
  }
  return readyData.flat();
}

const rulesOfEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const readyDataOfEvenGame = arrOfReadyData(evenGame(), evenGame(), evenGame());

export default function brainEven() {
  return generalLogic(readyDataOfEvenGame, rulesOfEvenGame);
}

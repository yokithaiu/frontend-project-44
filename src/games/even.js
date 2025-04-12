import { generalLogic } from '../index.js';
import { getRandomNum } from './calc.js';

export function rulesOfEvenGame() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

export function even() {
  const randomNum = getRandomNum(0, 100);
  const readyData = [];
  if (randomNum % 2 === 0) {
    readyData.push(randomNum, 'yes');
  } else {
    readyData.push(randomNum, 'no');
  }
  return readyData.flat();
}

export function arrOfReadyData(firstData = even(), secondData = even(), thirdData = even()) {
  return [firstData, secondData, thirdData];
}

export default function brainEven() {
  return generalLogic(arrOfReadyData(), rulesOfEvenGame());
}

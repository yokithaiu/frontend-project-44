import { generalLogic } from '../index.js';
import { getRandomNum } from './calc.js';
export function rulesOfEvenGame() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}
export function getReadyDataOfEvenGame() {
  const randomNum = getRandomNum();
  const readyData = [];
  if (randomNum % 2 === 0) {
    readyData.push(randomNum, 'yes');
  } else {
    readyData.push(randomNum, 'no');
  }
  return readyData.flat();
}
export function arrOfReadyData() {
  const arrOfData = [];
  for (let i = 0; i < 3; i += 1) {
    arrOfData.push(getReadyDataOfEvenGame());
  }
  return arrOfData;
}

export function brainEven() {
  console.log(rulesOfEvenGame());
  return generalLogic(arrOfReadyData());
}

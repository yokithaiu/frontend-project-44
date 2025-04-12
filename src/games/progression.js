import { generalLogic } from '../index.js';
import { getRandomNum } from './calc.js';
import { arrOfReadyData } from './even.js';

export function rulesOfProgressionGame() {
  return 'What number is missing in the progression?';
}
export function readyDataOfProgressionGame() {
  const intervalOfProgression = getRandomNum(2, 10);
  let numOfProgression = intervalOfProgression;
  const lengthOfProgression = getRandomNum(5, 10);
  const indexOfHiddenElement = getRandomNum(0, (lengthOfProgression - 1));
  const arrOfProgression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    arrOfProgression.push(numOfProgression);
    numOfProgression += intervalOfProgression;
  }
  const hiddenElement = arrOfProgression[indexOfHiddenElement];
  arrOfProgression[indexOfHiddenElement] = '..';
  return [`${arrOfProgression.join(' ')}`, hiddenElement.toString()].flat();
}

export default function brainProgression() {
  return generalLogic(arrOfReadyData(readyDataOfProgressionGame(), readyDataOfProgressionGame(), readyDataOfProgressionGame()), rulesOfProgressionGame());
}

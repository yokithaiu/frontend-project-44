import { generalLogic } from '../index.js';
import { getRandomNum, arrOfReadyData } from '../utilits.js';

export function game() {
  const progressionInterval = getRandomNum(2, 10);
  let progressionNum = progressionInterval;
  const progressionLength = getRandomNum(5, 10);
  const indexOfHiddenElement = getRandomNum(0, (progressionLength - 1));
  const arrOfProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arrOfProgression.push(progressionNum);
    progressionNum += progressionInterval;
  }
  const hiddenElement = arrOfProgression[indexOfHiddenElement];
  arrOfProgression[indexOfHiddenElement] = '..';
  return [`${arrOfProgression.join(' ')}`, hiddenElement.toString()].flat();
}

const rulesOfProgressionGame = 'What number is missing in the progression?';
const readyDataOfProgressionGame = arrOfReadyData(game(), game(), game());

export default function brainProgression() {
  return generalLogic(readyDataOfProgressionGame, rulesOfProgressionGame);
}

import { generalLogic } from '../index.js';
import { getRandomNum } from './calc.js';
import { arrOfReadyData } from './even.js';

export function rulesOfPrimeGame() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

export function isPrime(num) {
  let count = 1;
  for (let i = 0; i < num; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }

  if (count === 2) {
    return true;
  }

  return false;
}

export function readyDataOfPrimeGame() {
  const randomNum = getRandomNum(0, 100);
  if (isPrime(randomNum)) {
    return [randomNum, 'yes'];
  }

  return [randomNum, 'no'];
}

export default function braimPrime() {
  return generalLogic(arrOfReadyData(readyDataOfPrimeGame(), readyDataOfPrimeGame(), readyDataOfPrimeGame()), rulesOfPrimeGame());
}

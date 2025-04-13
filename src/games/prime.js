import { generalLogic } from '../index.js';
import { getRandomNum, arrOfReadyData, isPrime } from '../utilits.js';

export function primeGame() {
  const randomNum = getRandomNum(0, 100);
  if (isPrime(randomNum)) {
    return [randomNum, 'yes'];
  }

  return [randomNum, 'no'];
}

const rulesOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const readyDataOfPrimeGame = arrOfReadyData(primeGame(), primeGame(), primeGame());

export default function brainPrime() {
  return generalLogic(readyDataOfPrimeGame, rulesOfPrimeGame);
}

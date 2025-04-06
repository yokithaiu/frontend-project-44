#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const userName = readlineSync.question('May I have your name? ');
console.log('Welcome to the Brain Games!');
console.log(`Hello ${userName}`);
console.log('Answer "yes" if the number is even, othewise answer "no"');
for (let questionNumber = 0; questionNumber < 3; questionNumber += 1) {
  const num = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(`Question: ${num}`);
  const getAnswer = readlineSync.question('Your answer: ');
  if ((getAnswer === 'yes' && isEven(num)) || (getAnswer === 'no' && !isEven(num))) {
    console.log('Correct!');
  } else if (getAnswer === 'yes' && !isEven(num)) {
    console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${userName}`);
    break;
  } else if (getAnswer === 'no' && isEven(num)) {
    console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
    console.log(`Let's try again, ${userName}`);
    break;
  } else if (isEven(num) && (getAnswer !== 'yes' || getAnswer !== 'no')) {
    console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
    console.log(`Let's try again ${userName}`);
    break;
  } else if (!isEven(num) && (getAnswer !== 'yes' || getAnswer !== 'no')) {
    console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again ${userName}`);
    break;
  }
  if (questionNumber === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}

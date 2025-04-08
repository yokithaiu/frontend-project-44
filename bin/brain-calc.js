#!/usr/bin/env node
import readlineSync, { question } from 'readline-sync';

const operators = ['+', '-', '*'];
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
for (let questionNumber = 0; questionNumber < 3; questionNumber += 1) {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const firstNumOfExpression = Math.floor(Math.random() * (100 - 1) + 1);
  const secondNumOfExpression = Math.floor(Math.random() * (100 - 1) + 1);
  console.log('What is the result of this expresion?');
  console.log(`Question: ${firstNumOfExpression} ${operators[randomIndex]} ${secondNumOfExpression}`);
  const getAnswer = readlineSync.question('Your answer: ');
  if (operators[randomIndex] === '*') {
    if (Number(getAnswer) === firstNumOfExpression * secondNumOfExpression) {
      console.log('Correct!');
    } else {
      console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${firstNumOfExpression * secondNumOfExpression}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } else if (operators[randomIndex] === '+') {
    if (Number(getAnswer) === firstNumOfExpression + secondNumOfExpression) {
      console.log('Correct!');
    } else {
      console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${firstNumOfExpression + secondNumOfExpression}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } else if (operators[randomIndex] === '-') {
    if (Number(getAnswer) === firstNumOfExpression - secondNumOfExpression) {
      console.log('Correct!');
    } else {
      console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${firstNumOfExpression - secondNumOfExpression}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (questionNumber === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}

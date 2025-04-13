import readlineSync from 'readline-sync';

export function getName() {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

export function generalLogic(dataOfGame, gameRules) {
  let roundCount = 0;
  const rules = gameRules;
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  while (roundCount < 3) {
    const readyData = dataOfGame[roundCount];
    const question = readyData[0];
    const correctAnswer = readyData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
    roundCount += 1;
  }

  if (roundCount === 3) {
    return `Congratulations, ${userName}!`;
  }

  return `Let's try again, ${userName}!`;
}

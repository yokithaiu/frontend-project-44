import readlineSync from 'readline-sync';

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export function generalLogic(dataOfGame, rulesOfGame) {
  let countOfRound = 0;
  const rules = rulesOfGame;
  console.log('Welcome to the Brain Games!')
  const userName = getName();
  console.log(`Hello, ${userName}`);
  console.log(rules);
  while (countOfRound < 3) {
    const readyData = dataOfGame[countOfRound];
    const question = readyData[0];
    const correctAnswer = readyData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
    countOfRound += 1;
  }
  if (countOfRound === 3) {
    return `Congratulations ${userName}!`;
  }

  return `Let's try again ${userName}!`;
}

import readlineSync from 'readline-sync/lib/readline-sync.js';

export default function greeting() {
  const getName = readlineSync.question('May I have your name? ');
  return `Hello, ${getName}!`;
}

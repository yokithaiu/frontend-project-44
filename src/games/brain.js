import { getName } from '../index.js';

export default function brainMain() {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  return `Hello, ${userName}!`;
}

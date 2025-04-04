import readlineSync from "/root/frontend-project-44/node_modules/readline-sync/lib/readline-sync.js";
export default function greeting() {
    const getName = readlineSync.question('May I have your name? ')
    return 'Hello, '+ getName + '!';
};
export function getRandomNum(min, max) {
  const randomNum = min + Math.floor(Math.random() * (max - min) + 1);
  return randomNum;
}

export function arrOfReadyData(...data) {
  return data;
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

export function getMinNum(a, b) {
  if (a <= b) {
    return a;
  }

  return b;
}

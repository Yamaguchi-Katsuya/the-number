// 素数判定
export const isPrime = (number: number): boolean => {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// 素因数分解
export const primeFactorization = (number: number): string => {
  const factors = [];
  for (var i = 2; i <= number; i++) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }

  return factors.join(' * ');
};

// 完全数判定
export const isPerfectNumber = (number: number): boolean => {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
};

// 最大公約数
export const gcd = (number1: number, number2: number): number => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

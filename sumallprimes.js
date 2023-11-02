//--------------------------------------------
function sumPrimes(num) {
  let counter = 0;
  let number = 0;
  let result = 0;
  function isPrime(num) {
    if (num == 2 || num == 3)
      return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0)
      return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i == 0 || num % (i + 2) == 0)
        return false;
    }
    return true;
  }
  while (counter <= num) {
    if (isPrime(number)) {
      result += number;

    }
    number++;
    counter++;
  }
  return result;
}

console.log(sumPrimes(10));
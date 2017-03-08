function getPrimeFactors(number) {

  if (typeof number !== 'number') {
    throw new Error('Expects a number type');
  }

  let primes = [];
  if (number > 1) {
    for (let candidate = 2; number > 1; candidate++) {
      for (; number % candidate === 0; number /= candidate) {
        primes.push(candidate);
      }
    }
  }

  return primes;
};

module.exports = getPrimeFactors;

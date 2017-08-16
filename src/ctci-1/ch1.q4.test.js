import palindromePermutation from './ch1-q4';

describe('palindromePermutation', () => {
  test('O(N) time O(N) space test', () => {
    expect(palindromePermutation('bar')).toEqual(false);
    expect(palindromePermutation('12345')).toEqual(false);
    expect(palindromePermutation('')).toEqual(true);
    expect(palindromePermutation('racecar')).toEqual(true);
    expect(palindromePermutation('foo')).toEqual(true);
    expect(palindromePermutation('taco cat')).toEqual(true);
    expect(palindromePermutation('A Santa Lived As a Devil At NASA')).toEqual(true);
  });
});

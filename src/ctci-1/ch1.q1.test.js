import isUnique, { isUniqueConstantSpace } from './ch1-q1';

describe('isUnique', () => {
  test('O(n) time O(n) space test', () => {
    expect(isUnique('foo')).toEqual(false);
    expect(isUnique('bar')).toEqual(true);
    expect(isUnique('')).toEqual(true);
  });

  test('O(nlgn) time O(1) space test', () => {
    expect(isUniqueConstantSpace('foo')).toEqual(false);
    expect(isUniqueConstantSpace('bar')).toEqual(true);
    expect(isUniqueConstantSpace('')).toEqual(true);
  });
});

import checkPermutationFast, { checkPermutationSlow } from './ch1-q2';

describe('checkPermutation', () => {
  test('O(N) time O(N) space test', () => {
    expect(checkPermutationFast('foo', 'oof')).toEqual(true);
    expect(checkPermutationFast('bar', 'rab')).toEqual(true);
    expect(checkPermutationFast('12345', '12345')).toEqual(true);
    expect(checkPermutationFast('foooo', 'rab')).toEqual(false);
    expect(checkPermutationSlow('foo', 'bar')).toEqual(false);
    expect(checkPermutationFast('', '')).toEqual(true);
    expect(checkPermutationFast('nautilus', 'king kong')).toEqual(false);
  });

  test('O(NlgN) time O(N) space test', () => {
    expect(checkPermutationSlow('foo', 'oof')).toEqual(true);
    expect(checkPermutationSlow('bar', 'rab')).toEqual(true);
    expect(checkPermutationSlow('12345', '12345')).toEqual(true);
    expect(checkPermutationSlow('foooo', 'rab')).toEqual(false);
    expect(checkPermutationSlow('foo', 'bar')).toEqual(false);
    expect(checkPermutationSlow('', '')).toEqual(true);
    expect(checkPermutationSlow('nautilus', 'king kong')).toEqual(false);
  });
});

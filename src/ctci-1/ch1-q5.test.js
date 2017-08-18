import oneAway from './ch1-q5';

describe('palindromePermutation', () => {
  test('O(N) time O(N) space test', () => {
    expect(oneAway('David', 'Davis')).toEqual(true);
    expect(oneAway('pale', 'ple')).toEqual(true);
    expect(oneAway('pales', 'pale')).toEqual(true);
    expect(oneAway('pale', 'bale')).toEqual(true);
    expect(oneAway('', '')).toEqual(true);
    expect(oneAway('', 's')).toEqual(true);
    expect(oneAway('pale', 'false')).toEqual(false);
    expect(oneAway('Foo', 'Bar')).toEqual(false);
  });
});

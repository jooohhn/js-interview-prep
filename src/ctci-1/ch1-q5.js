// @flow

/**
 *
 * O(N) time
 * O(N) space
 * @param {*} str1 first string to check
 * @param {*} str2 second string to check
 * @return true if one string is one edit away from another
 */
export default function oneAway(str1: string, str2: string) {
  // if (str1 === str2) return true
  // line up each word in an array
  // if arr1[i] !== arr2[i] set flag === true
  // if arr1[i] !== arr2[i] again, return false
  // two cases: 1) there is a replacement 2) there is an insertion/deletion
  if (str1.length === str2.length) {
    return checkReplacement(str1, str2);
  }
  return checkInsertionDeletion(str1, str2);
}

/**
 * Checks each character of the strings and returns true if there is only a
 * one character difference between the two strings
 * @param {*} str1 first string to check
 * @param {*} str2 second string to check
 * @return true if one string is one character away from each other
 */
function checkReplacement(str1: string, str2: string): boolean {
  let oneFlag = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (oneFlag) return false;
      if (!oneFlag) oneFlag = true;
    }
  }
  return true;
}

/**
 *Checks each character of the strings. Increments index1 or index2 an extra time
 * depending on if str1 or str2 is longer and sets flag to true.
 * @param {*} str1 first string to check
 * @param {*} str2 second string to check
 * @return true if there's only 1 insertion/deletion difference
 */
function checkInsertionDeletion(str1: string, str2: string): boolean {
  let index1 = 0;
  let index2 = 0;
  let oneFlag = false;
  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (oneFlag) return false;
      oneFlag = true;
      if (str1.length > str2.length) index1++;
      else index2++;
    }
    index1++;
    index2++;
  }
  return true;
}

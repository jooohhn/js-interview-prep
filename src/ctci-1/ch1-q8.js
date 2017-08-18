// // @flow

// /**
//  * O(N) time
//  * O(N) space
//  * @param {*} str the string to check
//  * @return true if string has unique characters, false if not
//  */
// export default function zeroMatrix(matrix: Array<Array<any>>) {
//   const characters = new Map();
//   for (let i = 0; i < str.length; i++) {
//     if (characters.get(str[i])) {
//       return false;
//     }
//     characters.set(str[i], true);
//   }
//   return true;
// }

// export function isUniqueConstantSpace(str: string) {
//   const arr = str.split('').sort();
//   for (let x = 0; x < arr.length - 1; x++) {
//     for (let y = x + 1; y < arr.length; y++) {
//       if (arr[x] === arr[y]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

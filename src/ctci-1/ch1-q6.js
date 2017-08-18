// // @flow

// /**
//  * O(N) time
//  * O(N) space
//  * @param {*} str the string to check
//  * @return true if string has unique characters, false if not
//  */
// export default function stringCompression(str: string): string {
//   // BCR: O(n) since we must touch every character
//   // let compressedStr = ''
//   // let currentChar = str[0]
//   // while str[i] === current char
//   //
//   const compressedStr = '';
//   const currentChar = str[0];
//   let currentLength = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (currentChar === str[i]) currentLength++;
//     else{
//       compressedStr += compressedStr +
//     }
//   }
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

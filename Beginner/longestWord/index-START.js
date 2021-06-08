/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function longestWord(text) {
  //   let wordArray = text.split(" ");
  //   let maxLength = 0;
  //   let result = "";
  //   for (let i = 0; i < wordArray.length; i++) {
  //     if (wordArray[i].length > maxLength) {
  //       maxLength = wordArray[i].length;
  //       result = wordArray[i];
  //     }
  //   }
  //   return result;
  let result = text.split(" ").reduce((maxWordLength, cur) => {
    if (cur.length > maxWordLength.length) {
      return cur;
    } else {
      return maxWordLength;
    }
  }, "");
  return result;
}

console.log(longestWord("Top Shelf Web Development Training on Scotch"));

module.exports = longestWord;

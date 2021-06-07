/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
  let countedVowels = text.match(/[aeiou]/gi);
  if (countedVowels) {
    return countedVowels.length;
  } else {
    return 0;
  }
}

module.exports = vowelsCounter;

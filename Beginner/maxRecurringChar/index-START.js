/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let occurences = {};
  let maxCharVal = 0;
  let charArray = [];
  let valueArray = [];

  for (let char of text) {
    if (occurences.hasOwnProperty(char)) {
      occurences[char]++;
    } else {
      occurences[char] = 1;
    }
  }
  charArray = Object.keys(occurences);
  valueArray = Object.values(occurences);
  maxCharVal = Math.max(...valueArray);

  return charArray[valueArray.indexOf(maxCharVal)];
}

module.exports = maxRecurringChar;

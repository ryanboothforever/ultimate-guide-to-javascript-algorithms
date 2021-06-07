/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
  let textlen = text.length;
  for (let i = 0; i < textlen / 2; i++) {
    if (text[i] !== text[textlen - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromeChecker("sssssa"));

module.exports = palindromeChecker;

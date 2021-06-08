/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(stringA, stringB) {
  function createMap(text) {
    let charMap = {};

    for (let char of text.toLowerCase()) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  }
  if (stringA.length === stringB.length) {
    let stringAMap = createMap(stringA);
    let stringBMap = createMap(stringB);

    for (let char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;

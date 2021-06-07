/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capsArray.join(" ");
}

console.log(capSentence("these are the words"));

module.exports = capSentence;

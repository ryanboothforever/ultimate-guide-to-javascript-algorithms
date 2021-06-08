function searchReplace(str, word, replacer) {
  replacer = replacer.toLowerCase();
  return str.toLowerCase().replace(word, replacer);
}

console.log(
  searchReplace("He is Sleeping on the couch", "sleeping", "SITTING")
);

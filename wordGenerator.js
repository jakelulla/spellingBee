const fs = require('fs');

const fileContent = fs.readFileSync('english3.txt', 'utf-8');

const words = fileContent.split('\n').map(word => word.trim());

module.exports = words;

const center = 'u';
const support = ['a', 'n', 'r', 't', 'l', 'y'];

const filteredWords = words.filter(word => {
  const wordLength = word.length > 3;
  const centerChar = word.includes(center);
  const validCharacters = [...word].every(char => (support.includes(char) || char == center));
  return wordLength && validCharacters && centerChar;
});

fs.writeFileSync('filteredWords.txt', filteredWords.join('\n'), 'utf-8');

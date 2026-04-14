import _ from 'lodash';


// BEGIN
export default function countWords(sentence) {
  if (sentence === '') {
    return {};
  }
  const words = sentence.toLowerCase().split(/\s+/);
  const result = {};
  for (const word of words) {
    if (word === '') continue;
    result[word] = (result[word] || 0) + 1;
  }
  return result;
}
// END


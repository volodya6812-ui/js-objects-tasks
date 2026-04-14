import _ from 'lodash';

// BEGIN
const capitalize = (str) => {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export default function normalize(lesson) {
  lesson.name = capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
}
// END

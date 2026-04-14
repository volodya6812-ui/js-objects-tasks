import _ from 'lodash';

// BEGIN
export default function fill(original, keys, data) {
  if (keys.length === 0) {
    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        original[key] = data[key];
      }
    }
  } else {
    for (const key of keys) {
      if (Object.hasOwn(data, key)) {
        original[key] = data[key];
      }
    }
  }
}

// END

// BEGIN
export default function cloneShallow(obj) {
  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = obj[key];
    }
  }
  return cloned;
}
// END

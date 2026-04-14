// BEGIN
export default function make(name, extra = {}) {
  return {
    name,
    state: 'moderating',
    createdAt: Date.now(),
    ...extra,
  };
}
// END

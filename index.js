module.exports = fromEntries

function fromEntries (iterable) {
  return [...iterable]
    .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {})
}

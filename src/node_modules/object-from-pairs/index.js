module.exports = objectFromPairs

function objectFromPairs (pairs) {
  const object = {}

  pairs.forEach((pair) => {
    object[pair[0]] = pair[1]
  })

  return object
}

function getType (obj) {
  // let typeStr = Object.prototype.toString.call(obj)
  // console.log('typeStr = ', typeStr)
  // let matchStr = typeStr.match(/.* (.*)\]/)
  // console.log('match = ', matchStr)
  // return matchStr[1]
  return Object.prototype.toString.call(obj).match(/.* (.*)\]/)[1]
}

console.log(getType(10)) // Number
console.log(getType(new Function('return 10'))) // Function
console.log(getType(NaN)) // Number
console.log(getType({}))

function isArray (obj) {
  return Array.isArray(obj)
}

function isObject (obj) {
  return getType(obj) === 'Object'
}

function isEmpty (obj) {
  if (obj === null || obj === '') return true
  if (isArray(obj) && obj.length === 0) return true
  if (getType(obj) === 'Object' && Object.keys(obj).length === 0) return true
  return false
}

console.log(isEmpty({}))
console.log(isEmpty(''))
console.log(isEmpty(null))
console.log(isEmpty([]))

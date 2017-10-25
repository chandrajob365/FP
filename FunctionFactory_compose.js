// ES 5
function get1 (prop) {
  return function (obj) {
    return obj[prop]
  }
}
// ES 6
const get = prop => obj => obj[prop]

let student = {
  name: 'Manish'
}

let getName = get('name')
console.log(getName(student))
console.log(get(1)([12, 13, 14]))
// ------- x --------
// map
// ES 5
function map1 (fn) {
  return function (arr) {
    // Array.prototype.map.call(arr) is so that
    // we can use our map for array like objects (aruments and DOMNodeList)
    return Array.prototype.map.call(arr, fn)
  }
}
console.log(map1(function (x) { return x * x })([1, 2, 3]))

// ES 6
const map = fn => arr => Array.prototype.map.call(arr, fn)

console.log(map((x) => x * x)([2, 4, 6]))
// Get all emails from list in Array
var people = [
 {name: 'John', email: 'john@example.com'},
 {name: 'Bill', email: 'bill@example.com'} ]

console.log(map(get('email'))(people))
// -----------X---------------

// Pluck
// ES 5
function pluck1 (prop) {
  return map(get(prop))
}

// ES 6
const pluck = prop => map(get(prop))

console.log(pluck('email')(people))

// Sum prices of all expenses
const expenses = [
  {
    name: 'Rent',
    price: 500,
    type: 'Household'
  }, {
    name: 'Netflix',
    price: 5.99,
    type: 'Services'
  }, {
    name: 'Gym',
    price: 15,
    type: 'Health'
  }, {
    name: 'Bills',
    price: 100,
    type: 'Household'
  }
]
console.log(pluck('price')(expenses).reduce((acc, price) => acc + price))
// ----------------- X ----------------------
// take
// Es 5
function take1 (n) {
  return function (arr) {
    return arr.slice(0, n)
  }
}

// ES 6
const take = n => arr => arr.slice(0, n)
console.log(take(3)([2, 4, 6, 8, 9, 10]))

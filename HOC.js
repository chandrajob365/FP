var name = 'Outside'
var showName = (function () {
  var name = 'FP JS'
  return function () {
    return name
  }
}())

console.log(showName())

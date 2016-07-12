'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 };
var x = _x$y$a$b.x;
var y = _x$y$a$b.y;

var z = _objectWithoutProperties(_x$y$a$b, ['x', 'y']);

var age = 100;
var people = ['Wes', 'Kait'];

var fullNames = people.map(function (name) {
  return name + ' Bos';
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = people[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var person = _step.value;

    console.log(person);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

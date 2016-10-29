//region Imports
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

//endregion

var colorNames = ['red', 'green',
//'yellow',
'blue', 'magenta', 'cyan'];

//'bgRed',
//'bgGreen',
//'bgYellow',
//'bgBlue',
//'bgMagenta',
//'bgCyan',
//'bgWhite',

var ColorCode = (function () {
  function ColorCode() {
    _classCallCheck(this, ColorCode);

    this.colorIndex = 0;
    this.colorMap = {};
  }

  _createClass(ColorCode, [{
    key: 'get',
    value: function get(name) {
      // Assign color.
      var color = this.colorMap[name];
      if (!color) {
        color = this.colorMap[name] = colorNames[this.colorIndex++ % colorNames.length];
      }
      return _chalk2['default'][color](name);
    }
  }, {
    key: 'getColor',
    value: function getColor(name) {
      var color = this.colorMap[name];
      if (!color) {
        this.get(name);
      }
      return this.colorMap[name];
    }
  }]);

  return ColorCode;
})();

var singleton = new ColorCode();

var main = function main() {
  var instance = new ColorCode();
  return function (name) {
    return instance.get(name);
  };
};

main.ColorCode = ColorCode;

module.exports = main;
//# sourceMappingURL=index.js.map

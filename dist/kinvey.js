'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _kinveyPhonegapSdk = require('kinvey-phonegap-sdk');

var _kinveyPhonegapSdk2 = _interopRequireDefault(_kinveyPhonegapSdk);

var _device = require('./device');

var _device2 = _interopRequireDefault(_device);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Kinvey = function (_PhoneGapKinvey) {
  _inherits(Kinvey, _PhoneGapKinvey);

  function Kinvey() {
    _classCallCheck(this, Kinvey);

    return _possibleConstructorReturn(this, (Kinvey.__proto__ || Object.getPrototypeOf(Kinvey)).apply(this, arguments));
  }

  _createClass(Kinvey, null, [{
    key: 'init',
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      options = (0, _assign2.default)({
        deviceClass: _device2.default
      }, options);

      // Initialize Kinvey
      return _get(Kinvey.__proto__ || Object.getPrototypeOf(Kinvey), 'init', this).call(this, options);
    }
  }]);

  return Kinvey;
}(_kinveyPhonegapSdk2.default);

exports.default = Kinvey;
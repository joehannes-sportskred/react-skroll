'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  position: _propTypes2.default.number,
  positionRatio: _propTypes2.default.number,
  start: _propTypes2.default.number,
  end: _propTypes2.default.number,
  viewHeight: _propTypes2.default.number,
  scrollHeight: _propTypes2.default.number,
  ready: _propTypes2.default.bool,
  onStart: _propTypes2.default.bool,
  onMiddle: _propTypes2.default.bool,
  onEnd: _propTypes2.default.bool,
  children: _propTypes2.default.arrayOf(_propTypes2.default.object),

  autoFrame: _propTypes2.default.bool,
  autoScroll: _propTypes2.default.bool,

  originalPosition: _propTypes2.default.number,
  changedPosition: _propTypes2.default.number,
  timeStamp: _propTypes2.default.number,
  scrolling: _propTypes2.default.bool,
  wheeling: _propTypes2.default.bool,
  touching: _propTypes2.default.bool,
  moving: _propTypes2.default.bool,
  resting: _propTypes2.default.bool,
  // touches: PropTypes.object,

  node: _propTypes2.default.object,

  setNode: _propTypes2.default.func,
  unsetNode: _propTypes2.default.func,
  handleScroll: _propTypes2.default.func,
  handleWheel: _propTypes2.default.func,
  handleTouchStart: _propTypes2.default.func,
  handleTouchMove: _propTypes2.default.func,
  handleTouchEnd: _propTypes2.default.func,
  scrollTo: _propTypes2.default.func,
  scrollToPosition: _propTypes2.default.func,
  scrollToByIndex: _propTypes2.default.func,
  scrollToTop: _propTypes2.default.func,
  scrollToBottom: _propTypes2.default.func,
  scrollToName: _propTypes2.default.func,
  scrollToElement: _propTypes2.default.func,
  setStateMove: _propTypes2.default.func,
  setStateRest: _propTypes2.default.func,
  setStateStart: _propTypes2.default.func,
  setStateEnd: _propTypes2.default.func
});
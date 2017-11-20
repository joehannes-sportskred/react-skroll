'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/joehannes/Git/Sportskred/react-skroll/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/joehannes/Git/Sportskred/react-skroll/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/joehannes/Git/Sportskred/react-skroll/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMotion = require('react-motion');

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utilities = require('./utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Scroller: {
    displayName: 'Scroller'
  }
};

var _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/Scroller.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/Scroller.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformHmrLibIndexJs2(_UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}
// import { throttle } from 'throttle-debounce'


var Scroller = _wrapComponent('Scroller')((_temp = _class = function (_Component) {
  _inherits(Scroller, _Component);

  function Scroller() {
    _classCallCheck(this, Scroller);

    return _possibleConstructorReturn(this, (Scroller.__proto__ || Object.getPrototypeOf(Scroller)).apply(this, arguments));
  }

  _createClass(Scroller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var node = _reactDom2.default.findDOMNode(this);

      // sets node in ScrollProdiver
      this.context.scroll.setNode(node);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.scroll.unsetNode();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(e) {
      if (this.props.handleScroll) this.props.handleScroll(e);
      this.context.scroll.handleScroll(e);
    }
  }, {
    key: 'handleWheel',
    value: function handleWheel(e) {
      if (this.props.handleWheel) this.props.handleWheel(e);
      this.context.scroll.handleWheel(e);
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      if (this.props.handleTouchStart) this.props.handleTouchStart(e);
      this.context.scroll.handleTouchStart(e);
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      if (this.props.handleTouchMove) this.props.handleTouchMove(e);
      this.context.scroll.handleTouchMove(e);
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(e) {
      if (this.props.handleTouchEnd) this.props.handleTouchEnd(e);
      this.context.scroll.handleTouchEnd(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _context$scroll = this.context.scroll,
          node = _context$scroll.node,
          position = _context$scroll.position,
          changedPosition = _context$scroll.changedPosition,
          touching = _context$scroll.touching,
          autoScroll = _context$scroll.autoScroll;


      var style = _extends({
        height: '100%',
        width: '100%',
        overflowScrolling: 'touch',
        WebkitOverflowScrolling: 'touch',
        // TODO: investigar glich on touchScroll with overFlow
        // overflowY: !autoScroll && !touching ? 'auto' : 'hidden',
        overflowY: autoScroll || touching ? 'hidden' : 'auto'
      }, this.props.style);

      return _react3.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            positionSpring: changedPosition !== null ? (0, _reactMotion.spring)(changedPosition) : position
          }
        },
        function (_ref) {
          var positionSpring = _ref.positionSpring;

          if (node && changedPosition !== null) {
            node.scrollTop = Math.round(positionSpring);
          }

          return _react3.default.createElement('div', _extends({}, _this2.props, {
            style: style,
            onScroll: _this2.handleScroll.bind(_this2),
            onWheel: _this2.handleWheel.bind(_this2),
            onTouchStart: _this2.handleTouchStart.bind(_this2),
            onTouchMove: _this2.handleTouchMove.bind(_this2),
            onTouchEnd: _this2.handleTouchEnd.bind(_this2)
          }));
        }
      );
    }
  }]);

  return Scroller;
}(_react2.Component), _class.contextTypes = {
  scroll: _utilities.contextProviderShape
}, _class.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired
}, _temp));

exports.default = Scroller;
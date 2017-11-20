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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = require('react-motion');

var _throttleDebounce = require('throttle-debounce');

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utilities = require('./utilities');

var _contextProviderShape = require('./contextProviderShape');

var _contextProviderShape2 = _interopRequireDefault(_contextProviderShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ScrollProvider: {
    displayName: 'ScrollProvider'
  }
};

var _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/ScrollProvider.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/ScrollProvider.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformHmrLibIndexJs2(_UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

/** Notes
## References:
- https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.2cnfo15to
- https://github.com/souporserious/react-measure/blob/master/src/Measure.jsx
- https://github.com/ReactTraining/react-router/blob/master/modules/Link.js
- https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html#context
- https://css-tricks.com/snippets/jquery/smooth-scrolling/
- https://github.com/callmecavs/jump.js
- https://github.com/jlmakes/scrollreveal
- https://www.youtube.com/watch?v=rNsC1VI9388

## TODO:
findChildByposition()

child methods
- onMove()
- onRest()

**/

var ScrollProvider = _wrapComponent('ScrollProvider')((_temp = _class = function (_Component) {
  _inherits(ScrollProvider, _Component);

  function ScrollProvider(props) {
    _classCallCheck(this, ScrollProvider);

    var _this = _possibleConstructorReturn(this, (ScrollProvider.__proto__ || Object.getPrototypeOf(ScrollProvider)).call(this, props));

    _this.state = {
      position: 0,
      positionRatio: 0,
      start: 0,
      end: 0,
      viewHeight: 0,
      scrollHeight: 0,
      ready: false,
      onStart: true,
      onMiddle: false,
      onEnd: false,
      children: [],
      autoFrame: props.autoFrame,
      autoScroll: props.autoScroll,
      originalPosition: null,
      changedPosition: null,
      timeStamp: null,
      scrolling: false,
      wheeling: false,
      touching: false,
      moving: false,
      resting: true,
      touches: []
    };

    _this.node = null;

    // debounce is used to mimiques start, move and end events that don't have this functions
    _this.handleScrollStart = (0, _throttleDebounce.debounce)(500, true, _this.handleScrollStart);
    _this.handleResizeMove = (0, _throttleDebounce.throttle)(50, _this.handleResizeMove);
    _this.handleScrollEnd = (0, _throttleDebounce.debounce)(500, _this.handleScrollEnd);
    _this.handleWheelStart = (0, _throttleDebounce.debounce)(250, true, _this.handleWheelStart);
    _this.handleWheelEnd = (0, _throttleDebounce.debounce)(250, _this.handleWheelEnd);
    _this.handleResizeStart = (0, _throttleDebounce.debounce)(250, true, _this.handleResizeStart);
    _this.handleResizeEnd = (0, _throttleDebounce.debounce)(250, _this.handleResizeEnd);
    return _this;
  }

  _createClass(ScrollProvider, [{
    key: 'setNode',
    value: function setNode(node) {
      var _this2 = this;

      this.node = node;

      // add component to resize observer to detect changes on resize
      this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries, observer) {
        if (_this2.state.ready) {
          _this2.handleResize();
        } else {
          _this2.setStateScroll({
            ready: true
          });
        }
      });

      this.resizeObserver.observe(this.node);
    }
  }, {
    key: 'unsetNode',
    value: function unsetNode() {
      this.node = null;
      this.resizeObserver.disconnect(this.context.scroll.node);

      this.setState({
        ready: true
      });
    }
  }, {
    key: 'setStateScroll',
    value: function setStateScroll(additionalStates) {
      this.setState(_extends({}, (0, _utilities.nodeToScrollState)(this.node), (0, _utilities.nodeChildrenToScrollState)(this.node), additionalStates));
    }
  }, {
    key: 'setStateStart',
    value: function setStateStart(additionalStates) {
      this.setState(_extends({
        originalPosition: this.state.position,
        timeStamp: Date.now()
      }, additionalStates));
    }
  }, {
    key: 'setStateMove',
    value: function setStateMove(additionalStates) {
      this.setState(_extends({
        moving: true,
        resting: false
      }, additionalStates));
    }
  }, {
    key: 'setStateRest',
    value: function setStateRest(additionalStates) {
      this.setState(_extends({
        moving: false,
        resting: true
      }, additionalStates));
    }
  }, {
    key: 'setStateEnd',
    value: function setStateEnd(additionalStates) {
      this.setState(_extends({
        originalPosition: null,
        changedPosition: null,
        timeStamp: null
      }, additionalStates));
    }
  }, {
    key: 'setStateIfElseMove',
    value: function setStateIfElseMove(additionalStates) {
      var notMoved = this.state.originalPosition === this.state.position;

      if (notMoved) {
        // this.setStateRest(additionalStates)
      } else {
          // this.setState(additionalStates)
        }
    }
  }, {
    key: 'findChildByName',
    value: function findChildByName(name) {
      // TODO: log error if not found
      return this.state.children.find(function (child) {
        return child.name === name;
      });
    }
  }, {
    key: 'findChildOnView',
    value: function findChildOnView() {
      return this.state.children.find(function (child) {
        return child.onView;
      });
    }
  }, {
    key: 'findChildIndexOnView',
    value: function findChildIndexOnView() {
      return this.state.children.findIndex(function (child) {
        return child.onView;
      });
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(target, options) {
      switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
        case "number":
          return this.scrollToPosition(target, options);
        case "string":
          return this.scrollToName(target, options);
        case "object":
          return this.scrollToElement(target, options);
      }
    }
  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition(position) {
      this.setState({ changedPosition: position });
    }
  }, {
    key: 'scrollToByIndex',
    value: function scrollToByIndex(index) {
      var position = this.state.children[index].start;

      this.scrollTo(position);
    }
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      var top = this.state.start;

      this.scrollToPosition(top);
    }
  }, {
    key: 'scrollToBottom',
    value: function scrollToBottom() {
      var bottom = this.state.end;

      this.scrollToPosition(bottom);
    }
  }, {
    key: 'previousOfIndex',
    value: function previousOfIndex() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.findChildIndexOnView();
      var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.children;

      return arr[i > 0 ? i - 1 : i];
    }
  }, {
    key: 'nextOfIndex',
    value: function nextOfIndex() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.findChildIndexOnView();
      var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.children;

      return arr[i < arr.length - 1 ? i + 1 : i];
    }
  }, {
    key: 'scrollUpwards',
    value: function scrollUpwards() {
      var upwardsPosition = this.previousOfIndex().start;

      this.scrollTo(upwardsPosition);
    }
  }, {
    key: 'scrollDownwards',
    value: function scrollDownwards() {
      var downwardsPosition = this.nextOfIndex().start;

      this.scrollTo(downwardsPosition);
    }
  }, {
    key: 'scrollToName',
    value: function scrollToName(name) {
      // TODO: handle fail if it does not exist
      var child = this.findChildByName(name);

      this.scrollToPosition(child.start);
    }
  }, {
    key: 'scrollToElement',
    value: function scrollToElement(element, options) {
      var start = element.scrollTop;

      this.scrollToPosition(start);
    }
  }, {
    key: 'scrollToActive',
    value: function scrollToActive() {
      var newPosition = this.findChildOnView().start;

      this.scrollToPosition(newPosition);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      this.handleScrollStart();
      this.handleScrollMove();
      this.handleScrollEnd();
    }
  }, {
    key: 'handleScrollStart',
    value: function handleScrollStart() {
      this.setStateMove();
    }
  }, {
    key: 'handleScrollMove',
    value: function handleScrollMove() {
      this.setStateScroll();
    }
  }, {
    key: 'handleScrollEnd',
    value: function handleScrollEnd() {
      this.setStateRest();
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {

      this.handleResizeStart();
      this.handleResizeMove();
      this.handleResizeEnd();
    }
  }, {
    key: 'handleResizeStart',
    value: function handleResizeStart() {
      console.log('handleResizeStart');
      this.setStateMove();
    }
  }, {
    key: 'handleResizeMove',
    value: function handleResizeMove() {
      console.log('handleResizeMove');
      this.handleScroll();
    }
  }, {
    key: 'handleResizeEnd',
    value: function handleResizeEnd() {
      console.log('handleResizeEnd');
      if (this.state.autoFrame) this.scrollToActive();
    }
  }, {
    key: 'handleWheel',
    value: function handleWheel(e) {
      if (this.state.autoScroll) e.preventDefault();
      this.handleWheelStart(e);
      this.handleWheelMove(e);
      this.handleWheelEnd(e);
    }
  }, {
    key: 'handleWheelStart',
    value: function handleWheelStart(e) {
      this.setStateStart({
        wheeling: true,
        changedPosition: !this.state.autoScroll ? null : this.state.changedPosition
      });

      if (this.state.autoScroll) {
        var movingUpwards = e.deltaY > 0;
        var movingDownwards = e.deltaY < 0;

        if (movingDownwards) this.scrollUpwards();
        if (movingUpwards) this.scrollDownwards();
      }
    }
  }, {
    key: 'handleWheelMove',
    value: function handleWheelMove(e) {
      // let prevDeltaY = this.state.deltaY || 0
      // let nextDeltaY = prevDeltaY + e.deltaY
      //
      // this.setState({
      //   deltaY: nextDeltaY
      // })
      //
      // const scrollPosition = this.state.originalPosition + nextDeltaY
      //
      // this.scrollTo(scrollPosition)
    }
  }, {
    key: 'handleWheelEnd',
    value: function handleWheelEnd(e) {
      this.setStateEnd({
        wheeling: false,
        deltaY: null
      });

      if (this.state.autoFrame) this.scrollToActive();
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      this.setStateStart({
        touching: true,
        touches: e.touches
      });
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      var distanceFromTouchStart = e.changedTouches[0].clientY - this.state.touches[0].clientY;
      var touchPosition = this.state.originalPosition - distanceFromTouchStart;

      this.scrollToPosition(touchPosition);
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(e) {
      var timeLapse = Date.now() - this.state.timeStamp;

      if (timeLapse < 200) {
        var movingUpwards = e.changedTouches[0].clientY < this.state.touches[0].clientY;
        var movingDownwards = e.changedTouches[0].clientY > this.state.touches[0].clientY;

        if (movingDownwards) this.scrollUpwards();
        if (movingUpwards) this.scrollDownwards();
      } else {
        this.scrollToActive();
      }

      this.setState({
        touching: false
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        scroll: _extends({}, this.state, {
          node: this.node,
          setNode: this.setNode.bind(this),
          unsetNode: this.unsetNode.bind(this),
          handleScroll: this.handleScroll.bind(this),
          handleWheel: this.handleWheel.bind(this),
          handleTouchStart: this.handleTouchStart.bind(this),
          handleTouchMove: this.handleTouchMove.bind(this),
          handleTouchEnd: this.handleTouchEnd.bind(this),
          scrollTo: this.scrollTo.bind(this),
          scrollToPosition: this.scrollToPosition.bind(this),
          scrollToByIndex: this.scrollToByIndex.bind(this),
          scrollToName: this.scrollToName.bind(this),
          scrollToTop: this.scrollToTop.bind(this),
          scrollToBottom: this.scrollToBottom.bind(this),
          scrollToElement: this.scrollToElement.bind(this),
          scrollToActive: this.scrollToActive.bind(this),
          findChildByName: this.findChildByName.bind(this),
          findChildOnView: this.findChildOnView.bind(this),
          findChildIndexOnView: this.findChildIndexOnView.bind(this)
        })
      };
    }
  }, {
    key: 'getContextToProps',
    value: function getContextToProps() {
      // filter context of helper states and methods
      var _getChildContext$scro = this.getChildContext().scroll,
          originalPosition = _getChildContext$scro.originalPosition,
          changedPosition = _getChildContext$scro.changedPosition,
          timeStamp = _getChildContext$scro.timeStamp,
          autoFrame = _getChildContext$scro.autoFrame,
          autoScroll = _getChildContext$scro.autoScroll,
          node = _getChildContext$scro.node,
          setNode = _getChildContext$scro.setNode,
          unsetNode = _getChildContext$scro.unsetNode,
          handleScroll = _getChildContext$scro.handleScroll,
          handleWheel = _getChildContext$scro.handleWheel,
          handleTouchStart = _getChildContext$scro.handleTouchStart,
          handleTouchMove = _getChildContext$scro.handleTouchMove,
          handleTouchEnd = _getChildContext$scro.handleTouchEnd,
          remainingContext = _objectWithoutProperties(_getChildContext$scro, ['originalPosition', 'changedPosition', 'timeStamp', 'autoFrame', 'autoScroll', 'node', 'setNode', 'unsetNode', 'handleScroll', 'handleWheel', 'handleTouchStart', 'handleTouchMove', 'handleTouchEnd']);

      return {
        scroll: remainingContext
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.cloneElement(this.props.children, this.getContextToProps());
    }
  }]);

  return ScrollProvider;
}(_react2.Component), _class.childContextTypes = {
  scroll: _contextProviderShape2.default
}, _class.defaultProps = {
  autoFrame: false,
  autoScroll: false
}, _temp));

exports.default = ScrollProvider;
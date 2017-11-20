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

var _utilities = require('./utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ScrollLink: {
    displayName: 'ScrollLink'
  }
};

var _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/ScrollLink.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/ScrollLink.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformHmrLibIndexJs2(_UsersJoehannesGitSportskredReactSkrollNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var ScrollLink = _wrapComponent('ScrollLink')((_temp = _class = function (_Component) {
  _inherits(ScrollLink, _Component);

  function ScrollLink() {
    _classCallCheck(this, ScrollLink);

    return _possibleConstructorReturn(this, (ScrollLink.__proto__ || Object.getPrototypeOf(ScrollLink)).apply(this, arguments));
  }

  _createClass(ScrollLink, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e);
      }

      e.preventDefault();
      e.stopPropagation();

      this.context.scroll.scrollTo(this.props.to);
    }
  }, {
    key: 'render',
    value: function render() {
      var style = _extends({
        cursor: 'pointer'
      }, this.props.style);
      // Fixes unknown props on <div> tag

      var _props = this.props,
          to = _props.to,
          props = _objectWithoutProperties(_props, ['to']);

      return _react3.default.createElement('a', _extends({}, props, { style: style, onClick: this.handleClick.bind(this) }));
    }
  }]);

  return ScrollLink;
}(_react2.Component), _class.contextTypes = {
  scroll: _utilities.contextProviderShape
}, _temp));

exports.default = ScrollLink;
webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(1302);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n    var variables = _ref.variables,\n        doc = _ref.doc;\n    return _react2.default.createElement(\n        _reactSplitPane2.default,\n        { split: 'horizontal', defaultSize: '30%' },\n        _react2.default.createElement(\n            'div',\n            { className: 'variableTable' },\n            _react2.default.createElement(\n                'div',\n                { className: 'title' },\n                'Current Variables'\n            ),\n            _react2.default.createElement(\n                'ul',\n                null,\n                _.map(_.sortBy(variables, function (v) {\n                    return v.order;\n                }), function (x) {\n                    return _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'three_quarter name' },\n                            x.name\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'quarter' },\n                            x.value\n                        )\n                    );\n                })\n            )\n        ),\n        _react2.default.createElement(\n            _reactSplitPane2.default,\n            { split: 'horizontal', defaultSize: '50%' },\n            _react2.default.createElement(_FunctionSearch2.default, null),\n            _react2.default.createElement(_FunctionInfo2.default, null)\n        )\n    );\n};\n\nRightPane.propTypes = {\n    variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables,\n        doc: state.docs\n    };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUdBLElBQUlDLFlBQVk7QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxRQUFjQyxHQUFkLFFBQWNBLEdBQWQ7QUFBQSxXQUNSO0FBQUE7QUFBQSxVQUFXLE9BQU0sWUFBakIsRUFBOEIsYUFBWSxLQUExQztBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFDSUgsa0JBQUVJLEdBQUYsQ0FBTUosRUFBRUssTUFBRixDQUFTSCxTQUFULEVBQW9CLFVBQUNJLENBQUQsRUFBTztBQUMvQiwyQkFBT0EsRUFBRUMsS0FBVDtBQUNILGlCQUZPLENBQU4sRUFHQSxVQUFDQyxDQUFELEVBQU87QUFDSCwyQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxvQkFBaEI7QUFBdUNBLDhCQUFFQztBQUF6Qyx5QkFBSjtBQUEwRDtBQUFBO0FBQUEsOEJBQU0sV0FBVSxTQUFoQjtBQUE0QkQsOEJBQUVFO0FBQTlCO0FBQTFELHFCQUFQO0FBQ0gsaUJBTEQ7QUFESjtBQUZKLFNBREY7QUFZRTtBQUFBO0FBQUEsY0FBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUM7QUFDRSx5RUFERjtBQUVFO0FBRkY7QUFaRixLQURRO0FBQUEsQ0FBaEI7O0FBbUJBVCxVQUFVVSxTQUFWLEdBQXNCO0FBQ2xCVCxlQUFXLGlCQUFVVSxPQUFWLENBQWtCLGlCQUFVQyxHQUE1QjtBQURPLENBQXRCOztBQUlBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDaENiLG1CQUFXYSxNQUFNYixTQURlO0FBRWhDQyxhQUFLWSxNQUFNQztBQUZxQixLQUFaO0FBQUEsQ0FBeEI7O0FBS0FmLFlBQVkseUJBQVFhLGVBQVIsRUFBeUJiLFNBQXpCLENBQVo7O2tCQUVlQSxTIiwiZmlsZSI6IjQyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEZ1bmN0aW9uU2VhcmNoIGZyb20gJy4vRnVuY3Rpb25TZWFyY2gnXG5pbXBvcnQgRnVuY3Rpb25JbmZvIGZyb20gJy4vRnVuY3Rpb25JbmZvJ1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tICdyZWFjdC1zcGxpdC1wYW5lJztcblxuXG5sZXQgUmlnaHRQYW5lID0gKHsgdmFyaWFibGVzLCBkb2MgfSkgPT5cbiAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjMwJVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VycmVudCBWYXJpYWJsZXM8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5vcmRlcjtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3BhbiBjbGFzc05hbWU9XCJ0aHJlZV9xdWFydGVyIG5hbWVcIj57IHgubmFtZSB9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInF1YXJ0ZXJcIj57IHgudmFsdWUgfTwvc3Bhbj48L2xpPjtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCI1MCVcIj5cbiAgICAgICAgICAgIDxGdW5jdGlvblNlYXJjaCAvPlxuICAgICAgICAgICAgPEZ1bmN0aW9uSW5mbyAvPlxuICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICA8L1NwbGl0UGFuZT47XG5cblJpZ2h0UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgdmFyaWFibGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHN0YXRlLnZhcmlhYmxlcyxcbiAgICBkb2M6IHN0YXRlLmRvY3Ncbn0pO1xuXG5SaWdodFBhbmUgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmlnaHRQYW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRQYW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUmlnaHRQYW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1302:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FunctionInfo = function (_Component) {\n  _inherits(FunctionInfo, _Component);\n\n  function FunctionInfo() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FunctionInfo);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FunctionInfo.__proto__ || Object.getPrototypeOf(FunctionInfo)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'func_info' },\n        _react2.default.createElement(\n          'div',\n          { className: 'func_title' },\n          doc.title\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'func_description' },\n          _this.props.doc.description.map(function (p) {\n            return _react2.default.createElement(\n              'div',\n              null,\n              p\n            );\n          })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'examples' },\n          _react2.default.createElement(\n            'div',\n            { className: 'head' },\n            'EXAMPLES:'\n          ),\n          _this.props.doc.examples.map(function (ex) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'example' },\n              ex\n            );\n          })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'func_code' },\n          _react2.default.createElement(\n            'div',\n            { className: 'head' },\n            'CODE:'\n          ),\n          _react2.default.createElement(\n            'pre',\n            null,\n            'def add_two_numbers(x,y): return x + y'\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return FunctionInfo;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    doc: state.docs\n  };\n};\n\nFunctionInfo = (0, _reactRedux.connect)(mapStateToProps)(FunctionInfo);\n\nexports.default = FunctionSearch;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvbkluZm8uanM/YmY0ZCJdLCJuYW1lcyI6WyJGdW5jdGlvbkluZm8iLCJyZW5kZXIiLCJkb2MiLCJ0aXRsZSIsInByb3BzIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJwIiwiZXhhbXBsZXMiLCJleCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZG9jcyIsIkZ1bmN0aW9uU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUVGQyxNLEdBQVM7QUFBQSxhQUNQO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUE2QkMsY0FBSUM7QUFBakMsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsa0JBQWY7QUFDRyxnQkFBS0MsS0FBTCxDQUFXRixHQUFYLENBQWVHLFdBQWYsQ0FBMkJDLEdBQTNCLENBQStCO0FBQUEsbUJBQUs7QUFBQTtBQUFBO0FBQU1DO0FBQU4sYUFBTDtBQUFBLFdBQS9CO0FBREgsU0FGRjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEsV0FERjtBQUVHLGdCQUFLSCxLQUFMLENBQVdGLEdBQVgsQ0FBZU0sUUFBZixDQUF3QkYsR0FBeEIsQ0FBNEI7QUFBQSxtQkFBTTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxTQUFmO0FBQTBCRztBQUExQixhQUFOO0FBQUEsV0FBNUI7QUFGSCxTQUxGO0FBU0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBVEYsT0FETztBQUFBLEs7Ozs7OztBQW1CYixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDVCxTQUFLUyxNQUFNQztBQURxQixHQUFaO0FBQUEsQ0FBeEI7O0FBSUFaLGVBQWUseUJBQVFVLGVBQVIsRUFBeUJWLFlBQXpCLENBQWY7O2tCQUVlYSxjIiwiZmlsZSI6IjEzMDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jbGFzcyBGdW5jdGlvbkluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY19pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY190aXRsZVwiPntkb2MudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRvYy5kZXNjcmlwdGlvbi5tYXAocCA9PiA8ZGl2PntwfTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+RVhBTVBMRVM6PC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMuZG9jLmV4YW1wbGVzLm1hcChleCA9PiA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj57ZXh9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY19jb2RlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+Q09ERTo8L2Rpdj5cbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgIGRlZiBhZGRfdHdvX251bWJlcnMoeCx5KTogcmV0dXJuIHggKyB5XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBkb2M6IHN0YXRlLmRvY3Ncbn0pO1xuXG5GdW5jdGlvbkluZm8gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRnVuY3Rpb25JbmZvKTtcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25TZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvbkluZm8uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
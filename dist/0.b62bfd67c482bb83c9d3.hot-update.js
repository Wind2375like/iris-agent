webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n    var variables = _ref.variables,\n        doc = _ref.doc;\n    return _react2.default.createElement(\n        _reactSplitPane2.default,\n        { split: 'horizontal', defaultSize: '30%' },\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n                'div',\n                { className: 'variableTable' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'title' },\n                    'Current Variables'\n                ),\n                _react2.default.createElement(\n                    'ul',\n                    null,\n                    _.map(_.sortBy(variables, function (v) {\n                        return v.order;\n                    }), function (x) {\n                        return _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                'span',\n                                { className: 'three_quarter name' },\n                                x.name\n                            ),\n                            _react2.default.createElement(\n                                'span',\n                                { className: 'quarter' },\n                                x.value\n                            )\n                        );\n                    })\n                )\n            )\n        ),\n        _react2.default.createElement(\n            _reactSplitPane2.default,\n            { split: 'horizontal', defaultSize: '50%' },\n            _react2.default.createElement(\n                'div',\n                null,\n                'two'\n            ),\n            _react2.default.createElement(\n                'div',\n                null,\n                'three'\n            )\n        )\n    );\n};\n\nRightPane.propTypes = {\n    variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables,\n        doc: state.docs\n    };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFJQyxZQUFZO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsUUFBY0MsR0FBZCxRQUFjQSxHQUFkO0FBQUEsV0FDUjtBQUFBO0FBQUEsVUFBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUM7QUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsa0JBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFDSUgsc0JBQUVJLEdBQUYsQ0FBTUosRUFBRUssTUFBRixDQUFTSCxTQUFULEVBQW9CLFVBQUNJLENBQUQsRUFBTztBQUMvQiwrQkFBT0EsRUFBRUMsS0FBVDtBQUNILHFCQUZPLENBQU4sRUFHQSxVQUFDQyxDQUFELEVBQU87QUFDSCwrQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxvQkFBaEI7QUFBdUNBLGtDQUFFQztBQUF6Qyw2QkFBSjtBQUEwRDtBQUFBO0FBQUEsa0NBQU0sV0FBVSxTQUFoQjtBQUE0QkQsa0NBQUVFO0FBQTlCO0FBQTFELHlCQUFQO0FBQ0gscUJBTEQ7QUFESjtBQUZKO0FBREEsU0FERjtBQWNFO0FBQUE7QUFBQSxjQUFXLE9BQU0sWUFBakIsRUFBOEIsYUFBWSxLQUExQztBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQWRGLEtBRFE7QUFBQSxDQUFoQjs7QUFxQkFULFVBQVVVLFNBQVYsR0FBc0I7QUFDbEJULGVBQVcsaUJBQVVVLE9BQVYsQ0FBa0IsaUJBQVVDLEdBQTVCO0FBRE8sQ0FBdEI7O0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ2IsbUJBQVdhLE1BQU1iLFNBRGU7QUFFaENDLGFBQUtZLE1BQU1DO0FBRnFCLEtBQVo7QUFBQSxDQUF4Qjs7QUFLQWYsWUFBWSx5QkFBUWEsZUFBUixFQUF5QmIsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNDI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRnVuY3Rpb25TZWFyY2ggZnJvbSAnLi9GdW5jdGlvblNlYXJjaCdcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cblxubGV0IFJpZ2h0UGFuZSA9ICh7IHZhcmlhYmxlcywgZG9jIH0pID0+XG4gICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCIzMCVcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VycmVudCBWYXJpYWJsZXM8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5vcmRlcjtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3BhbiBjbGFzc05hbWU9XCJ0aHJlZV9xdWFydGVyIG5hbWVcIj57IHgubmFtZSB9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInF1YXJ0ZXJcIj57IHgudmFsdWUgfTwvc3Bhbj48L2xpPjtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCI1MCVcIj5cbiAgICAgICAgICAgIDxkaXY+dHdvPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PnRocmVlPC9kaXY+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgIDwvU3BsaXRQYW5lPjtcblxuUmlnaHRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICB2YXJpYWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhcmlhYmxlczogc3RhdGUudmFyaWFibGVzLFxuICAgIGRvYzogc3RhdGUuZG9jc1xufSk7XG5cblJpZ2h0UGFuZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSaWdodFBhbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodFBhbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
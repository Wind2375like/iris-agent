webpackHotUpdate(0,{

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _index = __webpack_require__(42);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar addExampleButton = function addExampleButton(dispatch) {\n  return function () {\n    dispatch((0, _index.addExample)());\n  };\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  return function () {\n    console.log(\"attempting\", id);\n    console.log(dispatch);\n    console.log(deleteCommmandExample, _index.addExample);\n    console.log(deleteCommmandExample(id));\n    dispatch(deleteCommmandExample(id));\n  };\n};\n\nvar ExamplesEditor = function ExamplesEditor(_ref) {\n  var dispatch = _ref.dispatch,\n      examples = _ref.examples;\n  return _react2.default.createElement(\n    'div',\n    { className: 'command_examples' },\n    _react2.default.createElement(\n      'button',\n      { onClick: addExampleButton(dispatch) },\n      'Add Example'\n    ),\n    examples.map(function (example, id) {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'example' },\n          _react2.default.createElement('input', { type: 'text', value: example })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: onClickDelete(dispatch, id) },\n          'Delete'\n        )\n      );\n    })\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    examples: state.commandEditPane.examples\n  };\n};\n\nExamplesEditor = (0, _reactRedux.connect)(mapStateToProps)(ExamplesEditor);\n\nexports.default = ExamplesEditor;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcz82NWIwIl0sIm5hbWVzIjpbImFkZEV4YW1wbGVCdXR0b24iLCJkaXNwYXRjaCIsIm9uQ2xpY2tEZWxldGUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVDb21tbWFuZEV4YW1wbGUiLCJFeGFtcGxlc0VkaXRvciIsImV4YW1wbGVzIiwibWFwIiwiZXhhbXBsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29tbWFuZEVkaXRQYW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQ3ZCLFlBQU07QUFDSkEsYUFBUyx3QkFBVDtBQUNELEdBSHNCO0FBQUEsQ0FBekI7O0FBS0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDRCxRQUFELEVBQVdFLEVBQVg7QUFBQSxTQUNwQixZQUFNO0FBQ0pDLFlBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixFQUExQjtBQUNBQyxZQUFRQyxHQUFSLENBQVlKLFFBQVo7QUFDQUcsWUFBUUMsR0FBUixDQUFZQyxxQkFBWjtBQUNBRixZQUFRQyxHQUFSLENBQVlDLHNCQUFzQkgsRUFBdEIsQ0FBWjtBQUNBRixhQUFTSyxzQkFBc0JILEVBQXRCLENBQVQ7QUFDRCxHQVBtQjtBQUFBLENBQXRCOztBQVNBLElBQUlJLGlCQUFpQjtBQUFBLE1BQUdOLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFPLFFBQWIsUUFBYUEsUUFBYjtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0JBQWY7QUFDSTtBQUFBO0FBQUEsUUFBUSxTQUFTUixpQkFBaUJDLFFBQWpCLENBQWpCO0FBQUE7QUFBQSxLQURKO0FBRUtPLGFBQVNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVQLEVBQVY7QUFBQSxhQUFpQjtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFBeUIsbURBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU9PLE9BQTFCO0FBQXpCLFNBQUw7QUFBeUU7QUFBQTtBQUFBLFlBQVEsU0FBU1IsY0FBY0QsUUFBZCxFQUF3QkUsRUFBeEIsQ0FBakI7QUFBQTtBQUFBO0FBQXpFLE9BQWpCO0FBQUEsS0FBYjtBQUZMLEdBRGlCO0FBQUEsQ0FBckI7O0FBTUEsSUFBTVEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0osY0FBVUksTUFBTUMsZUFBTixDQUFzQkw7QUFERSxHQUFaO0FBQUEsQ0FBeEI7O0FBSUFELGlCQUFpQix5QkFBUUksZUFBUixFQUF5QkosY0FBekIsQ0FBakI7O2tCQUVlQSxjIiwiZmlsZSI6IjQzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWRkRXhhbXBsZSwgZENvbW1hbmRFeGFtcGxlIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cbmNvbnN0IGFkZEV4YW1wbGVCdXR0b24gPSAoZGlzcGF0Y2gpID0+XG4gICgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRFeGFtcGxlKCkpO1xuICB9O1xuXG5jb25zdCBvbkNsaWNrRGVsZXRlID0gKGRpc3BhdGNoLCBpZCkgPT5cbiAgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYXR0ZW1wdGluZ1wiLCBpZCk7XG4gICAgY29uc29sZS5sb2coZGlzcGF0Y2gpO1xuICAgIGNvbnNvbGUubG9nKGRlbGV0ZUNvbW1tYW5kRXhhbXBsZSwgYWRkRXhhbXBsZSk7XG4gICAgY29uc29sZS5sb2coZGVsZXRlQ29tbW1hbmRFeGFtcGxlKGlkKSk7XG4gICAgZGlzcGF0Y2goZGVsZXRlQ29tbW1hbmRFeGFtcGxlKGlkKSk7XG4gIH07XG5cbmxldCBFeGFtcGxlc0VkaXRvciA9ICh7IGRpc3BhdGNoLCBleGFtcGxlcyB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9leGFtcGxlc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEV4YW1wbGVCdXR0b24oZGlzcGF0Y2gpfT5BZGQgRXhhbXBsZTwvYnV0dG9uPlxuICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpZCkgPT4gPGRpdj48ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZXhhbXBsZX0gLz48L2Rpdj48YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tEZWxldGUoZGlzcGF0Y2gsIGlkKX0+RGVsZXRlPC9idXR0b24+PC9kaXY+KX1cbiAgICA8L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZXhhbXBsZXM6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5leGFtcGxlcyxcbn0pO1xuXG5FeGFtcGxlc0VkaXRvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFeGFtcGxlc0VkaXRvcik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVzRWRpdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvRXhhbXBsZXNFZGl0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
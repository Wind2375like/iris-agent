webpackHotUpdate(0,{

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _index = __webpack_require__(42);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar examples = {};\n\nvar addExampleButton = function addExampleButton(dispatch) {\n  return function () {\n    dispatch((0, _index.addExample)());\n  };\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  return function () {\n    dispatch((0, _index.deleteCommandExample)(id));\n  };\n};\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  return function () {\n    dispatch((0, _index.updateCommandExample)(id, examples[id].value));\n  };\n};\n\nvar ExamplesEditor = function ExamplesEditor(_ref) {\n  var dispatch = _ref.dispatch,\n      examples = _ref.examples;\n  return _react2.default.createElement(\n    'div',\n    { className: 'command_examples' },\n    _react2.default.createElement(\n      'button',\n      { onClick: addExampleButton(dispatch) },\n      'Add Example'\n    ),\n    examples.map(function (example, id) {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'example' },\n          _react2.default.createElement('input', { type: 'text', ref: function ref(node) {\n              examples[id] = node;\n            }, onChange: onChangeInput(dispatch, id), value: example })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: onClickDelete(dispatch, id) },\n          'Delete'\n        )\n      );\n    })\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    examples: state.commandEditPane.examples\n  };\n};\n\nExamplesEditor = (0, _reactRedux.connect)(mapStateToProps)(ExamplesEditor);\n\nexports.default = ExamplesEditor;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcz82NWIwIl0sIm5hbWVzIjpbImV4YW1wbGVzIiwiYWRkRXhhbXBsZUJ1dHRvbiIsImRpc3BhdGNoIiwib25DbGlja0RlbGV0ZSIsImlkIiwib25DaGFuZ2VJbnB1dCIsInZhbHVlIiwiRXhhbXBsZXNFZGl0b3IiLCJtYXAiLCJleGFtcGxlIiwibm9kZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29tbWFuZEVkaXRQYW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBSUEsV0FBVyxFQUFmOztBQUVBLElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLFFBQUQ7QUFBQSxTQUN2QixZQUFNO0FBQ0pBLGFBQVMsd0JBQVQ7QUFDRCxHQUhzQjtBQUFBLENBQXpCOztBQUtBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0QsUUFBRCxFQUFXRSxFQUFYO0FBQUEsU0FDcEIsWUFBTTtBQUNKRixhQUFTLGlDQUFxQkUsRUFBckIsQ0FBVDtBQUNELEdBSG1CO0FBQUEsQ0FBdEI7O0FBS0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDSCxRQUFELEVBQVdFLEVBQVg7QUFBQSxTQUNwQixZQUFNO0FBQ0pGLGFBQVMsaUNBQXFCRSxFQUFyQixFQUF5QkosU0FBU0ksRUFBVCxFQUFhRSxLQUF0QyxDQUFUO0FBQ0QsR0FIbUI7QUFBQSxDQUF0Qjs7QUFLQSxJQUFJQyxpQkFBaUI7QUFBQSxNQUFHTCxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhRixRQUFiLFFBQWFBLFFBQWI7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0k7QUFBQTtBQUFBLFFBQVEsU0FBU0MsaUJBQWlCQyxRQUFqQixDQUFqQjtBQUFBO0FBQUEsS0FESjtBQUVLRixhQUFTUSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVTCxFQUFWO0FBQUEsYUFBaUI7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQXlCLG1EQUFPLE1BQUssTUFBWixFQUFtQixLQUFLLG1CQUFRO0FBQUNKLHVCQUFTSSxFQUFULElBQWVNLElBQWY7QUFBcUIsYUFBdEQsRUFBd0QsVUFBVUwsY0FBY0gsUUFBZCxFQUF3QkUsRUFBeEIsQ0FBbEUsRUFBK0YsT0FBT0ssT0FBdEc7QUFBekIsU0FBTDtBQUFxSjtBQUFBO0FBQUEsWUFBUSxTQUFTTixjQUFjRCxRQUFkLEVBQXdCRSxFQUF4QixDQUFqQjtBQUFBO0FBQUE7QUFBckosT0FBakI7QUFBQSxLQUFiO0FBRkwsR0FEaUI7QUFBQSxDQUFyQjs7QUFNQSxJQUFNTyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDWixjQUFVWSxNQUFNQyxlQUFOLENBQXNCYjtBQURFLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQU8saUJBQWlCLHlCQUFRSSxlQUFSLEVBQXlCSixjQUF6QixDQUFqQjs7a0JBRWVBLGMiLCJmaWxlIjoiNDM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRFeGFtcGxlLCBkZWxldGVDb21tYW5kRXhhbXBsZSwgdXBkYXRlQ29tbWFuZEV4YW1wbGUgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcblxubGV0IGV4YW1wbGVzID0ge307XG5cbmNvbnN0IGFkZEV4YW1wbGVCdXR0b24gPSAoZGlzcGF0Y2gpID0+XG4gICgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRFeGFtcGxlKCkpO1xuICB9O1xuXG5jb25zdCBvbkNsaWNrRGVsZXRlID0gKGRpc3BhdGNoLCBpZCkgPT5cbiAgKCkgPT4ge1xuICAgIGRpc3BhdGNoKGRlbGV0ZUNvbW1hbmRFeGFtcGxlKGlkKSk7XG4gIH07XG5cbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZGlzcGF0Y2gsIGlkKSA9PlxuICAoKSA9PiB7XG4gICAgZGlzcGF0Y2godXBkYXRlQ29tbWFuZEV4YW1wbGUoaWQsIGV4YW1wbGVzW2lkXS52YWx1ZSkpO1xuICB9O1xuXG5sZXQgRXhhbXBsZXNFZGl0b3IgPSAoeyBkaXNwYXRjaCwgZXhhbXBsZXMgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZXhhbXBsZXNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRFeGFtcGxlQnV0dG9uKGRpc3BhdGNoKX0+QWRkIEV4YW1wbGU8L2J1dHRvbj5cbiAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaWQpID0+IDxkaXY+PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtub2RlID0+IHtleGFtcGxlc1tpZF0gPSBub2RlO319IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHZhbHVlPXtleGFtcGxlfSAvPjwvZGl2PjxidXR0b24gb25DbGljaz17b25DbGlja0RlbGV0ZShkaXNwYXRjaCwgaWQpfT5EZWxldGU8L2J1dHRvbj48L2Rpdj4pfVxuICAgIDwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBleGFtcGxlczogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmV4YW1wbGVzLFxufSk7XG5cbkV4YW1wbGVzRWRpdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV4YW1wbGVzRWRpdG9yKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZXNFZGl0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
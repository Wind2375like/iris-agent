webpackHotUpdate(0,{

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(168);\n\nvar _python = __webpack_require__(126);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar file_input = void 0;\n\nvar onChangeFile = function onChangeFile(dispatch) {\n    _InputBox.input.value = file_input.files[0].path;\n    (0, _python.updateHint)(_InputBox.input.value);\n    // updateDocs(input.value);\n};\n\nvar FilePickMessage = function FilePickMessage(_ref) {\n    var dispatch = _ref.dispatch,\n        active = _ref.active,\n        origin = _ref.origin,\n        text = _ref.text,\n        hidden = _ref.hidden;\n\n    console.log(active);\n    var readonly = active === true ? {} : { 'disabled': true };\n    return _react2.default.createElement(\n        'div',\n        { className: origin === 'iris' ? 'message left' : 'message right', style: hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n            'div',\n            { className: 'bubble' },\n            _react2.default.createElement('input', _extends({ type: 'file', name: 'file', id: 'file' }, readonly, { className: 'inputfile', onChange: function onChange() {\n                    return onChangeFile(dispatch);\n                }, ref: function ref(node) {\n                    file_input = node;\n                } }))\n        )\n    );\n};\n\nexports.default = FilePickMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GaWxlUGlja01lc3NhZ2UuanM/MjEwYSJdLCJuYW1lcyI6WyJmaWxlX2lucHV0Iiwib25DaGFuZ2VGaWxlIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsImZpbGVzIiwicGF0aCIsIkZpbGVQaWNrTWVzc2FnZSIsImFjdGl2ZSIsIm9yaWdpbiIsInRleHQiLCJoaWRkZW4iLCJjb25zb2xlIiwibG9nIiwicmVhZG9ubHkiLCJkaXNwbGF5Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBSUEsbUJBQUo7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUMvQixvQkFBTUMsS0FBTixHQUFjSCxXQUFXSSxLQUFYLENBQWlCLENBQWpCLEVBQW9CQyxJQUFsQztBQUNBLDRCQUFXLGdCQUFNRixLQUFqQjtBQUNBO0FBQ0gsQ0FKRDs7QUFNQSxJQUFNRyxrQkFBa0IsU0FBbEJBLGVBQWtCLE9BQStDO0FBQUEsUUFBNUNKLFFBQTRDLFFBQTVDQSxRQUE0QztBQUFBLFFBQWxDSyxNQUFrQyxRQUFsQ0EsTUFBa0M7QUFBQSxRQUExQkMsTUFBMEIsUUFBMUJBLE1BQTBCO0FBQUEsUUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLFFBQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFDckVDLFlBQVFDLEdBQVIsQ0FBWUwsTUFBWjtBQUNBLFFBQU1NLFdBQVdOLFdBQVcsSUFBWCxHQUFrQixFQUFsQixHQUF1QixFQUFDLFlBQVcsSUFBWixFQUF4QztBQUNBLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBYUMsV0FBVyxNQUFYLEdBQW9CLGNBQXBCLEdBQXFDLGVBQXZELEVBQXdFLE9BQU9FLFdBQVcsSUFBWCxHQUFrQixFQUFDSSxTQUFTLE1BQVYsRUFBbEIsR0FBc0MsRUFBckg7QUFDSjtBQUFBO0FBQUEsY0FBSyxXQUFZLFFBQWpCO0FBQ0EsOERBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsSUFBRyxNQUFsQyxJQUE2Q0QsUUFBN0MsSUFBdUQsV0FBVSxXQUFqRSxFQUE2RSxVQUFVO0FBQUEsMkJBQU1aLGFBQWFDLFFBQWIsQ0FBTjtBQUFBLGlCQUF2RixFQUFxSCxLQUFLLG1CQUFRO0FBQUNGLGlDQUFhZSxJQUFiO0FBQW1CLGlCQUF0SjtBQURBO0FBREksS0FBUjtBQUtELENBUkQ7O2tCQVdlVCxlIiwiZmlsZSI6IjEzMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHVwZGF0ZUhpbnQgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcblxubGV0IGZpbGVfaW5wdXQ7XG5cbmNvbnN0IG9uQ2hhbmdlRmlsZSA9IChkaXNwYXRjaCkgPT4ge1xuICAgIGlucHV0LnZhbHVlID0gZmlsZV9pbnB1dC5maWxlc1swXS5wYXRoO1xuICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgIC8vIHVwZGF0ZURvY3MoaW5wdXQudmFsdWUpO1xufTtcblxuY29uc3QgRmlsZVBpY2tNZXNzYWdlID0gKHsgZGlzcGF0Y2gsIGFjdGl2ZSwgb3JpZ2luLCB0ZXh0LCBoaWRkZW4gfSkgPT57XG4gIGNvbnNvbGUubG9nKGFjdGl2ZSlcbiAgY29uc3QgcmVhZG9ubHkgPSBhY3RpdmUgPT09IHRydWUgPyB7fSA6IHsnZGlzYWJsZWQnOnRydWV9O1xuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lID0ge29yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXtoaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJidWJibGVcIj5cbiAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyBuYW1lPVwiZmlsZVwiIGlkPVwiZmlsZVwiIHsuLi5yZWFkb25seX0gY2xhc3NOYW1lPVwiaW5wdXRmaWxlXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlRmlsZShkaXNwYXRjaCl9IHJlZj17bm9kZSA9PiB7ZmlsZV9pbnB1dCA9IG5vZGU7fX0vPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2Pik7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVBpY2tNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvRmlsZVBpY2tNZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
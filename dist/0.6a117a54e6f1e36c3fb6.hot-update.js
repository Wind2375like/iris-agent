webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1100);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(69);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(516);\n\n__webpack_require__(517);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar onChange = function onChange(dispatch, name) {\n  (function (value) {\n    dispatch((0, _index.updateCodeEditor)(name, value));\n  });\n};\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0;\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange('name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange('title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'args'),\n              name: 'command_editor'\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              name: 'command_editor'\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              name: 'explanation_editor'\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange('testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      // command_name.value = this.props.name;\n      // command_title.value = this.props.title;\n      // test_inputs.value = this.props.testInputs;\n\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJuYW1lIiwidmFsdWUiLCJjb21tYW5kX25hbWUiLCJjb21tYW5kX3RpdGxlIiwidGVzdF9pbnB1dHMiLCJDb21tYW5kRWRpdCIsInJlbmRlciIsIm5vZGUiLCJwcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidGl0bGUiLCJjb21tYW5kRWRpdFBhbmUiLCJhcmdzIiwiY29tbWFuZCIsImV4cGxhbmF0aW9uIiwidGVzdElucHV0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtBQUNuQyxhQUFDQyxLQUFELEVBQVc7QUFDVEYsYUFBUyw2QkFBaUJDLElBQWpCLEVBQXVCQyxLQUF2QixDQUFUO0FBQ0QsR0FGRDtBQUdELENBSkQ7O0FBTUEsSUFBSUMscUJBQUo7QUFBQSxJQUFrQkMsc0JBQWxCO0FBQUEsSUFBaUNDLG9CQUFqQzs7SUFFTUMsVzs7Ozs7Ozs7Ozs7Ozs7Z01BU0ZDLE0sR0FBUztBQUFBLGFBQ0g7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVcsV0FBVSxVQUFyQixFQUFnQyxPQUFNLFVBQXRDLEVBQWlELGFBQVksS0FBN0Q7QUFDQTtBQUFBO0FBQUEsY0FBSyxTQUFNLFVBQVg7QUFDQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEscURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksdUJBQS9CLEVBQXVELFVBQVVSLFNBQVMsTUFBVCxDQUFqRSxFQUFtRixLQUFLLG1CQUFRO0FBQUNJLCtCQUFlSyxJQUFmO0FBQXFCLGVBQXRILEdBRkE7QUFHQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQUhBO0FBSUEscURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksdUJBQS9CLEVBQXVELFVBQVVULFNBQVMsT0FBVCxDQUFqRSxFQUFvRixLQUFLLG1CQUFRO0FBQUNLLGdDQUFnQkksSUFBaEI7QUFBc0IsZUFBeEgsR0FKQTtBQUtBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBTEE7QUFNQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSxxQkFBTSxNQUZSO0FBR0Usc0JBQU8sT0FIVDtBQUlFLHdDQUF5QixNQUozQjtBQUtFLHdCQUFTLElBTFg7QUFNRSxxQkFBTSxRQU5SO0FBT0Usd0JBQVVULFNBQVMsTUFBS1UsS0FBTCxDQUFXVCxRQUFwQixFQUE4QixNQUE5QixDQVBaO0FBUUUsb0JBQUs7QUFSUCxjQU5BO0FBZ0JBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBaEJBO0FBaUJBO0FBQ0Usb0JBQUssUUFEUDtBQUVFLHFCQUFNLE1BRlI7QUFHRSxzQkFBTyxPQUhUO0FBSUUsd0NBQXlCLE1BSjNCO0FBS0Usd0JBQVMsSUFMWDtBQU1FLHFCQUFNLFFBTlI7QUFPRSx3QkFBVUQsU0FBUyxNQUFLVSxLQUFMLENBQVdULFFBQXBCLEVBQThCLFNBQTlCLENBUFo7QUFRRSxvQkFBSztBQVJQLGNBakJBO0FBMkJBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBM0JBO0FBNEJBO0FBQ0Usb0JBQUssUUFEUDtBQUVFLHFCQUFNLE1BRlI7QUFHRSx3QkFBUyxJQUhYO0FBSUUsd0NBQXlCLE1BSjNCO0FBS0Usc0JBQU8sT0FMVDtBQU1FLHFCQUFNLFFBTlI7QUFPRSx3QkFBVUQsU0FBUyxNQUFLVSxLQUFMLENBQVdULFFBQXBCLEVBQThCLGFBQTlCLENBUFo7QUFRRSxvQkFBSztBQVJQO0FBNUJBLFdBREE7QUF3Q0Y7QUFBQTtBQUFBLGNBQUssV0FBVSxnQ0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREY7QUFFRSxxREFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVUQsU0FBUyxZQUFULENBQTdCLEVBQXFELEtBQUssbUJBQVE7QUFBQ00sOEJBQWNHLElBQWQ7QUFBb0IsZUFBdkY7QUFGRjtBQXhDRTtBQURGLE9BREc7QUFBQSxLOzs7Ozt5Q0FQWTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUQ7Ozs7OztBQXNETCxJQUFNRSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDQyxXQUFPRCxNQUFNRSxlQUFOLENBQXNCRCxLQURHO0FBRWhDWCxVQUFNVSxNQUFNRSxlQUFOLENBQXNCWixJQUZJO0FBR2hDYSxVQUFNSCxNQUFNRSxlQUFOLENBQXNCQyxJQUhJO0FBSWhDQyxhQUFTSixNQUFNRSxlQUFOLENBQXNCRSxPQUpDO0FBS2hDQyxpQkFBYUwsTUFBTUUsZUFBTixDQUFzQkcsV0FMSDtBQU1oQ0MsZ0JBQVlOLE1BQU1FLGVBQU4sQ0FBc0JJO0FBTkYsR0FBWjtBQUFBLENBQXhCOztBQVNBWCxjQUFjLHlCQUFRSSxlQUFSLEVBQXlCSixXQUF6QixDQUFkOztrQkFFZUEsVyIsImZpbGUiOiI0MzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGJyYWNlIGZyb20gJ2JyYWNlJztcbmltcG9ydCBBY2VFZGl0b3IgZnJvbSAncmVhY3QtYWNlJztcbmltcG9ydCB7IHVwZGF0ZUNvZGVFZGl0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xuXG5pbXBvcnQgJ2JyYWNlL21vZGUvcHl0aG9uJztcbmltcG9ydCAnYnJhY2UvdGhlbWUvZ2l0aHViJztcblxuY29uc3Qgb25DaGFuZ2UgPSAoZGlzcGF0Y2gsIG5hbWUpID0+IHtcbiAgKHZhbHVlKSA9PiB7XG4gICAgZGlzcGF0Y2godXBkYXRlQ29kZUVkaXRvcihuYW1lLCB2YWx1ZSkpO1xuICB9XG59O1xuXG5sZXQgY29tbWFuZF9uYW1lLCBjb21tYW5kX3RpdGxlLCB0ZXN0X2lucHV0cztcblxuY2xhc3MgQ29tbWFuZEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgLy8gY29tbWFuZF9uYW1lLnZhbHVlID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgICAgLy8gY29tbWFuZF90aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAvLyB0ZXN0X2lucHV0cy52YWx1ZSA9IHRoaXMucHJvcHMudGVzdElucHV0cztcblxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXRcIj5cbiAgICAgICAgICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwiY29kZXBhbmVcIiBzcGxpdD1cInZlcnRpY2FsXCIgZGVmYXVsdFNpemU9XCI2NiVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgbmFtZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkX3R3b19udW1iZXJzXCIgb25DaGFuZ2U9e29uQ2hhbmdlKCduYW1lJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF9uYW1lID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgdGl0bGU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIG9uQ2hhbmdlPXtvbkNoYW5nZSgndGl0bGUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX3RpdGxlID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnYXJncycpfVxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWFuZF9lZGl0b3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgcHl0aG9uIGNvbW1hbmQ6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2NvbW1hbmQnKX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIGV4cGxhbmF0aW9uOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdleHBsYW5hdGlvbicpfVxuICAgICAgICAgICAgICBuYW1lPVwiZXhwbGFuYXRpb25fZWRpdG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXQgdGVzdHBhbmUgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UZXN0IGlucHV0czo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZSgndGVzdElucHV0cycpfSByZWY9e25vZGUgPT4ge3Rlc3RfaW5wdXRzID0gbm9kZTt9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgIDwvZGl2PlxuXG5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHRpdGxlOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGl0bGUsXG4gICAgbmFtZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLm5hbWUsXG4gICAgYXJnczogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmFyZ3MsXG4gICAgY29tbWFuZDogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmNvbW1hbmQsXG4gICAgZXhwbGFuYXRpb246IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5leHBsYW5hdGlvbixcbiAgICB0ZXN0SW5wdXRzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUudGVzdElucHV0c1xufSk7XG5cbkNvbW1hbmRFZGl0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1hbmRFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEVkaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
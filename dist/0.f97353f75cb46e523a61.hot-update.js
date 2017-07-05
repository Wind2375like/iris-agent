webpackHotUpdate(0,{

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(63);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(166);\n\nvar _InputBox = __webpack_require__(266);\n\nvar _index = __webpack_require__(264);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(dispatch, text) {\n  return function () {\n    var stripText = text.replace(/{/g, '').replace(/}/g, '');\n    if (_InputBox.input.value.includes(text)) {\n      var items = _InputBox.input.value.split(\",\").map(function (x) {\n        return x.replace(/^\\s+|\\s+$/g, '');\n      });\n      var findIndex = items.indexOf(text);\n      if (findIndex > -1) {\n        items.splice(findIndex, 1);\n      }\n      _InputBox.input.value = items.join(\", \"); // input.value.replace(RegExp(test+\",|\"test), '');\n    } else {\n      if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n    }\n    dispatch((0, _index.storeCurrentInput)(_InputBox.input.value));\n    (0, _python.updateHint)(_InputBox.input.value);\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      console.log(_this.props.currentInput);\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'blah' },\n            _this.props.currentInput\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                if (column.type === \"Text\") {\n                  containsText = true;\n                }\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column', onClick: setInput(_this.props.dispatch, column.name), style: singleColumn || i == 0 ? { 'border-left': 'none' } : {} },\n                  column.name\n                );\n              })\n            ),\n            _this.testRows.map(function (row) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    row[column.name]\n                  );\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentInput: state.currentInput\n  };\n};\n\nTableSelectMessage = (0, _reactRedux.connect)(mapStateToProps)(TableSelectMessage);\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsImRpc3BhdGNoIiwidGV4dCIsInN0cmlwVGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiaXRlbXMiLCJzcGxpdCIsIm1hcCIsIngiLCJmaW5kSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiam9pbiIsIlRhYmxlU2VsZWN0TWVzc2FnZSIsInJlbmRlciIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwcm9wcyIsInRlc3RDb2x1bW5zIiwidGVzdFJvd3MiLCJzbGljZSIsImNvbnRhaW5zVGV4dCIsInNpbmdsZUNvbHVtbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SW5wdXQiLCJvcmlnaW4iLCJoaWRkZW4iLCJkaXNwbGF5Iiwid2lkdGgiLCJjb2x1bW4iLCJpIiwidHlwZSIsIm5hbWUiLCJuZXdSb3dTdHlsZSIsIm5ld0NvbFN0eWxlIiwicm93IiwicHJvcFR5cGVzIiwibWVzc2FnZVR5cGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxTOztBQUNaOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLEVBQW9CO0FBQ2pDLFNBQU8sWUFBTTtBQUNULFFBQUlDLFlBQVlELEtBQUtFLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLEVBQXVCQSxPQUF2QixDQUErQixJQUEvQixFQUFxQyxFQUFyQyxDQUFoQjtBQUNBLFFBQUcsZ0JBQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkosSUFBckIsQ0FBSCxFQUE4QjtBQUM1QixVQUFJSyxRQUFRLGdCQUFNRixLQUFOLENBQVlHLEtBQVosQ0FBa0Is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V0FBTCxDQUFpQlosR0FBakIsQ0FBcUIsVUFBQ3lCLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ25DLHNCQUFJSSxjQUFjLEVBQWxCO0FBQ0Esc0JBQUdMLE9BQU9FLElBQVAsS0FBZ0IsTUFBbkIsRUFBMEI7QUFDeEJHLGdDQUFZLE9BQVosSUFBdUIsR0FBdkI7QUFDQUEsZ0NBQVksUUFBWixJQUF3QixLQUF4QjtBQUNEO0FBQ0Qsc0JBQUlkLGdCQUFnQlUsS0FBSyxDQUF6QixFQUEyQjtBQUFFSSxnQ0FBWSxhQUFaLElBQTZCLE1BQTdCO0FBQXFDO0FBQ2xFLHlCQUFPO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGFBQWhCLEVBQThCLE9BQU9BLFdBQXJDO0FBQW1EQyx3QkFBSU4sT0FBT0csSUFBWDtBQUFuRCxtQkFBUDtBQUNELGlCQVJBO0FBREssZUFBUjtBQVdELGFBZEE7QUFUSDtBQUZBO0FBREksT0FBUjtBQThCRCxLOzs7Ozs7QUFJSHRCLG1CQUFtQjBCLFNBQW5CLEdBQStCMUMsVUFBVTJDLFdBQXpDOztBQUVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENmLGtCQUFjZSxNQUFNZjtBQURZLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQWQscUJBQXFCLHlCQUFRNEIsZUFBUixFQUF5QjVCLGtCQUF6QixDQUFyQjs7a0JBRWVBLGtCIiwiZmlsZSI6IjEyNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3REYXRhR3JpZCBmcm9tICdyZWFjdC1kYXRhLWdyaWQnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgcHJvcHR5cGVzIGZyb20gJy4uL3Byb3B0eXBlcy90eXBlcyc7XG5pbXBvcnQgeyB1cGRhdGVIaW50IH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgeyBpbnB1dCB9IGZyb20gJy4uL2NvbnRhaW5lcnMvSW5wdXRCb3gnO1xuaW1wb3J0IHsgc3RvcmVDdXJyZW50SW5wdXQgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcblxuXG5jb25zdCBzZXRJbnB1dCA9IChkaXNwYXRjaCwgdGV4dCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxldCBzdHJpcFRleHQgPSB0ZXh0LnJlcGxhY2UoL3svZywgJycpLnJlcGxhY2UoL30vZywgJycpO1xuICAgICAgICBpZihpbnB1dC52YWx1ZS5pbmNsdWRlcyh0ZXh0KSl7XG4gICAgICAgICAgbGV0IGl0ZW1zID0gaW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKTtcbiAgICAgICAgICBsZXQgZmluZEluZGV4ID0gaXRlbXMuaW5kZXhPZih0ZXh0KTtcbiAgICAgICAgICBpZihmaW5kSW5kZXggPiAtMSl7XG4gICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGZpbmRJbmRleCwgMSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBpdGVtcy5qb2luKFwiLCBcIik7Ly8gaW5wdXQudmFsdWUucmVwbGFjZShSZWdFeHAodGVzdCtcIix8XCJ0ZXN0KSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgaWYoaW5wdXQudmFsdWUgIT09IFwiXCIpIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUgKyBcIiwgXCIgKyBzdHJpcFRleHQ7XG4gICAgICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaChzdG9yZUN1cnJlbnRJbnB1dChpbnB1dC52YWx1ZSkpO1xuICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICB9O1xufTtcblxuY2xhc3MgVGFibGVTZWxlY3RNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy50ZXh0KTtcbiAgICB0aGlzLnRlc3RDb2x1bW5zID0gZGF0YVtcImNvbHVtbl9kYXRhXCJdO1xuICAgIHRoaXMudGVzdFJvd3MgPSBkYXRhW1wicm93X2RhdGFcIl0uc2xpY2UoMCwzKTtcbiAgICBsZXQgY29udGFpbnNUZXh0ID0gZmFsc2U7XG4gICAgbGV0IHNpbmdsZUNvbHVtbiA9IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoID09PSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3VycmVudElucHV0KTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lID0ge3RoaXMucHJvcHMub3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e3RoaXMucHJvcHMuaGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlIHRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhaFwiPnt0aGlzLnByb3BzLmN1cnJlbnRJbnB1dH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhX3RhYmxlXCIgc3R5bGU9e3t3aWR0aDogdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggKiAoMzUwKzEwKzEpfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbixpKSA9PiB7XG4gICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICBjb250YWluc1RleHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgb25DbGljaz17c2V0SW5wdXQodGhpcy5wcm9wcy5kaXNwYXRjaCwgY29sdW1uLm5hbWUpfSBzdHlsZT17c2luZ2xlQ29sdW1uIHx8IGkgPT0gMCA/IHsnYm9yZGVyLWxlZnQnOiAnbm9uZSd9IDoge319Pntjb2x1bW4ubmFtZX08L3NwYW4+O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnRlc3RSb3dzLm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1Jvd1N0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoY29udGFpbnNUZXh0KXsgbmV3Um93U3R5bGVbJ2hlaWdodCddID0gJzRlbSd9O1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImRhdGFfcm93XCIgc3R5bGU9e25ld1Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29sU3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ3dpZHRoJ10gPSAzNTA7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkYXRhX2NvbHVtblwiIHN0eWxlPXtuZXdDb2xTdHlsZX0+e3Jvd1tjb2x1bW4ubmFtZV19PC9zcGFuPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG5cbn1cblxuVGFibGVTZWxlY3RNZXNzYWdlLnByb3BUeXBlcyA9IHByb3B0eXBlcy5tZXNzYWdlVHlwZTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGN1cnJlbnRJbnB1dDogc3RhdGUuY3VycmVudElucHV0XG59KTtcblxuVGFibGVTZWxlY3RNZXNzYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRhYmxlU2VsZWN0TWVzc2FnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlU2VsZWN0TWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlU2VsZWN0TWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
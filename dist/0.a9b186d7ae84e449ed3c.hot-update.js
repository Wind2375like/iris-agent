webpackHotUpdate(0,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar testColumns = [{ key: 'col1', name: 'col1' }, { key: 'col2', name: 'col2' }];\n\nvar testRows = [{ col1: 1, col2: 2 }, { col1: 3, col2: 4 }];\n\nvar getRow = function getRow(i) {\n  return testRows[i];\n};\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(_reactDataGrid2.default, { columns: testColumns, rowGetter: getRow, rowsCount: testRows.length })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CollectionMessage;\n}(_react.Component);\n\n// const CollectionMessage = ({ origin, text, hidden }) =>\n//     <div className = {origin === 'iris' ? 'message left' : 'message right'} style={hidden === true ? {display: 'none'} : {}}>\n//         <ReactDataGrid columns={testColumns} rowGetter={getRow} rowsCount={testRows.length} />\n//     </div>;\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsInRlc3RDb2x1bW5zIiwia2V5IiwibmFtZSIsInRlc3RSb3dzIiwiY29sMSIsImNvbDIiLCJnZXRSb3ciLCJpIiwiQ29sbGVjdGlvbk1lc3NhZ2UiLCJyZW5kZXIiLCJwcm9wcyIsIm9yaWdpbiIsImhpZGRlbiIsImRpc3BsYXkiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7QUFFWixJQUFNQyxjQUFjLENBQ2xCLEVBQUNDLEtBQUssTUFBTixFQUFjQyxNQUFNLE1BQXBCLEVBRGtCLEVBRWxCLEVBQUNELEtBQUssTUFBTixFQUFjQyxNQUFNLE1BQXBCLEVBRmtCLENBQXBCOztBQUtBLElBQU1DLFdBQVcsQ0FDZixFQUFDQyxNQUFNLENBQVAsRUFBVUMsTUFBTSxDQUFoQixFQURlLEVBRWYsRUFBQ0QsTUFBTSxDQUFQLEVBQVVDLE1BQU0sQ0FBaEIsRUFGZSxDQUFqQjs7QUFLQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRDtBQUFBLFNBQU9KLFNBQVNJLENBQVQsQ0FBUDtBQUFBLENBQWY7O0lBRU1DLGlCOzs7Ozs7Ozs7Ozs7Ozs0TUFDSkMsTSxHQUFTO0FBQUEsYUFDUDtBQUFBO0FBQUEsVUFBSyxXQUFhLE1BQUtDLEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixNQUF0QixHQUErQixjQUEvQixHQUFnRCxlQUFsRSxFQUFtRixPQUFPLE1BQUtELEtBQUwsQ0FBV0UsTUFBWCxLQUFzQixJQUF0QixHQUE2QixFQUFDQyxTQUFTLE1BQVYsRUFBN0IsR0FBaUQsRUFBM0k7QUFDSSxpRUFBZSxTQUFTYixXQUF4QixFQUFxQyxXQUFXTSxNQUFoRCxFQUF3RCxXQUFXSCxTQUFTVyxNQUE1RTtBQURKLE9BRE87QUFBQSxLOzs7Ozs7QUFPWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQU4sa0JBQWtCTyxTQUFsQixHQUE4QmhCLFVBQVVpQixXQUF4Qzs7a0JBRWVSLGlCIiwiZmlsZSI6IjQxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERhdGFHcmlkIGZyb20gJ3JlYWN0LWRhdGEtZ3JpZCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuXG5jb25zdCB0ZXN0Q29sdW1ucyA9IFtcbiAge2tleTogJ2NvbDEnLCBuYW1lOiAnY29sMSd9LFxuICB7a2V5OiAnY29sMicsIG5hbWU6ICdjb2wyJ31cbl07XG5cbmNvbnN0IHRlc3RSb3dzID0gW1xuICB7Y29sMTogMSwgY29sMjogMn0sXG4gIHtjb2wxOiAzLCBjb2wyOiA0fVxuXTtcblxuY29uc3QgZ2V0Um93ID0gKGkpID0+IHRlc3RSb3dzW2ldO1xuXG5jbGFzcyBDb2xsZWN0aW9uTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciA9ICgpID0+XG4gICAgPGRpdiBjbGFzc05hbWUgPSB7dGhpcy5wcm9wcy5vcmlnaW4gPT09ICdpcmlzJyA/ICdtZXNzYWdlIGxlZnQnIDogJ21lc3NhZ2UgcmlnaHQnfSBzdHlsZT17dGhpcy5wcm9wcy5oaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbiAgICAgICAgPFJlYWN0RGF0YUdyaWQgY29sdW1ucz17dGVzdENvbHVtbnN9IHJvd0dldHRlcj17Z2V0Um93fSByb3dzQ291bnQ9e3Rlc3RSb3dzLmxlbmd0aH0gLz5cbiAgICA8L2Rpdj47XG59XG5cblxuLy8gY29uc3QgQ29sbGVjdGlvbk1lc3NhZ2UgPSAoeyBvcmlnaW4sIHRleHQsIGhpZGRlbiB9KSA9PlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lID0ge29yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXtoaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbi8vICAgICAgICAgPFJlYWN0RGF0YUdyaWQgY29sdW1ucz17dGVzdENvbHVtbnN9IHJvd0dldHRlcj17Z2V0Um93fSByb3dzQ291bnQ9e3Rlc3RSb3dzLmxlbmd0aH0gLz5cbi8vICAgICA8L2Rpdj47XG5cbkNvbGxlY3Rpb25NZXNzYWdlLnByb3BUeXBlcyA9IHByb3B0eXBlcy5tZXNzYWdlVHlwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbk1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
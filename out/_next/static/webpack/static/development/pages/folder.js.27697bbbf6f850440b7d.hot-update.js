webpackHotUpdate("static/development/pages/folder.js",{

/***/ "./pages/folder.js":
/*!*************************!*\
  !*** ./pages/folder.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_firebase_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/firebase.js */ "./helpers/firebase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/pages/folder.js";






var Folder =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Folder, _React$Component);

  function Folder(query) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Folder);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Folder).call(this));
    _this.state = {
      folder: [],
      posts: []
    };

    _this.getData(query);

    return _this;
  } //   componentDidMount(query){
  //   }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Folder, [{
    key: "getData",
    value: function getData(query) {
      var _this2 = this;

      _helpers_firebase_js__WEBPACK_IMPORTED_MODULE_11__["database"].ref("folders/".concat(query.id)).once('value').then(function (snapshot) {
        _this2.setState({
          folder: snapshot.val() || {}
        });
      });
      _helpers_firebase_js__WEBPACK_IMPORTED_MODULE_11__["database"].ref('posts').orderByChild('folderID').equalTo(query.id).once('value').then(function (snapshot) {
        _this2.setState({
          posts: snapshot.val() || {}
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2186248838",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2186248838" + " " + "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "jsx-2186248838",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "back"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2186248838" + " " + "page-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          backgroundImage: 'url(' + this.state.folder.folderImage + ')'
        },
        className: "jsx-2186248838" + " " + "page-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2186248838" + " " + "page-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", {
        className: "jsx-2186248838" + " " + "page-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, this.state.folder.folderTitle),  false ? undefined : '')), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2186248838" + " " + "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.state.posts).reverse().map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: key,
          href: "/folder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
          style: {
            backgroundImage: 'url(' + _this3.state.posts[key].postImage + ')'
          },
          className: "jsx-2186248838" + " " + "grid-item image image-scale",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3610876745",
        __self: this
      }, ".back.jsx-2186248838 a.jsx-2186248838{color:black;-webkit-text-decoration:none;text-decoration:none;}.grid-container.jsx-2186248838{margin:0px auto;}.grid-item.jsx-2186248838{float:left;width:33.3333vw;height:33.3333vw;}.image.jsx-2186248838{background-size:cover;background-position:center center;min-height:190px;max-width:190px;margin:0px auto;}.image-circle.jsx-2186248838{border-radius:50%;}.image-circle.jsx-2186248838{border-radius:50%;}.image-scale.jsx-2186248838{min-height:inherit;max-width:inherit;}.page-info.jsx-2186248838{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;vertical-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:40px 25px 25px 25px;}.page-name.jsx-2186248838{font-size:33px;font-weight:bold;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;margin:0px 0px 20px;}.page-image.jsx-2186248838{width:190px;height:190px;background-image:url('static/images/folders/folder-cookbook.jpg');background-size:cover;background-position:center center;border-radius:50%;margin-right:46px;}.stat-grid.jsx-2186248838{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:600px;}.stat.jsx-2186248838{-webkit-flex:1;-ms-flex:1;flex:1;margin-right:35px;}.stat-long.jsx-2186248838{min-width:200px;}.stat-title.jsx-2186248838{font-size:29px;margin:0px 0px 10px;-webkit-letter-spacing:-0.9px;-moz-letter-spacing:-0.9px;-ms-letter-spacing:-0.9px;letter-spacing:-0.9px;}.stat-text.jsx-2186248838{font-size:19px;color:#999999;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;}.filter.jsx-2186248838{border-top:solid 1px #e5e5e5;height:62px;}.back.jsx-2186248838{margin:17px 25px 40px;color:#7e7e7e;font-size:16px;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;}@media only screen and (max-width:840px){.page-info.jsx-2186248838{display:block;text-align:center;}.page-text.jsx-2186248838{margin-left:0px;}.page-image.jsx-2186248838{margin-left:0px;margin:0px auto;margin-bottom:20px;}}@media only screen and (min-width:840px){.grid-item.jsx-2186248838{width:25vw;height:25vw;}}@media only screen and (min-width:1172px){.grid-item.jsx-2186248838{width:293px;height:293px;}}@media only screen and (min-width:1172px){.grid-item.jsx-2186248838{width:20vw;height:20vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd2VubWVycnkvU2l0ZXMvbXktd2Vic2l0ZXMvYmV0dGVyZ3JhbS5vd2VubWVycnkuY29tL3BhZ2VzL2ZvbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRjRCLEFBSWdDLEFBT0ksQUFHRCxBQU9ZLEFBUUwsQUFJQSxBQUdDLEFBTU4sQUFPRyxBQU9KLEFBV0MsQUFJTixBQUlTLEFBR0QsQUFLQSxBQVNjLEFBS04sQUFVTCxBQUlFLEFBR0EsQUFRTCxBQU9DLEFBT0QsV0F6SEMsQUE0R0EsQUFjQSxDQXBJRSxBQW9ETCxBQXlFSSxFQXRCSyxDQTFESixBQTZCRSxBQUtOLENBeEVqQixBQWdFQSxBQW9DSSxBQUdtQixFQXJGdkIsQUFJQSxDQUdxQixHQWZpQixBQTRFckIsQ0EwQmIsQUFjQSxFQWhGa0UsQUF5RWxFLEVBbkhnQixFQXFFTSxBQVFYLEdBMUNTLEFBMERwQixBQU9zQixDQTVDTCxFQVFLLENBbUJSLENBN0RsQixJQXdEQSxHQTdFQSxPQXdEQSxBQTJCMEIsQUFpQnRCLEtBOUZnQixNQWpCeEIsV0FrQnVCLENBbUJNLEFBeUJOLGVBM0NBLENBNENuQixDQVYwQixLQWZKLFNBbEJ0QixRQWtDc0MsZ0JBUmYsS0FrQ3ZCLE1BTEEsT0FwQnFCLEVBUnJCLE9BZ0RBLFNBdkNxQixrQkFDckIsTUFsQitCLDJCQUUvQiIsImZpbGUiOiIvVXNlcnMvb3dlbm1lcnJ5L1NpdGVzL215LXdlYnNpdGVzL2JldHRlcmdyYW0ub3dlbm1lcnJ5LmNvbS9wYWdlcy9mb2xkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL2hlbHBlcnMvZmlyZWJhc2UuanMnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEZvbGRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgICAgICBmb2xkZXI6IFtdLFxuICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldERhdGEocXVlcnkpO1xuXG4gICAgICB9ICAgXG5cbiAgICAvLyAgIGNvbXBvbmVudERpZE1vdW50KHF1ZXJ5KXtcbiAgICAvLyAgIH1cblxuICAgICAgZ2V0RGF0YShxdWVyeSl7XG5cbiAgICAgICAgZGF0YWJhc2UucmVmKGBmb2xkZXJzLyR7cXVlcnkuaWR9YClcbiAgICAgICAgLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZvbGRlcjogc25hcHNob3QudmFsKCkgfHwge31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGF0YWJhc2UucmVmKCdwb3N0cycpXG4gICAgICAgIC5vcmRlckJ5Q2hpbGQoJ2ZvbGRlcklEJylcbiAgICAgICAgLmVxdWFsVG8ocXVlcnkuaWQpXG4gICAgICAgIC5vbmNlKCd2YWx1ZScpXG4gICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcG9zdHM6IHNuYXBzaG90LnZhbCgpIHx8IHt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgZGF0YSBmcm9tIGdldGluaXRpYWxwcm9wcycsIGNvbnRleHQucXVlcnkuaWQpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gICAgICAgIHJldHVybiB7aWR9O1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKCAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5iYWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5zdGF0ZS5mb2xkZXIuZm9sZGVySW1hZ2UgKyAnKScsfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtbmFtZVwiPnt0aGlzLnN0YXRlLmZvbGRlci5mb2xkZXJUaXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICB7MSA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGF0LXRpdGxlXCI+MjQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+UG9zdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN0YXQtdGl0bGVcIj4xNDM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+Vmlld3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0IHN0YXQtbG9uZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGF0LXRpdGxlXCI+MiBkYXlzIGFnbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LXRleHRcIj5MYXN0IEFkZGVkIHRvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUucG9zdHMpLnJldmVyc2UoKS5tYXAoKGtleSkgPT5cbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2tleX0gaHJlZj1cIi9mb2xkZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyaWQtaXRlbSBpbWFnZSBpbWFnZS1zY2FsZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyB0aGlzLnN0YXRlLnBvc3RzW2tleV0ucG9zdEltYWdlICsgJyknLH19PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICAuYmFjayBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2UtaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmdyaWQtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzMuMzMzM3Z3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMzLjMzMzN2dztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjE5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjE5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWNpcmNsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWNpcmNsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1zY2FsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDppbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAucGFnZS1pbmZve1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDI1cHggMjVweCAyNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2UtbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4IDBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2UtaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3RhdGljL2ltYWdlcy9mb2xkZXJzL2ZvbGRlci1jb29rYm9vay5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NDZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLnN0YXQtZ3JpZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3RhdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDozNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdGF0LWxvbmd7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN0YXQtdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHggMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdGF0LXRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM5OTk5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6c29saWQgMXB4ICNlNWU1ZTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NjJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5iYWNre1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxN3B4IDI1cHggNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM3ZTdlN2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGFnZS1pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI1dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzJweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmdyaWQtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjkzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI5M3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcycHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweDsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OkhlbHZldGljYTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyIl19 */\n/*@ sourceURL=/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/pages/folder.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1781981734",
        __self: this
      }, "body{padding:0px;margin:0px;font-family:Helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd2VubWVycnkvU2l0ZXMvbXktd2Vic2l0ZXMvYmV0dGVyZ3JhbS5vd2VubWVycnkuY29tL3BhZ2VzL2ZvbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3T21DLEFBR29DLFlBQ0QsV0FDVyxzQkFDN0IiLCJmaWxlIjoiL1VzZXJzL293ZW5tZXJyeS9TaXRlcy9teS13ZWJzaXRlcy9iZXR0ZXJncmFtLm93ZW5tZXJyeS5jb20vcGFnZXMvZm9sZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tICcuLi9oZWxwZXJzL2ZpcmViYXNlLmpzJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBGb2xkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgZm9sZGVyOiBbXSxcbiAgICAgICAgICBwb3N0czogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5nZXREYXRhKHF1ZXJ5KTtcblxuICAgICAgfSAgIFxuXG4gICAgLy8gICBjb21wb25lbnREaWRNb3VudChxdWVyeSl7XG4gICAgLy8gICB9XG5cbiAgICAgIGdldERhdGEocXVlcnkpe1xuXG4gICAgICAgIGRhdGFiYXNlLnJlZihgZm9sZGVycy8ke3F1ZXJ5LmlkfWApXG4gICAgICAgIC5vbmNlKCd2YWx1ZScpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmb2xkZXI6IHNuYXBzaG90LnZhbCgpIHx8IHt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGRhdGFiYXNlLnJlZigncG9zdHMnKVxuICAgICAgICAub3JkZXJCeUNoaWxkKCdmb2xkZXJJRCcpXG4gICAgICAgIC5lcXVhbFRvKHF1ZXJ5LmlkKVxuICAgICAgICAub25jZSgndmFsdWUnKVxuICAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvc3RzOiBzbmFwc2hvdC52YWwoKSB8fCB7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgfVxuICAgICAgXG4gICAgICBcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGRhdGEgZnJvbSBnZXRpbml0aWFscHJvcHMnLCBjb250ZXh0LnF1ZXJ5LmlkKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICAgICAgICByZXR1cm4ge2lkfTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuICggICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+YmFjazwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuc3RhdGUuZm9sZGVyLmZvbGRlckltYWdlICsgJyknLH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLW5hbWVcIj57dGhpcy5zdGF0ZS5mb2xkZXIuZm9sZGVyVGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgezEgPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3RhdC10aXRsZVwiPjI0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPlBvc3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdGF0LXRpdGxlXCI+MTQzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPlZpZXdzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdCBzdGF0LWxvbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3RhdC10aXRsZVwiPjIgZGF5cyBhZ288L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+TGFzdCBBZGRlZCB0bzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBvc3RzKS5yZXZlcnNlKCkubWFwKChrZXkpID0+XG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9XCIvZm9sZGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmlkLWl0ZW0gaW1hZ2UgaW1hZ2Utc2NhbGVcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5zdGF0ZS5wb3N0c1trZXldLnBvc3RJbWFnZSArICcpJyx9fT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgLmJhY2sgYXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYWdlLWluZm97XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMzLjMzMzN2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMy4zMzMzdnc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDoxOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoxOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jaXJjbGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jaXJjbGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2Utc2NhbGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OmluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2UtaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAyNXB4IDI1cHggMjVweDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYWdlLW5hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweCAwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wYWdlLWltYWdle1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3N0YXRpYy9pbWFnZXMvZm9sZGVycy9mb2xkZXItY29va2Jvb2suanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0LWdyaWR7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN0YXR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3RhdC1sb25ne1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdGF0LXRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjlweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3RhdC10ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojOTk5OTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOnNvbGlkIDFweCAjZTVlNWU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjYycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYmFja3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTdweCAyNXB4IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojN2U3ZTdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWdlLWluZm97XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWdlLXRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcycHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI5M3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyOTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE3MnB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpIZWx2ZXRpY2E7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGRlciJdfQ== */\n/*@ sourceURL=/Users/owenmerry/Sites/my-websites/bettergram.owenmerry.com/pages/folder.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('get data from getinitialprops', context.query.id);
                id = context.query.id;
                return _context.abrupt("return", {
                  id: id
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Folder;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Folder);

/***/ })

})
//# sourceMappingURL=folder.js.27697bbbf6f850440b7d.hot-update.js.map
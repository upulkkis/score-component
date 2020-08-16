webpackHotUpdatescore_component("main",{

/***/ "./src/lib/components/Edit.js":
/*!************************************!*\
  !*** ./src/lib/components/Edit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music21.debug.js */ "./src/lib/components/music21.debug.js");
/* harmony import */ var _music21_debug_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_music21_debug_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vexflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vexflow */ "./node_modules/vexflow/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var VF = vexflow__WEBPACK_IMPORTED_MODULE_1__["default"].Flow;

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);
    _this.state = {
      note: 60,
      notecont: '',
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "setup",
    value: function setup() {
      /*
      const Container = document.createElement('div');
      
      var n = new music21.note.Note("F#");
      var k = new music21.stream.Stream();
      k.append(n);
      //k.appendNewDOM();
      */
      var _this$props = this.props,
          note = _this$props.note,
          scale = _this$props.scale,
          setProps = _this$props.setProps;
      var s = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["stream"].Stream();
      var n = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["note"].Note(note);
      var clef = 0; //n.pitch.midi = 40

      if (note <= 40) {
        clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('bass', -1);
      } else if (note <= 60) {
        clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('bass');
      } else if (note <= 80) {
        clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('treble');
      } else if (note <= 127) {
        clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('treble', 1);
      }

      s.clef = clef;
      s.append(n);
      s.activeNote = s._elements[1]; //var d2 = s2.editableAccidentalDOM();
      //var s = music21.tinyNotation.TinyNotation(initNote);
      //console.log(s)
      //s.clef = new music21.clef.Clef('treble');
      //console.log(s)
      //s.renderOptions.naiveHeight = 200
      //s.renderOptions.top = 100
      //s._naiveOffset = 100

      s.renderOptions.scaleFactor = {
        x: scale,
        y: scale
      };
      var d = s.editableAccidentalDOM();
      d[0].children[0].children[0].style.fontSize = '34px';
      d[0].children[0].children[1].style.fontSize = '34px';
      d[0].children[0].children[2].style.fontSize = '34px';
      d[0].children[0].children[2].style.height = '51px';
      d[0].children[0].children[2].style.verticalAlign = 'top'; //d[0].children[0].children[2].style.paddingTop = '6px'
      //console.log(s)
      //console.log(d[0].childNodes[2].children[0].childNodes[8].tagNames)
      //d[0].children[2].addEventListener("click", this.check.bind(this), false)
      //document.addEventListener("click", this.check.bind(this), false)

      this.notecont = s; //this.note = d[0].childNodes[2].children[0].childNodes[8].tagNames
      //console.log()
      //Container.append(k);
      //k.append(Container)'
      //Container.innerHTML = d
      //Container.appendChild(d)

      /*
      var k = new music21.keyboard.Keyboard();
      k.startPitch = 18;
      k.endPitch = 39;
      k.markC = true;
      k.appendKeyboard(Container);
      */
      //Container.append(k)

      var child = d[0].children[1];
      d[0].removeChild(child);
      d[0].children[0].style.display = 'inline-block';
      d[0].children[0].style.verticalAlign = 'top';
      d[0].children[0].style.marginTop = '35px';
      d[0].children[1].style.display = 'inline-block';
      this.refs.outer9.appendChild(d[0]);
      this.refs.outer9.addEventListener("click", this.check.bind(this), false); //this.refs.outer9.appendChild(d2[0]);
      //d[0].appendChild(document.createElement('div'))
      //console.log(d)
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setup();
    }
  }, {
    key: "check",
    value: function check(event) {
      var setProps = this.props.setProps;
      this.note = this.notecont.activeNote.pitch.midi;

      if (this.note <= 40) {
        this.notecont.clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('bass', -1);
      } else if (this.note <= 60) {
        this.notecont.clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('bass');
      } else if (this.note <= 80) {
        this.notecont.clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('treble');
      } else if (this.note <= 127) {
        this.notecont.clef = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["clef"].Clef('treble', 1);
      } //this.notecont.clef = new music21.clef.Clef('treble', 2);


      var svg = document.getElementsByClassName('streamHolding');
      this.notecont.redrawDOM(svg);
      setProps({
        note: this.note
      }); //console.log(this.notecont.activeNote.pitch.midi)
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      /*
      const {setProps, note} = this.props
      this.note = note
      if (this.note<=40){
          this.notecont.clef = new music21.clef.Clef('bass', -1);
      } else
      if (this.note<=60){
          this.notecont.clef = new music21.clef.Clef('bass');
      } else
      if (this.note<=80){
          this.notecont.clef = new music21.clef.Clef('treble');
      } else
      if (this.note<=127){
          this.notecont.clef = new music21.clef.Clef('treble', 1);
      }
      //this.notecont.clef = new music21.clef.Clef('treble', 2);
      var svg = document.getElementsByClassName('streamHolding') 
      this.notecont.redrawDOM(svg)
      setProps({note: this.note})
      */
      //console.log(this.notecont.activeNote.pitch.midi)
      var element = this.refs.outer9;

      while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
      }

      this.setup();
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: "outer9",
        id: id
        /* onClick= {this.check.bind(this)} */
        ,
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          verticalAlign: 'top',
          display: "inline-block"
        }
      });
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


Edit.defaultProps = {
  note: 60,
  scale: 1
};
Edit.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  note: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * A label that will be printed when this component is rendered.
   */

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvRWRpdC5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm5vdGUiLCJub3RlY29udCIsIngiLCJ5Iiwic2NhbGUiLCJzZXRQcm9wcyIsInMiLCJtdXNpYzIxIiwiU3RyZWFtIiwibiIsIk5vdGUiLCJjbGVmIiwiQ2xlZiIsImFwcGVuZCIsImFjdGl2ZU5vdGUiLCJfZWxlbWVudHMiLCJyZW5kZXJPcHRpb25zIiwic2NhbGVGYWN0b3IiLCJkIiwiZWRpdGFibGVBY2NpZGVudGFsRE9NIiwiY2hpbGRyZW4iLCJzdHlsZSIsImZvbnRTaXplIiwiaGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImNoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwicmVmcyIsIm91dGVyOSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrIiwiYmluZCIsInNldHVwIiwiZXZlbnQiLCJwaXRjaCIsIm1pZGkiLCJzdmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZWRyYXdET00iLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsImxhc3RDaGlsZCIsImlkIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxJOzs7OztBQUVqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVmLDhC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QUssV0FBRyxFQUFDLFFBQVQ7QUFBa0IsVUFBRSxFQUFFQTtBQUFJO0FBQTFCO0FBQWlFLGFBQUssRUFBRTtBQUMzRUMsZ0JBQU0sRUFBRSxNQURtRTtBQUUzRUMsaUJBQU8sRUFBRSxDQUZrRTtBQUczRUMsc0JBQVksRUFBRSxDQUg2RDtBQUkzRTFCLHVCQUFhLEVBQUUsS0FKNEQ7QUFLM0VHLGlCQUFPLEVBQUU7QUFMa0U7QUFBeEUsUUFBUDtBQVFIOzs7O0VBcks2QndCLCtDOzs7QUF5S2xDdEQsSUFBSSxDQUFDdUQsWUFBTCxHQUFvQjtBQUFDcEQsTUFBSSxFQUFFLEVBQVA7QUFBV0ksT0FBSyxFQUFFO0FBQWxCLENBQXBCO0FBRUFQLElBQUksQ0FBQ3dELFNBQUwsR0FBaUI7QUFDYjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKRDtBQUtidkQsTUFBSSxFQUFFc0QsaURBQVMsQ0FBQ0UsTUFMSDtBQU1icEQsT0FBSyxFQUFFa0QsaURBQVMsQ0FBQ0UsTUFOSjs7QUFPYjs7OztBQUtBOzs7O0FBSUFuRCxVQUFRLEVBQUVpRCxpREFBUyxDQUFDRztBQWhCUCxDQUFqQixDIiwiZmlsZSI6ImVkODY1NmYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXVzaWMyMSBmcm9tICcuL211c2ljMjEuZGVidWcuanMnO1xyXG5pbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbm90ZTogNjAsXHJcbiAgICAgICAgICAgIG5vdGVjb250OiAnJyxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbiA9IG5ldyBtdXNpYzIxLm5vdGUuTm90ZShcIkYjXCIpO1xyXG4gICAgICAgIHZhciBrID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGsuYXBwZW5kKG4pO1xyXG4gICAgICAgIC8vay5hcHBlbmROZXdET00oKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHtub3RlLCBzY2FsZSwgc2V0UHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHMgPSBuZXcgbXVzaWMyMS5zdHJlYW0uU3RyZWFtKCk7XHJcbiAgICAgICAgY29uc3QgbiA9IG5ldyBtdXNpYzIxLm5vdGUuTm90ZShub3RlKTtcclxuICAgICAgICB2YXIgY2xlZiA9IDA7XHJcbiAgICAgICAgLy9uLnBpdGNoLm1pZGkgPSA0MFxyXG4gICAgICAgIGlmIChub3RlPD00MCl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTYwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChub3RlPD04MCl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChub3RlPD0xMjcpe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcy5jbGVmID0gY2xlZlxyXG4gICAgICAgIHMuYXBwZW5kKG4pO1xyXG4gICAgICAgIHMuYWN0aXZlTm90ZSA9IHMuX2VsZW1lbnRzWzFdXHJcblxyXG4gICAgICAgIC8vdmFyIGQyID0gczIuZWRpdGFibGVBY2NpZGVudGFsRE9NKCk7XHJcblxyXG4gICAgICAgIC8vdmFyIHMgPSBtdXNpYzIxLnRpbnlOb3RhdGlvbi5UaW55Tm90YXRpb24oaW5pdE5vdGUpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocylcclxuICAgICAgICAvL3MuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvL3MucmVuZGVyT3B0aW9ucy5uYWl2ZUhlaWdodCA9IDIwMFxyXG4gICAgICAgIC8vcy5yZW5kZXJPcHRpb25zLnRvcCA9IDEwMFxyXG4gICAgICAgIC8vcy5fbmFpdmVPZmZzZXQgPSAxMDBcclxuICAgICAgICBzLnJlbmRlck9wdGlvbnMuc2NhbGVGYWN0b3IgPSB7eDpzY2FsZSwgeTpzY2FsZX1cclxuICAgICAgICB2YXIgZCA9IHMuZWRpdGFibGVBY2NpZGVudGFsRE9NKCk7XHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5zdHlsZS5mb250U2l6ZSA9ICczNHB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc3R5bGUuZm9udFNpemUgPSAnMzRweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLmZvbnRTaXplID0gJzM0cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS5oZWlnaHQgPSAnNTFweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAndG9wJ1xyXG4gICAgICAgIC8vZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS5wYWRkaW5nVG9wID0gJzZweCdcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkWzBdLmNoaWxkTm9kZXNbMl0uY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1s4XS50YWdOYW1lcylcclxuICAgICAgICAvL2RbMF0uY2hpbGRyZW5bMl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vdGVjb250ID0gc1xyXG4gICAgICAgIC8vdGhpcy5ub3RlID0gZFswXS5jaGlsZE5vZGVzWzJdLmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbOF0udGFnTmFtZXNcclxuICAgICAgICAvL2NvbnNvbGUubG9nKClcclxuICAgICAgICAvL0NvbnRhaW5lci5hcHBlbmQoayk7XHJcbiAgICAgICAgLy9rLmFwcGVuZChDb250YWluZXIpJ1xyXG4gICAgICAgIC8vQ29udGFpbmVyLmlubmVySFRNTCA9IGRcclxuICAgICAgICAvL0NvbnRhaW5lci5hcHBlbmRDaGlsZChkKVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIGsgPSBuZXcgbXVzaWMyMS5rZXlib2FyZC5LZXlib2FyZCgpO1xyXG4gICAgICAgay5zdGFydFBpdGNoID0gMTg7XHJcbiAgICAgICBrLmVuZFBpdGNoID0gMzk7XHJcbiAgICAgICBrLm1hcmtDID0gdHJ1ZTtcclxuICAgICAgIGsuYXBwZW5kS2V5Ym9hcmQoQ29udGFpbmVyKTtcclxuICAgICovXHJcbiAgICAvL0NvbnRhaW5lci5hcHBlbmQoaylcclxuICAgIHZhciBjaGlsZCA9IGRbMF0uY2hpbGRyZW5bMV1cclxuICAgIGRbMF0ucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbiAgICBkWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gICAgZFswXS5jaGlsZHJlblswXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgIGRbMF0uY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luVG9wID0gJzM1cHgnO1xyXG4gICAgZFswXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoZFswXSk7XHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFwcGVuZENoaWxkKGQyWzBdKTtcclxuICAgICAgIC8vZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGQpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD04MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDIpO1xyXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlYW1Ib2xkaW5nJykgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udC5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgIHNldFByb3BzKHtub3RlOiB0aGlzLm5vdGV9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGkpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzLCBub3RlfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB0aGlzLm5vdGUgPSBub3RlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD04MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDIpO1xyXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlYW1Ib2xkaW5nJykgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udC5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgIHNldFByb3BzKHtub3RlOiB0aGlzLm5vdGV9KVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaSlcclxuICAgICAgICBcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmcy5vdXRlcjlcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXAoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdHtpZH09dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiByZWY9XCJvdXRlcjlcIiBpZD17aWR9IC8qIG9uQ2xpY2s9IHt0aGlzLmNoZWNrLmJpbmQodGhpcyl9ICovIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuRWRpdC5kZWZhdWx0UHJvcHMgPSB7bm90ZTogNjAsIHNjYWxlOiAxfTtcclxuXHJcbkVkaXQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBub3RlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
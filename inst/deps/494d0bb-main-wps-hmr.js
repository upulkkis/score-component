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
      movefun: 0,
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
          accidental_margin = _this$props.accidental_margin,
          setProps = _this$props.setProps;
      var s = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["stream"].Stream();
      var n = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["note"].Note(note); //n.addLyric('mf')

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

      var child1 = d[0].children[1];
      d[0].removeChild(child1);
      d[0].children[0].style.display = 'inline-block';
      d[0].children[0].style.verticalAlign = 'top';
      d[0].children[0].style.marginTop = accidental_margin;
      d[0].children[1].style.display = 'inline-block';
      var child0 = d[0].children[0];
      d[0].removeChild(child0);
      d[0].appendChild(child0);
      this.refs.outer9.appendChild(d[0]);
      this.refs.outer9.addEventListener("mousedown", this.check.bind(this), false);
      this.refs.outer9.addEventListener("touchstart", this.check.bind(this), false); //this.refs.outer9.draggable = true
      //this.refs.outer9.addEventListener("drag", this.drag_change.bind(this), false)
      //this.refs.outer9.appendChild(d2[0]);
      //d[0].appendChild(document.createElement('div'))
      //console.log(d)
      // The item (or items) to press and hold on

      var svg = document.getElementsByClassName('streamHolding');
      console.log(svg);
      var item = this.refs.outer9;
      var timerID;
      var counter = 0;
      var pressHoldEvent = new CustomEvent("pressHold"); // Increase or decreae value to adjust how long
      // one should keep pressing down before the pressHold
      // event fires

      var pressHoldDuration = 5; // Listening for the mouse and touch events    

      item.addEventListener("mousedown", pressingDown, false);
      item.addEventListener("mouseup", notPressingDown, false);
      item.addEventListener("mouseleave", notPressingDown, false);
      item.addEventListener("touchstart", pressingDown, false);
      item.addEventListener("touchend", notPressingDown, false); // Listening for our custom pressHold event

      item.addEventListener("pressHold", doSomething, false);
      var container = this.refs.outer9;
      var init_x = 0;
      var init_y = 0;

      function pressingDown(e) {
        // Start the timer
        requestAnimationFrame(timer);
        item.addEventListener("mousemove", change_note, false);
        item.addEventListener("touchmove", change_note, false);
        console.log(e, e.toString());

        if (e.toString() === "[object MouseEvent]") {
          init_x = e.x;
          init_y = e.y;
        } else if (e.toString() === "[object TouchEvent]") {
          init_x = e.touches[0].clientX;
          init_y = e.touches[0].clienty;
        }

        e.preventDefault();
        console.log("Pressing!");
      }

      function notPressingDown(e) {
        // Stop the timer
        cancelAnimationFrame(timerID);
        counter = 0;
        item.removeEventListener("mousemove", change_note, false);
        item.removeEventListener("touchmove", change_note, false);
        console.log("Not pressing!");
      } //
      // Runs at 60fps when you are pressing down
      //


      function timer() {
        console.log("Timer tick!");

        if (counter < pressHoldDuration) {
          timerID = requestAnimationFrame(timer);
          counter++;
        } else {
          console.log("Press threshold reached!");
          item.dispatchEvent(pressHoldEvent);
        }
      }

      function doSomething(e) {
        console.log("pressHold event fired!");
      }

      function change_note(e) {
        var x = 0;
        var y = 0;

        if (e.toString() === "[object MouseEvent]") {
          x = e.x;
          y = e.y;
        } else if (e.toString() === "[object TouchEvent]") {
          x = e.touches[0].clientX;
          y = e.touches[0].clienty;
        }

        if (x - init_x > 10) {
          console.log('forte');
        } else if (x - init_x < -10) {
          console.log('piano');
        } else {
          console.log('mezzo');
        }
      }
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
      //this.movefun = this.drag_change.bind(this)
      //this.refs.outer9.addEventListener("mousemove", this.movefun, false)
      //this.refs.outer9.addEventListener("mouseup", (function(event) {
      //    this.refs.outer9.removeEventListener("mousemove", movefun)
      //}).call(this), false)


      var svg = document.getElementsByClassName('streamHolding');
      this.notecont.redrawDOM(svg); //setProps({note: this.note})
      //console.log(this.notecont.activeNote.pitch.midi)
    }
  }, {
    key: "drag_change",
    value: function drag_change(event) {
      event.preventDefault();
      console.log(event);
      this.refs.outer9.addEventListener("mouseup", function (event) {
        this.refs.outer9.removeEventListener("mousemove", this.movefun);
      }.call(this), false);
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
  scale: 1.5,
  accidental_margin: 55
};
Edit.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  note: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  accidental_margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvRWRpdC5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmVmdW4iLCJub3RlIiwibm90ZWNvbnQiLCJ4IiwieSIsInNjYWxlIiwiYWNjaWRlbnRhbF9tYXJnaW4iLCJzZXRQcm9wcyIsInMiLCJtdXNpYzIxIiwiU3RyZWFtIiwibiIsIk5vdGUiLCJjbGVmIiwiQ2xlZiIsImFwcGVuZCIsImFjdGl2ZU5vdGUiLCJfZWxlbWVudHMiLCJyZW5kZXJPcHRpb25zIiwic2NhbGVGYWN0b3IiLCJkIiwiZWRpdGFibGVBY2NpZGVudGFsRE9NIiwiY2hpbGRyZW4iLCJzdHlsZSIsImZvbnRTaXplIiwiaGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImNoaWxkMSIsInJlbW92ZUNoaWxkIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImNoaWxkMCIsImFwcGVuZENoaWxkIiwicmVmcyIsIm91dGVyOSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVjayIsImJpbmQiLCJzdmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsInRpbWVySUQiLCJjb3VudGVyIiwicHJlc3NIb2xkRXZlbnQiLCJDdXN0b21FdmVudCIsInByZXNzSG9sZER1cmF0aW9uIiwicHJlc3NpbmdEb3duIiwibm90UHJlc3NpbmdEb3duIiwiZG9Tb21ldGhpbmciLCJjb250YWluZXIiLCJpbml0X3giLCJpbml0X3kiLCJlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjaGFuZ2Vfbm90ZSIsInRvU3RyaW5nIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnR5IiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50Iiwic2V0dXAiLCJldmVudCIsInBpdGNoIiwibWlkaSIsInJlZHJhd0RPTSIsImNhbGwiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsImxhc3RDaGlsZCIsImlkIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxJOzs7OztBQUVqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBRSxDQURBO0FBRVRDLFVBQUksRUFBRSxFQUZHO0FBR1RDLGNBQVEsRUFBRSxFQUhEO0FBSVRDLE9BQUMsRUFBRSxDQUpNO0FBS1RDLE9BQUMsRUFBRTtBQUxNLEtBQWI7QUFKZTtBQVlsQjs7Ozs0QkFFTztBQUNKOzs7Ozs7OztBQURJLHdCQVMrQyxLQUFLTixLQVRwRDtBQUFBLFVBU0dHLElBVEgsZUFTR0EsSUFUSDtBQUFBLFVBU1NJLEtBVFQsZUFTU0EsS0FUVDtBQUFBLFVBU2dCQyxpQkFUaEIsZUFTZ0JBLGlCQVRoQjtBQUFBLFVBU21DQyxRQVRuQyxlQVNtQ0EsUUFUbkM7QUFVSixVQUFNQyxDQUFDLEdBQUcsSUFBSUMsd0RBQUEsQ0FBZUMsTUFBbkIsRUFBVjtBQUNBLFVBQU1DLENBQUMsR0FBRyxJQUFJRixzREFBQSxDQUFhRyxJQUFqQixDQUFzQlgsSUFBdEIsQ0FBVixDQVhJLENBYUo7O0FBQ0EsVUFBSVksSUFBSSxHQUFHLENBQVgsQ0FkSSxDQWVKOztBQUNBLFVBQUlaLElBQUksSUFBRSxFQUFWLEVBQWE7QUFDVFks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QUFHLEVBQUMsUUFBVDtBQUFrQixVQUFFLEVBQUVBO0FBQUk7QUFBMUI7QUFBaUUsYUFBSyxFQUFFO0FBQzNFQyxnQkFBTSxFQUFFLE1BRG1FO0FBRTNFQyxpQkFBTyxFQUFFLENBRmtFO0FBRzNFQyxzQkFBWSxFQUFFLENBSDZEO0FBSTNFdEQsdUJBQWEsRUFBRSxLQUo0RDtBQUszRUcsaUJBQU8sRUFBRTtBQUxrRTtBQUF4RSxRQUFQO0FBUUg7Ozs7RUFsUzZCb0QsK0M7OztBQXNTbENwRixJQUFJLENBQUNxRixZQUFMLEdBQW9CO0FBQUNqRixNQUFJLEVBQUUsRUFBUDtBQUFXSSxPQUFLLEVBQUUsR0FBbEI7QUFBdUJDLG1CQUFpQixFQUFFO0FBQTFDLENBQXBCO0FBRUFULElBQUksQ0FBQ3NGLFNBQUwsR0FBaUI7QUFDYjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKRDtBQUticEYsTUFBSSxFQUFFbUYsaURBQVMsQ0FBQ0UsTUFMSDtBQU1iakYsT0FBSyxFQUFFK0UsaURBQVMsQ0FBQ0UsTUFOSjtBQU9iaEYsbUJBQWlCLEVBQUU4RSxpREFBUyxDQUFDRSxNQVBoQjs7QUFRYjs7OztBQUtBOzs7O0FBSUEvRSxVQUFRLEVBQUU2RSxpREFBUyxDQUFDRztBQWpCUCxDQUFqQixDIiwiZmlsZSI6IjQ5NGQwYmItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXVzaWMyMSBmcm9tICcuL211c2ljMjEuZGVidWcuanMnO1xyXG5pbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbW92ZWZ1bjogMCxcclxuICAgICAgICAgICAgbm90ZTogNjAsXHJcbiAgICAgICAgICAgIG5vdGVjb250OiAnJyxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbiA9IG5ldyBtdXNpYzIxLm5vdGUuTm90ZShcIkYjXCIpO1xyXG4gICAgICAgIHZhciBrID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGsuYXBwZW5kKG4pO1xyXG4gICAgICAgIC8vay5hcHBlbmROZXdET00oKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHtub3RlLCBzY2FsZSwgYWNjaWRlbnRhbF9tYXJnaW4sIHNldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBzID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGNvbnN0IG4gPSBuZXcgbXVzaWMyMS5ub3RlLk5vdGUobm90ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9uLmFkZEx5cmljKCdtZicpXHJcbiAgICAgICAgdmFyIGNsZWYgPSAwO1xyXG4gICAgICAgIC8vbi5waXRjaC5taWRpID0gNDBcclxuICAgICAgICBpZiAobm90ZTw9NDApe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJywgLTEpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChub3RlPD02MCl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9ODApe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMuY2xlZiA9IGNsZWZcclxuICAgICAgICBzLmFwcGVuZChuKTtcclxuICAgICAgICBzLmFjdGl2ZU5vdGUgPSBzLl9lbGVtZW50c1sxXVxyXG5cclxuICAgICAgICAvL3ZhciBkMiA9IHMyLmVkaXRhYmxlQWNjaWRlbnRhbERPTSgpO1xyXG5cclxuICAgICAgICAvL3ZhciBzID0gbXVzaWMyMS50aW55Tm90YXRpb24uVGlueU5vdGF0aW9uKGluaXROb3RlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcbiAgICAgICAgLy9zLmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocylcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zLnJlbmRlck9wdGlvbnMubmFpdmVIZWlnaHQgPSAyMDBcclxuICAgICAgICAvL3MucmVuZGVyT3B0aW9ucy50b3AgPSAxMDBcclxuICAgICAgICAvL3MuX25haXZlT2Zmc2V0ID0gMTAwXHJcbiAgICAgICAgcy5yZW5kZXJPcHRpb25zLnNjYWxlRmFjdG9yID0ge3g6c2NhbGUsIHk6c2NhbGV9XHJcbiAgICAgICAgdmFyIGQgPSBzLmVkaXRhYmxlQWNjaWRlbnRhbERPTSgpO1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc3R5bGUuZm9udFNpemUgPSAnMzRweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmZvbnRTaXplID0gJzM0cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS5mb250U2l6ZSA9ICczNHB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUuaGVpZ2h0ID0gJzUxcHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgICAgICAvL2RbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUucGFkZGluZ1RvcCA9ICc2cHgnXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZFswXS5jaGlsZE5vZGVzWzJdLmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbOF0udGFnTmFtZXMpXHJcbiAgICAgICAgLy9kWzBdLmNoaWxkcmVuWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgIC8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udCA9IHNcclxuICAgICAgICAvL3RoaXMubm90ZSA9IGRbMF0uY2hpbGROb2Rlc1syXS5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzhdLnRhZ05hbWVzXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygpXHJcbiAgICAgICAgLy9Db250YWluZXIuYXBwZW5kKGspO1xyXG4gICAgICAgIC8vay5hcHBlbmQoQ29udGFpbmVyKSdcclxuICAgICAgICAvL0NvbnRhaW5lci5pbm5lckhUTUwgPSBkXHJcbiAgICAgICAgLy9Db250YWluZXIuYXBwZW5kQ2hpbGQoZClcclxuICAgICAgICAvKlxyXG4gICAgICAgIHZhciBrID0gbmV3IG11c2ljMjEua2V5Ym9hcmQuS2V5Ym9hcmQoKTtcclxuICAgICAgIGsuc3RhcnRQaXRjaCA9IDE4O1xyXG4gICAgICAgay5lbmRQaXRjaCA9IDM5O1xyXG4gICAgICAgay5tYXJrQyA9IHRydWU7XHJcbiAgICAgICBrLmFwcGVuZEtleWJvYXJkKENvbnRhaW5lcik7XHJcbiAgICAqL1xyXG4gICAgLy9Db250YWluZXIuYXBwZW5kKGspXHJcbiAgICB2YXIgY2hpbGQxID0gZFswXS5jaGlsZHJlblsxXVxyXG4gICAgZFswXS5yZW1vdmVDaGlsZChjaGlsZDEpXHJcbiAgICBkWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gICAgZFswXS5jaGlsZHJlblswXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgIGRbMF0uY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luVG9wID0gYWNjaWRlbnRhbF9tYXJnaW47XHJcbiAgICBkWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gICAgdmFyIGNoaWxkMCA9IGRbMF0uY2hpbGRyZW5bMF1cclxuICAgIGRbMF0ucmVtb3ZlQ2hpbGQoY2hpbGQwKVxyXG4gICAgZFswXS5hcHBlbmRDaGlsZChjaGlsZDApXHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmFwcGVuZENoaWxkKGRbMF0pO1xyXG5cclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmRyYWdnYWJsZSA9IHRydWVcclxuXHJcbiAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgdGhpcy5kcmFnX2NoYW5nZS5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hcHBlbmRDaGlsZChkMlswXSk7XHJcbiAgICAgICAvL2RbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkKVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGl0ZW0gKG9yIGl0ZW1zKSB0byBwcmVzcyBhbmQgaG9sZCBvblxyXG4gICAgICAgICAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKSBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN2ZylcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5yZWZzLm91dGVyOVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVySUQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlc3NIb2xkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJwcmVzc0hvbGRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbmNyZWFzZSBvciBkZWNyZWFlIHZhbHVlIHRvIGFkanVzdCBob3cgbG9uZ1xyXG4gICAgICAgICAgICAgICAgLy8gb25lIHNob3VsZCBrZWVwIHByZXNzaW5nIGRvd24gYmVmb3JlIHRoZSBwcmVzc0hvbGRcclxuICAgICAgICAgICAgICAgIC8vIGV2ZW50IGZpcmVzXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlc3NIb2xkRHVyYXRpb24gPSA1O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuaW5nIGZvciB0aGUgbW91c2UgYW5kIHRvdWNoIGV2ZW50cyAgICBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbm90UHJlc3NpbmdEb3duLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG5vdFByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBwcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIG5vdFByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC8vIExpc3RlbmluZyBmb3Igb3VyIGN1c3RvbSBwcmVzc0hvbGQgZXZlbnRcclxuICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJwcmVzc0hvbGRcIiwgZG9Tb21ldGhpbmcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLnJlZnMub3V0ZXI5XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgbGV0IGluaXRfeCA9IDBcclxuICAgICAgICAgICAgICAgICBsZXQgaW5pdF95ID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJlc3NpbmdEb3duKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUsIGUudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIGlmKGUudG9TdHJpbmcoKT09PVwiW29iamVjdCBNb3VzZUV2ZW50XVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3ggPSBlLnhcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3kgPSBlLnlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBcclxuICAgICAgICAgICAgICAgIGlmKGUudG9TdHJpbmcoKT09PVwiW29iamVjdCBUb3VjaEV2ZW50XVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3ggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeSA9IGUudG91Y2hlc1swXS5jbGllbnR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByZXNzaW5nIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG5vdFByZXNzaW5nRG93bihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7ICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBwcmVzc2luZyFcIik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgLy8gUnVucyBhdCA2MGZwcyB3aGVuIHlvdSBhcmUgcHJlc3NpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0aW1lcigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVyIHRpY2shXCIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyIDwgcHJlc3NIb2xkRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVySUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByZXNzIHRocmVzaG9sZCByZWFjaGVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlzcGF0Y2hFdmVudChwcmVzc0hvbGRFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvU29tZXRoaW5nKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXNzSG9sZCBldmVudCBmaXJlZCFcIik7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2Vfbm90ZShlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGUudG9TdHJpbmcoKT09PVwiW29iamVjdCBNb3VzZUV2ZW50XVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IGUueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gZS55XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGUudG9TdHJpbmcoKT09PVwiW29iamVjdCBUb3VjaEV2ZW50XVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBlLnRvdWNoZXNbMF0uY2xpZW50eVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlmICgoeCAtIGluaXRfeCkgPiAxMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvcnRlJylcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHggLSBpbml0X3gpIDwgLTEwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGlhbm8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWV6em8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD04MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDIpO1xyXG4gICAgICAgIC8vdGhpcy5tb3ZlZnVuID0gdGhpcy5kcmFnX2NoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlZnVuLCBmYWxzZSlcclxuICAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gICAgdGhpcy5yZWZzLm91dGVyOS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVmdW4pXHJcbiAgICAgICAgLy99KS5jYWxsKHRoaXMpLCBmYWxzZSlcclxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQucmVkcmF3RE9NKHN2ZylcclxuXHJcblxyXG4gICAgICBcclxuICAgICAgICAvL3NldFByb3BzKHtub3RlOiB0aGlzLm5vdGV9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGkpXHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ19jaGFuZ2UoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudClcclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm91dGVyOS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW92ZWZ1bilcclxuICAgICAgICAgICAgfSkuY2FsbCh0aGlzKSwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHMsIG5vdGV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGVcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD00MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD02MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTgwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD0xMjcpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMik7XHJcbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKSBcclxuICAgICAgICB0aGlzLm5vdGVjb250LnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyOVxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkfT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyOVwiIGlkPXtpZH0gLyogb25DbGljaz0ge3RoaXMuY2hlY2suYmluZCh0aGlzKX0gKi8gc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5FZGl0LmRlZmF1bHRQcm9wcyA9IHtub3RlOiA2MCwgc2NhbGU6IDEuNSwgYWNjaWRlbnRhbF9tYXJnaW46IDU1fTtcclxuXHJcbkVkaXQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBub3RlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBhY2NpZGVudGFsX21hcmdpbjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
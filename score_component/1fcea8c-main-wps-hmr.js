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
      d[0].children[0].children[0].style.fontSize = '14px';
      d[0].children[0].children[1].style.fontSize = '14px';
      d[0].children[0].children[2].style.fontSize = '14px';
      d[0].children[0].children[2].style.height = '25px';
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
      d[0].removeChild(child0); //d[0].appendChild(child0)

      var div = document.createElement('div');
      div.style.verticalAlign = 'top';
      div.style.display = 'inline-block';
      div.appendChild(d[0]);
      this.refs.outer9.appendChild(div);
      this.refs.outer9.appendChild(child0);
      var svg = document.getElementsByClassName('streamHolding');
      console.log(svg);
      var item = this.refs.outer9.firstChild;
      var accs = this.refs.outer9.getElementsByClassName('accidentalToolbar')[0];
      console.log(this.refs.outer9);
      /*
      item = this.refs.outer9.firstChild.firstChild
      this.refs.outer9.firstChild.removeChild(item)
      let div = document.createElement('div');
      this.refs.outer9.firstChild.appendChild(div)
      this.refs.outer9.firstChild.firstChild.appendChild(item)
      console.log(item)
       item = this.refs.outer9.firstChild.firstChild
      */

      this.refs.outer9.addEventListener("mousedown", this.refresh.bind(this), false);
      this.refs.outer9.addEventListener("touchstart", this.refresh.bind(this), false);
      item.addEventListener("mousedown", this.check.bind(this), false);
      item.addEventListener("touchstart", this.check.bind(this), false); //this.refs.outer9.draggable = true
      //this.refs.outer9.addEventListener("drag", this.drag_change.bind(this), false)
      //this.refs.outer9.appendChild(d2[0]);
      //d[0].appendChild(document.createElement('div'))
      //console.log(d)
      // The item (or items) to press and hold on

      var timerID;
      var counter = 0;
      var pressHoldEvent = new CustomEvent("pressHold"); // Increase or decreae value to adjust how long
      // one should keep pressing down before the pressHold
      // event fires

      var pressHoldDuration = 5; //Threshold of mouse movement

      var changethreshold = 10; // Listening for the mouse and touch events    

      item.addEventListener("mousedown", pressingDown, false);
      item.addEventListener("mouseup", notPressingDown, false);
      item.addEventListener("mouseleave", notPressingDownRel, false);
      item.addEventListener("touchstart", pressingDown, false);
      item.addEventListener("touchend", notPressingDown, false); // Listening for our custom pressHold event

      item.addEventListener("pressHold", doSomething, false);
      var container = this.refs.outer9;
      var init_x = 0;
      var init_y = 0;
      var dynamics = 'mf'; // Register touch point when pressing down

      function pressingDown(e) {
        // Start the timer
        requestAnimationFrame(timer);
        item.addEventListener("mousemove", change_note, false);
        item.addEventListener("touchmove", change_note, false); //console.log(e, e.toString())

        if (e.toString() === "[object MouseEvent]") {
          init_x = e.x;
          init_y = e.y;
        } else if (e.toString() === "[object TouchEvent]") {
          init_x = e.touches[0].clientX;
          init_y = e.touches[0].clientY;
        }

        e.preventDefault(); //console.log("Pressing!");
      } //Send values on click release


      function notPressingDown(e) {
        // Stop the timer
        cancelAnimationFrame(timerID);
        counter = 0;
        item.removeEventListener("mousemove", change_note, false);
        item.removeEventListener("touchmove", change_note, false);
        var note_output = s.activeNote.pitch.midi; //console.log(note_output, dynamics);

        setProps({
          note: note_output,
          dyn: dynamics
        });
      }

      function notPressingDownRel(e) {
        // Stop the timer
        cancelAnimationFrame(timerID);
        counter = 0;
        item.removeEventListener("mousemove", change_note, false);
        item.removeEventListener("touchmove", change_note, false);
      } //
      // Runs at 60fps when you are pressing down
      //


      function timer() {
        //console.log("Timer tick!");
        if (counter < pressHoldDuration) {
          timerID = requestAnimationFrame(timer);
          counter++;
        } else {
          //console.log("Press threshold reached!");
          item.dispatchEvent(pressHoldEvent);
        }
      } // PRgrammatically click buttons and


      var buttons = document.getElementsByClassName('accidentalToolbar')[0].getElementsByTagName('button');

      function doSomething(e) {
        dynamics = 'mf';
        buttons[1].click();
        s.redrawDOM(svg); //console.log("pressHold event fired!");           
      } // Check mouse movement and change accidentals and dynamics


      function change_note(e) {
        var x = 0;
        var y = 0;

        if (e.toString() === "[object MouseEvent]") {
          x = e.x;
          y = e.y;
        } else if (e.toString() === "[object TouchEvent]") {
          x = e.touches[0].clientX;
          y = e.touches[0].clientY;
        }

        if (x - init_x > changethreshold) {
          dynamics = 'f';
        } else if (x - init_x < -changethreshold) {
          dynamics = 'p';
        } else {
          dynamics = 'mf';
        }

        if (y - init_y > changethreshold) {
          buttons[0].click();
          s.redrawDOM(svg);
        } else if (y - init_y < -changethreshold) {
          buttons[2].click();
          s.redrawDOM(svg);
        } else {
          buttons[1].click();
          s.redrawDOM(svg);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setup();
    }
  }, {
    key: "refresh",
    value: function refresh(e) {
      var svg = this.refs.outer9.getElementsByTagName('svg');
      this.notecont.redrawDOM(svg);
      this.setProps({
        note: this.notecont.activeNote.pitch.midi
      });
    } //Change clef according to note value

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
      //var svg = document.getElementsByClassName('streamHolding') 


      this.setProps({
        note: this.notecont.activeNote.pitch.midi
      });
      var svg = this.refs.outer9.getElementsByTagName('svg');
      this.notecont.redrawDOM(svg); //setProps({note: this.note})
      //console.log(this.notecont.activeNote.pitch.midi)
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
  dyn: 'mf',
  scale: 1.5,
  accidental_margin: 55
};
Edit.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  note: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  dyn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvRWRpdC5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmVmdW4iLCJub3RlIiwibm90ZWNvbnQiLCJ4IiwieSIsInNjYWxlIiwiYWNjaWRlbnRhbF9tYXJnaW4iLCJzZXRQcm9wcyIsInMiLCJtdXNpYzIxIiwiU3RyZWFtIiwibiIsIk5vdGUiLCJjbGVmIiwiQ2xlZiIsImFwcGVuZCIsImFjdGl2ZU5vdGUiLCJfZWxlbWVudHMiLCJyZW5kZXJPcHRpb25zIiwic2NhbGVGYWN0b3IiLCJkIiwiZWRpdGFibGVBY2NpZGVudGFsRE9NIiwiY2hpbGRyZW4iLCJzdHlsZSIsImZvbnRTaXplIiwiaGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImNoaWxkMSIsInJlbW92ZUNoaWxkIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImNoaWxkMCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVmcyIsIm91dGVyOSIsInN2ZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImZpcnN0Q2hpbGQiLCJhY2NzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2giLCJiaW5kIiwiY2hlY2siLCJ0aW1lcklEIiwiY291bnRlciIsInByZXNzSG9sZEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwcmVzc0hvbGREdXJhdGlvbiIsImNoYW5nZXRocmVzaG9sZCIsInByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93blJlbCIsImRvU29tZXRoaW5nIiwiY29udGFpbmVyIiwiaW5pdF94IiwiaW5pdF95IiwiZHluYW1pY3MiLCJlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjaGFuZ2Vfbm90ZSIsInRvU3RyaW5nIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub3RlX291dHB1dCIsInBpdGNoIiwibWlkaSIsImR5biIsImRpc3BhdGNoRXZlbnQiLCJidXR0b25zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGljayIsInJlZHJhd0RPTSIsInNldHVwIiwiZXZlbnQiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsImxhc3RDaGlsZCIsImlkIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxJOzs7OztBQUVqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBRSxDQURBO0FBRVRDLFVBQUksRUFBRSxFQUZHO0FBR1RDLGNBQVEsRUFBRSxFQUhEO0FBSVRDLE9BQUMsRUFBRSxDQUpNO0FBS1RDLE9BQUMsRUFBRTtBQUxNLEtBQWI7QUFKZTtBQVlsQjs7Ozs0QkFFTztBQUNKOzs7Ozs7OztBQURJLHdCQVMrQyxLQUFLTixLQVRwRDtBQUFBLFVBU0dHLElBVEgsZUFTR0EsSUFUSDtBQUFBLFVBU1NJLEtBVFQsZUFTU0EsS0FUVDtBQUFBLFVBU2dCQyxpQkFUaEIsZUFTZ0JBLGlCQVRoQjtBQUFBLFVBU21DQyxRQVRuQyxlQVNtQ0EsUUFUbkM7QUFVSixVQUFNQyxDQUFDLEdBQUcsSUFBSUMsd0RBQUEsQ0FBZUMsTUFB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SDs7OztFQTFWNkJnRSwrQzs7O0FBOFZsQ2hHLElBQUksQ0FBQ2lHLFlBQUwsR0FBb0I7QUFBQzdGLE1BQUksRUFBRSxFQUFQO0FBQVc0RSxLQUFHLEVBQUUsSUFBaEI7QUFBc0J4RSxPQUFLLEVBQUUsR0FBN0I7QUFBa0NDLG1CQUFpQixFQUFFO0FBQXJELENBQXBCO0FBRUFULElBQUksQ0FBQ2tHLFNBQUwsR0FBaUI7QUFDYjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKRDtBQUtiaEcsTUFBSSxFQUFFK0YsaURBQVMsQ0FBQ0UsTUFMSDtBQU1ickIsS0FBRyxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFORjtBQU9iNUYsT0FBSyxFQUFFMkYsaURBQVMsQ0FBQ0UsTUFQSjtBQVFiNUYsbUJBQWlCLEVBQUUwRixpREFBUyxDQUFDRSxNQVJoQjs7QUFTYjs7OztBQUtBOzs7O0FBSUEzRixVQUFRLEVBQUV5RixpREFBUyxDQUFDRztBQWxCUCxDQUFqQixDIiwiZmlsZSI6IjFmY2VhOGMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXVzaWMyMSBmcm9tICcuL211c2ljMjEuZGVidWcuanMnO1xyXG5pbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbW92ZWZ1bjogMCxcclxuICAgICAgICAgICAgbm90ZTogNjAsXHJcbiAgICAgICAgICAgIG5vdGVjb250OiAnJyxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbiA9IG5ldyBtdXNpYzIxLm5vdGUuTm90ZShcIkYjXCIpO1xyXG4gICAgICAgIHZhciBrID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGsuYXBwZW5kKG4pO1xyXG4gICAgICAgIC8vay5hcHBlbmROZXdET00oKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHtub3RlLCBzY2FsZSwgYWNjaWRlbnRhbF9tYXJnaW4sIHNldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBzID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGxldCBuID0gbmV3IG11c2ljMjEubm90ZS5Ob3RlKG5vdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vbi5hZGRMeXJpYygnbWYnKVxyXG4gICAgICAgIHZhciBjbGVmID0gMDtcclxuICAgICAgICAvL24ucGl0Y2gubWlkaSA9IDQwXHJcbiAgICAgICAgaWYgKG5vdGU8PTQwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9NjApe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTgwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTEyNyl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzLmNsZWYgPSBjbGVmXHJcbiAgICAgICAgcy5hcHBlbmQobik7XHJcbiAgICAgICAgcy5hY3RpdmVOb3RlID0gcy5fZWxlbWVudHNbMV1cclxuXHJcbiAgICAgICAgLy92YXIgZDIgPSBzMi5lZGl0YWJsZUFjY2lkZW50YWxET00oKTtcclxuXHJcbiAgICAgICAgLy92YXIgcyA9IG11c2ljMjEudGlueU5vdGF0aW9uLlRpbnlOb3RhdGlvbihpbml0Tm90ZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIC8vcy5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcy5yZW5kZXJPcHRpb25zLm5haXZlSGVpZ2h0ID0gMjAwXHJcbiAgICAgICAgLy9zLnJlbmRlck9wdGlvbnMudG9wID0gMTAwXHJcbiAgICAgICAgLy9zLl9uYWl2ZU9mZnNldCA9IDEwMFxyXG4gICAgICAgIHMucmVuZGVyT3B0aW9ucy5zY2FsZUZhY3RvciA9IHt4OnNjYWxlLCB5OnNjYWxlfVxyXG4gICAgICAgIHZhciBkID0gcy5lZGl0YWJsZUFjY2lkZW50YWxET00oKTtcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUuZm9udFNpemUgPSAnMTRweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLmhlaWdodCA9ICcyNXB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUudmVydGljYWxBbGlnbiA9ICd0b3AnXHJcbiAgICAgICAgLy9kWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLnBhZGRpbmdUb3AgPSAnNnB4J1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRbMF0uY2hpbGROb2Rlc1syXS5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzhdLnRhZ05hbWVzKVxyXG4gICAgICAgIC8vZFswXS5jaGlsZHJlblsyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgICAvL2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQgPSBzXHJcbiAgICAgICAgLy90aGlzLm5vdGUgPSBkWzBdLmNoaWxkTm9kZXNbMl0uY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1s4XS50YWdOYW1lc1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKTtcclxuICAgICAgICAvL2suYXBwZW5kKENvbnRhaW5lciknXHJcbiAgICAgICAgLy9Db250YWluZXIuaW5uZXJIVE1MID0gZFxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZENoaWxkKGQpXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgayA9IG5ldyBtdXNpYzIxLmtleWJvYXJkLktleWJvYXJkKCk7XHJcbiAgICAgICBrLnN0YXJ0UGl0Y2ggPSAxODtcclxuICAgICAgIGsuZW5kUGl0Y2ggPSAzOTtcclxuICAgICAgIGsubWFya0MgPSB0cnVlO1xyXG4gICAgICAgay5hcHBlbmRLZXlib2FyZChDb250YWluZXIpO1xyXG4gICAgKi9cclxuICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKVxyXG4gICAgdmFyIGNoaWxkMSA9IGRbMF0uY2hpbGRyZW5bMV1cclxuICAgIGRbMF0ucmVtb3ZlQ2hpbGQoY2hpbGQxKVxyXG4gICAgZFswXS5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRbMF0uY2hpbGRyZW5bMF0uc3R5bGUudmVydGljYWxBbGlnbiA9ICd0b3AnXHJcbiAgICBkWzBdLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpblRvcCA9IGFjY2lkZW50YWxfbWFyZ2luO1xyXG4gICAgZFswXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIHZhciBjaGlsZDAgPSBkWzBdLmNoaWxkcmVuWzBdXHJcbiAgICBkWzBdLnJlbW92ZUNoaWxkKGNoaWxkMClcclxuICAgIC8vZFswXS5hcHBlbmRDaGlsZChjaGlsZDApXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkWzBdKVxyXG5cclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoY2hpbGQwKTtcclxuXHJcbiAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpIFxyXG4gICAgICAgY29uc29sZS5sb2coc3ZnKVxyXG4gICAgICAgbGV0IGl0ZW0gPSB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGRcclxuICAgICAgIHZhciBhY2NzID0gIHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjaWRlbnRhbFRvb2xiYXInKVswXVxyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcy5vdXRlcjkpXHJcbiAgICAgICAvKlxyXG4gICAgICAgaXRlbSA9IHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5maXJzdENoaWxkXHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoaXRlbSlcclxuICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChpdGVtKVxyXG4gICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICBpdGVtID0gdGhpcy5yZWZzLm91dGVyOS5maXJzdENoaWxkLmZpcnN0Q2hpbGRcclxuICAgICAgICovXHJcblxyXG4gICAgICB0aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICB0aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBmYWxzZSlcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgXHJcbiAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuZHJhZ2dhYmxlID0gdHJ1ZVxyXG5cclxuICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCB0aGlzLmRyYWdfY2hhbmdlLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFwcGVuZENoaWxkKGQyWzBdKTtcclxuICAgICAgIC8vZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGQpXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgaXRlbSAob3IgaXRlbXMpIHRvIHByZXNzIGFuZCBob2xkIG9uXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVySUQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlc3NIb2xkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJwcmVzc0hvbGRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbmNyZWFzZSBvciBkZWNyZWFlIHZhbHVlIHRvIGFkanVzdCBob3cgbG9uZ1xyXG4gICAgICAgICAgICAgICAgLy8gb25lIHNob3VsZCBrZWVwIHByZXNzaW5nIGRvd24gYmVmb3JlIHRoZSBwcmVzc0hvbGRcclxuICAgICAgICAgICAgICAgIC8vIGV2ZW50IGZpcmVzXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlc3NIb2xkRHVyYXRpb24gPSA1O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vVGhyZXNob2xkIG9mIG1vdXNlIG1vdmVtZW50XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhbmdldGhyZXNob2xkID0gMTA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW5pbmcgZm9yIHRoZSBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzICAgIFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBub3RQcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbm90UHJlc3NpbmdEb3duUmVsLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgbm90UHJlc3NpbmdEb3duLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgLy8gTGlzdGVuaW5nIGZvciBvdXIgY3VzdG9tIHByZXNzSG9sZCBldmVudFxyXG4gICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInByZXNzSG9sZFwiLCBkb1NvbWV0aGluZywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMucmVmcy5vdXRlcjlcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICBsZXQgaW5pdF94ID0gMFxyXG4gICAgICAgICAgICAgICAgIGxldCBpbml0X3kgPSAwXHJcbiAgICAgICAgICAgICAgICAgbGV0IGR5bmFtaWNzID0gJ21mJ1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdG91Y2ggcG9pbnQgd2hlbiBwcmVzc2luZyBkb3duXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcmVzc2luZ0Rvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLCBlLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgTW91c2VFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF94ID0gZS54XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF95ID0gZS55XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgVG91Y2hFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF94ID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlByZXNzaW5nIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NlbmQgdmFsdWVzIG9uIGNsaWNrIHJlbGVhc2VcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG5vdFByZXNzaW5nRG93bihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7ICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm90ZV9vdXRwdXQgPSBzLmFjdGl2ZU5vdGUucGl0Y2gubWlkaVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobm90ZV9vdXRwdXQsIGR5bmFtaWNzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7bm90ZTogbm90ZV9vdXRwdXQsIGR5bjpkeW5hbWljc30pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG5vdFByZXNzaW5nRG93blJlbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7ICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAvLyBSdW5zIGF0IDYwZnBzIHdoZW4geW91IGFyZSBwcmVzc2luZyBkb3duXHJcbiAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRpbWVyKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUaW1lciB0aWNrIVwiKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlciA8IHByZXNzSG9sZER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lcklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlByZXNzIHRocmVzaG9sZCByZWFjaGVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlzcGF0Y2hFdmVudChwcmVzc0hvbGRFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBQUmdyYW1tYXRpY2FsbHkgY2xpY2sgYnV0dG9ucyBhbmRcclxuICAgICAgICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjaWRlbnRhbFRvb2xiYXInKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9Tb21ldGhpbmcoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ21mJ1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMV0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJlc3NIb2xkIGV2ZW50IGZpcmVkIVwiKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIG1vdXNlIG1vdmVtZW50IGFuZCBjaGFuZ2UgYWNjaWRlbnRhbHMgYW5kIGR5bmFtaWNzXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZV9ub3RlKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgTW91c2VFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBlLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGUueVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgVG91Y2hFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh4IC0gaW5pdF94KSA+IGNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ2YnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoeCAtIGluaXRfeCkgPCAtY2hhbmdldGhyZXNob2xkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY3MgPSAncCdcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljcyA9ICdtZidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKHkgLSBpbml0X3kpID4gY2hhbmdldGhyZXNob2xkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zWzBdLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCh5IC0gaW5pdF95KSA8IC1jaGFuZ2V0aHJlc2hvbGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zWzJdLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1sxXS5jbGljaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXAoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goZSl7XHJcbiAgICAgICAgdmFyIHN2ZyA9IHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZycpIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICB0aGlzLnNldFByb3BzKHtub3RlOiB0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaX0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9DaGFuZ2UgY2xlZiBhY2NvcmRpbmcgdG8gbm90ZSB2YWx1ZVxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD04MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDIpO1xyXG4gICAgICAgIC8vdGhpcy5tb3ZlZnVuID0gdGhpcy5kcmFnX2NoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlZnVuLCBmYWxzZSlcclxuICAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gICAgdGhpcy5yZWZzLm91dGVyOS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVmdW4pXHJcbiAgICAgICAgLy99KS5jYWxsKHRoaXMpLCBmYWxzZSlcclxuICAgICAgICAvL3ZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlYW1Ib2xkaW5nJykgXHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyh7bm90ZTogdGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGl9KVxyXG4gICAgICAgIHZhciBzdmcgPSB0aGlzLnJlZnMub3V0ZXI5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKSBcclxuICAgICAgICB0aGlzLm5vdGVjb250LnJlZHJhd0RPTShzdmcpXHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgICAgLy9zZXRQcm9wcyh7bm90ZTogdGhpcy5ub3RlfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wcywgbm90ZX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTQwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJywgLTEpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTYwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9ODApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTEyNyl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAyKTtcclxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICBzZXRQcm9wcyh7bm90ZTogdGhpcy5ub3RlfSlcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXI5XHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwKClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3R7aWR9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPVwib3V0ZXI5XCIgaWQ9e2lkfSAvKiBvbkNsaWNrPSB7dGhpcy5jaGVjay5iaW5kKHRoaXMpfSAqLyBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkVkaXQuZGVmYXVsdFByb3BzID0ge25vdGU6IDYwLCBkeW46ICdtZicsIHNjYWxlOiAxLjUsIGFjY2lkZW50YWxfbWFyZ2luOiA1NX07XHJcblxyXG5FZGl0LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbm90ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGR5bjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYWNjaWRlbnRhbF9tYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
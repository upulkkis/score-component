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
          hide_toolbar = _this$props.hide_toolbar,
          setProps = _this$props.setProps;
      var s = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["stream"].Stream();
      var n = new _music21_debug_js__WEBPACK_IMPORTED_MODULE_0__["note"].Note(note); //n.lyrics = new music21.note.Lyric('mf')

      n.addLyric('');
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
      s.activeNote = s._elements[1];
      s.activeNote.lyrics[0].style.fontSize = 24;
      s.activeNote.lyrics[0].style.fillStyle = 'rgba(0,0,0,0.3)';
      s.activeNote.lyrics[0].style.transform = 'translate(20px,20px)';
      s.activeNote.lyrics[0].y = 20; //var d2 = s2.editableAccidentalDOM();
      //console.log(s)
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
      //console.log(s)
      //txt[0].y[0].value = 60
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
      var svg = document.getElementsByClassName('streamHolding'); //console.log(svg)

      var item = this.refs.outer9.firstChild;
      var accs = this.refs.outer9.getElementsByClassName('accidentalToolbar')[0];

      if (hide_toolbar) {
        accs.style.display = 'none';
      } //console.log(this.refs.outer9)

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
        s.activeNote.lyrics[0].text = '';
        var note_output = s.activeNote.pitch.midi;
        s.redrawDOM(svg); //console.log(note_output, dynamics);

        if (setProps) setProps({
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
          s.activeNote.lyrics[0].text = 'f';
          s.redrawDOM(svg);
          dynamics = 'f';
        } else if (x - init_x < -changethreshold) {
          s.activeNote.lyrics[0].text = 'p';
          s.redrawDOM(svg);
          dynamics = 'p';
        } else {
          s.activeNote.lyrics[0].text = 'mf';
          s.redrawDOM(svg);
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
      var setProps = this.props.setProps;
      var svg = this.refs.outer9.getElementsByTagName('svg');
      this.notecont.redrawDOM(svg);
      if (setProps) setProps({
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


      if (setProps) setProps({
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
  accidental_margin: 55,
  hide_toolbar: true
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
  hide_toolbar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvRWRpdC5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmVmdW4iLCJub3RlIiwibm90ZWNvbnQiLCJ4IiwieSIsInNjYWxlIiwiYWNjaWRlbnRhbF9tYXJnaW4iLCJoaWRlX3Rvb2xiYXIiLCJzZXRQcm9wcyIsInMiLCJtdXNpYzIxIiwiU3RyZWFtIiwibiIsIk5vdGUiLCJhZGRMeXJpYyIsImNsZWYiLCJDbGVmIiwiYXBwZW5kIiwiYWN0aXZlTm90ZSIsIl9lbGVtZW50cyIsImx5cmljcyIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxsU3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZW5kZXJPcHRpb25zIiwic2NhbGVGYWN0b3IiLCJkIiwiZWRpdGFibGVBY2NpZGVudGFsRE9NIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiY2hpbGQxIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiY2hpbGQwIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZWZzIiwib3V0ZXI5Iiwic3ZnIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIml0ZW0iLCJmaXJzdENoaWxkIiwiYWNjcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWZyZXNoIiwiYmluZCIsImNoZWNrIiwidGltZXJJRCIsImNvdW50ZXIiLCJwcmVzc0hvbGRFdmVudCIsIkN1c3RvbUV2ZW50IiwicHJlc3NIb2xkRHVyYXRpb24iLCJjaGFuZ2V0aHJlc2hvbGQiLCJwcmVzc2luZ0Rvd24iLCJub3RQcmVzc2luZ0Rvd24iLCJub3RQcmVzc2luZ0Rvd25SZWwiLCJkb1NvbWV0aGluZyIsImNvbnRhaW5lciIsImluaXRfeCIsImluaXRfeSIsImR5bmFtaWNzIiwiZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiY2hhbmdlX25vdGUiLCJ0b1N0cmluZyIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsInByZXZlbnREZWZhdWx0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGV4dCIsIm5vdGVfb3V0cHV0IiwicGl0Y2giLCJtaWRpIiwicmVkcmF3RE9NIiwiZHluIiwiZGlzcGF0Y2hFdmVudCIsImJ1dHRvbnMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsaWNrIiwic2V0dXAiLCJldmVudCIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJoYXNDaGlsZE5vZGVzIiwibGFzdENoaWxkIiwiaWQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxJOzs7OztBQUVqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBRSxDQURBO0FBRVRDLFVBQUksRUFBRSxFQUZHO0FBR1RDLGNBQVEsRUFBRSxFQUhEO0FBSVRDLE9BQUMsRUFBRSxDQUpNO0FBS1RDLE9BQUMsRUFBRTtBQUxNLEtBQWI7QUFKZTtBQVlsQjs7Ozs0QkFFTztBQUNKOzs7Ozs7OztBQURJLHdCQVM2RCxLQUFLTixLQVRsRTtBQUFBLFVBU0dHLElBVEgsZUFTR0EsSUFUSDtBQUFBLFVBU1NJLEtBVFQsZUFTU0EsS0FUVDtBQUFBLFVBU2dCQyxpQkFUaEIsZUFTZ0JBLGlCQVRoQjtBQUFBLFVBU21DQyxZQVRu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RG1FO0FBRTNFQyxpQkFBTyxFQUFFLENBRmtFO0FBRzNFQyxzQkFBWSxFQUFFLENBSDZEO0FBSTNFakUsdUJBQWEsRUFBRSxLQUo0RDtBQUszRUcsaUJBQU8sRUFBRTtBQUxrRTtBQUF4RSxRQUFQO0FBUUg7Ozs7RUE5VzZCK0QsK0M7OztBQWtYbENwRyxJQUFJLENBQUNxRyxZQUFMLEdBQW9CO0FBQUNqRyxNQUFJLEVBQUUsRUFBUDtBQUFXaUYsS0FBRyxFQUFFLElBQWhCO0FBQXNCN0UsT0FBSyxFQUFFLEdBQTdCO0FBQWtDQyxtQkFBaUIsRUFBRSxFQUFyRDtBQUF5REMsY0FBWSxFQUFFO0FBQXZFLENBQXBCO0FBRUFWLElBQUksQ0FBQ3NHLFNBQUwsR0FBaUI7QUFDYjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKRDtBQUticEcsTUFBSSxFQUFFbUcsaURBQVMsQ0FBQ0UsTUFMSDtBQU1icEIsS0FBRyxFQUFFa0IsaURBQVMsQ0FBQ0MsTUFORjtBQU9iaEcsT0FBSyxFQUFFK0YsaURBQVMsQ0FBQ0UsTUFQSjtBQVFiaEcsbUJBQWlCLEVBQUU4RixpREFBUyxDQUFDRSxNQVJoQjtBQVNiL0YsY0FBWSxFQUFFNkYsaURBQVMsQ0FBQ0csSUFUWDs7QUFVYjs7OztBQUtBOzs7O0FBSUEvRixVQUFRLEVBQUU0RixpREFBUyxDQUFDSTtBQW5CUCxDQUFqQixDIiwiZmlsZSI6ImQ5OWZiMmUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXVzaWMyMSBmcm9tICcuL211c2ljMjEuZGVidWcuanMnO1xyXG5pbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbW92ZWZ1bjogMCxcclxuICAgICAgICAgICAgbm90ZTogNjAsXHJcbiAgICAgICAgICAgIG5vdGVjb250OiAnJyxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbiA9IG5ldyBtdXNpYzIxLm5vdGUuTm90ZShcIkYjXCIpO1xyXG4gICAgICAgIHZhciBrID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGsuYXBwZW5kKG4pO1xyXG4gICAgICAgIC8vay5hcHBlbmROZXdET00oKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHtub3RlLCBzY2FsZSwgYWNjaWRlbnRhbF9tYXJnaW4sIGhpZGVfdG9vbGJhciwgc2V0UHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHMgPSBuZXcgbXVzaWMyMS5zdHJlYW0uU3RyZWFtKCk7XHJcbiAgICAgICAgbGV0IG4gPSBuZXcgbXVzaWMyMS5ub3RlLk5vdGUobm90ZSk7XHJcbiAgICAgICAgLy9uLmx5cmljcyA9IG5ldyBtdXNpYzIxLm5vdGUuTHlyaWMoJ21mJylcclxuICAgICAgICBuLmFkZEx5cmljKCcnKVxyXG4gICAgICAgIHZhciBjbGVmID0gMDtcclxuICAgICAgICAvL24ucGl0Y2gubWlkaSA9IDQwXHJcbiAgICAgICAgaWYgKG5vdGU8PTQwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9NjApe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTgwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTEyNyl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzLmNsZWYgPSBjbGVmXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcy5hcHBlbmQobik7XHJcbiAgICAgICAgcy5hY3RpdmVOb3RlID0gcy5fZWxlbWVudHNbMV1cclxuICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnN0eWxlLmZvbnRTaXplID0gMjRcclxuICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnN0eWxlLmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMyknXHJcbiAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDIwcHgsMjBweCknXHJcbiAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS55ID0gMjBcclxuICAgICAgICAvL3ZhciBkMiA9IHMyLmVkaXRhYmxlQWNjaWRlbnRhbERPTSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocylcclxuXHJcbiAgICAgICAgLy92YXIgcyA9IG11c2ljMjEudGlueU5vdGF0aW9uLlRpbnlOb3RhdGlvbihpbml0Tm90ZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIC8vcy5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zLnJlbmRlck9wdGlvbnMubmFpdmVIZWlnaHQgPSAyMDBcclxuICAgICAgICAvL3MucmVuZGVyT3B0aW9ucy50b3AgPSAxMDBcclxuICAgICAgICAvL3MuX25haXZlT2Zmc2V0ID0gMTAwXHJcbiAgICAgICAgcy5yZW5kZXJPcHRpb25zLnNjYWxlRmFjdG9yID0ge3g6c2NhbGUsIHk6c2NhbGV9XHJcbiAgICAgICAgdmFyIGQgPSBzLmVkaXRhYmxlQWNjaWRlbnRhbERPTSgpO1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc3R5bGUuZm9udFNpemUgPSAnMTRweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUuaGVpZ2h0ID0gJzI1cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgICAgICAvL2RbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUucGFkZGluZ1RvcCA9ICc2cHgnXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdHh0WzBdLnlbMF0udmFsdWUgPSA2MFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZFswXS5jaGlsZE5vZGVzWzJdLmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbOF0udGFnTmFtZXMpXHJcbiAgICAgICAgLy9kWzBdLmNoaWxkcmVuWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgIC8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcblxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQgPSBzXHJcbiAgICAgICAgLy90aGlzLm5vdGUgPSBkWzBdLmNoaWxkTm9kZXNbMl0uY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1s4XS50YWdOYW1lc1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKTtcclxuICAgICAgICAvL2suYXBwZW5kKENvbnRhaW5lciknXHJcbiAgICAgICAgLy9Db250YWluZXIuaW5uZXJIVE1MID0gZFxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZENoaWxkKGQpXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgayA9IG5ldyBtdXNpYzIxLmtleWJvYXJkLktleWJvYXJkKCk7XHJcbiAgICAgICBrLnN0YXJ0UGl0Y2ggPSAxODtcclxuICAgICAgIGsuZW5kUGl0Y2ggPSAzOTtcclxuICAgICAgIGsubWFya0MgPSB0cnVlO1xyXG4gICAgICAgay5hcHBlbmRLZXlib2FyZChDb250YWluZXIpO1xyXG4gICAgKi9cclxuICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKVxyXG4gICAgdmFyIGNoaWxkMSA9IGRbMF0uY2hpbGRyZW5bMV1cclxuICAgIGRbMF0ucmVtb3ZlQ2hpbGQoY2hpbGQxKVxyXG4gICAgZFswXS5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRbMF0uY2hpbGRyZW5bMF0uc3R5bGUudmVydGljYWxBbGlnbiA9ICd0b3AnXHJcbiAgICBkWzBdLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpblRvcCA9IGFjY2lkZW50YWxfbWFyZ2luO1xyXG4gICAgZFswXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIHZhciBjaGlsZDAgPSBkWzBdLmNoaWxkcmVuWzBdXHJcbiAgICBkWzBdLnJlbW92ZUNoaWxkKGNoaWxkMClcclxuICAgIC8vZFswXS5hcHBlbmRDaGlsZChjaGlsZDApXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkWzBdKVxyXG5cclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoY2hpbGQwKTtcclxuXHJcbiAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpIFxyXG4gICAgICAgLy9jb25zb2xlLmxvZyhzdmcpXHJcbiAgICAgICBsZXQgaXRlbSA9IHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZFxyXG4gICAgICAgdmFyIGFjY3MgPSAgdGhpcy5yZWZzLm91dGVyOS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NpZGVudGFsVG9vbGJhcicpWzBdXHJcbiAgICAgICBpZihoaWRlX3Rvb2xiYXIpe1xyXG4gICAgICAgYWNjcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICB9XHJcbiAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucmVmcy5vdXRlcjkpXHJcbiAgICAgICAvKlxyXG4gICAgICAgaXRlbSA9IHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5maXJzdENoaWxkXHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoaXRlbSlcclxuICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChpdGVtKVxyXG4gICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICBpdGVtID0gdGhpcy5yZWZzLm91dGVyOS5maXJzdENoaWxkLmZpcnN0Q2hpbGRcclxuICAgICAgICovXHJcblxyXG4gICAgICB0aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICB0aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBmYWxzZSlcclxuXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuY2hlY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuY2hlY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICBcclxuICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5kcmFnZ2FibGUgPSB0cnVlXHJcblxyXG4gICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIHRoaXMuZHJhZ19jaGFuZ2UuYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoZDJbMF0pO1xyXG4gICAgICAgLy9kWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZClcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBpdGVtIChvciBpdGVtcykgdG8gcHJlc3MgYW5kIGhvbGQgb25cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZXJJRDtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwcmVzc0hvbGRFdmVudCA9IG5ldyBDdXN0b21FdmVudChcInByZXNzSG9sZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluY3JlYXNlIG9yIGRlY3JlYWUgdmFsdWUgdG8gYWRqdXN0IGhvdyBsb25nXHJcbiAgICAgICAgICAgICAgICAvLyBvbmUgc2hvdWxkIGtlZXAgcHJlc3NpbmcgZG93biBiZWZvcmUgdGhlIHByZXNzSG9sZFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQgZmlyZXNcclxuICAgICAgICAgICAgICAgIGxldCBwcmVzc0hvbGREdXJhdGlvbiA9IDU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9UaHJlc2hvbGQgb2YgbW91c2UgbW92ZW1lbnRcclxuICAgICAgICAgICAgICAgIGxldCBjaGFuZ2V0aHJlc2hvbGQgPSAxMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIExpc3RlbmluZyBmb3IgdGhlIG1vdXNlIGFuZCB0b3VjaCBldmVudHMgICAgXHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcHJlc3NpbmdEb3duLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG5vdFByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBub3RQcmVzc2luZ0Rvd25SZWwsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgcHJlc3NpbmdEb3duLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBub3RQcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAvLyBMaXN0ZW5pbmcgZm9yIG91ciBjdXN0b20gcHJlc3NIb2xkIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwicHJlc3NIb2xkXCIsIGRvU29tZXRoaW5nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5yZWZzLm91dGVyOVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGxldCBpbml0X3ggPSAwXHJcbiAgICAgICAgICAgICAgICAgbGV0IGluaXRfeSA9IDBcclxuICAgICAgICAgICAgICAgICBsZXQgZHluYW1pY3MgPSAnbWYnXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciB0b3VjaCBwb2ludCB3aGVuIHByZXNzaW5nIGRvd25cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHByZXNzaW5nRG93bihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUsIGUudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIGlmKGUudG9TdHJpbmcoKT09PVwiW29iamVjdCBNb3VzZUV2ZW50XVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3ggPSBlLnhcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3kgPSBlLnlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBcclxuICAgICAgICAgICAgICAgIGlmKGUudG9TdHJpbmcoKT09PVwiW29iamVjdCBUb3VjaEV2ZW50XVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3ggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeSA9IGUudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHJlc3NpbmchXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2VuZCB2YWx1ZXMgb24gY2xpY2sgcmVsZWFzZVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbm90UHJlc3NpbmdEb3duKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHMuYWN0aXZlTm90ZS5seXJpY3NbMF0udGV4dCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdGVfb3V0cHV0ID0gcy5hY3RpdmVOb3RlLnBpdGNoLm1pZGlcclxuICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhub3RlX291dHB1dCwgZHluYW1pY3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXRQcm9wcykgc2V0UHJvcHMoe25vdGU6IG5vdGVfb3V0cHV0LCBkeW46ZHluYW1pY3N9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBub3RQcmVzc2luZ0Rvd25SZWwoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgLy8gUnVucyBhdCA2MGZwcyB3aGVuIHlvdSBhcmUgcHJlc3NpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0aW1lcigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGltZXIgdGljayFcIik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBwcmVzc0hvbGREdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZXJJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQcmVzcyB0aHJlc2hvbGQgcmVhY2hlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc3BhdGNoRXZlbnQocHJlc3NIb2xkRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gUFJncmFtbWF0aWNhbGx5IGNsaWNrIGJ1dHRvbnMgYW5kXHJcbiAgICAgICAgICAgICAgICAgIHZhciBidXR0b25zID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY2lkZW50YWxUb29sYmFyJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvU29tZXRoaW5nKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljcyA9ICdtZidcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zWzFdLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInByZXNzSG9sZCBldmVudCBmaXJlZCFcIik7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBtb3VzZSBtb3ZlbWVudCBhbmQgY2hhbmdlIGFjY2lkZW50YWxzIGFuZCBkeW5hbWljc1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2Vfbm90ZShlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IE1vdXNlRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gZS54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBlLnlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IFRvdWNoRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGUudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoeCAtIGluaXRfeCkgPiBjaGFuZ2V0aHJlc2hvbGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnRleHQgPSAnZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljcyA9ICdmJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHggLSBpbml0X3gpIDwgLWNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYWN0aXZlTm90ZS5seXJpY3NbMF0udGV4dCA9ICdwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ3AnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS50ZXh0ID0gJ21mJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ21mJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlmICgoeSAtIGluaXRfeSkgPiBjaGFuZ2V0aHJlc2hvbGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMF0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHkgLSBpbml0X3kpIDwgLWNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMl0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zWzFdLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXAoKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKGUpe1xyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIHN2ZyA9IHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZycpIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICBpZiAoc2V0UHJvcHMpIHNldFByb3BzKHtub3RlOiB0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaX0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9DaGFuZ2UgY2xlZiBhY2NvcmRpbmcgdG8gbm90ZSB2YWx1ZVxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD04MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDIpO1xyXG4gICAgICAgIC8vdGhpcy5tb3ZlZnVuID0gdGhpcy5kcmFnX2NoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlZnVuLCBmYWxzZSlcclxuICAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gICAgdGhpcy5yZWZzLm91dGVyOS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVmdW4pXHJcbiAgICAgICAgLy99KS5jYWxsKHRoaXMpLCBmYWxzZSlcclxuICAgICAgICAvL3ZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlYW1Ib2xkaW5nJykgXHJcblxyXG4gICAgICAgIGlmIChzZXRQcm9wcykgc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpfSlcclxuICAgICAgICB2YXIgc3ZnID0gdGhpcy5yZWZzLm91dGVyOS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZnJykgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udC5yZWRyYXdET00oc3ZnKVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICAgIC8vc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHMsIG5vdGV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGVcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD00MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD02MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTgwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD0xMjcpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMik7XHJcbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKSBcclxuICAgICAgICB0aGlzLm5vdGVjb250LnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyOVxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkfT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyOVwiIGlkPXtpZH0gLyogb25DbGljaz0ge3RoaXMuY2hlY2suYmluZCh0aGlzKX0gKi8gc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5FZGl0LmRlZmF1bHRQcm9wcyA9IHtub3RlOiA2MCwgZHluOiAnbWYnLCBzY2FsZTogMS41LCBhY2NpZGVudGFsX21hcmdpbjogNTUsIGhpZGVfdG9vbGJhcjogdHJ1ZX07XHJcblxyXG5FZGl0LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbm90ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGR5bjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYWNjaWRlbnRhbF9tYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoaWRlX3Rvb2xiYXI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
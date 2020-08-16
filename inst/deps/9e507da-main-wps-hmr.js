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
      this.refs.outer9.appendChild(child0); //var svg = document.getElementsByClassName('streamHolding')

      var svg = this.refs.outer9.getElementsByClassName('streamHolding'); //console.log(svg)

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
      //this.refs.outer9.addEventListener("mousedown", this.refresh.bind(this), false)
      //this.refs.outer9.addEventListener("touchstart", this.refresh.bind(this), false)


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
      //var buttons =  document.getElementsByClassName('accidentalToolbar')[0].getElementsByTagName('button')


      var buttons = this.refs.outer9.getElementsByClassName('accidentalToolbar')[0].getElementsByTagName('button');

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
      this.notecont.redrawDOM(svg); //if (setProps) setProps({note: this.notecont.activeNote.pitch.midi})
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
      //if (setProps) setProps({note: this.notecont.activeNote.pitch.midi})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvRWRpdC5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmVmdW4iLCJub3RlIiwibm90ZWNvbnQiLCJ4IiwieSIsInNjYWxlIiwiYWNjaWRlbnRhbF9tYXJnaW4iLCJoaWRlX3Rvb2xiYXIiLCJzZXRQcm9wcyIsInMiLCJtdXNpYzIxIiwiU3RyZWFtIiwibiIsIk5vdGUiLCJhZGRMeXJpYyIsImNsZWYiLCJDbGVmIiwiYXBwZW5kIiwiYWN0aXZlTm90ZSIsIl9lbGVtZW50cyIsImx5cmljcyIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxsU3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZW5kZXJPcHRpb25zIiwic2NhbGVGYWN0b3IiLCJkIiwiZWRpdGFibGVBY2NpZGVudGFsRE9NIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiY2hpbGQxIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiY2hpbGQwIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZWZzIiwib3V0ZXI5Iiwic3ZnIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIml0ZW0iLCJmaXJzdENoaWxkIiwiYWNjcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVjayIsImJpbmQiLCJ0aW1lcklEIiwiY291bnRlciIsInByZXNzSG9sZEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwcmVzc0hvbGREdXJhdGlvbiIsImNoYW5nZXRocmVzaG9sZCIsInByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93blJlbCIsImRvU29tZXRoaW5nIiwiY29udGFpbmVyIiwiaW5pdF94IiwiaW5pdF95IiwiZHluYW1pY3MiLCJlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjaGFuZ2Vfbm90ZSIsInRvU3RyaW5nIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0ZXh0Iiwibm90ZV9vdXRwdXQiLCJwaXRjaCIsIm1pZGkiLCJyZWRyYXdET00iLCJkeW4iLCJkaXNwYXRjaEV2ZW50IiwiYnV0dG9ucyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xpY2siLCJzZXR1cCIsImV2ZW50IiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJsYXN0Q2hpbGQiLCJpZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFFcUJDLEk7Ozs7O0FBRWpCLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWYsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsYUFBTyxFQUFFLENBREE7QUFFVEMsVUFBSSxFQUFFLEVBRkc7QUFHVEMsY0FBUSxFQUFFLEVBSEQ7QUFJVEMsT0FBQyxFQUFFLENBSk07QUFLVEMsT0FBQyxFQUFFO0FBTE0sS0FBYjtBQUplO0FBWWxCOzs7OzRCQUVPO0FBQ0o7Ozs7Ozs7O0FBREksd0JBUzZELEtBQUtOLEtBVGxFO0FBQUEsVUFTR0csSUFUSCxlQVNHQSxJQVRIO0FBQUEsVUFTU0ksS0FUVCxlQVNTQSxLQVRUO0FBQUEsVUFTZ0JDLGlCQVRoQixlQVNnQkEsaUJBVGhCO0FBQUEsVUFTbUNDLFlBVG5DLGVBU21DQSxZ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LEVBQUVrRyxpREFBUyxDQUFDRSxNQUxIO0FBTWJwQixLQUFHLEVBQUVrQixpREFBUyxDQUFDQyxNQU5GO0FBT2IvRixPQUFLLEVBQUU4RixpREFBUyxDQUFDRSxNQVBKO0FBUWIvRixtQkFBaUIsRUFBRTZGLGlEQUFTLENBQUNFLE1BUmhCO0FBU2I5RixjQUFZLEVBQUU0RixpREFBUyxDQUFDRyxJQVRYOztBQVViOzs7O0FBS0E7Ozs7QUFJQTlGLFVBQVEsRUFBRTJGLGlEQUFTLENBQUNJO0FBbkJQLENBQWpCLEMiLCJmaWxlIjoiOWU1MDdkYS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtdXNpYzIxIGZyb20gJy4vbXVzaWMyMS5kZWJ1Zy5qcyc7XHJcbmltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuXHJcbmNvbnN0IFZGID0gVmV4LkZsb3c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuXHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtb3ZlZnVuOiAwLFxyXG4gICAgICAgICAgICBub3RlOiA2MCxcclxuICAgICAgICAgICAgbm90ZWNvbnQ6ICcnLFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBuID0gbmV3IG11c2ljMjEubm90ZS5Ob3RlKFwiRiNcIik7XHJcbiAgICAgICAgdmFyIGsgPSBuZXcgbXVzaWMyMS5zdHJlYW0uU3RyZWFtKCk7XHJcbiAgICAgICAgay5hcHBlbmQobik7XHJcbiAgICAgICAgLy9rLmFwcGVuZE5ld0RPTSgpO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgY29uc3Qge25vdGUsIHNjYWxlLCBhY2NpZGVudGFsX21hcmdpbiwgaGlkZV90b29sYmFyLCBzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgcyA9IG5ldyBtdXNpYzIxLnN0cmVhbS5TdHJlYW0oKTtcclxuICAgICAgICBsZXQgbiA9IG5ldyBtdXNpYzIxLm5vdGUuTm90ZShub3RlKTtcclxuICAgICAgICAvL24ubHlyaWNzID0gbmV3IG11c2ljMjEubm90ZS5MeXJpYygnbWYnKVxyXG4gICAgICAgIG4uYWRkTHlyaWMoJycpXHJcbiAgICAgICAgdmFyIGNsZWYgPSAwO1xyXG4gICAgICAgIC8vbi5waXRjaC5taWRpID0gNDBcclxuICAgICAgICBpZiAobm90ZTw9NDApe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJywgLTEpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChub3RlPD02MCl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9ODApe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMuY2xlZiA9IGNsZWZcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBzLmFwcGVuZChuKTtcclxuICAgICAgICBzLmFjdGl2ZU5vdGUgPSBzLl9lbGVtZW50c1sxXVxyXG4gICAgICAgIHMuYWN0aXZlTm90ZS5seXJpY3NbMF0uc3R5bGUuZm9udFNpemUgPSAyNFxyXG4gICAgICAgIHMuYWN0aXZlTm90ZS5seXJpY3NbMF0uc3R5bGUuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC4zKSdcclxuICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMjBweCwyMHB4KSdcclxuICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnkgPSAyMFxyXG4gICAgICAgIC8vdmFyIGQyID0gczIuZWRpdGFibGVBY2NpZGVudGFsRE9NKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG5cclxuICAgICAgICAvL3ZhciBzID0gbXVzaWMyMS50aW55Tm90YXRpb24uVGlueU5vdGF0aW9uKGluaXROb3RlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcbiAgICAgICAgLy9zLmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocylcclxuICAgICAgICBcclxuICAgICAgICAvL3MucmVuZGVyT3B0aW9ucy5uYWl2ZUhlaWdodCA9IDIwMFxyXG4gICAgICAgIC8vcy5yZW5kZXJPcHRpb25zLnRvcCA9IDEwMFxyXG4gICAgICAgIC8vcy5fbmFpdmVPZmZzZXQgPSAxMDBcclxuICAgICAgICBzLnJlbmRlck9wdGlvbnMuc2NhbGVGYWN0b3IgPSB7eDpzY2FsZSwgeTpzY2FsZX1cclxuICAgICAgICB2YXIgZCA9IHMuZWRpdGFibGVBY2NpZGVudGFsRE9NKCk7XHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc3R5bGUuZm9udFNpemUgPSAnMTRweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS5oZWlnaHQgPSAnMjVweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAndG9wJ1xyXG4gICAgICAgIC8vZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS5wYWRkaW5nVG9wID0gJzZweCdcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy90eHRbMF0ueVswXS52YWx1ZSA9IDYwXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkWzBdLmNoaWxkTm9kZXNbMl0uY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1s4XS50YWdOYW1lcylcclxuICAgICAgICAvL2RbMF0uY2hpbGRyZW5bMl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuXHJcbiAgICAgICAgdGhpcy5ub3RlY29udCA9IHNcclxuICAgICAgICAvL3RoaXMubm90ZSA9IGRbMF0uY2hpbGROb2Rlc1syXS5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzhdLnRhZ05hbWVzXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygpXHJcbiAgICAgICAgLy9Db250YWluZXIuYXBwZW5kKGspO1xyXG4gICAgICAgIC8vay5hcHBlbmQoQ29udGFpbmVyKSdcclxuICAgICAgICAvL0NvbnRhaW5lci5pbm5lckhUTUwgPSBkXHJcbiAgICAgICAgLy9Db250YWluZXIuYXBwZW5kQ2hpbGQoZClcclxuICAgICAgICAvKlxyXG4gICAgICAgIHZhciBrID0gbmV3IG11c2ljMjEua2V5Ym9hcmQuS2V5Ym9hcmQoKTtcclxuICAgICAgIGsuc3RhcnRQaXRjaCA9IDE4O1xyXG4gICAgICAgay5lbmRQaXRjaCA9IDM5O1xyXG4gICAgICAgay5tYXJrQyA9IHRydWU7XHJcbiAgICAgICBrLmFwcGVuZEtleWJvYXJkKENvbnRhaW5lcik7XHJcbiAgICAqL1xyXG4gICAgLy9Db250YWluZXIuYXBwZW5kKGspXHJcbiAgICB2YXIgY2hpbGQxID0gZFswXS5jaGlsZHJlblsxXVxyXG4gICAgZFswXS5yZW1vdmVDaGlsZChjaGlsZDEpXHJcbiAgICBkWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gICAgZFswXS5jaGlsZHJlblswXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgIGRbMF0uY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luVG9wID0gYWNjaWRlbnRhbF9tYXJnaW47XHJcbiAgICBkWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gICAgdmFyIGNoaWxkMCA9IGRbMF0uY2hpbGRyZW5bMF1cclxuICAgIGRbMF0ucmVtb3ZlQ2hpbGQoY2hpbGQwKVxyXG4gICAgLy9kWzBdLmFwcGVuZENoaWxkKGNoaWxkMClcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAndG9wJ1xyXG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRbMF0pXHJcblxyXG4gICAgICAgdGhpcy5yZWZzLm91dGVyOS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgdGhpcy5yZWZzLm91dGVyOS5hcHBlbmRDaGlsZChjaGlsZDApO1xyXG5cclxuICAgICAgIC8vdmFyIHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKVxyXG4gICAgICAgdmFyIHN2ZyA9IHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpXHJcblxyXG4gICAgICAgLy9jb25zb2xlLmxvZyhzdmcpXHJcbiAgICAgICBsZXQgaXRlbSA9IHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZFxyXG4gICAgICAgdmFyIGFjY3MgPSAgdGhpcy5yZWZzLm91dGVyOS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NpZGVudGFsVG9vbGJhcicpWzBdXHJcbiAgICAgICBpZihoaWRlX3Rvb2xiYXIpe1xyXG4gICAgICAgYWNjcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICB9XHJcbiAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucmVmcy5vdXRlcjkpXHJcbiAgICAgICAvKlxyXG4gICAgICAgaXRlbSA9IHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5maXJzdENoaWxkXHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoaXRlbSlcclxuICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChpdGVtKVxyXG4gICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICBpdGVtID0gdGhpcy5yZWZzLm91dGVyOS5maXJzdENoaWxkLmZpcnN0Q2hpbGRcclxuICAgICAgICovXHJcblxyXG4gICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgZmFsc2UpXHJcblxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgXHJcbiAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuZHJhZ2dhYmxlID0gdHJ1ZVxyXG5cclxuICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCB0aGlzLmRyYWdfY2hhbmdlLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFwcGVuZENoaWxkKGQyWzBdKTtcclxuICAgICAgIC8vZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGQpXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgaXRlbSAob3IgaXRlbXMpIHRvIHByZXNzIGFuZCBob2xkIG9uXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVySUQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlc3NIb2xkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJwcmVzc0hvbGRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbmNyZWFzZSBvciBkZWNyZWFlIHZhbHVlIHRvIGFkanVzdCBob3cgbG9uZ1xyXG4gICAgICAgICAgICAgICAgLy8gb25lIHNob3VsZCBrZWVwIHByZXNzaW5nIGRvd24gYmVmb3JlIHRoZSBwcmVzc0hvbGRcclxuICAgICAgICAgICAgICAgIC8vIGV2ZW50IGZpcmVzXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlc3NIb2xkRHVyYXRpb24gPSA1O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vVGhyZXNob2xkIG9mIG1vdXNlIG1vdmVtZW50XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhbmdldGhyZXNob2xkID0gMTA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW5pbmcgZm9yIHRoZSBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzICAgIFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBub3RQcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbm90UHJlc3NpbmdEb3duUmVsLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgbm90UHJlc3NpbmdEb3duLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgLy8gTGlzdGVuaW5nIGZvciBvdXIgY3VzdG9tIHByZXNzSG9sZCBldmVudFxyXG4gICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInByZXNzSG9sZFwiLCBkb1NvbWV0aGluZywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMucmVmcy5vdXRlcjlcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICBsZXQgaW5pdF94ID0gMFxyXG4gICAgICAgICAgICAgICAgIGxldCBpbml0X3kgPSAwXHJcbiAgICAgICAgICAgICAgICAgbGV0IGR5bmFtaWNzID0gJ21mJ1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdG91Y2ggcG9pbnQgd2hlbiBwcmVzc2luZyBkb3duXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcmVzc2luZ0Rvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLCBlLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgTW91c2VFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF94ID0gZS54XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF95ID0gZS55XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgVG91Y2hFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF94ID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICAgICAgICAgICAgICBpbml0X3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlByZXNzaW5nIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NlbmQgdmFsdWVzIG9uIGNsaWNrIHJlbGVhc2VcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG5vdFByZXNzaW5nRG93bihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7ICBcclxuICAgICAgICAgICAgICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnRleHQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RlX291dHB1dCA9IHMuYWN0aXZlTm90ZS5waXRjaC5taWRpXHJcbiAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobm90ZV9vdXRwdXQsIGR5bmFtaWNzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0UHJvcHMpIHNldFByb3BzKHtub3RlOiBub3RlX291dHB1dCwgZHluOmR5bmFtaWNzfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbm90UHJlc3NpbmdEb3duUmVsKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJ1bnMgYXQgNjBmcHMgd2hlbiB5b3UgYXJlIHByZXNzaW5nIGRvd25cclxuICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdGltZXIoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRpbWVyIHRpY2shXCIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyIDwgcHJlc3NIb2xkRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVySUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHJlc3MgdGhyZXNob2xkIHJlYWNoZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNwYXRjaEV2ZW50KHByZXNzSG9sZEV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIFBSZ3JhbW1hdGljYWxseSBjbGljayBidXR0b25zIGFuZFxyXG4gICAgICAgICAgICAgICAgICAvL3ZhciBidXR0b25zID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY2lkZW50YWxUb29sYmFyJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgIHZhciBidXR0b25zID0gIHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjaWRlbnRhbFRvb2xiYXInKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9Tb21ldGhpbmcoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ21mJ1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMV0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJlc3NIb2xkIGV2ZW50IGZpcmVkIVwiKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIG1vdXNlIG1vdmVtZW50IGFuZCBjaGFuZ2UgYWNjaWRlbnRhbHMgYW5kIGR5bmFtaWNzXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZV9ub3RlKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgTW91c2VFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBlLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGUueVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRvU3RyaW5nKCk9PT1cIltvYmplY3QgVG91Y2hFdmVudF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh4IC0gaW5pdF94KSA+IGNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYWN0aXZlTm90ZS5seXJpY3NbMF0udGV4dCA9ICdmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ2YnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoeCAtIGluaXRfeCkgPCAtY2hhbmdldGhyZXNob2xkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS50ZXh0ID0gJ3AnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY3MgPSAncCdcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnRleHQgPSAnbWYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY3MgPSAnbWYnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCh5IC0gaW5pdF95KSA+IGNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1swXS5jbGljaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoeSAtIGluaXRfeSkgPCAtY2hhbmdldGhyZXNob2xkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1syXS5jbGljaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMV0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goZSl7XHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgc3ZnID0gdGhpcy5yZWZzLm91dGVyOS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZnJykgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udC5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgIC8vaWYgKHNldFByb3BzKSBzZXRQcm9wcyh7bm90ZTogdGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGl9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ2hhbmdlIGNsZWYgYWNjb3JkaW5nIHRvIG5vdGUgdmFsdWVcclxuICAgIGNoZWNrKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB0aGlzLm5vdGUgPSB0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTQwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJywgLTEpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTYwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9ODApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTEyNyl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAyKTtcclxuICAgICAgICAvL3RoaXMubW92ZWZ1biA9IHRoaXMuZHJhZ19jaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW92ZWZ1biwgZmFsc2UpXHJcbiAgICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIC8vICAgIHRoaXMucmVmcy5vdXRlcjkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlZnVuKVxyXG4gICAgICAgIC8vfSkuY2FsbCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgLy92YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpIFxyXG5cclxuICAgICAgICAvL2lmIChzZXRQcm9wcykgc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpfSlcclxuICAgICAgICB2YXIgc3ZnID0gdGhpcy5yZWZzLm91dGVyOS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZnJykgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udC5yZWRyYXdET00oc3ZnKVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICAgIC8vc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHMsIG5vdGV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGVcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD00MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD02MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTgwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD0xMjcpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMik7XHJcbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKSBcclxuICAgICAgICB0aGlzLm5vdGVjb250LnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyOVxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkfT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyOVwiIGlkPXtpZH0gLyogb25DbGljaz0ge3RoaXMuY2hlY2suYmluZCh0aGlzKX0gKi8gc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5FZGl0LmRlZmF1bHRQcm9wcyA9IHtub3RlOiA2MCwgZHluOiAnbWYnLCBzY2FsZTogMS41LCBhY2NpZGVudGFsX21hcmdpbjogNTUsIGhpZGVfdG9vbGJhcjogdHJ1ZX07XHJcblxyXG5FZGl0LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbm90ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGR5bjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYWNjaWRlbnRhbF9tYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoaWRlX3Rvb2xiYXI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
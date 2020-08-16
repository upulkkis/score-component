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
      } else if (note <= 59) {
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
      } else if (this.note <= 59) {
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
      if (this.props.note !== prevProps.note) {
        var element = this.refs.outer9;

        while (element.hasChildNodes()) {
          element.removeChild(element.lastChild);
        }

        this.setup();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvRWRpdC5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmVmdW4iLCJub3RlIiwibm90ZWNvbnQiLCJ4IiwieSIsInNjYWxlIiwiYWNjaWRlbnRhbF9tYXJnaW4iLCJoaWRlX3Rvb2xiYXIiLCJzZXRQcm9wcyIsInMiLCJtdXNpYzIxIiwiU3RyZWFtIiwibiIsIk5vdGUiLCJhZGRMeXJpYyIsImNsZWYiLCJDbGVmIiwiYXBwZW5kIiwiYWN0aXZlTm90ZSIsIl9lbGVtZW50cyIsImx5cmljcyIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxsU3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZW5kZXJPcHRpb25zIiwic2NhbGVGYWN0b3IiLCJkIiwiZWRpdGFibGVBY2NpZGVudGFsRE9NIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiY2hpbGQxIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiY2hpbGQwIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZWZzIiwib3V0ZXI5Iiwic3ZnIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIml0ZW0iLCJmaXJzdENoaWxkIiwiYWNjcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVjayIsImJpbmQiLCJ0aW1lcklEIiwiY291bnRlciIsInByZXNzSG9sZEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwcmVzc0hvbGREdXJhdGlvbiIsImNoYW5nZXRocmVzaG9sZCIsInByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93blJlbCIsImRvU29tZXRoaW5nIiwiY29udGFpbmVyIiwiaW5pdF94IiwiaW5pdF95IiwiZHluYW1pY3MiLCJlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjaGFuZ2Vfbm90ZSIsInRvU3RyaW5nIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0ZXh0Iiwibm90ZV9vdXRwdXQiLCJwaXRjaCIsIm1pZGkiLCJyZWRyYXdET00iLCJkeW4iLCJkaXNwYXRjaEV2ZW50IiwiYnV0dG9ucyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xpY2siLCJzZXR1cCIsImV2ZW50IiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJsYXN0Q2hpbGQiLCJpZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFFcUJDLEk7Ozs7O0FBRWpCLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWYsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsYUFBTyxFQUFFLENBREE7QUFFVEMsVUFBSSxFQUFFLEVBRkc7QUFHVEMsY0FBUSxFQUFFLEVBSEQ7QUFJVEMsT0FBQyxFQUFFLENBSk07QUFLVEMsT0FBQyxFQUFFO0FBTE0sS0FBYjtBQUplO0FBWWxCOzs7OzRCQUVPO0FBQ0o7Ozs7Ozs7O0FBREksd0JBUzZELEtBQUtOLEtBVGxFO0FBQUEsVUFTR0csSUFUSCxlQVNHQSxJQVRIO0FBQUEsVUFTU0ksS0FUVCxlQVNTQSxLQVRUO0FBQUEsVUFTZ0JDLGlCQVRoQixlQVNnQkEsaUJBVGhCO0FBQUEsVUFTbUNDLFlBVG5DLGVBU21DQSxZ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QUksQ0FBQ3FHLFNBQUwsR0FBaUI7QUFDYjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKRDtBQUtibkcsTUFBSSxFQUFFa0csaURBQVMsQ0FBQ0UsTUFMSDtBQU1icEIsS0FBRyxFQUFFa0IsaURBQVMsQ0FBQ0MsTUFORjtBQU9iL0YsT0FBSyxFQUFFOEYsaURBQVMsQ0FBQ0UsTUFQSjtBQVFiL0YsbUJBQWlCLEVBQUU2RixpREFBUyxDQUFDRSxNQVJoQjtBQVNiOUYsY0FBWSxFQUFFNEYsaURBQVMsQ0FBQ0csSUFUWDs7QUFVYjs7OztBQUtBOzs7O0FBSUE5RixVQUFRLEVBQUUyRixpREFBUyxDQUFDSTtBQW5CUCxDQUFqQixDIiwiZmlsZSI6ImE0NDJjZjItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXVzaWMyMSBmcm9tICcuL211c2ljMjEuZGVidWcuanMnO1xyXG5pbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbW92ZWZ1bjogMCxcclxuICAgICAgICAgICAgbm90ZTogNjAsXHJcbiAgICAgICAgICAgIG5vdGVjb250OiAnJyxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbiA9IG5ldyBtdXNpYzIxLm5vdGUuTm90ZShcIkYjXCIpO1xyXG4gICAgICAgIHZhciBrID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGsuYXBwZW5kKG4pO1xyXG4gICAgICAgIC8vay5hcHBlbmROZXdET00oKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHtub3RlLCBzY2FsZSwgYWNjaWRlbnRhbF9tYXJnaW4sIGhpZGVfdG9vbGJhciwgc2V0UHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHMgPSBuZXcgbXVzaWMyMS5zdHJlYW0uU3RyZWFtKCk7XHJcbiAgICAgICAgbGV0IG4gPSBuZXcgbXVzaWMyMS5ub3RlLk5vdGUobm90ZSk7XHJcbiAgICAgICAgLy9uLmx5cmljcyA9IG5ldyBtdXNpYzIxLm5vdGUuTHlyaWMoJ21mJylcclxuICAgICAgICBuLmFkZEx5cmljKCcnKVxyXG4gICAgICAgIHZhciBjbGVmID0gMDtcclxuICAgICAgICAvL24ucGl0Y2gubWlkaSA9IDQwXHJcbiAgICAgICAgaWYgKG5vdGU8PTQwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9NTkpe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTgwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTEyNyl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzLmNsZWYgPSBjbGVmXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcy5hcHBlbmQobik7XHJcbiAgICAgICAgcy5hY3RpdmVOb3RlID0gcy5fZWxlbWVudHNbMV1cclxuICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnN0eWxlLmZvbnRTaXplID0gMjRcclxuICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnN0eWxlLmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMyknXHJcbiAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDIwcHgsMjBweCknXHJcbiAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS55ID0gMjBcclxuICAgICAgICAvL3ZhciBkMiA9IHMyLmVkaXRhYmxlQWNjaWRlbnRhbERPTSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocylcclxuXHJcbiAgICAgICAgLy92YXIgcyA9IG11c2ljMjEudGlueU5vdGF0aW9uLlRpbnlOb3RhdGlvbihpbml0Tm90ZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIC8vcy5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zLnJlbmRlck9wdGlvbnMubmFpdmVIZWlnaHQgPSAyMDBcclxuICAgICAgICAvL3MucmVuZGVyT3B0aW9ucy50b3AgPSAxMDBcclxuICAgICAgICAvL3MuX25haXZlT2Zmc2V0ID0gMTAwXHJcbiAgICAgICAgcy5yZW5kZXJPcHRpb25zLnNjYWxlRmFjdG9yID0ge3g6c2NhbGUsIHk6c2NhbGV9XHJcbiAgICAgICAgdmFyIGQgPSBzLmVkaXRhYmxlQWNjaWRlbnRhbERPTSgpO1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc3R5bGUuZm9udFNpemUgPSAnMTRweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUuaGVpZ2h0ID0gJzI1cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgICAgICAvL2RbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUucGFkZGluZ1RvcCA9ICc2cHgnXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdHh0WzBdLnlbMF0udmFsdWUgPSA2MFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZFswXS5jaGlsZE5vZGVzWzJdLmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbOF0udGFnTmFtZXMpXHJcbiAgICAgICAgLy9kWzBdLmNoaWxkcmVuWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgIC8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcblxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQgPSBzXHJcbiAgICAgICAgLy90aGlzLm5vdGUgPSBkWzBdLmNoaWxkTm9kZXNbMl0uY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1s4XS50YWdOYW1lc1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKTtcclxuICAgICAgICAvL2suYXBwZW5kKENvbnRhaW5lciknXHJcbiAgICAgICAgLy9Db250YWluZXIuaW5uZXJIVE1MID0gZFxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZENoaWxkKGQpXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgayA9IG5ldyBtdXNpYzIxLmtleWJvYXJkLktleWJvYXJkKCk7XHJcbiAgICAgICBrLnN0YXJ0UGl0Y2ggPSAxODtcclxuICAgICAgIGsuZW5kUGl0Y2ggPSAzOTtcclxuICAgICAgIGsubWFya0MgPSB0cnVlO1xyXG4gICAgICAgay5hcHBlbmRLZXlib2FyZChDb250YWluZXIpO1xyXG4gICAgKi9cclxuICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKVxyXG4gICAgdmFyIGNoaWxkMSA9IGRbMF0uY2hpbGRyZW5bMV1cclxuICAgIGRbMF0ucmVtb3ZlQ2hpbGQoY2hpbGQxKVxyXG4gICAgZFswXS5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRbMF0uY2hpbGRyZW5bMF0uc3R5bGUudmVydGljYWxBbGlnbiA9ICd0b3AnXHJcbiAgICBkWzBdLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpblRvcCA9IGFjY2lkZW50YWxfbWFyZ2luO1xyXG4gICAgZFswXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIHZhciBjaGlsZDAgPSBkWzBdLmNoaWxkcmVuWzBdXHJcbiAgICBkWzBdLnJlbW92ZUNoaWxkKGNoaWxkMClcclxuICAgIC8vZFswXS5hcHBlbmRDaGlsZChjaGlsZDApXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkWzBdKVxyXG5cclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoY2hpbGQwKTtcclxuXHJcbiAgICAgICAvL3ZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlYW1Ib2xkaW5nJylcclxuICAgICAgIHZhciBzdmcgPSB0aGlzLnJlZnMub3V0ZXI5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKVxyXG5cclxuICAgICAgIC8vY29uc29sZS5sb2coc3ZnKVxyXG4gICAgICAgbGV0IGl0ZW0gPSB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGRcclxuICAgICAgIHZhciBhY2NzID0gIHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjaWRlbnRhbFRvb2xiYXInKVswXVxyXG4gICAgICAgaWYoaGlkZV90b29sYmFyKXtcclxuICAgICAgIGFjY3Muc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgfVxyXG4gICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlZnMub3V0ZXI5KVxyXG4gICAgICAgLypcclxuICAgICAgIGl0ZW0gPSB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZFxyXG4gICAgICAgdGhpcy5yZWZzLm91dGVyOS5maXJzdENoaWxkLnJlbW92ZUNoaWxkKGl0ZW0pXHJcbiAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgICAgdGhpcy5yZWZzLm91dGVyOS5maXJzdENoaWxkLmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoaXRlbSlcclxuICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgaXRlbSA9IHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5maXJzdENoaWxkXHJcbiAgICAgICAqL1xyXG5cclxuICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIGZhbHNlKVxyXG5cclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgIFxyXG4gICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmRyYWdnYWJsZSA9IHRydWVcclxuXHJcbiAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgdGhpcy5kcmFnX2NoYW5nZS5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hcHBlbmRDaGlsZChkMlswXSk7XHJcbiAgICAgICAvL2RbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkKVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGl0ZW0gKG9yIGl0ZW1zKSB0byBwcmVzcyBhbmQgaG9sZCBvblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lcklEO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHByZXNzSG9sZEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwicHJlc3NIb2xkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVhc2Ugb3IgZGVjcmVhZSB2YWx1ZSB0byBhZGp1c3QgaG93IGxvbmdcclxuICAgICAgICAgICAgICAgIC8vIG9uZSBzaG91bGQga2VlcCBwcmVzc2luZyBkb3duIGJlZm9yZSB0aGUgcHJlc3NIb2xkXHJcbiAgICAgICAgICAgICAgICAvLyBldmVudCBmaXJlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXNzSG9sZER1cmF0aW9uID0gNTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1RocmVzaG9sZCBvZiBtb3VzZSBtb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZXRocmVzaG9sZCA9IDEwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuaW5nIGZvciB0aGUgbW91c2UgYW5kIHRvdWNoIGV2ZW50cyAgICBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbm90UHJlc3NpbmdEb3duLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG5vdFByZXNzaW5nRG93blJlbCwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBwcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIG5vdFByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC8vIExpc3RlbmluZyBmb3Igb3VyIGN1c3RvbSBwcmVzc0hvbGQgZXZlbnRcclxuICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJwcmVzc0hvbGRcIiwgZG9Tb21ldGhpbmcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLnJlZnMub3V0ZXI5XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgbGV0IGluaXRfeCA9IDBcclxuICAgICAgICAgICAgICAgICBsZXQgaW5pdF95ID0gMFxyXG4gICAgICAgICAgICAgICAgIGxldCBkeW5hbWljcyA9ICdtZidcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIHRvdWNoIHBvaW50IHdoZW4gcHJlc3NpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJlc3NpbmdEb3duKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSwgZS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IE1vdXNlRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeCA9IGUueFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeSA9IGUueVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IFRvdWNoRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeCA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF95ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQcmVzc2luZyFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZW5kIHZhbHVlcyBvbiBjbGljayByZWxlYXNlXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBub3RQcmVzc2luZ0Rvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS50ZXh0ID0gJydcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm90ZV9vdXRwdXQgPSBzLmFjdGl2ZU5vdGUucGl0Y2gubWlkaVxyXG4gICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vdGVfb3V0cHV0LCBkeW5hbWljcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldFByb3BzKSBzZXRQcm9wcyh7bm90ZTogbm90ZV9vdXRwdXQsIGR5bjpkeW5hbWljc30pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG5vdFByZXNzaW5nRG93blJlbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY2hhbmdlX25vdGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7ICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAvLyBSdW5zIGF0IDYwZnBzIHdoZW4geW91IGFyZSBwcmVzc2luZyBkb3duXHJcbiAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRpbWVyKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUaW1lciB0aWNrIVwiKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlciA8IHByZXNzSG9sZER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lcklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlByZXNzIHRocmVzaG9sZCByZWFjaGVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlzcGF0Y2hFdmVudChwcmVzc0hvbGRFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBQUmdyYW1tYXRpY2FsbHkgY2xpY2sgYnV0dG9ucyBhbmRcclxuICAgICAgICAgICAgICAgICAgLy92YXIgYnV0dG9ucyA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NpZGVudGFsVG9vbGJhcicpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICB2YXIgYnV0dG9ucyA9ICB0aGlzLnJlZnMub3V0ZXI5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY2lkZW50YWxUb29sYmFyJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvU29tZXRoaW5nKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljcyA9ICdtZidcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zWzFdLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInByZXNzSG9sZCBldmVudCBmaXJlZCFcIik7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBtb3VzZSBtb3ZlbWVudCBhbmQgY2hhbmdlIGFjY2lkZW50YWxzIGFuZCBkeW5hbWljc1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2Vfbm90ZShlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IE1vdXNlRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gZS54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBlLnlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IFRvdWNoRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGUudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoeCAtIGluaXRfeCkgPiBjaGFuZ2V0aHJlc2hvbGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmFjdGl2ZU5vdGUubHlyaWNzWzBdLnRleHQgPSAnZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljcyA9ICdmJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHggLSBpbml0X3gpIDwgLWNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYWN0aXZlTm90ZS5seXJpY3NbMF0udGV4dCA9ICdwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ3AnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5hY3RpdmVOb3RlLmx5cmljc1swXS50ZXh0ID0gJ21mJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ21mJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlmICgoeSAtIGluaXRfeSkgPiBjaGFuZ2V0aHJlc2hvbGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMF0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHkgLSBpbml0X3kpIDwgLWNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMl0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zWzFdLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXAoKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKGUpe1xyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIHN2ZyA9IHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZycpIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAvL2lmIChzZXRQcm9wcykgc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpfSlcclxuICAgIH1cclxuXHJcbiAgICAvL0NoYW5nZSBjbGVmIGFjY29yZGluZyB0byBub3RlIHZhbHVlXHJcbiAgICBjaGVjayhldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdGhpcy5ub3RlID0gdGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGlcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD00MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD01OSl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTgwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD0xMjcpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMik7XHJcbiAgICAgICAgLy90aGlzLm1vdmVmdW4gPSB0aGlzLmRyYWdfY2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdmVmdW4sIGZhbHNlKVxyXG4gICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAvLyAgICB0aGlzLnJlZnMub3V0ZXI5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZWZ1bilcclxuICAgICAgICAvL30pLmNhbGwodGhpcyksIGZhbHNlKVxyXG4gICAgICAgIC8vdmFyIHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKSBcclxuXHJcbiAgICAgICAgLy9pZiAoc2V0UHJvcHMpIHNldFByb3BzKHtub3RlOiB0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaX0pXHJcbiAgICAgICAgdmFyIHN2ZyA9IHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZycpIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQucmVkcmF3RE9NKHN2ZylcclxuXHJcblxyXG4gICAgICBcclxuICAgICAgICAvL3NldFByb3BzKHtub3RlOiB0aGlzLm5vdGV9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGkpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzLCBub3RlfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB0aGlzLm5vdGUgPSBub3RlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9NjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ2Jhc3MnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD04MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9MTI3KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDIpO1xyXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlYW1Ib2xkaW5nJykgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udC5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgIHNldFByb3BzKHtub3RlOiB0aGlzLm5vdGV9KVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaSlcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ub3RlICE9PSBwcmV2UHJvcHMubm90ZSl7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXI5XHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwKClcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3R7aWR9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPVwib3V0ZXI5XCIgaWQ9e2lkfSAvKiBvbkNsaWNrPSB7dGhpcy5jaGVjay5iaW5kKHRoaXMpfSAqLyBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkVkaXQuZGVmYXVsdFByb3BzID0ge25vdGU6IDYwLCBkeW46ICdtZicsIHNjYWxlOiAxLjUsIGFjY2lkZW50YWxfbWFyZ2luOiA1NSwgaGlkZV90b29sYmFyOiB0cnVlfTtcclxuXHJcbkVkaXQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBub3RlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZHluOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBhY2NpZGVudGFsX21hcmdpbjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhpZGVfdG9vbGJhcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
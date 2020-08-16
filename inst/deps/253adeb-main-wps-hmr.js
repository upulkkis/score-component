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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvRWRpdC5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmVmdW4iLCJub3RlIiwibm90ZWNvbnQiLCJ4IiwieSIsInNjYWxlIiwiYWNjaWRlbnRhbF9tYXJnaW4iLCJoaWRlX3Rvb2xiYXIiLCJzZXRQcm9wcyIsInMiLCJtdXNpYzIxIiwiU3RyZWFtIiwibiIsIk5vdGUiLCJjbGVmIiwiQ2xlZiIsImFwcGVuZCIsImFjdGl2ZU5vdGUiLCJfZWxlbWVudHMiLCJyZW5kZXJPcHRpb25zIiwic2NhbGVGYWN0b3IiLCJkIiwiZWRpdGFibGVBY2NpZGVudGFsRE9NIiwiY2hpbGRyZW4iLCJzdHlsZSIsImZvbnRTaXplIiwiaGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImNoaWxkMSIsInJlbW92ZUNoaWxkIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImNoaWxkMCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVmcyIsIm91dGVyOSIsInN2ZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImZpcnN0Q2hpbGQiLCJhY2NzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2giLCJiaW5kIiwiY2hlY2siLCJ0aW1lcklEIiwiY291bnRlciIsInByZXNzSG9sZEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwcmVzc0hvbGREdXJhdGlvbiIsImNoYW5nZXRocmVzaG9sZCIsInByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93biIsIm5vdFByZXNzaW5nRG93blJlbCIsImRvU29tZXRoaW5nIiwiY29udGFpbmVyIiwiaW5pdF94IiwiaW5pdF95IiwiZHluYW1pY3MiLCJlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjaGFuZ2Vfbm90ZSIsInRvU3RyaW5nIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub3RlX291dHB1dCIsInBpdGNoIiwibWlkaSIsImR5biIsImRpc3BhdGNoRXZlbnQiLCJidXR0b25zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGljayIsInJlZHJhd0RPTSIsInNldHVwIiwiZXZlbnQiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsImxhc3RDaGlsZCIsImlkIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQywrQ0FBRyxDQUFDQyxJQUFmOztJQUVxQkMsSTs7Ozs7QUFFakIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFFZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxhQUFPLEVBQUUsQ0FEQTtBQUVUQyxVQUFJLEVBQUUsRUFGRztBQUdUQyxjQUFRLEVBQUUsRUFIRDtBQUlUQyxPQUFDLEVBQUUsQ0FKTTtBQUtUQyxPQUFDLEVBQUU7QUFMTSxLQUFiO0FBSmU7QUFZbEI7Ozs7NEJBRU87QUFDSjs7Ozs7Ozs7QUFESSx3QkFTNkQsS0FBS04sS0FUbEU7QUFBQSxVQVNHRyxJQVRILGVBU0dBLElBVEg7QUFBQSxVQVNTSSxLQVRULGVBU1NBLEtBVFQ7QUFBQSxVQVNnQkMsaUJBVGhCLGVBU2dCQSxpQkFUaEI7QUFBQSxVQVNtQ0MsWUFUbkMsZUFTbUNBLFlBVG5DO0FBQUEsVUFTaURDLFFBVGpELGVB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RSxDQUZrRTtBQUczRUMsc0JBQVksRUFBRSxDQUg2RDtBQUkzRWxFLHVCQUFhLEVBQUUsS0FKNEQ7QUFLM0VHLGlCQUFPLEVBQUU7QUFMa0U7QUFBeEUsUUFBUDtBQVFIOzs7O0VBNVY2QmdFLCtDOzs7QUFnV2xDakcsSUFBSSxDQUFDa0csWUFBTCxHQUFvQjtBQUFDOUYsTUFBSSxFQUFFLEVBQVA7QUFBVzZFLEtBQUcsRUFBRSxJQUFoQjtBQUFzQnpFLE9BQUssRUFBRSxHQUE3QjtBQUFrQ0MsbUJBQWlCLEVBQUUsRUFBckQ7QUFBeURDLGNBQVksRUFBRTtBQUF2RSxDQUFwQjtBQUVBVixJQUFJLENBQUNtRyxTQUFMLEdBQWlCO0FBQ2I7OztBQUdBTixJQUFFLEVBQUVPLGlEQUFTLENBQUNDLE1BSkQ7QUFLYmpHLE1BQUksRUFBRWdHLGlEQUFTLENBQUNFLE1BTEg7QUFNYnJCLEtBQUcsRUFBRW1CLGlEQUFTLENBQUNDLE1BTkY7QUFPYjdGLE9BQUssRUFBRTRGLGlEQUFTLENBQUNFLE1BUEo7QUFRYjdGLG1CQUFpQixFQUFFMkYsaURBQVMsQ0FBQ0UsTUFSaEI7QUFTYjVGLGNBQVksRUFBRTBGLGlEQUFTLENBQUNHLElBVFg7O0FBVWI7Ozs7QUFLQTs7OztBQUlBNUYsVUFBUSxFQUFFeUYsaURBQVMsQ0FBQ0k7QUFuQlAsQ0FBakIsQyIsImZpbGUiOiIyNTNhZGViLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG11c2ljMjEgZnJvbSAnLi9tdXNpYzIxLmRlYnVnLmpzJztcclxuaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vdmVmdW46IDAsXHJcbiAgICAgICAgICAgIG5vdGU6IDYwLFxyXG4gICAgICAgICAgICBub3RlY29udDogJycsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHNldHVwKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG4gPSBuZXcgbXVzaWMyMS5ub3RlLk5vdGUoXCJGI1wiKTtcclxuICAgICAgICB2YXIgayA9IG5ldyBtdXNpYzIxLnN0cmVhbS5TdHJlYW0oKTtcclxuICAgICAgICBrLmFwcGVuZChuKTtcclxuICAgICAgICAvL2suYXBwZW5kTmV3RE9NKCk7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB7bm90ZSwgc2NhbGUsIGFjY2lkZW50YWxfbWFyZ2luLCBoaWRlX3Rvb2xiYXIsIHNldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBzID0gbmV3IG11c2ljMjEuc3RyZWFtLlN0cmVhbSgpO1xyXG4gICAgICAgIGxldCBuID0gbmV3IG11c2ljMjEubm90ZS5Ob3RlKG5vdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vbi5hZGRMeXJpYygnbWYnKVxyXG4gICAgICAgIHZhciBjbGVmID0gMDtcclxuICAgICAgICAvL24ucGl0Y2gubWlkaSA9IDQwXHJcbiAgICAgICAgaWYgKG5vdGU8PTQwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAobm90ZTw9NjApe1xyXG4gICAgICAgICAgICBjbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTgwKXtcclxuICAgICAgICAgICAgY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKG5vdGU8PTEyNyl7XHJcbiAgICAgICAgICAgIGNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzLmNsZWYgPSBjbGVmXHJcbiAgICAgICAgcy5hcHBlbmQobik7XHJcbiAgICAgICAgcy5hY3RpdmVOb3RlID0gcy5fZWxlbWVudHNbMV1cclxuXHJcbiAgICAgICAgLy92YXIgZDIgPSBzMi5lZGl0YWJsZUFjY2lkZW50YWxET00oKTtcclxuXHJcbiAgICAgICAgLy92YXIgcyA9IG11c2ljMjEudGlueU5vdGF0aW9uLlRpbnlOb3RhdGlvbihpbml0Tm90ZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIC8vcy5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHMpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcy5yZW5kZXJPcHRpb25zLm5haXZlSGVpZ2h0ID0gMjAwXHJcbiAgICAgICAgLy9zLnJlbmRlck9wdGlvbnMudG9wID0gMTAwXHJcbiAgICAgICAgLy9zLl9uYWl2ZU9mZnNldCA9IDEwMFxyXG4gICAgICAgIHMucmVuZGVyT3B0aW9ucy5zY2FsZUZhY3RvciA9IHt4OnNjYWxlLCB5OnNjYWxlfVxyXG4gICAgICAgIHZhciBkID0gcy5lZGl0YWJsZUFjY2lkZW50YWxET00oKTtcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnXHJcbiAgICAgICAgZFswXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUuZm9udFNpemUgPSAnMTRweCdcclxuICAgICAgICBkWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLmhlaWdodCA9ICcyNXB4J1xyXG4gICAgICAgIGRbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uc3R5bGUudmVydGljYWxBbGlnbiA9ICd0b3AnXHJcbiAgICAgICAgLy9kWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLnN0eWxlLnBhZGRpbmdUb3AgPSAnNnB4J1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRbMF0uY2hpbGROb2Rlc1syXS5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzhdLnRhZ05hbWVzKVxyXG4gICAgICAgIC8vZFswXS5jaGlsZHJlblsyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgICAvL2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZWNvbnQgPSBzXHJcbiAgICAgICAgLy90aGlzLm5vdGUgPSBkWzBdLmNoaWxkTm9kZXNbMl0uY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1s4XS50YWdOYW1lc1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKTtcclxuICAgICAgICAvL2suYXBwZW5kKENvbnRhaW5lciknXHJcbiAgICAgICAgLy9Db250YWluZXIuaW5uZXJIVE1MID0gZFxyXG4gICAgICAgIC8vQ29udGFpbmVyLmFwcGVuZENoaWxkKGQpXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgayA9IG5ldyBtdXNpYzIxLmtleWJvYXJkLktleWJvYXJkKCk7XHJcbiAgICAgICBrLnN0YXJ0UGl0Y2ggPSAxODtcclxuICAgICAgIGsuZW5kUGl0Y2ggPSAzOTtcclxuICAgICAgIGsubWFya0MgPSB0cnVlO1xyXG4gICAgICAgay5hcHBlbmRLZXlib2FyZChDb250YWluZXIpO1xyXG4gICAgKi9cclxuICAgIC8vQ29udGFpbmVyLmFwcGVuZChrKVxyXG4gICAgdmFyIGNoaWxkMSA9IGRbMF0uY2hpbGRyZW5bMV1cclxuICAgIGRbMF0ucmVtb3ZlQ2hpbGQoY2hpbGQxKVxyXG4gICAgZFswXS5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRbMF0uY2hpbGRyZW5bMF0uc3R5bGUudmVydGljYWxBbGlnbiA9ICd0b3AnXHJcbiAgICBkWzBdLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpblRvcCA9IGFjY2lkZW50YWxfbWFyZ2luO1xyXG4gICAgZFswXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIHZhciBjaGlsZDAgPSBkWzBdLmNoaWxkcmVuWzBdXHJcbiAgICBkWzBdLnJlbW92ZUNoaWxkKGNoaWxkMClcclxuICAgIC8vZFswXS5hcHBlbmRDaGlsZChjaGlsZDApXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCdcclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkWzBdKVxyXG5cclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgIHRoaXMucmVmcy5vdXRlcjkuYXBwZW5kQ2hpbGQoY2hpbGQwKTtcclxuXHJcbiAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpIFxyXG4gICAgICAgY29uc29sZS5sb2coc3ZnKVxyXG4gICAgICAgbGV0IGl0ZW0gPSB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGRcclxuICAgICAgIHZhciBhY2NzID0gIHRoaXMucmVmcy5vdXRlcjkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjaWRlbnRhbFRvb2xiYXInKVswXVxyXG4gICAgICAgaWYoaGlkZV90b29sYmFyKXtcclxuICAgICAgIGFjY3Muc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgfVxyXG4gICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlZnMub3V0ZXI5KVxyXG4gICAgICAgLypcclxuICAgICAgIGl0ZW0gPSB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZFxyXG4gICAgICAgdGhpcy5yZWZzLm91dGVyOS5maXJzdENoaWxkLnJlbW92ZUNoaWxkKGl0ZW0pXHJcbiAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICB0aGlzLnJlZnMub3V0ZXI5LmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgICAgdGhpcy5yZWZzLm91dGVyOS5maXJzdENoaWxkLmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoaXRlbSlcclxuICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgaXRlbSA9IHRoaXMucmVmcy5vdXRlcjkuZmlyc3RDaGlsZC5maXJzdENoaWxkXHJcbiAgICAgICAqL1xyXG5cclxuICAgICAgdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgZmFsc2UpXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgIFxyXG4gICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmRyYWdnYWJsZSA9IHRydWVcclxuXHJcbiAgICAgICAvL3RoaXMucmVmcy5vdXRlcjkuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgdGhpcy5kcmFnX2NoYW5nZS5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hcHBlbmRDaGlsZChkMlswXSk7XHJcbiAgICAgICAvL2RbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkKVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGl0ZW0gKG9yIGl0ZW1zKSB0byBwcmVzcyBhbmQgaG9sZCBvblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lcklEO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHByZXNzSG9sZEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwicHJlc3NIb2xkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVhc2Ugb3IgZGVjcmVhZSB2YWx1ZSB0byBhZGp1c3QgaG93IGxvbmdcclxuICAgICAgICAgICAgICAgIC8vIG9uZSBzaG91bGQga2VlcCBwcmVzc2luZyBkb3duIGJlZm9yZSB0aGUgcHJlc3NIb2xkXHJcbiAgICAgICAgICAgICAgICAvLyBldmVudCBmaXJlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXNzSG9sZER1cmF0aW9uID0gNTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1RocmVzaG9sZCBvZiBtb3VzZSBtb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZXRocmVzaG9sZCA9IDEwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuaW5nIGZvciB0aGUgbW91c2UgYW5kIHRvdWNoIGV2ZW50cyAgICBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbm90UHJlc3NpbmdEb3duLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG5vdFByZXNzaW5nRG93blJlbCwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBwcmVzc2luZ0Rvd24sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIG5vdFByZXNzaW5nRG93biwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC8vIExpc3RlbmluZyBmb3Igb3VyIGN1c3RvbSBwcmVzc0hvbGQgZXZlbnRcclxuICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJwcmVzc0hvbGRcIiwgZG9Tb21ldGhpbmcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLnJlZnMub3V0ZXI5XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgbGV0IGluaXRfeCA9IDBcclxuICAgICAgICAgICAgICAgICBsZXQgaW5pdF95ID0gMFxyXG4gICAgICAgICAgICAgICAgIGxldCBkeW5hbWljcyA9ICdtZidcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIHRvdWNoIHBvaW50IHdoZW4gcHJlc3NpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJlc3NpbmdEb3duKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSwgZS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IE1vdXNlRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeCA9IGUueFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeSA9IGUueVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IFRvdWNoRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfeCA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF95ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQcmVzc2luZyFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZW5kIHZhbHVlcyBvbiBjbGljayByZWxlYXNlXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBub3RQcmVzc2luZ0Rvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdGVfb3V0cHV0ID0gcy5hY3RpdmVOb3RlLnBpdGNoLm1pZGlcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vdGVfb3V0cHV0LCBkeW5hbWljcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe25vdGU6IG5vdGVfb3V0cHV0LCBkeW46ZHluYW1pY3N9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBub3RQcmVzc2luZ0Rvd25SZWwoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZXJJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNoYW5nZV9ub3RlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjaGFuZ2Vfbm90ZSwgZmFsc2UpOyAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgLy8gUnVucyBhdCA2MGZwcyB3aGVuIHlvdSBhcmUgcHJlc3NpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0aW1lcigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGltZXIgdGljayFcIik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBwcmVzc0hvbGREdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZXJJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQcmVzcyB0aHJlc2hvbGQgcmVhY2hlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc3BhdGNoRXZlbnQocHJlc3NIb2xkRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gUFJncmFtbWF0aWNhbGx5IGNsaWNrIGJ1dHRvbnMgYW5kXHJcbiAgICAgICAgICAgICAgICAgIHZhciBidXR0b25zID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY2lkZW50YWxUb29sYmFyJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvU29tZXRoaW5nKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljcyA9ICdtZidcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zWzFdLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInByZXNzSG9sZCBldmVudCBmaXJlZCFcIik7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBtb3VzZSBtb3ZlbWVudCBhbmQgY2hhbmdlIGFjY2lkZW50YWxzIGFuZCBkeW5hbWljc1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2Vfbm90ZShlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IE1vdXNlRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gZS54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBlLnlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50b1N0cmluZygpPT09XCJbb2JqZWN0IFRvdWNoRXZlbnRdXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGUudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoeCAtIGluaXRfeCkgPiBjaGFuZ2V0aHJlc2hvbGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljcyA9ICdmJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHggLSBpbml0X3gpIDwgLWNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNzID0gJ3AnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY3MgPSAnbWYnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCh5IC0gaW5pdF95KSA+IGNoYW5nZXRocmVzaG9sZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1swXS5jbGljaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcy5yZWRyYXdET00oc3ZnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoeSAtIGluaXRfeSkgPCAtY2hhbmdldGhyZXNob2xkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1syXS5jbGljaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucmVkcmF3RE9NKHN2ZylcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbMV0uY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwKClcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKGUpe1xyXG4gICAgICAgIHZhciBzdmcgPSB0aGlzLnJlZnMub3V0ZXI5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKSBcclxuICAgICAgICB0aGlzLm5vdGVjb250LnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyh7bm90ZTogdGhpcy5ub3RlY29udC5hY3RpdmVOb3RlLnBpdGNoLm1pZGl9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ2hhbmdlIGNsZWYgYWNjb3JkaW5nIHRvIG5vdGUgdmFsdWVcclxuICAgIGNoZWNrKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB0aGlzLm5vdGUgPSB0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTQwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJywgLTEpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTYwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCdiYXNzJyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZTw9ODApe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTEyNyl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnLCAyKTtcclxuICAgICAgICAvL3RoaXMubW92ZWZ1biA9IHRoaXMuZHJhZ19jaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIC8vdGhpcy5yZWZzLm91dGVyOS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW92ZWZ1biwgZmFsc2UpXHJcbiAgICAgICAgLy90aGlzLnJlZnMub3V0ZXI5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIC8vICAgIHRoaXMucmVmcy5vdXRlcjkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlZnVuKVxyXG4gICAgICAgIC8vfSkuY2FsbCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgLy92YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWFtSG9sZGluZycpIFxyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpfSlcclxuICAgICAgICB2YXIgc3ZnID0gdGhpcy5yZWZzLm91dGVyOS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZnJykgXHJcbiAgICAgICAgdGhpcy5ub3RlY29udC5yZWRyYXdET00oc3ZnKVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICAgIC8vc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vdGVjb250LmFjdGl2ZU5vdGUucGl0Y2gubWlkaSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHMsIG5vdGV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGVcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD00MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycsIC0xKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD02MCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZignYmFzcycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0aGlzLm5vdGU8PTgwKXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlY29udC5jbGVmID0gbmV3IG11c2ljMjEuY2xlZi5DbGVmKCd0cmVibGUnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodGhpcy5ub3RlPD0xMjcpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVjb250LmNsZWYgPSBuZXcgbXVzaWMyMS5jbGVmLkNsZWYoJ3RyZWJsZScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubm90ZWNvbnQuY2xlZiA9IG5ldyBtdXNpYzIxLmNsZWYuQ2xlZigndHJlYmxlJywgMik7XHJcbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0cmVhbUhvbGRpbmcnKSBcclxuICAgICAgICB0aGlzLm5vdGVjb250LnJlZHJhd0RPTShzdmcpXHJcbiAgICAgICAgc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90ZWNvbnQuYWN0aXZlTm90ZS5waXRjaC5taWRpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyOVxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkfT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyOVwiIGlkPXtpZH0gLyogb25DbGljaz0ge3RoaXMuY2hlY2suYmluZCh0aGlzKX0gKi8gc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5FZGl0LmRlZmF1bHRQcm9wcyA9IHtub3RlOiA2MCwgZHluOiAnbWYnLCBzY2FsZTogMS41LCBhY2NpZGVudGFsX21hcmdpbjogNTUsIGhpZGVfdG9vbGJhcjogdHJ1ZX07XHJcblxyXG5FZGl0LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbm90ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGR5bjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYWNjaWRlbnRhbF9tYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoaWRlX3Rvb2xiYXI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
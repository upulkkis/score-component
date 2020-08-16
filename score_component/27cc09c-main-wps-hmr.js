webpackHotUpdatescore_component("main",{

/***/ "./src/lib/components/Pianoroll.js":
/*!*****************************************!*\
  !*** ./src/lib/components/Pianoroll.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pianoroll; });
/* harmony import */ var vexflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vexflow */ "./node_modules/vexflow/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _testing_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testing.css */ "./src/lib/components/testing.css");
/* harmony import */ var _testing_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_testing_css__WEBPACK_IMPORTED_MODULE_3__);
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





var VF = vexflow__WEBPACK_IMPORTED_MODULE_0__["default"].Flow;

var Pianoroll = /*#__PURE__*/function (_Component) {
  _inherits(Pianoroll, _Component);

  var _super = _createSuper(Pianoroll);

  function Pianoroll(props) {
    var _this;

    _classCallCheck(this, Pianoroll);

    _this = _super.call(this, props);
    _this.notes = 0;
    _this.target = 0;
    _this.instruments = 0;
    _this.renderer = 0;
    _this.context = 0;
    _this.onClick = {};
    _this.onHover = {};
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Pianoroll, [{
    key: "setupScore",
    value: function setupScore() {
      function separate(MyNotes) {
        var note_list = [];
        var accidental_list = []; //for (var i=0; i<MyNotes.length; i++) {

        var entry = MyNotes; //If there is just one note, make it an array

        if (!Array.isArray(entry)) {
          entry = [entry];
        } //go through each note in chord
        // ToDo: Add color information to notes


        var chord_accidentials = [];
        var new_notes = [];

        for (var k = 0; k < entry.length; k++) {
          var new_key = entry[k][0];
          var new_octave = entry[k][entry[k].length - 1];

          if (entry[k].length > 2) {
            var new_accidential = entry[k][1];
          } else {
            var new_accidential = "n";
          } //make a string of notes


          new_notes.push(new_key.concat("/", new_octave)); //make an array of accidentials

          chord_accidentials.push(new_accidential);
        }

        note_list.push(new_notes);
        accidental_list.push(chord_accidentials); //  }

        return [note_list[0], accidental_list];
      }

      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          width = _this$props.width,
          height = _this$props.height,
          stave_spacing = _this$props.stave_spacing,
          stave_list = _this$props.stave_list,
          scale = _this$props.scale,
          bar_offset = _this$props.bar_offset;
      var padding = 100;
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(width + padding, height);
      var context = renderer.getContext();

      for (var bar = 0; bar < stave_list.length; bar++) {
        // if (bar===0){
        //     padding=100
        // } 
        //Create staves
        var staves = [];
        var stave_lines = [];

        for (var i = 0; i < stave_list[bar].length; i++) {
          staves.push(new VF.Stave(padding + bar * (width / stave_list.length), stave_spacing * (i + 1), width / stave_list.length));

          if (bar === 0) {
            staves[i].addClef(stave_list[bar][i].clef);
            staves[i].setText(stave_list[bar][i].name, VF.Modifier.Position.LEFT, {
              shift_x: -60
            });
          } else if (i == 0) {
            staves[i].setText(bar + 1 + bar_offset, VF.Modifier.Position.LEFT, {
              shift_y: -40,
              shift_x: 20
            });
          }

          staves[i].setContext(context).draw();
        }

        var connector = new VF.StaveConnector(staves[0], staves[staves.length - 1]);
        connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
        connector.setContext(context);
        connector.draw();

        if (bar === 0) {
          connector.setType(VF.StaveConnector.type.BRACKET);
          connector.setContext(context);
          connector.draw();
        }

        var note_list = [];
        var voices = []; //Go through all bars

        for (var k = 0; k < stave_list[bar].length; k++) {
          note_list.push([]);
          voices.push(new VF.Voice({
            num_beats: 4,
            beat_value: 4
          }).setMode(2)); //Go through all staves

          for (var i = 0; i < stave_list[bar][k].notes.length; i++) {
            var newClef = stave_list[bar][k].clef;
            var note_parts = separate(stave_list[bar][k].notes[i]);
            var prev_parts = [[[]], [[]]]; //Remember to add colors to notes somehow...

            var note_color = 'black';
            var color_list = stave_list[bar][k].colors; //If color property is defined, do something with colors...

            if (typeof color_list !== 'undefined') {
              note_color = color_list[i];
            }

            if (note_parts[0].length) {
              var addNote = new VF.StaveNote({
                clef: newClef,
                keys: note_parts[0],
                duration: "q"
              });
              addNote.setAttribute('id', '_' + bar + '_' + k + '_' + i);
              addNote.note_heads[0].setAttribute('id', 'b' + bar + 'i' + k + 'n' + i);
              console.log(addNote);
              addNote.setStyle({
                strokeStyle: 'none',
                fillStyle: note_color
              });
            } else {
              var addNote = new VF.GhostNote('q');
            } //Remember the previous part for check


            if (i > 0) {
              prev_parts = separate(stave_list[bar][k].notes[i - 1]);
            }

            for (var j = 0; j < note_parts[1][0].length; j++) {
              //Check if the note is the same as previous
              var same_note = note_parts[0][0] === prev_parts[0][0] && note_parts[0][0][0] === prev_parts[0][0][0];

              if (note_parts[1][0][j] !== 'n' && !same_note) {
                addNote.addAccidental(j, new VF.Accidental(note_parts[1][0][j]));
              }
            }

            note_list[k].push(addNote);

            if (i > 0 && same_note) {
              // && note_list[k][i-1] === note_list[k][i]){
              if (addNote.attrs.type !== 'GhostNote') {
                //Gotta do this to prevent errors
                addNote.setStyle({
                  strokeStyle: 'none',
                  fillStyle: 'none'
                });
                addNote.setLedgerLineStyle({
                  strokeStyle: 'none'
                });
                var staveline = new VF.StaveLine({
                  first_note: note_list[k][i - 1],
                  last_note: note_list[k][i],
                  first_indices: 0,
                  last_indices: 0
                });
                staveline.render_options.line_width = 3;
                staveline.render_options.color = note_color;
                staveline.render_options.padding_left = -8;
                staveline.render_options.padding_right = -14;
                stave_lines.push(staveline);
              }
            }
          }

          voices[k].addTickables(note_list[k]);
          var format_width = width / stave_list.length - 30;

          if (bar === 0) {
            format_width = format_width - 20;
          } //console.log(staves[k].setNoteStartX(k*width))


          var formatter = new VF.Formatter().joinVoices([voices[k]]).format([voices[k]], format_width); //voices[k].draw(context, staves[k]);
        } //var formatter = new VF.Formatter().joinVoices(voices).format(voices, 50);
        //var formatter = new VF.Formatter().format(voices, 100);


        for (var k = 0; k < stave_list[bar].length; k++) {
          voices[k].draw(context, staves[k]);
        }

        if (stave_lines) {
          for (var p = 0; p < stave_lines.length; p++) {
            if (typeof stave_lines[p] !== "undefined") {
              stave_lines[p].setContext(context);
              stave_lines[p].draw();
            }
          }
        }
      }

      context.scale(scale, scale);
      this.refs.outer3.appendChild(svgContainer);
      this.refs.outer3.addEventListener("mouseover", this.check.bind(this), false);
      this.refs.outer3.addEventListener("click", this.checkclick.bind(this), false);
      this.refs.outer3.addEventListener("mouseleave", this.cleardiv.bind(this), false); //console.log(this.refs.outer3)

      var div = document.createElement('div');
      div.setAttribute('id', 'pianoroll_tooltip');
      div.setAttribute('style', "position: relative; left: 0px; top: 0px;"); //console.log(div)

      this.refs.outer3.appendChild(div);
    }
  }, {
    key: "check",
    value: function check(event) {
      //if (!event.target.closest('.vf-stavenote')) {return;} 
      if (!event.target.parentElement.closest('.vf-stavenote')) {
        return;
      }

      var setProps = this.props.setProps;
      var tt = document.getElementById('pianoroll_tooltip'); //console.log(event)

      var left = event.pageX + tt.clientWidth + 10 < document.body.clientWidth ? event.pageX + 10 + "px" : document.body.clientWidth + 5 - event.clientWidth + "px";
      var top = event.pageY + tt.clientHeight + 10 < document.body.clientHeight ? event.pageY + 10 + "px" : document.body.clientHeight + 5 - tt.clientHeight + "px";
      console.log(event);
      left = event.offsetX + "px";
      top = event.offsetY + 30 + 'px';
      tt.setAttribute('style', 'padding: 5px;border-width: 2px;border-radius:6px;border-color: black;border-style: solid;position: absolute; left: ' + left + ';' + 'top:' + top + '; background-color: #eed;');
      var msg = '';

      if (event.target.parentElement.className.baseVal === "vf-notehead") {
        //console.log(event.target.parentElement.parentElement.parentElement.id)
        msg = event.target.parentElement.parentElement.parentElement.id;
      } else {
        //console.log(event.target.parentElement.id)
        msg = event.target.parentElement.id;
      }

      var res = msg.split('_');
      var bar = parseInt(res[1]) + 1;
      var inst = parseInt(res[2]) + 1;
      var idx = parseInt(res[3]);
      tt.innerHTML = "bar: " + bar + " instrument: " + inst + " index: " + idx;
      if (setProps) setProps({
        onHover: {
          bar: bar,
          inst: inst,
          idx: idx
        }
      }); //this.note = parseInt(event.target.id)
      //console.log(event.target.id);
      //setProps({note: this.note})
      //console.log(this.note)
    }
  }, {
    key: "checkclick",
    value: function checkclick(event) {
      if (!event.target.parentElement.closest('.vf-stavenote')) {
        return;
      }

      var tt = document.getElementById('pianoroll_tooltip'); //tt.style.animation = '{padding: 2px;} 1s'

      tt.style.padding = '2px';
      console.log(tt);
      var setProps = this.props.setProps;
      var msg = '';

      if (event.target.parentElement.className.baseVal === "vf-notehead") {
        //console.log(event.target.parentElement.parentElement.parentElement.id)
        msg = event.target.parentElement.parentElement.parentElement.id;
      } else {
        //console.log(event.target.parentElement.id)
        msg = event.target.parentElement.id;
      }

      var res = msg.split('_');
      var bar = parseInt(res[1]) + 1;
      var inst = parseInt(res[2]) + 1;
      var idx = parseInt(res[3]); //console.log(msg)

      if (setProps) setProps({
        onClick: {
          bar: bar,
          inst: inst,
          idx: idx
        }
      });
    }
  }, {
    key: "cleardiv",
    value: function cleardiv(event) {
      var tt = document.getElementById('pianoroll_tooltip');
      tt.innerHTML = '';
      tt.setAttribute('style', 'display: none');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupScore();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //if (this.notes !== prevProps.notes || this.instruments !== prevProps.instruments || this.target !== prevProps.target){
      //const {id} = this.props;
      var element = this.refs.outer3;

      while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
      }

      this.setupScore(); //}
    }
    /*
    componentWillReceiveProps(nextProps) {   
        if (this.notes !== nextProps.notes || this.instruments !== nextProps.instruments || this.target !== nextProps.target){
            this.notes = nextProps.notes
            this.instruments = nextProps.instruments
            this.target = nextProps.target
          } 
    }
    shouldComponentUpdate(nextProps){
        return (this.props.notes !== nextProps.notes || this.props.instruments !== nextProps.instruments || this.props.target !== nextProps.target);
    }
    */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          width = _this$props2.width,
          height = _this$props2.height,
          stave_spacing = _this$props2.stave_spacing,
          stave_list = _this$props2.stave_list;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        ontouchstart: "",
        ref: "outer3",
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          display: "inline-block"
        }
      });
    }
  }]);

  return Pianoroll;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Pianoroll.defaultProps = {
  scale: 1,
  bar_offset: 0
};
Pianoroll.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  stave_spacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  bar_offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onHover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
  * A Array containing object to hold bars as [[bar1],[bar2] etc..].
  * Bars containing staves as {clef:'string', name:'string', 'notes':[array or nested array of notenames], colors:[array that matches notes-array]}
  */
  stave_list: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwibm90ZXMiLCJ0YXJnZXQiLCJpbnN0cnVtZW50cyIsInJlbmRlcmVyIiwiY29udGV4dCIsIm9uQ2xpY2siLCJvbkhvdmVyIiwic3RhdGUiLCJ4IiwieSIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5vdGVfbGlzdCIsImFjY2lkZW50YWxfbGlzdCIsImVudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hvcmRfYWNjaWRlbnRpYWxzIiwibmV3X25vdGVzIiwiayIsImxlbmd0aCIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwicHVzaCIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic3RhdmVfbGlzdCIsInNjYWxlIiwiYmFyX29mZnNldCIsInBhZGRpbmciLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiZ2V0Q29udGV4dCIsImJhciIsInN0YXZlcyIsInN0YXZlX2xpbmVzIiwiaSIsIlN0YXZlIiwiYWRkQ2xlZiIsImNsZWYiLCJzZXRUZXh0IiwibmFtZSIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJMRUZUIiwic2hpZnRfeCIsInNoaWZ0X3kiLCJzZXRDb250ZXh0IiwiZHJhdyIsImNvbm5lY3RvciIsIlN0YXZlQ29ubmVjdG9yIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsIkJSQUNLRVQiLCJ2b2ljZXMiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwibmV3Q2xlZiIsIm5vdGVfcGFydHMiLCJwcmV2X3BhcnRzIiwibm90ZV9jb2xvciIsImNvbG9yX2xpc3QiLCJjb2xvcnMiLCJhZGROb3RlIiwiU3RhdmVOb3RlIiwia2V5cyIsImR1cmF0aW9uIiwic2V0QXR0cmlidXRlIiwibm90ZV9oZWFkcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdHlsZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiR2hvc3ROb3RlIiwiaiIsInNhbWVfbm90ZSIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwiYXR0cnMiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJzdGF2ZWxpbmUiLCJTdGF2ZUxpbmUiLCJmaXJzdF9ub3RlIiwibGFzdF9ub3RlIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsInJlbmRlcl9vcHRpb25zIiwibGluZV93aWR0aCIsImNvbG9yIiwicGFkZGluZ19sZWZ0IiwicGFkZGluZ19yaWdodCIsImFkZFRpY2thYmxlcyIsImZvcm1hdF93aWR0aCIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJwIiwicmVmcyIsIm91dGVyMyIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrIiwiYmluZCIsImNoZWNrY2xpY2siLCJjbGVhcmRpdiIsImRpdiIsImV2ZW50IiwicGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJzZXRQcm9wcyIsInR0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZWZ0IiwicGFnZVgiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJ0b3AiLCJwYWdlWSIsImNsaWVudEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwibXNnIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsInJlcyIsInNwbGl0IiwicGFyc2VJbnQiLCJpbnN0IiwiaWR4IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJzZXR1cFNjb3JlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxTOzs7OztBQUVqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxNQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtDLFdBQUwsR0FBaUIsQ0FBakI7QUFDQSxVQUFLQyxRQUFMLEdBQWMsQ0FBZDtBQUNBLFVBQUtDLE9BQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS0MsT0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLQyxPQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBVGU7QUFjbEI7Ozs7aUNBRVk7QUFFVCxlQUFTQyxRQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUN2QixZQUFJQyxTQUFTLEdBQUMsRUFBZDtBQUNBLFlBQUlDLGVBQWUsR0FBQyxFQUFwQixDQUZ1QixDQUl2Qjs7QUFDQSxZQUFJQyxLQUFLLEdBQUdILE9BQVosQ0FMdUIsQ0FPbkI7O0FBRUEsWUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsS0FBZCxDQUFMLEVBQTBCO0FBQ3RCQSxlQUFLLEdBQUMsQ0FBQ0EsS0FBRCxDQUFOO0FBQ0gsU0FYa0IsQ0FhbkI7QUFDQTs7O0FBQ0EsWUFBSUcsa0JBQWtCLEdBQUMsRUFBdkI7QUFDQSxZQUFJQyxTQUFTLEdBQUMsRUFBZDs7QUFDQSxhQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ0wsS0FBSyxD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LGFBRHJCO0FBQUEsVUFDb0NDLFVBRHBDLGdCQUNvQ0EsVUFEcEM7QUFFTCwwQkFBTztBQUFLLFVBQUUsRUFBRUosRUFBVDtBQUFhLG9CQUFZLEVBQUMsRUFBMUI7QUFBNkIsV0FBRyxFQUFDLFFBQWpDO0FBQTBDLGFBQUssRUFBRTtBQUNwRDBILGdCQUFNLEVBQUUsTUFENEM7QUFFcERuSCxpQkFBTyxFQUFFLENBRjJDO0FBR3BEb0gsc0JBQVksRUFBRSxDQUhzQztBQUlwREMsaUJBQU8sRUFBRTtBQUoyQztBQUFqRCxRQUFQO0FBUUg7Ozs7RUExVGtDQywrQzs7O0FBOFR2QzVKLFNBQVMsQ0FBQzZKLFlBQVYsR0FBeUI7QUFBQ3pILE9BQUssRUFBQyxDQUFQO0FBQVVDLFlBQVUsRUFBQztBQUFyQixDQUF6QjtBQUVBckMsU0FBUyxDQUFDOEosU0FBVixHQUFzQjtBQUNsQjs7O0FBR0EvSCxJQUFFLEVBQUVnSSxpREFBUyxDQUFDQyxNQUpJOztBQU1sQjs7O0FBR0FoSSxPQUFLLEVBQUUrSCxpREFBUyxDQUFDRSxNQVRDO0FBVWxCaEksUUFBTSxFQUFFOEgsaURBQVMsQ0FBQ0UsTUFWQTtBQVdsQi9ILGVBQWEsRUFBRTZILGlEQUFTLENBQUNFLE1BWFA7QUFZbEI3SCxPQUFLLEVBQUUySCxpREFBUyxDQUFDRSxNQVpDO0FBYWxCNUgsWUFBVSxFQUFFMEgsaURBQVMsQ0FBQ0UsTUFiSjtBQWNsQnpKLFNBQU8sRUFBRXVKLGlEQUFTLENBQUNHLE1BZEQ7QUFlbEIzSixTQUFPLEVBQUV3SixpREFBUyxDQUFDRyxNQWZEOztBQWlCZDs7OztBQUlKL0gsWUFBVSxFQUFFNEgsaURBQVMsQ0FBQ0ksS0FyQko7O0FBc0JsQjs7OztBQUlBdEMsVUFBUSxFQUFFa0MsaURBQVMsQ0FBQ0s7QUExQkYsQ0FBdEIsQyIsImZpbGUiOiIyN2NjMDljLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJy4vdGVzdGluZy5jc3MnO1xyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz0wO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0PTA7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cz0wO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXI9MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQ9MDtcclxuICAgICAgICB0aGlzLm9uQ2xpY2s9e307XHJcbiAgICAgICAgdGhpcy5vbkhvdmVyPXt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzZXR1cFNjb3JlKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUoTXlOb3Rlcykge1xyXG4gICAgICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgICAgIHZhciBhY2NpZGVudGFsX2xpc3Q9W11cclxuXHJcbiAgICAgICAgICAgIC8vZm9yICh2YXIgaT0wOyBpPE15Tm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gTXlOb3RlcztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGlzIGp1c3Qgb25lIG5vdGUsIG1ha2UgaXQgYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnk9W2VudHJ5XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBub3RlIGluIGNob3JkXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBBZGQgY29sb3IgaW5mb3JtYXRpb24gdG8gbm90ZXNcclxuICAgICAgICAgICAgICAgIHZhciBjaG9yZF9hY2NpZGVudGlhbHM9W11cclxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZXM9W11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGs9MDsgazxlbnRyeS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5ID0gZW50cnlba11bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19vY3RhdmUgPSBlbnRyeVtrXVtlbnRyeVtrXS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5W2tdLmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5W2tdWzFdOyBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhIHN0cmluZyBvZiBub3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19ub3Rlcy5wdXNoKG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhbiBhcnJheSBvZiBhY2NpZGVudGlhbHNcclxuICAgICAgICAgICAgICAgICAgICBjaG9yZF9hY2NpZGVudGlhbHMucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICBub3RlX2xpc3QucHVzaChuZXdfbm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgYWNjaWRlbnRhbF9saXN0LnB1c2goY2hvcmRfYWNjaWRlbnRpYWxzKVxyXG4gICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gW25vdGVfbGlzdFswXSwgYWNjaWRlbnRhbF9saXN0XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBzdGF2ZV9zcGFjaW5nLCBzdGF2ZV9saXN0LCBzY2FsZSwgYmFyX29mZnNldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMTAwO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICAgICBcclxuICAgIGZvcih2YXIgYmFyPTA7IGJhcjxzdGF2ZV9saXN0Lmxlbmd0aDsgYmFyKyspe1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc9MTAwXHJcbiAgICAgICAgLy8gfSBcclxuICAgICAgICAvL0NyZWF0ZSBzdGF2ZXNcclxuICAgICAgICB2YXIgc3RhdmVzPVtdXHJcbiAgICAgICAgdmFyIHN0YXZlX2xpbmVzPVtdXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGF2ZXMucHVzaChuZXcgVkYuU3RhdmUocGFkZGluZytiYXIqKHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSwgc3RhdmVfc3BhY2luZyooaSsxKSwgd2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgpKVxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uYWRkQ2xlZihzdGF2ZV9saXN0W2Jhcl1baV0uY2xlZilcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRUZXh0KHN0YXZlX2xpc3RbYmFyXVtpXS5uYW1lLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5MRUZULCB7IHNoaWZ0X3g6IC02MCB9KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGk9PTApe1xyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLnNldFRleHQoYmFyKzErYmFyX29mZnNldCwgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF95OiAtNDAgLCBzaGlmdF94OiAyMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVzWzBdLCBzdGF2ZXNbc3RhdmVzLmxlbmd0aC0xXSk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfTEVGVCk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICBpZihiYXI9PT0wKXtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5CUkFDS0VUKTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICB2YXIgdm9pY2VzPVtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9HbyB0aHJvdWdoIGFsbCBiYXJzXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBub3RlX2xpc3QucHVzaChbXSlcclxuICAgICAgICAgICAgdm9pY2VzLnB1c2gobmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0dvIHRocm91Z2ggYWxsIHN0YXZlc1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2xlZiA9IHN0YXZlX2xpc3RbYmFyXVtrXS5jbGVmXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9wYXJ0cyA9IHNlcGFyYXRlKHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpXSlcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2X3BhcnRzID0gW1tbXV0sW1tdXV1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbWVtYmVyIHRvIGFkZCBjb2xvcnMgdG8gbm90ZXMgc29tZWhvdy4uLlxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfY29sb3IgPSAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3JfbGlzdD1zdGF2ZV9saXN0W2Jhcl1ba10uY29sb3JzXHJcbiAgICAgICAgICAgICAgICAvL0lmIGNvbG9yIHByb3BlcnR5IGlzIGRlZmluZWQsIGRvIHNvbWV0aGluZyB3aXRoIGNvbG9ycy4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xvcl9saXN0ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZV9jb2xvcj1jb2xvcl9saXN0W2ldXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGVfcGFydHNbMF0ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkTm90ZT1uZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBuZXdDbGVmLCBrZXlzOiBub3RlX3BhcnRzWzBdLCBkdXJhdGlvbjogXCJxXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0QXR0cmlidXRlKCdpZCcsICdfJytiYXIrJ18nK2srJ18nK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUubm90ZV9oZWFkc1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2InK2JhcisnaScraysnbicraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkTm90ZSlcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnLCBmaWxsU3R5bGU6IG5vdGVfY29sb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkTm90ZSA9IG5ldyBWRi5HaG9zdE5vdGUoJ3EnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1JlbWVtYmVyIHRoZSBwcmV2aW91cyBwYXJ0IGZvciBjaGVja1xyXG4gICAgICAgICAgICAgICAgaWYgKGk+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldl9wYXJ0cyA9IHNlcGFyYXRlKHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpLTFdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wO2o8bm90ZV9wYXJ0c1sxXVswXS5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHRoZSBub3RlIGlzIHRoZSBzYW1lIGFzIHByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVfbm90ZSA9IChub3RlX3BhcnRzWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXSYmbm90ZV9wYXJ0c1swXVswXVswXT09PXByZXZfcGFydHNbMF1bMF1bMF0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5vdGVfcGFydHNbMV1bMF1bal0hPT0nbicgJiYgIXNhbWVfbm90ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5hZGRBY2NpZGVudGFsKGosIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfcGFydHNbMV1bMF1bal0pKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICBub3RlX2xpc3Rba10ucHVzaChhZGROb3RlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpPjAgJiYgc2FtZV9ub3RlKXsgLy8gJiYgbm90ZV9saXN0W2tdW2ktMV0gPT09IG5vdGVfbGlzdFtrXVtpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWRkTm90ZS5hdHRycy50eXBlIT09J0dob3N0Tm90ZScpeyAvL0dvdHRhIGRvIHRoaXMgdG8gcHJldmVudCBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJywgZmlsbFN0eWxlOiAnbm9uZSd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldExlZGdlckxpbmVTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF2ZWxpbmUgPSBuZXcgVkYuU3RhdmVMaW5lKHtmaXJzdF9ub3RlOiBub3RlX2xpc3Rba11baS0xXSwgbGFzdF9ub3RlOiBub3RlX2xpc3Rba11baV0sIGZpcnN0X2luZGljZXM6IDAsIGxhc3RfaW5kaWNlczowfSlcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMubGluZV93aWR0aCA9IDNcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMuY29sb3IgPSBub3RlX2NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfbGVmdCA9IC04XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfcmlnaHQgPSAtMTRcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lcy5wdXNoKHN0YXZlbGluZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm9pY2VzW2tdLmFkZFRpY2thYmxlcyhub3RlX2xpc3Rba10pXHJcbiAgICAgICAgICAgIHZhciBmb3JtYXRfd2lkdGggPSB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aC0zMFxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRfd2lkdGg9Zm9ybWF0X3dpZHRoLTIwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF2ZXNba10uc2V0Tm90ZVN0YXJ0WChrKndpZHRoKSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZXNba11dKS5mb3JtYXQoW3ZvaWNlc1trXV0sIGZvcm1hdF93aWR0aCk7XHJcbiAgICAgICAgICAgIC8vdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXModm9pY2VzKS5mb3JtYXQodm9pY2VzLCA1MCk7XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmZvcm1hdCh2b2ljZXMsIDEwMCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWNlc1trXS5kcmF3KGNvbnRleHQsIHN0YXZlc1trXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdmVfbGluZXMpe1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwPTA7IHA8c3RhdmVfbGluZXMubGVuZ3RoOyBwKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzdGF2ZV9saW5lc1twXSkgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzW3BdLnNldENvbnRleHQoY29udGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc1twXS5kcmF3KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnRleHQuc2NhbGUoc2NhbGUsc2NhbGUpXHJcbiAgICB0aGlzLnJlZnMub3V0ZXIzLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlZnMub3V0ZXIzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2tjbGljay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5jbGVhcmRpdi5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5yZWZzLm91dGVyMylcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDBweDsgdG9wOiAwcHg7XCIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGRpdilcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKGV2ZW50KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9pZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcudmYtc3RhdmVub3RlJykpIHtyZXR1cm47fSBcclxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJy52Zi1zdGF2ZW5vdGUnKSkge3JldHVybjt9IFxyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIHR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgIHZhciBsZWZ0ID0gKGV2ZW50LnBhZ2VYICsgdHQuY2xpZW50V2lkdGggKyAxMCA8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpXHJcbiAgICAgICAgPyAoZXZlbnQucGFnZVggKyAxMCArIFwicHhcIilcclxuICAgICAgICA6IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoICsgNSAtIGV2ZW50LmNsaWVudFdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICB2YXIgdG9wID0gKGV2ZW50LnBhZ2VZICsgdHQuY2xpZW50SGVpZ2h0ICsgMTAgPCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodClcclxuICAgICAgICA/IChldmVudC5wYWdlWSArIDEwICsgXCJweFwiKVxyXG4gICAgICAgIDogKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ICsgNSAtIHR0LmNsaWVudEhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgbGVmdCA9IGV2ZW50Lm9mZnNldFgrXCJweFwiXHJcbiAgICAgICAgdG9wID0gKGV2ZW50Lm9mZnNldFkrMzApKydweCcgXHJcbiAgICAgICAgdHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFxyXG4gICAgICAgICdwYWRkaW5nOiA1cHg7Ym9yZGVyLXdpZHRoOiAycHg7Ym9yZGVyLXJhZGl1czo2cHg7Ym9yZGVyLWNvbG9yOiBibGFjaztib3JkZXItc3R5bGU6IHNvbGlkO3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogJytsZWZ0Kyc7JysndG9wOicrdG9wKyc7IGJhY2tncm91bmQtY29sb3I6ICNlZWQ7JylcclxuICAgICAgICB2YXIgbXNnID0gJyc7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsPT09XCJ2Zi1ub3RlaGVhZFwiKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXMgPSBtc2cuc3BsaXQoJ18nKTtcclxuICAgICAgICB2YXIgYmFyID0gcGFyc2VJbnQocmVzWzFdKSsxXHJcbiAgICAgICAgdmFyIGluc3QgPSBwYXJzZUludChyZXNbMl0pKzFcclxuICAgICAgICB2YXIgaWR4ID0gcGFyc2VJbnQocmVzWzNdKVxyXG4gICAgICAgIHR0LmlubmVySFRNTCA9IFwiYmFyOiBcIitiYXIrXCIgaW5zdHJ1bWVudDogXCIraW5zdCtcIiBpbmRleDogXCIraWR4XHJcblxyXG4gICAgICAgIGlmIChzZXRQcm9wcykgc2V0UHJvcHMoe29uSG92ZXI6IHtiYXI6IGJhciwgaW5zdDogaW5zdCwgaWR4OiBpZHh9fSlcclxuICAgICAgICAvL3RoaXMubm90ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pZCk7XHJcbiAgICAgICAgLy9zZXRQcm9wcyh7bm90ZTogdGhpcy5ub3RlfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90ZSlcclxuICAgIH1cclxuICAgIGNoZWNrY2xpY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJy52Zi1zdGF2ZW5vdGUnKSkge3JldHVybjt9IFxyXG4gICAgICAgIHZhciB0dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWFub3JvbGxfdG9vbHRpcCcpXHJcbiAgICAgICAgLy90dC5zdHlsZS5hbmltYXRpb24gPSAne3BhZGRpbmc6IDJweDt9IDFzJ1xyXG4gICAgICAgIHR0LnN0eWxlLnBhZGRpbmcgPSAnMnB4J1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR0KVxyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIG1zZyA9ICcnO1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbD09PVwidmYtbm90ZWhlYWRcIil7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKVxyXG4gICAgICAgICAgICBtc2cgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxyXG4gICAgICAgICAgICBtc2cgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzID0gbXNnLnNwbGl0KCdfJyk7XHJcbiAgICAgICAgdmFyIGJhciA9IHBhcnNlSW50KHJlc1sxXSkrMVxyXG4gICAgICAgIHZhciBpbnN0ID0gcGFyc2VJbnQocmVzWzJdKSsxXHJcbiAgICAgICAgdmFyIGlkeCA9IHBhcnNlSW50KHJlc1szXSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1zZylcclxuICAgICAgICBpZiAoc2V0UHJvcHMpIHNldFByb3BzKHtvbkNsaWNrOiB7YmFyOiBiYXIsIGluc3Q6IGluc3QsIGlkeDogaWR4fX0pXHJcbiAgICB9XHJcbiAgICBjbGVhcmRpdihldmVudCkge1xyXG4gICAgICAgIHZhciB0dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWFub3JvbGxfdG9vbHRpcCcpXHJcbiAgICAgICAgdHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdHQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5ub3RlcyAhPT0gcHJldlByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IHByZXZQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gcHJldlByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgLy9jb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmcy5vdXRlcjNcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHsgICBcclxuICAgICAgICBpZiAodGhpcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBuZXh0UHJvcHMubm90ZXNcclxuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IG5leHRQcm9wcy5pbnN0cnVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5leHRQcm9wcy50YXJnZXRcclxuXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLnByb3BzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy5wcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpO1xyXG59XHJcbiAgKi9cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBzdGF2ZV9zcGFjaW5nLCBzdGF2ZV9saXN0fT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gb250b3VjaHN0YXJ0PVwiXCIgcmVmPVwib3V0ZXIzXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19ICAgICAgICAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblBpYW5vcm9sbC5kZWZhdWx0UHJvcHMgPSB7c2NhbGU6MSwgYmFyX29mZnNldDowfTtcclxuXHJcblBpYW5vcm9sbC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzdGF2ZV9zcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBiYXJfb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25Ib3ZlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICogQSBBcnJheSBjb250YWluaW5nIG9iamVjdCB0byBob2xkIGJhcnMgYXMgW1tiYXIxXSxbYmFyMl0gZXRjLi5dLlxyXG4gICAgICogQmFycyBjb250YWluaW5nIHN0YXZlcyBhcyB7Y2xlZjonc3RyaW5nJywgbmFtZTonc3RyaW5nJywgJ25vdGVzJzpbYXJyYXkgb3IgbmVzdGVkIGFycmF5IG9mIG5vdGVuYW1lc10sIGNvbG9yczpbYXJyYXkgdGhhdCBtYXRjaGVzIG5vdGVzLWFycmF5XX1cclxuICAgICAqL1xyXG4gICAgc3RhdmVfbGlzdDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
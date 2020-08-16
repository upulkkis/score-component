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

      tt.setAttribute('style', 'padding: 5px;border-width: 2px;border-radius:6px;border-color: black;border-style: solid;position: absolute; left: ' + (event.pageX - 50) + 'px;' + 'top:' + (event.pageY - 40) + 'px; background-color: #eed;');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwibm90ZXMiLCJ0YXJnZXQiLCJpbnN0cnVtZW50cyIsInJlbmRlcmVyIiwiY29udGV4dCIsIm9uQ2xpY2siLCJvbkhvdmVyIiwic3RhdGUiLCJ4IiwieSIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5vdGVfbGlzdCIsImFjY2lkZW50YWxfbGlzdCIsImVudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hvcmRfYWNjaWRlbnRpYWxzIiwibmV3X25vdGVzIiwiayIsImxlbmd0aCIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwicHVzaCIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic3RhdmVfbGlzdCIsInNjYWxlIiwiYmFyX29mZnNldCIsInBhZGRpbmciLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiZ2V0Q29udGV4dCIsImJhciIsInN0YXZlcyIsInN0YXZlX2xpbmVzIiwiaSIsIlN0YXZlIiwiYWRkQ2xlZiIsImNsZWYiLCJzZXRUZXh0IiwibmFtZSIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJMRUZUIiwic2hpZnRfeCIsInNoaWZ0X3kiLCJzZXRDb250ZXh0IiwiZHJhdyIsImNvbm5lY3RvciIsIlN0YXZlQ29ubmVjdG9yIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsIkJSQUNLRVQiLCJ2b2ljZXMiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwibmV3Q2xlZiIsIm5vdGVfcGFydHMiLCJwcmV2X3BhcnRzIiwibm90ZV9jb2xvciIsImNvbG9yX2xpc3QiLCJjb2xvcnMiLCJhZGROb3RlIiwiU3RhdmVOb3RlIiwia2V5cyIsImR1cmF0aW9uIiwic2V0QXR0cmlidXRlIiwibm90ZV9oZWFkcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdHlsZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiR2hvc3ROb3RlIiwiaiIsInNhbWVfbm90ZSIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwiYXR0cnMiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJzdGF2ZWxpbmUiLCJTdGF2ZUxpbmUiLCJmaXJzdF9ub3RlIiwibGFzdF9ub3RlIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsInJlbmRlcl9vcHRpb25zIiwibGluZV93aWR0aCIsImNvbG9yIiwicGFkZGluZ19sZWZ0IiwicGFkZGluZ19yaWdodCIsImFkZFRpY2thYmxlcyIsImZvcm1hdF93aWR0aCIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJwIiwicmVmcyIsIm91dGVyMyIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrIiwiYmluZCIsImNoZWNrY2xpY2siLCJjbGVhcmRpdiIsImRpdiIsImV2ZW50IiwicGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJzZXRQcm9wcyIsInR0IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWdlWCIsInBhZ2VZIiwibXNnIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsInJlcyIsInNwbGl0IiwicGFyc2VJbnQiLCJpbnN0IiwiaWR4IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJzZXR1cFNjb3JlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3Qi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Q0csTUFkRDtBQWVsQnBKLFNBQU8sRUFBRWlKLGlEQUFTLENBQUNHLE1BZkQ7O0FBaUJkOzs7O0FBSUp4SCxZQUFVLEVBQUVxSCxpREFBUyxDQUFDSSxLQXJCSjs7QUFzQmxCOzs7O0FBSUEvQixVQUFRLEVBQUUyQixpREFBUyxDQUFDSztBQTFCRixDQUF0QixDIiwiZmlsZSI6ImI0OWFkNWUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAnLi90ZXN0aW5nLmNzcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm9yb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPTA7XHJcbiAgICAgICAgdGhpcy50YXJnZXQ9MDtcclxuICAgICAgICB0aGlzLmluc3RydW1lbnRzPTA7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcj0wO1xyXG4gICAgICAgIHRoaXMuY29udGV4dD0wO1xyXG4gICAgICAgIHRoaXMub25DbGljaz17fTtcclxuICAgICAgICB0aGlzLm9uSG92ZXI9e307XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNldHVwU2NvcmUoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShNeU5vdGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICAgICAgdmFyIGFjY2lkZW50YWxfbGlzdD1bXVxyXG5cclxuICAgICAgICAgICAgLy9mb3IgKHZhciBpPTA7IGk8TXlOb3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSBNeU5vdGVzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vSWYgdGhlcmUgaXMganVzdCBvbmUgbm90ZSwgbWFrZSBpdCBhbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKXtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeT1bZW50cnldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vZ28gdGhyb3VnaCBlYWNoIG5vdGUgaW4gY2hvcmRcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IEFkZCBjb2xvciBpbmZvcm1hdGlvbiB0byBub3Rlc1xyXG4gICAgICAgICAgICAgICAgdmFyIGNob3JkX2FjY2lkZW50aWFscz1bXVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub3Rlcz1bXVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaz0wOyBrPGVudHJ5Lmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19rZXkgPSBlbnRyeVtrXVswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X29jdGF2ZSA9IGVudHJ5W2tdW2VudHJ5W2tdLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlba10ubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gZW50cnlba11bMV07IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBcIm5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIGEgc3RyaW5nIG9mIG5vdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X25vdGVzLnB1c2gobmV3X2tleS5jb25jYXQoXCIvXCIsbmV3X29jdGF2ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIGFuIGFycmF5IG9mIGFjY2lkZW50aWFsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNob3JkX2FjY2lkZW50aWFscy5wdXNoKG5ld19hY2NpZGVudGlhbClcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKG5ld19ub3RlcylcclxuICAgICAgICAgICAgICAgICBhY2NpZGVudGFsX2xpc3QucHVzaChjaG9yZF9hY2NpZGVudGlhbHMpXHJcbiAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbm90ZV9saXN0WzBdLCBhY2NpZGVudGFsX2xpc3RdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7aWQsIHdpZHRoLCBoZWlnaHQsIHN0YXZlX3NwYWNpbmcsIHN0YXZlX2xpc3QsIHNjYWxlLCBiYXJfb2Zmc2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAxMDA7XHJcblxyXG5cclxuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgrcGFkZGluZywgaGVpZ2h0KTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgIFxyXG4gICAgZm9yKHZhciBiYXI9MDsgYmFyPHN0YXZlX2xpc3QubGVuZ3RoOyBiYXIrKyl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAvLyAgICAgcGFkZGluZz0xMDBcclxuICAgICAgICAvLyB9IFxyXG4gICAgICAgIC8vQ3JlYXRlIHN0YXZlc1xyXG4gICAgICAgIHZhciBzdGF2ZXM9W11cclxuICAgICAgICB2YXIgc3RhdmVfbGluZXM9W11cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0YXZlcy5wdXNoKG5ldyBWRi5TdGF2ZShwYWRkaW5nK2Jhciood2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgpLCBzdGF2ZV9zcGFjaW5nKihpKzEpLCB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aCkpXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5hZGRDbGVmKHN0YXZlX2xpc3RbYmFyXVtpXS5jbGVmKVxyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLnNldFRleHQoc3RhdmVfbGlzdFtiYXJdW2ldLm5hbWUsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLkxFRlQsIHsgc2hpZnRfeDogLTYwIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoaT09MCl7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uc2V0VGV4dChiYXIrMStiYXJfb2Zmc2V0LCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5MRUZULCB7IHNoaWZ0X3k6IC00MCAsIHNoaWZ0X3g6IDIwfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdmVzW2ldLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZXNbMF0sIHN0YXZlc1tzdGF2ZXMubGVuZ3RoLTFdKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIGlmKGJhcj09PTApe1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgIHZhciB2b2ljZXM9W11cclxuICAgICAgICBcclxuICAgICAgICAvL0dvIHRocm91Z2ggYWxsIGJhcnNcclxuICAgICAgICBmb3IodmFyIGsgPSAwOyBrPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKFtdKVxyXG4gICAgICAgICAgICB2b2ljZXMucHVzaChuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vR28gdGhyb3VnaCBhbGwgc3RhdmVzXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDbGVmID0gc3RhdmVfbGlzdFtiYXJdW2tdLmNsZWZcclxuICAgICAgICAgICAgICAgIHZhciBub3RlX3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ldKVxyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZfcGFydHMgPSBbW1tdXSxbW11dXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdG8gYWRkIGNvbG9ycyB0byBub3RlcyBzb21laG93Li4uXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9jb2xvciA9ICdibGFjaydcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvcl9saXN0PXN0YXZlX2xpc3RbYmFyXVtrXS5jb2xvcnNcclxuICAgICAgICAgICAgICAgIC8vSWYgY29sb3IgcHJvcGVydHkgaXMgZGVmaW5lZCwgZG8gc29tZXRoaW5nIHdpdGggY29sb3JzLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbG9yX2xpc3QgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBub3RlX2NvbG9yPWNvbG9yX2xpc3RbaV1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZV9wYXJ0c1swXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGROb3RlPW5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IG5ld0NsZWYsIGtleXM6IG5vdGVfcGFydHNbMF0sIGR1cmF0aW9uOiBcInFcIn0pXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ18nK2JhcisnXycraysnXycraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5ub3RlX2hlYWRzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAnYicrYmFyKydpJytrKyduJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGROb3RlKVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0U3R5bGUoe3N0cm9rZVN0eWxlOiAnbm9uZScsIGZpbGxTdHlsZTogbm90ZV9jb2xvcn0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGROb3RlID0gbmV3IFZGLkdob3N0Tm90ZSgncScpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdGhlIHByZXZpb3VzIHBhcnQgZm9yIGNoZWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaT4wKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ktMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7ajxub3RlX3BhcnRzWzFdWzBdLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlIG5vdGUgaXMgdGhlIHNhbWUgYXMgcHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZV9ub3RlID0gKG5vdGVfcGFydHNbMF1bMF09PT1wcmV2X3BhcnRzWzBdWzBdJiZub3RlX3BhcnRzWzBdWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXVswXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobm90ZV9wYXJ0c1sxXVswXVtqXSE9PSduJyAmJiAhc2FtZV9ub3RlKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLmFkZEFjY2lkZW50YWwoaiwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9wYXJ0c1sxXVswXVtqXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIG5vdGVfbGlzdFtrXS5wdXNoKGFkZE5vdGUpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGk+MCAmJiBzYW1lX25vdGUpeyAvLyAmJiBub3RlX2xpc3Rba11baS0xXSA9PT0gbm90ZV9saXN0W2tdW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihhZGROb3RlLmF0dHJzLnR5cGUhPT0nR2hvc3ROb3RlJyl7IC8vR290dGEgZG8gdGhpcyB0byBwcmV2ZW50IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnLCBmaWxsU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0TGVkZ2VyTGluZVN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXZlbGluZSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2ZpcnN0X25vdGU6IG5vdGVfbGlzdFtrXVtpLTFdLCBsYXN0X25vdGU6IG5vdGVfbGlzdFtrXVtpXSwgZmlyc3RfaW5kaWNlczogMCwgbGFzdF9pbmRpY2VzOjB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5saW5lX3dpZHRoID0gM1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5jb2xvciA9IG5vdGVfY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19sZWZ0ID0gLThcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19yaWdodCA9IC0xNFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzLnB1c2goc3RhdmVsaW5lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2b2ljZXNba10uYWRkVGlja2FibGVzKG5vdGVfbGlzdFtrXSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdF93aWR0aCA9IHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoLTMwXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIGZvcm1hdF93aWR0aD1mb3JtYXRfd2lkdGgtMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXZlc1trXS5zZXROb3RlU3RhcnRYKGsqd2lkdGgpKVxyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc1trXV0pLmZvcm1hdChbdm9pY2VzW2tdXSwgZm9ybWF0X3dpZHRoKTtcclxuICAgICAgICAgICAgLy92b2ljZXNba10uZHJhdyhjb250ZXh0LCBzdGF2ZXNba10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyh2b2ljZXMpLmZvcm1hdCh2b2ljZXMsIDUwKTtcclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuZm9ybWF0KHZvaWNlcywgMTAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF2ZV9saW5lcyl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHA9MDsgcDxzdGF2ZV9saW5lcy5sZW5ndGg7IHArKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHN0YXZlX2xpbmVzW3BdKSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXNbcF0uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzW3BdLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29udGV4dC5zY2FsZShzY2FsZSxzY2FsZSlcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jaGVja2NsaWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLmNsZWFyZGl2LmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlZnMub3V0ZXIzKVxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncGlhbm9yb2xsX3Rvb2x0aXAnKVxyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcInBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogMHB4OyB0b3A6IDBweDtcIilcclxuICAgIC8vY29uc29sZS5sb2coZGl2KVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBcclxuICAgICAgICAvL2lmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy52Zi1zdGF2ZW5vdGUnKSkge3JldHVybjt9IFxyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnLnZmLXN0YXZlbm90ZScpKSB7cmV0dXJuO30gXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgdHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlhbm9yb2xsX3Rvb2x0aXAnKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgdHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFxyXG4gICAgICAgICdwYWRkaW5nOiA1cHg7Ym9yZGVyLXdpZHRoOiAycHg7Ym9yZGVyLXJhZGl1czo2cHg7Ym9yZGVyLWNvbG9yOiBibGFjaztib3JkZXItc3R5bGU6IHNvbGlkO3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogJysoZXZlbnQucGFnZVgtNTApKydweDsnKyd0b3A6JysoZXZlbnQucGFnZVktNDApKydweDsgYmFja2dyb3VuZC1jb2xvcjogI2VlZDsnKVxyXG4gICAgICAgIHZhciBtc2cgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWw9PT1cInZmLW5vdGVoZWFkXCIpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZClcclxuICAgICAgICAgICAgbXNnID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZClcclxuICAgICAgICAgICAgbXNnID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IG1zZy5zcGxpdCgnXycpO1xyXG4gICAgICAgIHZhciBiYXIgPSBwYXJzZUludChyZXNbMV0pKzFcclxuICAgICAgICB2YXIgaW5zdCA9IHBhcnNlSW50KHJlc1syXSkrMVxyXG4gICAgICAgIHZhciBpZHggPSBwYXJzZUludChyZXNbM10pXHJcbiAgICAgICAgdHQuaW5uZXJIVE1MID0gXCJiYXI6IFwiK2JhcitcIiBpbnN0cnVtZW50OiBcIitpbnN0K1wiIGluZGV4OiBcIitpZHhcclxuXHJcbiAgICAgICAgaWYgKHNldFByb3BzKSBzZXRQcm9wcyh7b25Ib3Zlcjoge2JhcjogYmFyLCBpbnN0OiBpbnN0LCBpZHg6IGlkeH19KVxyXG4gICAgICAgIC8vdGhpcy5ub3RlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgICAvL3NldFByb3BzKHtub3RlOiB0aGlzLm5vdGV9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3RlKVxyXG4gICAgfVxyXG4gICAgY2hlY2tjbGljayhldmVudCkge1xyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnLnZmLXN0YXZlbm90ZScpKSB7cmV0dXJuO30gXHJcbiAgICAgICAgdmFyIHR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgICAgICAvL3R0LnN0eWxlLmFuaW1hdGlvbiA9ICd7cGFkZGluZzogMnB4O30gMXMnXHJcbiAgICAgICAgdHQuc3R5bGUucGFkZGluZyA9ICcycHgnXHJcbiAgICAgICAgY29uc29sZS5sb2codHQpXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgbXNnID0gJyc7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsPT09XCJ2Zi1ub3RlaGVhZFwiKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXMgPSBtc2cuc3BsaXQoJ18nKTtcclxuICAgICAgICB2YXIgYmFyID0gcGFyc2VJbnQocmVzWzFdKSsxXHJcbiAgICAgICAgdmFyIGluc3QgPSBwYXJzZUludChyZXNbMl0pKzFcclxuICAgICAgICB2YXIgaWR4ID0gcGFyc2VJbnQocmVzWzNdKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobXNnKVxyXG4gICAgICAgIGlmIChzZXRQcm9wcykgc2V0UHJvcHMoe29uQ2xpY2s6IHtiYXI6IGJhciwgaW5zdDogaW5zdCwgaWR4OiBpZHh9fSlcclxuICAgIH1cclxuICAgIGNsZWFyZGl2KGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgICAgICB0dC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvL2lmICh0aGlzLm5vdGVzICE9PSBwcmV2UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gcHJldlByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBwcmV2UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAvL2NvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyM1xyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKClcclxuICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykgeyAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5leHRQcm9wcy5ub3Rlc1xyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gbmV4dFByb3BzLmluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFByb3BzLnRhcmdldFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAqL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWQsIHdpZHRoLCBoZWlnaHQsIHN0YXZlX3NwYWNpbmcsIHN0YXZlX2xpc3R9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSBvbnRvdWNoc3RhcnQ9XCJcIiByZWY9XCJvdXRlcjNcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0gICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuUGlhbm9yb2xsLmRlZmF1bHRQcm9wcyA9IHtzY2FsZToxLCBiYXJfb2Zmc2V0OjB9O1xyXG5cclxuUGlhbm9yb2xsLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHN0YXZlX3NwYWNpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzY2FsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGJhcl9vZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvbkhvdmVyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiBBIEFycmF5IGNvbnRhaW5pbmcgb2JqZWN0IHRvIGhvbGQgYmFycyBhcyBbW2JhcjFdLFtiYXIyXSBldGMuLl0uXHJcbiAgICAgKiBCYXJzIGNvbnRhaW5pbmcgc3RhdmVzIGFzIHtjbGVmOidzdHJpbmcnLCBuYW1lOidzdHJpbmcnLCAnbm90ZXMnOlthcnJheSBvciBuZXN0ZWQgYXJyYXkgb2Ygbm90ZW5hbWVzXSwgY29sb3JzOlthcnJheSB0aGF0IG1hdGNoZXMgbm90ZXMtYXJyYXldfVxyXG4gICAgICovXHJcbiAgICBzdGF2ZV9saXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
              addNote.setStyle({
                strokeStyle: 'none',
                fillStyle: 'none'
              });

              if (addNote.attrs.type !== 'GhostNote') {
                //Gotta do this to prevent errors
                addNote.setLedgerLineStyle({
                  strokeStyle: 'none'
                });
              }

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
            }

            stave_lines.push(staveline);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwibm90ZXMiLCJ0YXJnZXQiLCJpbnN0cnVtZW50cyIsInJlbmRlcmVyIiwiY29udGV4dCIsInN0YXRlIiwieCIsInkiLCJzZXBhcmF0ZSIsIk15Tm90ZXMiLCJub3RlX2xpc3QiLCJhY2NpZGVudGFsX2xpc3QiLCJlbnRyeSIsIkFycmF5IiwiaXNBcnJheSIsImNob3JkX2FjY2lkZW50aWFscyIsIm5ld19ub3RlcyIsImsiLCJsZW5ndGgiLCJuZXdfa2V5IiwibmV3X29jdGF2ZSIsIm5ld19hY2NpZGVudGlhbCIsInB1c2giLCJjb25jYXQiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhdmVfc3BhY2luZyIsInN0YXZlX2xpc3QiLCJzY2FsZSIsImJhcl9vZmZzZXQiLCJwYWRkaW5nIiwiUmVuZGVyZXIiLCJCYWNrZW5kcyIsIlNWRyIsInJlc2l6ZSIsImdldENvbnRleHQiLCJiYXIiLCJzdGF2ZXMiLCJzdGF2ZV9saW5lcyIsImkiLCJTdGF2ZSIsImFkZENsZWYiLCJjbGVmIiwic2V0VGV4dCIsIm5hbWUiLCJNb2RpZmllciIsIlBvc2l0aW9uIiwiTEVGVCIsInNoaWZ0X3giLCJzaGlmdF95Iiwic2V0Q29udGV4dCIsImRyYXciLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJCUkFDS0VUIiwidm9pY2VzIiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwic2V0TW9kZSIsIm5ld0NsZWYiLCJub3RlX3BhcnRzIiwicHJldl9wYXJ0cyIsIm5vdGVfY29sb3IiLCJjb2xvcl9saXN0IiwiY29sb3JzIiwiYWRkTm90ZSIsIlN0YXZlTm90ZSIsImtleXMiLCJkdXJhdGlvbiIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJHaG9zdE5vdGUiLCJqIiwic2FtZV9ub3RlIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJhdHRycyIsInNldExlZGdlckxpbmVTdHlsZSIsInN0YXZlbGluZSIsIlN0YXZlTGluZSIsImZpcnN0X25vdGUiLCJsYXN0X25vdGUiLCJmaXJzdF9pbmRpY2VzIiwibGFzdF9pbmRpY2VzIiwicmVuZGVyX29wdGlvbnMiLCJsaW5lX3dpZHRoIiwiY29sb3IiLCJwYWRkaW5nX2xlZnQiLCJwYWRkaW5nX3JpZ2h0IiwiYWRkVGlja2FibGVzIiwiZm9ybWF0X3dpZHRoIiwiZm9ybWF0dGVyIiwiRm9ybWF0dGVyIiwiam9pblZvaWNlcyIsImZvcm1hdCIsInAiLCJyZWZzIiwib3V0ZXIzIiwiYXBwZW5kQ2hpbGQiLCJzZXR1cFNjb3JlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheSIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQywrQ0FBRyxDQUFDQyxJQUFmOztJQUVxQkMsUzs7Ozs7QUFFakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVyxDQUFYO0FBQ0EsVUFBS0MsTUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLQyxXQUFMLEdBQWlCLENBQWpCO0FBQ0EsVUFBS0MsUUFBTCxHQUFjLENBQWQ7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QUV1RixpREFBUyxDQUFDRSxNQWJKOztBQWVkOzs7O0FBSUozRixZQUFVLEVBQUV5RixpREFBUyxDQUFDRyxLQW5CSjs7QUFvQmxCOzs7O0FBSUFDLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0s7QUF4QkYsQ0FBdEIsQyIsImZpbGUiOiIzZDMwMzYyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz0wO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0PTA7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cz0wO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXI9MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQ9MDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0dXBTY29yZSgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKE15Tm90ZXMpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgICAgICB2YXIgYWNjaWRlbnRhbF9saXN0PVtdXHJcblxyXG4gICAgICAgICAgICAvL2ZvciAodmFyIGk9MDsgaTxNeU5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IE15Tm90ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9JZiB0aGVyZSBpcyBqdXN0IG9uZSBub3RlLCBtYWtlIGl0IGFuIGFycmF5XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5PVtlbnRyeV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9nbyB0aHJvdWdoIGVhY2ggbm90ZSBpbiBjaG9yZFxyXG4gICAgICAgICAgICAgICAgLy8gVG9EbzogQWRkIGNvbG9yIGluZm9ybWF0aW9uIHRvIG5vdGVzXHJcbiAgICAgICAgICAgICAgICB2YXIgY2hvcmRfYWNjaWRlbnRpYWxzPVtdXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X25vdGVzPVtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrPTA7IGs8ZW50cnkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2tleSA9IGVudHJ5W2tdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlID0gZW50cnlba11bZW50cnlba10ubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVtrXS5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBlbnRyeVtrXVsxXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgYSBzdHJpbmcgb2Ygbm90ZXNcclxuICAgICAgICAgICAgICAgICAgICBuZXdfbm90ZXMucHVzaChuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKSlcclxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgYW4gYXJyYXkgb2YgYWNjaWRlbnRpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgY2hvcmRfYWNjaWRlbnRpYWxzLnB1c2gobmV3X2FjY2lkZW50aWFsKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgbm90ZV9saXN0LnB1c2gobmV3X25vdGVzKVxyXG4gICAgICAgICAgICAgICAgIGFjY2lkZW50YWxfbGlzdC5wdXNoKGNob3JkX2FjY2lkZW50aWFscylcclxuICAgICAgICAgICAgICAvLyAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFtub3RlX2xpc3RbMF0sIGFjY2lkZW50YWxfbGlzdF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtpZCwgd2lkdGgsIGhlaWdodCwgc3RhdmVfc3BhY2luZywgc3RhdmVfbGlzdCwgc2NhbGUsIGJhcl9vZmZzZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgcGFkZGluZyA9IDEwMDtcclxuXHJcblxyXG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCtwYWRkaW5nLCBoZWlnaHQpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgXHJcbiAgICBmb3IodmFyIGJhcj0wOyBiYXI8c3RhdmVfbGlzdC5sZW5ndGg7IGJhcisrKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgKGJhcj09PTApe1xyXG4gICAgICAgIC8vICAgICBwYWRkaW5nPTEwMFxyXG4gICAgICAgIC8vIH0gXHJcbiAgICAgICAgLy9DcmVhdGUgc3RhdmVzXHJcbiAgICAgICAgdmFyIHN0YXZlcz1bXVxyXG4gICAgICAgIHZhciBzdGF2ZV9saW5lcz1bXVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RhdmVzLnB1c2gobmV3IFZGLlN0YXZlKHBhZGRpbmcrYmFyKih3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aCksIHN0YXZlX3NwYWNpbmcqKGkrMSksIHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgaWYgKGJhcj09PTApe1xyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLmFkZENsZWYoc3RhdmVfbGlzdFtiYXJdW2ldLmNsZWYpXHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uc2V0VGV4dChzdGF2ZV9saXN0W2Jhcl1baV0ubmFtZSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF94OiAtNjAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChpPT0wKXtcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRUZXh0KGJhcisxK2Jhcl9vZmZzZXQsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLkxFRlQsIHsgc2hpZnRfeTogLTQwICwgc2hpZnRfeDogMjB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF2ZXNbaV0uc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29ubmVjdG9yID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlc1swXSwgc3RhdmVzW3N0YXZlcy5sZW5ndGgtMV0pO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgaWYoYmFyPT09MCl7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgdmFyIHZvaWNlcz1bXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR28gdGhyb3VnaCBhbGwgYmFyc1xyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgbm90ZV9saXN0LnB1c2goW10pXHJcbiAgICAgICAgICAgIHZvaWNlcy5wdXNoKG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiA0LCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9HbyB0aHJvdWdoIGFsbCBzdGF2ZXNcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NsZWYgPSBzdGF2ZV9saXN0W2Jhcl1ba10uY2xlZlxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfcGFydHMgPSBzZXBhcmF0ZShzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldl9wYXJ0cyA9IFtbW11dLFtbXV1dXHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1lbWJlciB0byBhZGQgY29sb3JzIHRvIG5vdGVzIHNvbWVob3cuLi5cclxuICAgICAgICAgICAgICAgIHZhciBub3RlX2NvbG9yID0gJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpc3Q9c3RhdmVfbGlzdFtiYXJdW2tdLmNvbG9yc1xyXG4gICAgICAgICAgICAgICAgLy9JZiBjb2xvciBwcm9wZXJ0eSBpcyBkZWZpbmVkLCBkbyBzb21ldGhpbmcgd2l0aCBjb2xvcnMuLi5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29sb3JfbGlzdCAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVfY29sb3I9Y29sb3JfbGlzdFtpXVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub3RlX3BhcnRzWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZE5vdGU9bmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogbmV3Q2xlZiwga2V5czogbm90ZV9wYXJ0c1swXSwgZHVyYXRpb246IFwicVwifSlcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnLCBmaWxsU3R5bGU6IG5vdGVfY29sb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkTm90ZSA9IG5ldyBWRi5HaG9zdE5vdGUoJ3EnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1JlbWVtYmVyIHRoZSBwcmV2aW91cyBwYXJ0IGZvciBjaGVja1xyXG4gICAgICAgICAgICAgICAgaWYgKGk+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldl9wYXJ0cyA9IHNlcGFyYXRlKHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpLTFdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wO2o8bm90ZV9wYXJ0c1sxXVswXS5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHRoZSBub3RlIGlzIHRoZSBzYW1lIGFzIHByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVfbm90ZSA9IChub3RlX3BhcnRzWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXSYmbm90ZV9wYXJ0c1swXVswXVswXT09PXByZXZfcGFydHNbMF1bMF1bMF0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5vdGVfcGFydHNbMV1bMF1bal0hPT0nbicgJiYgIXNhbWVfbm90ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5hZGRBY2NpZGVudGFsKGosIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfcGFydHNbMV1bMF1bal0pKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICBub3RlX2xpc3Rba10ucHVzaChhZGROb3RlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpPjAgJiYgc2FtZV9ub3RlKXsgLy8gJiYgbm90ZV9saXN0W2tdW2ktMV0gPT09IG5vdGVfbGlzdFtrXVtpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJywgZmlsbFN0eWxlOiAnbm9uZSd9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFkZE5vdGUuYXR0cnMudHlwZSE9PSdHaG9zdE5vdGUnKXsgLy9Hb3R0YSBkbyB0aGlzIHRvIHByZXZlbnQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0TGVkZ2VyTGluZVN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF2ZWxpbmUgPSBuZXcgVkYuU3RhdmVMaW5lKHtmaXJzdF9ub3RlOiBub3RlX2xpc3Rba11baS0xXSwgbGFzdF9ub3RlOiBub3RlX2xpc3Rba11baV0sIGZpcnN0X2luZGljZXM6IDAsIGxhc3RfaW5kaWNlczowfSlcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMubGluZV93aWR0aCA9IDNcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMuY29sb3IgPSBub3RlX2NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfbGVmdCA9IC04XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfcmlnaHQgPSAtMTRcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzLnB1c2goc3RhdmVsaW5lKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2b2ljZXNba10uYWRkVGlja2FibGVzKG5vdGVfbGlzdFtrXSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdF93aWR0aCA9IHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoLTMwXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIGZvcm1hdF93aWR0aD1mb3JtYXRfd2lkdGgtMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXZlc1trXS5zZXROb3RlU3RhcnRYKGsqd2lkdGgpKVxyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc1trXV0pLmZvcm1hdChbdm9pY2VzW2tdXSwgZm9ybWF0X3dpZHRoKTtcclxuICAgICAgICAgICAgLy92b2ljZXNba10uZHJhdyhjb250ZXh0LCBzdGF2ZXNba10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyh2b2ljZXMpLmZvcm1hdCh2b2ljZXMsIDUwKTtcclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuZm9ybWF0KHZvaWNlcywgMTAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF2ZV9saW5lcyl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHA9MDsgcDxzdGF2ZV9saW5lcy5sZW5ndGg7IHArKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHN0YXZlX2xpbmVzW3BdKSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXNbcF0uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzW3BdLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29udGV4dC5zY2FsZShzY2FsZSxzY2FsZSlcclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXIzLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vaWYgKHRoaXMubm90ZXMgIT09IHByZXZQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBwcmV2UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IHByZXZQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgIC8vY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXIzXHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLypcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbmV4dFByb3BzLm5vdGVzXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBuZXh0UHJvcHMuaW5zdHJ1bWVudHNcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXh0UHJvcHMudGFyZ2V0XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG5cclxuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5wcm9wcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMucHJvcHMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KTtcclxufVxyXG4gICovXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpZCwgd2lkdGgsIGhlaWdodCwgc3RhdmVfc3BhY2luZywgc3RhdmVfbGlzdH09dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD17aWR9IHJlZj1cIm91dGVyM1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5QaWFub3JvbGwuZGVmYXVsdFByb3BzID0ge3NjYWxlOjEsIGJhcl9vZmZzZXQ6MH07XHJcblxyXG5QaWFub3JvbGwucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc3RhdmVfc3BhY2luZzogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYmFyX29mZnNldDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiBBIEFycmF5IGNvbnRhaW5pbmcgb2JqZWN0IHRvIGhvbGQgYmFycyBhcyBbW2JhcjFdLFtiYXIyXSBldGMuLl0uXHJcbiAgICAgKiBCYXJzIGNvbnRhaW5pbmcgc3RhdmVzIGFzIHtjbGVmOidzdHJpbmcnLCBuYW1lOidzdHJpbmcnLCAnbm90ZXMnOlthcnJheSBvciBuZXN0ZWQgYXJyYXkgb2Ygbm90ZW5hbWVzXSwgY29sb3JzOlthcnJheSB0aGF0IG1hdGNoZXMgbm90ZXMtYXJyYXldfVxyXG4gICAgICovXHJcbiAgICBzdGF2ZV9saXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
            console.log(note_list[k][i]);

            if (i > 0 && same_note) {
              // && note_list[k][i-1] === note_list[k][i]){
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

        console.log(stave_lines);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwibm90ZXMiLCJ0YXJnZXQiLCJpbnN0cnVtZW50cyIsInJlbmRlcmVyIiwiY29udGV4dCIsInN0YXRlIiwieCIsInkiLCJzZXBhcmF0ZSIsIk15Tm90ZXMiLCJub3RlX2xpc3QiLCJhY2NpZGVudGFsX2xpc3QiLCJlbnRyeSIsIkFycmF5IiwiaXNBcnJheSIsImNob3JkX2FjY2lkZW50aWFscyIsIm5ld19ub3RlcyIsImsiLCJsZW5ndGgiLCJuZXdfa2V5IiwibmV3X29jdGF2ZSIsIm5ld19hY2NpZGVudGlhbCIsInB1c2giLCJjb25jYXQiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhdmVfc3BhY2luZyIsInN0YXZlX2xpc3QiLCJzY2FsZSIsImJhcl9vZmZzZXQiLCJwYWRkaW5nIiwiUmVuZGVyZXIiLCJCYWNrZW5kcyIsIlNWRyIsInJlc2l6ZSIsImdldENvbnRleHQiLCJiYXIiLCJzdGF2ZXMiLCJzdGF2ZV9saW5lcyIsImkiLCJTdGF2ZSIsImFkZENsZWYiLCJjbGVmIiwic2V0VGV4dCIsIm5hbWUiLCJNb2RpZmllciIsIlBvc2l0aW9uIiwiTEVGVCIsInNoaWZ0X3giLCJzaGlmdF95Iiwic2V0Q29udGV4dCIsImRyYXciLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJCUkFDS0VUIiwidm9pY2VzIiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwic2V0TW9kZSIsIm5ld0NsZWYiLCJub3RlX3BhcnRzIiwicHJldl9wYXJ0cyIsIm5vdGVfY29sb3IiLCJjb2xvcl9saXN0IiwiY29sb3JzIiwiYWRkTm90ZSIsIlN0YXZlTm90ZSIsImtleXMiLCJkdXJhdGlvbiIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJHaG9zdE5vdGUiLCJqIiwic2FtZV9ub3RlIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJjb25zb2xlIiwibG9nIiwic2V0TGVkZ2VyTGluZVN0eWxlIiwic3RhdmVsaW5lIiwiU3RhdmVMaW5lIiwiZmlyc3Rfbm90ZSIsImxhc3Rfbm90ZSIsImZpcnN0X2luZGljZXMiLCJsYXN0X2luZGljZXMiLCJyZW5kZXJfb3B0aW9ucyIsImxpbmVfd2lkdGgiLCJjb2xvciIsInBhZGRpbmdfbGVmdCIsInBhZGRpbmdfcmlnaHQiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXRfd2lkdGgiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwicCIsInJlZnMiLCJvdXRlcjMiLCJhcHBlbmRDaGlsZCIsInNldHVwU2NvcmUiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImFycmF5Iiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxTOzs7OztBQUVqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxNQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtDLFdBQUwsR0FBaUIsQ0FBakI7QUFDQSxVQUFLQyxRQUFMLEdB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QUFFeUYsaURBQVMsQ0FBQ0UsTUFaQztBQWFsQjFGLFlBQVUsRUFBRXdGLGlEQUFTLENBQUNFLE1BYko7O0FBZWQ7Ozs7QUFJSjVGLFlBQVUsRUFBRTBGLGlEQUFTLENBQUNHLEtBbkJKOztBQW9CbEI7Ozs7QUFJQUMsVUFBUSxFQUFFSixpREFBUyxDQUFDSztBQXhCRixDQUF0QixDIiwiZmlsZSI6ImFkNDYxODEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm9yb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPTA7XHJcbiAgICAgICAgdGhpcy50YXJnZXQ9MDtcclxuICAgICAgICB0aGlzLmluc3RydW1lbnRzPTA7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcj0wO1xyXG4gICAgICAgIHRoaXMuY29udGV4dD0wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzZXR1cFNjb3JlKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUoTXlOb3Rlcykge1xyXG4gICAgICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgICAgIHZhciBhY2NpZGVudGFsX2xpc3Q9W11cclxuXHJcbiAgICAgICAgICAgIC8vZm9yICh2YXIgaT0wOyBpPE15Tm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gTXlOb3RlcztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGlzIGp1c3Qgb25lIG5vdGUsIG1ha2UgaXQgYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnk9W2VudHJ5XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBub3RlIGluIGNob3JkXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBBZGQgY29sb3IgaW5mb3JtYXRpb24gdG8gbm90ZXNcclxuICAgICAgICAgICAgICAgIHZhciBjaG9yZF9hY2NpZGVudGlhbHM9W11cclxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZXM9W11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGs9MDsgazxlbnRyeS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5ID0gZW50cnlba11bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19vY3RhdmUgPSBlbnRyeVtrXVtlbnRyeVtrXS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5W2tdLmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5W2tdWzFdOyBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhIHN0cmluZyBvZiBub3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19ub3Rlcy5wdXNoKG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhbiBhcnJheSBvZiBhY2NpZGVudGlhbHNcclxuICAgICAgICAgICAgICAgICAgICBjaG9yZF9hY2NpZGVudGlhbHMucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICBub3RlX2xpc3QucHVzaChuZXdfbm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgYWNjaWRlbnRhbF9saXN0LnB1c2goY2hvcmRfYWNjaWRlbnRpYWxzKVxyXG4gICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gW25vdGVfbGlzdFswXSwgYWNjaWRlbnRhbF9saXN0XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBzdGF2ZV9zcGFjaW5nLCBzdGF2ZV9saXN0LCBzY2FsZSwgYmFyX29mZnNldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMTAwO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICAgICBcclxuICAgIGZvcih2YXIgYmFyPTA7IGJhcjxzdGF2ZV9saXN0Lmxlbmd0aDsgYmFyKyspe1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc9MTAwXHJcbiAgICAgICAgLy8gfSBcclxuICAgICAgICAvL0NyZWF0ZSBzdGF2ZXNcclxuICAgICAgICB2YXIgc3RhdmVzPVtdXHJcbiAgICAgICAgdmFyIHN0YXZlX2xpbmVzPVtdXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGF2ZXMucHVzaChuZXcgVkYuU3RhdmUocGFkZGluZytiYXIqKHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSwgc3RhdmVfc3BhY2luZyooaSsxKSwgd2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgpKVxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uYWRkQ2xlZihzdGF2ZV9saXN0W2Jhcl1baV0uY2xlZilcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRUZXh0KHN0YXZlX2xpc3RbYmFyXVtpXS5uYW1lLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5MRUZULCB7IHNoaWZ0X3g6IC02MCB9KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGk9PTApe1xyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLnNldFRleHQoYmFyKzErYmFyX29mZnNldCwgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF95OiAtNDAgLCBzaGlmdF94OiAyMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVzWzBdLCBzdGF2ZXNbc3RhdmVzLmxlbmd0aC0xXSk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfTEVGVCk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICBpZihiYXI9PT0wKXtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5CUkFDS0VUKTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICB2YXIgdm9pY2VzPVtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9HbyB0aHJvdWdoIGFsbCBiYXJzXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBub3RlX2xpc3QucHVzaChbXSlcclxuICAgICAgICAgICAgdm9pY2VzLnB1c2gobmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0dvIHRocm91Z2ggYWxsIHN0YXZlc1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2xlZiA9IHN0YXZlX2xpc3RbYmFyXVtrXS5jbGVmXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9wYXJ0cyA9IHNlcGFyYXRlKHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpXSlcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2X3BhcnRzID0gW1tbXV0sW1tdXV1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1JlbWVtYmVyIHRvIGFkZCBjb2xvcnMgdG8gbm90ZXMgc29tZWhvdy4uLlxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfY29sb3IgPSAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3JfbGlzdD1zdGF2ZV9saXN0W2Jhcl1ba10uY29sb3JzXHJcbiAgICAgICAgICAgICAgICAvL0lmIGNvbG9yIHByb3BlcnR5IGlzIGRlZmluZWQsIGRvIHNvbWV0aGluZyB3aXRoIGNvbG9ycy4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xvcl9saXN0ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZV9jb2xvcj1jb2xvcl9saXN0W2ldXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGVfcGFydHNbMF0ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkTm90ZT1uZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBuZXdDbGVmLCBrZXlzOiBub3RlX3BhcnRzWzBdLCBkdXJhdGlvbjogXCJxXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0U3R5bGUoe3N0cm9rZVN0eWxlOiAnbm9uZScsIGZpbGxTdHlsZTogbm90ZV9jb2xvcn0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGROb3RlID0gbmV3IFZGLkdob3N0Tm90ZSgncScpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdGhlIHByZXZpb3VzIHBhcnQgZm9yIGNoZWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaT4wKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ktMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7ajxub3RlX3BhcnRzWzFdWzBdLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlIG5vdGUgaXMgdGhlIHNhbWUgYXMgcHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZV9ub3RlID0gKG5vdGVfcGFydHNbMF1bMF09PT1wcmV2X3BhcnRzWzBdWzBdJiZub3RlX3BhcnRzWzBdWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXVswXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobm90ZV9wYXJ0c1sxXVswXVtqXSE9PSduJyAmJiAhc2FtZV9ub3RlKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLmFkZEFjY2lkZW50YWwoaiwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9wYXJ0c1sxXVswXVtqXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIG5vdGVfbGlzdFtrXS5wdXNoKGFkZE5vdGUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub3RlX2xpc3Rba11baV0pXHJcbiAgICAgICAgICAgICAgICBpZihpPjAgJiYgc2FtZV9ub3RlKXsgLy8gJiYgbm90ZV9saXN0W2tdW2ktMV0gPT09IG5vdGVfbGlzdFtrXVtpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJywgZmlsbFN0eWxlOiAnbm9uZSd9KVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0TGVkZ2VyTGluZVN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnfSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdmVsaW5lID0gbmV3IFZGLlN0YXZlTGluZSh7Zmlyc3Rfbm90ZTogbm90ZV9saXN0W2tdW2ktMV0sIGxhc3Rfbm90ZTogbm90ZV9saXN0W2tdW2ldLCBmaXJzdF9pbmRpY2VzOiAwLCBsYXN0X2luZGljZXM6MH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLmxpbmVfd2lkdGggPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLmNvbG9yID0gbm90ZV9jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5wYWRkaW5nX2xlZnQgPSAtOFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5wYWRkaW5nX3JpZ2h0ID0gLTE0XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9saW5lcy5wdXNoKHN0YXZlbGluZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm9pY2VzW2tdLmFkZFRpY2thYmxlcyhub3RlX2xpc3Rba10pXHJcbiAgICAgICAgICAgIHZhciBmb3JtYXRfd2lkdGggPSB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aC0zMFxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRfd2lkdGg9Zm9ybWF0X3dpZHRoLTIwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF2ZXNba10uc2V0Tm90ZVN0YXJ0WChrKndpZHRoKSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZXNba11dKS5mb3JtYXQoW3ZvaWNlc1trXV0sIGZvcm1hdF93aWR0aCk7XHJcbiAgICAgICAgICAgIC8vdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXModm9pY2VzKS5mb3JtYXQodm9pY2VzLCA1MCk7XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmZvcm1hdCh2b2ljZXMsIDEwMCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWNlc1trXS5kcmF3KGNvbnRleHQsIHN0YXZlc1trXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXZlX2xpbmVzKVxyXG4gICAgICAgIGlmIChzdGF2ZV9saW5lcyl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHA9MDsgcDxzdGF2ZV9saW5lcy5sZW5ndGg7IHArKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHN0YXZlX2xpbmVzW3BdKSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXNbcF0uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzW3BdLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29udGV4dC5zY2FsZShzY2FsZSxzY2FsZSlcclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXIzLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vaWYgKHRoaXMubm90ZXMgIT09IHByZXZQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBwcmV2UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IHByZXZQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgIC8vY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXIzXHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLypcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbmV4dFByb3BzLm5vdGVzXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBuZXh0UHJvcHMuaW5zdHJ1bWVudHNcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXh0UHJvcHMudGFyZ2V0XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG5cclxuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5wcm9wcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMucHJvcHMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KTtcclxufVxyXG4gICovXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpZCwgd2lkdGgsIGhlaWdodCwgc3RhdmVfc3BhY2luZywgc3RhdmVfbGlzdH09dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD17aWR9IHJlZj1cIm91dGVyM1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5QaWFub3JvbGwuZGVmYXVsdFByb3BzID0ge3NjYWxlOjEsIGJhcl9vZmZzZXQ6MH07XHJcblxyXG5QaWFub3JvbGwucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc3RhdmVfc3BhY2luZzogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYmFyX29mZnNldDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiBBIEFycmF5IGNvbnRhaW5pbmcgb2JqZWN0IHRvIGhvbGQgYmFycyBhcyBbW2JhcjFdLFtiYXIyXSBldGMuLl0uXHJcbiAgICAgKiBCYXJzIGNvbnRhaW5pbmcgc3RhdmVzIGFzIHtjbGVmOidzdHJpbmcnLCBuYW1lOidzdHJpbmcnLCAnbm90ZXMnOlthcnJheSBvciBuZXN0ZWQgYXJyYXkgb2Ygbm90ZW5hbWVzXSwgY29sb3JzOlthcnJheSB0aGF0IG1hdGNoZXMgbm90ZXMtYXJyYXldfVxyXG4gICAgICovXHJcbiAgICBzdGF2ZV9saXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
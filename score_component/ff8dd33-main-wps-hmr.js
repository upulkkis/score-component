webpackHotUpdatescore_component("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vexflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vexflow */ "./node_modules/vexflow/src/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/* eslint no-magic-numbers: 0 */



var VF = vexflow__WEBPACK_IMPORTED_MODULE_1__["default"].Flow;

var Test = /*#__PURE__*/function (_Component) {
  _inherits(Test, _Component);

  var _super = _createSuper(Test);

  function Test(props) {
    var _this;

    _classCallCheck(this, Test);

    _this = _super.call(this, props);
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Test, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
      var notes = this.props.notes;
      var width = this.props.width;
      var height = this.props.height;
      var stave_spacing = this.props.stave_spacing;
      var stave_list = this.props.stave_list;
      var padding = 100;
      console.log(height);
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(width + padding, height);
      var context = renderer.getContext();
      console.log(stave_list.length);

      for (var bar = 0; bar < stave_list.length; bar++) {
        // if (bar===0){
        //     padding=100
        // } 
        //Create staves
        var staves = [];

        for (var i = 0; i < stave_list[bar].length; i++) {
          staves.push(new VF.Stave(padding + bar * (width / stave_list.length), stave_spacing * (i + 1), width / stave_list.length));

          if (bar === 0) {
            staves[i].addClef(stave_list[bar][i].clef);
            staves[i].setText(stave_list[bar][i].name, VF.Modifier.Position.LEFT, {
              shift_x: -60
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
            var prev_parts = [[[]], [[]]];
            var addNote = new VF.StaveNote({
              clef: newClef,
              keys: note_parts[0],
              duration: "q"
            }); //Remember the previous part for check

            if (i > 0) {
              prev_parts = separate(stave_list[bar][k].notes[i - 1]);
            }

            for (var j = 0; j < note_parts[1][0].length; j++) {
              //Check if the note is the same as previous
              var same_note = note_parts[0][0] === prev_parts[0][0] && note_parts[0][0][0] === prev_parts[0][0][0];

              if (note_parts[1][0][j] !== 'n' && !same_note) {
                addNote.addAccidental(j, new VF.Accidental(note_parts[1][0][j]));
              } //Remember to add colors to notes somehow...


              var note_color = 'black';
              var color_list = stave_list[bar][k].colors; //If color property is defined, do something with colors...

              if (typeof color_list != 'undefined') {
                note_color = color_list[i];
              }

              addNote.setStyle({
                strokeStyle: 'rgba(0,0,0,0)',
                fillStyle: note_color
              });
            }

            note_list[k].push(addNote);
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
      }

      this.refs.outer.appendChild(svgContainer);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: "outer",
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          display: "inline-block"
        }
      });
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Lines = /*#__PURE__*/function (_Component2) {
  _inherits(Lines, _Component2);

  var _super2 = _createSuper(Lines);

  function Lines(props) {
    var _this2;

    _classCallCheck(this, Lines);

    _this2 = _super2.call(this, props);
    _this2.state = {
      x: 0,
      y: 0
    };
    return _this2;
  }

  _createClass(Lines, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      function separate(MyNotes) {
        var new_key = MyNotes[0];
        var new_octave = MyNotes[MyNotes.length - 1];

        if (MyNotes.length > 2) {
          var new_accidential = MyNotes[1];
        } else {
          var new_accidential = "n";
        }

        var new_note = new_key.concat("/", new_octave);
        return [new_note, new_accidential];
      }

      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          width = _this$props.width,
          height = _this$props.height,
          notes = _this$props.notes;
      var padding = 30; //var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      //renderer.resize(width+padding, height);

      var vf = new VF.Factory({
        renderer: {
          elementId: svgContainer,
          width: width,
          height: height
        }
      }); //var system = vf.System(renderer.getContext())//.setContext(renderer.getContext())
      //new VF.Stave().setWidth()
      //var context = renderer.getContext();
      //var stave = new VF.Stave(padding, 30, width)
      //var firstClef = 'treble'
      //stave.addClef(firstClef)
      //stave.setContext(context).draw();

      var stave = vf.Stave().setY(100);
      var note_list = [];
      var lines = []; //var voice=[]
      //var voice = new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2);

      for (var i = 0; i < notes.length; i++) {
        var note = separate(notes[i]);
        var newClef = 'treble';
        var staveNote = vf.StaveNote({
          keys: [note[0]],
          duration: '4',
          clef: newClef
        }).addAccidental(0, new VF.Accidental(note[1]));
        var clefNote = new vexflow__WEBPACK_IMPORTED_MODULE_1__["default"].Flow.ClefNote('bass', 'small');
        var noteSubGroup = new vexflow__WEBPACK_IMPORTED_MODULE_1__["default"].Flow.NoteSubGroup([clefNote]);
        staveNote.addModifier(0, noteSubGroup); //var new_note = new VF.StaveNote({clef: newClef, keys: [note[0]], duration: "q"})
        //new_note.addAccidental(0, new VF.Accidental(note[1]))
        //note_list.push(new_note)

        note_list.push(staveNote);
      } //voice.addTickables(note_list);


      var voices = vf.Voice().setMode(2).addTickables(note_list);

      for (var i = 1; i < notes.length; i++) {
        //var line = new VF.StaveLine({from: note_list[i-1], to: note_list[i], first_indices: [0],
        //    last_indices: [0],})
        //line.setNotes({first_note: notes[i-1], last_note: notes[i]})
        lines.push(vf.StaveLine({
          from: note_list[i - 1],
          to: note_list[i],
          first_indices: [0],
          last_indices: [0]
        }));
      } //var formatter = new VF.Formatter().joinVoices([voice]).format([voice], width-padding);


      var formatter = new VF.Formatter().joinVoices([voices]).format([voices], width - padding); //.formatToStave([voices], stave);

      vf.draw(); //voice.draw(context, stave);

      this.refs.outerA.appendChild(svgContainer);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: "outerA",
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          display: "inline-block"
        }
      });
    }
  }]);

  return Lines;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var App = /*#__PURE__*/function (_Component3) {
  _inherits(App, _Component3);

  var _super3 = _createSuper(App);

  function App() {
    var _this3;

    _classCallCheck(this, App);

    _this3 = _super3.call(this);
    _this3.notes = ["c4", "f#7", "e1", "gb3"];
    _this3.state = {
      value: ''
    };
    _this3.setProps = _this3.setProps.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "handleClick",
    value: function handleClick(props) {
      console.log('this is:', this);
      this.notes = ['c4'];
    } //new VF.StaveNote().set

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lines, {
        width: 1000,
        height: 200,
        notes: ['c4', 'b7', 'd4', 'c5', 'a5']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Range"], {
        width: 400,
        height: 100,
        notes: ['c4', 'b7', 'd4', 'c5', 'a5']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Pianoroll"], {
        width: 800,
        height: 500,
        stave_list: [[{
          clef: 'treble',
          name: 'violin',
          notes: ['c#4', 'gb4', 'f4', 'a4'],
          colors: ['blue', 'blue', 'green', 'green']
        }, {
          clef: 'bass',
          name: 'bassoon',
          notes: ['c#3', 'f3', 'a3']
        }, {
          clef: 'treble',
          name: 'jebu',
          notes: ['c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'gb4', 'f4', 'a4']
        }], [{
          clef: 'treble',
          name: 'violin',
          notes: ['c#4', 'gb4', 'f4', 'a4']
        }, {
          clef: 'bass',
          notes: [['c#3', 'd3'], ['c#3', 'd3'], 'f3', 'a3']
        }, {
          clef: 'treble',
          name: 'jebu',
          notes: ['c#4', 'gb4', 'f4', 'a4'],
          colors: ['blue', 'blue', 'green', 'green']
        }], [{
          clef: 'treble',
          name: 'violin',
          notes: ['c#4', 'gb4', 'f4', 'a4', 'c#4', 'gb4', 'f4', 'a4']
        }, {
          clef: 'bass',
          name: 'bassoon',
          notes: ['c#3', 'f3', 'a3']
        }, {
          clef: 'treble',
          name: 'jebu',
          notes: ['c#4', 'gb4', 'f4', 'a4']
        }]],
        stave_spacing: 70
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Stave"], {
        notes: "c4/h[stem= \"down\", id=\"m2a\", articulations=\"staccato.below,tenuto\", style=\"fillStyle.blue\"], e4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleClick
      }, "Click me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Masking"], {
        id: "masking_notestaff",
        masking_notevalues: [50, 67, 80, 94, 100],
        masking_notesizes: [80, 70, 70, 70, 70],
        masking_colors: ['red', 'red', 'red', 'red', 'red'],
        target_notevalues: [60, 64, 67, 72, 79],
        target_notesizes: [40, 40, 40, 40, 40],
        target_colors: ['green', 'green', 'green', 'green', 'green']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        id: 'id1',
        notes: ["c4", "f#7", "e1", "gb3"],
        target: [3],
        instruments: ['violin', 'clarinet', 'bassoon', 'trombone']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        id: 'id2',
        notes: ["c3"],
        target: [],
        instruments: ['']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["ScoreComponent"], _extends({
        setProps: this.setProps
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Stave"], {
        notes: "(c4 e4 g4)/h, a4[clef=\"bass\"]"
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5vdGVfbGlzdCIsImFjY2lkZW50YWxfbGlzdCIsImVudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hvcmRfYWNjaWRlbnRpYWxzIiwibmV3X25vdGVzIiwiayIsImxlbmd0aCIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwicHVzaCIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic3RhdmVfbGlzdCIsInBhZGRpbmciLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiY29udGV4dCIsImdldENvbnRleHQiLCJiYXIiLCJzdGF2ZXMiLCJpIiwiU3RhdmUiLCJhZGRDbGVmIiwiY2xlZiIsInNldFRleHQiLCJuYW1lIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIkxFRlQiLCJzaGlmdF94Iiwic2V0Q29udGV4dCIsImRyYXciLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJCUkFDS0VUIiwidm9pY2VzIiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwic2V0TW9kZSIsIm5ld0NsZWYiLCJub3RlX3BhcnRzIiwicHJldl9wYXJ0cyIsImFkZE5vdGUiLCJTdGF2ZU5vdGUiLCJrZXlzIiwiZHVyYXRpb24iLCJqIiwic2FtZV9ub3RlIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJub3RlX2NvbG9yIiwiY29sb3JfbGlzdCIsImNvbG9ycyIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXRfd2lkdGgiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwicmVmcyIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiTGluZXMiLCJuZXdfbm90ZSIsImlkIiwidmYiLCJGYWN0b3J5IiwiZWxlbWVudElkIiwic3RhdmUiLCJzZXRZIiwibGluZXMiLCJub3RlIiwic3RhdmVOb3RlIiwiY2xlZk5vdGUiLCJDbGVmTm90ZSIsIm5vdGVTdWJHcm91cCIsIk5vdGVTdWJHcm91cCIsImFkZE1vZGlmaWVyIiwiU3RhdmVMaW5lIiwiZnJvbSIsInRvIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsIm91dGVyQSIsIkFwcCIsInZhbHVlIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFDTUMsSTs7Ozs7QUFFRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFIZTtBQVFsQjs7Ozt3Q0FFbUI7QUFFaEIsZUFBU0MsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDdkIsWUFBSUMsU0FBUyxHQUFDLEVBQWQ7QUFDQSxZQUFJQyxlQUFlLEdBQUMsRUFBcEIsQ0FGdUIsQ0FJdkI7O0FBQ0EsWUFBSUMsS0FBSyxHQUFHSCxPQUFaLENBTHVCLENBT25COztBQUVBLFlBQUksQ0FB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QixDQUhuQjtBQUlBLHNCQUFjLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsQ0FKaEI7QUFLQSx5QkFBaUIsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsQ0FMbkI7QUFNQSx3QkFBZ0IsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsQ0FObEI7QUFPQSxxQkFBYSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFBcUMsT0FBckM7QUFQZixRQWpETSxlQTBESSwyREFBQyxrREFBRDtBQUNBLFVBQUUsRUFBRSxLQURKO0FBRUEsYUFBSyxFQUFFLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxJQUFkLEVBQW9CLEtBQXBCLENBRlA7QUFHQSxjQUFNLEVBQUUsQ0FBQyxDQUFELENBSFI7QUFJQSxtQkFBVyxFQUFFLENBQUMsUUFBRCxFQUFXLFVBQVgsRUFBdUIsU0FBdkIsRUFBa0MsVUFBbEM7QUFKYixRQTFESixlQWdFSSwyREFBQyxrREFBRDtBQUNBLFVBQUUsRUFBRSxLQURKO0FBRUEsYUFBSyxFQUFFLENBQUMsSUFBRCxDQUZQO0FBR0EsY0FBTSxFQUFFLEVBSFI7QUFJQSxtQkFBVyxFQUFFLENBQUMsRUFBRDtBQUpiLFFBaEVKLGVBc0VJLDJEQUFDLG1EQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLSjtBQURuQixTQUVRLEtBQUtwSCxLQUZiLEVBdEVKLGVBMEVJLDJEQUFDLDBDQUFEO0FBQ0EsYUFBSyxFQUFDO0FBRE4sUUExRUosQ0FESjtBQWlGSDs7OztFQXRHYTJGLCtDOztBQXlHSHVCLGtFQUFmLEUiLCJmaWxlIjoiZmY4ZGQzMy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuXHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50LCBTdGF2ZSwgT3JjaGVzdHJhdGlvbiwgTWFza2luZywgUGlhbm9yb2xsLCBSYW5nZX0gZnJvbSAnLi4vbGliJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKE15Tm90ZXMpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgICAgICB2YXIgYWNjaWRlbnRhbF9saXN0PVtdXHJcblxyXG4gICAgICAgICAgICAvL2ZvciAodmFyIGk9MDsgaTxNeU5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IE15Tm90ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9JZiB0aGVyZSBpcyBqdXN0IG9uZSBub3RlLCBtYWtlIGl0IGFuIGFycmF5XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5PVtlbnRyeV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9nbyB0aHJvdWdoIGVhY2ggbm90ZSBpbiBjaG9yZFxyXG4gICAgICAgICAgICAgICAgLy8gVG9EbzogQWRkIGNvbG9yIGluZm9ybWF0aW9uIHRvIG5vdGVzXHJcbiAgICAgICAgICAgICAgICB2YXIgY2hvcmRfYWNjaWRlbnRpYWxzPVtdXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X25vdGVzPVtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrPTA7IGs8ZW50cnkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2tleSA9IGVudHJ5W2tdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlID0gZW50cnlba11bZW50cnlba10ubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVtrXS5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBlbnRyeVtrXVsxXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgYSBzdHJpbmcgb2Ygbm90ZXNcclxuICAgICAgICAgICAgICAgICAgICBuZXdfbm90ZXMucHVzaChuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKSlcclxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgYW4gYXJyYXkgb2YgYWNjaWRlbnRpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgY2hvcmRfYWNjaWRlbnRpYWxzLnB1c2gobmV3X2FjY2lkZW50aWFsKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgbm90ZV9saXN0LnB1c2gobmV3X25vdGVzKVxyXG4gICAgICAgICAgICAgICAgIGFjY2lkZW50YWxfbGlzdC5wdXNoKGNob3JkX2FjY2lkZW50aWFscylcclxuICAgICAgICAgICAgICAvLyAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFtub3RlX2xpc3RbMF0sIGFjY2lkZW50YWxfbGlzdF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtub3Rlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtoZWlnaHR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c3RhdmVfc3BhY2luZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzdGF2ZV9saXN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAxMDA7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGhlaWdodClcclxuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgrcGFkZGluZywgaGVpZ2h0KTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGF2ZV9saXN0Lmxlbmd0aClcclxuICAgIGZvcih2YXIgYmFyPTA7IGJhcjxzdGF2ZV9saXN0Lmxlbmd0aDsgYmFyKyspe1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc9MTAwXHJcbiAgICAgICAgLy8gfSBcclxuICAgICAgICAvL0NyZWF0ZSBzdGF2ZXNcclxuICAgICAgICB2YXIgc3RhdmVzPVtdXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGF2ZXMucHVzaChuZXcgVkYuU3RhdmUocGFkZGluZytiYXIqKHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSwgc3RhdmVfc3BhY2luZyooaSsxKSwgd2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgpKVxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uYWRkQ2xlZihzdGF2ZV9saXN0W2Jhcl1baV0uY2xlZilcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRUZXh0KHN0YXZlX2xpc3RbYmFyXVtpXS5uYW1lLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5MRUZULCB7IHNoaWZ0X3g6IC02MCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF2ZXNbaV0uc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29ubmVjdG9yID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlc1swXSwgc3RhdmVzW3N0YXZlcy5sZW5ndGgtMV0pO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgaWYoYmFyPT09MCl7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgdmFyIHZvaWNlcz1bXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR28gdGhyb3VnaCBhbGwgYmFyc1xyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgbm90ZV9saXN0LnB1c2goW10pXHJcbiAgICAgICAgICAgIHZvaWNlcy5wdXNoKG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiA0LCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9HbyB0aHJvdWdoIGFsbCBzdGF2ZXNcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NsZWYgPSBzdGF2ZV9saXN0W2Jhcl1ba10uY2xlZlxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfcGFydHMgPSBzZXBhcmF0ZShzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldl9wYXJ0cyA9IFtbW11dLFtbXV1dXHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkTm90ZT1uZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBuZXdDbGVmLCBrZXlzOiBub3RlX3BhcnRzWzBdLCBkdXJhdGlvbjogXCJxXCJ9KVxyXG4gICAgICAgICAgICAgICAgLy9SZW1lbWJlciB0aGUgcHJldmlvdXMgcGFydCBmb3IgY2hlY2tcclxuICAgICAgICAgICAgICAgIGlmIChpPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZfcGFydHMgPSBzZXBhcmF0ZShzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXNbaS0xXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDtqPG5vdGVfcGFydHNbMV1bMF0ubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiB0aGUgbm90ZSBpcyB0aGUgc2FtZSBhcyBwcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzYW1lX25vdGUgPSAobm90ZV9wYXJ0c1swXVswXT09PXByZXZfcGFydHNbMF1bMF0mJm5vdGVfcGFydHNbMF1bMF1bMF09PT1wcmV2X3BhcnRzWzBdWzBdWzBdKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihub3RlX3BhcnRzWzFdWzBdW2pdIT09J24nICYmICFzYW1lX25vdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuYWRkQWNjaWRlbnRhbChqLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX3BhcnRzWzFdWzBdW2pdKSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1lbWJlciB0byBhZGQgY29sb3JzIHRvIG5vdGVzIHNvbWVob3cuLi5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZV9jb2xvciA9ICdibGFjaydcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpc3Q9c3RhdmVfbGlzdFtiYXJdW2tdLmNvbG9yc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgY29sb3IgcHJvcGVydHkgaXMgZGVmaW5lZCwgZG8gc29tZXRoaW5nIHdpdGggY29sb3JzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xvcl9saXN0ICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZV9jb2xvcj1jb2xvcl9saXN0W2ldXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ3JnYmEoMCwwLDAsMCknLCBmaWxsU3R5bGU6IG5vdGVfY29sb3J9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub3RlX2xpc3Rba10ucHVzaChhZGROb3RlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZvaWNlc1trXS5hZGRUaWNrYWJsZXMobm90ZV9saXN0W2tdKVxyXG4gICAgICAgICAgICB2YXIgZm9ybWF0X3dpZHRoID0gd2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgtMzBcclxuICAgICAgICAgICAgaWYgKGJhcj09PTApe1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0X3dpZHRoPWZvcm1hdF93aWR0aC0yMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coc3RhdmVzW2tdLnNldE5vdGVTdGFydFgoayp3aWR0aCkpXHJcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VzW2tdXSkuZm9ybWF0KFt2b2ljZXNba11dLCBmb3JtYXRfd2lkdGgpO1xyXG4gICAgICAgICAgICAvL3ZvaWNlc1trXS5kcmF3KGNvbnRleHQsIHN0YXZlc1trXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKHZvaWNlcykuZm9ybWF0KHZvaWNlcywgNTApO1xyXG4gICAgICAgIC8vdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5mb3JtYXQodm9pY2VzLCAxMDApO1xyXG5cclxuICAgICAgICBmb3IodmFyIGsgPSAwOyBrPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2b2ljZXNba10uZHJhdyhjb250ZXh0LCBzdGF2ZXNba10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLm91dGVyLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBMaW5lcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShNeU5vdGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdfa2V5ID0gTXlOb3Rlc1swXTtcclxuICAgICAgICAgICAgdmFyIG5ld19vY3RhdmUgPSBNeU5vdGVzW015Tm90ZXMubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICBpZiAoTXlOb3Rlcy5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gTXlOb3Rlc1sxXTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5ld19ub3RlID0gbmV3X2tleS5jb25jYXQoXCIvXCIsbmV3X29jdGF2ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXdfbm90ZSwgbmV3X2FjY2lkZW50aWFsXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBub3Rlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMzA7XHJcbiAgICAgICAgLy92YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIHZmID0gbmV3IFZGLkZhY3Rvcnkoe3JlbmRlcmVyOiB7ZWxlbWVudElkOiBzdmdDb250YWluZXIsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9fSk7XHJcbiAgICAgICAgLy92YXIgc3lzdGVtID0gdmYuU3lzdGVtKHJlbmRlcmVyLmdldENvbnRleHQoKSkvLy5zZXRDb250ZXh0KHJlbmRlcmVyLmdldENvbnRleHQoKSlcclxuICAgICAgICAvL25ldyBWRi5TdGF2ZSgpLnNldFdpZHRoKClcclxuICAgICAgICAvL3ZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgIC8vdmFyIHN0YXZlID0gbmV3IFZGLlN0YXZlKHBhZGRpbmcsIDMwLCB3aWR0aClcclxuICAgICAgICAvL3ZhciBmaXJzdENsZWYgPSAndHJlYmxlJ1xyXG4gICAgICAgIC8vc3RhdmUuYWRkQ2xlZihmaXJzdENsZWYpXHJcbiAgICAgICAgLy9zdGF2ZS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuICAgICAgICB2YXIgc3RhdmUgPSB2Zi5TdGF2ZSgpLnNldFkoMTAwKVxyXG4gXHJcbiAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgIHZhciBsaW5lcyA9W11cclxuICAgICAgICAvL3ZhciB2b2ljZT1bXVxyXG4gICAgICAgIC8vdmFyIHZvaWNlID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKTtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPG5vdGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB2YXIgbm90ZSA9IHNlcGFyYXRlKG5vdGVzW2ldKVxyXG4gICAgICAgICAgICB2YXIgbmV3Q2xlZj0ndHJlYmxlJ1xyXG4gICAgICAgICAgICB2YXIgc3RhdmVOb3RlID0gdmYuU3RhdmVOb3RlKHtrZXlzOiBbbm90ZVswXV0sIGR1cmF0aW9uOic0JywgY2xlZjogbmV3Q2xlZn0pLmFkZEFjY2lkZW50YWwoMCwgbmV3IFZGLkFjY2lkZW50YWwobm90ZVsxXSkpXHJcbiAgICAgICAgICAgIHZhciBjbGVmTm90ZSA9IG5ldyBWZXguRmxvdy5DbGVmTm90ZSgnYmFzcycsICdzbWFsbCcpO1xyXG4gICAgICAgICAgICB2YXIgbm90ZVN1Ykdyb3VwID0gbmV3IFZleC5GbG93Lk5vdGVTdWJHcm91cChbY2xlZk5vdGVdKTtcclxuICAgICAgICAgICAgc3RhdmVOb3RlLmFkZE1vZGlmaWVyKDAsIG5vdGVTdWJHcm91cCk7XHJcbiAgICAgICAgICAgIC8vdmFyIG5ld19ub3RlID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogbmV3Q2xlZiwga2V5czogW25vdGVbMF1dLCBkdXJhdGlvbjogXCJxXCJ9KVxyXG4gICAgICAgICAgICAvL25ld19ub3RlLmFkZEFjY2lkZW50YWwoMCwgbmV3IFZGLkFjY2lkZW50YWwobm90ZVsxXSkpXHJcbiAgICAgICAgICAgIC8vbm90ZV9saXN0LnB1c2gobmV3X25vdGUpXHJcbiAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKHN0YXZlTm90ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy92b2ljZS5hZGRUaWNrYWJsZXMobm90ZV9saXN0KTtcclxuICAgICAgICB2YXIgdm9pY2VzID0gdmYuVm9pY2UoKS5zZXRNb2RlKDIpLmFkZFRpY2thYmxlcyhub3RlX2xpc3QpXHJcbiAgICAgICAgZm9yKHZhciBpPTE7aTxub3Rlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgLy92YXIgbGluZSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2Zyb206IG5vdGVfbGlzdFtpLTFdLCB0bzogbm90ZV9saXN0W2ldLCBmaXJzdF9pbmRpY2VzOiBbMF0sXHJcbiAgICAgICAgICAgIC8vICAgIGxhc3RfaW5kaWNlczogWzBdLH0pXHJcbiAgICAgICAgICAgIC8vbGluZS5zZXROb3Rlcyh7Zmlyc3Rfbm90ZTogbm90ZXNbaS0xXSwgbGFzdF9ub3RlOiBub3Rlc1tpXX0pXHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2godmYuU3RhdmVMaW5lKHtmcm9tOiBub3RlX2xpc3RbaS0xXSwgdG86IG5vdGVfbGlzdFtpXSwgZmlyc3RfaW5kaWNlczogWzBdLFxyXG4gICAgICAgICAgICAgICAgbGFzdF9pbmRpY2VzOiBbMF0sfSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VdKS5mb3JtYXQoW3ZvaWNlXSwgd2lkdGgtcGFkZGluZyk7XHJcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZXNdKS5mb3JtYXQoW3ZvaWNlc10sIHdpZHRoLXBhZGRpbmcpOy8vLmZvcm1hdFRvU3RhdmUoW3ZvaWNlc10sIHN0YXZlKTtcclxuXHJcbiAgICAgICAgdmYuZHJhdygpXHJcbiAgICAgICAgLy92b2ljZS5kcmF3KGNvbnRleHQsIHN0YXZlKTtcclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXJBLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPVwib3V0ZXJBXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9W1wiYzRcIiwgXCJmIzdcIiwgXCJlMVwiLCBcImdiM1wiXVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKHByb3BzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXM6JywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz1bJ2M0J11cclxuICAgICAgfVxyXG4vL25ldyBWRi5TdGF2ZU5vdGUoKS5zZXRcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lc1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbJ2M0JywgJ2I3JywgJ2Q0JywgJ2M1JywgJ2E1J119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJhbmdlXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17WydjNCcsICdiNycsICdkNCcsICdjNScsICdhNSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQaWFub3JvbGxcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgIHN0YXZlX2xpc3Q9e1tbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczpbJ2JsdWUnLCAnYmx1ZScsICdncmVlbicsICdncmVlbiddfSwgXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICdiYXNzJywgbmFtZTogJ2Jhc3Nvb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyMzJywgJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0J119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAnYmFzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6W1snYyMzJywgJ2QzJ10sIFsnYyMzJywgJ2QzJ10sJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczpbJ2JsdWUnLCAnYmx1ZScsICdncmVlbicsICdncmVlbiddfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0JywnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ2Jhc3MnLCBuYW1lOiAnYmFzc29vbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzMnLCAnZjMnLCAnYTMnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAnamVidScsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0J119LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgc3RhdmVfc3BhY2luZz17NzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nYzQvaFtzdGVtPSBcImRvd25cIiwgaWQ9XCJtMmFcIiwgYXJ0aWN1bGF0aW9ucz1cInN0YWNjYXRvLmJlbG93LHRlbnV0b1wiLCBzdHlsZT1cImZpbGxTdHlsZS5ibHVlXCJdLCBlNCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIENsaWNrIG1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8TWFza2luZ1xyXG4gICAgICBpZD0nbWFza2luZ19ub3Rlc3RhZmYnXHJcbiAgICAgIG1hc2tpbmdfbm90ZXZhbHVlcz17WzUwLCA2NywgODAsIDk0LCAxMDBdfVxyXG4gICAgICBtYXNraW5nX25vdGVzaXplcz17WzgwLCA3MCwgNzAsIDcwLCA3MF19XHJcbiAgICAgIG1hc2tpbmdfY29sb3JzPXtbJ3JlZCcsICdyZWQnLCAncmVkJywgJ3JlZCcsICdyZWQnXX1cclxuICAgICAgdGFyZ2V0X25vdGV2YWx1ZXM9e1s2MCwgNjQsIDY3LCA3MiwgNzldfVxyXG4gICAgICB0YXJnZXRfbm90ZXNpemVzPXtbNDAsIDQwLCA0MCwgNDAsIDQwXX1cclxuICAgICAgdGFyZ2V0X2NvbG9ycz17WydncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbiddfVxyXG4gICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIGlkPXsnaWQxJ31cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbXCJjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtbM119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17Wyd2aW9saW4nLCAnY2xhcmluZXQnLCAnYmFzc29vbicsICd0cm9tYm9uZSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxPcmNoZXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17J2lkMid9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1snJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNjb3JlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nKGM0IGU0IGc0KS9oLCBhNFtjbGVmPVwiYmFzc1wiXSdcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
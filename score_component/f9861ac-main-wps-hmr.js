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
          staffY = _this$props.staffY,
          notes = _this$props.notes,
          clefs = _this$props.clefs,
          colors = _this$props.colors;
      var padding = 30; //var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      //renderer.resize(width+padding, height);

      var vf = new VF.Factory({
        renderer: {
          elementId: svgContainer,
          width: width,
          height: height
        }
      });
      var context = vf.context; //var system = vf.System(renderer.getContext())//.setContext(renderer.getContext())
      //new VF.Stave().setWidth()
      //var context = renderer.getContext();
      //var stave = new VF.Stave(padding, 30, width)
      //var firstClef = 'treble'
      //stave.addClef(firstClef)
      //stave.setContext(context).draw();

      var stave = vf.Stave().setY(staffY);
      var note_list = [];
      var lines = [];
      var newClef = 'treble'; //var voice=[]
      //var voice = new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2);

      for (var i = 0; i < notes.length; i++) {
        var note = separate(notes[i]);

        if (clefs[i] !== '') {
          newClef = clefs[i];
        }

        var staveNote = vf.StaveNote({
          keys: [note[0]],
          duration: '4',
          clef: newClef
        }).addAccidental(0, new VF.Accidental(note[1]));

        if (clefs[i] !== '') {
          var clefNote = new vexflow__WEBPACK_IMPORTED_MODULE_1__["default"].Flow.ClefNote(clefs[i], 'small');
          var noteSubGroup = new vexflow__WEBPACK_IMPORTED_MODULE_1__["default"].Flow.NoteSubGroup([clefNote]);
          staveNote.addModifier(0, noteSubGroup);
        } //var new_note = new VF.StaveNote({clef: newClef, keys: [note[0]], duration: "q"})
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

      vf.draw();

      for (var i = 0; i < notes.length - 1; i++) {
        //Formatter notehead x coordinate
        var x_coo1 = formatter.voices[0].tickables[i].note_heads[0].x;
        var x_coo2 = formatter.voices[0].tickables[i + 1].note_heads[0].x;
        console.log(x_coo1); //Formatter notehead y coordinate

        var y_coo1 = formatter.voices[0].tickables[i].note_heads[0].y;
        var y_coo2 = formatter.voices[0].tickables[i + 1].note_heads[0].y;
        console.log(y_coo1); //Stave padding

        var st_x = stave.start_x;
        var st_y = stave.y + stave.height;
        context.beginPath() // start recording our pen's moves
        .moveTo(x_coo1 + st_x, st_y + 20) // pickup the pen and set it down at X=0, Y=0. NOTE: Y=0 is the top of the screen.
        .lineTo(x_coo2 + st_x, st_y + 20) // now add a line to the right from (0, 0) to (50, 0) to our path
        .lineTo(x_coo2 + st_x, st_y + 40) // add a line to the left and down from (50, 0) to (25, 50)
        .lineTo(x_coo1 + st_x, st_y + 40).closePath() // now add a line back to wherever the path started, in this case (0, 0), closing the triangle.
        .fill({
          fill: colors[i]
        }); // now fill our triangle in yellow.

        vf.draw();
      } //voice.draw(context, stave);


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
        width: 400,
        height: 250,
        staffY: 100,
        notes: ['c4', 'b6', 'd4', 'c3', 'a3'],
        clefs: ['treble', '', '', 'bass', ''],
        colors: ['yellow', 'red', 'gray']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Range"], {
        width: 600,
        height: 250,
        staffY: 100,
        notes: ['c4', 'b7', 'd4', 'c5', 'a5'],
        clefs: ['treble', '', '', 'bass', ''],
        colors: [['yellow', 'red', 'gray'], ['yellow'], ['gray'], ['black']],
        annotations: ['quiet', 'loud', 'no', 'yes', 'what']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Pianoroll"], {
        width: 800,
        height: 500,
        scale: 0.75,
        stave_list: [[{
          clef: 'treble',
          name: 'violin',
          notes: ['c#4', [], 'f4', 'a4'],
          colors: ['blue', 'blue', 'green', 'green']
        }, {
          clef: 'bass',
          name: 'bassoon',
          notes: [[], [], [], [], 'c#3', 'f3', 'a3']
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
        notes: "(c+4 e4 g4)/w[clef=\"bass\"]",
        width: 100,
        height: 150,
        scale: 0.5,
        padding: 10,
        clef: 'bass'
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5vdGVfbGlzdCIsImFjY2lkZW50YWxfbGlzdCIsImVudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hvcmRfYWNjaWRlbnRpYWxzIiwibmV3X25vdGVzIiwiayIsImxlbmd0aCIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwicHVzaCIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic3RhdmVfbGlzdCIsInBhZGRpbmciLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiY29udGV4dCIsImdldENvbnRleHQiLCJiYXIiLCJzdGF2ZXMiLCJpIiwiU3RhdmUiLCJhZGRDbGVmIiwiY2xlZiIsInNldFRleHQiLCJuYW1lIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIkxFRlQiLCJzaGlmdF94Iiwic2V0Q29udGV4dCIsImRyYXciLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJCUkFDS0VUIiwidm9pY2VzIiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwic2V0TW9kZSIsIm5ld0NsZWYiLCJub3RlX3BhcnRzIiwicHJldl9wYXJ0cyIsImFkZE5vdGUiLCJTdGF2ZU5vdGUiLCJrZXlzIiwiZHVyYXRpb24iLCJqIiwic2FtZV9ub3RlIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJub3RlX2NvbG9yIiwiY29sb3JfbGlzdCIsImNvbG9ycyIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXRfd2lkdGgiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwicmVmcyIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiTGluZXMiLCJuZXdfbm90ZSIsImlkIiwic3RhZmZZIiwiY2xlZnMiLCJ2ZiIsIkZhY3RvcnkiLCJlbGVtZW50SWQiLCJzdGF2ZSIsInNldFkiLCJsaW5lcyIsIm5vdGUiLCJzdGF2ZU5vdGUiLCJjbGVmTm90ZSIsIkNsZWZOb3RlIiwibm90ZVN1Ykdyb3VwIiwiTm90ZVN1Ykdyb3VwIiwiYWRkTW9kaWZpZXIiLCJTdGF2ZUxpbmUiLCJmcm9tIiwidG8iLCJmaXJzdF9pbmRpY2VzIiwibGFzdF9pbmRpY2VzIiwieF9jb28xIiwidGlja2FibGVzIiwibm90ZV9oZWFkcyIsInhfY29vMiIsInlfY29vMSIsInlfY29vMiIsInN0X3giLCJzdGFydF94Iiwic3RfeSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJvdXRlckEiLCJBcHAiLCJ2YWx1ZSIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBQ01DLEk7Ozs7O0FBRUYsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBSGU7QUFRbEI7Ozs7d0NBRW1CO0FBRWhC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dUIsU0FBdkIsRUFBa0MsVUFBbEM7QUFKYixRQWxFSixlQXdFSSwyREFBQyxrREFBRDtBQUNBLFVBQUUsRUFBRSxLQURKO0FBRUEsYUFBSyxFQUFFLENBQUMsSUFBRCxDQUZQO0FBR0EsY0FBTSxFQUFFLEVBSFI7QUFJQSxtQkFBVyxFQUFFLENBQUMsRUFBRDtBQUpiLFFBeEVKLGVBOEVJLDJEQUFDLG1EQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLSjtBQURuQixTQUVRLEtBQUtwSSxLQUZiLEVBOUVKLGVBa0ZJLDJEQUFDLDBDQUFEO0FBQ0EsYUFBSyxFQUFDLDhCQUROO0FBRUEsYUFBSyxFQUFFLEdBRlA7QUFHQSxjQUFNLEVBQUUsR0FIUjtBQUlBLGFBQUssRUFBRSxHQUpQO0FBS0EsZUFBTyxFQUFFLEVBTFQ7QUFNQSxZQUFJLEVBQUU7QUFOTixRQWxGSixDQURKO0FBOEZIOzs7O0VBbkhhMkYsK0M7O0FBc0hIdUMsa0VBQWYsRSIsImZpbGUiOiJmOTg2MWFjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5cclxuaW1wb3J0IHsgU2NvcmVDb21wb25lbnQsIFN0YXZlLCBPcmNoZXN0cmF0aW9uLCBNYXNraW5nLCBQaWFub3JvbGwsIFJhbmdlfSBmcm9tICcuLi9saWInO1xyXG5cclxuXHJcbmNvbnN0IFZGID0gVmV4LkZsb3c7XHJcbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUoTXlOb3Rlcykge1xyXG4gICAgICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgICAgIHZhciBhY2NpZGVudGFsX2xpc3Q9W11cclxuXHJcbiAgICAgICAgICAgIC8vZm9yICh2YXIgaT0wOyBpPE15Tm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gTXlOb3RlcztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGlzIGp1c3Qgb25lIG5vdGUsIG1ha2UgaXQgYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnk9W2VudHJ5XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBub3RlIGluIGNob3JkXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBBZGQgY29sb3IgaW5mb3JtYXRpb24gdG8gbm90ZXNcclxuICAgICAgICAgICAgICAgIHZhciBjaG9yZF9hY2NpZGVudGlhbHM9W11cclxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZXM9W11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGs9MDsgazxlbnRyeS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5ID0gZW50cnlba11bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19vY3RhdmUgPSBlbnRyeVtrXVtlbnRyeVtrXS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5W2tdLmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5W2tdWzFdOyBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhIHN0cmluZyBvZiBub3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19ub3Rlcy5wdXNoKG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhbiBhcnJheSBvZiBhY2NpZGVudGlhbHNcclxuICAgICAgICAgICAgICAgICAgICBjaG9yZF9hY2NpZGVudGlhbHMucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICBub3RlX2xpc3QucHVzaChuZXdfbm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgYWNjaWRlbnRhbF9saXN0LnB1c2goY2hvcmRfYWNjaWRlbnRpYWxzKVxyXG4gICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gW25vdGVfbGlzdFswXSwgYWNjaWRlbnRhbF9saXN0XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge25vdGVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3dpZHRofSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2hlaWdodH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzdGF2ZV9zcGFjaW5nfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3N0YXZlX2xpc3R9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgcGFkZGluZyA9IDEwMDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaGVpZ2h0KVxyXG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCtwYWRkaW5nLCBoZWlnaHQpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXZlX2xpc3QubGVuZ3RoKVxyXG4gICAgZm9yKHZhciBiYXI9MDsgYmFyPHN0YXZlX2xpc3QubGVuZ3RoOyBiYXIrKyl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAvLyAgICAgcGFkZGluZz0xMDBcclxuICAgICAgICAvLyB9IFxyXG4gICAgICAgIC8vQ3JlYXRlIHN0YXZlc1xyXG4gICAgICAgIHZhciBzdGF2ZXM9W11cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0YXZlcy5wdXNoKG5ldyBWRi5TdGF2ZShwYWRkaW5nK2Jhciood2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgpLCBzdGF2ZV9zcGFjaW5nKihpKzEpLCB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aCkpXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5hZGRDbGVmKHN0YXZlX2xpc3RbYmFyXVtpXS5jbGVmKVxyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLnNldFRleHQoc3RhdmVfbGlzdFtiYXJdW2ldLm5hbWUsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLkxFRlQsIHsgc2hpZnRfeDogLTYwIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVzWzBdLCBzdGF2ZXNbc3RhdmVzLmxlbmd0aC0xXSk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfTEVGVCk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICBpZihiYXI9PT0wKXtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5CUkFDS0VUKTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICB2YXIgdm9pY2VzPVtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9HbyB0aHJvdWdoIGFsbCBiYXJzXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBub3RlX2xpc3QucHVzaChbXSlcclxuICAgICAgICAgICAgdm9pY2VzLnB1c2gobmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0dvIHRocm91Z2ggYWxsIHN0YXZlc1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2xlZiA9IHN0YXZlX2xpc3RbYmFyXVtrXS5jbGVmXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9wYXJ0cyA9IHNlcGFyYXRlKHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpXSlcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2X3BhcnRzID0gW1tbXV0sW1tdXV1cclxuICAgICAgICAgICAgICAgIHZhciBhZGROb3RlPW5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IG5ld0NsZWYsIGtleXM6IG5vdGVfcGFydHNbMF0sIGR1cmF0aW9uOiBcInFcIn0pXHJcbiAgICAgICAgICAgICAgICAvL1JlbWVtYmVyIHRoZSBwcmV2aW91cyBwYXJ0IGZvciBjaGVja1xyXG4gICAgICAgICAgICAgICAgaWYgKGk+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldl9wYXJ0cyA9IHNlcGFyYXRlKHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpLTFdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wO2o8bm90ZV9wYXJ0c1sxXVswXS5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHRoZSBub3RlIGlzIHRoZSBzYW1lIGFzIHByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVfbm90ZSA9IChub3RlX3BhcnRzWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXSYmbm90ZV9wYXJ0c1swXVswXVswXT09PXByZXZfcGFydHNbMF1bMF1bMF0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5vdGVfcGFydHNbMV1bMF1bal0hPT0nbicgJiYgIXNhbWVfbm90ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5hZGRBY2NpZGVudGFsKGosIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfcGFydHNbMV1bMF1bal0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1JlbWVtYmVyIHRvIGFkZCBjb2xvcnMgdG8gbm90ZXMgc29tZWhvdy4uLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3RlX2NvbG9yID0gJ2JsYWNrJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JfbGlzdD1zdGF2ZV9saXN0W2Jhcl1ba10uY29sb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBjb2xvciBwcm9wZXJ0eSBpcyBkZWZpbmVkLCBkbyBzb21ldGhpbmcgd2l0aCBjb2xvcnMuLi5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbG9yX2xpc3QgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlX2NvbG9yPWNvbG9yX2xpc3RbaV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0U3R5bGUoe3N0cm9rZVN0eWxlOiAncmdiYSgwLDAsMCwwKScsIGZpbGxTdHlsZTogbm90ZV9jb2xvcn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vdGVfbGlzdFtrXS5wdXNoKGFkZE5vdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm9pY2VzW2tdLmFkZFRpY2thYmxlcyhub3RlX2xpc3Rba10pXHJcbiAgICAgICAgICAgIHZhciBmb3JtYXRfd2lkdGggPSB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aC0zMFxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRfd2lkdGg9Zm9ybWF0X3dpZHRoLTIwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF2ZXNba10uc2V0Tm90ZVN0YXJ0WChrKndpZHRoKSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZXNba11dKS5mb3JtYXQoW3ZvaWNlc1trXV0sIGZvcm1hdF93aWR0aCk7XHJcbiAgICAgICAgICAgIC8vdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXModm9pY2VzKS5mb3JtYXQodm9pY2VzLCA1MCk7XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmZvcm1hdCh2b2ljZXMsIDEwMCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWNlc1trXS5kcmF3KGNvbnRleHQsIHN0YXZlc1trXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIExpbmVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKE15Tm90ZXMpIHtcclxuICAgICAgICAgICAgdmFyIG5ld19rZXkgPSBNeU5vdGVzWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV3X29jdGF2ZSA9IE15Tm90ZXNbTXlOb3Rlcy5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgIGlmIChNeU5vdGVzLmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBNeU5vdGVzWzFdOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBcIm5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICByZXR1cm4gW25ld19ub3RlLCBuZXdfYWNjaWRlbnRpYWxdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7aWQsIHdpZHRoLCBoZWlnaHQsIHN0YWZmWSwgbm90ZXMsIGNsZWZzLCBjb2xvcnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgcGFkZGluZyA9IDMwO1xyXG4gICAgICAgIC8vdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3JlbmRlcmVyLnJlc2l6ZSh3aWR0aCtwYWRkaW5nLCBoZWlnaHQpO1xyXG4gICAgICAgIHZhciB2ZiA9IG5ldyBWRi5GYWN0b3J5KHtyZW5kZXJlcjoge2VsZW1lbnRJZDogc3ZnQ29udGFpbmVyLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fX0pO1xyXG4gICAgICAgIHZhciBjb250ZXh0PXZmLmNvbnRleHRcclxuXHJcbiAgICAgICAgLy92YXIgc3lzdGVtID0gdmYuU3lzdGVtKHJlbmRlcmVyLmdldENvbnRleHQoKSkvLy5zZXRDb250ZXh0KHJlbmRlcmVyLmdldENvbnRleHQoKSlcclxuICAgICAgICAvL25ldyBWRi5TdGF2ZSgpLnNldFdpZHRoKClcclxuICAgICAgICAvL3ZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgIC8vdmFyIHN0YXZlID0gbmV3IFZGLlN0YXZlKHBhZGRpbmcsIDMwLCB3aWR0aClcclxuICAgICAgICAvL3ZhciBmaXJzdENsZWYgPSAndHJlYmxlJ1xyXG4gICAgICAgIC8vc3RhdmUuYWRkQ2xlZihmaXJzdENsZWYpXHJcbiAgICAgICAgLy9zdGF2ZS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuICAgICAgICB2YXIgc3RhdmUgPSB2Zi5TdGF2ZSgpLnNldFkoc3RhZmZZKVxyXG5cclxuICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgdmFyIGxpbmVzID1bXVxyXG4gICAgICAgIHZhciBuZXdDbGVmID0gJ3RyZWJsZSdcclxuICAgICAgICAvL3ZhciB2b2ljZT1bXVxyXG4gICAgICAgIC8vdmFyIHZvaWNlID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKTtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPG5vdGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB2YXIgbm90ZSA9IHNlcGFyYXRlKG5vdGVzW2ldKVxyXG4gICAgICAgICAgICBpZiAoY2xlZnNbaV0hPT0nJyl7XHJcbiAgICAgICAgICAgICAgICBuZXdDbGVmPWNsZWZzW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3RhdmVOb3RlID0gdmYuU3RhdmVOb3RlKHtrZXlzOiBbbm90ZVswXV0sIGR1cmF0aW9uOic0JywgY2xlZjogbmV3Q2xlZn0pLmFkZEFjY2lkZW50YWwoMCwgbmV3IFZGLkFjY2lkZW50YWwobm90ZVsxXSkpXHJcbiAgICAgICAgICAgIGlmIChjbGVmc1tpXSE9PScnKXtcclxuICAgICAgICAgICAgICAgIHZhciBjbGVmTm90ZSA9IG5ldyBWZXguRmxvdy5DbGVmTm90ZShjbGVmc1tpXSwgJ3NtYWxsJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZVN1Ykdyb3VwID0gbmV3IFZleC5GbG93Lk5vdGVTdWJHcm91cChbY2xlZk5vdGVdKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlTm90ZS5hZGRNb2RpZmllcigwLCBub3RlU3ViR3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy92YXIgbmV3X25vdGUgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBuZXdDbGVmLCBrZXlzOiBbbm90ZVswXV0sIGR1cmF0aW9uOiBcInFcIn0pXHJcbiAgICAgICAgICAgIC8vbmV3X25vdGUuYWRkQWNjaWRlbnRhbCgwLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlWzFdKSlcclxuICAgICAgICAgICAgLy9ub3RlX2xpc3QucHVzaChuZXdfbm90ZSlcclxuICAgICAgICAgICAgbm90ZV9saXN0LnB1c2goc3RhdmVOb3RlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL3ZvaWNlLmFkZFRpY2thYmxlcyhub3RlX2xpc3QpO1xyXG4gICAgICAgIHZhciB2b2ljZXMgPSB2Zi5Wb2ljZSgpLnNldE1vZGUoMikuYWRkVGlja2FibGVzKG5vdGVfbGlzdClcclxuICAgICAgICBmb3IodmFyIGk9MTtpPG5vdGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAvL3ZhciBsaW5lID0gbmV3IFZGLlN0YXZlTGluZSh7ZnJvbTogbm90ZV9saXN0W2ktMV0sIHRvOiBub3RlX2xpc3RbaV0sIGZpcnN0X2luZGljZXM6IFswXSxcclxuICAgICAgICAgICAgLy8gICAgbGFzdF9pbmRpY2VzOiBbMF0sfSlcclxuICAgICAgICAgICAgLy9saW5lLnNldE5vdGVzKHtmaXJzdF9ub3RlOiBub3Rlc1tpLTFdLCBsYXN0X25vdGU6IG5vdGVzW2ldfSlcclxuICAgICAgICAgICAgbGluZXMucHVzaCh2Zi5TdGF2ZUxpbmUoe2Zyb206IG5vdGVfbGlzdFtpLTFdLCB0bzogbm90ZV9saXN0W2ldLCBmaXJzdF9pbmRpY2VzOiBbMF0sXHJcbiAgICAgICAgICAgICAgICBsYXN0X2luZGljZXM6IFswXSx9KSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV0pLmZvcm1hdChbdm9pY2VdLCB3aWR0aC1wYWRkaW5nKTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc10pLmZvcm1hdChbdm9pY2VzXSwgd2lkdGgtcGFkZGluZyk7Ly8uZm9ybWF0VG9TdGF2ZShbdm9pY2VzXSwgc3RhdmUpO1xyXG4gICAgICAgIHZmLmRyYXcoKVxyXG5cclxuICAgICAgICBmb3IodmFyIGk9MDtpPG5vdGVzLmxlbmd0aC0xO2krKyl7XHJcbiAgICAgICAgLy9Gb3JtYXR0ZXIgbm90ZWhlYWQgeCBjb29yZGluYXRlXHJcbiAgICAgICAgdmFyIHhfY29vMSA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2ldLm5vdGVfaGVhZHNbMF0ueFxyXG4gICAgICAgIHZhciB4X2NvbzIgPSBmb3JtYXR0ZXIudm9pY2VzWzBdLnRpY2thYmxlc1tpKzFdLm5vdGVfaGVhZHNbMF0ueFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHhfY29vMSlcclxuXHJcbiAgICAgICAgLy9Gb3JtYXR0ZXIgbm90ZWhlYWQgeSBjb29yZGluYXRlXHJcbiAgICAgICAgdmFyIHlfY29vMSA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2ldLm5vdGVfaGVhZHNbMF0ueVxyXG4gICAgICAgIHZhciB5X2NvbzIgPSBmb3JtYXR0ZXIudm9pY2VzWzBdLnRpY2thYmxlc1tpKzFdLm5vdGVfaGVhZHNbMF0ueVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHlfY29vMSlcclxuXHJcbiAgICAgICAgLy9TdGF2ZSBwYWRkaW5nXHJcbiAgICAgICAgdmFyIHN0X3ggPSBzdGF2ZS5zdGFydF94XHJcbiAgICAgICAgdmFyIHN0X3kgPSBzdGF2ZS55K3N0YXZlLmhlaWdodFxyXG5cclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpIC8vIHN0YXJ0IHJlY29yZGluZyBvdXIgcGVuJ3MgbW92ZXNcclxuICAgICAgICAubW92ZVRvKHhfY29vMStzdF94LCBzdF95KzIwKSAvLyBwaWNrdXAgdGhlIHBlbiBhbmQgc2V0IGl0IGRvd24gYXQgWD0wLCBZPTAuIE5PVEU6IFk9MCBpcyB0aGUgdG9wIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAgICAgLmxpbmVUbyh4X2NvbzIrc3RfeCwgc3RfeSsyMCkgLy8gbm93IGFkZCBhIGxpbmUgdG8gdGhlIHJpZ2h0IGZyb20gKDAsIDApIHRvICg1MCwgMCkgdG8gb3VyIHBhdGhcclxuICAgICAgICAubGluZVRvKHhfY29vMitzdF94LCBzdF95KzQwKSAvLyBhZGQgYSBsaW5lIHRvIHRoZSBsZWZ0IGFuZCBkb3duIGZyb20gKDUwLCAwKSB0byAoMjUsIDUwKVxyXG4gICAgICAgIC5saW5lVG8oeF9jb28xK3N0X3gsIHN0X3krNDApXHJcbiAgICAgICAgLmNsb3NlUGF0aCgpIC8vIG5vdyBhZGQgYSBsaW5lIGJhY2sgdG8gd2hlcmV2ZXIgdGhlIHBhdGggc3RhcnRlZCwgaW4gdGhpcyBjYXNlICgwLCAwKSwgY2xvc2luZyB0aGUgdHJpYW5nbGUuXHJcbiAgICAgICAgLmZpbGwoeyBmaWxsOiBjb2xvcnNbaV0gfSk7IC8vIG5vdyBmaWxsIG91ciB0cmlhbmdsZSBpbiB5ZWxsb3cuXHJcbiAgICAgICAgdmYuZHJhdygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3ZvaWNlLmRyYXcoY29udGV4dCwgc3RhdmUpO1xyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlckEuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiByZWY9XCJvdXRlckFcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz1bXCJjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2socHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpczonLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPVsnYzQnXVxyXG4gICAgICB9XHJcbi8vbmV3IFZGLlN0YXZlTm90ZSgpLnNldFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVzXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICBzdGFmZlk9ezEwMH1cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbJ2M0JywgJ2I2JywgJ2Q0JywgJ2MzJywgJ2EzJ119XHJcbiAgICAgICAgICAgICAgICBjbGVmcz17Wyd0cmVibGUnLCAnJywgJycsICdiYXNzJywgJyddfVxyXG4gICAgICAgICAgICAgICAgY29sb3JzPXtbJ3llbGxvdycsICdyZWQnLCAnZ3JheSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYW5nZVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgc3RhZmZZPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17WydjNCcsICdiNycsICdkNCcsICdjNScsICdhNSddfVxyXG4gICAgICAgICAgICAgICAgY2xlZnM9e1sndHJlYmxlJywgJycsICcnLCAnYmFzcycsICcnXX1cclxuICAgICAgICAgICAgICAgIGNvbG9ycz17W1sneWVsbG93JywgJ3JlZCcsICdncmF5J10sIFsneWVsbG93J10sIFsnZ3JheSddLCBbJ2JsYWNrJ11dfVxyXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM9e1sncXVpZXQnLCAnbG91ZCcsICdubycsICd5ZXMnLCAnd2hhdCddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQaWFub3JvbGxcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgIHNjYWxlPXswLjc1fVxyXG4gICAgICAgICAgICAgICAgc3RhdmVfbGlzdD17W1tcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICd2aW9saW4nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCBbXSwgJ2Y0JywgJ2E0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOlsnYmx1ZScsICdibHVlJywgJ2dyZWVuJywgJ2dyZWVuJ119LCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ2Jhc3MnLCBuYW1lOiAnYmFzc29vbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6W1tdLCBbXSwgW10sIFtdLCAnYyMzJywgJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0J119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAnYmFzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6W1snYyMzJywgJ2QzJ10sIFsnYyMzJywgJ2QzJ10sJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczpbJ2JsdWUnLCAnYmx1ZScsICdncmVlbicsICdncmVlbiddfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0JywnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ2Jhc3MnLCBuYW1lOiAnYmFzc29vbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzMnLCAnZjMnLCAnYTMnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAnamVidScsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0J119LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgc3RhdmVfc3BhY2luZz17NzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nYzQvaFtzdGVtPSBcImRvd25cIiwgaWQ9XCJtMmFcIiwgYXJ0aWN1bGF0aW9ucz1cInN0YWNjYXRvLmJlbG93LHRlbnV0b1wiLCBzdHlsZT1cImZpbGxTdHlsZS5ibHVlXCJdLCBlNCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIENsaWNrIG1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8TWFza2luZ1xyXG4gICAgICBpZD0nbWFza2luZ19ub3Rlc3RhZmYnXHJcbiAgICAgIG1hc2tpbmdfbm90ZXZhbHVlcz17WzUwLCA2NywgODAsIDk0LCAxMDBdfVxyXG4gICAgICBtYXNraW5nX25vdGVzaXplcz17WzgwLCA3MCwgNzAsIDcwLCA3MF19XHJcbiAgICAgIG1hc2tpbmdfY29sb3JzPXtbJ3JlZCcsICdyZWQnLCAncmVkJywgJ3JlZCcsICdyZWQnXX1cclxuICAgICAgdGFyZ2V0X25vdGV2YWx1ZXM9e1s2MCwgNjQsIDY3LCA3MiwgNzldfVxyXG4gICAgICB0YXJnZXRfbm90ZXNpemVzPXtbNDAsIDQwLCA0MCwgNDAsIDQwXX1cclxuICAgICAgdGFyZ2V0X2NvbG9ycz17WydncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbiddfVxyXG4gICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIGlkPXsnaWQxJ31cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbXCJjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtbM119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17Wyd2aW9saW4nLCAnY2xhcmluZXQnLCAnYmFzc29vbicsICd0cm9tYm9uZSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxPcmNoZXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17J2lkMid9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1snJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNjb3JlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nKGMrNCBlNCBnNCkvd1tjbGVmPVwiYmFzc1wiXSdcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cclxuICAgICAgICAgICAgICAgIHNjYWxlPXswLjV9XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPXsxMH1cclxuICAgICAgICAgICAgICAgIGNsZWY9eydiYXNzJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
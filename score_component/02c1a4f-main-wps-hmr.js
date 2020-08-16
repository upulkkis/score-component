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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5vdGVfbGlzdCIsImFjY2lkZW50YWxfbGlzdCIsImVudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hvcmRfYWNjaWRlbnRpYWxzIiwibmV3X25vdGVzIiwiayIsImxlbmd0aCIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwicHVzaCIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic3RhdmVfbGlzdCIsInBhZGRpbmciLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiY29udGV4dCIsImdldENvbnRleHQiLCJiYXIiLCJzdGF2ZXMiLCJpIiwiU3RhdmUiLCJhZGRDbGVmIiwiY2xlZiIsInNldFRleHQiLCJuYW1lIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIkxFRlQiLCJzaGlmdF94Iiwic2V0Q29udGV4dCIsImRyYXciLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJCUkFDS0VUIiwidm9pY2VzIiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwic2V0TW9kZSIsIm5ld0NsZWYiLCJub3RlX3BhcnRzIiwicHJldl9wYXJ0cyIsImFkZE5vdGUiLCJTdGF2ZU5vdGUiLCJrZXlzIiwiZHVyYXRpb24iLCJqIiwic2FtZV9ub3RlIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJub3RlX2NvbG9yIiwiY29sb3JfbGlzdCIsImNvbG9ycyIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXRfd2lkdGgiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwicmVmcyIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiTGluZXMiLCJuZXdfbm90ZSIsImlkIiwic3RhZmZZIiwiY2xlZnMiLCJ2ZiIsIkZhY3RvcnkiLCJlbGVtZW50SWQiLCJzdGF2ZSIsInNldFkiLCJsaW5lcyIsIm5vdGUiLCJzdGF2ZU5vdGUiLCJjbGVmTm90ZSIsIkNsZWZOb3RlIiwibm90ZVN1Ykdyb3VwIiwiTm90ZVN1Ykdyb3VwIiwiYWRkTW9kaWZpZXIiLCJTdGF2ZUxpbmUiLCJmcm9tIiwidG8iLCJmaXJzdF9pbmRpY2VzIiwibGFzdF9pbmRpY2VzIiwieF9jb28xIiwidGlja2FibGVzIiwibm90ZV9oZWFkcyIsInhfY29vMiIsInlfY29vMSIsInlfY29vMiIsInN0X3giLCJzdGFydF94Iiwic3RfeSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJvdXRlckEiLCJBcHAiLCJ2YWx1ZSIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBQ01DLEk7Ozs7O0FBRUYsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBSGU7QUFRbEI7Ozs7d0NBRW1CO0FBRWhCLGVBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQ3ZCLFlBQUlDLFNBQVMsR0FBQyxFQUFkO0FBQ0EsWUFBSUMsZUFBZSxHQUFDLEVBQXBCLENBRnVCLENBSXZCOztBQUNBLFlBQUlDLEtBQUssR0FBR0gsT0FBWixDQUx1QixDQU9uQjs7QUFFQSxZQUFJLENBQUNJLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUwsRUFBMEI7QUFDdEJBLGVBQUssR0FBQyxDQUFDQSxLQUFELENBQU47QUFDSCxTQVhrQixDQWFuQjtBQUNBOzs7QUFDQSxZQUFJRyxrQkFBa0IsR0FBQyxFQUF2QjtBQUNBLFlBQUlDLFNBQVMsR0FBQyxFQUFkOztBQUNBLGFBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDTCxLQUFLLENBQUNNLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQW1DO0FBRS9CLGNBQUlFLE9BQU8sR0FBR1AsS0FBSyxDQUFDSyxDQUFELENBQUwsQ0FBUyxDQUFULENBQWQ7QUFDQSxjQUFJRyxVQUFVLEdBQUdSLEtBQUssQ0FBQ0ssQ0FBRCxDQUFMLENBQVNMLEtBQUssQ0FBQ0ssQ0FBRCxDQUFMLENBQVNDLE1BQVQsR0FBZ0IsQ0FBekIsQ0FBakI7O0FBQ0EsY0FBSU4sS0FBSyxDQUFDSyxDQUFELENBQUwsQ0FBU0MsTUFBVCxHQUFnQixDQUFwQixFQUFzQjtBQUNsQixnQkFBSUcsZUFBZSxHQUFHVCxLQUFLLENBQUNLLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBdEI7QUFDSCxXQUZELE1BRU87QUFDSCxnQkFBSUksZUFBZSxHQUFHLEdBQXRCO0FBQ0gsV0FSOEIsQ0FVL0I7OztBQUNBTCxtQkFBUyxDQUFDTSxJQUFWLENBQWVILE9BQU8sQ0FBQ0ksTUFBUixDQUFlLEdBQWYsRUFBbUJILFVBQW5CLENBQWYsRUFYK0IsQ0FZL0I7O0FBQ0FMLDRCQUFrQixDQUFDTyxJQUFuQixDQUF3QkQsZUFBeEI7QUFDRjs7QUFFRFgsaUJBQVMsQ0FBQ1ksSUFBVixDQUFlTixTQUFmO0FBQ0FMLHVCQUFlLENBQUNXLElBQWhCLENBQXFCUCxrQkFBckIsRUFsQ2tCLENBbUNyQjs7QUFFRixlQUFPLENBQUNMLFNBQVMsQ0FBQyxDQUFELENBQVYsRUFBZUMsZUFBZixDQUFQO0FBQ0g7O0FBRUQsVUFBTWEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUExQ2dCLFVBMkNUQyxLQTNDUyxHQTJDQSxLQUFLdkIsS0EzQ0wsQ0EyQ1R1QixLQTNDUztBQUFBLFVBNENUQyxLQTVDUyxHQTRDQSxLQUFLeEIsS0E1Q0wsQ0E0Q1R3QixLQTVDUztBQUFBLFVBNkNUQyxNQTdDUyxHQTZDQyxLQUFLekIsS0E3Q04sQ0E2Q1R5QixNQTdDUztBQUFBLFVBOENUQyxhQTlDUyxHQThDUSxLQUFLMUIsS0E5Q2IsQ0E4Q1QwQixhQTlDUztBQUFBLFVBK0NUQyxVQS9DUyxHQStDSyxLQUFLM0IsS0EvQ1YsQ0ErQ1QyQixVQS9DUztBQWdEaEIsVUFBSUMsT0FBTyxHQUFHLEdBQWQ7QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7QUFDQSxVQUFJTSxRQUFRLEdBQUcsSUFBSW5DLEVBQUUsQ0FBQ29DLFFBQVAsQ0FBZ0JaLFlBQWhCLEVBQThCeEIsRUFBRSxDQUFDb0MsUUFBSCxDQUFZQyxRQUFaLENBQXFCQyxHQUFuRCxDQUFmO0FBRUFILGNBQVEsQ0FBQ0ksTUFBVCxDQUFnQlgsS0FBSyxHQUFDSSxPQUF0QixFQUErQkgsTUFBL0I7QUFDQSxVQUFJVyxPQUFPLEdBQUdMLFFBQVEsQ0FBQ00sVUFBVCxFQUFkO0FBQ0FSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFVLENBQUNiLE1BQXZCOztBQUNKLFdBQUksSUFBSXdCLEdBQUcsR0FBQyxDQUFaLEVBQWVBLEdBQUcsR0FBQ1gsVUFBVSxDQUFDYixNQUE5QixFQUFzQ3dCLEdBQUcsRUFBekMsRUFBNEM7QUFHeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJQyxNQUFNLEdBQUMsRUFBWDs7QUFDQSxhQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBQ2IsVUFBVSxDQUFDVyxHQUFELENBQVYsQ0FBZ0J4QixNQUFqQyxFQUF5QzBCLENBQUMsRUFBMUMsRUFBNkM7QUFDekNELGdCQUFNLENBQUNyQixJQUFQLENBQVksSUFBSXRCLEVBQUUsQ0FBQzZDLEtBQVAsQ0FBYWIsT0FBTyxHQUFDVSxHQUFHLElBQUVkLEtBQUssR0FBQ0csVUFBVSxDQUFDYixNQUFuQixDQUF4QixFQUFvRFksYUFBYSxJQUFFYyxDQUFDLEdBQUMsQ0FBSixDQUFqRSxFQUF5RWhCLEtBQUssR0FBQ0csVUFBVSxDQUFDYixNQUExRixDQUFaOztBQUNBLGNBQUl3QixHQUFHLEtBQUcsQ0FBVixFQUFZO0FBQ1JDLGtCQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVRSxPQUFWLENBQWtCZixVQUFVLENBQUNXLEdBQUQsQ0FBVixDQUFnQkUsQ0FBaEIsRUFBbUJHLElBQXJDO0FBQ0FKLGtCQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVSSxPQUFWLENBQWtCakIsVUFBVSxDQUFDVyxHQUFELENBQVYsQ0FBZ0JFLENBQWhCLEVBQW1CSyxJQUFyQyxFQUEyQ2pELEVBQUUsQ0FBQ2tELFFBQUgsQ0FBWUMsUUFBWixDQUFxQkMsSUFBaEUsRUFBc0U7QUFBRUMscUJBQU8sRUFBRSxDQUFDO0FBQVosYUFBdEU7QUFDSDs7QUFDRFYsZ0JBQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVVLFVBQVYsQ0FBcUJkLE9BQXJCLEVBQThCZSxJQUE5QjtBQUVIOztBQUNELFlBQUlDLFNBQVMsR0FBRyxJQUFJeEQsRUFBRSxDQUFDeUQsY0FBUCxDQUFzQmQsTUFBTSxDQUFDLENBQUQsQ0FBNUIsRUFBaUNBLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDekIsTUFBUCxHQUFjLENBQWYsQ0FBdkMsQ0FBaEI7QUFDQXNDLGlCQUFTLENBQUNFLE9BQVYsQ0FBa0IxRCxFQUFFLENBQUN5RCxjQUFILENBQWtCRSxJQUFsQixDQUF1QkMsV0FBekM7QUFDQUosaUJBQVMsQ0FBQ0YsVUFBVixDQUFxQmQsT0FBckI7QUFDQWdCLGlCQUFTLENBQUNELElBQVY7O0FBQ0EsWUFBR2IsR0FBRyxLQUFHLENBQVQsRUFBVztBQUNQYyxtQkFBUyxDQUFDRSxPQUFWLENBQWtCMUQsRUFBRSxDQUFDeUQsY0FBSCxDQUFrQkUsSUFBbEIsQ0FBdUJFLE9BQXpDO0FBQ0FMLG1CQUFTLENBQUNGLFVBQVYsQ0FBcUJkLE9BQXJCO0FBQ0FnQixtQkFBUyxDQUFDRCxJQUFWO0FBQ0g7O0FBQ0QsWUFBSTdDLFNBQVMsR0FBQyxFQUFkO0FBQ0EsWUFBSW9ELE1BQU0sR0FBQyxFQUFYLENBM0J3QyxDQTZCeEM7O0FBQ0EsYUFBSSxJQUFJN0MsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDYyxVQUFVLENBQUNXLEdBQUQsQ0FBVixDQUFnQnhCLE1BQWpDLEVBQXlDRCxDQUFDLEVBQTFDLEVBQTZDO0FBQ3pDUCxtQkFBUyxDQUFDWSxJQUFWLENBQWUsRUFBZjtBQUNBd0MsZ0JBQU0sQ0FBQ3hDLElBQVAsQ0FBWSxJQUFJdEIsRUFBRSxDQUFDK0QsS0FBUCxDQUFhO0FBQUNDLHFCQUFTLEVBQUUsQ0FBWjtBQUFnQkMsc0JBQVUsRUFBRTtBQUE1QixXQUFiLEVBQTZDQyxPQUE3QyxDQUFxRCxDQUFyRCxDQUFaLEVBRnlDLENBSXpDOztBQUNBLGVBQUksSUFBSXRCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBQ2IsVUFBVSxDQUFDVyxHQUFELENBQVYsQ0FBZ0J6QixDQUFoQixFQUFtQlUsS0FBbkIsQ0FBeUJULE1BQTFDLEVBQWtEMEIsQ0FBQyxFQUFuRCxFQUFzRDtBQUNsRCxnQkFBSXVCLE9BQU8sR0FBR3BDLFVBQVUsQ0FBQ1csR0FBRCxDQUFWLENBQWdCekIsQ0FBaEIsRUFBbUI4QixJQUFqQztBQUNBLGdCQUFJcUIsVUFBVSxHQUFHNUQsUUFBUSxDQUFDdUIsVUFBVSxDQUFDVyxHQUFELENBQVYsQ0FBZ0J6QixDQUFoQixFQUFtQlUsS0FBbkIsQ0FBeUJpQixDQUF6QixDQUFELENBQXpCO0FBQ0EsZ0JBQUl5QixVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxFQUFNLENBQUMsRUFBRCxDQUFOLENBQWpCO0FBQ0EsZ0JBQUlDLE9BQU8sR0FBQyxJQUFJdEUsRUFBRSxDQUFDdUUsU0FBUCxDQUFpQjtBQUFDeEIsa0JBQUksRUFBRW9CLE9BQVA7QUFBZ0JLLGtCQUFJLEVBQUVKLFVBQVUsQ0FBQyxDQUFELENBQWhDO0FBQXFDSyxzQkFBUSxFQUFFO0FBQS9DLGFBQWpCLENBQVosQ0FKa0QsQ0FLbEQ7O0FBQ0EsZ0JBQUk3QixDQUFDLEdBQUMsQ0FBTixFQUFRO0FBQ0p5Qix3QkFBVSxHQUFHN0QsUUFBUSxDQUFDdUIsVUFBVSxDQUFDVyxHQUFELENBQVYsQ0FBZ0J6QixDQUFoQixFQUFtQlUsS0FBbkIsQ0FBeUJpQixDQUFDLEdBQUMsQ0FBM0IsQ0FBRCxDQUFyQjtBQUNIOztBQUNELGlCQUFLLElBQUk4QixDQUFDLEdBQUMsQ0FBWCxFQUFhQSxDQUFDLEdBQUNOLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYyxDQUFkLEVBQWlCbEQsTUFBaEMsRUFBdUN3RCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3ZDO0FBQ0Esa0JBQUlDLFNBQVMsR0FBSVAsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjLENBQWQsTUFBbUJDLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYyxDQUFkLENBQW5CLElBQXFDRCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMsQ0FBZCxFQUFpQixDQUFqQixNQUFzQkMsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBNUU7O0FBRUEsa0JBQUdELFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYyxDQUFkLEVBQWlCTSxDQUFqQixNQUFzQixHQUF0QixJQUE2QixDQUFDQyxTQUFqQyxFQUEyQztBQUMzQ0wsdUJBQU8sQ0FBQ00sYUFBUixDQUFzQkYsQ0FBdEIsRUFBeUIsSUFBSTFFLEVBQUUsQ0FBQzZFLFVBQVAsQ0FBa0JULFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYyxDQUFkLEVBQWlCTSxDQUFqQixDQUFsQixDQUF6QjtBQUNILGVBTjBDLENBUXZDOzs7QUFDQSxrQkFBSUksVUFBVSxHQUFHLE9BQWpCO0FBRUEsa0JBQUlDLFVBQVUsR0FBQ2hELFVBQVUsQ0FBQ1csR0FBRCxDQUFWLENBQWdCekIsQ0FBaEIsRUFBbUIrRCxNQUFsQyxDQVh1QyxDQVl2Qzs7QUFDQSxrQkFBSSxPQUFPRCxVQUFQLElBQXFCLFdBQXpCLEVBQXFDO0FBQ2pDRCwwQkFBVSxHQUFDQyxVQUFVLENBQUNuQyxDQUFELENBQXJCO0FBQ0g7O0FBRUQwQixxQkFBTyxDQUFDVyxRQUFSLENBQWlCO0FBQUNDLDJCQUFXLEVBQUUsZUFBZDtBQUErQkMseUJBQVMsRUFBRUw7QUFBMUMsZUFBakI7QUFDUDs7QUFDR3BFLHFCQUFTLENBQUNPLENBQUQsQ0FBVCxDQUFhSyxJQUFiLENBQWtCZ0QsT0FBbEI7QUFDSDs7QUFDRFIsZ0JBQU0sQ0FBQzdDLENBQUQsQ0FBTixDQUFVbUUsWUFBVixDQUF1QjFFLFNBQVMsQ0FBQ08sQ0FBRCxDQUFoQztBQUNBLGNBQUlvRSxZQUFZLEdBQUd6RCxLQUFLLEdBQUNHLFVBQVUsQ0FBQ2IsTUFBakIsR0FBd0IsRUFBM0M7O0FBQ0EsY0FBSXdCLEdBQUcsS0FBRyxDQUFWLEVBQVk7QUFDUjJDLHdCQUFZLEdBQUNBLFlBQVksR0FBQyxFQUExQjtBQUNILFdBdkN3QyxDQXdDekM7OztBQUNBLGNBQUlDLFNBQVMsR0FBRyxJQUFJdEYsRUFBRSxDQUFDdUYsU0FBUCxHQUFtQkMsVUFBbkIsQ0FBOEIsQ0FBQzFCLE1BQU0sQ0FBQzdDLENBQUQsQ0FBUCxDQUE5QixFQUEyQ3dFLE1BQTNDLENBQWtELENBQUMzQixNQUFNLENBQUM3QyxDQUFELENBQVAsQ0FBbEQsRUFBK0RvRSxZQUEvRCxDQUFoQixDQXpDeUMsQ0EwQ3pDO0FBQ0gsU0F6RXVDLENBMEV4QztBQUNBOzs7QUFFQSxhQUFJLElBQUlwRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUNjLFVBQVUsQ0FBQ1csR0FBRCxDQUFWLENBQWdCeEIsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBNkM7QUFFekM2QyxnQkFBTSxDQUFDN0MsQ0FBRCxDQUFOLENBQVVzQyxJQUFWLENBQWVmLE9BQWYsRUFBd0JHLE1BQU0sQ0FBQzFCLENBQUQsQ0FBOUI7QUFDSDtBQUNKOztBQUVHLFdBQUt5RSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFdBQWhCLENBQTRCcEUsWUFBNUI7QUFDSDs7OzZCQUVRO0FBQ0wsMEJBQU87QUFBSyxXQUFHLEVBQUMsT0FBVDtBQUFpQixhQUFLLEVBQUU7QUFDM0JxRSxnQkFBTSxFQUFFLE1BRG1CO0FBRTNCN0QsaUJBQU8sRUFBRSxDQUZrQjtBQUczQjhELHNCQUFZLEVBQUUsQ0FIYTtBQUkzQkMsaUJBQU8sRUFBRTtBQUprQjtBQUF4QixRQUFQO0FBT0g7Ozs7RUFsS2NDLCtDOztJQXNLYkMsSzs7Ozs7QUFFRixpQkFBWTdGLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixnQ0FBTUEsS0FBTjtBQUVBLFdBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBSGU7QUFRbEI7Ozs7d0NBRW1CO0FBRWhCLGVBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQ3ZCLFlBQUlVLE9BQU8sR0FBR1YsT0FBTyxDQUFDLENBQUQsQ0FBckI7QUFDQSxZQUFJVyxVQUFVLEdBQUdYLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDUyxNQUFSLEdBQWUsQ0FBaEIsQ0FBeEI7O0FBQ0EsWUFBSVQsT0FBTyxDQUFDUyxNQUFSLEdBQWUsQ0FBbkIsRUFBcUI7QUFDakIsY0FBSUcsZUFBZSxHQUFHWixPQUFPLENBQUMsQ0FBRCxDQUE3QjtBQUNILFNBRkQsTUFFTztBQUNILGNBQUlZLGVBQWUsR0FBRyxHQUF0QjtBQUNIOztBQUNELFlBQUk2RSxRQUFRLEdBQUcvRSxPQUFPLENBQUNJLE1BQVIsQ0FBZSxHQUFmLEVBQW1CSCxVQUFuQixDQUFmO0FBQ0EsZUFBTyxDQUFDOEUsUUFBRCxFQUFXN0UsZUFBWCxDQUFQO0FBQ0g7O0FBRUQsVUFBTUcsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFkZ0Isd0JBZTBDLEtBQUt0QixLQWYvQztBQUFBLFVBZVQrRixFQWZTLGVBZVRBLEVBZlM7QUFBQSxVQWVMdkUsS0FmSyxlQWVMQSxLQWZLO0FBQUEsVUFlRUMsTUFmRixlQWVFQSxNQWZGO0FBQUEsVUFlVXVFLE1BZlYsZUFlVUEsTUFmVjtBQUFBLFVBZWtCekUsS0FmbEIsZUFla0JBLEtBZmxCO0FBQUEsVUFleUIwRSxLQWZ6QixlQWV5QkEsS0FmekI7QUFBQSxVQWVnQ3JCLE1BZmhDLGVBZWdDQSxNQWZoQztBQWdCaEIsVUFBSWhELE9BQU8sR0FBRyxFQUFkLENBaEJnQixDQWlCaEI7QUFFQTs7QUFDQSxVQUFJc0UsRUFBRSxHQUFHLElBQUl0RyxFQUFFLENBQUN1RyxPQUFQLENBQWU7QUFBQ3BFLGdCQUFRLEVBQUU7QUFBQ3FFLG1CQUFTLEVBQUVoRixZQUFaO0FBQTBCSSxlQUFLLEVBQUVBLEtBQWpDO0FBQXdDQyxnQkFBTSxFQUFFQTtBQUFoRDtBQUFYLE9BQWYsQ0FBVDtBQUNBLFVBQUlXLE9BQU8sR0FBQzhELEVBQUUsQ0FBQzlELE9BQWYsQ0FyQmdCLENBdUJoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJaUUsS0FBSyxHQUFHSCxFQUFFLENBQUN6RCxLQUFILEdBQVc2RCxJQUFYLENBQWdCTixNQUFoQixDQUFaO0FBRUEsVUFBSTFGLFNBQVMsR0FBQyxFQUFkO0FBQ0EsVUFBSWlHLEtBQUssR0FBRSxFQUFYO0FBQ0EsVUFBSXhDLE9BQU8sR0FBRyxRQUFkLENBbENnQixDQW1DaEI7QUFDQTs7QUFDQSxXQUFJLElBQUl2QixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNqQixLQUFLLENBQUNULE1BQXBCLEVBQTJCMEIsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixZQUFJZ0UsSUFBSSxHQUFHcEcsUUFBUSxDQUFDbUIsS0FBSyxDQUFDaUIsQ0FBRCxDQUFOLENBQW5COztBQUNBLFlBQUl5RCxLQUFLLENBQUN6RCxDQUFELENBQUwsS0FBVyxFQUFmLEVBQWtCO0FBQ2R1QixpQkFBTyxHQUFDa0MsS0FBSyxDQUFDekQsQ0FBRCxDQUFiO0FBQ1A7O0FBQ0csWUFBSWlFLFNBQVMsR0FBR1AsRUFBRSxDQUFDL0IsU0FBSCxDQUFhO0FBQUNDLGNBQUksRUFBRSxDQUFDb0MsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFQO0FBQWtCbkMsa0JBQVEsRUFBQyxHQUEzQjtBQUFnQzFCLGNBQUksRUFBRW9CO0FBQXRDLFNBQWIsRUFBNkRTLGFBQTdELENBQTJFLENBQTNFLEVBQThFLElBQUk1RSxFQUFFLENBQUM2RSxVQUFQLENBQWtCK0IsSUFBSSxDQUFDLENBQUQsQ0FBdEIsQ0FBOUUsQ0FBaEI7O0FBQ0EsWUFBSVAsS0FBSyxDQUFDekQsQ0FBRCxDQUFMLEtBQVcsRUFBZixFQUFrQjtBQUNkLGNBQUlrRSxRQUFRLEdBQUcsSUFBSTdHLCtDQUFHLENBQUNDLElBQUosQ0FBUzZHLFFBQWIsQ0FBc0JWLEtBQUssQ0FBQ3pELENBQUQsQ0FBM0IsRUFBZ0MsT0FBaEMsQ0FBZjtBQUNBLGNBQUlvRSxZQUFZLEdBQUcsSUFBSS9HLCtDQUFHLENBQUNDLElBQUosQ0FBUytHLFlBQWIsQ0FBMEIsQ0FBQ0gsUUFBRCxDQUExQixDQUFuQjtBQUNBRCxtQkFBUyxDQUFDSyxXQUFWLENBQXNCLENBQXRCLEVBQXlCRixZQUF6QjtBQUNQLFNBVjhCLENBVzNCO0FBQ0E7QUFDQTs7O0FBQ0F0RyxpQkFBUyxDQUFDWSxJQUFWLENBQWV1RixTQUFmO0FBQ0gsT0FwRGUsQ0FzRGhCOzs7QUFDQSxVQUFJL0MsTUFBTSxHQUFHd0MsRUFBRSxDQUFDdkMsS0FBSCxHQUFXRyxPQUFYLENBQW1CLENBQW5CLEVBQXNCa0IsWUFBdEIsQ0FBbUMxRSxTQUFuQyxDQUFiOztBQUNBLFdBQUksSUFBSWtDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ2pCLEtBQUssQ0FBQ1QsTUFBcEIsRUFBMkIwQixDQUFDLEVBQTVCLEVBQStCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBK0QsYUFBSyxDQUFDckYsSUFBTixDQUFXZ0YsRUFBRSxDQUFDYSxTQUFILENBQWE7QUFBQ0MsY0FBSSxFQUFFMUcsU0FBUyxDQUFDa0MsQ0FBQyxHQUFDLENBQUgsQ0FBaEI7QUFBdUJ5RSxZQUFFLEVBQUUzRyxTQUFTLENBQUNrQyxDQUFELENBQXBDO0FBQXlDMEUsdUJBQWEsRUFBRSxDQUFDLENBQUQsQ0FBeEQ7QUFDcEJDLHNCQUFZLEVBQUUsQ0FBQyxDQUFEO0FBRE0sU0FBYixDQUFYO0FBRUgsT0E5RGUsQ0FnRWhCOzs7QUFDQSxVQUFJakMsU0FBUyxHQUFHLElBQUl0RixFQUFFLENBQUN1RixTQUFQLEdBQW1CQyxVQUFuQixDQUE4QixDQUFDMUIsTUFBRCxDQUE5QixFQUF3QzJCLE1BQXhDLENBQStDLENBQUMzQixNQUFELENBQS9DLEVBQXlEbEMsS0FBSyxHQUFDSSxPQUEvRCxDQUFoQixDQWpFZ0IsQ0FpRXdFOztBQUN4RnNFLFFBQUUsQ0FBQy9DLElBQUg7O0FBRUEsV0FBSSxJQUFJWCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNqQixLQUFLLENBQUNULE1BQU4sR0FBYSxDQUEzQixFQUE2QjBCLENBQUMsRUFBOUIsRUFBaUM7QUFDakM7QUFDQSxZQUFJNEUsTUFBTSxHQUFHbEMsU0FBUyxDQUFDeEIsTUFBVixDQUFpQixDQUFqQixFQUFvQjJELFNBQXBCLENBQThCN0UsQ0FBOUIsRUFBaUM4RSxVQUFqQyxDQUE0QyxDQUE1QyxFQUErQ3BILENBQTVEO0FBQ0EsWUFBSXFILE1BQU0sR0FBR3JDLFNBQVMsQ0FBQ3hCLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IyRCxTQUFwQixDQUE4QjdFLENBQUMsR0FBQyxDQUFoQyxFQUFtQzhFLFVBQW5DLENBQThDLENBQTlDLEVBQWlEcEgsQ0FBOUQ7QUFDQTJCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZc0YsTUFBWixFQUppQyxDQU1qQzs7QUFDQSxZQUFJSSxNQUFNLEdBQUd0QyxTQUFTLENBQUN4QixNQUFWLENBQWlCLENBQWpCLEVBQW9CMkQsU0FBcEIsQ0FBOEI3RSxDQUE5QixFQUFpQzhFLFVBQWpDLENBQTRDLENBQTVDLEVBQStDbkgsQ0FBNUQ7QUFDQSxZQUFJc0gsTUFBTSxHQUFHdkMsU0FBUyxDQUFDeEIsTUFBVixDQUFpQixDQUFqQixFQUFvQjJELFNBQXBCLENBQThCN0UsQ0FBQyxHQUFDLENBQWhDLEVBQW1DOEUsVUFBbkMsQ0FBOEMsQ0FBOUMsRUFBaURuSCxDQUE5RDtBQUNBMEIsZUFBTyxDQUFDQyxHQUFSLENBQVkwRixNQUFaLEVBVGlDLENBV2pDOztBQUNBLFlBQUlFLElBQUksR0FBR3JCLEtBQUssQ0FBQ3NCLE9BQWpCO0FBQ0EsWUFBSUMsSUFBSSxHQUFHdkIsS0FBSyxDQUFDbEcsQ0FBTixHQUFRa0csS0FBSyxDQUFDNUUsTUFBekI7QUFFQVcsZUFBTyxDQUFDeUYsU0FBUixHQUFvQjtBQUFwQixTQUNDQyxNQURELENBQ1FWLE1BQU0sR0FBQ00sSUFEZixFQUNxQkUsSUFBSSxHQUFDLEVBRDFCLEVBQzhCO0FBRDlCLFNBRUNHLE1BRkQsQ0FFUVIsTUFBTSxHQUFDRyxJQUZmLEVBRXFCRSxJQUFJLEdBQUMsRUFGMUIsRUFFOEI7QUFGOUIsU0FHQ0csTUFIRCxDQUdRUixNQUFNLEdBQUNHLElBSGYsRUFHcUJFLElBQUksR0FBQyxFQUgxQixFQUc4QjtBQUg5QixTQUlDRyxNQUpELENBSVFYLE1BQU0sR0FBQ00sSUFKZixFQUlxQkUsSUFBSSxHQUFDLEVBSjFCLEVBS0NJLFNBTEQsR0FLYTtBQUxiLFNBTUNDLElBTkQsQ0FNTTtBQUFFQSxjQUFJLEVBQUVyRCxNQUFNLENBQUNwQyxDQUFEO0FBQWQsU0FOTixFQWZpQyxDQXFCTDs7QUFDNUIwRCxVQUFFLENBQUMvQyxJQUFIO0FBQ0MsT0EzRmUsQ0E2RmhCOzs7QUFDQSxXQUFLbUMsSUFBTCxDQUFVNEMsTUFBVixDQUFpQjFDLFdBQWpCLENBQTZCcEUsWUFBN0I7QUFDSDs7OzZCQUdRO0FBQ0wsMEJBQU87QUFBSyxXQUFHLEVBQUMsUUFBVDtBQUFrQixhQUFLLEVBQUU7QUFDNUJxRSxnQkFBTSxFQUFFLE1BRG9CO0FBRTVCN0QsaUJBQU8sRUFBRSxDQUZtQjtBQUc1QjhELHNCQUFZLEVBQUUsQ0FIYztBQUk1QkMsaUJBQU8sRUFBRTtBQUptQjtBQUF6QixRQUFQO0FBT0g7Ozs7RUF0SGVDLCtDOztJQXlIZHVDLEc7Ozs7O0FBRUYsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFdBQUs1RyxLQUFMLEdBQVcsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsS0FBcEIsQ0FBWDtBQUNBLFdBQUt0QixLQUFMLEdBQWE7QUFDVG1JLFdBQUssRUFBRTtBQURFLEtBQWI7QUFHQSxXQUFLQyxRQUFMLEdBQWdCLE9BQUtBLFFBQUwsQ0FBY0MsSUFBZCxnQ0FBaEI7QUFOVTtBQU9iOzs7OzZCQUVRQyxRLEVBQVU7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7O2dDQUVXdkksSyxFQUFPO0FBQ2Y2QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLElBQXhCO0FBQ0EsV0FBS1AsS0FBTCxHQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsSyxDQUNQOzs7OzZCQUNhO0FBQ0wsMEJBQ0kscUZBQ29CLDJEQUFDLEtBQUQ7QUFDaEIsYUFBSyxFQUFFLEdBRFM7QUFFaEIsY0FBTSxFQUFFLEdBRlE7QUFHaEIsY0FBTSxFQUFFLEdBSFE7QUFJaEIsYUFBSyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBSlM7QUFLaEIsYUFBSyxFQUFFLENBQUMsUUFBRCxFQUFXLEVBQVgsRUFBZSxFQUFmLEVBQW1CLE1BQW5CLEVBQTJCLEVBQTNCLENBTFM7QUFNaEIsY0FBTSxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsTUFBbEI7QUFOUSxRQURwQixlQVNJLDJEQUFDLDBDQUFEO0FBQ0EsYUFBSyxFQUFFLEdBRFA7QUFFQSxjQUFNLEVBQUUsR0FGUjtBQUdBLGNBQU0sRUFBRSxHQUhSO0FBSUEsYUFBSyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBSlA7QUFLQSxhQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsRUFBWCxFQUFlLEVBQWYsRUFBbUIsTUFBbkIsRUFBMkIsRUFBM0IsQ0FMUDtBQU1BLGNBQU0sRUFBRSxDQUFDLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsTUFBbEIsQ0FBRCxFQUE0QixDQUFDLFFBQUQsQ0FBNUIsRUFBd0MsQ0FBQyxNQUFELENBQXhDLEVBQWtELENBQUMsT0FBRCxDQUFsRCxDQU5SO0FBT0EsbUJBQVcsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLElBQWxCLEVBQXdCLEtBQXhCLEVBQStCLE1BQS9CO0FBUGIsUUFUSixlQWtCSSwyREFBQyw4Q0FBRDtBQUNBLGFBQUssRUFBRSxHQURQO0FBRUEsY0FBTSxFQUFFLEdBRlI7QUFHQSxhQUFLLEVBQUUsSUFIUDtBQUlBLGtCQUFVLEVBQUUsQ0FBQyxDQUNUO0FBQUNvQixjQUFJLEVBQUUsUUFBUDtBQUFpQkUsY0FBSSxFQUFFLFFBQXZCO0FBQ0l0QixlQUFLLEVBQUMsQ0FBQyxLQUFELEVBQVEsRUFBUixFQUFZLElBQVosRUFBa0IsSUFBbEIsQ0FEVjtBQUVBcUQsZ0JBQU0sRUFBQyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE9BQWpCLEVBQTBCLE9BQTFCO0FBRlAsU0FEUyxFQUlUO0FBQUNqQyxjQUFJLEVBQUUsTUFBUDtBQUFlRSxjQUFJLEVBQUUsU0FBckI7QUFDQXRCLGVBQUssRUFBQyxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsSUFBZDtBQUROLFNBSlMsRUFNVDtBQUFDb0IsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxNQUF2QjtBQUNBdEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELElBQXpELEVBQStELElBQS9EO0FBRE4sU0FOUyxDQUFELEVBU1osQ0FDSTtBQUFDb0IsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxRQUF2QjtBQUNBdEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxJQUFmLEVBQXFCLElBQXJCO0FBRE4sU0FESixFQUdJO0FBQUNvQixjQUFJLEVBQUUsTUFBUDtBQUNBcEIsZUFBSyxFQUFDLENBQUMsQ0FBQyxLQUFELEVBQVEsSUFBUixDQUFELEVBQWdCLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBaEIsRUFBOEIsSUFBOUIsRUFBb0MsSUFBcEM7QUFETixTQUhKLEVBS0k7QUFBQ29CLGNBQUksRUFBRSxRQUFQO0FBQWlCRSxjQUFJLEVBQUUsTUFBdkI7QUFDQXRCLGVBQUssRUFBQyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsSUFBZixFQUFxQixJQUFyQixDQUROO0FBRUFxRCxnQkFBTSxFQUFDLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsT0FBMUI7QUFGUCxTQUxKLENBVFksRUFrQlosQ0FDSTtBQUFDakMsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxRQUF2QjtBQUNBdEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTBCLEtBQTFCLEVBQWlDLEtBQWpDLEVBQXdDLElBQXhDLEVBQThDLElBQTlDO0FBRE4sU0FESixFQUdJO0FBQUNvQixjQUFJLEVBQUUsTUFBUDtBQUFlRSxjQUFJLEVBQUUsU0FBckI7QUFDQXRCLGVBQUssRUFBQyxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsSUFBZDtBQUROLFNBSEosRUFLSTtBQUFDb0IsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxNQUF2QjtBQUNBdEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxJQUFmLEVBQXFCLElBQXJCO0FBRE4sU0FMSixDQWxCWSxDQUpaO0FBK0JBLHFCQUFhLEVBQUU7QUEvQmYsUUFsQkosZUFtREksMkRBQUMsMENBQUQ7QUFDQSxhQUFLLEVBQUM7QUFETixRQW5ESixlQXNESTtBQUFRLGVBQU8sRUFBRSxLQUFLa0g7QUFBdEIsb0JBdERKLGVBeUROLDJEQUFDLDRDQUFEO0FBQ0EsVUFBRSxFQUFDLG1CQURIO0FBRUEsMEJBQWtCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLENBRnBCO0FBR0EseUJBQWlCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBSG5CO0FBSUEsc0JBQWMsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixDQUpoQjtBQUtBLHlCQUFpQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixDQUxuQjtBQU1BLHdCQUFnQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixDQU5sQjtBQU9BLHFCQUFhLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxPQUFyQztBQVBmLFFBekRNLGVBa0VJLDJEQUFDLGtEQUFEO0FBQ0EsVUFBRSxFQUFFLEtBREo7QUFFQSxhQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsS0FBcEIsQ0FGUDtBQUdBLGNBQU0sRUFBRSxDQUFDLENBQUQsQ0FIUjtBQUlBLG1CQUFXLEVBQUUsQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixTQUF2QixFQUFrQyxVQUFsQztBQUpiLFFBbEVKLGVBd0VJLDJEQUFDLGtEQUFEO0FBQ0EsVUFBRSxFQUFFLEtBREo7QUFFQSxhQUFLLEVBQUUsQ0FBQyxJQUFELENBRlA7QUFHQSxjQUFNLEVBQUUsRUFIUjtBQUlBLG1CQUFXLEVBQUUsQ0FBQyxFQUFEO0FBSmIsUUF4RUosZUE4RUksMkRBQUMsbURBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtKO0FBRG5CLFNBRVEsS0FBS3BJLEtBRmIsRUE5RUosZUFrRkksMkRBQUMsMENBQUQ7QUFDQSxhQUFLLEVBQUMsOEJBRE47QUFFQSxhQUFLLEVBQUUsR0FGUDtBQUdBLGNBQU0sRUFBRSxHQUhSO0FBSUEsYUFBSyxFQUFFLEdBSlA7QUFLQSxlQUFPLEVBQUUsRUFMVDtBQU1BLFlBQUksRUFBRTtBQU5OLFFBbEZKLENBREo7QUE4Rkg7Ozs7RUFuSGEyRiwrQzs7QUFzSEh1QyxrRUFBZixFIiwiZmlsZSI6IjAyYzFhNGYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcblxyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCwgU3RhdmUsIE9yY2hlc3RyYXRpb24sIE1hc2tpbmcsIFBpYW5vcm9sbCwgUmFuZ2V9IGZyb20gJy4uL2xpYic7XHJcblxyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShNeU5vdGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICAgICAgdmFyIGFjY2lkZW50YWxfbGlzdD1bXVxyXG5cclxuICAgICAgICAgICAgLy9mb3IgKHZhciBpPTA7IGk8TXlOb3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSBNeU5vdGVzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vSWYgdGhlcmUgaXMganVzdCBvbmUgbm90ZSwgbWFrZSBpdCBhbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKXtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeT1bZW50cnldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vZ28gdGhyb3VnaCBlYWNoIG5vdGUgaW4gY2hvcmRcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IEFkZCBjb2xvciBpbmZvcm1hdGlvbiB0byBub3Rlc1xyXG4gICAgICAgICAgICAgICAgdmFyIGNob3JkX2FjY2lkZW50aWFscz1bXVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub3Rlcz1bXVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaz0wOyBrPGVudHJ5Lmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19rZXkgPSBlbnRyeVtrXVswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X29jdGF2ZSA9IGVudHJ5W2tdW2VudHJ5W2tdLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlba10ubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gZW50cnlba11bMV07IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBcIm5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIGEgc3RyaW5nIG9mIG5vdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X25vdGVzLnB1c2gobmV3X2tleS5jb25jYXQoXCIvXCIsbmV3X29jdGF2ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIGFuIGFycmF5IG9mIGFjY2lkZW50aWFsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNob3JkX2FjY2lkZW50aWFscy5wdXNoKG5ld19hY2NpZGVudGlhbClcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKG5ld19ub3RlcylcclxuICAgICAgICAgICAgICAgICBhY2NpZGVudGFsX2xpc3QucHVzaChjaG9yZF9hY2NpZGVudGlhbHMpXHJcbiAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbm90ZV9saXN0WzBdLCBhY2NpZGVudGFsX2xpc3RdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7bm90ZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7aGVpZ2h0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3N0YXZlX3NwYWNpbmd9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c3RhdmVfbGlzdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMTAwO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhoZWlnaHQpXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdmVfbGlzdC5sZW5ndGgpXHJcbiAgICBmb3IodmFyIGJhcj0wOyBiYXI8c3RhdmVfbGlzdC5sZW5ndGg7IGJhcisrKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgKGJhcj09PTApe1xyXG4gICAgICAgIC8vICAgICBwYWRkaW5nPTEwMFxyXG4gICAgICAgIC8vIH0gXHJcbiAgICAgICAgLy9DcmVhdGUgc3RhdmVzXHJcbiAgICAgICAgdmFyIHN0YXZlcz1bXVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RhdmVzLnB1c2gobmV3IFZGLlN0YXZlKHBhZGRpbmcrYmFyKih3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aCksIHN0YXZlX3NwYWNpbmcqKGkrMSksIHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgaWYgKGJhcj09PTApe1xyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLmFkZENsZWYoc3RhdmVfbGlzdFtiYXJdW2ldLmNsZWYpXHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uc2V0VGV4dChzdGF2ZV9saXN0W2Jhcl1baV0ubmFtZSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF94OiAtNjAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdmVzW2ldLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZXNbMF0sIHN0YXZlc1tzdGF2ZXMubGVuZ3RoLTFdKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIGlmKGJhcj09PTApe1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgIHZhciB2b2ljZXM9W11cclxuICAgICAgICBcclxuICAgICAgICAvL0dvIHRocm91Z2ggYWxsIGJhcnNcclxuICAgICAgICBmb3IodmFyIGsgPSAwOyBrPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKFtdKVxyXG4gICAgICAgICAgICB2b2ljZXMucHVzaChuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vR28gdGhyb3VnaCBhbGwgc3RhdmVzXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDbGVmID0gc3RhdmVfbGlzdFtiYXJdW2tdLmNsZWZcclxuICAgICAgICAgICAgICAgIHZhciBub3RlX3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ldKVxyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZfcGFydHMgPSBbW1tdXSxbW11dXVxyXG4gICAgICAgICAgICAgICAgdmFyIGFkZE5vdGU9bmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogbmV3Q2xlZiwga2V5czogbm90ZV9wYXJ0c1swXSwgZHVyYXRpb246IFwicVwifSlcclxuICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdGhlIHByZXZpb3VzIHBhcnQgZm9yIGNoZWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaT4wKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ktMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7ajxub3RlX3BhcnRzWzFdWzBdLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlIG5vdGUgaXMgdGhlIHNhbWUgYXMgcHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZV9ub3RlID0gKG5vdGVfcGFydHNbMF1bMF09PT1wcmV2X3BhcnRzWzBdWzBdJiZub3RlX3BhcnRzWzBdWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXVswXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobm90ZV9wYXJ0c1sxXVswXVtqXSE9PSduJyAmJiAhc2FtZV9ub3RlKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLmFkZEFjY2lkZW50YWwoaiwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9wYXJ0c1sxXVswXVtqXSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdG8gYWRkIGNvbG9ycyB0byBub3RlcyBzb21laG93Li4uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdGVfY29sb3IgPSAnYmxhY2snXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcl9saXN0PXN0YXZlX2xpc3RbYmFyXVtrXS5jb2xvcnNcclxuICAgICAgICAgICAgICAgICAgICAvL0lmIGNvbG9yIHByb3BlcnR5IGlzIGRlZmluZWQsIGRvIHNvbWV0aGluZyB3aXRoIGNvbG9ycy4uLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29sb3JfbGlzdCAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVfY29sb3I9Y29sb3JfbGlzdFtpXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRTdHlsZSh7c3Ryb2tlU3R5bGU6ICdyZ2JhKDAsMCwwLDApJywgZmlsbFN0eWxlOiBub3RlX2NvbG9yfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm90ZV9saXN0W2tdLnB1c2goYWRkTm90ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2b2ljZXNba10uYWRkVGlja2FibGVzKG5vdGVfbGlzdFtrXSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdF93aWR0aCA9IHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoLTMwXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIGZvcm1hdF93aWR0aD1mb3JtYXRfd2lkdGgtMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXZlc1trXS5zZXROb3RlU3RhcnRYKGsqd2lkdGgpKVxyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc1trXV0pLmZvcm1hdChbdm9pY2VzW2tdXSwgZm9ybWF0X3dpZHRoKTtcclxuICAgICAgICAgICAgLy92b2ljZXNba10uZHJhdyhjb250ZXh0LCBzdGF2ZXNba10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyh2b2ljZXMpLmZvcm1hdCh2b2ljZXMsIDUwKTtcclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuZm9ybWF0KHZvaWNlcywgMTAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlci5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPVwib3V0ZXJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgTGluZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUoTXlOb3Rlcykge1xyXG4gICAgICAgICAgICB2YXIgbmV3X2tleSA9IE15Tm90ZXNbMF07XHJcbiAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlID0gTXlOb3Rlc1tNeU5vdGVzLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgaWYgKE15Tm90ZXMubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IE15Tm90ZXNbMV07IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3X25vdGUsIG5ld19hY2NpZGVudGlhbF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtpZCwgd2lkdGgsIGhlaWdodCwgc3RhZmZZLCBub3RlcywgY2xlZnMsIGNvbG9yc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMzA7XHJcbiAgICAgICAgLy92YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIHZmID0gbmV3IFZGLkZhY3Rvcnkoe3JlbmRlcmVyOiB7ZWxlbWVudElkOiBzdmdDb250YWluZXIsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9fSk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQ9dmYuY29udGV4dFxyXG5cclxuICAgICAgICAvL3ZhciBzeXN0ZW0gPSB2Zi5TeXN0ZW0ocmVuZGVyZXIuZ2V0Q29udGV4dCgpKS8vLnNldENvbnRleHQocmVuZGVyZXIuZ2V0Q29udGV4dCgpKVxyXG4gICAgICAgIC8vbmV3IFZGLlN0YXZlKCkuc2V0V2lkdGgoKVxyXG4gICAgICAgIC8vdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgLy92YXIgc3RhdmUgPSBuZXcgVkYuU3RhdmUocGFkZGluZywgMzAsIHdpZHRoKVxyXG4gICAgICAgIC8vdmFyIGZpcnN0Q2xlZiA9ICd0cmVibGUnXHJcbiAgICAgICAgLy9zdGF2ZS5hZGRDbGVmKGZpcnN0Q2xlZilcclxuICAgICAgICAvL3N0YXZlLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIHZhciBzdGF2ZSA9IHZmLlN0YXZlKCkuc2V0WShzdGFmZlkpXHJcblxyXG4gICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICB2YXIgbGluZXMgPVtdXHJcbiAgICAgICAgdmFyIG5ld0NsZWYgPSAndHJlYmxlJ1xyXG4gICAgICAgIC8vdmFyIHZvaWNlPVtdXHJcbiAgICAgICAgLy92YXIgdm9pY2UgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8bm90ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHZhciBub3RlID0gc2VwYXJhdGUobm90ZXNbaV0pXHJcbiAgICAgICAgICAgIGlmIChjbGVmc1tpXSE9PScnKXtcclxuICAgICAgICAgICAgICAgIG5ld0NsZWY9Y2xlZnNbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzdGF2ZU5vdGUgPSB2Zi5TdGF2ZU5vdGUoe2tleXM6IFtub3RlWzBdXSwgZHVyYXRpb246JzQnLCBjbGVmOiBuZXdDbGVmfSkuYWRkQWNjaWRlbnRhbCgwLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlWzFdKSlcclxuICAgICAgICAgICAgaWYgKGNsZWZzW2ldIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsZWZOb3RlID0gbmV3IFZleC5GbG93LkNsZWZOb3RlKGNsZWZzW2ldLCAnc21hbGwnKTtcclxuICAgICAgICAgICAgICAgIHZhciBub3RlU3ViR3JvdXAgPSBuZXcgVmV4LkZsb3cuTm90ZVN1Ykdyb3VwKFtjbGVmTm90ZV0pO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVOb3RlLmFkZE1vZGlmaWVyKDAsIG5vdGVTdWJHcm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3ZhciBuZXdfbm90ZSA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IG5ld0NsZWYsIGtleXM6IFtub3RlWzBdXSwgZHVyYXRpb246IFwicVwifSlcclxuICAgICAgICAgICAgLy9uZXdfbm90ZS5hZGRBY2NpZGVudGFsKDAsIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVbMV0pKVxyXG4gICAgICAgICAgICAvL25vdGVfbGlzdC5wdXNoKG5ld19ub3RlKVxyXG4gICAgICAgICAgICBub3RlX2xpc3QucHVzaChzdGF2ZU5vdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdm9pY2UuYWRkVGlja2FibGVzKG5vdGVfbGlzdCk7XHJcbiAgICAgICAgdmFyIHZvaWNlcyA9IHZmLlZvaWNlKCkuc2V0TW9kZSgyKS5hZGRUaWNrYWJsZXMobm90ZV9saXN0KVxyXG4gICAgICAgIGZvcih2YXIgaT0xO2k8bm90ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIC8vdmFyIGxpbmUgPSBuZXcgVkYuU3RhdmVMaW5lKHtmcm9tOiBub3RlX2xpc3RbaS0xXSwgdG86IG5vdGVfbGlzdFtpXSwgZmlyc3RfaW5kaWNlczogWzBdLFxyXG4gICAgICAgICAgICAvLyAgICBsYXN0X2luZGljZXM6IFswXSx9KVxyXG4gICAgICAgICAgICAvL2xpbmUuc2V0Tm90ZXMoe2ZpcnN0X25vdGU6IG5vdGVzW2ktMV0sIGxhc3Rfbm90ZTogbm90ZXNbaV19KVxyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKHZmLlN0YXZlTGluZSh7ZnJvbTogbm90ZV9saXN0W2ktMV0sIHRvOiBub3RlX2xpc3RbaV0sIGZpcnN0X2luZGljZXM6IFswXSxcclxuICAgICAgICAgICAgICAgIGxhc3RfaW5kaWNlczogWzBdLH0pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlXSkuZm9ybWF0KFt2b2ljZV0sIHdpZHRoLXBhZGRpbmcpO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VzXSkuZm9ybWF0KFt2b2ljZXNdLCB3aWR0aC1wYWRkaW5nKTsvLy5mb3JtYXRUb1N0YXZlKFt2b2ljZXNdLCBzdGF2ZSk7XHJcbiAgICAgICAgdmYuZHJhdygpXHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8bm90ZXMubGVuZ3RoLTE7aSsrKXtcclxuICAgICAgICAvL0Zvcm1hdHRlciBub3RlaGVhZCB4IGNvb3JkaW5hdGVcclxuICAgICAgICB2YXIgeF9jb28xID0gZm9ybWF0dGVyLnZvaWNlc1swXS50aWNrYWJsZXNbaV0ubm90ZV9oZWFkc1swXS54XHJcbiAgICAgICAgdmFyIHhfY29vMiA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2krMV0ubm90ZV9oZWFkc1swXS54XHJcbiAgICAgICAgY29uc29sZS5sb2coeF9jb28xKVxyXG5cclxuICAgICAgICAvL0Zvcm1hdHRlciBub3RlaGVhZCB5IGNvb3JkaW5hdGVcclxuICAgICAgICB2YXIgeV9jb28xID0gZm9ybWF0dGVyLnZvaWNlc1swXS50aWNrYWJsZXNbaV0ubm90ZV9oZWFkc1swXS55XHJcbiAgICAgICAgdmFyIHlfY29vMiA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2krMV0ubm90ZV9oZWFkc1swXS55XHJcbiAgICAgICAgY29uc29sZS5sb2coeV9jb28xKVxyXG5cclxuICAgICAgICAvL1N0YXZlIHBhZGRpbmdcclxuICAgICAgICB2YXIgc3RfeCA9IHN0YXZlLnN0YXJ0X3hcclxuICAgICAgICB2YXIgc3RfeSA9IHN0YXZlLnkrc3RhdmUuaGVpZ2h0XHJcblxyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCkgLy8gc3RhcnQgcmVjb3JkaW5nIG91ciBwZW4ncyBtb3Zlc1xyXG4gICAgICAgIC5tb3ZlVG8oeF9jb28xK3N0X3gsIHN0X3krMjApIC8vIHBpY2t1cCB0aGUgcGVuIGFuZCBzZXQgaXQgZG93biBhdCBYPTAsIFk9MC4gTk9URTogWT0wIGlzIHRoZSB0b3Agb2YgdGhlIHNjcmVlbi5cclxuICAgICAgICAubGluZVRvKHhfY29vMitzdF94LCBzdF95KzIwKSAvLyBub3cgYWRkIGEgbGluZSB0byB0aGUgcmlnaHQgZnJvbSAoMCwgMCkgdG8gKDUwLCAwKSB0byBvdXIgcGF0aFxyXG4gICAgICAgIC5saW5lVG8oeF9jb28yK3N0X3gsIHN0X3krNDApIC8vIGFkZCBhIGxpbmUgdG8gdGhlIGxlZnQgYW5kIGRvd24gZnJvbSAoNTAsIDApIHRvICgyNSwgNTApXHJcbiAgICAgICAgLmxpbmVUbyh4X2NvbzErc3RfeCwgc3RfeSs0MClcclxuICAgICAgICAuY2xvc2VQYXRoKCkgLy8gbm93IGFkZCBhIGxpbmUgYmFjayB0byB3aGVyZXZlciB0aGUgcGF0aCBzdGFydGVkLCBpbiB0aGlzIGNhc2UgKDAsIDApLCBjbG9zaW5nIHRoZSB0cmlhbmdsZS5cclxuICAgICAgICAuZmlsbCh7IGZpbGw6IGNvbG9yc1tpXSB9KTsgLy8gbm93IGZpbGwgb3VyIHRyaWFuZ2xlIGluIHllbGxvdy5cclxuICAgICAgICB2Zi5kcmF3KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdm9pY2UuZHJhdyhjb250ZXh0LCBzdGF2ZSk7XHJcbiAgICAgICAgdGhpcy5yZWZzLm91dGVyQS5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyQVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vdGVzPVtcImM0XCIsIFwiZiM3XCIsIFwiZTFcIiwgXCJnYjNcIl1cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhwcm9wcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9WydjNCddXHJcbiAgICAgIH1cclxuLy9uZXcgVkYuU3RhdmVOb3RlKCkuc2V0XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZXNcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAgICAgICAgIHN0YWZmWT17MTAwfVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9e1snYzQnLCAnYjYnLCAnZDQnLCAnYzMnLCAnYTMnXX1cclxuICAgICAgICAgICAgICAgIGNsZWZzPXtbJ3RyZWJsZScsICcnLCAnJywgJ2Jhc3MnLCAnJ119XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM9e1sneWVsbG93JywgJ3JlZCcsICdncmF5J119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJhbmdlXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NjAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICBzdGFmZlk9ezEwMH1cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbJ2M0JywgJ2I3JywgJ2Q0JywgJ2M1JywgJ2E1J119XHJcbiAgICAgICAgICAgICAgICBjbGVmcz17Wyd0cmVibGUnLCAnJywgJycsICdiYXNzJywgJyddfVxyXG4gICAgICAgICAgICAgICAgY29sb3JzPXtbWyd5ZWxsb3cnLCAncmVkJywgJ2dyYXknXSwgWyd5ZWxsb3cnXSwgWydncmF5J10sIFsnYmxhY2snXV19XHJcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9ucz17WydxdWlldCcsICdsb3VkJywgJ25vJywgJ3llcycsICd3aGF0J119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFBpYW5vcm9sbFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezgwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgc2NhbGU9ezAuNzV9XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9saXN0PXtbW1xyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ3Zpb2xpbicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjNCcsIFtdLCAnZjQnLCAnYTQnXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6WydibHVlJywgJ2JsdWUnLCAnZ3JlZW4nLCAnZ3JlZW4nXX0sIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAnYmFzcycsIG5hbWU6ICdiYXNzb29uJyxcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjMycsICdmMycsICdhMyddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICdqZWJ1JyxcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2MjNCcsICdnYjQnLCAnZjQnLCAnYTQnXX0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ3Zpb2xpbicsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ2Jhc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOltbJ2MjMycsICdkMyddLCBbJ2MjMycsICdkMyddLCdmMycsICdhMyddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICdqZWJ1JyxcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjNCcsICdnYjQnLCAnZjQnLCAnYTQnXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6WydibHVlJywgJ2JsdWUnLCAnZ3JlZW4nLCAnZ3JlZW4nXX0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ3Zpb2xpbicsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCcsJ2MjNCcsICdnYjQnLCAnZjQnLCAnYTQnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICdiYXNzJywgbmFtZTogJ2Jhc3Nvb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyMzJywgJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHN0YXZlX3NwYWNpbmc9ezcwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTdGF2ZVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9J2M0L2hbc3RlbT0gXCJkb3duXCIsIGlkPVwibTJhXCIsIGFydGljdWxhdGlvbnM9XCJzdGFjY2F0by5iZWxvdyx0ZW51dG9cIiwgc3R5bGU9XCJmaWxsU3R5bGUuYmx1ZVwiXSwgZTQnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICBDbGljayBtZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPE1hc2tpbmdcclxuICAgICAgaWQ9J21hc2tpbmdfbm90ZXN0YWZmJ1xyXG4gICAgICBtYXNraW5nX25vdGV2YWx1ZXM9e1s1MCwgNjcsIDgwLCA5NCwgMTAwXX1cclxuICAgICAgbWFza2luZ19ub3Rlc2l6ZXM9e1s4MCwgNzAsIDcwLCA3MCwgNzBdfVxyXG4gICAgICBtYXNraW5nX2NvbG9ycz17WydyZWQnLCAncmVkJywgJ3JlZCcsICdyZWQnLCAncmVkJ119XHJcbiAgICAgIHRhcmdldF9ub3RldmFsdWVzPXtbNjAsIDY0LCA2NywgNzIsIDc5XX1cclxuICAgICAgdGFyZ2V0X25vdGVzaXplcz17WzQwLCA0MCwgNDAsIDQwLCA0MF19XHJcbiAgICAgIHRhcmdldF9jb2xvcnM9e1snZ3JlZW4nLCAnZ3JlZW4nLCAnZ3JlZW4nLCAnZ3JlZW4nLCAnZ3JlZW4nXX1cclxuICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxPcmNoZXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17J2lkMSd9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzRcIiwgXCJmIzdcIiwgXCJlMVwiLCBcImdiM1wiXX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD17WzNdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1sndmlvbGluJywgJ2NsYXJpbmV0JywgJ2Jhc3Nvb24nLCAndHJvbWJvbmUnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8T3JjaGVzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgaWQ9eydpZDInfVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9e1tcImMzXCJdfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtbXX1cclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRzPXtbJyddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTY29yZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTdGF2ZVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9JyhjKzQgZTQgZzQpL3dbY2xlZj1cImJhc3NcIl0nXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XHJcbiAgICAgICAgICAgICAgICBzY2FsZT17MC41fVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZz17MTB9XHJcbiAgICAgICAgICAgICAgICBjbGVmPXsnYmFzcyd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
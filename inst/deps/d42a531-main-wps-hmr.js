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
      var svgContainer = document.createElement('div');
      var notes = this.props.notes;
      var width = 300;
      var height = 200;
      var padding = 50;
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(width + padding, height);
      var context = renderer.getContext();
      var stave = new VF.Stave(padding, 30, width);
      stave.setText('bar: 1', VF.Modifier.Position.LEFT, {
        shift_y: -40
      }); //const text = new VF.StaveText()//, VF.Modifier.Position.ABOVE, { shift_x: 0, shift_y: 0 });

      stave.setContext(context).draw();
      var voice = new VF.Voice({
        num_beats: 4,
        beat_value: 4
      }).setMode(2);
      var voice2 = new VF.Voice({
        num_beats: 4,
        beat_value: 4
      }).setMode(2);
      var note_list = [];
      var stave_lines = [];

      for (var bar = 0; bar < notes.length; bar++) {
        var addNote = new VF.StaveNote({
          clef: 'treble',
          keys: [notes[bar]],
          duration: "q"
        });
        addNote.setStyle({
          strokeStyle: 'rgba(0,0,0,0)',
          fillStyle: 'green'
        });
        note_list.push(addNote);
        console.log(addNote);

        if (bar > 0) {
          var first = {
            first_note: note_list[bar],
            first_indices: [0]
          };
          var second = {
            first_note: note_list[bar - 1],
            first_indices: [0]
          }; //    last_note: Note,
          //    first_indices: [n1, n2, n3],
          //    last_indices: [n1, n2, n3]
          //  }

          var staveline = new VF.StaveLine({
            first_note: note_list[bar],
            last_note: note_list[bar - 1],
            first_indices: 0,
            last_indices: 0
          });
          staveline.render_options.line_width = 3;
          staveline.render_options.color = 'green';
          staveline.render_options.padding_left = -4;
          staveline.render_options.padding_right = -4; //addNote.addModifier(0, new VF.Modifier(staveline))

          stave_lines.push(staveline);
        }
      } //note_list[3].stave.modifiers[0].rendered = false


      console.log(note_list[3].setLedgerLineStyle({
        strokeStyle: 'none'
      }));
      voice.addTickables(note_list);
      var formatter = new VF.Formatter().joinVoices([voice]).format([voice], width - 50);
      var formatter2 = new VF.Formatter().joinVoices([voice2]).format([voice2], width - 50); //voices[k].draw(context, staves[k]);

      voice.draw(context, stave);

      for (var k = 0; k < stave_lines.length; k++) {
        stave_lines[k].setContext(context);
        stave_lines[k].draw();
      } //voice2.draw(context, stave);


      var sl = [];

      for (var j = 0; j < voice.tickables.length; j++) {
        if (j > 0) {
          //var first =   {first_note: note_list[j], first_indices: [0]}
          //var second =   {first_note: note_list[j-1], first_indices: [0]}
          //    last_note: Note,
          //    first_indices: [n1, n2, n3],
          //    last_indices: [n1, n2, n3]
          //  }
          var sline = new VF.StaveLine({
            first_note: voice.tickables[j],
            last_note: voice.tickables[j - 1],
            first_indices: 0,
            last_indices: 0
          });
          sl.push(sline);
        }
      } //sl.draw(context, stave)


      this.refs.outer8.appendChild(svgContainer);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: "outer8",
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Pianoinput"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        children: "testing"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Edit"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Edit"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Test, {
        notes: ['c/5', 'c/5', 'd/6', 'd/6']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lines, {
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
        width: 2000,
        height: 500,
        scale: 1,
        stave_list: [[{
          clef: 'treble',
          name: 'violin',
          notes: [['c#4', 'g4'], [], 'f4', 'a4'],
          colors: ['blue', 'blue', 'green', 'green'],
          highlights: ['red', 'red', 'magenta', 'yellow']
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
          notes: ['c#4', 'gb4', 'gb4', 'f4', 'a4'],
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
        masking_colors: ['rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)'],
        target_notevalues: [60, 64, 67, 72, 79],
        target_notesizes: [40, 40, 40, 40, 40],
        target_colors: ['green', 'green', 'green', 'green', 'green']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        id: 'id1',
        notes: ["c4", "c#4", "f#7", "e1", "gb3"],
        target: [3],
        instruments: ['violin', 'flute', 'clarinet', 'bassoon', 'trombone'],
        highlights: ['', 'green']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzdGF2ZSIsIlN0YXZlIiwic2V0VGV4dCIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJMRUZUIiwic2hpZnRfeSIsInNldENvbnRleHQiLCJkcmF3Iiwidm9pY2UiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwidm9pY2UyIiwibm90ZV9saXN0Iiwic3RhdmVfbGluZXMiLCJiYXIiLCJsZW5ndGgiLCJhZGROb3RlIiwiU3RhdmVOb3RlIiwiY2xlZiIsImtleXMiLCJkdXJhdGlvbiIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImZpcnN0IiwiZmlyc3Rfbm90ZSIsImZpcnN0X2luZGljZXMiLCJzZWNvbmQiLCJzdGF2ZWxpbmUiLCJTdGF2ZUxpbmUiLCJsYXN0X25vdGUiLCJsYXN0X2luZGljZXMiLCJyZW5kZXJfb3B0aW9ucyIsImxpbmVfd2lkdGgiLCJjb2xvciIsInBhZGRpbmdfbGVmdCIsInBhZGRpbmdfcmlnaHQiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwiZm9ybWF0dGVyMiIsImsiLCJzbCIsImoiLCJ0aWNrYWJsZXMiLCJzbGluZSIsInJlZnMiLCJvdXRlcjgiLCJhcHBlbmRDaGlsZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJMaW5lcyIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwibmV3X25vdGUiLCJjb25jYXQiLCJpZCIsInN0YWZmWSIsImNsZWZzIiwiY29sb3JzIiwidmYiLCJGYWN0b3J5IiwiZWxlbWVudElkIiwic2V0WSIsImxpbmVzIiwibmV3Q2xlZiIsImkiLCJub3RlIiwic3RhdmVOb3RlIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJjbGVmTm90ZSIsIkNsZWZOb3RlIiwibm90ZVN1Ykdyb3VwIiwiTm90ZVN1Ykdyb3VwIiwiYWRkTW9kaWZpZXIiLCJ2b2ljZXMiLCJmcm9tIiwidG8iLCJ4X2NvbzEiLCJub3RlX2hlYWRzIiwieF9jb28yIiwieV9jb28xIiwieV9jb28yIiwic3RfeCIsInN0YXJ0X3giLCJzdF95IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsIm91dGVyQSIsIkFwcCIsInZhbHVlIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsIm5hbWUiLCJoaWdobGlnaHRzIiwiaGFuZGxlQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQywrQ0FBRyxDQUFDQyxJQUFmOztJQUNNQyxJOzs7OztBQUVGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsT0FBQyxFQUFFLENBRE07QUFFVEMsT0FBQyxFQUFFO0FBRk0sS0FBYjtBQUhlO0FBUWxCOzs7O3dDQUVtQjtBQUVoQixVQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUZnQixV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QyxFQUFEO0FBSmIsUUFwRkosZUEwRkksMkRBQUMsbURBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtOO0FBRG5CLFNBRVEsS0FBSzlILEtBRmIsRUExRkosZUE4RkksMkRBQUMsMENBQUQ7QUFDQSxhQUFLLEVBQUMsOEJBRE47QUFFQSxhQUFLLEVBQUUsR0FGUDtBQUdBLGNBQU0sRUFBRSxHQUhSO0FBSUEsYUFBSyxFQUFFLEdBSlA7QUFLQSxlQUFPLEVBQUUsRUFMVDtBQU1BLFlBQUksRUFBRTtBQU5OLFFBOUZKLENBREo7QUEwR0g7Ozs7RUEvSGE4RSwrQzs7QUFrSUg4QyxrRUFBZixFIiwiZmlsZSI6ImQ0MmE1MzEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50LCBTdGF2ZSwgT3JjaGVzdHJhdGlvbiwgTWFza2luZywgUGlhbm9yb2xsLCBSYW5nZSwgRWRpdCwgUGlhbm9pbnB1dH0gZnJvbSAnLi4vbGliJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtub3Rlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciB3aWR0aCA9MzAwXHJcbiAgICAgICAgdmFyIGhlaWdodCA9MjAwXHJcbiAgICAgICAgdmFyIHBhZGRpbmcgPSA1MDtcclxuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgrcGFkZGluZywgaGVpZ2h0KTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXZlID0gbmV3IFZGLlN0YXZlKHBhZGRpbmcsIDMwLCB3aWR0aClcclxuICAgICAgICBzdGF2ZS5zZXRUZXh0KCdiYXI6IDEnLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5MRUZULCB7IHNoaWZ0X3k6IC00MCB9KTtcclxuICAgICAgICAvL2NvbnN0IHRleHQgPSBuZXcgVkYuU3RhdmVUZXh0KCkvLywgVkYuTW9kaWZpZXIuUG9zaXRpb24uQUJPVkUsIHsgc2hpZnRfeDogMCwgc2hpZnRfeTogMCB9KTtcclxuICAgICAgICBzdGF2ZS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKVxyXG5cclxuICAgICAgICB2YXIgdm9pY2UgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpXHJcbiAgICAgICAgdmFyIHZvaWNlMiA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiA0LCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMilcclxuXHJcbiAgICAgICAgdmFyIG5vdGVfbGlzdCA9IFtdXHJcbiAgICAgICAgdmFyIHN0YXZlX2xpbmVzID0gW11cclxuICAgIGZvcih2YXIgYmFyPTA7IGJhcjxub3Rlcy5sZW5ndGg7IGJhcisrKXtcclxuICAgICAgICB2YXIgYWRkTm90ZT1uZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiAndHJlYmxlJywga2V5czogW25vdGVzW2Jhcl1dLCBkdXJhdGlvbjogXCJxXCJ9KVxyXG4gICAgICAgIGFkZE5vdGUuc2V0U3R5bGUoe3N0cm9rZVN0eWxlOiAncmdiYSgwLDAsMCwwKScsIGZpbGxTdHlsZTogJ2dyZWVuJ30pXHJcbiAgICAgICAgbm90ZV9saXN0LnB1c2goYWRkTm90ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhhZGROb3RlKVxyXG4gICAgICAgIGlmIChiYXIgPiAwKXtcclxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gICB7Zmlyc3Rfbm90ZTogbm90ZV9saXN0W2Jhcl0sIGZpcnN0X2luZGljZXM6IFswXX1cclxuICAgICAgICAgICAgdmFyIHNlY29uZCA9ICAge2ZpcnN0X25vdGU6IG5vdGVfbGlzdFtiYXItMV0sIGZpcnN0X2luZGljZXM6IFswXX1cclxuICAgICAgICAgICAgICAgIC8vICAgIGxhc3Rfbm90ZTogTm90ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgIGZpcnN0X2luZGljZXM6IFtuMSwgbjIsIG4zXSxcclxuICAgICAgICAgICAgICAgIC8vICAgIGxhc3RfaW5kaWNlczogW24xLCBuMiwgbjNdXHJcbiAgICAgICAgICAgICAgICAvLyAgfVxyXG4gICAgICAgICAgICB2YXIgc3RhdmVsaW5lID0gbmV3IFZGLlN0YXZlTGluZSh7Zmlyc3Rfbm90ZTogbm90ZV9saXN0W2Jhcl0sIGxhc3Rfbm90ZTogbm90ZV9saXN0W2Jhci0xXSwgZmlyc3RfaW5kaWNlczogMCwgbGFzdF9pbmRpY2VzOjB9KVxyXG4gICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMubGluZV93aWR0aCA9IDNcclxuICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLmNvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19sZWZ0ID0gLTRcclxuICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfcmlnaHQgPSAtNFxyXG4gICAgICAgICAgICAvL2FkZE5vdGUuYWRkTW9kaWZpZXIoMCwgbmV3IFZGLk1vZGlmaWVyKHN0YXZlbGluZSkpXHJcblxyXG4gICAgICAgICAgICBzdGF2ZV9saW5lcy5wdXNoKHN0YXZlbGluZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL25vdGVfbGlzdFszXS5zdGF2ZS5tb2RpZmllcnNbMF0ucmVuZGVyZWQgPSBmYWxzZVxyXG4gICAgY29uc29sZS5sb2cobm90ZV9saXN0WzNdLnNldExlZGdlckxpbmVTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pKVxyXG4gICAgdm9pY2UuYWRkVGlja2FibGVzKG5vdGVfbGlzdClcclxuICAgICAgICBcclxuXHJcbiAgICBcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlXSkuZm9ybWF0KFt2b2ljZV0sIHdpZHRoLTUwKTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVyMiA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZTJdKS5mb3JtYXQoW3ZvaWNlMl0sIHdpZHRoLTUwKTtcclxuICAgICAgICAgICAgLy92b2ljZXNba10uZHJhdyhjb250ZXh0LCBzdGF2ZXNba10pO1xyXG4gICAgXHJcbiBcclxuICAgICAgICB2b2ljZS5kcmF3KGNvbnRleHQsIHN0YXZlKTtcclxuICAgICAgICBmb3IgKHZhciBrPTA7IGs8c3RhdmVfbGluZXMubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBzdGF2ZV9saW5lc1trXS5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgICAgICAgICAgIHN0YXZlX2xpbmVzW2tdLmRyYXcoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZvaWNlMi5kcmF3KGNvbnRleHQsIHN0YXZlKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICB2YXIgc2w9W11cclxuICAgICAgICBmb3IodmFyIGo9MDsgajx2b2ljZS50aWNrYWJsZXMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApe1xyXG4gICAgICAgICAgICAgICAgLy92YXIgZmlyc3QgPSAgIHtmaXJzdF9ub3RlOiBub3RlX2xpc3Rbal0sIGZpcnN0X2luZGljZXM6IFswXX1cclxuICAgICAgICAgICAgICAgIC8vdmFyIHNlY29uZCA9ICAge2ZpcnN0X25vdGU6IG5vdGVfbGlzdFtqLTFdLCBmaXJzdF9pbmRpY2VzOiBbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgbGFzdF9ub3RlOiBOb3RlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGZpcnN0X2luZGljZXM6IFtuMSwgbjIsIG4zXSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBsYXN0X2luZGljZXM6IFtuMSwgbjIsIG4zXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpbmUgPSBuZXcgVkYuU3RhdmVMaW5lKHtmaXJzdF9ub3RlOiB2b2ljZS50aWNrYWJsZXNbal0sIGxhc3Rfbm90ZTogdm9pY2UudGlja2FibGVzW2otMV0sIGZpcnN0X2luZGljZXM6IDAsIGxhc3RfaW5kaWNlczowfSlcclxuXHJcbiAgICAgICAgICAgICAgICBzbC5wdXNoKHNsaW5lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vc2wuZHJhdyhjb250ZXh0LCBzdGF2ZSlcclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLm91dGVyOC5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPVwib3V0ZXI4XCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIExpbmVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKE15Tm90ZXMpIHtcclxuICAgICAgICAgICAgdmFyIG5ld19rZXkgPSBNeU5vdGVzWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV3X29jdGF2ZSA9IE15Tm90ZXNbTXlOb3Rlcy5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgIGlmIChNeU5vdGVzLmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBNeU5vdGVzWzFdOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBcIm5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICByZXR1cm4gW25ld19ub3RlLCBuZXdfYWNjaWRlbnRpYWxdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7aWQsIHdpZHRoLCBoZWlnaHQsIHN0YWZmWSwgbm90ZXMsIGNsZWZzLCBjb2xvcnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgcGFkZGluZyA9IDMwO1xyXG4gICAgICAgIC8vdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3JlbmRlcmVyLnJlc2l6ZSh3aWR0aCtwYWRkaW5nLCBoZWlnaHQpO1xyXG4gICAgICAgIHZhciB2ZiA9IG5ldyBWRi5GYWN0b3J5KHtyZW5kZXJlcjoge2VsZW1lbnRJZDogc3ZnQ29udGFpbmVyLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fX0pO1xyXG4gICAgICAgIHZhciBjb250ZXh0PXZmLmNvbnRleHRcclxuXHJcbiAgICAgICAgLy92YXIgc3lzdGVtID0gdmYuU3lzdGVtKHJlbmRlcmVyLmdldENvbnRleHQoKSkvLy5zZXRDb250ZXh0KHJlbmRlcmVyLmdldENvbnRleHQoKSlcclxuICAgICAgICAvL25ldyBWRi5TdGF2ZSgpLnNldFdpZHRoKClcclxuICAgICAgICAvL3ZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgIC8vdmFyIHN0YXZlID0gbmV3IFZGLlN0YXZlKHBhZGRpbmcsIDMwLCB3aWR0aClcclxuICAgICAgICAvL3ZhciBmaXJzdENsZWYgPSAndHJlYmxlJ1xyXG4gICAgICAgIC8vc3RhdmUuYWRkQ2xlZihmaXJzdENsZWYpXHJcbiAgICAgICAgLy9zdGF2ZS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuICAgICAgICB2YXIgc3RhdmUgPSB2Zi5TdGF2ZSgpLnNldFkoc3RhZmZZKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICB2YXIgbGluZXMgPVtdXHJcbiAgICAgICAgdmFyIG5ld0NsZWYgPSAndHJlYmxlJ1xyXG4gICAgICAgIC8vdmFyIHZvaWNlPVtdXHJcbiAgICAgICAgLy92YXIgdm9pY2UgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8bm90ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHZhciBub3RlID0gc2VwYXJhdGUobm90ZXNbaV0pXHJcbiAgICAgICAgICAgIGlmIChjbGVmc1tpXSE9PScnKXtcclxuICAgICAgICAgICAgICAgIG5ld0NsZWY9Y2xlZnNbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzdGF2ZU5vdGUgPSB2Zi5TdGF2ZU5vdGUoe2tleXM6IFtub3RlWzBdXSwgZHVyYXRpb246JzQnLCBjbGVmOiBuZXdDbGVmfSkuYWRkQWNjaWRlbnRhbCgwLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlWzFdKSlcclxuICAgICAgICAgICAgaWYgKGNsZWZzW2ldIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsZWZOb3RlID0gbmV3IFZleC5GbG93LkNsZWZOb3RlKGNsZWZzW2ldLCAnc21hbGwnKTtcclxuICAgICAgICAgICAgICAgIHZhciBub3RlU3ViR3JvdXAgPSBuZXcgVmV4LkZsb3cuTm90ZVN1Ykdyb3VwKFtjbGVmTm90ZV0pO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVOb3RlLmFkZE1vZGlmaWVyKDAsIG5vdGVTdWJHcm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3ZhciBuZXdfbm90ZSA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IG5ld0NsZWYsIGtleXM6IFtub3RlWzBdXSwgZHVyYXRpb246IFwicVwifSlcclxuICAgICAgICAgICAgLy9uZXdfbm90ZS5hZGRBY2NpZGVudGFsKDAsIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVbMV0pKVxyXG4gICAgICAgICAgICAvL25vdGVfbGlzdC5wdXNoKG5ld19ub3RlKVxyXG4gICAgICAgICAgICBub3RlX2xpc3QucHVzaChzdGF2ZU5vdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdm9pY2UuYWRkVGlja2FibGVzKG5vdGVfbGlzdCk7XHJcbiAgICAgICAgdmFyIHZvaWNlcyA9IHZmLlZvaWNlKCkuc2V0TW9kZSgyKS5hZGRUaWNrYWJsZXMobm90ZV9saXN0KVxyXG4gICAgICAgIGZvcih2YXIgaT0xO2k8bm90ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIC8vdmFyIGxpbmUgPSBuZXcgVkYuU3RhdmVMaW5lKHtmcm9tOiBub3RlX2xpc3RbaS0xXSwgdG86IG5vdGVfbGlzdFtpXSwgZmlyc3RfaW5kaWNlczogWzBdLFxyXG4gICAgICAgICAgICAvLyAgICBsYXN0X2luZGljZXM6IFswXSx9KVxyXG4gICAgICAgICAgICAvL2xpbmUuc2V0Tm90ZXMoe2ZpcnN0X25vdGU6IG5vdGVzW2ktMV0sIGxhc3Rfbm90ZTogbm90ZXNbaV19KVxyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKHZmLlN0YXZlTGluZSh7ZnJvbTogbm90ZV9saXN0W2ktMV0sIHRvOiBub3RlX2xpc3RbaV0sIGZpcnN0X2luZGljZXM6IFswXSxcclxuICAgICAgICAgICAgICAgIGxhc3RfaW5kaWNlczogWzBdLH0pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlXSkuZm9ybWF0KFt2b2ljZV0sIHdpZHRoLXBhZGRpbmcpO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VzXSkuZm9ybWF0KFt2b2ljZXNdLCB3aWR0aC1wYWRkaW5nKTsvLy5mb3JtYXRUb1N0YXZlKFt2b2ljZXNdLCBzdGF2ZSk7XHJcbiAgICAgICAgdmYuZHJhdygpXHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8bm90ZXMubGVuZ3RoLTE7aSsrKXtcclxuICAgICAgICAvL0Zvcm1hdHRlciBub3RlaGVhZCB4IGNvb3JkaW5hdGVcclxuICAgICAgICB2YXIgeF9jb28xID0gZm9ybWF0dGVyLnZvaWNlc1swXS50aWNrYWJsZXNbaV0ubm90ZV9oZWFkc1swXS54XHJcbiAgICAgICAgdmFyIHhfY29vMiA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2krMV0ubm90ZV9oZWFkc1swXS54XHJcbiAgICAgICAgY29uc29sZS5sb2coeF9jb28xKVxyXG5cclxuICAgICAgICAvL0Zvcm1hdHRlciBub3RlaGVhZCB5IGNvb3JkaW5hdGVcclxuICAgICAgICB2YXIgeV9jb28xID0gZm9ybWF0dGVyLnZvaWNlc1swXS50aWNrYWJsZXNbaV0ubm90ZV9oZWFkc1swXS55XHJcbiAgICAgICAgdmFyIHlfY29vMiA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2krMV0ubm90ZV9oZWFkc1swXS55XHJcbiAgICAgICAgY29uc29sZS5sb2coeV9jb28xKVxyXG5cclxuICAgICAgICAvL1N0YXZlIHBhZGRpbmdcclxuICAgICAgICB2YXIgc3RfeCA9IHN0YXZlLnN0YXJ0X3hcclxuICAgICAgICB2YXIgc3RfeSA9IHN0YXZlLnkrc3RhdmUuaGVpZ2h0XHJcblxyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCkgLy8gc3RhcnQgcmVjb3JkaW5nIG91ciBwZW4ncyBtb3Zlc1xyXG4gICAgICAgIC5tb3ZlVG8oeF9jb28xK3N0X3gsIHN0X3krMjApIC8vIHBpY2t1cCB0aGUgcGVuIGFuZCBzZXQgaXQgZG93biBhdCBYPTAsIFk9MC4gTk9URTogWT0wIGlzIHRoZSB0b3Agb2YgdGhlIHNjcmVlbi5cclxuICAgICAgICAubGluZVRvKHhfY29vMitzdF94LCBzdF95KzIwKSAvLyBub3cgYWRkIGEgbGluZSB0byB0aGUgcmlnaHQgZnJvbSAoMCwgMCkgdG8gKDUwLCAwKSB0byBvdXIgcGF0aFxyXG4gICAgICAgIC5saW5lVG8oeF9jb28yK3N0X3gsIHN0X3krNDApIC8vIGFkZCBhIGxpbmUgdG8gdGhlIGxlZnQgYW5kIGRvd24gZnJvbSAoNTAsIDApIHRvICgyNSwgNTApXHJcbiAgICAgICAgLmxpbmVUbyh4X2NvbzErc3RfeCwgc3RfeSs0MClcclxuICAgICAgICAuY2xvc2VQYXRoKCkgLy8gbm93IGFkZCBhIGxpbmUgYmFjayB0byB3aGVyZXZlciB0aGUgcGF0aCBzdGFydGVkLCBpbiB0aGlzIGNhc2UgKDAsIDApLCBjbG9zaW5nIHRoZSB0cmlhbmdsZS5cclxuICAgICAgICAuZmlsbCh7IGZpbGw6IGNvbG9yc1tpXSB9KTsgLy8gbm93IGZpbGwgb3VyIHRyaWFuZ2xlIGluIHllbGxvdy5cclxuICAgICAgICB2Zi5kcmF3KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdm9pY2UuZHJhdyhjb250ZXh0LCBzdGF2ZSk7XHJcbiAgICAgICAgdGhpcy5yZWZzLm91dGVyQS5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyQVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vdGVzPVtcImM0XCIsIFwiZiM3XCIsIFwiZTFcIiwgXCJnYjNcIl1cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhwcm9wcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9WydjNCddXHJcbiAgICAgIH1cclxuLy9uZXcgVkYuU3RhdmVOb3RlKCkuc2V0XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQaWFub2lucHV0XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjaGlsZHJlbj0ndGVzdGluZycgLz5cclxuICAgICAgICAgICAgICAgIDxFZGl0XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGVzdFxyXG4gICAgICAgICAgICAgICAgbm90ZXMgPSB7WydjLzUnLCAnYy81JywgJ2QvNicsICdkLzYnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVzXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICBzdGFmZlk9ezEwMH1cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbJ2M0JywgJ2I2JywgJ2Q0JywgJ2MzJywgJ2EzJ119XHJcbiAgICAgICAgICAgICAgICBjbGVmcz17Wyd0cmVibGUnLCAnJywgJycsICdiYXNzJywgJyddfVxyXG4gICAgICAgICAgICAgICAgY29sb3JzPXtbJ3llbGxvdycsICdyZWQnLCAnZ3JheSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYW5nZVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgc3RhZmZZPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17WydjNCcsICdiNycsICdkNCcsICdjNScsICdhNSddfVxyXG4gICAgICAgICAgICAgICAgY2xlZnM9e1sndHJlYmxlJywgJycsICcnLCAnYmFzcycsICcnXX1cclxuICAgICAgICAgICAgICAgIGNvbG9ycz17W1sneWVsbG93JywgJ3JlZCcsICdncmF5J10sIFsneWVsbG93J10sIFsnZ3JheSddLCBbJ2JsYWNrJ11dfVxyXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM9e1sncXVpZXQnLCAnbG91ZCcsICdubycsICd5ZXMnLCAnd2hhdCddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQaWFub3JvbGxcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICBzY2FsZT17MX1cclxuICAgICAgICAgICAgICAgIHN0YXZlX2xpc3Q9e1tbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzOltbJ2MjNCcsICdnNCddLCBbXSwgJ2Y0JywgJ2E0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOlsnYmx1ZScsICdibHVlJywgJ2dyZWVuJywgJ2dyZWVuJ10sIFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodHM6WydyZWQnLCAncmVkJywgJ21hZ2VudGEnLCAneWVsbG93J119LCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ2Jhc3MnLCBuYW1lOiAnYmFzc29vbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6W1tdLCBbXSwgW10sIFtdLCAnYyMzJywgJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0J119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAnYmFzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6W1snYyMzJywgJ2QzJ10sIFsnYyMzJywgJ2QzJ10sJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdnYjQnLCAnZjQnLCAnYTQnXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6WydibHVlJywgJ2JsdWUnLCAnZ3JlZW4nLCAnZ3JlZW4nXX0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ3Zpb2xpbicsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCcsJ2MjNCcsICdnYjQnLCAnZjQnLCAnYTQnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICdiYXNzJywgbmFtZTogJ2Jhc3Nvb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyMzJywgJ2YzJywgJ2EzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHN0YXZlX3NwYWNpbmc9ezcwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTdGF2ZVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9J2M0L2hbc3RlbT0gXCJkb3duXCIsIGlkPVwibTJhXCIsIGFydGljdWxhdGlvbnM9XCJzdGFjY2F0by5iZWxvdyx0ZW51dG9cIiwgc3R5bGU9XCJmaWxsU3R5bGUuYmx1ZVwiXSwgZTQnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICBDbGljayBtZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPE1hc2tpbmdcclxuICAgICAgaWQ9J21hc2tpbmdfbm90ZXN0YWZmJ1xyXG4gICAgICBtYXNraW5nX25vdGV2YWx1ZXM9e1s1MCwgNjcsIDgwLCA5NCwgMTAwXX1cclxuICAgICAgbWFza2luZ19ub3Rlc2l6ZXM9e1s4MCwgNzAsIDcwLCA3MCwgNzBdfVxyXG4gICAgICBtYXNraW5nX2NvbG9ycz17WydyZ2JhKDgwLDAsMCwwLjMpJywgJ3JnYmEoODAsMCwwLDAuMyknLCAncmdiYSg4MCwwLDAsMC4zKScsICdyZ2JhKDgwLDAsMCwwLjMpJywgJ3JnYmEoODAsMCwwLDAuMyknXX1cclxuICAgICAgdGFyZ2V0X25vdGV2YWx1ZXM9e1s2MCwgNjQsIDY3LCA3MiwgNzldfVxyXG4gICAgICB0YXJnZXRfbm90ZXNpemVzPXtbNDAsIDQwLCA0MCwgNDAsIDQwXX1cclxuICAgICAgdGFyZ2V0X2NvbG9ycz17WydncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbiddfVxyXG4gICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIGlkPXsnaWQxJ31cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbXCJjNFwiLCBcImMjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtbM119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17Wyd2aW9saW4nLCAnZmx1dGUnLCdjbGFyaW5ldCcsICdiYXNzb29uJywgJ3Ryb21ib25lJ119XHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRzPXtbJycsICdncmVlbiddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxPcmNoZXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17J2lkMid9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1snJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNjb3JlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nKGMrNCBlNCBnNCkvd1tjbGVmPVwiYmFzc1wiXSdcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cclxuICAgICAgICAgICAgICAgIHNjYWxlPXswLjV9XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPXsxMH1cclxuICAgICAgICAgICAgICAgIGNsZWY9eydiYXNzJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
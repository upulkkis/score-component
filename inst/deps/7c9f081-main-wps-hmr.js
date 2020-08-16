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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Test, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzdGF2ZSIsIlN0YXZlIiwic2V0VGV4dCIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJMRUZUIiwic2hpZnRfeSIsInNldENvbnRleHQiLCJkcmF3Iiwidm9pY2UiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwidm9pY2UyIiwibm90ZV9saXN0Iiwic3RhdmVfbGluZXMiLCJiYXIiLCJsZW5ndGgiLCJhZGROb3RlIiwiU3RhdmVOb3RlIiwiY2xlZiIsImtleXMiLCJkdXJhdGlvbiIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImZpcnN0IiwiZmlyc3Rfbm90ZSIsImZpcnN0X2luZGljZXMiLCJzZWNvbmQiLCJzdGF2ZWxpbmUiLCJTdGF2ZUxpbmUiLCJsYXN0X25vdGUiLCJsYXN0X2luZGljZXMiLCJyZW5kZXJfb3B0aW9ucyIsImxpbmVfd2lkdGgiLCJjb2xvciIsInBhZGRpbmdfbGVmdCIsInBhZGRpbmdfcmlnaHQiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwiZm9ybWF0dGVyMiIsImsiLCJzbCIsImoiLCJ0aWNrYWJsZXMiLCJzbGluZSIsInJlZnMiLCJvdXRlcjgiLCJhcHBlbmRDaGlsZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJMaW5lcyIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwibmV3X25vdGUiLCJjb25jYXQiLCJpZCIsInN0YWZmWSIsImNsZWZzIiwiY29sb3JzIiwidmYiLCJGYWN0b3J5IiwiZWxlbWVudElkIiwic2V0WSIsImxpbmVzIiwibmV3Q2xlZiIsImkiLCJub3RlIiwic3RhdmVOb3RlIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJjbGVmTm90ZSIsIkNsZWZOb3RlIiwibm90ZVN1Ykdyb3VwIiwiTm90ZVN1Ykdyb3VwIiwiYWRkTW9kaWZpZXIiLCJ2b2ljZXMiLCJmcm9tIiwidG8iLCJ4X2NvbzEiLCJub3RlX2hlYWRzIiwieF9jb28yIiwieV9jb28xIiwieV9jb28yIiwic3RfeCIsInN0YXJ0X3giLCJzdF95IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsIm91dGVyQSIsIkFwcCIsInZhbHVlIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsIm5hbWUiLCJoYW5kbGVDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBQ01DLEk7Ozs7O0FBRUYsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBSGU7QUFRbEI7Ozs7d0NBRW1CO0FBRWhCLFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBRmdCLFVBR1RDLEtBSFMsR0FH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ImZpbGUiOiI3YzlmMDgxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCwgU3RhdmUsIE9yY2hlc3RyYXRpb24sIE1hc2tpbmcsIFBpYW5vcm9sbCwgUmFuZ2V9IGZyb20gJy4uL2xpYic7XHJcblxyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7bm90ZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgd2lkdGggPTMwMFxyXG4gICAgICAgIHZhciBoZWlnaHQgPTIwMFxyXG4gICAgICAgIHZhciBwYWRkaW5nID0gNTA7XHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcblxyXG4gICAgICAgIHZhciBzdGF2ZSA9IG5ldyBWRi5TdGF2ZShwYWRkaW5nLCAzMCwgd2lkdGgpXHJcbiAgICAgICAgc3RhdmUuc2V0VGV4dCgnYmFyOiAxJywgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF95OiAtNDAgfSk7XHJcbiAgICAgICAgLy9jb25zdCB0ZXh0ID0gbmV3IFZGLlN0YXZlVGV4dCgpLy8sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLkFCT1ZFLCB7IHNoaWZ0X3g6IDAsIHNoaWZ0X3k6IDAgfSk7XHJcbiAgICAgICAgc3RhdmUuc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KClcclxuXHJcbiAgICAgICAgdmFyIHZvaWNlID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKVxyXG4gICAgICAgIHZhciB2b2ljZTIgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpXHJcblxyXG4gICAgICAgIHZhciBub3RlX2xpc3QgPSBbXVxyXG4gICAgICAgIHZhciBzdGF2ZV9saW5lcyA9IFtdXHJcbiAgICBmb3IodmFyIGJhcj0wOyBiYXI8bm90ZXMubGVuZ3RoOyBiYXIrKyl7XHJcbiAgICAgICAgdmFyIGFkZE5vdGU9bmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogJ3RyZWJsZScsIGtleXM6IFtub3Rlc1tiYXJdXSwgZHVyYXRpb246IFwicVwifSlcclxuICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ3JnYmEoMCwwLDAsMCknLCBmaWxsU3R5bGU6ICdncmVlbid9KVxyXG4gICAgICAgIG5vdGVfbGlzdC5wdXNoKGFkZE5vdGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWRkTm90ZSlcclxuICAgICAgICBpZiAoYmFyID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdCA9ICAge2ZpcnN0X25vdGU6IG5vdGVfbGlzdFtiYXJdLCBmaXJzdF9pbmRpY2VzOiBbMF19XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmQgPSAgIHtmaXJzdF9ub3RlOiBub3RlX2xpc3RbYmFyLTFdLCBmaXJzdF9pbmRpY2VzOiBbMF19XHJcbiAgICAgICAgICAgICAgICAvLyAgICBsYXN0X25vdGU6IE5vdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICBmaXJzdF9pbmRpY2VzOiBbbjEsIG4yLCBuM10sXHJcbiAgICAgICAgICAgICAgICAvLyAgICBsYXN0X2luZGljZXM6IFtuMSwgbjIsIG4zXVxyXG4gICAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgdmFyIHN0YXZlbGluZSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2ZpcnN0X25vdGU6IG5vdGVfbGlzdFtiYXJdLCBsYXN0X25vdGU6IG5vdGVfbGlzdFtiYXItMV0sIGZpcnN0X2luZGljZXM6IDAsIGxhc3RfaW5kaWNlczowfSlcclxuICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLmxpbmVfd2lkdGggPSAzXHJcbiAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5jb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfbGVmdCA9IC00XHJcbiAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5wYWRkaW5nX3JpZ2h0ID0gLTRcclxuICAgICAgICAgICAgLy9hZGROb3RlLmFkZE1vZGlmaWVyKDAsIG5ldyBWRi5Nb2RpZmllcihzdGF2ZWxpbmUpKVxyXG5cclxuICAgICAgICAgICAgc3RhdmVfbGluZXMucHVzaChzdGF2ZWxpbmUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9ub3RlX2xpc3RbM10uc3RhdmUubW9kaWZpZXJzWzBdLnJlbmRlcmVkID0gZmFsc2VcclxuICAgIGNvbnNvbGUubG9nKG5vdGVfbGlzdFszXS5zZXRMZWRnZXJMaW5lU3R5bGUoe3N0cm9rZVN0eWxlOiAnbm9uZSd9KSlcclxuICAgIHZvaWNlLmFkZFRpY2thYmxlcyhub3RlX2xpc3QpXHJcbiAgICAgICAgXHJcblxyXG4gICAgXHJcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV0pLmZvcm1hdChbdm9pY2VdLCB3aWR0aC01MCk7XHJcbiAgICAgICAgdmFyIGZvcm1hdHRlcjIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2UyXSkuZm9ybWF0KFt2b2ljZTJdLCB3aWR0aC01MCk7XHJcbiAgICAgICAgICAgIC8vdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgIFxyXG4gXHJcbiAgICAgICAgdm9pY2UuZHJhdyhjb250ZXh0LCBzdGF2ZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaz0wOyBrPHN0YXZlX2xpbmVzLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgc3RhdmVfbGluZXNba10uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICBzdGF2ZV9saW5lc1trXS5kcmF3KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92b2ljZTIuZHJhdyhjb250ZXh0LCBzdGF2ZSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgdmFyIHNsPVtdXHJcbiAgICAgICAgZm9yKHZhciBqPTA7IGo8dm9pY2UudGlja2FibGVzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgaWYgKGogPiAwKXtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGZpcnN0ID0gICB7Zmlyc3Rfbm90ZTogbm90ZV9saXN0W2pdLCBmaXJzdF9pbmRpY2VzOiBbMF19XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBzZWNvbmQgPSAgIHtmaXJzdF9ub3RlOiBub3RlX2xpc3Rbai0xXSwgZmlyc3RfaW5kaWNlczogWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGxhc3Rfbm90ZTogTm90ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBmaXJzdF9pbmRpY2VzOiBbbjEsIG4yLCBuM10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgbGFzdF9pbmRpY2VzOiBbbjEsIG4yLCBuM11cclxuICAgICAgICAgICAgICAgICAgICAvLyAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNsaW5lID0gbmV3IFZGLlN0YXZlTGluZSh7Zmlyc3Rfbm90ZTogdm9pY2UudGlja2FibGVzW2pdLCBsYXN0X25vdGU6IHZvaWNlLnRpY2thYmxlc1tqLTFdLCBmaXJzdF9pbmRpY2VzOiAwLCBsYXN0X2luZGljZXM6MH0pXHJcblxyXG4gICAgICAgICAgICAgICAgc2wucHVzaChzbGluZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NsLmRyYXcoY29udGV4dCwgc3RhdmUpXHJcblxyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlcjguYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyOFwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBMaW5lcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShNeU5vdGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdfa2V5ID0gTXlOb3Rlc1swXTtcclxuICAgICAgICAgICAgdmFyIG5ld19vY3RhdmUgPSBNeU5vdGVzW015Tm90ZXMubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICBpZiAoTXlOb3Rlcy5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gTXlOb3Rlc1sxXTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5ld19ub3RlID0gbmV3X2tleS5jb25jYXQoXCIvXCIsbmV3X29jdGF2ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXdfbm90ZSwgbmV3X2FjY2lkZW50aWFsXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBzdGFmZlksIG5vdGVzLCBjbGVmcywgY29sb3JzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAzMDtcclxuICAgICAgICAvL3ZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9yZW5kZXJlci5yZXNpemUod2lkdGgrcGFkZGluZywgaGVpZ2h0KTtcclxuICAgICAgICB2YXIgdmYgPSBuZXcgVkYuRmFjdG9yeSh7cmVuZGVyZXI6IHtlbGVtZW50SWQ6IHN2Z0NvbnRhaW5lciwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH19KTtcclxuICAgICAgICB2YXIgY29udGV4dD12Zi5jb250ZXh0XHJcblxyXG4gICAgICAgIC8vdmFyIHN5c3RlbSA9IHZmLlN5c3RlbShyZW5kZXJlci5nZXRDb250ZXh0KCkpLy8uc2V0Q29udGV4dChyZW5kZXJlci5nZXRDb250ZXh0KCkpXHJcbiAgICAgICAgLy9uZXcgVkYuU3RhdmUoKS5zZXRXaWR0aCgpXHJcbiAgICAgICAgLy92YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgICAvL3ZhciBzdGF2ZSA9IG5ldyBWRi5TdGF2ZShwYWRkaW5nLCAzMCwgd2lkdGgpXHJcbiAgICAgICAgLy92YXIgZmlyc3RDbGVmID0gJ3RyZWJsZSdcclxuICAgICAgICAvL3N0YXZlLmFkZENsZWYoZmlyc3RDbGVmKVxyXG4gICAgICAgIC8vc3RhdmUuc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgdmFyIHN0YXZlID0gdmYuU3RhdmUoKS5zZXRZKHN0YWZmWSlcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgdmFyIGxpbmVzID1bXVxyXG4gICAgICAgIHZhciBuZXdDbGVmID0gJ3RyZWJsZSdcclxuICAgICAgICAvL3ZhciB2b2ljZT1bXVxyXG4gICAgICAgIC8vdmFyIHZvaWNlID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKTtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPG5vdGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB2YXIgbm90ZSA9IHNlcGFyYXRlKG5vdGVzW2ldKVxyXG4gICAgICAgICAgICBpZiAoY2xlZnNbaV0hPT0nJyl7XHJcbiAgICAgICAgICAgICAgICBuZXdDbGVmPWNsZWZzW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3RhdmVOb3RlID0gdmYuU3RhdmVOb3RlKHtrZXlzOiBbbm90ZVswXV0sIGR1cmF0aW9uOic0JywgY2xlZjogbmV3Q2xlZn0pLmFkZEFjY2lkZW50YWwoMCwgbmV3IFZGLkFjY2lkZW50YWwobm90ZVsxXSkpXHJcbiAgICAgICAgICAgIGlmIChjbGVmc1tpXSE9PScnKXtcclxuICAgICAgICAgICAgICAgIHZhciBjbGVmTm90ZSA9IG5ldyBWZXguRmxvdy5DbGVmTm90ZShjbGVmc1tpXSwgJ3NtYWxsJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZVN1Ykdyb3VwID0gbmV3IFZleC5GbG93Lk5vdGVTdWJHcm91cChbY2xlZk5vdGVdKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlTm90ZS5hZGRNb2RpZmllcigwLCBub3RlU3ViR3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy92YXIgbmV3X25vdGUgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBuZXdDbGVmLCBrZXlzOiBbbm90ZVswXV0sIGR1cmF0aW9uOiBcInFcIn0pXHJcbiAgICAgICAgICAgIC8vbmV3X25vdGUuYWRkQWNjaWRlbnRhbCgwLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlWzFdKSlcclxuICAgICAgICAgICAgLy9ub3RlX2xpc3QucHVzaChuZXdfbm90ZSlcclxuICAgICAgICAgICAgbm90ZV9saXN0LnB1c2goc3RhdmVOb3RlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL3ZvaWNlLmFkZFRpY2thYmxlcyhub3RlX2xpc3QpO1xyXG4gICAgICAgIHZhciB2b2ljZXMgPSB2Zi5Wb2ljZSgpLnNldE1vZGUoMikuYWRkVGlja2FibGVzKG5vdGVfbGlzdClcclxuICAgICAgICBmb3IodmFyIGk9MTtpPG5vdGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAvL3ZhciBsaW5lID0gbmV3IFZGLlN0YXZlTGluZSh7ZnJvbTogbm90ZV9saXN0W2ktMV0sIHRvOiBub3RlX2xpc3RbaV0sIGZpcnN0X2luZGljZXM6IFswXSxcclxuICAgICAgICAgICAgLy8gICAgbGFzdF9pbmRpY2VzOiBbMF0sfSlcclxuICAgICAgICAgICAgLy9saW5lLnNldE5vdGVzKHtmaXJzdF9ub3RlOiBub3Rlc1tpLTFdLCBsYXN0X25vdGU6IG5vdGVzW2ldfSlcclxuICAgICAgICAgICAgbGluZXMucHVzaCh2Zi5TdGF2ZUxpbmUoe2Zyb206IG5vdGVfbGlzdFtpLTFdLCB0bzogbm90ZV9saXN0W2ldLCBmaXJzdF9pbmRpY2VzOiBbMF0sXHJcbiAgICAgICAgICAgICAgICBsYXN0X2luZGljZXM6IFswXSx9KSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV0pLmZvcm1hdChbdm9pY2VdLCB3aWR0aC1wYWRkaW5nKTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc10pLmZvcm1hdChbdm9pY2VzXSwgd2lkdGgtcGFkZGluZyk7Ly8uZm9ybWF0VG9TdGF2ZShbdm9pY2VzXSwgc3RhdmUpO1xyXG4gICAgICAgIHZmLmRyYXcoKVxyXG5cclxuICAgICAgICBmb3IodmFyIGk9MDtpPG5vdGVzLmxlbmd0aC0xO2krKyl7XHJcbiAgICAgICAgLy9Gb3JtYXR0ZXIgbm90ZWhlYWQgeCBjb29yZGluYXRlXHJcbiAgICAgICAgdmFyIHhfY29vMSA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2ldLm5vdGVfaGVhZHNbMF0ueFxyXG4gICAgICAgIHZhciB4X2NvbzIgPSBmb3JtYXR0ZXIudm9pY2VzWzBdLnRpY2thYmxlc1tpKzFdLm5vdGVfaGVhZHNbMF0ueFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHhfY29vMSlcclxuXHJcbiAgICAgICAgLy9Gb3JtYXR0ZXIgbm90ZWhlYWQgeSBjb29yZGluYXRlXHJcbiAgICAgICAgdmFyIHlfY29vMSA9IGZvcm1hdHRlci52b2ljZXNbMF0udGlja2FibGVzW2ldLm5vdGVfaGVhZHNbMF0ueVxyXG4gICAgICAgIHZhciB5X2NvbzIgPSBmb3JtYXR0ZXIudm9pY2VzWzBdLnRpY2thYmxlc1tpKzFdLm5vdGVfaGVhZHNbMF0ueVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHlfY29vMSlcclxuXHJcbiAgICAgICAgLy9TdGF2ZSBwYWRkaW5nXHJcbiAgICAgICAgdmFyIHN0X3ggPSBzdGF2ZS5zdGFydF94XHJcbiAgICAgICAgdmFyIHN0X3kgPSBzdGF2ZS55K3N0YXZlLmhlaWdodFxyXG5cclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpIC8vIHN0YXJ0IHJlY29yZGluZyBvdXIgcGVuJ3MgbW92ZXNcclxuICAgICAgICAubW92ZVRvKHhfY29vMStzdF94LCBzdF95KzIwKSAvLyBwaWNrdXAgdGhlIHBlbiBhbmQgc2V0IGl0IGRvd24gYXQgWD0wLCBZPTAuIE5PVEU6IFk9MCBpcyB0aGUgdG9wIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAgICAgLmxpbmVUbyh4X2NvbzIrc3RfeCwgc3RfeSsyMCkgLy8gbm93IGFkZCBhIGxpbmUgdG8gdGhlIHJpZ2h0IGZyb20gKDAsIDApIHRvICg1MCwgMCkgdG8gb3VyIHBhdGhcclxuICAgICAgICAubGluZVRvKHhfY29vMitzdF94LCBzdF95KzQwKSAvLyBhZGQgYSBsaW5lIHRvIHRoZSBsZWZ0IGFuZCBkb3duIGZyb20gKDUwLCAwKSB0byAoMjUsIDUwKVxyXG4gICAgICAgIC5saW5lVG8oeF9jb28xK3N0X3gsIHN0X3krNDApXHJcbiAgICAgICAgLmNsb3NlUGF0aCgpIC8vIG5vdyBhZGQgYSBsaW5lIGJhY2sgdG8gd2hlcmV2ZXIgdGhlIHBhdGggc3RhcnRlZCwgaW4gdGhpcyBjYXNlICgwLCAwKSwgY2xvc2luZyB0aGUgdHJpYW5nbGUuXHJcbiAgICAgICAgLmZpbGwoeyBmaWxsOiBjb2xvcnNbaV0gfSk7IC8vIG5vdyBmaWxsIG91ciB0cmlhbmdsZSBpbiB5ZWxsb3cuXHJcbiAgICAgICAgdmYuZHJhdygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3ZvaWNlLmRyYXcoY29udGV4dCwgc3RhdmUpO1xyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlckEuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiByZWY9XCJvdXRlckFcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz1bXCJjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2socHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpczonLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPVsnYzQnXVxyXG4gICAgICB9XHJcbi8vbmV3IFZGLlN0YXZlTm90ZSgpLnNldFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VGVzdFxyXG4gICAgICAgICAgICAgICAgbm90ZXMgPSB7WydjLzUnLCAnYy81JywgJ2QvNicsICdkLzYnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVzXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICBzdGFmZlk9ezEwMH1cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbJ2M0JywgJ2I2JywgJ2Q0JywgJ2MzJywgJ2EzJ119XHJcbiAgICAgICAgICAgICAgICBjbGVmcz17Wyd0cmVibGUnLCAnJywgJycsICdiYXNzJywgJyddfVxyXG4gICAgICAgICAgICAgICAgY29sb3JzPXtbJ3llbGxvdycsICdyZWQnLCAnZ3JheSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYW5nZVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgc3RhZmZZPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17WydjNCcsICdiNycsICdkNCcsICdjNScsICdhNSddfVxyXG4gICAgICAgICAgICAgICAgY2xlZnM9e1sndHJlYmxlJywgJycsICcnLCAnYmFzcycsICcnXX1cclxuICAgICAgICAgICAgICAgIGNvbG9ycz17W1sneWVsbG93JywgJ3JlZCcsICdncmF5J10sIFsneWVsbG93J10sIFsnZ3JheSddLCBbJ2JsYWNrJ11dfVxyXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM9e1sncXVpZXQnLCAnbG91ZCcsICdubycsICd5ZXMnLCAnd2hhdCddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQaWFub3JvbGxcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICBzY2FsZT17MX1cclxuICAgICAgICAgICAgICAgIHN0YXZlX2xpc3Q9e1tbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgW10sICdmNCcsICdhNCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczpbJ2JsdWUnLCAnYmx1ZScsICdncmVlbicsICdncmVlbiddfSwgXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICdiYXNzJywgbmFtZTogJ2Jhc3Nvb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOltbXSwgW10sIFtdLCBbXSwgJ2MjMycsICdmMycsICdhMyddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICdqZWJ1JyxcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2MjNCcsICdjIzQnLCAnYyM0JywgJ2MjNCcsICdnYjQnLCAnZjQnLCAnYTQnXX0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ3Zpb2xpbicsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYyM0JywgJ2diNCcsICdmNCcsICdhNCddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ2Jhc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOltbJ2MjMycsICdkMyddLCBbJ2MjMycsICdkMyddLCdmMycsICdhMyddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICdqZWJ1JyxcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjNCcsICdnYjQnLCAnZ2I0JywgJ2Y0JywgJ2E0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOlsnYmx1ZScsICdibHVlJywgJ2dyZWVuJywgJ2dyZWVuJ119LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICd2aW9saW4nLCBcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjNCcsICdnYjQnLCAnZjQnLCAnYTQnLCdjIzQnLCAnZ2I0JywgJ2Y0JywgJ2E0J119LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAnYmFzcycsIG5hbWU6ICdiYXNzb29uJyxcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjMycsICdmMycsICdhMyddfSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICdqZWJ1JyxcclxuICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MjNCcsICdnYjQnLCAnZjQnLCAnYTQnXX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9zcGFjaW5nPXs3MH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3RhdmVcclxuICAgICAgICAgICAgICAgIG5vdGVzPSdjNC9oW3N0ZW09IFwiZG93blwiLCBpZD1cIm0yYVwiLCBhcnRpY3VsYXRpb25zPVwic3RhY2NhdG8uYmVsb3csdGVudXRvXCIsIHN0eWxlPVwiZmlsbFN0eWxlLmJsdWVcIl0sIGU0J1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgQ2xpY2sgbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxNYXNraW5nXHJcbiAgICAgIGlkPSdtYXNraW5nX25vdGVzdGFmZidcclxuICAgICAgbWFza2luZ19ub3RldmFsdWVzPXtbNTAsIDY3LCA4MCwgOTQsIDEwMF19XHJcbiAgICAgIG1hc2tpbmdfbm90ZXNpemVzPXtbODAsIDcwLCA3MCwgNzAsIDcwXX1cclxuICAgICAgbWFza2luZ19jb2xvcnM9e1sncmVkJywgJ3JlZCcsICdyZWQnLCAncmVkJywgJ3JlZCddfVxyXG4gICAgICB0YXJnZXRfbm90ZXZhbHVlcz17WzYwLCA2NCwgNjcsIDcyLCA3OV19XHJcbiAgICAgIHRhcmdldF9ub3Rlc2l6ZXM9e1s0MCwgNDAsIDQwLCA0MCwgNDBdfVxyXG4gICAgICB0YXJnZXRfY29sb3JzPXtbJ2dyZWVuJywgJ2dyZWVuJywgJ2dyZWVuJywgJ2dyZWVuJywgJ2dyZWVuJ119XHJcbiAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8T3JjaGVzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgaWQ9eydpZDEnfVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9e1tcImM0XCIsIFwiZiM3XCIsIFwiZTFcIiwgXCJnYjNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1szXX1cclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRzPXtbJ3Zpb2xpbicsICdjbGFyaW5ldCcsICdiYXNzb29uJywgJ3Ryb21ib25lJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIGlkPXsnaWQyJ31cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbXCJjM1wiXX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD17W119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17WycnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2NvcmVDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3RhdmVcclxuICAgICAgICAgICAgICAgIG5vdGVzPScoYys0IGU0IGc0KS93W2NsZWY9XCJiYXNzXCJdJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfVxyXG4gICAgICAgICAgICAgICAgc2NhbGU9ezAuNX1cclxuICAgICAgICAgICAgICAgIHBhZGRpbmc9ezEwfVxyXG4gICAgICAgICAgICAgICAgY2xlZj17J2Jhc3MnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
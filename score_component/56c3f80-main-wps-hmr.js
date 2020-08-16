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
      var target = this.props.target;
      var instruments = this.props.instruments;
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(200, 400);
      var context = renderer.getContext(); //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(20, 110, 200);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(context).draw();
      var stave_b = new VF.Stave(20, 200, 200);
      stave_b.addClef("bass"); //.addTimeSignature("4/4");

      stave_b.setContext(context).draw(); //Do connectors

      var connector = new VF.StaveConnector(stave_t, stave_b);
      connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
      connector.setContext(context);
      connector.draw(); // var connector2 = new VF.StaveConnector(stave_t, stave_b);
      // connector2.setType(VF.StaveConnector.type.SINGLE_RIGHT);
      // connector2.setContext(context);
      //connector2.draw();

      var connector3 = new VF.StaveConnector(stave_t, stave_b);
      connector3.setType(VF.StaveConnector.type.BRACKET);
      connector3.setContext(context); //connector3.setText('Orch.');

      connector3.draw();

      function separate(notes, instruments, target) {
        var i;
        var treble_n = [];
        var treble_a = [];
        var treble_t = [];
        var treble_i = [];
        var bass_n = [];
        var bass_a = [];
        var bass_t = [];
        var bass_i = [];
        var new_key;
        var new_octave;
        var new_accidential;
        var entry;
        var new_note;
        var inst;
        var tgt;

        for (i = 0; i < notes.length; i++) {
          entry = notes[i];
          inst = instruments[i];
          new_key = entry[0];
          new_octave = entry[entry.length - 1];

          if (entry.length > 2) {
            new_accidential = entry[1];
          } else {
            new_accidential = "n";
          }

          new_note = new_key.concat("/", new_octave);
          tgt = target[i];

          if (parseInt(new_octave) >= 4) {
            treble_n.push(new_note);
            treble_a.push(new_accidential);
            treble_i.push(inst); //Tällä katsotaan onko juuri tämä targetlistalla
            //Alla oleva ottaa vain ekan huomioon, tarkista!!

            var tgt = 0;

            for (var j = 0; j < target.length; j++) {
              if (target[j] === i) {
                tgt = 1;
              }
            }

            treble_t.push(tgt);
          } else {
            bass_n.push(new_note);
            bass_a.push(new_accidential);
            bass_i.push(inst);
            var tgt = 0;

            for (var j = 0; j < target.length; j++) {
              if (target[j] === i) {
                tgt = 1;
              }
            }

            bass_t.push(tgt);
          }
        }

        return [treble_n, treble_a, treble_t, bass_n, bass_a, bass_t, treble_i, bass_i];
      }

      var note_data = separate(notes, instruments, target);
      var treble_notes = new VF.StaveNote({
        clef: "treble",
        keys: note_data[0],
        duration: "q"
      });
      var bass_notes = new VF.StaveNote({
        clef: "bass",
        keys: note_data[3],
        duration: "q"
      });
      var treble_inst = note_data[6];
      var bass_inst = note_data[7]; //Funktio jolla piirretään nuotin viereen

      function viereen(num, pos) {
        return new VF.FretHandFinger(num).setPosition(pos);
      }

      for (var i = 0; i < note_data[1].length; i++) {
        treble_notes.addAccidental(i, new VF.Accidental(note_data[1][i]));
        treble_notes.addModifier(i, viereen(treble_inst[i], VF.Modifier.Position.RIGHT));

        if (note_data[2][i] === 1) {
          treble_notes.setKeyStyle(i, {
            fillStyle: "red"
          });
        }
      }

      for (var i = 0; i < note_data[3].length; i++) {
        bass_notes.addAccidental(i, new VF.Accidental(note_data[4][i]));
        bass_notes.addModifier(i, viereen(bass_inst[i], VF.Modifier.Position.RIGHT));

        if (note_data[5][i] === 1) {
          bass_notes.setKeyStyle(i, {
            fillStyle: "red"
          });
        }
      } //Funktio jolla piirretään nuotin viereen


      function viereen(num, pos) {
        return new VF.FretHandFinger(num).setPosition(pos);
      } //Duunataan sointu, jossa kaksi nuottia:


      var new_note = new VF.StaveNote({
        clef: "treble",
        keys: ["a/3", "d/4"],
        duration: "h"
      }); //Vaihdetaan ylemmän =1 väri punaiseksi

      new_note.setKeyStyle(1, {
        fillStyle: "red"
      });
      new_note.addModifier(1, viereen('Soitin', VF.Modifier.Position.RIGHT));
      new_note.addModifier(0, viereen('Toinen soitin', VF.Modifier.Position.RIGHT));
      new_note.addAccidental(1, new VF.Accidental("n"));
      new_note.addAccidental(0, new VF.Accidental("b")); //Lisätään listaan

      var new_notes = [new_note]; // Create a voice in 4/4 and add the notes from above

      var voice_t = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });
      var voice_b = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });
      voice_t.addTickables([treble_notes]);
      voice_b.addTickables([bass_notes]);
      var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], 250);
      var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], 250);
      voice_t.draw(context, stave_t);
      voice_b.draw(context, stave_b);
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

var App = /*#__PURE__*/function (_Component2) {
  _inherits(App, _Component2);

  var _super2 = _createSuper(App);

  function App() {
    var _this2;

    _classCallCheck(this, App);

    _this2 = _super2.call(this);
    _this2.notes = ["c4", "f#7", "e1", "gb3"];
    _this2.state = {
      value: ''
    };
    _this2.setProps = _this2.setProps.bind(_assertThisInitialized(_this2));
    return _this2;
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
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleClick
      }, "Click me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Pianoroll"], {
        notes: ["c4", "f#7", "e1", "gb3"],
        width: 200
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Masking"], {
        id: "masking_notestaff",
        masking_notevalues: [50, 67, 80, 94, 100],
        masking_notesizes: [80, 70, 70, 70, 70],
        masking_colors: ['red', 'red', 'red', 'red', 'red'],
        target_notevalues: [60, 64, 67, 72, 79],
        target_notesizes: [40, 40, 40, 40, 40],
        target_colors: ['green', 'green', 'green', 'green', 'green']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        id: 'id1',
        notes: this.notes,
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Test, {
        notes: ["c4", "f#7", "e1", "gb3"],
        target: [3],
        instruments: ['violin', 'clarinet', 'bassoon', 'trombone']
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwidGFyZ2V0IiwiaW5zdHJ1bWVudHMiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJjb25uZWN0b3IzIiwiQlJBQ0tFVCIsInNlcGFyYXRlIiwiaSIsInRyZWJsZV9uIiwidHJlYmxlX2EiLCJ0cmVibGVfdCIsInRyZWJsZV9pIiwiYmFzc19uIiwiYmFzc19hIiwiYmFzc190IiwiYmFzc19pIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJuZXdfYWNjaWRlbnRpYWwiLCJlbnRyeSIsIm5ld19ub3RlIiwiaW5zdCIsInRndCIsImxlbmd0aCIsImNvbmNhdCIsInBhcnNlSW50IiwicHVzaCIsImoiLCJub3RlX2RhdGEiLCJ0cmVibGVfbm90ZXMiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwiYmFzc19ub3RlcyIsInRyZWJsZV9pbnN0IiwiYmFzc19pbnN0IiwidmllcmVlbiIsIm51bSIsInBvcyIsIkZyZXRIYW5kRmluZ2VyIiwic2V0UG9zaXRpb24iLCJhZGRBY2NpZGVudGFsIiwiQWNjaWRlbnRhbCIsImFkZE1vZGlmaWVyIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIlJJR0hUIiwic2V0S2V5U3R5bGUiLCJmaWxsU3R5bGUiLCJuZXdfbm90ZXMiLCJ2b2ljZV90IiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwidm9pY2VfYiIsImFkZFRpY2thYmxlcyIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJyZWZzIiwib3V0ZXIiLCJhcHBlbmRDaGlsZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiQXBwIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFDTUMsSTs7Ozs7QUFFRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFIZTtBQVFsQjs7Ozt3Q0FFbUI7QUFDaEIsVUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFEZ0IsVUFFVEMsS0FGUyxHQUVBLEtBQUtQLEtBRkwsQ0FFVE8sS0FGUztBQUFBLFVBR1RDLE1BSFMsR0FHQyxLQUFLUixLQUhOLENBR1RRLE1BSFM7QUFBQSxVQUlUQyxXQUpTLEdBSU0sS0FBS1QsS0FKWCxDQUlUUyxXQUpTO0FBTWhCLFVBQUlDLFFBQVEsR0FBRyxJQUFJZCxFQUFFLENBQUNlLFFBQVAsQ0FBZ0JQLFlBQWhCLEVBQThCUixFQUFFLENBQUNlLFFBQUgsQ0FBWUMsUUFBWixDQUFxQkMsR0FBbkQsQ0FBZjtBQUNBSCxjQUFRLENBQUNJLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxVQUFJQyxPQUFPLEdBQUdM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bUJBQVcsRUFBRSxDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLFNBQXZCLEVBQWtDLFVBQWxDO0FBSmIsUUFqQkosZUF1QkksMkRBQUMsa0RBQUQ7QUFDQSxVQUFFLEVBQUUsS0FESjtBQUVBLGFBQUssRUFBRSxDQUFDLElBQUQsQ0FGUDtBQUdBLGNBQU0sRUFBRSxFQUhSO0FBSUEsbUJBQVcsRUFBRSxDQUFDLEVBQUQ7QUFKYixRQXZCSixlQTZCSSwyREFBQyxtREFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS3dGO0FBRG5CLFNBRVEsS0FBSzlGLEtBRmIsRUE3QkosZUFpQ0ksMkRBQUMsMENBQUQ7QUFDQSxhQUFLLEVBQUM7QUFETixRQWpDSixlQW9DSSwyREFBQyxJQUFEO0FBQ0EsYUFBSyxFQUFFLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxJQUFkLEVBQW9CLEtBQXBCLENBRFA7QUFFQSxjQUFNLEVBQUUsQ0FBQyxDQUFELENBRlI7QUFHQSxtQkFBVyxFQUFFLENBQUMsUUFBRCxFQUFXLFVBQVgsRUFBdUIsU0FBdkIsRUFBa0MsVUFBbEM7QUFIYixRQXBDSixDQURKO0FBNkNIOzs7O0VBbEVhMkYsK0M7O0FBcUVIQyxrRUFBZixFIiwiZmlsZSI6IjU2YzNmODAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcblxyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCwgU3RhdmUsIE9yY2hlc3RyYXRpb24sIE1hc2tpbmcsIFBpYW5vcm9sbH0gZnJvbSAnLi4vbGliJztcclxuXHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge25vdGVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3RhcmdldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtpbnN0cnVtZW50c30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSgyMDAsIDQwMCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcblxyXG4gICAgICAgIC8vRG8gVHJlYmxlIGFuZCBCYXNzIENsZWZzXHJcblxyXG4gICAgICAgIHZhciBzdGF2ZV90ID0gbmV3IFZGLlN0YXZlKDIwLCAxMTAsIDIwMCk7XHJcbiAgICAgICAgc3RhdmVfdC5hZGRDbGVmKFwidHJlYmxlXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgc3RhdmVfdC5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXZlX2IgPSBuZXcgVkYuU3RhdmUoMjAsIDIwMCwgMjAwKTtcclxuICAgICAgICBzdGF2ZV9iLmFkZENsZWYoXCJiYXNzXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgc3RhdmVfYi5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvL0RvIGNvbm5lY3RvcnNcclxuICAgICAgICB2YXIgY29ubmVjdG9yID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgLy8gdmFyIGNvbm5lY3RvcjIgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX1JJR0hUKTtcclxuICAgICAgICAvLyBjb25uZWN0b3IyLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgLy9jb25uZWN0b3IyLmRyYXcoKTtcclxuICAgICAgICB2YXIgY29ubmVjdG9yMyA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICBjb25uZWN0b3IzLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5CUkFDS0VUKTtcclxuICAgICAgICBjb25uZWN0b3IzLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgLy9jb25uZWN0b3IzLnNldFRleHQoJ09yY2guJyk7XHJcbiAgICAgICAgY29ubmVjdG9yMy5kcmF3KCk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX24gPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV9hID0gW107XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfdCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX2kgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfbiA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19hID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX3QgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfaSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbmV3X2tleTtcclxuICAgICAgICAgICAgdmFyIG5ld19vY3RhdmU7XHJcbiAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWw7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeTtcclxuICAgICAgICAgICAgdmFyIG5ld19ub3RlO1xyXG4gICAgICAgICAgICB2YXIgaW5zdDtcclxuICAgICAgICAgICAgdmFyIHRndFxyXG4gICAgICAgICAgICBmb3IgKGk9MDsgaTxub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZW50cnkgPSBub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGluc3QgPSBpbnN0cnVtZW50c1tpXVxyXG4gICAgICAgICAgICAgICAgbmV3X2tleSA9IGVudHJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgbmV3X29jdGF2ZSA9IGVudHJ5W2VudHJ5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gZW50cnlbMV07IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdfYWNjaWRlbnRpYWwgPSBcIm5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICAgICB0Z3QgPSB0YXJnZXRbaV07XHJcbiAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG5ld19vY3RhdmUpID49IDQpIHtcclxuICAgICAgICAgICAgICAgICAgdHJlYmxlX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHRyZWJsZV9hLnB1c2gobmV3X2FjY2lkZW50aWFsKVxyXG4gICAgICAgICAgICAgICAgICB0cmVibGVfaS5wdXNoKGluc3QpXHJcblxyXG4gICAgICAgICAgICAgICAgICAvL1TDpGxsw6Qga2F0c290YWFuIG9ua28ganV1cmkgdMOkbcOkIHRhcmdldGxpc3RhbGxhXHJcbiAgICAgICAgICAgICAgICAgIC8vQWxsYSBvbGV2YSBvdHRhYSB2YWluIGVrYW4gaHVvbWlvb24sIHRhcmtpc3RhISFcclxuICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgdHJlYmxlX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhc3Nfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgYmFzc19hLnB1c2gobmV3X2FjY2lkZW50aWFsKTtcclxuICAgICAgICAgICAgICAgICAgYmFzc19pLnB1c2goaW5zdCk7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB0Z3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Z3Q9MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXNzX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbdHJlYmxlX24sIHRyZWJsZV9hLCB0cmVibGVfdCwgYmFzc19uLCBiYXNzX2EsIGJhc3NfdCwgdHJlYmxlX2ksIGJhc3NfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgbm90ZV9kYXRhID0gc2VwYXJhdGUobm90ZXMsIGluc3RydW1lbnRzLCB0YXJnZXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHRyZWJsZV9ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwidHJlYmxlXCIsIGtleXM6IG5vdGVfZGF0YVswXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgdmFyIGJhc3Nfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcImJhc3NcIiwga2V5czogbm90ZV9kYXRhWzNdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICB2YXIgdHJlYmxlX2luc3QgPSBub3RlX2RhdGFbNl1cclxuICAgICAgICB2YXIgYmFzc19pbnN0ID0gbm90ZV9kYXRhWzddXHJcblxyXG4gICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICBmdW5jdGlvbiB2aWVyZWVuKG51bSwgcG9zKSB7IHJldHVybiBuZXcgVkYuRnJldEhhbmRGaW5nZXIobnVtKS5zZXRQb3NpdGlvbihwb3MpOyB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMV0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbMV1baV0pKTtcclxuICAgICAgICAgICAgdHJlYmxlX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4odHJlYmxlX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdHJlYmxlX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVszXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbNF1baV0pKTtcclxuICAgICAgICAgICAgYmFzc19ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKGJhc3NfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgICAgICBpZiAobm90ZV9kYXRhWzVdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICBiYXNzX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9GdW5rdGlvIGpvbGxhIHBpaXJyZXTDpMOkbiBudW90aW4gdmllcmVlblxyXG4gICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgcmV0dXJuIG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7IH1cclxuICAgICAgICBcclxuICAgICAgICAvL0R1dW5hdGFhbiBzb2ludHUsIGpvc3NhIGtha3NpIG51b3R0aWE6XHJcbiAgICAgICAgdmFyIG5ld19ub3RlID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogW1wiYS8zXCIsIFwiZC80XCJdLCBkdXJhdGlvbjogXCJoXCIgfSlcclxuICAgICAgICBcclxuICAgICAgICAvL1ZhaWhkZXRhYW4geWxlbW3DpG4gPTEgdsOkcmkgcHVuYWlzZWtzaVxyXG4gICAgICAgIG5ld19ub3RlLnNldEtleVN0eWxlKDEsIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICBuZXdfbm90ZS5hZGRNb2RpZmllcigxLCB2aWVyZWVuKCdTb2l0aW4nLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgbmV3X25vdGUuYWRkTW9kaWZpZXIoMCwgdmllcmVlbignVG9pbmVuIHNvaXRpbicsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICBuZXdfbm90ZS5hZGRBY2NpZGVudGFsKDEsIG5ldyBWRi5BY2NpZGVudGFsKFwiblwiKSlcclxuICAgICAgICBuZXdfbm90ZS5hZGRBY2NpZGVudGFsKDAsIG5ldyBWRi5BY2NpZGVudGFsKFwiYlwiKSlcclxuXHJcbiAgICAgICAgLy9MaXPDpHTDpMOkbiBsaXN0YWFuXHJcbiAgICAgICAgdmFyIG5ld19ub3RlcyA9IFtcclxuICAgICAgICAgICAgbmV3X25vdGUsXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgdm9pY2UgaW4gNC80IGFuZCBhZGQgdGhlIG5vdGVzIGZyb20gYWJvdmVcclxuICAgICAgICB2YXIgdm9pY2VfdCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pO1xyXG4gICAgICAgIHZhciB2b2ljZV9iID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgdm9pY2VfdC5hZGRUaWNrYWJsZXMoW3RyZWJsZV9ub3Rlc10pO1xyXG4gICAgICAgIHZvaWNlX2IuYWRkVGlja2FibGVzKFtiYXNzX25vdGVzXSk7XHJcbiAgICBcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RdKS5mb3JtYXQoW3ZvaWNlX3RdLCAyNTApO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfYl0pLmZvcm1hdChbdm9pY2VfYl0sIDI1MCk7XHJcbiAgICAgICAgdm9pY2VfdC5kcmF3KGNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgIHZvaWNlX2IuZHJhdyhjb250ZXh0LCBzdGF2ZV9iKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vdGVzPVtcImM0XCIsIFwiZiM3XCIsIFwiZTFcIiwgXCJnYjNcIl1cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhwcm9wcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9WydjNCddXHJcbiAgICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgQ2xpY2sgbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxQaWFub3JvbGxcclxuICAgICAgbm90ZXM9e1tcImM0XCIsIFwiZiM3XCIsIFwiZTFcIiwgXCJnYjNcIl19XHJcbiAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNYXNraW5nXHJcbiAgICAgIGlkPSdtYXNraW5nX25vdGVzdGFmZidcclxuICAgICAgbWFza2luZ19ub3RldmFsdWVzPXtbNTAsIDY3LCA4MCwgOTQsIDEwMF19XHJcbiAgICAgIG1hc2tpbmdfbm90ZXNpemVzPXtbODAsIDcwLCA3MCwgNzAsIDcwXX1cclxuICAgICAgbWFza2luZ19jb2xvcnM9e1sncmVkJywgJ3JlZCcsICdyZWQnLCAncmVkJywgJ3JlZCddfVxyXG4gICAgICB0YXJnZXRfbm90ZXZhbHVlcz17WzYwLCA2NCwgNjcsIDcyLCA3OV19XHJcbiAgICAgIHRhcmdldF9ub3Rlc2l6ZXM9e1s0MCwgNDAsIDQwLCA0MCwgNDBdfVxyXG4gICAgICB0YXJnZXRfY29sb3JzPXtbJ2dyZWVuJywgJ2dyZWVuJywgJ2dyZWVuJywgJ2dyZWVuJywgJ2dyZWVuJ119XHJcbiAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8T3JjaGVzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgaWQ9eydpZDEnfVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9e3RoaXMubm90ZXN9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1szXX1cclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRzPXtbJ3Zpb2xpbicsICdjbGFyaW5ldCcsICdiYXNzb29uJywgJ3Ryb21ib25lJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIGlkPXsnaWQyJ31cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbXCJjM1wiXX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD17W119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17WycnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2NvcmVDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3RhdmVcclxuICAgICAgICAgICAgICAgIG5vdGVzPScoYzQgZTQgZzQpL2gsIGE0W2NsZWY9XCJiYXNzXCJdJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXN0XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzRcIiwgXCJmIzdcIiwgXCJlMVwiLCBcImdiM1wiXX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD17WzNdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1sndmlvbGluJywgJ2NsYXJpbmV0JywgJ2Jhc3Nvb24nLCAndHJvbWJvbmUnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        notes: ["c4", "f#7", "e1", "gb3"],
        target: [3],
        instruments: ['violin', 'clarinet', 'bassoon', 'trombone']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        notes: ["c3"],
        target: [],
        instruments: ['violin']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwidGFyZ2V0IiwiaW5zdHJ1bWVudHMiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJjb25uZWN0b3IzIiwiQlJBQ0tFVCIsInNlcGFyYXRlIiwiaSIsInRyZWJsZV9uIiwidHJlYmxlX2EiLCJ0cmVibGVfdCIsInRyZWJsZV9pIiwiYmFzc19uIiwiYmFzc19hIiwiYmFzc190IiwiYmFzc19pIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJuZXdfYWNjaWRlbnRpYWwiLCJlbnRyeSIsIm5ld19ub3RlIiwiaW5zdCIsInRndCIsImxlbmd0aCIsImNvbmNhdCIsInBhcnNlSW50IiwicHVzaCIsImoiLCJub3RlX2RhdGEiLCJ0cmVibGVfbm90ZXMiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwiYmFzc19ub3RlcyIsInRyZWJsZV9pbnN0IiwiYmFzc19pbnN0IiwidmllcmVlbiIsIm51bSIsInBvcyIsIkZyZXRIYW5kRmluZ2VyIiwic2V0UG9zaXRpb24iLCJhZGRBY2NpZGVudGFsIiwiQWNjaWRlbnRhbCIsImFkZE1vZGlmaWVyIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIlJJR0hUIiwic2V0S2V5U3R5bGUiLCJmaWxsU3R5bGUiLCJuZXdfbm90ZXMiLCJ2b2ljZV90IiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwidm9pY2VfYiIsImFkZFRpY2thYmxlcyIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJyZWZzIiwib3V0ZXIiLCJhcHBlbmRDaGlsZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiQXBwIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFDTUMsSTs7Ozs7QUFFRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFIZTtBQVFsQjs7Ozt3Q0FFbUI7QUFDaEIsVUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFEZ0IsVUFFVEMsS0FGUyxHQUVBLEtBQUtQLEtBRkwsQ0FFVE8sS0FGUztBQUFBLFVBR1RDLE1BSFMsR0FHQyxLQUFLUixLQUhOLENBR1RRLE1BSFM7QUFBQSxVQUlUQyxXQUpTLEdBSU0sS0FBS1QsS0FKWCxDQUlUUyxXQUpTO0FBTWhCLFVBQUlDLFFBQVEsR0FBRyxJQUFJZCxFQUFFLENBQUNlLFFBQVAsQ0FBZ0JQLFlBQWhCLEVBQThCUixFQUFFLENBQUNlLFFBQUgsQ0FBWUMsUUFBWixDQUFxQkMsR0FBbkQsQ0FBZjtBQUNBSCxjQUFRLENBQUNJLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxVQUFJQyxPQUFPLEdBQUdMLFFBQVEsQ0FBQ00sVUFBVCxFQUFkLENBUmdCLENB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LEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsS0FBcEIsQ0FEUDtBQUVBLGNBQU0sRUFBRSxDQUFDLENBQUQsQ0FGUjtBQUdBLG1CQUFXLEVBQUUsQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixTQUF2QixFQUFrQyxVQUFsQztBQUhiLFFBREosZUFNSSwyREFBQyxrREFBRDtBQUNBLGFBQUssRUFBRSxDQUFDLElBQUQsQ0FEUDtBQUVBLGNBQU0sRUFBRSxFQUZSO0FBR0EsbUJBQVcsRUFBRSxDQUFDLFFBQUQ7QUFIYixRQU5KLGVBV0ksMkRBQUMsbURBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtGO0FBRG5CLFNBRVEsS0FBSzlGLEtBRmIsRUFYSixlQWVJLDJEQUFDLDBDQUFEO0FBQ0EsYUFBSyxFQUFDO0FBRE4sUUFmSixlQWtCSSwyREFBQyxJQUFEO0FBQ0EsYUFBSyxFQUFFLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxJQUFkLEVBQW9CLEtBQXBCLENBRFA7QUFFQSxjQUFNLEVBQUUsQ0FBQyxDQUFELENBRlI7QUFHQSxtQkFBVyxFQUFFLENBQUMsUUFBRCxFQUFXLFVBQVgsRUFBdUIsU0FBdkIsRUFBa0MsVUFBbEM7QUFIYixRQWxCSixDQURKO0FBMkJIOzs7O0VBMUNhMkYsK0M7O0FBNkNIQyxrRUFBZixFIiwiZmlsZSI6IjMyYzEyMGItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcblxyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCwgU3RhdmUsIE9yY2hlc3RyYXRpb24gfSBmcm9tICcuLi9saWInO1xyXG5cclxuXHJcbmNvbnN0IFZGID0gVmV4LkZsb3c7XHJcbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7bm90ZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7dGFyZ2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2luc3RydW1lbnRzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKDIwMCwgNDAwKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgLy9EbyBUcmVibGUgYW5kIEJhc3MgQ2xlZnNcclxuXHJcbiAgICAgICAgdmFyIHN0YXZlX3QgPSBuZXcgVkYuU3RhdmUoMjAsIDExMCwgMjAwKTtcclxuICAgICAgICBzdGF2ZV90LmFkZENsZWYoXCJ0cmVibGVcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICBzdGF2ZV90LnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG5cclxuICAgICAgICB2YXIgc3RhdmVfYiA9IG5ldyBWRi5TdGF2ZSgyMCwgMjAwLCAyMDApO1xyXG4gICAgICAgIHN0YXZlX2IuYWRkQ2xlZihcImJhc3NcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICBzdGF2ZV9iLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRG8gY29ubmVjdG9yc1xyXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfTEVGVCk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICAvLyB2YXIgY29ubmVjdG9yMiA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAvL2Nvbm5lY3RvcjIuZHJhdygpO1xyXG4gICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAvL2Nvbm5lY3RvcjMuc2V0VGV4dCgnT3JjaC4nKTtcclxuICAgICAgICBjb25uZWN0b3IzLmRyYXcoKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKG5vdGVzLCBpbnN0cnVtZW50cyx0YXJnZXQpIHtcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfbiA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX2EgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV90ID0gW107XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfaSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19uID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX2EgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfdCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19pID0gW107XHJcbiAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICB2YXIgbmV3X29jdGF2ZTtcclxuICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbDtcclxuICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICB2YXIgbmV3X25vdGU7XHJcbiAgICAgICAgICAgIHZhciBpbnN0O1xyXG4gICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgIGZvciAoaT0wOyBpPG5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeSA9IG5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaW5zdCA9IGluc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICBuZXdfa2V5ID0gZW50cnlbMF07XHJcbiAgICAgICAgICAgICAgICBuZXdfb2N0YXZlID0gZW50cnlbZW50cnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdfYWNjaWRlbnRpYWwgPSBlbnRyeVsxXTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgICAgIHRndCA9IHRhcmdldFtpXTtcclxuICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobmV3X29jdGF2ZSkgPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICB0cmVibGVfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgIHRyZWJsZV9pLnB1c2goaW5zdClcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgLy9BbGxhIG9sZXZhIG90dGFhIHZhaW4gZWthbiBodW9taW9vbiwgdGFya2lzdGEhIVxyXG4gICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbal09PT1pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB0cmVibGVfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgYmFzc19uLnB1c2gobmV3X25vdGUpO1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX2kucHVzaChpbnN0KTtcclxuICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhc3NfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFt0cmVibGVfbiwgdHJlYmxlX2EsIHRyZWJsZV90LCBiYXNzX24sIGJhc3NfYSwgYmFzc190LCB0cmVibGVfaSwgYmFzc19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBub3RlX2RhdGEgPSBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsIHRhcmdldClcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdHJlYmxlX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogbm90ZV9kYXRhWzBdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICB2YXIgYmFzc19ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwiYmFzc1wiLCBrZXlzOiBub3RlX2RhdGFbM10sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgIHZhciB0cmVibGVfaW5zdCA9IG5vdGVfZGF0YVs2XVxyXG4gICAgICAgIHZhciBiYXNzX2luc3QgPSBub3RlX2RhdGFbN11cclxuXHJcbiAgICAgICAgLy9GdW5rdGlvIGpvbGxhIHBpaXJyZXTDpMOkbiBudW90aW4gdmllcmVlblxyXG4gICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgcmV0dXJuIG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7IH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVsxXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVsxXVtpXSkpO1xyXG4gICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkTW9kaWZpZXIoaSwgdmllcmVlbih0cmVibGVfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgICAgICBpZiAobm90ZV9kYXRhWzJdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYmFzc19ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVs0XVtpXSkpO1xyXG4gICAgICAgICAgICBiYXNzX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4oYmFzc19pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgIGlmIChub3RlX2RhdGFbNV1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgIGJhc3Nfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0Z1bmt0aW8gam9sbGEgcGlpcnJldMOkw6RuIG51b3RpbiB2aWVyZWVuXHJcbiAgICAgICAgZnVuY3Rpb24gdmllcmVlbihudW0sIHBvcykgeyByZXR1cm4gbmV3IFZGLkZyZXRIYW5kRmluZ2VyKG51bSkuc2V0UG9zaXRpb24ocG9zKTsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRHV1bmF0YWFuIHNvaW50dSwgam9zc2Ega2Frc2kgbnVvdHRpYTpcclxuICAgICAgICB2YXIgbmV3X25vdGUgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBbXCJhLzNcIiwgXCJkLzRcIl0sIGR1cmF0aW9uOiBcImhcIiB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVmFpaGRldGFhbiB5bGVtbcOkbiA9MSB2w6RyaSBwdW5haXNla3NpXHJcbiAgICAgICAgbmV3X25vdGUuc2V0S2V5U3R5bGUoMSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgIG5ld19ub3RlLmFkZE1vZGlmaWVyKDEsIHZpZXJlZW4oJ1NvaXRpbicsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICBuZXdfbm90ZS5hZGRNb2RpZmllcigwLCB2aWVyZWVuKCdUb2luZW4gc29pdGluJywgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgIG5ld19ub3RlLmFkZEFjY2lkZW50YWwoMSwgbmV3IFZGLkFjY2lkZW50YWwoXCJuXCIpKVxyXG4gICAgICAgIG5ld19ub3RlLmFkZEFjY2lkZW50YWwoMCwgbmV3IFZGLkFjY2lkZW50YWwoXCJiXCIpKVxyXG5cclxuICAgICAgICAvL0xpc8OkdMOkw6RuIGxpc3RhYW5cclxuICAgICAgICB2YXIgbmV3X25vdGVzID0gW1xyXG4gICAgICAgICAgICBuZXdfbm90ZSxcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAvLyBDcmVhdGUgYSB2b2ljZSBpbiA0LzQgYW5kIGFkZCB0aGUgbm90ZXMgZnJvbSBhYm92ZVxyXG4gICAgICAgIHZhciB2b2ljZV90ID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgdmFyIHZvaWNlX2IgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICB2b2ljZV90LmFkZFRpY2thYmxlcyhbdHJlYmxlX25vdGVzXSk7XHJcbiAgICAgICAgdm9pY2VfYi5hZGRUaWNrYWJsZXMoW2Jhc3Nfbm90ZXNdKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfdF0pLmZvcm1hdChbdm9pY2VfdF0sIDI1MCk7XHJcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV9iXSkuZm9ybWF0KFt2b2ljZV9iXSwgMjUwKTtcclxuICAgICAgICB2b2ljZV90LmRyYXcoY29udGV4dCwgc3RhdmVfdCk7XHJcbiAgICAgICAgdm9pY2VfYi5kcmF3KGNvbnRleHQsIHN0YXZlX2IpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlci5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPVwib3V0ZXJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbXCJjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtbM119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17Wyd2aW9saW4nLCAnY2xhcmluZXQnLCAnYmFzc29vbicsICd0cm9tYm9uZSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxPcmNoZXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1sndmlvbGluJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNjb3JlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nKGM0IGU0IGc0KS9oLCBhNFtjbGVmPVwiYmFzc1wiXSdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGVzdFxyXG4gICAgICAgICAgICAgICAgbm90ZXM9e1tcImM0XCIsIFwiZiM3XCIsIFwiZTFcIiwgXCJnYjNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1szXX1cclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRzPXtbJ3Zpb2xpbicsICdjbGFyaW5ldCcsICdiYXNzb29uJywgJ3Ryb21ib25lJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
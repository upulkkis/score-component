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
      }, "Click me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwidGFyZ2V0IiwiaW5zdHJ1bWVudHMiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJjb25uZWN0b3IzIiwiQlJBQ0tFVCIsInNlcGFyYXRlIiwiaSIsInRyZWJsZV9uIiwidHJlYmxlX2EiLCJ0cmVibGVfdCIsInRyZWJsZV9pIiwiYmFzc19uIiwiYmFzc19hIiwiYmFzc190IiwiYmFzc19pIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJuZXdfYWNjaWRlbnRpYWwiLCJlbnRyeSIsIm5ld19ub3RlIiwiaW5zdCIsInRndCIsImxlbmd0aCIsImNvbmNhdCIsInBhcnNlSW50IiwicHVzaCIsImoiLCJub3RlX2RhdGEiLCJ0cmVibGVfbm90ZXMiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwiYmFzc19ub3RlcyIsInRyZWJsZV9pbnN0IiwiYmFzc19pbnN0IiwidmllcmVlbiIsIm51bSIsInBvcyIsIkZyZXRIYW5kRmluZ2VyIiwic2V0UG9zaXRpb24iLCJhZGRBY2NpZGVudGFsIiwiQWNjaWRlbnRhbCIsImFkZE1vZGlmaWVyIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIlJJR0hUIiwic2V0S2V5U3R5bGUiLCJmaWxsU3R5bGUiLCJuZXdfbm90ZXMiLCJ2b2ljZV90IiwiVm9pY2UiLCJudW1fYmVhdHMiLCJiZWF0X3ZhbHVlIiwidm9pY2VfYiIsImFkZFRpY2thYmxlcyIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJyZWZzIiwib3V0ZXIiLCJhcHBlbmRDaGlsZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiQXBwIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFDTUMsSTs7Ozs7QUFFRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFIZTtBQVFsQjs7Ozt3Q0FFbUI7QUFDaEIsVUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFEZ0IsVUFFVEMsS0FGUyxHQUVBLEtBQUtQLEtBRkwsQ0FFVE8sS0FGUztBQUFBLFVBR1RDLE1BSFMsR0FHQyxLQUFLUixLQUhOLENBR1RRLE1BSFM7QUFBQSxVQUlUQyxXQUpTLEdBSU0sS0FBS1QsS0FKWCxDQUlUUyxXQUpTO0FBTWhCLFVBQUlDLFFBQVEsR0FBRyxJQUFJZCxFQUFFLENBQUNlLFFBQVAsQ0FBZ0JQLFlBQWhCLEVBQThCUixFQUFFLENBQUNlLFFBQUgsQ0FBWUMsUUFBWixDQUFxQkMsR0FBbkQsQ0FBZjtBQUNBSCxjQUFRLENBQUNJLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxVQUFJQyxPQUFPLEdBQUdM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RUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7Z0NBRVdqRyxLLEVBQU87QUFDZm1HLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0IsSUFBeEI7QUFDQSxXQUFLN0YsS0FBTCxHQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7Ozs2QkFFTTtBQUNMLDBCQUNJLHFGQUNJO0FBQVEsZUFBTyxFQUFFLEtBQUs4RjtBQUF0QixvQkFESixlQUlJLDJEQUFDLGtEQUFEO0FBQ0EsVUFBRSxFQUFFLEtBREo7QUFFQSxhQUFLLEVBQUUsS0FBSzlGLEtBRlo7QUFHQSxjQUFNLEVBQUUsQ0FBQyxDQUFELENBSFI7QUFJQSxtQkFBVyxFQUFFLENBQUMsUUFBRCxFQUFXLFVBQVgsRUFBdUIsU0FBdkIsRUFBa0MsVUFBbEM7QUFKYixRQUpKLGVBVUksMkRBQUMsa0RBQUQ7QUFDQSxVQUFFLEVBQUUsS0FESjtBQUVBLGFBQUssRUFBRSxDQUFDLElBQUQsQ0FGUDtBQUdBLGNBQU0sRUFBRSxFQUhSO0FBSUEsbUJBQVcsRUFBRSxDQUFDLEVBQUQ7QUFKYixRQVZKLGVBZ0JJLDJEQUFDLG1EQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLd0Y7QUFEbkIsU0FFUSxLQUFLOUYsS0FGYixFQWhCSixlQW9CSSwyREFBQywwQ0FBRDtBQUNBLGFBQUssRUFBQztBQUROLFFBcEJKLGVBdUJJLDJEQUFDLElBQUQ7QUFDQSxhQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsS0FBcEIsQ0FEUDtBQUVBLGNBQU0sRUFBRSxDQUFDLENBQUQsQ0FGUjtBQUdBLG1CQUFXLEVBQUUsQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixTQUF2QixFQUFrQyxVQUFsQztBQUhiLFFBdkJKLENBREo7QUFnQ0g7Ozs7RUFyRGEyRiwrQzs7QUF3REhDLGtFQUFmLEUiLCJmaWxlIjoiNzlhMzY4YS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuXHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50LCBTdGF2ZSwgT3JjaGVzdHJhdGlvbiB9IGZyb20gJy4uL2xpYic7XHJcblxyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtub3Rlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHt0YXJnZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7aW5zdHJ1bWVudHN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICByZW5kZXJlci5yZXNpemUoMjAwLCA0MDApO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG5cclxuICAgICAgICAvL0RvIFRyZWJsZSBhbmQgQmFzcyBDbGVmc1xyXG5cclxuICAgICAgICB2YXIgc3RhdmVfdCA9IG5ldyBWRi5TdGF2ZSgyMCwgMTEwLCAyMDApO1xyXG4gICAgICAgIHN0YXZlX3QuYWRkQ2xlZihcInRyZWJsZVwiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgIHN0YXZlX3Quc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcblxyXG4gICAgICAgIHZhciBzdGF2ZV9iID0gbmV3IFZGLlN0YXZlKDIwLCAyMDAsIDIwMCk7XHJcbiAgICAgICAgc3RhdmVfYi5hZGRDbGVmKFwiYmFzc1wiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgIHN0YXZlX2Iuc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9EbyBjb25uZWN0b3JzXHJcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIC8vIHZhciBjb25uZWN0b3IyID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9SSUdIVCk7XHJcbiAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIC8vY29ubmVjdG9yMi5kcmF3KCk7XHJcbiAgICAgICAgdmFyIGNvbm5lY3RvcjMgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgY29ubmVjdG9yMy5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIC8vY29ubmVjdG9yMy5zZXRUZXh0KCdPcmNoLicpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuZHJhdygpO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUobm90ZXMsIGluc3RydW1lbnRzLHRhcmdldCkge1xyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV9uID0gW107XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfYSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX3QgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV9pID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX24gPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfYSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc190ID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX2kgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG5ld19rZXk7XHJcbiAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlO1xyXG4gICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsO1xyXG4gICAgICAgICAgICB2YXIgZW50cnk7XHJcbiAgICAgICAgICAgIHZhciBuZXdfbm90ZTtcclxuICAgICAgICAgICAgdmFyIGluc3Q7XHJcbiAgICAgICAgICAgIHZhciB0Z3RcclxuICAgICAgICAgICAgZm9yIChpPTA7IGk8bm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5ID0gbm90ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpbnN0ID0gaW5zdHJ1bWVudHNbaV1cclxuICAgICAgICAgICAgICAgIG5ld19rZXkgPSBlbnRyeVswXTtcclxuICAgICAgICAgICAgICAgIG5ld19vY3RhdmUgPSBlbnRyeVtlbnRyeS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5WzFdOyBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIG5ld19ub3RlID0gbmV3X2tleS5jb25jYXQoXCIvXCIsbmV3X29jdGF2ZSlcclxuICAgICAgICAgICAgICAgdGd0ID0gdGFyZ2V0W2ldO1xyXG4gICAgICAgICAgICAgIGlmIChwYXJzZUludChuZXdfb2N0YXZlKSA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyZWJsZV9uLnB1c2gobmV3X25vdGUpO1xyXG4gICAgICAgICAgICAgICAgICB0cmVibGVfYS5wdXNoKG5ld19hY2NpZGVudGlhbClcclxuICAgICAgICAgICAgICAgICAgdHJlYmxlX2kucHVzaChpbnN0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy9Uw6RsbMOkIGthdHNvdGFhbiBvbmtvIGp1dXJpIHTDpG3DpCB0YXJnZXRsaXN0YWxsYVxyXG4gICAgICAgICAgICAgICAgICAvL0FsbGEgb2xldmEgb3R0YWEgdmFpbiBla2FuIGh1b21pb29uLCB0YXJraXN0YSEhXHJcbiAgICAgICAgICAgICAgICAgIHZhciB0Z3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Z3Q9MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIHRyZWJsZV90LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGJhc3NfYS5wdXNoKG5ld19hY2NpZGVudGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgIGJhc3NfaS5wdXNoKGluc3QpO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbal09PT1pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFzc190LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW3RyZWJsZV9uLCB0cmVibGVfYSwgdHJlYmxlX3QsIGJhc3NfbiwgYmFzc19hLCBiYXNzX3QsIHRyZWJsZV9pLCBiYXNzX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG5vdGVfZGF0YSA9IHNlcGFyYXRlKG5vdGVzLCBpbnN0cnVtZW50cywgdGFyZ2V0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmVibGVfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBub3RlX2RhdGFbMF0sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgIHZhciBiYXNzX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJiYXNzXCIsIGtleXM6IG5vdGVfZGF0YVszXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgdmFyIHRyZWJsZV9pbnN0ID0gbm90ZV9kYXRhWzZdXHJcbiAgICAgICAgdmFyIGJhc3NfaW5zdCA9IG5vdGVfZGF0YVs3XVxyXG5cclxuICAgICAgICAvL0Z1bmt0aW8gam9sbGEgcGlpcnJldMOkw6RuIG51b3RpbiB2aWVyZWVuXHJcbiAgICAgICAgZnVuY3Rpb24gdmllcmVlbihudW0sIHBvcykgeyByZXR1cm4gbmV3IFZGLkZyZXRIYW5kRmluZ2VyKG51bSkuc2V0UG9zaXRpb24ocG9zKTsgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzFdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdHJlYmxlX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzFdW2ldKSk7XHJcbiAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKHRyZWJsZV9pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgIGlmIChub3RlX2RhdGFbMl1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiBcInJlZFwifSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbM10ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBiYXNzX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzRdW2ldKSk7XHJcbiAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkTW9kaWZpZXIoaSwgdmllcmVlbihiYXNzX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVs1XVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgYmFzc19ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiBcInJlZFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICBmdW5jdGlvbiB2aWVyZWVuKG51bSwgcG9zKSB7IHJldHVybiBuZXcgVkYuRnJldEhhbmRGaW5nZXIobnVtKS5zZXRQb3NpdGlvbihwb3MpOyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9EdXVuYXRhYW4gc29pbnR1LCBqb3NzYSBrYWtzaSBudW90dGlhOlxyXG4gICAgICAgIHZhciBuZXdfbm90ZSA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwidHJlYmxlXCIsIGtleXM6IFtcImEvM1wiLCBcImQvNFwiXSwgZHVyYXRpb246IFwiaFwiIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9WYWloZGV0YWFuIHlsZW1tw6RuID0xIHbDpHJpIHB1bmFpc2Vrc2lcclxuICAgICAgICBuZXdfbm90ZS5zZXRLZXlTdHlsZSgxLCB7ZmlsbFN0eWxlOiBcInJlZFwifSk7XHJcbiAgICAgICAgbmV3X25vdGUuYWRkTW9kaWZpZXIoMSwgdmllcmVlbignU29pdGluJywgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgIG5ld19ub3RlLmFkZE1vZGlmaWVyKDAsIHZpZXJlZW4oJ1RvaW5lbiBzb2l0aW4nLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgbmV3X25vdGUuYWRkQWNjaWRlbnRhbCgxLCBuZXcgVkYuQWNjaWRlbnRhbChcIm5cIikpXHJcbiAgICAgICAgbmV3X25vdGUuYWRkQWNjaWRlbnRhbCgwLCBuZXcgVkYuQWNjaWRlbnRhbChcImJcIikpXHJcblxyXG4gICAgICAgIC8vTGlzw6R0w6TDpG4gbGlzdGFhblxyXG4gICAgICAgIHZhciBuZXdfbm90ZXMgPSBbXHJcbiAgICAgICAgICAgIG5ld19ub3RlLFxyXG4gICAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICAgIC8vIENyZWF0ZSBhIHZvaWNlIGluIDQvNCBhbmQgYWRkIHRoZSBub3RlcyBmcm9tIGFib3ZlXHJcbiAgICAgICAgdmFyIHZvaWNlX3QgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICB2YXIgdm9pY2VfYiA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pO1xyXG4gICAgICAgIHZvaWNlX3QuYWRkVGlja2FibGVzKFt0cmVibGVfbm90ZXNdKTtcclxuICAgICAgICB2b2ljZV9iLmFkZFRpY2thYmxlcyhbYmFzc19ub3Rlc10pO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV90XSkuZm9ybWF0KFt2b2ljZV90XSwgMjUwKTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX2JdKS5mb3JtYXQoW3ZvaWNlX2JdLCAyNTApO1xyXG4gICAgICAgIHZvaWNlX3QuZHJhdyhjb250ZXh0LCBzdGF2ZV90KTtcclxuICAgICAgICB2b2ljZV9iLmRyYXcoY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWZzLm91dGVyLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz1bXCJjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2socHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpczonLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPVsnYzQnXVxyXG4gICAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIENsaWNrIG1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIGlkPXsnaWQxJ31cclxuICAgICAgICAgICAgICAgIG5vdGVzPXt0aGlzLm5vdGVzfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtbM119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17Wyd2aW9saW4nLCAnY2xhcmluZXQnLCAnYmFzc29vbicsICd0cm9tYm9uZSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxPcmNoZXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17J2lkMid9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1snJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNjb3JlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nKGM0IGU0IGc0KS9oLCBhNFtjbGVmPVwiYmFzc1wiXSdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGVzdFxyXG4gICAgICAgICAgICAgICAgbm90ZXM9e1tcImM0XCIsIFwiZiM3XCIsIFwiZTFcIiwgXCJnYjNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1szXX1cclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRzPXtbJ3Zpb2xpbicsICdjbGFyaW5ldCcsICdiYXNzb29uJywgJ3Ryb21ib25lJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
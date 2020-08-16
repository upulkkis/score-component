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
      renderer.resize(200, 200);
      var context = renderer.getContext();
      var stave_t = new VF.Stave(10, 10, 300);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(context).draw();
      var stave_b = new VF.Stave(10, 100, 300);
      stave_b.addClef("bass"); //.addTimeSignature("4/4");

      stave_b.setContext(context).draw();

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Test, {
        notes: ["c4", "f#4", "e3", "gb3"],
        target: [2, 3],
        instruments: ['violin mf', 'clarinet', 'bassoon', 'trombone']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["ScoreComponent"], _extends({
        setProps: this.setProps
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Stave"], {
        notes: "(c4 e4 g4)/h, a4[clef=\"bass\"]"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        notes: "d#4/h, d#4[clef=\"bass\"]"
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwidGFyZ2V0IiwiaW5zdHJ1bWVudHMiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJzZXBhcmF0ZSIsImkiLCJ0cmVibGVfbiIsInRyZWJsZV9hIiwidHJlYmxlX3QiLCJ0cmVibGVfaSIsImJhc3NfbiIsImJhc3NfYSIsImJhc3NfdCIsImJhc3NfaSIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwiZW50cnkiLCJuZXdfbm90ZSIsImluc3QiLCJ0Z3QiLCJsZW5ndGgiLCJjb25jYXQiLCJwYXJzZUludCIsInB1c2giLCJqIiwibm90ZV9kYXRhIiwidHJlYmxlX25vdGVzIiwiU3RhdmVOb3RlIiwiY2xlZiIsImtleXMiLCJkdXJhdGlvbiIsImJhc3Nfbm90ZXMiLCJ0cmVibGVfaW5zdCIsImJhc3NfaW5zdCIsInZpZXJlZW4iLCJudW0iLCJwb3MiLCJGcmV0SGFuZEZpbmdlciIsInNldFBvc2l0aW9uIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJhZGRNb2RpZmllciIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJSSUdIVCIsInNldEtleVN0eWxlIiwiZmlsbFN0eWxlIiwibmV3X25vdGVzIiwidm9pY2VfdCIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsInZvaWNlX2IiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwicmVmcyIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsIkFwcCIsInZhbHVlIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBQ01DLEk7Ozs7O0FBRUYsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBSGU7QUFRbEI7Ozs7d0NBRW1CO0FBQ2hCLFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBRGdCLFVBRVRDLEtBRlMsR0FFQSxLQUFLUCxLQUZMLENBRVRPLEtBRlM7QUFBQSxVQUdUQyxNQUhTLEdBR0MsS0FBS1IsS0FITixDQUdUUSxNQUhTO0FBQUEsVUFJVEMsV0FKUyxHQUlNLEtBQUtULEtBSlgsQ0FJVFMsV0FKUztBQU1oQixVQUFJQyxRQUFRLEdBQUcsSUFBSWQsRUFBRSxDQUFDZSxRQUFQLENBQWdCUCxZQUFoQixFQUE4QlIsRUFBRSxDQUFDZSxRQUFILENBQVlDLFFBQVosQ0FBcUJDLEdBQW5ELENBQWY7QUFDQUgsY0FBUSxDQUFDSSxNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHTCxRQUFRLENBQUNNLFVBQVQsRUFBZDtBQUVBLFVBQUlDLE9BQU8sR0FBRyxJQUFJckIsRUFBRSxDQUFDc0IsS0FBUCxDQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsR0FBckIsQ0FBZDtBQUNBRCxh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QUFFLENBSGE7QUFJM0JDLGlCQUFPLEVBQUU7QUFKa0I7QUFBeEIsUUFBUDtBQU9IOzs7O0VBNUpjQywrQzs7SUFnS2JDLEc7Ozs7O0FBRUYsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFdBQUtyRixLQUFMLEdBQWE7QUFDVHNGLFdBQUssRUFBRTtBQURFLEtBQWI7QUFHQSxXQUFLQyxRQUFMLEdBQWdCLE9BQUtBLFFBQUwsQ0FBY0MsSUFBZCxnQ0FBaEI7QUFMVTtBQU1iOzs7OzZCQUVRQyxRLEVBQVU7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0wsMEJBQ0kscUZBQ0ksMkRBQUMsSUFBRDtBQUNBLGFBQUssRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixLQUFwQixDQURQO0FBRUEsY0FBTSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FGUjtBQUdBLG1CQUFXLEVBQUUsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixTQUExQixFQUFxQyxVQUFyQztBQUhiLFFBREosZUFNSSwyREFBQyxtREFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS0Y7QUFEbkIsU0FFUSxLQUFLdkYsS0FGYixFQU5KLGVBVUksMkRBQUMsMENBQUQ7QUFDQSxhQUFLLEVBQUM7QUFETixRQVZKLGVBYUksMkRBQUMsa0RBQUQ7QUFDQSxhQUFLLEVBQUM7QUFETixRQWJKLENBREo7QUFvQkg7Ozs7RUFuQ2FvRiwrQzs7QUFzQ0hDLGtFQUFmLEUiLCJmaWxlIjoiNmE5MDIxMy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuXHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50LCBTdGF2ZSwgT3JjaGVzdHJhdGlvbiB9IGZyb20gJy4uL2xpYic7XHJcblxyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtub3Rlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHt0YXJnZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7aW5zdHJ1bWVudHN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICByZW5kZXJlci5yZXNpemUoMjAwLCAyMDApO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG5cclxuICAgICAgICB2YXIgc3RhdmVfdCA9IG5ldyBWRi5TdGF2ZSgxMCwgMTAsIDMwMCk7XHJcbiAgICAgICAgc3RhdmVfdC5hZGRDbGVmKFwidHJlYmxlXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgc3RhdmVfdC5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXZlX2IgPSBuZXcgVkYuU3RhdmUoMTAsIDEwMCwgMzAwKTtcclxuICAgICAgICBzdGF2ZV9iLmFkZENsZWYoXCJiYXNzXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgc3RhdmVfYi5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX24gPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV9hID0gW107XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfdCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX2kgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfbiA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19hID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX3QgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfaSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbmV3X2tleTtcclxuICAgICAgICAgICAgdmFyIG5ld19vY3RhdmU7XHJcbiAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWw7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeTtcclxuICAgICAgICAgICAgdmFyIG5ld19ub3RlO1xyXG4gICAgICAgICAgICB2YXIgaW5zdDtcclxuICAgICAgICAgICAgdmFyIHRndFxyXG4gICAgICAgICAgICBmb3IgKGk9MDsgaTxub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZW50cnkgPSBub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGluc3QgPSBpbnN0cnVtZW50c1tpXVxyXG4gICAgICAgICAgICAgICAgbmV3X2tleSA9IGVudHJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgbmV3X29jdGF2ZSA9IGVudHJ5W2VudHJ5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gZW50cnlbMV07IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdfYWNjaWRlbnRpYWwgPSBcIm5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICAgICB0Z3QgPSB0YXJnZXRbaV07XHJcbiAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG5ld19vY3RhdmUpID49IDQpIHtcclxuICAgICAgICAgICAgICAgICAgdHJlYmxlX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHRyZWJsZV9hLnB1c2gobmV3X2FjY2lkZW50aWFsKVxyXG4gICAgICAgICAgICAgICAgICB0cmVibGVfaS5wdXNoKGluc3QpXHJcblxyXG4gICAgICAgICAgICAgICAgICAvL1TDpGxsw6Qga2F0c290YWFuIG9ua28ganV1cmkgdMOkbcOkIHRhcmdldGxpc3RhbGxhXHJcbiAgICAgICAgICAgICAgICAgIC8vQWxsYSBvbGV2YSBvdHRhYSB2YWluIGVrYW4gaHVvbWlvb24sIHRhcmtpc3RhISFcclxuICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgdHJlYmxlX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhc3Nfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgYmFzc19hLnB1c2gobmV3X2FjY2lkZW50aWFsKTtcclxuICAgICAgICAgICAgICAgICAgYmFzc19pLnB1c2goaW5zdCk7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB0Z3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Z3Q9MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXNzX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbdHJlYmxlX24sIHRyZWJsZV9hLCB0cmVibGVfdCwgYmFzc19uLCBiYXNzX2EsIGJhc3NfdCwgdHJlYmxlX2ksIGJhc3NfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgbm90ZV9kYXRhID0gc2VwYXJhdGUobm90ZXMsIGluc3RydW1lbnRzLCB0YXJnZXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHRyZWJsZV9ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwidHJlYmxlXCIsIGtleXM6IG5vdGVfZGF0YVswXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgdmFyIGJhc3Nfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcImJhc3NcIiwga2V5czogbm90ZV9kYXRhWzNdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICB2YXIgdHJlYmxlX2luc3QgPSBub3RlX2RhdGFbNl1cclxuICAgICAgICB2YXIgYmFzc19pbnN0ID0gbm90ZV9kYXRhWzddXHJcblxyXG4gICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICBmdW5jdGlvbiB2aWVyZWVuKG51bSwgcG9zKSB7IHJldHVybiBuZXcgVkYuRnJldEhhbmRGaW5nZXIobnVtKS5zZXRQb3NpdGlvbihwb3MpOyB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMV0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbMV1baV0pKTtcclxuICAgICAgICAgICAgdHJlYmxlX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4odHJlYmxlX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdHJlYmxlX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVszXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbNF1baV0pKTtcclxuICAgICAgICAgICAgYmFzc19ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKGJhc3NfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgICAgICBpZiAobm90ZV9kYXRhWzVdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICBiYXNzX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9GdW5rdGlvIGpvbGxhIHBpaXJyZXTDpMOkbiBudW90aW4gdmllcmVlblxyXG4gICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgcmV0dXJuIG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7IH1cclxuICAgICAgICBcclxuICAgICAgICAvL0R1dW5hdGFhbiBzb2ludHUsIGpvc3NhIGtha3NpIG51b3R0aWE6XHJcbiAgICAgICAgdmFyIG5ld19ub3RlID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogW1wiYS8zXCIsIFwiZC80XCJdLCBkdXJhdGlvbjogXCJoXCIgfSlcclxuICAgICAgICBcclxuICAgICAgICAvL1ZhaWhkZXRhYW4geWxlbW3DpG4gPTEgdsOkcmkgcHVuYWlzZWtzaVxyXG4gICAgICAgIG5ld19ub3RlLnNldEtleVN0eWxlKDEsIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICBuZXdfbm90ZS5hZGRNb2RpZmllcigxLCB2aWVyZWVuKCdTb2l0aW4nLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgbmV3X25vdGUuYWRkTW9kaWZpZXIoMCwgdmllcmVlbignVG9pbmVuIHNvaXRpbicsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICBuZXdfbm90ZS5hZGRBY2NpZGVudGFsKDEsIG5ldyBWRi5BY2NpZGVudGFsKFwiblwiKSlcclxuICAgICAgICBuZXdfbm90ZS5hZGRBY2NpZGVudGFsKDAsIG5ldyBWRi5BY2NpZGVudGFsKFwiYlwiKSlcclxuXHJcbiAgICAgICAgLy9MaXPDpHTDpMOkbiBsaXN0YWFuXHJcbiAgICAgICAgdmFyIG5ld19ub3RlcyA9IFtcclxuICAgICAgICAgICAgbmV3X25vdGUsXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgdm9pY2UgaW4gNC80IGFuZCBhZGQgdGhlIG5vdGVzIGZyb20gYWJvdmVcclxuICAgICAgICB2YXIgdm9pY2VfdCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pO1xyXG4gICAgICAgIHZhciB2b2ljZV9iID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgdm9pY2VfdC5hZGRUaWNrYWJsZXMoW3RyZWJsZV9ub3Rlc10pO1xyXG4gICAgICAgIHZvaWNlX2IuYWRkVGlja2FibGVzKFtiYXNzX25vdGVzXSk7XHJcbiAgICBcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RdKS5mb3JtYXQoW3ZvaWNlX3RdLCAyNTApO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfYl0pLmZvcm1hdChbdm9pY2VfYl0sIDI1MCk7XHJcbiAgICAgICAgdm9pY2VfdC5kcmF3KGNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgIHZvaWNlX2IuZHJhdyhjb250ZXh0LCBzdGF2ZV9iKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUZXN0XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzRcIiwgXCJmIzRcIiwgXCJlM1wiLCBcImdiM1wiXX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD17WzIsM119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17Wyd2aW9saW4gbWYnLCAnY2xhcmluZXQnLCAnYmFzc29vbicsICd0cm9tYm9uZSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTY29yZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTdGF2ZVxyXG4gICAgICAgICAgICAgICAgbm90ZXM9JyhjNCBlNCBnNCkvaCwgYTRbY2xlZj1cImJhc3NcIl0nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIG5vdGVzPSdkIzQvaCwgZCM0W2NsZWY9XCJiYXNzXCJdJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
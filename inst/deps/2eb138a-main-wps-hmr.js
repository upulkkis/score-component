webpackHotUpdatescore_component("main",{

/***/ "./src/lib/components/Orchestration.js":
/*!*********************************************!*\
  !*** ./src/lib/components/Orchestration.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orchestration; });
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

var Orchestration = /*#__PURE__*/function (_Component) {
  _inherits(Orchestration, _Component);

  var _super = _createSuper(Orchestration);

  function Orchestration(props) {
    var _this;

    _classCallCheck(this, Orchestration);

    _this = _super.call(this, props);
    _this.notes = 0;
    _this.target = 0;
    _this.instruments = 0;
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Orchestration, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //const svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          notes = _this$props.notes,
          target = _this$props.target,
          instruments = _this$props.instruments,
          setProps = _this$props.setProps;
      var svgContainer = document.getElementById(id);
      this.notes = notes;
      this.target = target;
      this.instruments = instruments;
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
      } // Create a voice in 4/4 and add the notes from above


      if (Array.isArray(note_data[0]) && note_data[0].length) {
        var voice_t = new VF.Voice({
          num_beats: 1,
          beat_value: 4
        });
        voice_t.addTickables([treble_notes]);
        var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], 250);
        voice_t.draw(context, stave_t);
      }

      var voice_b = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });

      if (Array.isArray(note_data[3]) && note_data[3].length) {
        voice_b.addTickables([bass_notes]);
        var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], 250);
        voice_b.draw(context, stave_b);
      } //this.refs.outer.appendChild(svgContainer);

    }
    /*
        componentWillReceiveProps(nextProps) {   
            if (this.notes !== nextProps.notes || this.instruments !== nextProps.instruments || this.target !== nextProps.target){
                this.notes = nextProps.notes
    
            } 
        }
    */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.notes !== nextProps.notes || this.props.instruments !== nextProps.instruments || this.props.target !== nextProps.target;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          notes = _this$props2.notes,
          instruments = _this$props2.instruments,
          target = _this$props2.target;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          display: "inline-block"
        },
        notes: notes,
        instruments: instruments,
        target: target
      });
    }
  }]);

  return Orchestration;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Orchestration.defaultProps = {};
Orchestration.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  notes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  instruments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJPcmNoZXN0cmF0aW9uIiwicHJvcHMiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwic3RhdGUiLCJ4IiwieSIsImlkIiwic2V0UHJvcHMiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzdGF2ZV90IiwiU3RhdmUiLCJhZGRDbGVmIiwic2V0Q29udGV4dCIsImRyYXciLCJzdGF2ZV9iIiwiY29ubmVjdG9yIiwiU3RhdmVDb25uZWN0b3IiLCJzZXRUeXBlIiwidHlwZSIsIlNJTkdMRV9MRUZUIiwiY29ubmVjdG9yMyIsIkJSQUNLRVQiLCJzZXBhcmF0ZSIsImkiLCJ0cmVibGVfbiIsInRyZWJsZV9hIiwidHJlYmxlX3QiLCJ0cmVibGVfaSIsImJhc3NfbiIsImJhc3NfYSIsImJhc3NfdCIsImJhc3NfaSIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwiZW50cnkiLCJuZXdfbm90ZSIsImluc3QiLCJ0Z3QiLCJsZW5ndGgiLCJjb25jYXQiLCJwYXJzZUludCIsInB1c2giLCJqIiwibm90ZV9kYXRhIiwidHJlYmxlX25vdGVzIiwiU3RhdmVOb3RlIiwiY2xlZiIsImtleXMiLCJkdXJhdGlvbiIsImJhc3Nfbm90ZXMiLCJ0cmVibGVfaW5zdCIsImJhc3NfaW5zdCIsInZpZXJlZW4iLCJudW0iLCJwb3MiLCJGcmV0SGFuZEZpbmdlciIsInNldFBvc2l0aW9uIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJhZGRNb2RpZmllciIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJSSUdIVCIsInNldEtleVN0eWxlIiwiZmlsbFN0eWxlIiwiQXJyYXkiLCJpc0FycmF5Iiwidm9pY2VfdCIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsImFkZFRpY2thYmxlcyIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJ2b2ljZV9iIiwibmV4dFByb3BzIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFFcUJDLGE7Ozs7O0FBRWpCLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVcsQ0FBWDtBQUNBLFVBQUtDLE1BQUwsR0FBWSxDQUFaO0FBQ0EsVUFBS0MsV0FBTCxHQUFpQixDQUFqQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBTGU7QUFVbEI7Ozs7d0NBRW1CO0FBRWhCO0FBRmdCLHdCQUdtQyxLQUFLTixLQUh4QztBQUFBLFVBR1RPLEVBSFMsZUFHVEEsRUFIUztBQUFBLFVBR0xOLEtBSEssZUFHTEEsS0FISztBQUFBLFVBR0VDLE1BSEYsZUFHRUEsTUFIRjtBQUFBLFVBR1VDLFdBSFYsZUFHVUEsV0FIVjtBQUFBLFVBR3VCSyxRQUh2QixlQUd1QkEsUUFIdkI7QUFJaEIsVUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JKLEVBQXhCLENBQXJCO0FBQ0EsV0FBS04sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsV0FBS0MsTUFBTCxH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O0FBbEJFLENBQTFCLEMiLCJmaWxlIjoiMmViMTM4YS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFZGID0gVmV4LkZsb3c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmNoZXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPTA7XHJcbiAgICAgICAgdGhpcy50YXJnZXQ9MDtcclxuICAgICAgICB0aGlzLmluc3RydW1lbnRzPTA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge2lkLCBub3RlcywgdGFyZ2V0LCBpbnN0cnVtZW50cywgc2V0UHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBpbnN0cnVtZW50cztcclxuXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICByZW5kZXJlci5yZXNpemUoMjAwLCA0MDApO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG5cclxuICAgICAgICAvL0RvIFRyZWJsZSBhbmQgQmFzcyBDbGVmc1xyXG5cclxuICAgICAgICB2YXIgc3RhdmVfdCA9IG5ldyBWRi5TdGF2ZSgyMCwgMTEwLCAyMDApO1xyXG4gICAgICAgIHN0YXZlX3QuYWRkQ2xlZihcInRyZWJsZVwiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgIHN0YXZlX3Quc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcblxyXG4gICAgICAgIHZhciBzdGF2ZV9iID0gbmV3IFZGLlN0YXZlKDIwLCAyMDAsIDIwMCk7XHJcbiAgICAgICAgc3RhdmVfYi5hZGRDbGVmKFwiYmFzc1wiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgIHN0YXZlX2Iuc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9EbyBjb25uZWN0b3JzXHJcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIC8vIHZhciBjb25uZWN0b3IyID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9SSUdIVCk7XHJcbiAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIC8vY29ubmVjdG9yMi5kcmF3KCk7XHJcbiAgICAgICAgdmFyIGNvbm5lY3RvcjMgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgY29ubmVjdG9yMy5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIC8vY29ubmVjdG9yMy5zZXRUZXh0KCdPcmNoLicpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuZHJhdygpO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUobm90ZXMsIGluc3RydW1lbnRzLHRhcmdldCkge1xyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV9uID0gW107XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfYSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX3QgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV9pID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX24gPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfYSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc190ID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX2kgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG5ld19rZXk7XHJcbiAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlO1xyXG4gICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsO1xyXG4gICAgICAgICAgICB2YXIgZW50cnk7XHJcbiAgICAgICAgICAgIHZhciBuZXdfbm90ZTtcclxuICAgICAgICAgICAgdmFyIGluc3Q7XHJcbiAgICAgICAgICAgIHZhciB0Z3RcclxuICAgICAgICAgICAgZm9yIChpPTA7IGk8bm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5ID0gbm90ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpbnN0ID0gaW5zdHJ1bWVudHNbaV1cclxuICAgICAgICAgICAgICAgIG5ld19rZXkgPSBlbnRyeVswXTtcclxuICAgICAgICAgICAgICAgIG5ld19vY3RhdmUgPSBlbnRyeVtlbnRyeS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5WzFdOyBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIG5ld19ub3RlID0gbmV3X2tleS5jb25jYXQoXCIvXCIsbmV3X29jdGF2ZSlcclxuICAgICAgICAgICAgICAgdGd0ID0gdGFyZ2V0W2ldO1xyXG4gICAgICAgICAgICAgIGlmIChwYXJzZUludChuZXdfb2N0YXZlKSA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyZWJsZV9uLnB1c2gobmV3X25vdGUpO1xyXG4gICAgICAgICAgICAgICAgICB0cmVibGVfYS5wdXNoKG5ld19hY2NpZGVudGlhbClcclxuICAgICAgICAgICAgICAgICAgdHJlYmxlX2kucHVzaChpbnN0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy9Uw6RsbMOkIGthdHNvdGFhbiBvbmtvIGp1dXJpIHTDpG3DpCB0YXJnZXRsaXN0YWxsYVxyXG4gICAgICAgICAgICAgICAgICAvL0FsbGEgb2xldmEgb3R0YWEgdmFpbiBla2FuIGh1b21pb29uLCB0YXJraXN0YSEhXHJcbiAgICAgICAgICAgICAgICAgIHZhciB0Z3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Z3Q9MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIHRyZWJsZV90LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGJhc3NfYS5wdXNoKG5ld19hY2NpZGVudGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgIGJhc3NfaS5wdXNoKGluc3QpO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbal09PT1pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFzc190LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW3RyZWJsZV9uLCB0cmVibGVfYSwgdHJlYmxlX3QsIGJhc3NfbiwgYmFzc19hLCBiYXNzX3QsIHRyZWJsZV9pLCBiYXNzX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgbm90ZV9kYXRhID0gc2VwYXJhdGUobm90ZXMsIGluc3RydW1lbnRzLCB0YXJnZXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHRyZWJsZV9ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwidHJlYmxlXCIsIGtleXM6IG5vdGVfZGF0YVswXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgdmFyIGJhc3Nfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcImJhc3NcIiwga2V5czogbm90ZV9kYXRhWzNdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICB2YXIgdHJlYmxlX2luc3QgPSBub3RlX2RhdGFbNl1cclxuICAgICAgICB2YXIgYmFzc19pbnN0ID0gbm90ZV9kYXRhWzddXHJcblxyXG4gICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICBmdW5jdGlvbiB2aWVyZWVuKG51bSwgcG9zKSB7IHJldHVybiBuZXcgVkYuRnJldEhhbmRGaW5nZXIobnVtKS5zZXRQb3NpdGlvbihwb3MpOyB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMV0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbMV1baV0pKTtcclxuICAgICAgICAgICAgdHJlYmxlX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4odHJlYmxlX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdHJlYmxlX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVszXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbNF1baV0pKTtcclxuICAgICAgICAgICAgYmFzc19ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKGJhc3NfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgICAgICBpZiAobm90ZV9kYXRhWzVdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICBiYXNzX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIC8vIENyZWF0ZSBhIHZvaWNlIGluIDQvNCBhbmQgYWRkIHRoZSBub3RlcyBmcm9tIGFib3ZlXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZV9kYXRhWzBdKSAmJiBub3RlX2RhdGFbMF0ubGVuZ3RoKXtcclxuICAgICAgICAgICAgdmFyIHZvaWNlX3QgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICAgICAgdm9pY2VfdC5hZGRUaWNrYWJsZXMoW3RyZWJsZV9ub3Rlc10pO1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RdKS5mb3JtYXQoW3ZvaWNlX3RdLCAyNTApO1xyXG4gICAgICAgICAgICB2b2ljZV90LmRyYXcoY29udGV4dCwgc3RhdmVfdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdm9pY2VfYiA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVszXSkgJiYgbm90ZV9kYXRhWzNdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHZvaWNlX2IuYWRkVGlja2FibGVzKFtiYXNzX25vdGVzXSk7XHJcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfYl0pLmZvcm1hdChbdm9pY2VfYl0sIDI1MCk7XHJcbiAgICAgICAgICAgIHZvaWNlX2IuZHJhdyhjb250ZXh0LCBzdGF2ZV9iKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgfVxyXG4vKlxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHsgICBcclxuICAgICAgICBpZiAodGhpcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBuZXh0UHJvcHMubm90ZXNcclxuXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuKi9cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkLCBub3RlcywgaW5zdHJ1bWVudHMsIHRhcmdldH09dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD17aWR9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSBub3Rlcz17bm90ZXN9IGluc3RydW1lbnRzPXtpbnN0cnVtZW50c30gdGFyZ2V0PXt0YXJnZXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbk9yY2hlc3RyYXRpb24uZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5PcmNoZXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBub3RlczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBpbnN0cnVtZW50czogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
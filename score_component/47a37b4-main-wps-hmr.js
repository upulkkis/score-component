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
    _this.renderer = 0;
    _this.context = 0;
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Orchestration, [{
    key: "setupScore",
    value: function setupScore() {
      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          notes = _this$props.notes,
          target = _this$props.target,
          instruments = _this$props.instruments,
          setProps = _this$props.setProps,
          width = _this$props.width,
          height = _this$props.height,
          t_score_y = _this$props.t_score_y,
          b_score_y = _this$props.b_score_y; //const svgContainer = document.getElementById(id);

      this.notes = notes;
      this.target = target;
      this.instruments = instruments;
      this.renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      this.renderer.resize(width, height);
      var context = this.renderer.getContext();
      this.context = context; //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(20, t_score_y, width);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(this.context).draw();
      var stave_b = new VF.Stave(20, b_score_y, width);
      stave_b.addClef("bass"); //.addTimeSignature("4/4");

      stave_b.setContext(this.context).draw(); //Do connectors

      var connector = new VF.StaveConnector(stave_t, stave_b);
      connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
      connector.setContext(this.context);
      connector.draw(); // var connector2 = new VF.StaveConnector(stave_t, stave_b);
      // connector2.setType(VF.StaveConnector.type.SINGLE_RIGHT);
      // connector2.setContext(context);
      //connector2.draw();

      var connector3 = new VF.StaveConnector(stave_t, stave_b);
      connector3.setType(VF.StaveConnector.type.BRACKET);
      connector3.setContext(this.context); //connector3.setText('Orch.');

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

      var note_data = separate(this.notes, this.instruments, this.target);
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

      console.log(treble_notes);

      for (var i = 0; i < note_data[1].length; i++) {
        treble_notes.addAccidental(i, new VF.Accidental(note_data[1][i]));
        var teksti = viereen(treble_inst[i], VF.Modifier.Position.RIGHT);
        teksti.setOffsetY(0);
        treble_notes.addModifier(i, teksti);

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
        var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], width);
        voice_t.draw(this.context, stave_t);
      }

      var voice_b = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });

      if (Array.isArray(note_data[3]) && note_data[3].length) {
        voice_b.addTickables([bass_notes]);
        var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], width);
        voice_b.draw(this.context, stave_b);
      }

      this.refs.outer.appendChild(svgContainer);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupScore();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //if (this.notes !== prevProps.notes || this.instruments !== prevProps.instruments || this.target !== prevProps.target){
      //const {id} = this.props;
      var element = this.refs.outer;

      while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
      }

      this.setupScore(); //}
    }
    /*
    componentWillReceiveProps(nextProps) {   
        if (this.notes !== nextProps.notes || this.instruments !== nextProps.instruments || this.target !== nextProps.target){
            this.notes = nextProps.notes
            this.instruments = nextProps.instruments
            this.target = nextProps.target
          } 
    }
    shouldComponentUpdate(nextProps){
        return (this.props.notes !== nextProps.notes || this.props.instruments !== nextProps.instruments || this.props.target !== nextProps.target);
    }
    */

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

  return Orchestration;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Orchestration.defaultProps = {
  width: 200,
  height: 400,
  t_score_y: 110,
  b_score_y: 200
};
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
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  t_score_y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  b_score_y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJPcmNoZXN0cmF0aW9uIiwicHJvcHMiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwicmVuZGVyZXIiLCJjb250ZXh0Iiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwic2V0UHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInRfc2NvcmVfeSIsImJfc2NvcmVfeSIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJnZXRDb250ZXh0Iiwic3RhdmVfdCIsIlN0YXZlIiwiYWRkQ2xlZiIsInNldENvbnRleHQiLCJkcmF3Iiwic3RhdmVfYiIsImNvbm5lY3RvciIsIlN0YXZlQ29ubmVjdG9yIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsImNvbm5lY3RvcjMiLCJCUkFDS0VUIiwic2VwYXJhdGUiLCJpIiwidHJlYmxlX24iLCJ0cmVibGVfYSIsInRyZWJsZV90IiwidHJlYmxlX2kiLCJiYXNzX24iLCJiYXNzX2EiLCJiYXNzX3QiLCJiYXNzX2kiLCJuZXdfa2V5IiwibmV3X29jdGF2ZSIsIm5ld19hY2NpZGVudGlhbCIsImVudHJ5IiwibmV3X25vdGUiLCJpbnN0IiwidGd0IiwibGVuZ3RoIiwiY29uY2F0IiwicGFyc2VJbnQiLCJwdXNoIiwiaiIsIm5vdGVfZGF0YSIsInRyZWJsZV9ub3RlcyIsIlN0YXZlTm90ZSIsImNsZWYiLCJrZXlzIiwiZHVyYXRpb24iLCJiYXNzX25vdGVzIiwidHJlYmxlX2luc3QiLCJiYXNzX2luc3QiLCJ2aWVyZWVuIiwibnVtIiwicG9zIiwiRnJldEhhbmRGaW5nZXIiLCJzZXRQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRBY2NpZGVudGFsIiwiQWNjaWRlbnRhbCIsInRla3N0aSIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJSSUdIVCIsInNldE9mZnNldFkiLCJhZGRNb2RpZmllciIsInNldEtleVN0eWxlIiwiZmlsbFN0eWxlIiwiQXJyYXkiLCJpc0FycmF5Iiwidm9pY2VfdCIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsImFkZFRpY2thYmxlcyIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJ2b2ljZV9iIiwicmVmcyIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJzZXR1cFNjb3JlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxhOzs7OztBQUVqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxNQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtDLFdBQUwsR0FBaUIsQ0FBakI7QUFDQSxVQUFLQyxRQUFMLEdBQWMsQ0FBZDtBQUNBLFVBQUtDLE9BQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFQZTtBQVlsQjs7OztpQ0FFWTtBQUNELFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yY2hlc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9MDtcclxuICAgICAgICB0aGlzLnRhcmdldD0wO1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudHM9MDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyPTA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0PTA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNldHVwU2NvcmUoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgbm90ZXMsIHRhcmdldCwgaW5zdHJ1bWVudHMsIHNldFByb3BzLCB3aWR0aCwgaGVpZ2h0LCB0X3Njb3JlX3ksIGJfc2NvcmVfeX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBpbnN0cnVtZW50cztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuXHJcbiAgICAgICAgICAgICAgICAvL0RvIFRyZWJsZSBhbmQgQmFzcyBDbGVmc1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX3QgPSBuZXcgVkYuU3RhdmUoMjAsIHRfc2NvcmVfeSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdC5hZGRDbGVmKFwidHJlYmxlXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90LnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfYiA9IG5ldyBWRi5TdGF2ZSgyMCwgYl9zY29yZV95LCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLmFkZENsZWYoXCJiYXNzXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRG8gY29ubmVjdG9yc1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgY29ubmVjdG9yMiA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9SSUdIVCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvL2Nvbm5lY3RvcjIuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RvcjMgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5CUkFDS0VUKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RvcjMuc2V0Q29udGV4dCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IzLnNldFRleHQoJ09yY2guJyk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKG5vdGVzLCBpbnN0cnVtZW50cyx0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX24gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX2EgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX2kgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc19uID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc19pID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19vY3RhdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19ub3RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0Z3RcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGk9MDsgaTxub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IG5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0ID0gaW5zdHJ1bWVudHNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2tleSA9IGVudHJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfb2N0YXZlID0gZW50cnlbZW50cnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gZW50cnlbMV07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGd0ID0gdGFyZ2V0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG5ld19vY3RhdmUpID49IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfYS5wdXNoKG5ld19hY2NpZGVudGlhbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfaS5wdXNoKGluc3QpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Uw6RsbMOkIGthdHNvdGFhbiBvbmtvIGp1dXJpIHTDpG3DpCB0YXJnZXRsaXN0YWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vQWxsYSBvbGV2YSBvdHRhYSB2YWluIGVrYW4gaHVvbWlvb24sIHRhcmtpc3RhISFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhc3Nfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfaS5wdXNoKGluc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Z3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbal09PT1pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Z3Q9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RyZWJsZV9uLCB0cmVibGVfYSwgdHJlYmxlX3QsIGJhc3NfbiwgYmFzc19hLCBiYXNzX3QsIHRyZWJsZV9pLCBiYXNzX2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9kYXRhID0gc2VwYXJhdGUodGhpcy5ub3RlcywgdGhpcy5pbnN0cnVtZW50cywgdGhpcy50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBub3RlX2RhdGFbMF0sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3Nfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcImJhc3NcIiwga2V5czogbm90ZV9kYXRhWzNdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfaW5zdCA9IG5vdGVfZGF0YVs2XVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3NfaW5zdCA9IG5vdGVfZGF0YVs3XVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9GdW5rdGlvIGpvbGxhIHBpaXJyZXTDpMOkbiBudW90aW4gdmllcmVlblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmllcmVlbihudW0sIHBvcykgeyByZXR1cm4gbmV3IFZGLkZyZXRIYW5kRmluZ2VyKG51bSkuc2V0UG9zaXRpb24ocG9zKTsgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHJlYmxlX25vdGVzKVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVsxXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYmxlX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzFdW2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRla3N0aSA9IHZpZXJlZW4odHJlYmxlX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKVxyXG4gICAgICAgICAgICAgICAgICAgIHRla3N0aS5zZXRPZmZzZXRZKDApXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYmxlX25vdGVzLmFkZE1vZGlmaWVyKGksIHRla3N0aSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm90ZV9kYXRhWzJdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiBcInJlZFwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbM10ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbNF1baV0pKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4oYmFzc19pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVs1XVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdm9pY2UgaW4gNC80IGFuZCBhZGQgdGhlIG5vdGVzIGZyb20gYWJvdmVcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVswXSkgJiYgbm90ZV9kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX3QgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90LmFkZFRpY2thYmxlcyhbdHJlYmxlX25vdGVzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV90XSkuZm9ybWF0KFt2b2ljZV90XSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3QuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2b2ljZV9iID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVszXSkgJiYgbm90ZV9kYXRhWzNdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5hZGRUaWNrYWJsZXMoW2Jhc3Nfbm90ZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX2JdKS5mb3JtYXQoW3ZvaWNlX2JdLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5ub3RlcyAhPT0gcHJldlByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IHByZXZQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gcHJldlByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgLy9jb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmcy5vdXRlclxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKClcclxuICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykgeyAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5leHRQcm9wcy5ub3Rlc1xyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gbmV4dFByb3BzLmluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFByb3BzLnRhcmdldFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAqL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdHtpZCwgbm90ZXMsIGluc3RydW1lbnRzLCB0YXJnZXR9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5PcmNoZXN0cmF0aW9uLmRlZmF1bHRQcm9wcyA9IHt3aWR0aDogMjAwLCBoZWlnaHQ6IDQwMCwgdF9zY29yZV95OiAxMTAsIGJfc2NvcmVfeTogMjAwfTtcclxuXHJcbk9yY2hlc3RyYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIG5vdGVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIGluc3RydW1lbnRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRfc2NvcmVfeTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGJfc2NvcmVfeTogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
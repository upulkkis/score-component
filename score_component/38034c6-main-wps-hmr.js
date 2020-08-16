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
      var stave_t2 = new VF.Stave(20 + width, t_score_y, 10);
      stave_t2.setContext(this.context).draw();
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
      var treble_textnotes = [];

      for (var i = 0; i < note_data[0].length; i++) {
        var textnote = new VF.TextNote({
          text: 'jebu',
          duration: '4',
          ignore_ticks: true
        }).setStave(stave_t2).setLine(i).setJustification(VF.TextNote.Justification.RIGHT);
        textnote.extraLeftPx = 100;
        console.log(textnote);
        treble_textnotes.push(textnote);
      }

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
      } //console.log(treble_notes)


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
        }).setMode(2);
        var voice_t_text = new VF.Voice({
          num_beats: 1,
          beat_value: 4
        }).setMode(2);
        voice_t.addTickables([treble_notes]);
        voice_t_text.addTickables(treble_textnotes);
        var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], width);
        var formatter_t = new VF.Formatter().joinVoices([voice_t_text]).format([voice_t_text], width);
        voice_t.draw(this.context, stave_t);
        voice_t_text.draw(this.context, stave_t2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJPcmNoZXN0cmF0aW9uIiwicHJvcHMiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwicmVuZGVyZXIiLCJjb250ZXh0Iiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwic2V0UHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInRfc2NvcmVfeSIsImJfc2NvcmVfeSIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJnZXRDb250ZXh0Iiwic3RhdmVfdCIsIlN0YXZlIiwiYWRkQ2xlZiIsInNldENvbnRleHQiLCJkcmF3Iiwic3RhdmVfdDIiLCJzdGF2ZV9iIiwiY29ubmVjdG9yIiwiU3RhdmVDb25uZWN0b3IiLCJzZXRUeXBlIiwidHlwZSIsIlNJTkdMRV9MRUZUIiwiY29ubmVjdG9yMyIsIkJSQUNLRVQiLCJzZXBhcmF0ZSIsImkiLCJ0cmVibGVfbiIsInRyZWJsZV9hIiwidHJlYmxlX3QiLCJ0cmVibGVfaSIsImJhc3NfbiIsImJhc3NfYSIsImJhc3NfdCIsImJhc3NfaSIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwiZW50cnkiLCJuZXdfbm90ZSIsImluc3QiLCJ0Z3QiLCJsZW5ndGgiLCJjb25jYXQiLCJwYXJzZUludCIsInB1c2giLCJqIiwibm90ZV9kYXRhIiwidHJlYmxlX3RleHRub3RlcyIsInRleHRub3RlIiwiVGV4dE5vdGUiLCJ0ZXh0IiwiZHVyYXRpb24iLCJpZ25vcmVfdGlja3MiLCJzZXRTdGF2ZSIsInNldExpbmUiLCJzZXRKdXN0aWZpY2F0aW9uIiwiSnVzdGlmaWNhdGlvbiIsIlJJR0hUIiwiZXh0cmFMZWZ0UHgiLCJjb25zb2xlIiwibG9nIiwidHJlYmxlX25vdGVzIiwiU3RhdmVOb3RlIiwiY2xlZiIsImtleXMiLCJiYXNzX25vdGVzIiwidHJlYmxlX2luc3QiLCJiYXNzX2luc3QiLCJ2aWVyZWVuIiwibnVtIiwicG9zIiwiRnJldEhhbmRGaW5nZXIiLCJzZXRQb3NpdGlvbiIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwidGVrc3RpIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsInNldE9mZnNldFkiLCJhZGRNb2RpZmllciIsInNldEtleVN0eWxlIiwiZmlsbFN0eWxlIiwiQXJyYXkiLCJpc0FycmF5Iiwidm9pY2VfdCIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsInNldE1vZGUiLCJ2b2ljZV90X3RleHQiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwiZm9ybWF0dGVyX3QiLCJ2b2ljZV9iIiwicmVmcyIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJzZXR1cFNjb3JlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxhOzs7OztBQUVqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxNQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtDLFdBQUwsR0FBaUIsQ0FB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RTRILGlEQUFTLENBQUNFLEtBVkk7QUFXdEI3SCxhQUFXLEVBQUUySCxpREFBUyxDQUFDRSxLQVhEO0FBWXRCbEgsT0FBSyxFQUFFZ0gsaURBQVMsQ0FBQ0csTUFaSztBQWF0QmxILFFBQU0sRUFBRStHLGlEQUFTLENBQUNHLE1BYkk7QUFjdEJqSCxXQUFTLEVBQUU4RyxpREFBUyxDQUFDRyxNQWRDO0FBZXRCaEgsV0FBUyxFQUFFNkcsaURBQVMsQ0FBQ0csTUFmQzs7QUFrQnRCOzs7O0FBSUFwSCxVQUFRLEVBQUVpSCxpREFBUyxDQUFDSTtBQXRCRSxDQUExQixDIiwiZmlsZSI6IjM4MDM0YzYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JjaGVzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz0wO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0PTA7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cz0wO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXI9MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQ9MDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0dXBTY29yZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2lkLCBub3RlcywgdGFyZ2V0LCBpbnN0cnVtZW50cywgc2V0UHJvcHMsIHdpZHRoLCBoZWlnaHQsIHRfc2NvcmVfeSwgYl9zY29yZV95fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IGluc3RydW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG5cclxuICAgICAgICAgICAgICAgIC8vRG8gVHJlYmxlIGFuZCBCYXNzIENsZWZzXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfdCA9IG5ldyBWRi5TdGF2ZSgyMCwgdF9zY29yZV95LCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90LmFkZENsZWYoXCJ0cmVibGVcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlX3Quc2V0Q29udGV4dCh0aGlzLmNvbnRleHQpLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF2ZV90MiA9IG5ldyBWRi5TdGF2ZSgyMCt3aWR0aCwgdF9zY29yZV95LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90Mi5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX2IgPSBuZXcgVkYuU3RhdmUoMjAsIGJfc2NvcmVfeSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5hZGRDbGVmKFwiYmFzc1wiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0RvIGNvbm5lY3RvcnNcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGNvbm5lY3RvcjIgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IyLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdG9yMy5zZXRUZXh0KCdPcmNoLicpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9uID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9hID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV90ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9pID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX2EgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc190ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfaSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpPTA7IGk8bm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdCA9IGluc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19rZXkgPSBlbnRyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X29jdGF2ZSA9IGVudHJ5W2VudHJ5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5WzFdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRndCA9IHRhcmdldFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChuZXdfb2N0YXZlKSA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2kucHVzaChpbnN0KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL0FsbGEgb2xldmEgb3R0YWEgdmFpbiBla2FuIGh1b21pb29uLCB0YXJraXN0YSEhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19hLnB1c2gobmV3X2FjY2lkZW50aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX2kucHVzaChpbnN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc190LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cmVibGVfbiwgdHJlYmxlX2EsIHRyZWJsZV90LCBiYXNzX24sIGJhc3NfYSwgYmFzc190LCB0cmVibGVfaSwgYmFzc19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfZGF0YSA9IHNlcGFyYXRlKHRoaXMubm90ZXMsIHRoaXMuaW5zdHJ1bWVudHMsIHRoaXMudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX3RleHRub3RlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRub3RlID0gbmV3IFZGLlRleHROb3RlKHt0ZXh0OiAnamVidScsIGR1cmF0aW9uOiAnNCcsIGlnbm9yZV90aWNrczogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFN0YXZlKHN0YXZlX3QyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRMaW5lKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEp1c3RpZmljYXRpb24oVkYuVGV4dE5vdGUuSnVzdGlmaWNhdGlvbi5SSUdIVClcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0bm90ZS5leHRyYUxlZnRQeCA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0bm90ZSlcclxuICAgICAgICAgICAgICAgICAgICB0cmVibGVfdGV4dG5vdGVzLnB1c2godGV4dG5vdGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBub3RlX2RhdGFbMF0sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3Nfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcImJhc3NcIiwga2V5czogbm90ZV9kYXRhWzNdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfaW5zdCA9IG5vdGVfZGF0YVs2XVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3NfaW5zdCA9IG5vdGVfZGF0YVs3XVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9GdW5rdGlvIGpvbGxhIHBpaXJyZXTDpMOkbiBudW90aW4gdmllcmVlblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmllcmVlbihudW0sIHBvcykgeyByZXR1cm4gbmV3IFZGLkZyZXRIYW5kRmluZ2VyKG51bSkuc2V0UG9zaXRpb24ocG9zKTsgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0cmVibGVfbm90ZXMpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzFdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbMV1baV0pKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVrc3RpID0gdmllcmVlbih0cmVibGVfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGVrc3RpLnNldE9mZnNldFkoMClcclxuICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkTW9kaWZpZXIoaSwgdGVrc3RpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RlX2RhdGFbMl1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVszXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzc19ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVs0XVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkTW9kaWZpZXIoaSwgdmllcmVlbihiYXNzX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm90ZV9kYXRhWzVdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc3Nfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB2b2ljZSBpbiA0LzQgYW5kIGFkZCB0aGUgbm90ZXMgZnJvbSBhYm92ZVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZV9kYXRhWzBdKSAmJiBub3RlX2RhdGFbMF0ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdm9pY2VfdCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX3RfdGV4dCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfdC5hZGRUaWNrYWJsZXMoW3RyZWJsZV9ub3Rlc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3RfdGV4dC5hZGRUaWNrYWJsZXModHJlYmxlX3RleHRub3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV90XSkuZm9ybWF0KFt2b2ljZV90XSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXJfdCA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV90X3RleHRdKS5mb3JtYXQoW3ZvaWNlX3RfdGV4dF0sIHdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90LmRyYXcodGhpcy5jb250ZXh0LCBzdGF2ZV90KTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90X3RleHQuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX3QyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdm9pY2VfYiA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlX2RhdGFbM10pICYmIG5vdGVfZGF0YVszXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX2IuYWRkVGlja2FibGVzKFtiYXNzX25vdGVzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV9iXSkuZm9ybWF0KFt2b2ljZV9iXSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX2IuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm91dGVyLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vaWYgKHRoaXMubm90ZXMgIT09IHByZXZQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBwcmV2UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IHByZXZQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgIC8vY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXJcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHsgICBcclxuICAgICAgICBpZiAodGhpcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBuZXh0UHJvcHMubm90ZXNcclxuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IG5leHRQcm9wcy5pbnN0cnVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5leHRQcm9wcy50YXJnZXRcclxuXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLnByb3BzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy5wcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpO1xyXG59XHJcbiAgKi9cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3R7aWQsIG5vdGVzLCBpbnN0cnVtZW50cywgdGFyZ2V0fT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gcmVmPVwib3V0ZXJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0gICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuT3JjaGVzdHJhdGlvbi5kZWZhdWx0UHJvcHMgPSB7d2lkdGg6IDIwMCwgaGVpZ2h0OiA0MDAsIHRfc2NvcmVfeTogMTEwLCBiX3Njb3JlX3k6IDIwMH07XHJcblxyXG5PcmNoZXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBub3RlczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBpbnN0cnVtZW50czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0X3Njb3JlX3k6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBiX3Njb3JlX3k6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
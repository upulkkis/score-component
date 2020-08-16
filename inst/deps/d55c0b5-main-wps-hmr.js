webpackHotUpdatescore_component("main",{

/***/ "./src/lib/components/Masking.js":
/*!***************************************!*\
  !*** ./src/lib/components/Masking.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Masking; });
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

var Masking = /*#__PURE__*/function (_Component) {
  _inherits(Masking, _Component);

  var _super = _createSuper(Masking);

  function Masking(props) {
    var _this;

    _classCallCheck(this, Masking);

    _this = _super.call(this, props);
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Masking, [{
    key: "setupScore",
    value: function setupScore() {
      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          masking_notevalues = _this$props.masking_notevalues,
          masking_notesizes = _this$props.masking_notesizes,
          masking_colors = _this$props.masking_colors,
          target_notevalues = _this$props.target_notevalues,
          target_notesizes = _this$props.target_notesizes,
          target_colors = _this$props.target_colors,
          setProps = _this$props.setProps; //const svgContainer = document.getElementById(id);

      console.log(this.props);
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(100, 250);
      var context = renderer.getContext(); //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(10, 60, 100);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(context).draw();
      var stave_b = new VF.Stave(10, 120, 100);
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

      connector3.draw(); //Erotetaan nuotit viivastoille

      var treble_maskings = [];
      var treble_maskings_notesize = [];
      var treble_maskings_colors = [];
      var bass_maskings = [];
      var bass_maskings_notesize = [];
      var bass_maskings_colors = [];

      for (var i = 0; i < masking_notevalues.length; i++) {
        if (masking_notevalues[i] > 59) {
          treble_maskings.push(masking_notevalues[i]);
          treble_maskings_notesize.push(masking_notesizes[i]);
          treble_maskings_colors.push(masking_colors[i]);
        } else {
          bass_maskings.push(masking_notevalues[i]);
          bass_maskings_notesize.push(masking_notesizes[i]);
          bass_maskings_colors.push(masking_colors[i]);
        }
      }

      var treble_targets = [];
      var treble_targets_notesize = [];
      var treble_targets_colors = [];
      var bass_targets = [];
      var bass_targets_notesize = [];
      var bass_targets_colors = [];

      for (var i = 0; i < target_notevalues.length; i++) {
        if (target_notevalues[i] > 59) {
          treble_targets.push(target_notevalues[i]);
          treble_targets_notesize.push(target_notesizes[i]);
          treble_targets_colors.push(target_colors[i]);
        } else {
          bass_targets.push(target_notevalues[i]);
          bass_targets_notesize.push(target_notesizes[i]);
          bass_targets_colors.push(target_colors[i]);
        }
      } //Funktio jolla piirretään nuotin viereen


      function viereen(num, pos) {
        return new VF.FretHandFinger(num).setPosition(pos);
      }

      var maskings_t = new Array();
      var maskings_b = new Array();
      var targets_t = new Array();
      var targets_b = new Array();

      function midinote2treblestaff(midinote, offset) {
        //Offset for treble middle-c4=60, bass-e2=40
        //set middle = 0, 4 steps= one line
        var line_offset = 0;

        if (offset === 40) {
          line_offset = -1;
        }

        midinote = (midinote - offset) / 4;

        if (midinote > 1 + line_offset) {
          midinote = midinote + 0.25;
        }

        if (midinote > 3 + line_offset) {
          midinote = midinote + 0.25;
        }

        if (midinote > 4.5 + line_offset) {
          midinote = midinote + 0.25;
        }

        if (midinote > 6.5 + line_offset) {
          midinote = midinote + 0.25;
        }

        if (midinote > 8 + line_offset) {
          midinote = midinote + 0.25;
        }

        if (midinote > 10 + line_offset) {
          midinote = midinote + 0.25;
        }

        if (midinote > 13.5 + line_offset) {
          midinote = midinote + 0.25;
        }

        if (midinote > 15.5 + line_offset) {
          midinote = midinote + 0.25;
        }

        return midinote;
      } //Check if there's orchestration stuff for treble staff and append:


      if (Array.isArray(treble_maskings) && treble_maskings.length) {
        for (var i = 0; i < treble_maskings.length; i++) {
          //Draw custom noteheads
          //line 0=middle c on treble, 1=e etc., font scale 40=about normal note, fillstyle = note color 
          var linenote = midinote2treblestaff(treble_maskings[i], 60);
          var notehead = new VF.NoteHead({
            duration: '128',
            line: linenote,
            custom_glyph_code: "vd2",
            glyph_font_scale: treble_maskings_notesize[i],
            style: {
              fillStyle: treble_maskings_colors[i]
            }
          });
          notehead.setCenterAlignment(true);
          maskings_t.push(notehead);
        } //maskings_t=[]
        //maskings_t.push(new VF.NoteHead({duration:'128', line: 2.3, custom_glyph_code:"vd2", glyph_font_scale: 100, style:{fillStyle: 'red'}}) )
        //maskings_t.push(new VF.NoteHead({duration:'128', line: 5.3, custom_glyph_code:"vd2", glyph_font_scale: 100, style:{fillStyle: 'red'}}) )


        var voice = new VF.Voice({
          num_beats: 1,
          beat_value: 1
        }).setMode(2);
        voice.addTickables(maskings_t);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 1);
        voice.draw(context, stave_t);
      } //If there's orchestration stuff for bass clef:


      if (Array.isArray(bass_maskings) && bass_maskings.length) {
        for (var i = 0; i < bass_maskings.length; i++) {
          //Draw custom noteheads
          //line 0=middle c on treble, 1=e etc., font scale 40=about normal note, fillstyle = note color 
          var linenote = midinote2treblestaff(bass_maskings[i], 40);
          var notehead = new VF.NoteHead({
            duration: '128',
            line: linenote,
            custom_glyph_code: "vd2",
            glyph_font_scale: bass_maskings_notesize[i],
            style: {
              fillStyle: bass_maskings_colors[i]
            }
          });
          notehead.setCenterAlignment(true);
          maskings_b.push(notehead);
        }

        var voice2 = new VF.Voice({
          num_beats: 1,
          beat_value: 1
        }).setMode(2);
        voice2.addTickables(maskings_b);
        var formatter2 = new VF.Formatter().joinVoices([voice2]).format([voice2], 1);
        voice2.draw(context, stave_b);
      } //Check if there's target stuff for treble staff and append:


      if (Array.isArray(treble_targets) && treble_targets.length) {
        targets_t.push(new VF.GhostNote('q'));

        for (var i = 0; i < treble_targets.length; i++) {
          //Draw custom noteheads
          //line 0=middle c on treble, 1=e etc., font scale 40=about normal note, fillstyle = note color 
          var linenote = midinote2treblestaff(treble_targets[i], 60);
          var notehead = new VF.NoteHead({
            duration: '128',
            displaced: false,
            line: linenote,
            custom_glyph_code: "vb",
            glyph_font_scale: treble_targets_notesize[i],
            style: {
              fillStyle: treble_targets_colors[i]
            }
          });
          notehead.setCenterAlignment(true).set;
          targets_t.push(notehead);
        } //maskings_t=[]
        //maskings_t.push(new VF.NoteHead({duration:'128', line: 2.3, custom_glyph_code:"vd2", glyph_font_scale: 100, style:{fillStyle: 'red'}}) )
        //maskings_t.push(new VF.NoteHead({duration:'128', line: 5.3, custom_glyph_code:"vd2", glyph_font_scale: 100, style:{fillStyle: 'red'}}) )


        var voice3 = new VF.Voice({
          num_beats: 1,
          beat_value: 1
        }).setMode(2);
        voice3.addTickables(targets_t);
        var formatter = new VF.Formatter().joinVoices([voice3]).format([voice3], 10);
        voice3.draw(context, stave_t);
      } //Check if there's target stuff for vass staff and append:


      if (Array.isArray(bass_targets) && bass_targets.length) {
        targets_b.push(new VF.GhostNote('q'));

        for (var i = 0; i < bass_targets.length; i++) {
          //Draw custom noteheads
          //line 0=middle c on treble, 1=e etc., font scale 40=about normal note, fillstyle = note color 
          var linenote = midinote2treblestaff(bass_targets[i], 60);
          var notehead = new VF.NoteHead({
            duration: '128',
            displaced: false,
            line: linenote,
            custom_glyph_code: "vb",
            glyph_font_scale: bass_targets_notesize[i],
            style: {
              fillStyle: bass_targets_colors[i]
            }
          });
          notehead.setCenterAlignment(true).set;
          targets_b.push(notehead);
        } //maskings_t=[]
        //maskings_t.push(new VF.NoteHead({duration:'128', line: 2.3, custom_glyph_code:"vd2", glyph_font_scale: 100, style:{fillStyle: 'red'}}) )
        //maskings_t.push(new VF.NoteHead({duration:'128', line: 5.3, custom_glyph_code:"vd2", glyph_font_scale: 100, style:{fillStyle: 'red'}}) )


        var voice4 = new VF.Voice({
          num_beats: 1,
          beat_value: 1
        }).setMode(2);
        voice4.addTickables(targets_b);
        var formatter = new VF.Formatter().joinVoices([voice4]).format([voice4], 10);
        voice4.draw(context, stave_t);
      }

      console.log(stave_b);
      context.beginPath().closePath();
      this.refs.outer2.appendChild(svgContainer);
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
      var element = this.refs.outer2;

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
      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        ref: "outer2",
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          display: "inline-block"
        }
      });
    }
  }]);

  return Masking;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Masking.defaultProps = {};
Masking.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  masking_notevalues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  masking_notesizes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  masking_colors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  target_notevalues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  target_notesizes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  target_colors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvTWFza2luZy5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJNYXNraW5nIiwicHJvcHMiLCJzdGF0ZSIsIngiLCJ5Iiwic3ZnQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJtYXNraW5nX25vdGV2YWx1ZXMiLCJtYXNraW5nX25vdGVzaXplcyIsIm1hc2tpbmdfY29sb3JzIiwidGFyZ2V0X25vdGV2YWx1ZXMiLCJ0YXJnZXRfbm90ZXNpemVzIiwidGFyZ2V0X2NvbG9ycyIsInNldFByb3BzIiwiY29uc29sZSIsImxvZyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJCYWNrZW5kcyIsIlNWRyIsInJlc2l6ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic3RhdmVfdCIsIlN0YXZlIiwiYWRkQ2xlZiIsInNldENvbnRleHQiLCJkcmF3Iiwic3RhdmVfYiIsImNvbm5lY3RvciIsIlN0YXZlQ29ubmVjdG9yIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsImNvbm5lY3RvcjMiLCJCUkFDS0VUIiwidHJlYmxlX21hc2tpbmdzIiwidHJlYmxlX21hc2tpbmdzX25vdGVzaXplIiwidHJlYmxlX21hc2tpbmdzX2NvbG9ycyIsImJhc3NfbWFza2luZ3MiLCJiYXNzX21hc2tpbmdzX25vdGVzaXplIiwiYmFzc19tYXNraW5nc19jb2xvcnMiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRyZWJsZV90YXJnZXRzIiwidHJlYmxlX3RhcmdldHNfbm90ZXNpemUiLCJ0cmVibGVfdGFyZ2V0c19jb2xvcnMiLCJiYXNzX3RhcmdldHMiLCJiYXNzX3RhcmdldHNfbm90ZXNpemUiLCJiYXNzX3RhcmdldHNfY29sb3JzIiwidmllcmVlbiIsIm51bSIsInBvcyIsIkZyZXRIYW5kRmluZ2VyIiwic2V0UG9zaXRpb24iLCJtYXNraW5nc190IiwiQXJyYXkiLCJtYXNraW5nc19iIiwidGFyZ2V0c190IiwidGFyZ2V0c19iIiwibWlkaW5vdGUydHJlYmxlc3RhZmYiLCJtaWRpbm90ZSIsIm9mZnNldCIsImxpbmVfb2Zmc2V0IiwiaXNBcnJheSIsImxpbmVub3RlIiwibm90ZWhlYWQiLCJOb3RlSGVhZCIsImR1cmF0aW9uIiwibGluZSIsImN1c3RvbV9nbHlwaF9jb2RlIiwiZ2x5cGhfZm9udF9zY2FsZSIsInN0eWxlIiwiZmlsbFN0eWxlIiwic2V0Q2VudGVyQWxpZ25tZW50Iiwidm9pY2UiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwiYWRkVGlja2FibGVzIiwiZm9ybWF0dGVyIiwiRm9ybWF0dGVyIiwiam9pblZvaWNlcyIsImZvcm1hdCIsInZvaWNlMiIsImZvcm1hdHRlcjIiLCJHaG9zdE5vdGUiLCJkaXNwbGFjZWQiLCJzZXQiLCJ2b2ljZTMiLCJ2b2ljZTQiLCJiZWdpblBhdGgiLCJjbG9zZVBhdGgiLCJyZWZzIiwib3V0ZXIyIiwiYXBwZW5kQ2hpbGQiLCJzZXR1cFNjb3JlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxPOzs7OztBQUVqQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFGZTtBQU9sQjs7OztpQ0FFWTtBQUNELFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBREMsd0JBRWlJLEtBQUtOLEtBRnRJO0FBQUEsVUFFTU8sRUFGTixlQUVNQSxFQUZOO0FBQUEsVUFFVUMsa0JBRlYsZUFFVUEsa0JBRlY7QUFBQSxVQUU4QkMsaUJBRjlCLGVBRThCQSxpQkFGOUI7QUFBQSxVQUVpREMsY0FGakQsZUFFaURBLGNBRmpEO0FBQUEsVUFFaUVDLGlCQUZqRSxlQUVpRUEsaUJBRmpFO0FBQUEsVUFFb0ZDLGdCQUZwRixlQUVvRkEsZ0JBRnBGO0FBQUEsVUFFc0dDLGFBRnRHLGVBRXNHQSxhQUZ0RztBQUFBLFVBRXFIQyxRQUZySCxlQUVxSEEsUUFGckgsRUFHRDs7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtoQixLQUFqQjtBQUNnQixVQUFJaUIsUUFBUSxHQUFHLElBQUlyQixFQUFFLENBQUNzQixRQUFQLENBQWdCZCxZQUFoQixFQUE4QlIsRUFBRSxDQUFDc0IsUUFBSCxDQUFZQyxRQUFaLENBQXFCQyxHQUFuRCxDQUFmO0FBQ0FILGNBQVEsQ0FBQ0ksTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLFVBQUlDLE9BQU8sR0FBR0wsUUFBUSxDQUFDTSxVQUFULEVBQWQsQ0FQQyxDQVNEOztBQUVBLFVBQUlDLE9BQU8sR0FBRyxJQUFJNUIsRUFBRSxDQUFDNkIsS0FBUCxDQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsR0FBckIsQ0FBZDtBQUNBRCxhQUFPLENBQUNFLE9BQVIsQ0FBZ0IsUUFBaEIsRUFaQyxDQVl5Qjs7QUFDMUJGLGFBQU8sQ0FBQ0csVUFBUixDQUFtQkwsT0FBbkIsRUFBNEJNLElBQTVCO0FBRUEsVUFBSUMsT0FBTyxHQUFHLElBQUlqQyxFQUFFLENBQUM2QixLQUFQLENBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQUFkO0FBQ0FJLGFBQU8sQ0FBQ0gsT0FBUixDQUFnQixNQUFoQixFQWhCQyxDQWdCdUI7O0FBQ3hCRyxhQUFPLENBQUNGLFVBQVIsQ0FBbUJMLE9BQW5CLEVBQTRCTSxJQUE1QixHQWpCQyxDQW1CRDs7QUFDQSxVQUFJRSxTQUFTLEdBQUcsSUFBSWxDLEVBQUUsQ0FBQ21DLGNBQVAsQ0FBc0JQLE9BQXRCLEVBQStCSyxPQUEvQixDQUFoQjtBQUNBQyxlQUFTLENBQUNFLE9BQVYsQ0FBa0JwQyxFQUFFLENBQUNtQyxjQUFILENBQWtCRSxJQUFsQixDQUF1QkMsV0FBekM7QUFDQUosZUFBUyxDQUFDSCxVQUFWLENBQXFCTCxPQUFyQjtBQUNBUSxlQUFTLENBQUNGLElBQVYsR0F2QkMsQ0F3QkQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBSU8sVUFBVSxHQUFHLElBQUl2QyxFQUFFLENBQUNtQyxjQUFQLENBQXNCUCxPQUF0QixFQUErQkssT0FBL0IsQ0FBakI7QUFDQU0sZ0JBQVUsQ0FBQ0gsT0FBWCxDQUFtQnBDLEVBQUUsQ0FBQ21DLGNBQUgsQ0FBa0JFLElBQWxCLENBQXVCRyxPQUExQztBQUNBRCxnQkFBVSxDQUFDUixVQUFYLENBQXNCTCxPQUF0QixFQTlCQyxDQStCRDs7QUFDQWEsZ0JBQVUsQ0FBQ1AsSUFBWCxHQWhDQyxDQWtDRDs7QUFDQSxVQUFJUyxlQUFlLEdBQUcsRUFBdEI7QUFDQSxVQUFJQyx3QkFBd0IsR0FBRyxFQUEvQjtBQUNBLFVBQUlDLHNCQUFzQixHQUFHLEVBQTdCO0FBQ0EsVUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0EsVUFBSUMsc0JBQXNCLEdBQUcsRUFBN0I7QUFDQSxVQUFJQyxvQkFBb0IsR0FBRyxFQUEzQjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWFBLENBQUMsR0FBQ25DLGtCQUFrQixDQUFDb0MsTUFBbEMsRUFBeUNELENBQUMsRUFBMUMsRUFBNkM7QUFDekMsWUFBSW5DLGtCQUFrQixDQUFDbUMsQ0FBRCxDQUFsQixHQUFzQixFQUExQixFQUE2QjtBQUN6Qk4seUJBQWUsQ0FBQ1EsSUFBaEIsQ0FBcUJyQyxrQkFBa0IsQ0FBQ21DLENBQUQsQ0FBdkM7QUFDQUwsa0NBQXdCLENBQUNPLElBQXpCLENBQThCcEMsaUJBQWlCLENBQUNrQyxDQUFELENBQS9DO0FBQ0FKLGdDQUFzQixDQUFDTSxJQUF2QixDQUE0Qm5DLGNBQWMsQ0FBQ2lDLENBQUQsQ0FBMUM7QUFDSCxTQUpELE1BSU87QUFDSEgsdUJBQWEsQ0FBQ0ssSUFBZCxDQUFtQnJDLGtCQUFrQixDQUFDbUMsQ0FBRCxDQUFyQztBQUNBRixnQ0FBc0IsQ0FBQ0ksSUFBdkIsQ0FBNEJwQyxpQkFBaUIsQ0FBQ2tDLENBQUQsQ0FBN0M7QUFDQUQsOEJBQW9CLENBQUNHLElBQXJCLENBQTBCbkMsY0FBYyxDQUFDaUMsQ0FBRCxDQUF4QztBQUNIO0FBQ0o7O0FBRUQsVUFBSUcsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsVUFBSUMsdUJBQXVCLEdBQUcsRUFBOUI7QUFDQSxVQUFJQyxxQkFBcUIsR0FBRyxFQUE1QjtBQUNBLFVBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUNBLFVBQUlDLHFCQUFxQixHQUFHLEVBQTVCO0FBQ0EsVUFBSUMsbUJBQW1CLEdBQUcsRUFBMUI7O0FBRUEsV0FBSyxJQUFJUixDQUFDLEdBQUMsQ0FBWCxFQUFhQSxDQUFDLEdBQUNoQyxpQkFBaUIsQ0FBQ2lDLE1BQWpDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTRDO0FBQ3hDLFlBQUloQyxpQkFBaUIsQ0FBQ2dDLENBQUQsQ0FBakIsR0FBcUIsRUFBekIsRUFBNEI7QUFDeEJHLHdCQUFjLENBQUNELElBQWYsQ0FBb0JsQyxpQkFBaUIsQ0FBQ2dDLENBQUQsQ0FBckM7QUFDQUksaUNBQXVCLENBQUNGLElBQXhCLENBQTZCakMsZ0JBQWdCLENBQUMrQixDQUFELENBQTdDO0FBQ0FLLCtCQUFxQixDQUFDSCxJQUF0QixDQUEyQmhDLGFBQWEsQ0FBQzhCLENBQUQsQ0FBeEM7QUFDSCxTQUpELE1BSU87QUFDSE0sc0JBQVksQ0FBQ0osSUFBYixDQUFrQmxDLGlCQUFpQixDQUFDZ0MsQ0FBRCxDQUFuQztBQUNBTywrQkFBcUIsQ0FBQ0wsSUFBdEIsQ0FBMkJqQyxnQkFBZ0IsQ0FBQytCLENBQUQsQ0FBM0M7QUFDQVEsNkJBQW1CLENBQUNOLElBQXBCLENBQXlCaEMsYUFBYSxDQUFDOEIsQ0FBRCxDQUF0QztBQUNIO0FBQ0osT0F2RUEsQ0F5RUQ7OztBQUNBLGVBQVNTLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUFFLGVBQU8sSUFBSTFELEVBQUUsQ0FBQzJELGNBQVAsQ0FBc0JGLEdBQXRCLEVBQTJCRyxXQUEzQixDQUF1Q0YsR0FBdkMsQ0FBUDtBQUFxRDs7QUFDdEYsVUFBSUcsVUFBVSxHQUFHLElBQUlDLEtBQUosRUFBakI7QUFDQSxVQUFJQyxVQUFVLEdBQUcsSUFBSUQsS0FBSixFQUFqQjtBQUNBLFVBQUlFLFNBQVMsR0FBRyxJQUFJRixLQUFKLEVBQWhCO0FBQ0EsVUFBSUcsU0FBUyxHQUFHLElBQUlILEtBQUosRUFBaEI7O0FBRUEsZUFBU0ksb0JBQVQsQ0FBOEJDLFFBQTlCLEVBQXdDQyxNQUF4QyxFQUErQztBQUMzQztBQUNBO0FBQ0EsWUFBSUMsV0FBVyxHQUFDLENBQWhCOztBQUNBLFlBQUlELE1BQU0sS0FBSyxFQUFmLEVBQWtCO0FBQ2RDLHFCQUFXLEdBQUMsQ0FBQyxDQUFiO0FBQ0g7O0FBQ0RGLGdCQUFRLEdBQUMsQ0FBQ0EsUUFBUSxHQUFDQyxNQUFWLElBQWtCLENBQTNCOztBQUVBLFlBQUlELFFBQVEsR0FBQyxJQUFFRSxXQUFmLEVBQTJCO0FBQ3ZCRixrQkFBUSxHQUFDQSxRQUFRLEdBQUMsSUFBbEI7QUFDSDs7QUFDRCxZQUFJQSxRQUFRLEdBQUMsSUFBRUUsV0FBZixFQUEyQjtBQUN2QkYsa0JBQVEsR0FBQ0EsUUFBUSxHQUFDLElBQWxCO0FBQ0g7O0FBQ0QsWUFBSUEsUUFBUSxHQUFDLE1BQUlFLFdBQWpCLEVBQTZCO0FBQ3pCRixrQkFBUSxHQUFDQSxRQUFRLEdBQUMsSUFBbEI7QUFDSDs7QUFDRCxZQUFJQSxRQUFRLEdBQUMsTUFBSUUsV0FBakIsRUFBNkI7QUFDekJGLGtCQUFRLEdBQUNBLFFBQVEsR0FBQyxJQUFsQjtBQUNIOztBQUNELFlBQUlBLFFBQVEsR0FBQyxJQUFFRSxXQUFmLEVBQTJCO0FBQ3ZCRixrQkFBUSxHQUFDQSxRQUFRLEdBQUMsSUFBbEI7QUFDSDs7QUFDRCxZQUFJQSxRQUFRLEdBQUMsS0FBR0UsV0FBaEIsRUFBNEI7QUFDeEJGLGtCQUFRLEdBQUNBLFFBQVEsR0FBQyxJQUFsQjtBQUNIOztBQUNELFlBQUlBLFFBQVEsR0FBQyxPQUFLRSxXQUFsQixFQUE4QjtBQUMxQkYsa0JBQVEsR0FBQ0EsUUFBUSxHQUFDLElBQWxCO0FBQ0g7O0FBQ0QsWUFBSUEsUUFBUSxHQUFDLE9BQUtFLFdBQWxCLEVBQThCO0FBQzFCRixrQkFBUSxHQUFDQSxRQUFRLEdBQUMsSUFBbEI7QUFDSDs7QUFDRCxlQUFPQSxRQUFQO0FBQ0gsT0FsSEksQ0FtSEw7OztBQUVBLFVBQUlMLEtBQUssQ0FBQ1EsT0FBTixDQUFjN0IsZUFBZCxLQUFrQ0EsZUFBZSxDQUFDTyxNQUF0RCxFQUE2RDtBQUV6RCxhQUFLLElBQUlELENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ04sZUFBZSxDQUFDTyxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE0QztBQUN4QztBQUNBO0FBQ0EsY0FBSXdCLFFBQVEsR0FBR0wsb0JBQW9CLENBQUN6QixlQUFlLENBQUNNLENBQUQsQ0FBaEIsRUFBcUIsRUFBckIsQ0FBbkM7QUFDQSxjQUFJeUIsUUFBUSxHQUFHLElBQUl4RSxFQUFFLENBQUN5RSxRQUFQLENBQWdCO0FBQUNDLG9CQUFRLEVBQUMsS0FBVjtBQUFpQkMsZ0JBQUksRUFBRUosUUFBdkI7QUFBaUNLLDZCQUFpQixFQUFDLEtBQW5EO0FBQTBEQyw0QkFBZ0IsRUFBRW5DLHdCQUF3QixDQUFDSyxDQUFELENBQXBHO0FBQXlHK0IsaUJBQUssRUFBQztBQUFDQyx1QkFBUyxFQUFFcEMsc0JBQXNCLENBQUNJLENBQUQ7QUFBbEM7QUFBL0csV0FBaEIsQ0FBZjtBQUNBeUIsa0JBQVEsQ0FBQ1Esa0JBQVQsQ0FBNEIsSUFBNUI7QUFDQW5CLG9CQUFVLENBQUNaLElBQVgsQ0FBZ0J1QixRQUFoQjtBQUNILFNBVHdELENBVzdEO0FBQ0E7QUFDQTs7O0FBQ0EsWUFBSVMsS0FBSyxHQUFHLElBQUlqRixFQUFFLENBQUNrRixLQUFQLENBQWE7QUFBQ0MsbUJBQVMsRUFBRSxDQUFaO0FBQWdCQyxvQkFBVSxFQUFFO0FBQTVCLFNBQWIsRUFBNkNDLE9BQTdDLENBQXFELENBQXJELENBQVo7QUFDQUosYUFBSyxDQUFDSyxZQUFOLENBQW1CekIsVUFBbkI7QUFDQSxZQUFJMEIsU0FBUyxHQUFHLElBQUl2RixFQUFFLENBQUN3RixTQUFQLEdBQW1CQyxVQUFuQixDQUE4QixDQUFDUixLQUFELENBQTlCLEVBQXVDUyxNQUF2QyxDQUE4QyxDQUFDVCxLQUFELENBQTlDLEVBQXVELENBQXZELENBQWhCO0FBQ0FBLGFBQUssQ0FBQ2pELElBQU4sQ0FBV04sT0FBWCxFQUFvQkUsT0FBcEI7QUFDQyxPQXZJSSxDQXlJTDs7O0FBRUEsVUFBSWtDLEtBQUssQ0FBQ1EsT0FBTixDQUFjMUIsYUFBZCxLQUFnQ0EsYUFBYSxDQUFDSSxNQUFsRCxFQUF5RDtBQUVyRCxhQUFLLElBQUlELENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ0gsYUFBYSxDQUFDSSxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEwQztBQUN0QztBQUNBO0FBQ0EsY0FBSXdCLFFBQVEsR0FBR0wsb0JBQW9CLENBQUN0QixhQUFhLENBQUNHLENBQUQsQ0FBZCxFQUFtQixFQUFuQixDQUFuQztBQUNBLGNBQUl5QixRQUFRLEdBQUcsSUFBSXhFLEVBQUUsQ0FBQ3lFLFFBQVAsQ0FBZ0I7QUFBQ0Msb0JBQVEsRUFBQyxLQUFWO0FBQWlCQyxnQkFBSSxFQUFFSixRQUF2QjtBQUFpQ0ssNkJBQWlCLEVBQUMsS0FBbkQ7QUFBMERDLDRCQUFnQixFQUFFaEMsc0JBQXNCLENBQUNFLENBQUQsQ0FBbEc7QUFBdUcrQixpQkFBSyxFQUFDO0FBQUNDLHVCQUFTLEVBQUVqQyxvQkFBb0IsQ0FBQ0MsQ0FBRDtBQUFoQztBQUE3RyxXQUFoQixDQUFmO0FBQ0F5QixrQkFBUSxDQUFDUSxrQkFBVCxDQUE0QixJQUE1QjtBQUNBakIsb0JBQVUsQ0FBQ2QsSUFBWCxDQUFnQnVCLFFBQWhCO0FBQ0g7O0FBR0wsWUFBSW1CLE1BQU0sR0FBRyxJQUFJM0YsRUFBRSxDQUFDa0YsS0FBUCxDQUFhO0FBQUNDLG1CQUFTLEVBQUUsQ0FBWjtBQUFnQkMsb0JBQVUsRUFBRTtBQUE1QixTQUFiLEVBQTZDQyxPQUE3QyxDQUFxRCxDQUFyRCxDQUFiO0FBQ0FNLGNBQU0sQ0FBQ0wsWUFBUCxDQUFvQnZCLFVBQXBCO0FBQ0EsWUFBSTZCLFVBQVUsR0FBRyxJQUFJNUYsRUFBRSxDQUFDd0YsU0FBUCxHQUFtQkMsVUFBbkIsQ0FBOEIsQ0FBQ0UsTUFBRCxDQUE5QixFQUF3Q0QsTUFBeEMsQ0FBK0MsQ0FBQ0MsTUFBRCxDQUEvQyxFQUF5RCxDQUF6RCxDQUFqQjtBQUNBQSxjQUFNLENBQUMzRCxJQUFQLENBQVlOLE9BQVosRUFBcUJPLE9BQXJCO0FBQ0MsT0EzSkksQ0E2Skw7OztBQUVBLFVBQUk2QixLQUFLLENBQUNRLE9BQU4sQ0FBY3BCLGNBQWQsS0FBaUNBLGNBQWMsQ0FBQ0YsTUFBcEQsRUFBMkQ7QUFDdkRnQixpQkFBUyxDQUFDZixJQUFWLENBQWUsSUFBSWpELEVBQUUsQ0FBQzZGLFNBQVAsQ0FBaUIsR0FBakIsQ0FBZjs7QUFDQSxhQUFLLElBQUk5QyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNHLGNBQWMsQ0FBQ0YsTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBMkM7QUFDdkM7QUFDQTtBQUNBLGNBQUl3QixRQUFRLEdBQUdMLG9CQUFvQixDQUFDaEIsY0FBYyxDQUFDSCxDQUFELENBQWYsRUFBb0IsRUFBcEIsQ0FBbkM7QUFDQSxjQUFJeUIsUUFBUSxHQUFHLElBQUl4RSxFQUFFLENBQUN5RSxRQUFQLENBQWdCO0FBQUNDLG9CQUFRLEVBQUMsS0FBVjtBQUFpQm9CLHFCQUFTLEVBQUMsS0FBM0I7QUFBa0NuQixnQkFBSSxFQUFFSixRQUF4QztBQUFrREssNkJBQWlCLEVBQUMsSUFBcEU7QUFBMEVDLDRCQUFnQixFQUFFMUIsdUJBQXVCLENBQUNKLENBQUQsQ0FBbkg7QUFBd0grQixpQkFBSyxFQUFDO0FBQUNDLHVCQUFTLEVBQUUzQixxQkFBcUIsQ0FBQ0wsQ0FBRDtBQUFqQztBQUE5SCxXQUFoQixDQUFmO0FBQ0F5QixrQkFBUSxDQUFDUSxrQkFBVCxDQUE0QixJQUE1QixFQUFrQ2UsR0FBbEM7QUFDQS9CLG1CQUFTLENBQUNmLElBQVYsQ0FBZXVCLFFBQWY7QUFDSCxTQVRzRCxDQVczRDtBQUNBO0FBQ0E7OztBQUNBLFlBQUl3QixNQUFNLEdBQUcsSUFBSWhHLEVBQUUsQ0FBQ2tGLEtBQVAsQ0FBYTtBQUFDQyxtQkFBUyxFQUFFLENBQVo7QUFBZ0JDLG9CQUFVLEVBQUU7QUFBNUIsU0FBYixFQUE2Q0MsT0FBN0MsQ0FBcUQsQ0FBckQsQ0FBYjtBQUNBVyxjQUFNLENBQUNWLFlBQVAsQ0FBb0J0QixTQUFwQjtBQUNBLFlBQUl1QixTQUFTLEdBQUcsSUFBSXZGLEVBQUUsQ0FBQ3dGLFNBQVAsR0FBbUJDLFVBQW5CLENBQThCLENBQUNPLE1BQUQsQ0FBOUIsRUFBd0NOLE1BQXhDLENBQStDLENBQUNNLE1BQUQsQ0FBL0MsRUFBeUQsRUFBekQsQ0FBaEI7QUFFQUEsY0FBTSxDQUFDaEUsSUFBUCxDQUFZTixPQUFaLEVBQXFCRSxPQUFyQjtBQUNDLE9BbExJLENBb0xKOzs7QUFFQSxVQUFJa0MsS0FBSyxDQUFDUSxPQUFOLENBQWNqQixZQUFkLEtBQStCQSxZQUFZLENBQUNMLE1BQWhELEVBQXVEO0FBQ3BEaUIsaUJBQVMsQ0FBQ2hCLElBQVYsQ0FBZSxJQUFJakQsRUFBRSxDQUFDNkYsU0FBUCxDQUFpQixHQUFqQixDQUFmOztBQUNBLGFBQUssSUFBSTlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ00sWUFBWSxDQUFDTCxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQztBQUNBO0FBQ0EsY0FBSXdCLFFBQVEsR0FBR0wsb0JBQW9CLENBQUNiLFlBQVksQ0FBQ04sQ0FBRCxDQUFiLEVBQWtCLEVBQWxCLENBQW5DO0FBQ0EsY0FBSXlCLFFBQVEsR0FBRyxJQUFJeEUsRUFBRSxDQUFDeUUsUUFBUCxDQUFnQjtBQUFDQyxvQkFBUSxFQUFDLEtBQVY7QUFBaUJvQixxQkFBUyxFQUFDLEtBQTNCO0FBQWtDbkIsZ0JBQUksRUFBRUosUUFBeEM7QUFBa0RLLDZCQUFpQixFQUFDLElBQXBFO0FBQTBFQyw0QkFBZ0IsRUFBRXZCLHFCQUFxQixDQUFDUCxDQUFELENBQWpIO0FBQXNIK0IsaUJBQUssRUFBQztBQUFDQyx1QkFBUyxFQUFFeEIsbUJBQW1CLENBQUNSLENBQUQ7QUFBL0I7QUFBNUgsV0FBaEIsQ0FBZjtBQUNBeUIsa0JBQVEsQ0FBQ1Esa0JBQVQsQ0FBNEIsSUFBNUIsRUFBa0NlLEdBQWxDO0FBQ0E5QixtQkFBUyxDQUFDaEIsSUFBVixDQUFldUIsUUFBZjtBQUNILFNBVG1ELENBV3hEO0FBQ0E7QUFDQTs7O0FBQ0EsWUFBSXlCLE1BQU0sR0FBRyxJQUFJakcsRUFBRSxDQUFDa0YsS0FBUCxDQUFhO0FBQUNDLG1CQUFTLEVBQUUsQ0FBWjtBQUFnQkMsb0JBQVUsRUFBRTtBQUE1QixTQUFiLEVBQTZDQyxPQUE3QyxDQUFxRCxDQUFyRCxDQUFiO0FBQ0FZLGNBQU0sQ0FBQ1gsWUFBUCxDQUFvQnJCLFNBQXBCO0FBQ0EsWUFBSXNCLFNBQVMsR0FBRyxJQUFJdkYsRUFBRSxDQUFDd0YsU0FBUCxHQUFtQkMsVUFBbkIsQ0FBOEIsQ0FBQ1EsTUFBRCxDQUE5QixFQUF3Q1AsTUFBeEMsQ0FBK0MsQ0FBQ08sTUFBRCxDQUEvQyxFQUF5RCxFQUF6RCxDQUFoQjtBQUVBQSxjQUFNLENBQUNqRSxJQUFQLENBQVlOLE9BQVosRUFBcUJFLE9BQXJCO0FBQ0M7O0FBRURULGFBQU8sQ0FBQ0MsR0FBUixDQUFZYSxPQUFaO0FBQ0FQLGFBQU8sQ0FBQ3dFLFNBQVIsR0FDQ0MsU0FERDtBQUdJLFdBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsQ0FBNkI5RixZQUE3QjtBQUNYOzs7d0NBRW1CO0FBQ2hCLFdBQUsrRixVQUFMO0FBQ0g7Ozt1Q0FFa0JDLFMsRUFBVztBQUMxQjtBQUNBO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLEtBQUtMLElBQUwsQ0FBVUMsTUFBeEI7O0FBQ0EsYUFBT0ksT0FBTyxDQUFDQyxhQUFSLEVBQVAsRUFBZ0M7QUFDNUJELGVBQU8sQ0FBQ0UsV0FBUixDQUFvQkYsT0FBTyxDQUFDRyxTQUE1QjtBQUNIOztBQUNELFdBQUtMLFVBQUwsR0FQMEIsQ0FRMUI7QUFDQztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7NkJBZ0JTO0FBQUEsVUFDQzVGLEVBREQsR0FDSyxLQUFLUCxLQURWLENBQ0NPLEVBREQ7QUFFTCwwQkFBTztBQUFLLFVBQUUsRUFBRUEsRUFBVDtBQUFhLFdBQUcsRUFBQyxRQUFqQjtBQUEwQixhQUFLLEVBQUU7QUFDcENrRyxnQkFBTSxFQUFFLE1BRDRCO0FBRXBDQyxpQkFBTyxFQUFFLENBRjJCO0FBR3BDQyxzQkFBWSxFQUFFLENBSHNCO0FBSXBDQyxpQkFBTyxFQUFFO0FBSjJCO0FBQWpDLFFBQVA7QUFRSDs7OztFQXRRZ0NDLCtDOzs7QUEwUXJDOUcsT0FBTyxDQUFDK0csWUFBUixHQUF1QixFQUF2QjtBQUVBL0csT0FBTyxDQUFDZ0gsU0FBUixHQUFvQjtBQUNoQjs7O0FBR0F4RyxJQUFFLEVBQUV5RyxpREFBUyxDQUFDQyxNQUpFOztBQU1oQjs7O0FBR0F6RyxvQkFBa0IsRUFBRXdHLGlEQUFTLENBQUNFLEtBVGQ7QUFVaEJ6RyxtQkFBaUIsRUFBRXVHLGlEQUFTLENBQUNFLEtBVmI7QUFXaEJ4RyxnQkFBYyxFQUFFc0csaURBQVMsQ0FBQ0UsS0FYVjtBQVloQnZHLG1CQUFpQixFQUFFcUcsaURBQVMsQ0FBQ0UsS0FaYjtBQWFoQnRHLGtCQUFnQixFQUFFb0csaURBQVMsQ0FBQ0UsS0FiWjtBQWNoQnJHLGVBQWEsRUFBRW1HLGlEQUFTLENBQUNFLEtBZFQ7O0FBaUJoQjs7OztBQUlBcEcsVUFBUSxFQUFFa0csaURBQVMsQ0FBQ0c7QUFyQkosQ0FBcEIsQyIsImZpbGUiOiJkNTVjMGI1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzZXR1cFNjb3JlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aWQsIG1hc2tpbmdfbm90ZXZhbHVlcywgbWFza2luZ19ub3Rlc2l6ZXMsIG1hc2tpbmdfY29sb3JzLCB0YXJnZXRfbm90ZXZhbHVlcywgdGFyZ2V0X25vdGVzaXplcywgdGFyZ2V0X2NvbG9ycywgc2V0UHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgICAgIC8vY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5jb25zb2xlLmxvZyh0aGlzLnByb3BzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlc2l6ZSgxMDAsIDI1MCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0RvIFRyZWJsZSBhbmQgQmFzcyBDbGVmc1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX3QgPSBuZXcgVkYuU3RhdmUoMTAsIDYwLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdC5hZGRDbGVmKFwidHJlYmxlXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90LnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX2IgPSBuZXcgVkYuU3RhdmUoMTAsIDEyMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlX2IuYWRkQ2xlZihcImJhc3NcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlX2Iuc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRG8gY29ubmVjdG9yc1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGNvbm5lY3RvcjIgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IyLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvL2Nvbm5lY3RvcjMuc2V0VGV4dCgnT3JjaC4nKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RvcjMuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9Fcm90ZXRhYW4gbnVvdGl0IHZpaXZhc3RvaWxsZVxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9tYXNraW5ncyA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX21hc2tpbmdzX25vdGVzaXplID0gW11cclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfbWFza2luZ3NfY29sb3JzID0gW11cclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX21hc2tpbmdzID0gW11cclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX21hc2tpbmdzX25vdGVzaXplID0gW11cclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX21hc2tpbmdzX2NvbG9ycyA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8bWFza2luZ19ub3RldmFsdWVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNraW5nX25vdGV2YWx1ZXNbaV0+NTkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbWFza2luZ3MucHVzaChtYXNraW5nX25vdGV2YWx1ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWJsZV9tYXNraW5nc19ub3Rlc2l6ZS5wdXNoKG1hc2tpbmdfbm90ZXNpemVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbWFza2luZ3NfY29sb3JzLnB1c2gobWFza2luZ19jb2xvcnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19tYXNraW5ncy5wdXNoKG1hc2tpbmdfbm90ZXZhbHVlc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19tYXNraW5nc19ub3Rlc2l6ZS5wdXNoKG1hc2tpbmdfbm90ZXNpemVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX21hc2tpbmdzX2NvbG9ycy5wdXNoKG1hc2tpbmdfY29sb3JzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX3RhcmdldHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV90YXJnZXRzX25vdGVzaXplID0gW11cclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfdGFyZ2V0c19jb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3NfdGFyZ2V0cyA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc190YXJnZXRzX25vdGVzaXplID0gW11cclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX3RhcmdldHNfY29sb3JzID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7aTx0YXJnZXRfbm90ZXZhbHVlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X25vdGV2YWx1ZXNbaV0+NTkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfdGFyZ2V0cy5wdXNoKHRhcmdldF9ub3RldmFsdWVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfdGFyZ2V0c19ub3Rlc2l6ZS5wdXNoKHRhcmdldF9ub3Rlc2l6ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWJsZV90YXJnZXRzX2NvbG9ycy5wdXNoKHRhcmdldF9jb2xvcnNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc190YXJnZXRzLnB1c2godGFyZ2V0X25vdGV2YWx1ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfdGFyZ2V0c19ub3Rlc2l6ZS5wdXNoKHRhcmdldF9ub3Rlc2l6ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfdGFyZ2V0c19jb2xvcnMucHVzaCh0YXJnZXRfY29sb3JzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9GdW5rdGlvIGpvbGxhIHBpaXJyZXTDpMOkbiBudW90aW4gdmllcmVlblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmllcmVlbihudW0sIHBvcykgeyByZXR1cm4gbmV3IFZGLkZyZXRIYW5kRmluZ2VyKG51bSkuc2V0UG9zaXRpb24ocG9zKTsgfVxyXG4gICAgICAgICAgICB2YXIgbWFza2luZ3NfdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB2YXIgbWFza2luZ3NfYiA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0c190ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzX2IgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gbWlkaW5vdGUydHJlYmxlc3RhZmYobWlkaW5vdGUsIG9mZnNldCl7XHJcbiAgICAgICAgICAgICAgICAvL09mZnNldCBmb3IgdHJlYmxlIG1pZGRsZS1jND02MCwgYmFzcy1lMj00MFxyXG4gICAgICAgICAgICAgICAgLy9zZXQgbWlkZGxlID0gMCwgNCBzdGVwcz0gb25lIGxpbmVcclxuICAgICAgICAgICAgICAgIHZhciBsaW5lX29mZnNldD0wO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gNDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVfb2Zmc2V0PS0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWlkaW5vdGU9KG1pZGlub3RlLW9mZnNldCkvNDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWlkaW5vdGU+MStsaW5lX29mZnNldCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkaW5vdGU9bWlkaW5vdGUrMC4yNVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1pZGlub3RlPjMrbGluZV9vZmZzZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZGlub3RlPW1pZGlub3RlKzAuMjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtaWRpbm90ZT40LjUrbGluZV9vZmZzZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZGlub3RlPW1pZGlub3RlKzAuMjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtaWRpbm90ZT42LjUrbGluZV9vZmZzZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZGlub3RlPW1pZGlub3RlKzAuMjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtaWRpbm90ZT44K2xpbmVfb2Zmc2V0KXtcclxuICAgICAgICAgICAgICAgICAgICBtaWRpbm90ZT1taWRpbm90ZSswLjI1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWlkaW5vdGU+MTArbGluZV9vZmZzZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZGlub3RlPW1pZGlub3RlKzAuMjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtaWRpbm90ZT4xMy41K2xpbmVfb2Zmc2V0KXtcclxuICAgICAgICAgICAgICAgICAgICBtaWRpbm90ZT1taWRpbm90ZSswLjI1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWlkaW5vdGU+MTUuNStsaW5lX29mZnNldCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkaW5vdGU9bWlkaW5vdGUrMC4yNVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pZGlub3RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9DaGVjayBpZiB0aGVyZSdzIG9yY2hlc3RyYXRpb24gc3R1ZmYgZm9yIHRyZWJsZSBzdGFmZiBhbmQgYXBwZW5kOlxyXG5cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodHJlYmxlX21hc2tpbmdzKSAmJiB0cmVibGVfbWFza2luZ3MubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8dHJlYmxlX21hc2tpbmdzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0RyYXcgY3VzdG9tIG5vdGVoZWFkc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbGluZSAwPW1pZGRsZSBjIG9uIHRyZWJsZSwgMT1lIGV0Yy4sIGZvbnQgc2NhbGUgNDA9YWJvdXQgbm9ybWFsIG5vdGUsIGZpbGxzdHlsZSA9IG5vdGUgY29sb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVub3RlID0gbWlkaW5vdGUydHJlYmxlc3RhZmYodHJlYmxlX21hc2tpbmdzW2ldLCA2MClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZWhlYWQgPSBuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBsaW5lOiBsaW5lbm90ZSwgY3VzdG9tX2dseXBoX2NvZGU6XCJ2ZDJcIiwgZ2x5cGhfZm9udF9zY2FsZTogdHJlYmxlX21hc2tpbmdzX25vdGVzaXplW2ldLCBzdHlsZTp7ZmlsbFN0eWxlOiB0cmVibGVfbWFza2luZ3NfY29sb3JzW2ldfX0pIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVoZWFkLnNldENlbnRlckFsaWdubWVudCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tpbmdzX3QucHVzaChub3RlaGVhZClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbWFza2luZ3NfdD1bXVxyXG4gICAgICAgICAgICAvL21hc2tpbmdzX3QucHVzaChuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBsaW5lOiAyLjMsIGN1c3RvbV9nbHlwaF9jb2RlOlwidmQyXCIsIGdseXBoX2ZvbnRfc2NhbGU6IDEwMCwgc3R5bGU6e2ZpbGxTdHlsZTogJ3JlZCd9fSkgKVxyXG4gICAgICAgICAgICAvL21hc2tpbmdzX3QucHVzaChuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBsaW5lOiA1LjMsIGN1c3RvbV9nbHlwaF9jb2RlOlwidmQyXCIsIGdseXBoX2ZvbnRfc2NhbGU6IDEwMCwgc3R5bGU6e2ZpbGxTdHlsZTogJ3JlZCd9fSkgKVxyXG4gICAgICAgICAgICB2YXIgdm9pY2UgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDF9KS5zZXRNb2RlKDIpO1xyXG4gICAgICAgICAgICB2b2ljZS5hZGRUaWNrYWJsZXMobWFza2luZ3NfdCk7XHJcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VdKS5mb3JtYXQoW3ZvaWNlXSwgMSk7XHJcbiAgICAgICAgICAgIHZvaWNlLmRyYXcoY29udGV4dCwgc3RhdmVfdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vSWYgdGhlcmUncyBvcmNoZXN0cmF0aW9uIHN0dWZmIGZvciBiYXNzIGNsZWY6XHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNzX21hc2tpbmdzKSAmJiBiYXNzX21hc2tpbmdzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGJhc3NfbWFza2luZ3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRHJhdyBjdXN0b20gbm90ZWhlYWRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9saW5lIDA9bWlkZGxlIGMgb24gdHJlYmxlLCAxPWUgZXRjLiwgZm9udCBzY2FsZSA0MD1hYm91dCBub3JtYWwgbm90ZSwgZmlsbHN0eWxlID0gbm90ZSBjb2xvciBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZW5vdGUgPSBtaWRpbm90ZTJ0cmVibGVzdGFmZihiYXNzX21hc2tpbmdzW2ldLCA0MClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZWhlYWQgPSBuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBsaW5lOiBsaW5lbm90ZSwgY3VzdG9tX2dseXBoX2NvZGU6XCJ2ZDJcIiwgZ2x5cGhfZm9udF9zY2FsZTogYmFzc19tYXNraW5nc19ub3Rlc2l6ZVtpXSwgc3R5bGU6e2ZpbGxTdHlsZTogYmFzc19tYXNraW5nc19jb2xvcnNbaV19fSkgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZWhlYWQuc2V0Q2VudGVyQWxpZ25tZW50KHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza2luZ3NfYi5wdXNoKG5vdGVoZWFkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdm9pY2UyID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiAxfSkuc2V0TW9kZSgyKTtcclxuICAgICAgICAgICAgdm9pY2UyLmFkZFRpY2thYmxlcyhtYXNraW5nc19iKTtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlcjIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2UyXSkuZm9ybWF0KFt2b2ljZTJdLCAxKTtcclxuICAgICAgICAgICAgdm9pY2UyLmRyYXcoY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlcmUncyB0YXJnZXQgc3R1ZmYgZm9yIHRyZWJsZSBzdGFmZiBhbmQgYXBwZW5kOlxyXG5cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodHJlYmxlX3RhcmdldHMpICYmIHRyZWJsZV90YXJnZXRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzX3QucHVzaChuZXcgVkYuR2hvc3ROb3RlKCdxJykpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8dHJlYmxlX3RhcmdldHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRHJhdyBjdXN0b20gbm90ZWhlYWRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9saW5lIDA9bWlkZGxlIGMgb24gdHJlYmxlLCAxPWUgZXRjLiwgZm9udCBzY2FsZSA0MD1hYm91dCBub3JtYWwgbm90ZSwgZmlsbHN0eWxlID0gbm90ZSBjb2xvciBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZW5vdGUgPSBtaWRpbm90ZTJ0cmVibGVzdGFmZih0cmVibGVfdGFyZ2V0c1tpXSwgNjApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdGVoZWFkID0gbmV3IFZGLk5vdGVIZWFkKHtkdXJhdGlvbjonMTI4JywgZGlzcGxhY2VkOmZhbHNlLCBsaW5lOiBsaW5lbm90ZSwgY3VzdG9tX2dseXBoX2NvZGU6XCJ2YlwiLCBnbHlwaF9mb250X3NjYWxlOiB0cmVibGVfdGFyZ2V0c19ub3Rlc2l6ZVtpXSwgc3R5bGU6e2ZpbGxTdHlsZTogdHJlYmxlX3RhcmdldHNfY29sb3JzW2ldfX0pIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVoZWFkLnNldENlbnRlckFsaWdubWVudCh0cnVlKS5zZXRcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzX3QucHVzaChub3RlaGVhZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL21hc2tpbmdzX3Q9W11cclxuICAgICAgICAgICAgLy9tYXNraW5nc190LnB1c2gobmV3IFZGLk5vdGVIZWFkKHtkdXJhdGlvbjonMTI4JywgbGluZTogMi4zLCBjdXN0b21fZ2x5cGhfY29kZTpcInZkMlwiLCBnbHlwaF9mb250X3NjYWxlOiAxMDAsIHN0eWxlOntmaWxsU3R5bGU6ICdyZWQnfX0pIClcclxuICAgICAgICAgICAgLy9tYXNraW5nc190LnB1c2gobmV3IFZGLk5vdGVIZWFkKHtkdXJhdGlvbjonMTI4JywgbGluZTogNS4zLCBjdXN0b21fZ2x5cGhfY29kZTpcInZkMlwiLCBnbHlwaF9mb250X3NjYWxlOiAxMDAsIHN0eWxlOntmaWxsU3R5bGU6ICdyZWQnfX0pIClcclxuICAgICAgICAgICAgdmFyIHZvaWNlMyA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogMX0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgIHZvaWNlMy5hZGRUaWNrYWJsZXModGFyZ2V0c190KTtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZTNdKS5mb3JtYXQoW3ZvaWNlM10sIDEwKTtcclxuXHJcbiAgICAgICAgICAgIHZvaWNlMy5kcmF3KGNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgLy9DaGVjayBpZiB0aGVyZSdzIHRhcmdldCBzdHVmZiBmb3IgdmFzcyBzdGFmZiBhbmQgYXBwZW5kOlxyXG5cclxuICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGJhc3NfdGFyZ2V0cykgJiYgYmFzc190YXJnZXRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzX2IucHVzaChuZXcgVkYuR2hvc3ROb3RlKCdxJykpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8YmFzc190YXJnZXRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0RyYXcgY3VzdG9tIG5vdGVoZWFkc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbGluZSAwPW1pZGRsZSBjIG9uIHRyZWJsZSwgMT1lIGV0Yy4sIGZvbnQgc2NhbGUgNDA9YWJvdXQgbm9ybWFsIG5vdGUsIGZpbGxzdHlsZSA9IG5vdGUgY29sb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVub3RlID0gbWlkaW5vdGUydHJlYmxlc3RhZmYoYmFzc190YXJnZXRzW2ldLCA2MClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZWhlYWQgPSBuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBkaXNwbGFjZWQ6ZmFsc2UsIGxpbmU6IGxpbmVub3RlLCBjdXN0b21fZ2x5cGhfY29kZTpcInZiXCIsIGdseXBoX2ZvbnRfc2NhbGU6IGJhc3NfdGFyZ2V0c19ub3Rlc2l6ZVtpXSwgc3R5bGU6e2ZpbGxTdHlsZTogYmFzc190YXJnZXRzX2NvbG9yc1tpXX19KSBcclxuICAgICAgICAgICAgICAgICAgICBub3RlaGVhZC5zZXRDZW50ZXJBbGlnbm1lbnQodHJ1ZSkuc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0c19iLnB1c2gobm90ZWhlYWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9tYXNraW5nc190PVtdXHJcbiAgICAgICAgICAgIC8vbWFza2luZ3NfdC5wdXNoKG5ldyBWRi5Ob3RlSGVhZCh7ZHVyYXRpb246JzEyOCcsIGxpbmU6IDIuMywgY3VzdG9tX2dseXBoX2NvZGU6XCJ2ZDJcIiwgZ2x5cGhfZm9udF9zY2FsZTogMTAwLCBzdHlsZTp7ZmlsbFN0eWxlOiAncmVkJ319KSApXHJcbiAgICAgICAgICAgIC8vbWFza2luZ3NfdC5wdXNoKG5ldyBWRi5Ob3RlSGVhZCh7ZHVyYXRpb246JzEyOCcsIGxpbmU6IDUuMywgY3VzdG9tX2dseXBoX2NvZGU6XCJ2ZDJcIiwgZ2x5cGhfZm9udF9zY2FsZTogMTAwLCBzdHlsZTp7ZmlsbFN0eWxlOiAncmVkJ319KSApXHJcbiAgICAgICAgICAgIHZhciB2b2ljZTQgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDF9KS5zZXRNb2RlKDIpO1xyXG4gICAgICAgICAgICB2b2ljZTQuYWRkVGlja2FibGVzKHRhcmdldHNfYik7XHJcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2U0XSkuZm9ybWF0KFt2b2ljZTRdLCAxMCk7XHJcblxyXG4gICAgICAgICAgICB2b2ljZTQuZHJhdyhjb250ZXh0LCBzdGF2ZV90KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdmVfYilcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAuY2xvc2VQYXRoKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMub3V0ZXIyLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vaWYgKHRoaXMubm90ZXMgIT09IHByZXZQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBwcmV2UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IHByZXZQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgIC8vY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXIyXHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLypcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbmV4dFByb3BzLm5vdGVzXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBuZXh0UHJvcHMuaW5zdHJ1bWVudHNcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXh0UHJvcHMudGFyZ2V0XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG5cclxuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5wcm9wcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMucHJvcHMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KTtcclxufVxyXG4gICovXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkfT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gcmVmPVwib3V0ZXIyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19ICAgICAgICAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbk1hc2tpbmcuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5NYXNraW5nLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBtYXNraW5nX25vdGV2YWx1ZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIG1hc2tpbmdfbm90ZXNpemVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBtYXNraW5nX2NvbG9yczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgdGFyZ2V0X25vdGV2YWx1ZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHRhcmdldF9ub3Rlc2l6ZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHRhcmdldF9jb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
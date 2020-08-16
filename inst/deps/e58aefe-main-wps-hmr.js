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
      } // Init masking notes y-coordinate array


      var masking_y_coords = []; //If there's orchestration stuff for bass clef:

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
              fillStyle: 'none'
            }
          }); //bass_maskings_colors[i]

          notehead.setCenterAlignment(true); //console.log(notehead)

          maskings_b.push(notehead);
        }

        var voice2 = new VF.Voice({
          num_beats: 1,
          beat_value: 1
        }).setMode(2);
        voice2.addTickables(maskings_b);
        console.log(voice2);
        var formatter2 = new VF.Formatter().joinVoices([voice2]).format([voice2], 1);
        voice2.draw(context, stave_b);
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
              fillStyle: 'none'
            }
          }); //treble_maskings_colors[i] 

          notehead.setCenterAlignment(true); //console.log(notehead)

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

      if (Array.isArray(bass_maskings) && bass_maskings.length) {
        for (var i = 0; i < bass_maskings.length; i++) {
          //Get y coordinate of the note nad push to array
          masking_y_coords.push(voice2.tickables[i].y);
        }
      }

      if (Array.isArray(treble_maskings) && treble_maskings.length) {
        for (var i = 0; i < treble_maskings.length; i++) {
          //Get y coordinate of the note nad push to array
          masking_y_coords.push(voice.tickables[i].y);
        }
      }

      console.log(masking_y_coords);

      for (var j = 0; j < masking_y_coords.length - 1; j++) {
        console.log(masking_y_coords[j]);
        context.beginPath() // start recording our pen's moves
        .moveTo(40, masking_y_coords[j]) // pickup the pen and set it down at X=0, Y=0. NOTE: Y=0 is the top of the screen.
        .lineTo(90, masking_y_coords[j]) // now add a line to the right from (0, 0) to (50, 0) to our path
        .lineTo(90, masking_y_coords[j + 1]) // add a line to the left and down from (50, 0) to (25, 50)
        .lineTo(40, masking_y_coords[j + 1]).closePath() // now add a line back to wherever the path started, in this case (0, 0), closing the triangle.
        .fill({
          fill: masking_colors[j]
        }); // now fill our box in masking_colors[j]
      }

      console.log(context);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvTWFza2luZy5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJNYXNraW5nIiwicHJvcHMiLCJzdGF0ZSIsIngiLCJ5Iiwic3ZnQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJtYXNraW5nX25vdGV2YWx1ZXMiLCJtYXNraW5nX25vdGVzaXplcyIsIm1hc2tpbmdfY29sb3JzIiwidGFyZ2V0X25vdGV2YWx1ZXMiLCJ0YXJnZXRfbm90ZXNpemVzIiwidGFyZ2V0X2NvbG9ycyIsInNldFByb3BzIiwiY29uc29sZSIsImxvZyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJCYWNrZW5kcyIsIlNWRyIsInJlc2l6ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic3RhdmVfdCIsIlN0YXZlIiwiYWRkQ2xlZiIsInNldENvbnRleHQiLCJkcmF3Iiwic3RhdmVfYiIsImNvbm5lY3RvciIsIlN0YXZlQ29ubmVjdG9yIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsImNvbm5lY3RvcjMiLCJCUkFDS0VUIiwidHJlYmxlX21hc2tpbmdzIiwidHJlYmxlX21hc2tpbmdzX25vdGVzaXplIiwidHJlYmxlX21hc2tpbmdzX2NvbG9ycyIsImJhc3NfbWFza2luZ3MiLCJiYXNzX21hc2tpbmdzX25vdGVzaXplIiwiYmFzc19tYXNraW5nc19jb2xvcnMiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRyZWJsZV90YXJnZXRzIiwidHJlYmxlX3RhcmdldHNfbm90ZXNpemUiLCJ0cmVibGVfdGFyZ2V0c19jb2xvcnMiLCJiYXNzX3RhcmdldHMiLCJiYXNzX3RhcmdldHNfbm90ZXNpemUiLCJiYXNzX3RhcmdldHNfY29sb3JzIiwidmllcmVlbiIsIm51bSIsInBvcyIsIkZyZXRIYW5kRmluZ2VyIiwic2V0UG9zaXRpb24iLCJtYXNraW5nc190IiwiQXJyYXkiLCJtYXNraW5nc19iIiwidGFyZ2V0c190IiwidGFyZ2V0c19iIiwibWlkaW5vdGUydHJlYmxlc3RhZmYiLCJtaWRpbm90ZSIsIm9mZnNldCIsImxpbmVfb2Zmc2V0IiwibWFza2luZ195X2Nvb3JkcyIsImlzQXJyYXkiLCJsaW5lbm90ZSIsIm5vdGVoZWFkIiwiTm90ZUhlYWQiLCJkdXJhdGlvbiIsImxpbmUiLCJjdXN0b21fZ2x5cGhfY29kZSIsImdseXBoX2ZvbnRfc2NhbGUiLCJzdHlsZSIsImZpbGxTdHlsZSIsInNldENlbnRlckFsaWdubWVudCIsInZvaWNlMiIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsInNldE1vZGUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXR0ZXIyIiwiRm9ybWF0dGVyIiwiam9pblZvaWNlcyIsImZvcm1hdCIsInZvaWNlIiwiZm9ybWF0dGVyIiwiR2hvc3ROb3RlIiwiZGlzcGxhY2VkIiwic2V0Iiwidm9pY2UzIiwidm9pY2U0IiwidGlja2FibGVzIiwiaiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJyZWZzIiwib3V0ZXIyIiwiYXBwZW5kQ2hpbGQiLCJzZXR1cFNjb3JlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxPOzs7OztBQUVqQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFO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QjtBQUlwQ0MsaUJBQU8sRUFBRTtBQUoyQjtBQUFqQyxRQUFQO0FBUUg7Ozs7RUExU2dDQywrQzs7O0FBOFNyQ3BILE9BQU8sQ0FBQ3FILFlBQVIsR0FBdUIsRUFBdkI7QUFFQXJILE9BQU8sQ0FBQ3NILFNBQVIsR0FBb0I7QUFDaEI7OztBQUdBOUcsSUFBRSxFQUFFK0csaURBQVMsQ0FBQ0MsTUFKRTs7QUFNaEI7OztBQUdBL0csb0JBQWtCLEVBQUU4RyxpREFBUyxDQUFDRSxLQVRkO0FBVWhCL0csbUJBQWlCLEVBQUU2RyxpREFBUyxDQUFDRSxLQVZiO0FBV2hCOUcsZ0JBQWMsRUFBRTRHLGlEQUFTLENBQUNFLEtBWFY7QUFZaEI3RyxtQkFBaUIsRUFBRTJHLGlEQUFTLENBQUNFLEtBWmI7QUFhaEI1RyxrQkFBZ0IsRUFBRTBHLGlEQUFTLENBQUNFLEtBYlo7QUFjaEIzRyxlQUFhLEVBQUV5RyxpREFBUyxDQUFDRSxLQWRUOztBQWlCaEI7Ozs7QUFJQTFHLFVBQVEsRUFBRXdHLGlEQUFTLENBQUNHO0FBckJKLENBQXBCLEMiLCJmaWxlIjoiZTU4YWVmZS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFZGID0gVmV4LkZsb3c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0dXBTY29yZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2lkLCBtYXNraW5nX25vdGV2YWx1ZXMsIG1hc2tpbmdfbm90ZXNpemVzLCBtYXNraW5nX2NvbG9ycywgdGFyZ2V0X25vdGV2YWx1ZXMsIHRhcmdldF9ub3Rlc2l6ZXMsIHRhcmdldF9jb2xvcnMsIHNldFByb3BzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuY29uc29sZS5sb2codGhpcy5wcm9wcylcclxuICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZXNpemUoMTAwLCAyNTApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9EbyBUcmVibGUgYW5kIEJhc3MgQ2xlZnNcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBzdGF2ZV90ID0gbmV3IFZGLlN0YXZlKDEwLCA2MCwgMTAwKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlX3QuYWRkQ2xlZihcInRyZWJsZVwiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdC5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBzdGF2ZV9iID0gbmV3IFZGLlN0YXZlKDEwLCAxMjAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLmFkZENsZWYoXCJiYXNzXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0RvIGNvbm5lY3RvcnNcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBjb25uZWN0b3IyID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX1JJR0hUKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdG9yMi5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdG9yMyA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RvcjMuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IzLnNldFRleHQoJ09yY2guJyk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRXJvdGV0YWFuIG51b3RpdCB2aWl2YXN0b2lsbGVcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfbWFza2luZ3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9tYXNraW5nc19ub3Rlc2l6ZSA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX21hc2tpbmdzX2NvbG9ycyA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19tYXNraW5ncyA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19tYXNraW5nc19ub3Rlc2l6ZSA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19tYXNraW5nc19jb2xvcnMgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPG1hc2tpbmdfbm90ZXZhbHVlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFza2luZ19ub3RldmFsdWVzW2ldPjU5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX21hc2tpbmdzLnB1c2gobWFza2luZ19ub3RldmFsdWVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbWFza2luZ3Nfbm90ZXNpemUucHVzaChtYXNraW5nX25vdGVzaXplc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX21hc2tpbmdzX2NvbG9ycy5wdXNoKG1hc2tpbmdfY29sb3JzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfbWFza2luZ3MucHVzaChtYXNraW5nX25vdGV2YWx1ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfbWFza2luZ3Nfbm90ZXNpemUucHVzaChtYXNraW5nX25vdGVzaXplc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19tYXNraW5nc19jb2xvcnMucHVzaChtYXNraW5nX2NvbG9yc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV90YXJnZXRzID0gW11cclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfdGFyZ2V0c19ub3Rlc2l6ZSA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX3RhcmdldHNfY29sb3JzID0gW11cclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX3RhcmdldHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3NfdGFyZ2V0c19ub3Rlc2l6ZSA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc190YXJnZXRzX2NvbG9ycyA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8dGFyZ2V0X25vdGV2YWx1ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldF9ub3RldmFsdWVzW2ldPjU5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3RhcmdldHMucHVzaCh0YXJnZXRfbm90ZXZhbHVlc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3RhcmdldHNfbm90ZXNpemUucHVzaCh0YXJnZXRfbm90ZXNpemVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfdGFyZ2V0c19jb2xvcnMucHVzaCh0YXJnZXRfY29sb3JzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfdGFyZ2V0cy5wdXNoKHRhcmdldF9ub3RldmFsdWVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX3RhcmdldHNfbm90ZXNpemUucHVzaCh0YXJnZXRfbm90ZXNpemVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX3RhcmdldHNfY29sb3JzLnB1c2godGFyZ2V0X2NvbG9yc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgcmV0dXJuIG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7IH1cclxuICAgICAgICAgICAgdmFyIG1hc2tpbmdzX3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgdmFyIG1hc2tpbmdzX2IgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHNfdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0c19iID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1pZGlub3RlMnRyZWJsZXN0YWZmKG1pZGlub3RlLCBvZmZzZXQpe1xyXG4gICAgICAgICAgICAgICAgLy9PZmZzZXQgZm9yIHRyZWJsZSBtaWRkbGUtYzQ9NjAsIGJhc3MtZTI9NDBcclxuICAgICAgICAgICAgICAgIC8vc2V0IG1pZGRsZSA9IDAsIDQgc3RlcHM9IG9uZSBsaW5lXHJcbiAgICAgICAgICAgICAgICB2YXIgbGluZV9vZmZzZXQ9MDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IDQwKXtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lX29mZnNldD0tMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1pZGlub3RlPShtaWRpbm90ZS1vZmZzZXQpLzQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1pZGlub3RlPjErbGluZV9vZmZzZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZGlub3RlPW1pZGlub3RlKzAuMjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtaWRpbm90ZT4zK2xpbmVfb2Zmc2V0KXtcclxuICAgICAgICAgICAgICAgICAgICBtaWRpbm90ZT1taWRpbm90ZSswLjI1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWlkaW5vdGU+NC41K2xpbmVfb2Zmc2V0KXtcclxuICAgICAgICAgICAgICAgICAgICBtaWRpbm90ZT1taWRpbm90ZSswLjI1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWlkaW5vdGU+Ni41K2xpbmVfb2Zmc2V0KXtcclxuICAgICAgICAgICAgICAgICAgICBtaWRpbm90ZT1taWRpbm90ZSswLjI1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWlkaW5vdGU+OCtsaW5lX29mZnNldCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkaW5vdGU9bWlkaW5vdGUrMC4yNVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1pZGlub3RlPjEwK2xpbmVfb2Zmc2V0KXtcclxuICAgICAgICAgICAgICAgICAgICBtaWRpbm90ZT1taWRpbm90ZSswLjI1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWlkaW5vdGU+MTMuNStsaW5lX29mZnNldCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkaW5vdGU9bWlkaW5vdGUrMC4yNVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1pZGlub3RlPjE1LjUrbGluZV9vZmZzZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pZGlub3RlPW1pZGlub3RlKzAuMjVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtaWRpbm90ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0IG1hc2tpbmcgbm90ZXMgeS1jb29yZGluYXRlIGFycmF5XHJcbiAgICAgICAgICAgIHZhciBtYXNraW5nX3lfY29vcmRzID0gW11cclxuXHJcbiAgICAgICAgICAgIC8vSWYgdGhlcmUncyBvcmNoZXN0cmF0aW9uIHN0dWZmIGZvciBiYXNzIGNsZWY6XHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNzX21hc2tpbmdzKSAmJiBiYXNzX21hc2tpbmdzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGJhc3NfbWFza2luZ3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRHJhdyBjdXN0b20gbm90ZWhlYWRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9saW5lIDA9bWlkZGxlIGMgb24gdHJlYmxlLCAxPWUgZXRjLiwgZm9udCBzY2FsZSA0MD1hYm91dCBub3JtYWwgbm90ZSwgZmlsbHN0eWxlID0gbm90ZSBjb2xvciBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZW5vdGUgPSBtaWRpbm90ZTJ0cmVibGVzdGFmZihiYXNzX21hc2tpbmdzW2ldLCA0MClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZWhlYWQgPSBuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBsaW5lOiBsaW5lbm90ZSwgY3VzdG9tX2dseXBoX2NvZGU6XCJ2ZDJcIiwgZ2x5cGhfZm9udF9zY2FsZTogYmFzc19tYXNraW5nc19ub3Rlc2l6ZVtpXSwgc3R5bGU6e2ZpbGxTdHlsZTogJ25vbmUnfX0pIC8vYmFzc19tYXNraW5nc19jb2xvcnNbaV1cclxuICAgICAgICAgICAgICAgICAgICBub3RlaGVhZC5zZXRDZW50ZXJBbGlnbm1lbnQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vdGVoZWFkKVxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tpbmdzX2IucHVzaChub3RlaGVhZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHZvaWNlMiA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogMX0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgIHZvaWNlMi5hZGRUaWNrYWJsZXMobWFza2luZ3NfYik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZvaWNlMilcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlcjIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2UyXSkuZm9ybWF0KFt2b2ljZTJdLCAxKTtcclxuICAgICAgICAgICAgdm9pY2UyLmRyYXcoY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlcmUncyBvcmNoZXN0cmF0aW9uIHN0dWZmIGZvciB0cmVibGUgc3RhZmYgYW5kIGFwcGVuZDpcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0cmVibGVfbWFza2luZ3MpICYmIHRyZWJsZV9tYXNraW5ncy5sZW5ndGgpe1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTx0cmVibGVfbWFza2luZ3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRHJhdyBjdXN0b20gbm90ZWhlYWRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9saW5lIDA9bWlkZGxlIGMgb24gdHJlYmxlLCAxPWUgZXRjLiwgZm9udCBzY2FsZSA0MD1hYm91dCBub3JtYWwgbm90ZSwgZmlsbHN0eWxlID0gbm90ZSBjb2xvciBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZW5vdGUgPSBtaWRpbm90ZTJ0cmVibGVzdGFmZih0cmVibGVfbWFza2luZ3NbaV0sIDYwKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3RlaGVhZCA9IG5ldyBWRi5Ob3RlSGVhZCh7ZHVyYXRpb246JzEyOCcsIGxpbmU6IGxpbmVub3RlLCBjdXN0b21fZ2x5cGhfY29kZTpcInZkMlwiLCBnbHlwaF9mb250X3NjYWxlOiB0cmVibGVfbWFza2luZ3Nfbm90ZXNpemVbaV0sIHN0eWxlOntmaWxsU3R5bGU6ICdub25lJ319KSAvL3RyZWJsZV9tYXNraW5nc19jb2xvcnNbaV0gXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZWhlYWQuc2V0Q2VudGVyQWxpZ25tZW50KHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhub3RlaGVhZClcclxuICAgICAgICAgICAgICAgICAgICBtYXNraW5nc190LnB1c2gobm90ZWhlYWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL21hc2tpbmdzX3Q9W11cclxuICAgICAgICAgICAgLy9tYXNraW5nc190LnB1c2gobmV3IFZGLk5vdGVIZWFkKHtkdXJhdGlvbjonMTI4JywgbGluZTogMi4zLCBjdXN0b21fZ2x5cGhfY29kZTpcInZkMlwiLCBnbHlwaF9mb250X3NjYWxlOiAxMDAsIHN0eWxlOntmaWxsU3R5bGU6ICdyZWQnfX0pIClcclxuICAgICAgICAgICAgLy9tYXNraW5nc190LnB1c2gobmV3IFZGLk5vdGVIZWFkKHtkdXJhdGlvbjonMTI4JywgbGluZTogNS4zLCBjdXN0b21fZ2x5cGhfY29kZTpcInZkMlwiLCBnbHlwaF9mb250X3NjYWxlOiAxMDAsIHN0eWxlOntmaWxsU3R5bGU6ICdyZWQnfX0pIClcclxuICAgICAgICAgICAgdmFyIHZvaWNlID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiAxfSkuc2V0TW9kZSgyKTtcclxuICAgICAgICAgICAgdm9pY2UuYWRkVGlja2FibGVzKG1hc2tpbmdzX3QpO1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlXSkuZm9ybWF0KFt2b2ljZV0sIDEpO1xyXG4gICAgICAgICAgICB2b2ljZS5kcmF3KGNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy9DaGVjayBpZiB0aGVyZSdzIHRhcmdldCBzdHVmZiBmb3IgdHJlYmxlIHN0YWZmIGFuZCBhcHBlbmQ6XHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0cmVibGVfdGFyZ2V0cykgJiYgdHJlYmxlX3RhcmdldHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldHNfdC5wdXNoKG5ldyBWRi5HaG9zdE5vdGUoJ3EnKSlcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTx0cmVibGVfdGFyZ2V0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EcmF3IGN1c3RvbSBub3RlaGVhZHNcclxuICAgICAgICAgICAgICAgICAgICAvL2xpbmUgMD1taWRkbGUgYyBvbiB0cmVibGUsIDE9ZSBldGMuLCBmb250IHNjYWxlIDQwPWFib3V0IG5vcm1hbCBub3RlLCBmaWxsc3R5bGUgPSBub3RlIGNvbG9yIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5lbm90ZSA9IG1pZGlub3RlMnRyZWJsZXN0YWZmKHRyZWJsZV90YXJnZXRzW2ldLCA2MClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZWhlYWQgPSBuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBkaXNwbGFjZWQ6ZmFsc2UsIGxpbmU6IGxpbmVub3RlLCBjdXN0b21fZ2x5cGhfY29kZTpcInZiXCIsIGdseXBoX2ZvbnRfc2NhbGU6IHRyZWJsZV90YXJnZXRzX25vdGVzaXplW2ldLCBzdHlsZTp7ZmlsbFN0eWxlOiB0cmVibGVfdGFyZ2V0c19jb2xvcnNbaV19fSkgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZWhlYWQuc2V0Q2VudGVyQWxpZ25tZW50KHRydWUpLnNldFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHNfdC5wdXNoKG5vdGVoZWFkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vbWFza2luZ3NfdD1bXVxyXG4gICAgICAgICAgICAvL21hc2tpbmdzX3QucHVzaChuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBsaW5lOiAyLjMsIGN1c3RvbV9nbHlwaF9jb2RlOlwidmQyXCIsIGdseXBoX2ZvbnRfc2NhbGU6IDEwMCwgc3R5bGU6e2ZpbGxTdHlsZTogJ3JlZCd9fSkgKVxyXG4gICAgICAgICAgICAvL21hc2tpbmdzX3QucHVzaChuZXcgVkYuTm90ZUhlYWQoe2R1cmF0aW9uOicxMjgnLCBsaW5lOiA1LjMsIGN1c3RvbV9nbHlwaF9jb2RlOlwidmQyXCIsIGdseXBoX2ZvbnRfc2NhbGU6IDEwMCwgc3R5bGU6e2ZpbGxTdHlsZTogJ3JlZCd9fSkgKVxyXG4gICAgICAgICAgICB2YXIgdm9pY2UzID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiAxfSkuc2V0TW9kZSgyKTtcclxuICAgICAgICAgICAgdm9pY2UzLmFkZFRpY2thYmxlcyh0YXJnZXRzX3QpO1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlM10pLmZvcm1hdChbdm9pY2UzXSwgMTApO1xyXG5cclxuICAgICAgICAgICAgdm9pY2UzLmRyYXcoY29udGV4dCwgc3RhdmVfdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAvL0NoZWNrIGlmIHRoZXJlJ3MgdGFyZ2V0IHN0dWZmIGZvciB2YXNzIHN0YWZmIGFuZCBhcHBlbmQ6XHJcblxyXG4gICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzc190YXJnZXRzKSAmJiBiYXNzX3RhcmdldHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldHNfYi5wdXNoKG5ldyBWRi5HaG9zdE5vdGUoJ3EnKSlcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxiYXNzX3RhcmdldHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRHJhdyBjdXN0b20gbm90ZWhlYWRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9saW5lIDA9bWlkZGxlIGMgb24gdHJlYmxlLCAxPWUgZXRjLiwgZm9udCBzY2FsZSA0MD1hYm91dCBub3JtYWwgbm90ZSwgZmlsbHN0eWxlID0gbm90ZSBjb2xvciBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZW5vdGUgPSBtaWRpbm90ZTJ0cmVibGVzdGFmZihiYXNzX3RhcmdldHNbaV0sIDYwKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3RlaGVhZCA9IG5ldyBWRi5Ob3RlSGVhZCh7ZHVyYXRpb246JzEyOCcsIGRpc3BsYWNlZDpmYWxzZSwgbGluZTogbGluZW5vdGUsIGN1c3RvbV9nbHlwaF9jb2RlOlwidmJcIiwgZ2x5cGhfZm9udF9zY2FsZTogYmFzc190YXJnZXRzX25vdGVzaXplW2ldLCBzdHlsZTp7ZmlsbFN0eWxlOiBiYXNzX3RhcmdldHNfY29sb3JzW2ldfX0pIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVoZWFkLnNldENlbnRlckFsaWdubWVudCh0cnVlKS5zZXRcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzX2IucHVzaChub3RlaGVhZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL21hc2tpbmdzX3Q9W11cclxuICAgICAgICAgICAgLy9tYXNraW5nc190LnB1c2gobmV3IFZGLk5vdGVIZWFkKHtkdXJhdGlvbjonMTI4JywgbGluZTogMi4zLCBjdXN0b21fZ2x5cGhfY29kZTpcInZkMlwiLCBnbHlwaF9mb250X3NjYWxlOiAxMDAsIHN0eWxlOntmaWxsU3R5bGU6ICdyZWQnfX0pIClcclxuICAgICAgICAgICAgLy9tYXNraW5nc190LnB1c2gobmV3IFZGLk5vdGVIZWFkKHtkdXJhdGlvbjonMTI4JywgbGluZTogNS4zLCBjdXN0b21fZ2x5cGhfY29kZTpcInZkMlwiLCBnbHlwaF9mb250X3NjYWxlOiAxMDAsIHN0eWxlOntmaWxsU3R5bGU6ICdyZWQnfX0pIClcclxuICAgICAgICAgICAgdmFyIHZvaWNlNCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogMX0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgIHZvaWNlNC5hZGRUaWNrYWJsZXModGFyZ2V0c19iKTtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZTRdKS5mb3JtYXQoW3ZvaWNlNF0sIDEwKTtcclxuXHJcbiAgICAgICAgICAgIHZvaWNlNC5kcmF3KGNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNzX21hc2tpbmdzKSAmJiBiYXNzX21hc2tpbmdzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGJhc3NfbWFza2luZ3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vR2V0IHkgY29vcmRpbmF0ZSBvZiB0aGUgbm90ZSBuYWQgcHVzaCB0byBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tpbmdfeV9jb29yZHMucHVzaCh2b2ljZTIudGlja2FibGVzW2ldLnkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodHJlYmxlX21hc2tpbmdzKSAmJiB0cmVibGVfbWFza2luZ3MubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8dHJlYmxlX21hc2tpbmdzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0dldCB5IGNvb3JkaW5hdGUgb2YgdGhlIG5vdGUgbmFkIHB1c2ggdG8gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBtYXNraW5nX3lfY29vcmRzLnB1c2godm9pY2UudGlja2FibGVzW2ldLnkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXNraW5nX3lfY29vcmRzKVxyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBqPTA7ajxtYXNraW5nX3lfY29vcmRzLmxlbmd0aC0xO2orKykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWFza2luZ195X2Nvb3Jkc1tqXSlcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCkgLy8gc3RhcnQgcmVjb3JkaW5nIG91ciBwZW4ncyBtb3Zlc1xyXG4gICAgICAgICAgICAgICAgLm1vdmVUbyg0MCwgbWFza2luZ195X2Nvb3Jkc1tqXSkgLy8gcGlja3VwIHRoZSBwZW4gYW5kIHNldCBpdCBkb3duIGF0IFg9MCwgWT0wLiBOT1RFOiBZPTAgaXMgdGhlIHRvcCBvZiB0aGUgc2NyZWVuLlxyXG4gICAgICAgICAgICAgICAgLmxpbmVUbyg5MCwgbWFza2luZ195X2Nvb3Jkc1tqXSkgLy8gbm93IGFkZCBhIGxpbmUgdG8gdGhlIHJpZ2h0IGZyb20gKDAsIDApIHRvICg1MCwgMCkgdG8gb3VyIHBhdGhcclxuICAgICAgICAgICAgICAgIC5saW5lVG8oOTAsIG1hc2tpbmdfeV9jb29yZHNbaisxXSkgLy8gYWRkIGEgbGluZSB0byB0aGUgbGVmdCBhbmQgZG93biBmcm9tICg1MCwgMCkgdG8gKDI1LCA1MClcclxuICAgICAgICAgICAgICAgIC5saW5lVG8oNDAsIG1hc2tpbmdfeV9jb29yZHNbaisxXSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZVBhdGgoKSAvLyBub3cgYWRkIGEgbGluZSBiYWNrIHRvIHdoZXJldmVyIHRoZSBwYXRoIHN0YXJ0ZWQsIGluIHRoaXMgY2FzZSAoMCwgMCksIGNsb3NpbmcgdGhlIHRyaWFuZ2xlLlxyXG4gICAgICAgICAgICAgICAgLmZpbGwoeyBmaWxsOiBtYXNraW5nX2NvbG9yc1tqXX0pOyAvLyBub3cgZmlsbCBvdXIgYm94IGluIG1hc2tpbmdfY29sb3JzW2pdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRleHQpXHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKClcclxuICAgICAgICAgICAgLmNsb3NlUGF0aCgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm91dGVyMi5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvL2lmICh0aGlzLm5vdGVzICE9PSBwcmV2UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gcHJldlByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBwcmV2UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAvL2NvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyMlxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKClcclxuICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykgeyAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5leHRQcm9wcy5ub3Rlc1xyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gbmV4dFByb3BzLmluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFByb3BzLnRhcmdldFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAqL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdHtpZH09dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD17aWR9IHJlZj1cIm91dGVyMlwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5NYXNraW5nLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuTWFza2luZy5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbWFza2luZ19ub3RldmFsdWVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBtYXNraW5nX25vdGVzaXplczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgbWFza2luZ19jb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHRhcmdldF9ub3RldmFsdWVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICB0YXJnZXRfbm90ZXNpemVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICB0YXJnZXRfY29sb3JzOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
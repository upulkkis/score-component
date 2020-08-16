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
          b_score_y = _this$props.b_score_y,
          target_color = _this$props.target_color,
          text_space = _this$props.text_space; //const svgContainer = document.getElementById(id);

      this.notes = notes;
      this.target = target;
      this.instruments = instruments;
      this.renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      this.renderer.resize(width + text_space, height);
      var context = this.renderer.getContext();
      this.context = context; //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(20, t_score_y, width);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(this.context).draw(); //var stave_t2 = new VF.Stave(20+width, t_score_y, 50);
      //stave_t2.setContext(this.context).draw();

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
        treble_textnotes.push('c/4');
      }

      var textnote = new VF.StaveNote({
        clef: "treble",
        keys: treble_textnotes,
        duration: "q"
      }); // ignore_ticks: true

      textnote.setStemStyle({
        strokeStyle: 'none'
      });
      textnote.setLedgerLineStyle({
        strokeStyle: 'none'
      });
      console.log(textnote);

      for (var i = 0; i < note_data[0].length; i++) {
        //var textnote = new VF.TextNote({text: 'jebu', duration: '32', ignore_ticks: true}) // ignore_ticks: true
        textnote.setKeyLine(i, i - 1.5); //textnote.setKeyStyle(i, {fillStyle: 'rgba(0,0,0,0)'})
        //.setStave(stave_t)
        //.setLine(i)
        //.setJustification(VF.TextNote.Justification.LEFT)
        //textnote.x_shift = 100
        //textnote.tickContext.extraLeftPx = 100;
        //console.log(textnote)
        //treble_textnotes.push(textnote)
      }

      var bass_textnotes = [];

      for (var i = 0; i < note_data[3].length; i++) {
        bass_textnotes.push('c/3');
      }

      var textnote_b = new VF.StaveNote({
        clef: "bass",
        keys: bass_textnotes,
        duration: "q"
      }); // ignore_ticks: true

      textnote_b.setStemStyle({
        strokeStyle: 'none'
      });
      textnote_b.setLedgerLineStyle({
        strokeStyle: 'none'
      }); //console.log(textnote_b)

      for (var i = 0; i < note_data[3].length; i++) {
        //var textnote = new VF.TextNote({text: 'jebu', duration: '32', ignore_ticks: true}) // ignore_ticks: true
        textnote_b.setKeyLine(i, i - 1.5); //textnote.setKeyStyle(i, {fillStyle: 'rgba(0,0,0,0)'})
        //.setStave(stave_t)
        //.setLine(i)
        //.setJustification(VF.TextNote.Justification.LEFT)
        //textnote.x_shift = 100
        //textnote.tickContext.extraLeftPx = 100;
        //console.log(textnote_b)
        //treble_textnotes.push(textnote)
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
        var inst_text = new VF.FretHandFinger(num).setPosition(pos); //inst_text.setXShift(-50);

        return inst_text;
      } //console.log(treble_notes)


      for (var i = 0; i < note_data[1].length; i++) {
        treble_notes.addAccidental(i, new VF.Accidental(note_data[1][i]));
        var teksti = viereen(treble_inst[i], VF.Modifier.Position.RIGHT);
        teksti.setOffsetX(-10); //teksti.setOffsetY(0)

        textnote.note_heads[i].glyph_code = 'v23';
        textnote.addModifier(i, teksti);

        if (note_data[2][i] === 1) {
          treble_notes.setKeyStyle(i, {
            fillStyle: target_color
          });
          textnote.setKeyStyle(i, {
            fillStyle: target_color
          });
        }
      }

      for (var i = 0; i < note_data[3].length; i++) {
        bass_notes.addAccidental(i, new VF.Accidental(note_data[4][i]));
        var bteksti = viereen(bass_inst[i], VF.Modifier.Position.RIGHT);
        bteksti.setOffsetX(-10);
        textnote_b.note_heads[i].glyph_code = 'v23';
        textnote_b.addModifier(i, bteksti);

        if (note_data[5][i] === 1) {
          bass_notes.setKeyStyle(i, {
            fillStyle: target_color
          });
          textnote_b.setKeyStyle(i, {
            fillStyle: target_color
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
        voice_t_text.addTickables([textnote]);
        console.log(voice_t_text); //voice_t_text.tickables[0].tickContext.xOffset = 50

        var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], width);
        var formatter_t = new VF.Formatter().joinVoices([voice_t_text]).format([voice_t_text], width);
        formatter_t.tickContexts.array[0].x = width - 40;
        console.log(formatter_t);
        voice_t.draw(this.context, stave_t);
        voice_t_text.draw(this.context, stave_t);
      }

      var voice_b = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });
      var voice_b_text = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });
      voice_b_text.addTickables([textnote_b]);

      if (Array.isArray(note_data[3]) && note_data[3].length) {
        voice_b.addTickables([bass_notes]);
        var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], width);
        var formatter_b = new VF.Formatter().joinVoices([voice_b_text]).format([voice_b_text], width);
        formatter_b.tickContexts.array[0].x = width - 40;
        voice_b.draw(this.context, stave_b);
        voice_b_text.draw(this.context, stave_b);
      }

      var stave_lines = [];

      for (var i = 0; i < treble_textnotes.length; i++) {
        //    last_note: Note,
        //    first_indices: [n1, n2, n3],
        //    last_indices: [n1, n2, n3]
        //  }
        var staveline = new VF.StaveLine({
          first_note: treble_notes,
          last_note: textnote,
          first_indices: [i],
          last_indices: [i]
        });
        staveline.render_options.line_width = 3;

        if (note_data[2][i] === 1) {
          staveline.render_options.color = target_color;
        } //staveline.render_options.padding_left = -4
        //staveline.render_options.padding_right = -4
        //addNote.addModifier(0, new VF.Modifier(staveline))


        stave_lines.push(staveline);
      }

      var stave_linesb = [];

      for (var i = 0; i < bass_textnotes.length; i++) {
        //    last_note: Note,
        //    first_indices: [n1, n2, n3],
        //    last_indices: [n1, n2, n3]
        //  }
        var stavelineb = new VF.StaveLine({
          first_note: bass_notes,
          last_note: textnote_b,
          first_indices: [i],
          last_indices: [i]
        });
        stavelineb.render_options.line_width = 3;

        if (note_data[5][i] === 1) {
          stavelineb.render_options.color = target_color;
        } //staveline.render_options.padding_left = -4
        //staveline.render_options.padding_right = -4
        //addNote.addModifier(0, new VF.Modifier(staveline))


        stave_linesb.push(stavelineb);
      }

      for (var k = 0; k < stave_lines.length; k++) {
        stave_lines[k].setContext(context);
        stave_lines[k].draw();
      }

      for (var k = 0; k < stave_linesb.length; k++) {
        stave_linesb[k].setContext(context);
        stave_linesb[k].draw();
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
  b_score_y: 200,
  text_space: 120,
  target_color: 'red'
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
  target_color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  text_space: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJPcmNoZXN0cmF0aW9uIiwicHJvcHMiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwicmVuZGVyZXIiLCJjb250ZXh0Iiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwic2V0UHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInRfc2NvcmVfeSIsImJfc2NvcmVfeSIsInRhcmdldF9jb2xvciIsInRleHRfc3BhY2UiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJjb25uZWN0b3IzIiwiQlJBQ0tFVCIsInNlcGFyYXRlIiwiaSIsInRyZWJsZV9uIiwidHJlYmxlX2EiLCJ0cmVibGVfdCIsInRyZWJsZV9pIiwiYmFzc19uIiwiYmFzc19hIiwiYmFzc190IiwiYmFzc19pIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJuZXdfYWNjaWRlbnRpYWwiLCJlbnRyeSIsIm5ld19ub3RlIiwiaW5zdCIsInRndCIsImxlbmd0aCIsImNvbmNhdCIsInBhcnNlSW50IiwicHVzaCIsImoiLCJub3RlX2RhdGEiLCJ0cmVibGVfdGV4dG5vdGVzIiwidGV4dG5vdGUiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwic2V0U3RlbVN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJjb25zb2xlIiwibG9nIiwic2V0S2V5TGluZSIsImJhc3NfdGV4dG5vdGVzIiwidGV4dG5vdGVfYiIsInRyZWJsZV9ub3RlcyIsImJhc3Nfbm90ZXMiLCJ0cmVibGVfaW5zdCIsImJhc3NfaW5zdCIsInZpZXJlZW4iLCJudW0iLCJwb3MiLCJpbnN0X3RleHQiLCJGcmV0SGFuZEZpbmdlciIsInNldFBvc2l0aW9uIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJ0ZWtzdGkiLCJNb2RpZmllciIsIlBvc2l0aW9uIiwiUklHSFQiLCJzZXRPZmZzZXRYIiwibm90ZV9oZWFkcyIsImdseXBoX2NvZGUiLCJhZGRNb2RpZmllciIsInNldEtleVN0eWxlIiwiZmlsbFN0eWxlIiwiYnRla3N0aSIsIkFycmF5IiwiaXNBcnJheSIsInZvaWNlX3QiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwidm9pY2VfdF90ZXh0IiwiYWRkVGlja2FibGVzIiwiZm9ybWF0dGVyIiwiRm9ybWF0dGVyIiwiam9pblZvaWNlcyIsImZvcm1hdCIsImZvcm1hdHRlcl90IiwidGlja0NvbnRleHRzIiwiYXJyYXkiLCJ2b2ljZV9iIiwidm9pY2VfYl90ZXh0IiwiZm9ybWF0dGVyX2IiLCJzdGF2ZV9saW5lcyIsInN0YXZlbGluZSIsIlN0YXZlTGluZSIsImZpcnN0X25vdGUiLCJsYXN0X25vdGUiLCJmaXJzdF9pbmRpY2VzIiwibGFzdF9pbmRpY2VzIiwicmVuZGVyX29wdGlvbnMiLCJsaW5lX3dpZHRoIiwiY29sb3IiLCJzdGF2ZV9saW5lc2IiLCJzdGF2ZWxpbmViIiwiayIsInJlZnMiLCJvdXRlciIsImFwcGVuZENoaWxkIiwic2V0dXBTY29yZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJoYXNDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51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QUFDdEI7OztBQUdBckksSUFBRSxFQUFFc0ksaURBQVMsQ0FBQ0MsTUFKUTs7QUFNdEI7OztBQUdBbEosT0FBSyxFQUFFaUosaURBQVMsQ0FBQ2pDLEtBVEs7QUFVdEIvRyxRQUFNLEVBQUVnSixpREFBUyxDQUFDakMsS0FWSTtBQVd0QjlHLGFBQVcsRUFBRStJLGlEQUFTLENBQUNqQyxLQVhEO0FBWXRCbkcsT0FBSyxFQUFFb0ksaURBQVMsQ0FBQ0UsTUFaSztBQWF0QnJJLFFBQU0sRUFBRW1JLGlEQUFTLENBQUNFLE1BYkk7QUFjdEJwSSxXQUFTLEVBQUVrSSxpREFBUyxDQUFDRSxNQWRDO0FBZXRCbkksV0FBUyxFQUFFaUksaURBQVMsQ0FBQ0UsTUFmQztBQWdCdEJsSSxjQUFZLEVBQUVnSSxpREFBUyxDQUFDQyxNQWhCRjtBQWlCdEJoSSxZQUFVLEVBQUUrSCxpREFBUyxDQUFDRSxNQWpCQTs7QUFvQnRCOzs7O0FBSUF2SSxVQUFRLEVBQUVxSSxpREFBUyxDQUFDRztBQXhCRSxDQUExQixDIiwiZmlsZSI6ImQyNDFmMDAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JjaGVzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz0wO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0PTA7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cz0wO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXI9MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQ9MDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0dXBTY29yZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2lkLCBub3RlcywgdGFyZ2V0LCBpbnN0cnVtZW50cywgc2V0UHJvcHMsIHdpZHRoLCBoZWlnaHQsIHRfc2NvcmVfeSwgYl9zY29yZV95LCB0YXJnZXRfY29sb3IsIHRleHRfc3BhY2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgICAgIC8vY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gaW5zdHJ1bWVudHM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc2l6ZSh3aWR0aCt0ZXh0X3NwYWNlLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuXHJcbiAgICAgICAgICAgICAgICAvL0RvIFRyZWJsZSBhbmQgQmFzcyBDbGVmc1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX3QgPSBuZXcgVkYuU3RhdmUoMjAsIHRfc2NvcmVfeSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdC5hZGRDbGVmKFwidHJlYmxlXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90LnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBzdGF2ZV90MiA9IG5ldyBWRi5TdGF2ZSgyMCt3aWR0aCwgdF9zY29yZV95LCA1MCk7XHJcbiAgICAgICAgICAgICAgICAvL3N0YXZlX3QyLnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfYiA9IG5ldyBWRi5TdGF2ZSgyMCwgYl9zY29yZV95LCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLmFkZENsZWYoXCJiYXNzXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRG8gY29ubmVjdG9yc1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgY29ubmVjdG9yMiA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9SSUdIVCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvL2Nvbm5lY3RvcjIuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RvcjMgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5CUkFDS0VUKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RvcjMuc2V0Q29udGV4dCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IzLnNldFRleHQoJ09yY2guJyk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKG5vdGVzLCBpbnN0cnVtZW50cyx0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX24gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX2EgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX2kgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc19uID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc19pID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19vY3RhdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19ub3RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0Z3RcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGk9MDsgaTxub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IG5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0ID0gaW5zdHJ1bWVudHNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2tleSA9IGVudHJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfb2N0YXZlID0gZW50cnlbZW50cnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gZW50cnlbMV07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGd0ID0gdGFyZ2V0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG5ld19vY3RhdmUpID49IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfYS5wdXNoKG5ld19hY2NpZGVudGlhbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfaS5wdXNoKGluc3QpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Uw6RsbMOkIGthdHNvdGFhbiBvbmtvIGp1dXJpIHTDpG3DpCB0YXJnZXRsaXN0YWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vQWxsYSBvbGV2YSBvdHRhYSB2YWluIGVrYW4gaHVvbWlvb24sIHRhcmtpc3RhISFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhc3Nfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfaS5wdXNoKGluc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Z3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbal09PT1pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Z3Q9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RyZWJsZV9uLCB0cmVibGVfYSwgdHJlYmxlX3QsIGJhc3NfbiwgYmFzc19hLCBiYXNzX3QsIHRyZWJsZV9pLCBiYXNzX2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9kYXRhID0gc2VwYXJhdGUodGhpcy5ub3RlcywgdGhpcy5pbnN0cnVtZW50cywgdGhpcy50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfdGV4dG5vdGVzID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMF0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZWJsZV90ZXh0bm90ZXMucHVzaCgnYy80JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0bm90ZSA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwidHJlYmxlXCIsIGtleXM6IHRyZWJsZV90ZXh0bm90ZXMsIGR1cmF0aW9uOiBcInFcIiB9KSAvLyBpZ25vcmVfdGlja3M6IHRydWVcclxuICAgICAgICAgICAgICAgIHRleHRub3RlLnNldFN0ZW1TdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICB0ZXh0bm90ZS5zZXRMZWRnZXJMaW5lU3R5bGUoe3N0cm9rZVN0eWxlOiAnbm9uZSd9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGV4dG5vdGUpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgdGV4dG5vdGUgPSBuZXcgVkYuVGV4dE5vdGUoe3RleHQ6ICdqZWJ1JywgZHVyYXRpb246ICczMicsIGlnbm9yZV90aWNrczogdHJ1ZX0pIC8vIGlnbm9yZV90aWNrczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRub3RlLnNldEtleUxpbmUoaSwgaS0xLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0bm90ZS5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiAncmdiYSgwLDAsMCwwKSd9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vLnNldFN0YXZlKHN0YXZlX3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8uc2V0TGluZShpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vLnNldEp1c3RpZmljYXRpb24oVkYuVGV4dE5vdGUuSnVzdGlmaWNhdGlvbi5MRUZUKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dG5vdGUueF9zaGlmdCA9IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dG5vdGUudGlja0NvbnRleHQuZXh0cmFMZWZ0UHggPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXh0bm90ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL3RyZWJsZV90ZXh0bm90ZXMucHVzaCh0ZXh0bm90ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc190ZXh0bm90ZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVszXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzc190ZXh0bm90ZXMucHVzaCgnYy8zJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0bm90ZV9iID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJiYXNzXCIsIGtleXM6IGJhc3NfdGV4dG5vdGVzLCBkdXJhdGlvbjogXCJxXCIgfSkgLy8gaWdub3JlX3RpY2tzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB0ZXh0bm90ZV9iLnNldFN0ZW1TdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICB0ZXh0bm90ZV9iLnNldExlZGdlckxpbmVTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGV4dG5vdGVfYilcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbM10ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciB0ZXh0bm90ZSA9IG5ldyBWRi5UZXh0Tm90ZSh7dGV4dDogJ2plYnUnLCBkdXJhdGlvbjogJzMyJywgaWdub3JlX3RpY2tzOiB0cnVlfSkgLy8gaWdub3JlX3RpY2tzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dG5vdGVfYi5zZXRLZXlMaW5lKGksIGktMS41KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dG5vdGUuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogJ3JnYmEoMCwwLDAsMCknfSlcclxuICAgICAgICAgICAgICAgICAgICAvLy5zZXRTdGF2ZShzdGF2ZV90KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vLnNldExpbmUoaSlcclxuICAgICAgICAgICAgICAgICAgICAvLy5zZXRKdXN0aWZpY2F0aW9uKFZGLlRleHROb3RlLkp1c3RpZmljYXRpb24uTEVGVClcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHRub3RlLnhfc2hpZnQgPSAxMDBcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHRub3RlLnRpY2tDb250ZXh0LmV4dHJhTGVmdFB4ID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGV4dG5vdGVfYilcclxuICAgICAgICAgICAgICAgICAgICAvL3RyZWJsZV90ZXh0bm90ZXMucHVzaCh0ZXh0bm90ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwidHJlYmxlXCIsIGtleXM6IG5vdGVfZGF0YVswXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwiYmFzc1wiLCBrZXlzOiBub3RlX2RhdGFbM10sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9pbnN0ID0gbm90ZV9kYXRhWzZdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19pbnN0ID0gbm90ZV9kYXRhWzddXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0Z1bmt0aW8gam9sbGEgcGlpcnJldMOkw6RuIG51b3RpbiB2aWVyZWVuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2aWVyZWVuKG51bSwgcG9zKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnN0X3RleHQgPSBuZXcgVkYuRnJldEhhbmRGaW5nZXIobnVtKS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaW5zdF90ZXh0LnNldFhTaGlmdCgtNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0X3RleHQ7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0cmVibGVfbm90ZXMpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzFdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbMV1baV0pKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVrc3RpID0gdmllcmVlbih0cmVibGVfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGVrc3RpLnNldE9mZnNldFgoLTEwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGVrc3RpLnNldE9mZnNldFkoMClcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0bm90ZS5ub3RlX2hlYWRzW2ldLmdseXBoX2NvZGUgPSAndjIzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRub3RlLmFkZE1vZGlmaWVyKGksIHRla3N0aSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm90ZV9kYXRhWzJdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiB0YXJnZXRfY29sb3J9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vdGUuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogdGFyZ2V0X2NvbG9yfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbM10ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbNF1baV0pKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnRla3N0aSA9IHZpZXJlZW4oYmFzc19pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVClcclxuICAgICAgICAgICAgICAgICAgICBidGVrc3RpLnNldE9mZnNldFgoLTEwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRub3RlX2Iubm90ZV9oZWFkc1tpXS5nbHlwaF9jb2RlID0gJ3YyMydcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0bm90ZV9iLmFkZE1vZGlmaWVyKGksIGJ0ZWtzdGkpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVs1XVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IHRhcmdldF9jb2xvcn0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0bm90ZV9iLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IHRhcmdldF9jb2xvcn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB2b2ljZSBpbiA0LzQgYW5kIGFkZCB0aGUgbm90ZXMgZnJvbSBhYm92ZVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZV9kYXRhWzBdKSAmJiBub3RlX2RhdGFbMF0ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdm9pY2VfdCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX3RfdGV4dCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfdC5hZGRUaWNrYWJsZXMoW3RyZWJsZV9ub3Rlc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3RfdGV4dC5hZGRUaWNrYWJsZXMoW3RleHRub3RlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm9pY2VfdF90ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdm9pY2VfdF90ZXh0LnRpY2thYmxlc1swXS50aWNrQ29udGV4dC54T2Zmc2V0ID0gNTBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RdKS5mb3JtYXQoW3ZvaWNlX3RdLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlcl90ID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RfdGV4dF0pLmZvcm1hdChbdm9pY2VfdF90ZXh0XSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcl90LnRpY2tDb250ZXh0cy5hcnJheVswXS54ID0gd2lkdGgtNDBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZXJfdClcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90LmRyYXcodGhpcy5jb250ZXh0LCBzdGF2ZV90KTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90X3RleHQuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2b2ljZV9iID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX2JfdGV4dCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX2JfdGV4dC5hZGRUaWNrYWJsZXMoW3RleHRub3RlX2JdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlX2RhdGFbM10pICYmIG5vdGVfZGF0YVszXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX2IuYWRkVGlja2FibGVzKFtiYXNzX25vdGVzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV9iXSkuZm9ybWF0KFt2b2ljZV9iXSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXJfYiA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV9iX3RleHRdKS5mb3JtYXQoW3ZvaWNlX2JfdGV4dF0sIHdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXJfYi50aWNrQ29udGV4dHMuYXJyYXlbMF0ueCA9IHdpZHRoLTQwXHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYl90ZXh0LmRyYXcodGhpcy5jb250ZXh0LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfbGluZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dHJlYmxlX3RleHRub3Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBsYXN0X25vdGU6IE5vdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBmaXJzdF9pbmRpY2VzOiBbbjEsIG4yLCBuM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBsYXN0X2luZGljZXM6IFtuMSwgbjIsIG4zXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXZlbGluZSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2ZpcnN0X25vdGU6IHRyZWJsZV9ub3RlcywgbGFzdF9ub3RlOiB0ZXh0bm90ZSwgZmlyc3RfaW5kaWNlczogW2ldLCBsYXN0X2luZGljZXM6W2ldfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLmxpbmVfd2lkdGggPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RlX2RhdGFbMl1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLmNvbG9yID0gdGFyZ2V0X2NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19sZWZ0ID0gLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19yaWdodCA9IC00XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkTm90ZS5hZGRNb2RpZmllcigwLCBuZXcgVkYuTW9kaWZpZXIoc3RhdmVsaW5lKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzLnB1c2goc3RhdmVsaW5lKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzdGF2ZV9saW5lc2IgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8YmFzc190ZXh0bm90ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgbGFzdF9ub3RlOiBOb3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgZmlyc3RfaW5kaWNlczogW24xLCBuMiwgbjNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgbGFzdF9pbmRpY2VzOiBbbjEsIG4yLCBuM11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF2ZWxpbmViID0gbmV3IFZGLlN0YXZlTGluZSh7Zmlyc3Rfbm90ZTogYmFzc19ub3RlcywgbGFzdF9ub3RlOiB0ZXh0bm90ZV9iLCBmaXJzdF9pbmRpY2VzOiBbaV0sIGxhc3RfaW5kaWNlczpbaV19KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmViLnJlbmRlcl9vcHRpb25zLmxpbmVfd2lkdGggPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RlX2RhdGFbNV1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lYi5yZW5kZXJfb3B0aW9ucy5jb2xvciA9IHRhcmdldF9jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfbGVmdCA9IC00XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfcmlnaHQgPSAtNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZE5vdGUuYWRkTW9kaWZpZXIoMCwgbmV3IFZGLk1vZGlmaWVyKHN0YXZlbGluZSkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc2IucHVzaChzdGF2ZWxpbmViKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaz0wOyBrPHN0YXZlX2xpbmVzLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc1trXS5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXNba10uZHJhdygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrPTA7IGs8c3RhdmVfbGluZXNiLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc2Jba10uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzYltrXS5kcmF3KClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5ub3RlcyAhPT0gcHJldlByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IHByZXZQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gcHJldlByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgLy9jb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmcy5vdXRlclxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKClcclxuICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykgeyAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5leHRQcm9wcy5ub3Rlc1xyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gbmV4dFByb3BzLmluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFByb3BzLnRhcmdldFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAqL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdHtpZCwgbm90ZXMsIGluc3RydW1lbnRzLCB0YXJnZXR9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5PcmNoZXN0cmF0aW9uLmRlZmF1bHRQcm9wcyA9IHt3aWR0aDogMjAwLCBoZWlnaHQ6IDQwMCwgdF9zY29yZV95OiAxMTAsIGJfc2NvcmVfeTogMjAwLCB0ZXh0X3NwYWNlOiAxMjAsIHRhcmdldF9jb2xvcjogJ3JlZCd9O1xyXG5cclxuT3JjaGVzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbm90ZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHRhcmdldDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgaW5zdHJ1bWVudHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdF9zY29yZV95OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYl9zY29yZV95OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdGFyZ2V0X2NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGV4dF9zcGFjZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
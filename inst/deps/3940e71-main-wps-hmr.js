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
          text_space = _this$props.text_space,
          highlights = _this$props.highlights,
          indexing = _this$props.indexing; //const svgContainer = document.getElementById(id);

      this.notes = notes;
      this.target = target;
      this.instruments = instruments;
      this.renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      this.renderer.resize(width + text_space, height);
      var context = this.renderer.getContext();
      this.context = context; //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(20, t_score_y, width);
      stave_t.addClef("treble"); //.addTimeSignature("4/4"); 

      stave_t.setContext(this.context).draw(); //console.log(stave_t)
      //this.context.fillText('15ma', stave_t.x+6, stave_t.y+26)
      //var stave_t2 = new VF.Stave(20+width, t_score_y, 50);
      //stave_t2.setContext(this.context).draw();

      var stave_b = new VF.Stave(20, b_score_y, width);
      stave_b.addClef("bass"); //.addTimeSignature("4/4");

      stave_b.setContext(this.context).draw();

      function separate(notes, instruments, target) {
        var i;
        var treble_n = [];
        var treble_a = [];
        var treble_t = [];
        var treble_i = [];
        var treble_h = [];
        var bass_n = [];
        var bass_a = [];
        var bass_t = [];
        var bass_i = [];
        var bass_h = [];
        var ultra_n = [];
        var ultra_a = [];
        var ultra_t = [];
        var ultra_i = [];
        var ultra_h = [];
        var new_key;
        var new_octave;
        var new_accidential;
        var entry;
        var new_note;
        var inst;
        var tgt;

        for (i = 0; i < notes.length; i++) {
          entry = notes[i]; //Add index to the name for mouse click

          if (indexing) {
            inst = i + ': ' + instruments[i];
          } else {
            inst = instruments[i];
          }

          var highlight = '';

          if (typeof highlights[i] !== 'undefined') {
            highlight = highlights[i];
          }

          new_key = entry[0];
          new_octave = entry[entry.length - 1];

          if (entry.length > 2) {
            new_accidential = entry[1];
          } else {
            new_accidential = "n";
          }

          new_note = new_key.concat("/", new_octave);
          tgt = target[i];

          if (parseInt(new_octave) >= 4 && parseInt(new_octave) < 6) {
            treble_n.push(new_note);
            treble_a.push(new_accidential);
            treble_i.push(inst);
            treble_h.push(highlight); //Tällä katsotaan onko juuri tämä targetlistalla
            //Alla oleva ottaa vain ekan huomioon, tarkista!!

            var tgt = 0;

            for (var j = 0; j < target.length; j++) {
              if (target[j] === i) {
                tgt = 1;
              }
            }

            treble_t.push(tgt);
          } else if (parseInt(new_octave) >= 6) {
            new_octave -= 2;
            new_note = new_key.concat("/", new_octave);
            ultra_n.push(new_note);
            ultra_a.push(new_accidential);
            ultra_i.push(inst);
            ultra_h.push(highlight);
            var tgt = 0;

            for (var j = 0; j < target.length; j++) {
              if (target[j] === i) {
                tgt = 1;
              }
            }

            ultra_t.push(tgt);
          } else {
            bass_n.push(new_note);
            bass_a.push(new_accidential);
            bass_i.push(inst);
            bass_h.push(highlight);
            var tgt = 0;

            for (var j = 0; j < target.length; j++) {
              if (target[j] === i) {
                tgt = 1;
              }
            }

            bass_t.push(tgt);
          }
        }

        return [treble_n, treble_a, treble_t, bass_n, bass_a, bass_t, treble_i, bass_i, treble_h, bass_h, ultra_n, ultra_a, ultra_t, ultra_i, ultra_h];
      }

      var note_data = separate(this.notes, this.instruments, this.target); //Check if score contains ultra high notes, and do an ultra high staff:

      if (Array.isArray(note_data[10]) && note_data[10].length) {
        var stave_u = new VF.Stave(20, 40, width);
        stave_u.addClef("treble");
        stave_u.setContext(this.context).draw();
        this.context.fillText('15ma', stave_u.x + 6, stave_u.y + 26);
        var ultra_textnotes = [];

        for (var i = 0; i < note_data[10].length; i++) {
          ultra_textnotes.push('c/4');
        }

        var textnote_u = new VF.StaveNote({
          clef: "treble",
          keys: ultra_textnotes,
          duration: "q"
        }); // ignore_ticks: true

        textnote_u.setStemStyle({
          strokeStyle: 'none'
        });
        textnote_u.setLedgerLineStyle({
          strokeStyle: 'none'
        });

        for (var i = 0; i < note_data[10].length; i++) {
          textnote_u.setKeyLine(i, i - 1.5);
        }

        var ultra_notes = new VF.StaveNote({
          clef: "treble",
          keys: note_data[10],
          duration: "q"
        });
        var ultra_inst = note_data[13];
        var ultra_highlights = note_data[14];

        for (var i = 0; i < note_data[11].length; i++) {
          ultra_notes.addAccidental(i, new VF.Accidental(note_data[11][i]));
          var tekstiu = viereen(ultra_inst[i], VF.Modifier.Position.RIGHT);
          tekstiu.setOffsetX(-10); //console.log(teksti) // 
          //teksti.setAttribute('id', 'JEBU_teksti'+i)
          //teksti.setOffsetY(0)

          textnote_u.note_heads[i].glyph_code = 'v23';
          textnote_u.addModifier(i, tekstiu); //console.log(textnote)
          //textnote.setAttribute('id', 'JEBU_teksti'+i)

          if (ultra_highlights[i]) {
            ultra_notes.setKeyStyle(i, {
              shadowColor: ultra_highlights[i],
              shadowBlur: 100
            }); //textnote.setKeyStyle(i, {shadowColor: treble_highlights[i], shadowBlur:100});
          }

          if (note_data[12][i] === 1) {
            ultra_notes.setKeyStyle(i, {
              fillStyle: target_color
            });
            textnote_u.setKeyStyle(i, {
              fillStyle: target_color
            });
          }
        }

        var connector = new VF.StaveConnector(stave_u, stave_b);
        var connector3 = new VF.StaveConnector(stave_u, stave_b);
      } else {
        var connector = new VF.StaveConnector(stave_t, stave_b);
        var connector3 = new VF.StaveConnector(stave_t, stave_b);
      } //Ultra high staff stuff ends
      //Do connectors


      connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
      connector.setContext(this.context);
      connector.draw(); // var connector2 = new VF.StaveConnector(stave_t, stave_b);
      // connector2.setType(VF.StaveConnector.type.SINGLE_RIGHT);
      // connector2.setContext(context);
      //connector2.draw();   

      connector3.setType(VF.StaveConnector.type.BRACKET);
      connector3.setContext(this.context); //connector3.setText('Orch.');

      connector3.draw();
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
      }); //console.log(textnote)

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
      var bass_inst = note_data[7];
      var treble_highlights = note_data[8];
      var bass_highlights = note_data[9]; //Funktio jolla piirretään nuotin viereen

      function viereen(num, pos) {
        var inst_text = new VF.FretHandFinger(num).setPosition(pos); //inst_text.setXShift(-50);

        return inst_text;
      } //console.log(treble_notes)


      for (var i = 0; i < note_data[1].length; i++) {
        treble_notes.addAccidental(i, new VF.Accidental(note_data[1][i]));
        var teksti = viereen(treble_inst[i], VF.Modifier.Position.RIGHT);
        teksti.setOffsetX(-10); //console.log(teksti) // 
        //teksti.setAttribute('id', 'JEBU_teksti'+i)
        //teksti.setOffsetY(0)

        textnote.note_heads[i].glyph_code = 'v23';
        textnote.addModifier(i, teksti); //console.log(textnote)
        //textnote.setAttribute('id', 'JEBU_teksti'+i)

        if (treble_highlights[i]) {
          treble_notes.setKeyStyle(i, {
            shadowColor: treble_highlights[i],
            shadowBlur: 100
          }); //textnote.setKeyStyle(i, {shadowColor: treble_highlights[i], shadowBlur:100});
        }

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

        if (bass_highlights[i]) {
          bass_notes.setKeyStyle(i, {
            shadowColor: bass_highlights[i],
            shadowBlur: 100
          }); //textnote_b.setKeyStyle(i, {shadowColor: bass_highlights[i], shadowBlur:100});
        }

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
        voice_t_text.addTickables([textnote]); //console.log(voice_t_text)
        //voice_t_text.tickables[0].tickContext.xOffset = 50

        var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], width);
        var formatter_t = new VF.Formatter().joinVoices([voice_t_text]).format([voice_t_text], width);
        formatter_t.tickContexts.array[0].x = width - 40; //console.log(formatter_t)

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

      if (Array.isArray(note_data[10]) && note_data[10].length) {
        var voice_u = new VF.Voice({
          num_beats: 1,
          beat_value: 4
        }).setMode(2);
        var voice_u_text = new VF.Voice({
          num_beats: 1,
          beat_value: 4
        }).setMode(2);
        voice_u.addTickables([ultra_notes]);
        voice_u_text.addTickables([textnote_u]); //console.log(voice_t_text)
        //voice_t_text.tickables[0].tickContext.xOffset = 50

        var formatter = new VF.Formatter().joinVoices([voice_u]).format([voice_u], width);
        var formatter_u = new VF.Formatter().joinVoices([voice_u_text]).format([voice_u_text], width);
        formatter_u.tickContexts.array[0].x = width - 40; //console.log(formatter_t)

        voice_u.draw(this.context, stave_u);
        voice_u_text.draw(this.context, stave_u);
        var stave_linesu = [];

        for (var i = 0; i < ultra_textnotes.length; i++) {
          var stavelineu = new VF.StaveLine({
            first_note: ultra_notes,
            last_note: textnote_u,
            first_indices: [i],
            last_indices: [i]
          });
          stavelineu.render_options.line_width = 3;
          stavelineu.render_options.padding_right = -4;

          if (ultra_highlights[i]) {
            stavelineu.render_options.color = ultra_highlights[i];
          }

          if (note_data[12][i] === 1) {
            stavelineu.render_options.color = target_color;
          }

          stave_linesu.push(stavelineu);
        }

        for (var k = 0; k < stave_linesu.length; k++) {
          stave_linesu[k].setContext(context);
          stave_linesu[k].draw();
        }
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
        staveline.render_options.padding_right = -4;

        if (treble_highlights[i]) {
          staveline.render_options.color = treble_highlights[i];
        }

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
        stavelineb.render_options.padding_right = -4;

        if (bass_highlights[i]) {
          stavelineb.render_options.color = bass_highlights[i];
        }

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
      this.refs.outer.addEventListener("click", this.orchClick.bind(this), false);
    }
  }, {
    key: "orchClick",
    value: function orchClick(event) {
      var _this$props2 = this.props,
          setProps = _this$props2.setProps,
          indexing = _this$props2.indexing; //if (!event.target.closest('.vf-stavenote')) {return;} 
      //if (!event.target.parentElement.closest('.vf-stavenote')) {return;} 

      if (!event.target.closest('text')) {
        return;
      } //console.log(event)


      if (indexing) {
        var value = event.target.innerHTML;
        var res = value.split(':');
        var idx = parseInt(res[0]);
        if (setProps) setProps({
          onClick: idx
        });
        console.log(idx);
      }
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
      var _this$props3 = this.props,
          id = _this$props3.id,
          notes = _this$props3.notes,
          instruments = _this$props3.instruments,
          target = _this$props3.target;
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
  target_color: 'red',
  highlights: [],
  indexing: true
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
  highlights: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  t_score_y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  b_score_y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  target_color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  text_space: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  indexing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJPcmNoZXN0cmF0aW9uIiwicHJvcHMiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwicmVuZGVyZXIiLCJjb250ZXh0Iiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwic2V0UHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInRfc2NvcmVfeSIsImJfc2NvcmVfeSIsInRhcmdldF9jb2xvciIsInRleHRfc3BhY2UiLCJoaWdobGlnaHRzIiwiaW5kZXhpbmciLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJzZXBhcmF0ZSIsImkiLCJ0cmVibGVfbiIsInRyZWJsZV9hIiwidHJlYmxlX3QiLCJ0cmVibGVfaSIsInRyZWJsZV9oIiwiYmFzc19uIiwiYmFzc19hIiwiYmFzc190IiwiYmFzc19pIiwiYmFzc19oIiwidWx0cmFfbiIsInVsdHJhX2EiLCJ1bHRyYV90IiwidWx0cmFfaSIsInVsdHJhX2giLCJuZXdfa2V5IiwibmV3X29jdGF2ZSIsIm5ld19hY2NpZGVudGlhbCIsImVudHJ5IiwibmV3X25vdGUiLCJpbnN0IiwidGd0IiwibGVuZ3RoIiwiaGlnaGxpZ2h0IiwiY29uY2F0IiwicGFyc2VJbnQiLCJwdXNoIiwiaiIsIm5vdGVfZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInN0YXZlX3UiLCJmaWxsVGV4dCIsInVsdHJhX3RleHRub3RlcyIsInRleHRub3RlX3UiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwic2V0U3RlbVN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJzZXRLZXlMaW5lIiwidWx0cmFfbm90ZXMiLCJ1bHRyYV9pbnN0IiwidWx0cmFfaGlnaGxpZ2h0cyIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwidGVrc3RpdSIsInZpZXJlZW4iLCJNb2RpZmllciIsIlBvc2l0aW9uIiwiUklHSFQiLCJzZXRPZmZzZXRYIiwibm90ZV9oZWFkcyIsImdseXBoX2NvZGUiLCJhZGRNb2RpZmllciIsInNldEtleVN0eWxlIiwic2hhZG93Q29sb3IiLCJzaGFkb3dCbHVyIiwiZmlsbFN0eWxlIiwiY29ubmVjdG9yIiwiU3RhdmVDb25uZWN0b3IiLCJjb25uZWN0b3IzIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsIkJSQUNLRVQiLCJ0cmVibGVfdGV4dG5vdGVzIiwidGV4dG5vdGUiLCJiYXNzX3RleHRub3RlcyIsInRleHRub3RlX2IiLCJ0cmVibGVfbm90ZXMiLCJiYXNzX25vdGVzIiwidHJlYmxlX2luc3QiLCJiYXNzX2luc3QiLCJ0cmVibGVfaGlnaGxpZ2h0cyIsImJhc3NfaGlnaGxpZ2h0cyIsIm51bSIsInBvcyIsImluc3RfdGV4dCIsIkZyZXRIYW5kRmluZ2VyIiwic2V0UG9zaXRpb24iLCJ0ZWtzdGkiLCJidGVrc3RpIiwidm9pY2VfdCIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsInNldE1vZGUiLCJ2b2ljZV90X3RleHQiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwiZm9ybWF0dGVyX3QiLCJ0aWNrQ29udGV4dHMiLCJhcnJheSIsInZvaWNlX2IiLCJ2b2ljZV9iX3RleHQiLCJmb3JtYXR0ZXJfYiIsInZvaWNlX3UiLCJ2b2ljZV91X3RleHQiLCJmb3JtYXR0ZXJfdSIsInN0YXZlX2xpbmVzdSIsInN0YXZlbGluZXUiLCJTdGF2ZUxpbmUiLCJmaXJzdF9ub3RlIiwibGFzdF9ub3RlIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsInJlbmRlcl9vcHRpb25zIiwibGluZV93aWR0aCIsInBhZGRpbmdfcmlnaHQiLCJjb2xvciIsImsiLCJzdGF2ZV9saW5lcyIsInN0YXZlbGluZSIsInN0YXZlX2xpbmVzYiIsInN0YXZlbGluZWIiLCJyZWZzIiwib3V0ZXIiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcmNoQ2xpY2siLCJiaW5kIiwiZXZlbnQiLCJjbG9zZXN0IiwidmFsdWUiLCJpbm5lckhUTUwiLCJyZXMiLCJzcGxpdCIsImlkeCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwic2V0dXBTY29yZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJoYXNDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxhOzs7OztBQUVqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxNQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtDLFdBQUwsR0FBaUIsQ0FBakI7QUFDQSxVQUFLQyxRQUFMLEdBQWMsQ0FBZDtBQUNBLFVBQUtDLE9BQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFQZTtBQVlsQjs7OztpQ0FFWTtBQUNELFVBQU1DLFlBQVksR0FB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QUFkLEdBQTZCO0FBQUN6SyxPQUFLLEVBQUUsR0FBUjtBQUFhQyxRQUFNLEVBQUUsR0FBckI7QUFBMEJDLFdBQVMsRUFBRSxHQUFyQztBQUEwQ0MsV0FBUyxFQUFFLEdBQXJEO0FBQTBERSxZQUFVLEVBQUUsR0FBdEU7QUFBMkVELGNBQVksRUFBRSxLQUF6RjtBQUFnR0UsWUFBVSxFQUFFLEVBQTVHO0FBQWdIQyxVQUFRLEVBQUU7QUFBMUgsQ0FBN0I7QUFFQXRCLGFBQWEsQ0FBQ3lMLFNBQWQsR0FBMEI7QUFDdEI7OztBQUdBNUssSUFBRSxFQUFFNkssaURBQVMsQ0FBQ0MsTUFKUTs7QUFNdEI7OztBQUdBekwsT0FBSyxFQUFFd0wsaURBQVMsQ0FBQ3BELEtBVEs7QUFVdEJuSSxRQUFNLEVBQUV1TCxpREFBUyxDQUFDcEQsS0FWSTtBQVd0QmxJLGFBQVcsRUFBRXNMLGlEQUFTLENBQUNwRCxLQVhEO0FBWXRCakgsWUFBVSxFQUFFcUssaURBQVMsQ0FBQ3BELEtBWkE7QUFhdEJ2SCxPQUFLLEVBQUUySyxpREFBUyxDQUFDRSxNQWJLO0FBY3RCNUssUUFBTSxFQUFFMEssaURBQVMsQ0FBQ0UsTUFkSTtBQWV0QjNLLFdBQVMsRUFBRXlLLGlEQUFTLENBQUNFLE1BZkM7QUFnQnRCMUssV0FBUyxFQUFFd0ssaURBQVMsQ0FBQ0UsTUFoQkM7QUFpQnRCekssY0FBWSxFQUFFdUssaURBQVMsQ0FBQ0MsTUFqQkY7QUFrQnRCdkssWUFBVSxFQUFFc0ssaURBQVMsQ0FBQ0UsTUFsQkE7QUFtQnRCdEssVUFBUSxFQUFFb0ssaURBQVMsQ0FBQ0csSUFuQkU7QUFvQnRCbkIsU0FBTyxFQUFFZ0IsaURBQVMsQ0FBQ0UsTUFwQkc7O0FBc0J0Qjs7OztBQUlBOUssVUFBUSxFQUFFNEssaURBQVMsQ0FBQ0k7QUExQkUsQ0FBMUIsQyIsImZpbGUiOiIzOTQwZTcxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yY2hlc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9MDtcclxuICAgICAgICB0aGlzLnRhcmdldD0wO1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudHM9MDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyPTA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0PTA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNldHVwU2NvcmUoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgbm90ZXMsIHRhcmdldCwgaW5zdHJ1bWVudHMsIHNldFByb3BzLCB3aWR0aCwgaGVpZ2h0LCB0X3Njb3JlX3ksIGJfc2NvcmVfeSwgdGFyZ2V0X2NvbG9yLCB0ZXh0X3NwYWNlLCBoaWdobGlnaHRzLCBpbmRleGluZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBpbnN0cnVtZW50cztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzaXplKHdpZHRoK3RleHRfc3BhY2UsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG5cclxuICAgICAgICAgICAgICAgIC8vRG8gVHJlYmxlIGFuZCBCYXNzIENsZWZzXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfdCA9IG5ldyBWRi5TdGF2ZSgyMCwgdF9zY29yZV95LCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90LmFkZENsZWYoXCJ0cmVibGVcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTsgXHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90LnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXZlX3QpXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuY29udGV4dC5maWxsVGV4dCgnMTVtYScsIHN0YXZlX3QueCs2LCBzdGF2ZV90LnkrMjYpXHJcbiAgICAgICAgICAgICAgICAvL3ZhciBzdGF2ZV90MiA9IG5ldyBWRi5TdGF2ZSgyMCt3aWR0aCwgdF9zY29yZV95LCA1MCk7XHJcbiAgICAgICAgICAgICAgICAvL3N0YXZlX3QyLnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfYiA9IG5ldyBWRi5TdGF2ZSgyMCwgYl9zY29yZV95LCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLmFkZENsZWYoXCJiYXNzXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV9iLnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUobm90ZXMsIGluc3RydW1lbnRzLHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVibGVfbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVibGVfYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVibGVfdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVibGVfaSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVibGVfaCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX24gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc19hID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX2kgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc19oID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVsdHJhX24gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdWx0cmFfYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1bHRyYV90ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVsdHJhX2kgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdWx0cmFfaCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpPTA7IGk8bm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BZGQgaW5kZXggdG8gdGhlIG5hbWUgZm9yIG1vdXNlIGNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0ID0gaSsnOiAnK2luc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0ID0gaW5zdHJ1bWVudHNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gJydcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBoaWdobGlnaHRzW2ldICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQgPSBoaWdobGlnaHRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2tleSA9IGVudHJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfb2N0YXZlID0gZW50cnlbZW50cnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gZW50cnlbMV07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGd0ID0gdGFyZ2V0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG5ld19vY3RhdmUpID49IDQgJiYgcGFyc2VJbnQobmV3X29jdGF2ZSkgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2kucHVzaChpbnN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWJsZV9oLnB1c2goaGlnaGxpZ2h0KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL0FsbGEgb2xldmEgb3R0YWEgdmFpbiBla2FuIGh1b21pb29uLCB0YXJraXN0YSEhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChuZXdfb2N0YXZlKSA+PSA2KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X29jdGF2ZS09MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJhX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJhX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsdHJhX2kucHVzaChpbnN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bHRyYV9oLnB1c2goaGlnaGxpZ2h0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdWx0cmFfdC5wdXNoKHRndCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhc3Nfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfaS5wdXNoKGluc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfaC5wdXNoKGhpZ2hsaWdodClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc3NfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdHJlYmxlX24sIHRyZWJsZV9hLCB0cmVibGVfdCwgYmFzc19uLCBiYXNzX2EsIGJhc3NfdCwgdHJlYmxlX2ksIGJhc3NfaSwgdHJlYmxlX2gsIGJhc3NfaCwgdWx0cmFfbiwgdWx0cmFfYSwgdWx0cmFfdCwgdWx0cmFfaSwgdWx0cmFfaF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBub3RlX2RhdGEgPSBzZXBhcmF0ZSh0aGlzLm5vdGVzLCB0aGlzLmluc3RydW1lbnRzLCB0aGlzLnRhcmdldClcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgc2NvcmUgY29udGFpbnMgdWx0cmEgaGlnaCBub3RlcywgYW5kIGRvIGFuIHVsdHJhIGhpZ2ggc3RhZmY6XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZV9kYXRhWzEwXSkgJiYgbm90ZV9kYXRhWzEwXS5sZW5ndGgpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzdGF2ZV91ID0gbmV3IFZGLlN0YXZlKDIwLCA0MCwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdS5hZGRDbGVmKFwidHJlYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdS5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KCcxNW1hJywgc3RhdmVfdS54KzYsIHN0YXZlX3UueSsyNilcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdWx0cmFfdGV4dG5vdGVzID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMTBdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICB1bHRyYV90ZXh0bm90ZXMucHVzaCgnYy80JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0bm90ZV91ID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogdWx0cmFfdGV4dG5vdGVzLCBkdXJhdGlvbjogXCJxXCIgfSkgLy8gaWdub3JlX3RpY2tzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB0ZXh0bm90ZV91LnNldFN0ZW1TdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICB0ZXh0bm90ZV91LnNldExlZGdlckxpbmVTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzEwXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRub3RlX3Uuc2V0S2V5TGluZShpLCBpLTEuNSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdWx0cmFfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBub3RlX2RhdGFbMTBdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICAgICAgICAgIHZhciB1bHRyYV9pbnN0ID0gbm90ZV9kYXRhWzEzXVxyXG4gICAgICAgICAgICAgICAgdmFyIHVsdHJhX2hpZ2hsaWdodHMgPSBub3RlX2RhdGFbMTRdXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVsxMV0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHVsdHJhX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzExXVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZWtzdGl1ID0gdmllcmVlbih1bHRyYV9pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVClcclxuICAgICAgICAgICAgICAgICAgICB0ZWtzdGl1LnNldE9mZnNldFgoLTEwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGVrc3RpKSAvLyBcclxuICAgICAgICAgICAgICAgICAgICAvL3Rla3N0aS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0pFQlVfdGVrc3RpJytpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGVrc3RpLnNldE9mZnNldFkoMClcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0bm90ZV91Lm5vdGVfaGVhZHNbaV0uZ2x5cGhfY29kZSA9ICd2MjMnXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dG5vdGVfdS5hZGRNb2RpZmllcihpLCB0ZWtzdGl1KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGV4dG5vdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0bm90ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0pFQlVfdGVrc3RpJytpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bHRyYV9oaWdobGlnaHRzW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWx0cmFfbm90ZXMuc2V0S2V5U3R5bGUoaSwge3NoYWRvd0NvbG9yOiB1bHRyYV9oaWdobGlnaHRzW2ldLCBzaGFkb3dCbHVyOjEwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGV4dG5vdGUuc2V0S2V5U3R5bGUoaSwge3NoYWRvd0NvbG9yOiB0cmVibGVfaGlnaGxpZ2h0c1tpXSwgc2hhZG93Qmx1cjoxMDB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsxMl1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWx0cmFfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogdGFyZ2V0X2NvbG9yfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRub3RlX3Uuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogdGFyZ2V0X2NvbG9yfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdG9yID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3UsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RvcjMgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdSwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vVWx0cmEgaGlnaCBzdGFmZiBzdHVmZiBlbmRzXHJcblxyXG4gICAgICAgICAgICAgICAgLy9EbyBjb25uZWN0b3JzXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgY29ubmVjdG9yMiA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9SSUdIVCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvL2Nvbm5lY3RvcjIuZHJhdygpOyAgIFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdG9yMy5zZXRUZXh0KCdPcmNoLicpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5kcmF3KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV90ZXh0bm90ZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVswXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3RleHRub3Rlcy5wdXNoKCdjLzQnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRleHRub3RlID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogdHJlYmxlX3RleHRub3RlcywgZHVyYXRpb246IFwicVwiIH0pIC8vIGlnbm9yZV90aWNrczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGV4dG5vdGUuc2V0U3RlbVN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnfSlcclxuICAgICAgICAgICAgICAgIHRleHRub3RlLnNldExlZGdlckxpbmVTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRleHRub3RlKVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVswXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIHRleHRub3RlID0gbmV3IFZGLlRleHROb3RlKHt0ZXh0OiAnamVidScsIGR1cmF0aW9uOiAnMzInLCBpZ25vcmVfdGlja3M6IHRydWV9KSAvLyBpZ25vcmVfdGlja3M6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0bm90ZS5zZXRLZXlMaW5lKGksIGktMS41KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dG5vdGUuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogJ3JnYmEoMCwwLDAsMCknfSlcclxuICAgICAgICAgICAgICAgICAgICAvLy5zZXRTdGF2ZShzdGF2ZV90KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vLnNldExpbmUoaSlcclxuICAgICAgICAgICAgICAgICAgICAvLy5zZXRKdXN0aWZpY2F0aW9uKFZGLlRleHROb3RlLkp1c3RpZmljYXRpb24uTEVGVClcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHRub3RlLnhfc2hpZnQgPSAxMDBcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHRub3RlLnRpY2tDb250ZXh0LmV4dHJhTGVmdFB4ID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGV4dG5vdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy90cmVibGVfdGV4dG5vdGVzLnB1c2godGV4dG5vdGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3NfdGV4dG5vdGVzID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbM10ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc3NfdGV4dG5vdGVzLnB1c2goJ2MvMycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dG5vdGVfYiA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwiYmFzc1wiLCBrZXlzOiBiYXNzX3RleHRub3RlcywgZHVyYXRpb246IFwicVwiIH0pIC8vIGlnbm9yZV90aWNrczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGV4dG5vdGVfYi5zZXRTdGVtU3R5bGUoe3N0cm9rZVN0eWxlOiAnbm9uZSd9KVxyXG4gICAgICAgICAgICAgICAgdGV4dG5vdGVfYi5zZXRMZWRnZXJMaW5lU3R5bGUoe3N0cm9rZVN0eWxlOiAnbm9uZSd9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRleHRub3RlX2IpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzNdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgdGV4dG5vdGUgPSBuZXcgVkYuVGV4dE5vdGUoe3RleHQ6ICdqZWJ1JywgZHVyYXRpb246ICczMicsIGlnbm9yZV90aWNrczogdHJ1ZX0pIC8vIGlnbm9yZV90aWNrczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRub3RlX2Iuc2V0S2V5TGluZShpLCBpLTEuNSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHRub3RlLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6ICdyZ2JhKDAsMCwwLDApJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8uc2V0U3RhdmUoc3RhdmVfdClcclxuICAgICAgICAgICAgICAgICAgICAvLy5zZXRMaW5lKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8uc2V0SnVzdGlmaWNhdGlvbihWRi5UZXh0Tm90ZS5KdXN0aWZpY2F0aW9uLkxFRlQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0bm90ZS54X3NoaWZ0ID0gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0bm90ZS50aWNrQ29udGV4dC5leHRyYUxlZnRQeCA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRleHRub3RlX2IpXHJcbiAgICAgICAgICAgICAgICAgICAgLy90cmVibGVfdGV4dG5vdGVzLnB1c2godGV4dG5vdGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBub3RlX2RhdGFbMF0sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3Nfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcImJhc3NcIiwga2V5czogbm90ZV9kYXRhWzNdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfaW5zdCA9IG5vdGVfZGF0YVs2XVxyXG4gICAgICAgICAgICAgICAgdmFyIGJhc3NfaW5zdCA9IG5vdGVfZGF0YVs3XVxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9oaWdobGlnaHRzID0gbm90ZV9kYXRhWzhdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19oaWdobGlnaHRzID0gbm90ZV9kYXRhWzldXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RfdGV4dCA9IG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbnN0X3RleHQuc2V0WFNoaWZ0KC01MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RfdGV4dDsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRyZWJsZV9ub3RlcylcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMV0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVsxXVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZWtzdGkgPSB2aWVyZWVuKHRyZWJsZV9pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVClcclxuICAgICAgICAgICAgICAgICAgICB0ZWtzdGkuc2V0T2Zmc2V0WCgtMTApXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZWtzdGkpIC8vIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGVrc3RpLnNldEF0dHJpYnV0ZSgnaWQnLCAnSkVCVV90ZWtzdGknK2kpXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZWtzdGkuc2V0T2Zmc2V0WSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRub3RlLm5vdGVfaGVhZHNbaV0uZ2x5cGhfY29kZSA9ICd2MjMnXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dG5vdGUuYWRkTW9kaWZpZXIoaSwgdGVrc3RpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGV4dG5vdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0bm90ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0pFQlVfdGVrc3RpJytpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmVibGVfaGlnaGxpZ2h0c1tpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5zZXRLZXlTdHlsZShpLCB7c2hhZG93Q29sb3I6IHRyZWJsZV9oaWdobGlnaHRzW2ldLCBzaGFkb3dCbHVyOjEwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGV4dG5vdGUuc2V0S2V5U3R5bGUoaSwge3NoYWRvd0NvbG9yOiB0cmVibGVfaGlnaGxpZ2h0c1tpXSwgc2hhZG93Qmx1cjoxMDB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogdGFyZ2V0X2NvbG9yfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRub3RlLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IHRhcmdldF9jb2xvcn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzRdW2ldKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBidGVrc3RpID0gdmllcmVlbihiYXNzX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKVxyXG4gICAgICAgICAgICAgICAgICAgIGJ0ZWtzdGkuc2V0T2Zmc2V0WCgtMTApXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dG5vdGVfYi5ub3RlX2hlYWRzW2ldLmdseXBoX2NvZGUgPSAndjIzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRub3RlX2IuYWRkTW9kaWZpZXIoaSwgYnRla3N0aSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzc19oaWdobGlnaHRzW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19ub3Rlcy5zZXRLZXlTdHlsZShpLCB7c2hhZG93Q29sb3I6IGJhc3NfaGlnaGxpZ2h0c1tpXSwgc2hhZG93Qmx1cjoxMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RleHRub3RlX2Iuc2V0S2V5U3R5bGUoaSwge3NoYWRvd0NvbG9yOiBiYXNzX2hpZ2hsaWdodHNbaV0sIHNoYWRvd0JsdXI6MTAwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RlX2RhdGFbNV1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiB0YXJnZXRfY29sb3J9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG5vdGVfYi5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiB0YXJnZXRfY29sb3J9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdm9pY2UgaW4gNC80IGFuZCBhZGQgdGhlIG5vdGVzIGZyb20gYWJvdmVcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVswXSkgJiYgbm90ZV9kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX3QgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2b2ljZV90X3RleHQgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3QuYWRkVGlja2FibGVzKFt0cmVibGVfbm90ZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90X3RleHQuYWRkVGlja2FibGVzKFt0ZXh0bm90ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codm9pY2VfdF90ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdm9pY2VfdF90ZXh0LnRpY2thYmxlc1swXS50aWNrQ29udGV4dC54T2Zmc2V0ID0gNTBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RdKS5mb3JtYXQoW3ZvaWNlX3RdLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlcl90ID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RfdGV4dF0pLmZvcm1hdChbdm9pY2VfdF90ZXh0XSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcl90LnRpY2tDb250ZXh0cy5hcnJheVswXS54ID0gd2lkdGgtNDBcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm1hdHRlcl90KVxyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3QuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3RfdGV4dC5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX2IgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdm9pY2VfYl90ZXh0ID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYl90ZXh0LmFkZFRpY2thYmxlcyhbdGV4dG5vdGVfYl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVszXSkgJiYgbm90ZV9kYXRhWzNdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5hZGRUaWNrYWJsZXMoW2Jhc3Nfbm90ZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX2JdKS5mb3JtYXQoW3ZvaWNlX2JdLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlcl9iID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX2JfdGV4dF0pLmZvcm1hdChbdm9pY2VfYl90ZXh0XSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcl9iLnRpY2tDb250ZXh0cy5hcnJheVswXS54ID0gd2lkdGgtNDBcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV9iLmRyYXcodGhpcy5jb250ZXh0LCBzdGF2ZV9iKTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV9iX3RleHQuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVsxMF0pICYmIG5vdGVfZGF0YVsxMF0ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdm9pY2VfdSA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX3VfdGV4dCA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiAxLCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfdS5hZGRUaWNrYWJsZXMoW3VsdHJhX25vdGVzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfdV90ZXh0LmFkZFRpY2thYmxlcyhbdGV4dG5vdGVfdV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codm9pY2VfdF90ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdm9pY2VfdF90ZXh0LnRpY2thYmxlc1swXS50aWNrQ29udGV4dC54T2Zmc2V0ID0gNTBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3VdKS5mb3JtYXQoW3ZvaWNlX3VdLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlcl91ID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3VfdGV4dF0pLmZvcm1hdChbdm9pY2VfdV90ZXh0XSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcl91LnRpY2tDb250ZXh0cy5hcnJheVswXS54ID0gd2lkdGgtNDBcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm1hdHRlcl90KVxyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3UuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX3UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3VfdGV4dC5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfdSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF2ZV9saW5lc3UgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHVsdHJhX3RleHRub3Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdmVsaW5ldSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2ZpcnN0X25vdGU6IHVsdHJhX25vdGVzLCBsYXN0X25vdGU6IHRleHRub3RlX3UsIGZpcnN0X2luZGljZXM6IFtpXSwgbGFzdF9pbmRpY2VzOltpXX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmV1LnJlbmRlcl9vcHRpb25zLmxpbmVfd2lkdGggPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmV1LnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfcmlnaHQgPSAtNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVsdHJhX2hpZ2hsaWdodHNbaV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZXUucmVuZGVyX29wdGlvbnMuY29sb3IgPSB1bHRyYV9oaWdobGlnaHRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90ZV9kYXRhWzEyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5ldS5yZW5kZXJfb3B0aW9ucy5jb2xvciA9IHRhcmdldF9jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc3UucHVzaChzdGF2ZWxpbmV1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGs9MDsgazxzdGF2ZV9saW5lc3UubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc3Vba10uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc3Vba10uZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfbGluZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dHJlYmxlX3RleHRub3Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBsYXN0X25vdGU6IE5vdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBmaXJzdF9pbmRpY2VzOiBbbjEsIG4yLCBuM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBsYXN0X2luZGljZXM6IFtuMSwgbjIsIG4zXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXZlbGluZSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2ZpcnN0X25vdGU6IHRyZWJsZV9ub3RlcywgbGFzdF9ub3RlOiB0ZXh0bm90ZSwgZmlyc3RfaW5kaWNlczogW2ldLCBsYXN0X2luZGljZXM6W2ldfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLmxpbmVfd2lkdGggPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5wYWRkaW5nX3JpZ2h0ID0gLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyZWJsZV9oaWdobGlnaHRzW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5jb2xvciA9IHRyZWJsZV9oaWdobGlnaHRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMuY29sb3IgPSB0YXJnZXRfY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3N0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5wYWRkaW5nX2xlZnQgPSAtNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3N0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5wYWRkaW5nX3JpZ2h0ID0gLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGROb3RlLmFkZE1vZGlmaWVyKDAsIG5ldyBWRi5Nb2RpZmllcihzdGF2ZWxpbmUpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXMucHVzaChzdGF2ZWxpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX2xpbmVzYiA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxiYXNzX3RleHRub3Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBsYXN0X25vdGU6IE5vdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBmaXJzdF9pbmRpY2VzOiBbbjEsIG4yLCBuM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBsYXN0X2luZGljZXM6IFtuMSwgbjIsIG4zXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXZlbGluZWIgPSBuZXcgVkYuU3RhdmVMaW5lKHtmaXJzdF9ub3RlOiBiYXNzX25vdGVzLCBsYXN0X25vdGU6IHRleHRub3RlX2IsIGZpcnN0X2luZGljZXM6IFtpXSwgbGFzdF9pbmRpY2VzOltpXX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZWIucmVuZGVyX29wdGlvbnMubGluZV93aWR0aCA9IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lYi5yZW5kZXJfb3B0aW9ucy5wYWRkaW5nX3JpZ2h0ID0gLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc3NfaGlnaGxpZ2h0c1tpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmViLnJlbmRlcl9vcHRpb25zLmNvbG9yID0gYmFzc19oaWdobGlnaHRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVs1XVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lYi5yZW5kZXJfb3B0aW9ucy5jb2xvciA9IHRhcmdldF9jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfbGVmdCA9IC00XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfcmlnaHQgPSAtNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZE5vdGUuYWRkTW9kaWZpZXIoMCwgbmV3IFZGLk1vZGlmaWVyKHN0YXZlbGluZSkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc2IucHVzaChzdGF2ZWxpbmViKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaz0wOyBrPHN0YXZlX2xpbmVzLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc1trXS5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXNba10uZHJhdygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrPTA7IGs8c3RhdmVfbGluZXNiLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc2Jba10uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzYltrXS5kcmF3KClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5vdXRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vcmNoQ2xpY2suYmluZCh0aGlzKSwgZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICBvcmNoQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHMsIGluZGV4aW5nfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgLy9pZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcudmYtc3RhdmVub3RlJykpIHtyZXR1cm47fSBcclxuICAgICAgICAvL2lmICghZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnLnZmLXN0YXZlbm90ZScpKSB7cmV0dXJuO30gXHJcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgndGV4dCcpKSB7cmV0dXJuO30gXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudClcclxuICAgICAgICBpZihpbmRleGluZyl7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcclxuICAgICAgICAgICAgdmFyIHJlcyA9IHZhbHVlLnNwbGl0KCc6JylcclxuICAgICAgICAgICAgdmFyIGlkeCA9IHBhcnNlSW50KHJlc1swXSlcclxuICAgICAgICAgICAgaWYgKHNldFByb3BzKSBzZXRQcm9wcyh7b25DbGljazogaWR4fSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWR4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5ub3RlcyAhPT0gcHJldlByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IHByZXZQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gcHJldlByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgLy9jb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmcy5vdXRlclxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKClcclxuICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykgeyAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5leHRQcm9wcy5ub3Rlc1xyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gbmV4dFByb3BzLmluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFByb3BzLnRhcmdldFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAqL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdHtpZCwgbm90ZXMsIGluc3RydW1lbnRzLCB0YXJnZXR9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5PcmNoZXN0cmF0aW9uLmRlZmF1bHRQcm9wcyA9IHt3aWR0aDogMjAwLCBoZWlnaHQ6IDQwMCwgdF9zY29yZV95OiAxMTAsIGJfc2NvcmVfeTogMjAwLCB0ZXh0X3NwYWNlOiAxMjAsIHRhcmdldF9jb2xvcjogJ3JlZCcsIGhpZ2hsaWdodHM6IFtdLCBpbmRleGluZzogdHJ1ZX07XHJcblxyXG5PcmNoZXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBub3RlczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBpbnN0cnVtZW50czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgaGlnaGxpZ2h0czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0X3Njb3JlX3k6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBiX3Njb3JlX3k6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0YXJnZXRfY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0ZXh0X3NwYWNlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaW5kZXhpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
      var width = this.props.width;
      var height = this.props.height;
      var stave_spacing = this.props.stave_spacing;
      var stave_list = this.props.stave_list;
      var padding = 100;
      console.log(height);
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(width + padding, height);
      var context = renderer.getContext();
      console.log(stave_list.length);

      for (var bar = 0; bar < stave_list.length; bar++) {
        // if (bar===0){
        //     padding=100
        // } 
        //Create staves
        var staves = [];

        for (var i = 0; i < stave_list[bar].length; i++) {
          staves.push(new VF.Stave(padding + bar * (width / stave_list.length), stave_spacing * (i + 1), width / stave_list.length));

          if (bar === 0) {
            staves[i].addClef(stave_list[bar][i].clef);
            staves[i].setText(stave_list[bar][i].name, VF.Modifier.Position.LEFT, {
              shift_x: -60
            });
          }

          staves[i].setContext(context).draw();
        }

        var connector = new VF.StaveConnector(staves[0], staves[staves.length - 1]);
        connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
        connector.setContext(context);
        connector.draw();

        if (bar === 0) {
          connector.setType(VF.StaveConnector.type.BRACKET);
          connector.setContext(context);
          connector.draw();
        }

        var note_list = [];
        var voices = [];

        for (var k = 0; k < stave_list[bar].length; k++) {
          note_list.push([]);
          voices.push(new VF.Voice({
            num_beats: 4,
            beat_value: 4
          }).setMode(2));

          for (var i = 0; i < stave_list[bar][k].notes.length; i++) {
            var newClef = stave_list[bar][k].clef;
            var addNote = new VF.StaveNote({
              clef: newClef,
              keys: [stave_list[bar][k].notes[i]],
              duration: "q"
            });
            addNote.addAnnotation(0, new VF.Accidental("#").setYShift(-24)).setXShift(-13);
            addNote.setStyle({
              strokeStyle: 'rgba(0,0,0,0)',
              fillStyle: 'green'
            });
            note_list[k].push(addNote);
          }

          voices[k].addTickables(note_list[k]);
          var format_width = width / stave_list.length;

          if (bar === 0) {
            format_width = format_width - 30;
          }

          var formatter = new VF.Formatter().joinVoices([voices[k]]).format([voices[k]], format_width); //voices[k].draw(context, staves[k]);
        } //var formatter = new VF.Formatter().joinVoices(voices).format(voices, 50);
        //var formatter = new VF.Formatter().format(voices, 100);


        for (var k = 0; k < stave_list[bar].length; k++) {
          voices[k].draw(context, staves[k]);
        }
      }
      /*
              var stave_t = new VF.Stave(20, 110, width);
              stave_t.addClef("treble") //.addTimeSignature("4/4");
              stave_t.setContext(context).draw();
      
              var stave_b = new VF.Stave(20, 200, 200);
              stave_b.addClef("bass") //.addTimeSignature("4/4");
              stave_b.setContext(context).draw();
              
              //Do connectors
              var connector = new VF.StaveConnector(stave_t, stave_b);
              connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
              connector.setContext(context);
              connector.draw();
              // var connector2 = new VF.StaveConnector(stave_t, stave_b);
              // connector2.setType(VF.StaveConnector.type.SINGLE_RIGHT);
              // connector2.setContext(context);
              //connector2.draw();
              var connector3 = new VF.StaveConnector(stave_t, stave_b);
              connector3.setType(VF.StaveConnector.type.BRACKET);
              connector3.setContext(context);
              //connector3.setText('Orch.');
              connector3.draw();
      
      
              function separate(notes, instruments,target) {
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
                  var tgt
                  for (i=0; i<notes.length; i++) {
                      entry = notes[i];
                      inst = instruments[i]
                      new_key = entry[0];
                      new_octave = entry[entry.length-1];
                      if (entry.length>2){
                          new_accidential = entry[1]; 
                      } else {
                          new_accidential = "n";
                      }
                     new_note = new_key.concat("/",new_octave)
                     tgt = target[i];
                    if (parseInt(new_octave) >= 4) {
                        treble_n.push(new_note);
                        treble_a.push(new_accidential)
                        treble_i.push(inst)
      
                        //Tällä katsotaan onko juuri tämä targetlistalla
                        //Alla oleva ottaa vain ekan huomioon, tarkista!!
                        var tgt = 0;
                        for (var j=0; j<target.length; j++) {
                          if (target[j]===i){
                              tgt=1;
                          }
                       }
                       treble_t.push(tgt);
                    } else {
                        bass_n.push(new_note);
                        bass_a.push(new_accidential);
                        bass_i.push(inst);
                        var tgt = 0;
                        for (var j=0; j<target.length; j++) {
                          if (target[j]===i){
                              tgt=1;
                          }
                      }
                      bass_t.push(tgt);
                    }
                    
                  } 
      
                  return [treble_n, treble_a, treble_t, bass_n, bass_a, bass_t, treble_i, bass_i];
                  }
              
              var note_data = separate(notes, instruments, target)
              
              var treble_notes = new VF.StaveNote({clef: "treble", keys: note_data[0], duration: "q" })
              var bass_notes = new VF.StaveNote({clef: "bass", keys: note_data[3], duration: "q" })
              var treble_inst = note_data[6]
              var bass_inst = note_data[7]
      
              //Funktio jolla piirretään nuotin viereen
              function viereen(num, pos) { return new VF.FretHandFinger(num).setPosition(pos); }
      
              for (var i=0; i<note_data[1].length; i++){
                  treble_notes.addAccidental(i, new VF.Accidental(note_data[1][i]));
                  treble_notes.addModifier(i, viereen(treble_inst[i], VF.Modifier.Position.RIGHT))
                  if (note_data[2][i]===1){
                      treble_notes.setKeyStyle(i, {fillStyle: "red"});
                  } 
              }
              for (var i=0; i<note_data[3].length; i++){
                  bass_notes.addAccidental(i, new VF.Accidental(note_data[4][i]));
                  bass_notes.addModifier(i, viereen(bass_inst[i], VF.Modifier.Position.RIGHT))
                  if (note_data[5][i]===1){
                      bass_notes.setKeyStyle(i, {fillStyle: "red"});
                  }
              }
      
              //Funktio jolla piirretään nuotin viereen
              function viereen(num, pos) { return new VF.FretHandFinger(num).setPosition(pos); }
              
              //Duunataan sointu, jossa kaksi nuottia:
              var new_note = new VF.StaveNote({clef: "treble", keys: ["a/3", "d/4"], duration: "h" })
              
              //Vaihdetaan ylemmän =1 väri punaiseksi
              new_note.setKeyStyle(1, {fillStyle: "red"});
              new_note.addModifier(1, viereen('Soitin', VF.Modifier.Position.RIGHT))
              new_note.addModifier(0, viereen('Toinen soitin', VF.Modifier.Position.RIGHT))
              new_note.addAccidental(1, new VF.Accidental("n"))
              new_note.addAccidental(0, new VF.Accidental("b"))
      
              //Lisätään listaan
              var new_notes = [
                  new_note,
                ];
              
                // Create a voice in 4/4 and add the notes from above
              var voice_t = new VF.Voice({num_beats: 1,  beat_value: 4});
              var voice_b = new VF.Voice({num_beats: 1,  beat_value: 4});
              voice_t.addTickables([treble_notes]);
              voice_b.addTickables([bass_notes]);
          
              var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], width);
              var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], width);
              voice_t.draw(context, stave_t);
              voice_b.draw(context, stave_b);
              */


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
    } //new VF.StaveNote().set

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Test, {
        width: 400,
        height: 500,
        stave_list: [[{
          clef: 'treble',
          name: 'violin',
          notes: ['c/4', 'd/5', 'f/6', 'a/3', 'g/5']
        }, {
          clef: 'bass',
          name: 'bassoon',
          notes: ['c/3', 'a/3', 'g/3']
        }, {
          clef: 'treble',
          name: 'jebu',
          notes: ['c/4', 'f/4', 'a/3', 'g/4']
        }], [{
          clef: 'treble',
          name: 'violin',
          notes: ['c/4', 'f/4', 'a/3', 'g/4']
        }, {
          clef: 'bass',
          name: 'bassoon',
          notes: ['c/3', 'a/3', 'g/3']
        }, {
          clef: 'treble',
          name: 'jebu',
          notes: ['c/4', 'd/5', 'f/6', 'a/3', 'g/5']
        }], [{
          clef: 'treble',
          name: 'violin',
          notes: ['c/4', 'd/5', 'f/6', 'a/3', 'g/5']
        }, {
          clef: 'bass',
          name: 'bassoon',
          notes: ['c/3', 'a/3', 'g/3']
        }, {
          clef: 'treble',
          name: 'jebu',
          notes: ['c/4', 'f/4', 'a/3', 'g/4']
        }]],
        stave_spacing: 70
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Stave"], {
        notes: "c4/h[stem= \"down\", id=\"m2a\", articulations=\"staccato.below,tenuto\", style=\"fillStyle.blue\"], e4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleClick
      }, "Click me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Pianoroll"], {
        id: "testing",
        notes: ["c4", "f#7", "e1", "gb3"],
        instruments: [],
        target: [],
        width: 200
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Masking"], {
        id: "masking_notestaff",
        masking_notevalues: [50, 67, 80, 94, 100],
        masking_notesizes: [80, 70, 70, 70, 70],
        masking_colors: ['red', 'red', 'red', 'red', 'red'],
        target_notevalues: [60, 64, 67, 72, 79],
        target_notesizes: [40, 40, 40, 40, 40],
        target_colors: ['green', 'green', 'green', 'green', 'green']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Orchestration"], {
        id: 'id1',
        notes: ["c4", "f#7", "e1", "gb3"],
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
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiVGVzdCIsInByb3BzIiwic3RhdGUiLCJ4IiwieSIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vdGVzIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic3RhdmVfbGlzdCIsInBhZGRpbmciLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZW5ndGgiLCJiYXIiLCJzdGF2ZXMiLCJpIiwicHVzaCIsIlN0YXZlIiwiYWRkQ2xlZiIsImNsZWYiLCJzZXRUZXh0IiwibmFtZSIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJMRUZUIiwic2hpZnRfeCIsInNldENvbnRleHQiLCJkcmF3IiwiY29ubmVjdG9yIiwiU3RhdmVDb25uZWN0b3IiLCJzZXRUeXBlIiwidHlwZSIsIlNJTkdMRV9MRUZUIiwiQlJBQ0tFVCIsIm5vdGVfbGlzdCIsInZvaWNlcyIsImsiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwibmV3Q2xlZiIsImFkZE5vdGUiLCJTdGF2ZU5vdGUiLCJrZXlzIiwiZHVyYXRpb24iLCJhZGRBbm5vdGF0aW9uIiwiQWNjaWRlbnRhbCIsInNldFlTaGlmdCIsInNldFhTaGlmdCIsInNldFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXRfd2lkdGgiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0IiwicmVmcyIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiQXBwIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiaGFuZGxlQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQywrQ0FBRyxDQUFDQyxJQUFmOztJQUNNQyxJOzs7OztBQUVGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsT0FBQyxFQUFFLENBRE07QUFFVEMsT0FBQyxFQUFFO0FBRk0sS0FBYjtBQUhlO0FBUWxCOzs7O3dDQUVtQjtBQUNoQixVQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQURnQixVQUVUQyxLQUZTLEdBRUEsS0FBS1AsS0FGTCxDQUVUTyxLQUZTO0FBQUEsVUFHVEMsS0FIUyxHQUdBLEtBQUtSLEtBSEwsQ0FHVFEsS0FIUztBQUFBLFVBSVRDLE1BSlMsR0FJQyxLQUFLVCxLQUpOLENBSVRTLE1BSlM7QUFBQSxVQUtUQyxhQUxTLEdBS1EsS0FBS1YsS0FMYixDQUtUVSxhQUxTO0FBQUEsVUFNVEMsVUFOUyxHQU1LLEtBQUtYLEtBTlYsQ0FNVFcsVUFOUztBQU9oQixVQUFJQyxPQUFPLEdBQUcsR0FBZDtBQUVBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjtBQUNBLFVBQUlNLFFBQVEsR0FBRyxJQUFJbkIsRUFBRSxDQUFDb0IsUUFBUCxDQUFnQlosWUFBaEIsRUFBOEJSLEVBQUUsQ0FBQ29CLFFBQUgsQ0FBWUMsUUFBWixDQUFxQkMsR0FBbkQsQ0FBZjtBQUVBSCxjQUFRLENBQUNJLE1BQVQsQ0FBZ0JYLEtBQUssR0FBQ0ksT0FBdEIsRUFBK0JILE1BQS9CO0FBQ0EsVUFBSVcsT0FBTyxHQUFHTCxRQUFRLENBQUNNLFVBQVQsRUFBZDtBQUNBUixhQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBVSxDQUFDVyxNQUF2Qjs7QUFDSixXQUFJLElBQUlDLEdBQUcsR0FBQyxDQUFaLEVBQWVBLEdBQUcsR0FBQ1osVUFBVSxDQUFDVyxNQUE5QixFQUFzQ0MsR0FBRyxFQUF6QyxFQUE0QztBQUd4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUlDLE1BQU0sR0FBQyxFQUFYOztBQUNBLGFBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDZCxVQUFVLENBQUNZLEdBQUQsQ0FBVixDQUFnQkQsTUFBakMsRUFBeUNHLENBQUMsRUFBMUMsRUFBNkM7QUFDekNELGdCQUFNLENBQUNFLElBQVAsQ0FBWSxJQUFJOUIsRUFBRSxDQUFDK0IsS0FBUCxDQUFhZixPQUFPLEdBQUNXLEdBQUcsSUFBRWYsS0FBSyxHQUFDRyxVQUFVLENBQUNXLE1BQW5CLENBQXhCLEVBQW9EWixhQUFhLElBQUVlLENBQUMsR0FBQyxDQUFKLENBQWpFLEVBQXlFakIsS0FBSyxHQUFDRyxVQUFVLENBQUNXLE1BQTFGLENBQVo7O0FBQ0EsY0FBSUMsR0FBRyxLQUFHLENBQVYsRUFBWTtBQUNSQyxrQkFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVUcsT0FBVixDQUFrQmpCLFVBQVUsQ0FBQ1ksR0FBRCxDQUFWLENBQWdCRSxDQUFoQixFQUFtQkksSUFBckM7QUFDQUwsa0JBQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVLLE9BQVYsQ0FBa0JuQixVQUFVLENBQUNZLEdBQUQsQ0FBVixDQUFnQkUsQ0FBaEIsRUFBbUJNLElBQXJDLEVBQTJDbkMsRUFBRSxDQUFDb0MsUUFBSCxDQUFZQyxRQUFaLENBQXFCQyxJQUFoRSxFQUFzRTtBQUFFQyxxQkFBTyxFQUFFLENBQUM7QUFBWixhQUF0RTtBQUNIOztBQUNEWCxnQkFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVVcsVUFBVixDQUFxQmhCLE9BQXJCLEVBQThCaUIsSUFBOUI7QUFFSDs7QUFDRCxZQUFJQyxTQUFTLEdBQUcsSUFBSTFDLEVBQUUsQ0FBQzJDLGNBQVAsQ0FBc0JmLE1BQU0sQ0FBQyxDQUFELENBQTVCLEVBQWlDQSxNQUFNLENBQUNBLE1BQU0sQ0FBQ0YsTUFBUCxHQUFjLENBQWYsQ0FBdkMsQ0FBaEI7QUFDQWdCLGlCQUFTLENBQUNFLE9BQVYsQ0FBa0I1QyxFQUFFLENBQUMyQyxjQUFILENBQWtCRSxJQUFsQixDQUF1QkMsV0FBekM7QUFDQUosaUJBQVMsQ0FBQ0YsVUFBVixDQUFxQmhCLE9BQXJCO0FBQ0FrQixpQkFBUyxDQUFDRCxJQUFWOztBQUNBLFlBQUdkLEdBQUcsS0FBRyxDQUFULEVBQVc7QUFDUGUsbUJBQVMsQ0FBQ0UsT0FBVixDQUFrQjVDLEVBQUUsQ0FBQzJDLGNBQUgsQ0FBa0JFLElBQWxCLENBQXVCRSxPQUF6QztBQUNBTCxtQkFBUyxDQUFDRixVQUFWLENBQXFCaEIsT0FBckI7QUFDQWtCLG1CQUFTLENBQUNELElBQVY7QUFDSDs7QUFDRCxZQUFJTyxTQUFTLEdBQUMsRUFBZDtBQUNBLFlBQUlDLE1BQU0sR0FBQyxFQUFYOztBQUVBLGFBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDbkMsVUFBVSxDQUFDWSxHQUFELENBQVYsQ0FBZ0JELE1BQWpDLEVBQXlDd0IsQ0FBQyxFQUExQyxFQUE2QztBQUN6Q0YsbUJBQVMsQ0FBQ2xCLElBQVYsQ0FBZSxFQUFmO0FBQ0FtQixnQkFBTSxDQUFDbkIsSUFBUCxDQUFZLElBQUk5QixFQUFFLENBQUNtRCxLQUFQLENBQWE7QUFBQ0MscUJBQVMsRUFBRSxDQUFaO0FBQWdCQyxzQkFBVSxFQUFFO0FBQTVCLFdBQWIsRUFBNkNDLE9BQTdDLENBQXFELENBQXJELENBQVo7O0FBQ0EsZUFBSSxJQUFJekIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDZCxVQUFVLENBQUNZLEdBQUQsQ0FBVixDQUFnQnVCLENBQWhCLEVBQW1CdkMsS0FBbkIsQ0FBeUJlLE1BQTFDLEVBQWtERyxDQUFDLEVBQW5ELEVBQXNEO0FBQ2xELGdCQUFJMEIsT0FBTyxHQUFHeEMsVUFBVSxDQUFDWSxHQUFELENBQVYsQ0FBZ0J1QixDQUFoQixFQUFtQmpCLElBQWpDO0FBQ0EsZ0JBQUl1QixPQUFPLEdBQUMsSUFBSXhELEVBQUUsQ0FBQ3lELFNBQVAsQ0FBaUI7QUFBQ3hCLGtCQUFJLEVBQUVzQixPQUFQO0FBQWdCRyxrQkFBSSxFQUFFLENBQUMzQyxVQUFVLENBQUNZLEdBQUQsQ0FBVixDQUFnQnVCLENBQWhCLEVBQW1CdkMsS0FBbkIsQ0FBeUJrQixDQUF6QixDQUFELENBQXRCO0FBQXFEOEIsc0JBQVEsRUFBRTtBQUEvRCxhQUFqQixDQUFaO0FBQ0FILG1CQUFPLENBQUNJLGFBQVIsQ0FBc0IsQ0FBdEIsRUFBeUIsSUFBSTVELEVBQUUsQ0FBQzZELFVBQVAsQ0FBa0IsR0FBbEIsRUFBdUJDLFNBQXZCLENBQWlDLENBQUMsRUFBbEMsQ0FBekIsRUFBZ0VDLFNBQWhFLENBQTBFLENBQUMsRUFBM0U7QUFDQVAsbUJBQU8sQ0FBQ1EsUUFBUixDQUFpQjtBQUFDQyx5QkFBVyxFQUFFLGVBQWQ7QUFBK0JDLHVCQUFTLEVBQUU7QUFBMUMsYUFBakI7QUFDQWxCLHFCQUFTLENBQUNFLENBQUQsQ0FBVCxDQUFhcEIsSUFBYixDQUFrQjBCLE9BQWxCO0FBQ0g7O0FBQ0RQLGdCQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVaUIsWUFBVixDQUF1Qm5CLFNBQVMsQ0FBQ0UsQ0FBRCxDQUFoQztBQUNBLGNBQUlrQixZQUFZLEdBQUd4RCxLQUFLLEdBQUNHLFVBQVUsQ0FBQ1csTUFBcEM7O0FBQ0EsY0FBSUMsR0FBRyxLQUFHLENBQVYsRUFBWTtBQUNSeUMsd0JBQVksR0FBQ0EsWUFBWSxHQUFDLEVBQTFCO0FBQ0g7O0FBQ0QsY0FBSUMsU0FBUyxHQUFHLElBQUlyRSxFQUFFLENBQUNzRSxTQUFQLEdBQW1CQyxVQUFuQixDQUE4QixDQUFDdEIsTUFBTSxDQUFDQyxDQUFELENBQVAsQ0FBOUIsRUFBMkNzQixNQUEzQyxDQUFrRCxDQUFDdkIsTUFBTSxDQUFDQyxDQUFELENBQVAsQ0FBbEQsRUFBK0RrQixZQUEvRCxDQUFoQixDQWZ5QyxDQWdCekM7QUFDSCxTQTlDdUMsQ0ErQ3hDO0FBQ0E7OztBQUVBLGFBQUksSUFBSWxCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBQ25DLFVBQVUsQ0FBQ1ksR0FBRCxDQUFWLENBQWdCRCxNQUFqQyxFQUF5Q3dCLENBQUMsRUFBMUMsRUFBNkM7QUFFekNELGdCQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVVCxJQUFWLENBQWVqQixPQUFmLEVBQXdCSSxNQUFNLENBQUNzQixDQUFELENBQTlCO0FBQ0g7QUFDSjtBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNElRLFdBQUt1QixJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFdBQWhCLENBQTRCbkUsWUFBNUI7QUFDSDs7OzZCQUVRO0FBQ0wsMEJBQU87QUFBSyxXQUFHLEVBQUMsT0FBVDtBQUFpQixhQUFLLEVBQUU7QUFDM0JvRSxnQkFBTSxFQUFFLE1BRG1CO0FBRTNCNUQsaUJBQU8sRUFBRSxDQUZrQjtBQUczQjZELHNCQUFZLEVBQUUsQ0FIYTtBQUkzQkMsaUJBQU8sRUFBRTtBQUprQjtBQUF4QixRQUFQO0FBT0g7Ozs7RUF6T2NDLCtDOztJQTZPYkMsRzs7Ozs7QUFFRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsV0FBS3JFLEtBQUwsR0FBVyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixLQUFwQixDQUFYO0FBQ0EsV0FBS04sS0FBTCxHQUFhO0FBQ1Q0RSxXQUFLLEVBQUU7QUFERSxLQUFiO0FBR0EsV0FBS0MsUUFBTCxHQUFnQixPQUFLQSxRQUFMLENBQWNDLElBQWQsZ0NBQWhCO0FBTlU7QUFPYjs7Ozs2QkFFUUMsUSxFQUFVO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ0g7OztnQ0FFV2hGLEssRUFBTztBQUNmYSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLElBQXhCO0FBQ0EsV0FBS1AsS0FBTCxHQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsSyxDQUNQOzs7OzZCQUNhO0FBQ0wsMEJBQ0kscUZBQ0ksMkRBQUMsSUFBRDtBQUNBLGFBQUssRUFBRSxHQURQO0FBRUEsY0FBTSxFQUFFLEdBRlI7QUFHQSxrQkFBVSxFQUFFLENBQUMsQ0FDVDtBQUFDc0IsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxRQUF2QjtBQUNJeEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCO0FBRFYsU0FEUyxFQUdUO0FBQUNzQixjQUFJLEVBQUUsTUFBUDtBQUFlRSxjQUFJLEVBQUUsU0FBckI7QUFDSXhCLGVBQUssRUFBQyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZjtBQURWLFNBSFMsRUFLVDtBQUFDc0IsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxNQUF2QjtBQUNJeEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCO0FBRFYsU0FMUyxDQUFELEVBUVosQ0FDSTtBQUFDc0IsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxRQUF2QjtBQUNBeEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCO0FBRE4sU0FESixFQUdJO0FBQUNzQixjQUFJLEVBQUUsTUFBUDtBQUFlRSxjQUFJLEVBQUUsU0FBckI7QUFDSXhCLGVBQUssRUFBQyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZjtBQURWLFNBSEosRUFLSTtBQUFDc0IsY0FBSSxFQUFFLFFBQVA7QUFBaUJFLGNBQUksRUFBRSxNQUF2QjtBQUNJeEIsZUFBSyxFQUFDLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCO0FBRFYsU0FMSixDQVJZLEVBZ0JaLENBQ0k7QUFBQ3NCLGNBQUksRUFBRSxRQUFQO0FBQWlCRSxjQUFJLEVBQUUsUUFBdkI7QUFDSXhCLGVBQUssRUFBQyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QjtBQURWLFNBREosRUFHSTtBQUFDc0IsY0FBSSxFQUFFLE1BQVA7QUFBZUUsY0FBSSxFQUFFLFNBQXJCO0FBQ0l4QixlQUFLLEVBQUMsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWY7QUFEVixTQUhKLEVBS0k7QUFBQ3NCLGNBQUksRUFBRSxRQUFQO0FBQWlCRSxjQUFJLEVBQUUsTUFBdkI7QUFDSXhCLGVBQUssRUFBQyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QjtBQURWLFNBTEosQ0FoQlksQ0FIWjtBQTRCQSxxQkFBYSxFQUFFO0FBNUJmLFFBREosZUErQkksMkRBQUMsMENBQUQ7QUFDQSxhQUFLLEVBQUM7QUFETixRQS9CSixlQWtDSTtBQUFRLGVBQU8sRUFBRSxLQUFLMkU7QUFBdEIsb0JBbENKLGVBcUNOLDJEQUFDLDhDQUFEO0FBQ0EsVUFBRSxFQUFDLFNBREg7QUFFQSxhQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsS0FBcEIsQ0FGUDtBQUdBLG1CQUFXLEVBQUUsRUFIYjtBQUlBLGNBQU0sRUFBRSxFQUpSO0FBS0EsYUFBSyxFQUFFO0FBTFAsUUFyQ00sZUE0Q04sMkRBQUMsNENBQUQ7QUFDQSxVQUFFLEVBQUMsbUJBREg7QUFFQSwwQkFBa0IsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsQ0FGcEI7QUFHQSx5QkFBaUIsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsQ0FIbkI7QUFJQSxzQkFBYyxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLENBSmhCO0FBS0EseUJBQWlCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBTG5CO0FBTUEsd0JBQWdCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBTmxCO0FBT0EscUJBQWEsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLE9BQXJDO0FBUGYsUUE1Q00sZUFxREksMkRBQUMsa0RBQUQ7QUFDQSxVQUFFLEVBQUUsS0FESjtBQUVBLGFBQUssRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixLQUFwQixDQUZQO0FBR0EsY0FBTSxFQUFFLENBQUMsQ0FBRCxDQUhSO0FBSUEsbUJBQVcsRUFBRSxDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLFNBQXZCLEVBQWtDLFVBQWxDO0FBSmIsUUFyREosZUEyREksMkRBQUMsa0RBQUQ7QUFDQSxVQUFFLEVBQUUsS0FESjtBQUVBLGFBQUssRUFBRSxDQUFDLElBQUQsQ0FGUDtBQUdBLGNBQU0sRUFBRSxFQUhSO0FBSUEsbUJBQVcsRUFBRSxDQUFDLEVBQUQ7QUFKYixRQTNESixlQWlFSSwyREFBQyxtREFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS0o7QUFEbkIsU0FFUSxLQUFLN0UsS0FGYixFQWpFSixlQXFFSSwyREFBQywwQ0FBRDtBQUNBLGFBQUssRUFBQztBQUROLFFBckVKLENBREo7QUE0RUg7Ozs7RUFqR2EwRSwrQzs7QUFvR0hDLGtFQUFmLEUiLCJmaWxlIjoiY2QxOGQ2OC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuXHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50LCBTdGF2ZSwgT3JjaGVzdHJhdGlvbiwgTWFza2luZywgUGlhbm9yb2xsfSBmcm9tICcuLi9saWInO1xyXG5cclxuXHJcbmNvbnN0IFZGID0gVmV4LkZsb3c7XHJcbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7bm90ZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7aGVpZ2h0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3N0YXZlX3NwYWNpbmd9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c3RhdmVfbGlzdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMTAwO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhoZWlnaHQpXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdmVfbGlzdC5sZW5ndGgpXHJcbiAgICBmb3IodmFyIGJhcj0wOyBiYXI8c3RhdmVfbGlzdC5sZW5ndGg7IGJhcisrKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgKGJhcj09PTApe1xyXG4gICAgICAgIC8vICAgICBwYWRkaW5nPTEwMFxyXG4gICAgICAgIC8vIH0gXHJcbiAgICAgICAgLy9DcmVhdGUgc3RhdmVzXHJcbiAgICAgICAgdmFyIHN0YXZlcz1bXVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RhdmVzLnB1c2gobmV3IFZGLlN0YXZlKHBhZGRpbmcrYmFyKih3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aCksIHN0YXZlX3NwYWNpbmcqKGkrMSksIHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgaWYgKGJhcj09PTApe1xyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLmFkZENsZWYoc3RhdmVfbGlzdFtiYXJdW2ldLmNsZWYpXHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uc2V0VGV4dChzdGF2ZV9saXN0W2Jhcl1baV0ubmFtZSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF94OiAtNjAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdmVzW2ldLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZXNbMF0sIHN0YXZlc1tzdGF2ZXMubGVuZ3RoLTFdKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIGlmKGJhcj09PTApe1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgIHZhciB2b2ljZXM9W11cclxuICAgICAgICBcclxuICAgICAgICBmb3IodmFyIGsgPSAwOyBrPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKFtdKVxyXG4gICAgICAgICAgICB2b2ljZXMucHVzaChuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NsZWYgPSBzdGF2ZV9saXN0W2Jhcl1ba10uY2xlZlxyXG4gICAgICAgICAgICAgICAgdmFyIGFkZE5vdGU9bmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogbmV3Q2xlZiwga2V5czogW3N0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpXV0sIGR1cmF0aW9uOiBcInFcIn0pXHJcbiAgICAgICAgICAgICAgICBhZGROb3RlLmFkZEFubm90YXRpb24oMCwgbmV3IFZGLkFjY2lkZW50YWwoXCIjXCIpLnNldFlTaGlmdCgtMjQpKS5zZXRYU2hpZnQoLTEzKVxyXG4gICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRTdHlsZSh7c3Ryb2tlU3R5bGU6ICdyZ2JhKDAsMCwwLDApJywgZmlsbFN0eWxlOiAnZ3JlZW4nfSlcclxuICAgICAgICAgICAgICAgIG5vdGVfbGlzdFtrXS5wdXNoKGFkZE5vdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm9pY2VzW2tdLmFkZFRpY2thYmxlcyhub3RlX2xpc3Rba10pXHJcbiAgICAgICAgICAgIHZhciBmb3JtYXRfd2lkdGggPSB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aFxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRfd2lkdGg9Zm9ybWF0X3dpZHRoLTMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZXNba11dKS5mb3JtYXQoW3ZvaWNlc1trXV0sIGZvcm1hdF93aWR0aCk7XHJcbiAgICAgICAgICAgIC8vdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXModm9pY2VzKS5mb3JtYXQodm9pY2VzLCA1MCk7XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmZvcm1hdCh2b2ljZXMsIDEwMCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWNlc1trXS5kcmF3KGNvbnRleHQsIHN0YXZlc1trXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4vKlxyXG4gICAgICAgIHZhciBzdGF2ZV90ID0gbmV3IFZGLlN0YXZlKDIwLCAxMTAsIHdpZHRoKTtcclxuICAgICAgICBzdGF2ZV90LmFkZENsZWYoXCJ0cmVibGVcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICBzdGF2ZV90LnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG5cclxuICAgICAgICB2YXIgc3RhdmVfYiA9IG5ldyBWRi5TdGF2ZSgyMCwgMjAwLCAyMDApO1xyXG4gICAgICAgIHN0YXZlX2IuYWRkQ2xlZihcImJhc3NcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICBzdGF2ZV9iLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRG8gY29ubmVjdG9yc1xyXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfTEVGVCk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICAvLyB2YXIgY29ubmVjdG9yMiA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAvL2Nvbm5lY3RvcjIuZHJhdygpO1xyXG4gICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAvL2Nvbm5lY3RvcjMuc2V0VGV4dCgnT3JjaC4nKTtcclxuICAgICAgICBjb25uZWN0b3IzLmRyYXcoKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKG5vdGVzLCBpbnN0cnVtZW50cyx0YXJnZXQpIHtcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfbiA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX2EgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV90ID0gW107XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfaSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19uID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX2EgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfdCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19pID0gW107XHJcbiAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICB2YXIgbmV3X29jdGF2ZTtcclxuICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbDtcclxuICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICB2YXIgbmV3X25vdGU7XHJcbiAgICAgICAgICAgIHZhciBpbnN0O1xyXG4gICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgIGZvciAoaT0wOyBpPG5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeSA9IG5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaW5zdCA9IGluc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICBuZXdfa2V5ID0gZW50cnlbMF07XHJcbiAgICAgICAgICAgICAgICBuZXdfb2N0YXZlID0gZW50cnlbZW50cnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdfYWNjaWRlbnRpYWwgPSBlbnRyeVsxXTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgICAgIHRndCA9IHRhcmdldFtpXTtcclxuICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobmV3X29jdGF2ZSkgPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICB0cmVibGVfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgIHRyZWJsZV9pLnB1c2goaW5zdClcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgLy9BbGxhIG9sZXZhIG90dGFhIHZhaW4gZWthbiBodW9taW9vbiwgdGFya2lzdGEhIVxyXG4gICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbal09PT1pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB0cmVibGVfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgYmFzc19uLnB1c2gobmV3X25vdGUpO1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX2kucHVzaChpbnN0KTtcclxuICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhc3NfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFt0cmVibGVfbiwgdHJlYmxlX2EsIHRyZWJsZV90LCBiYXNzX24sIGJhc3NfYSwgYmFzc190LCB0cmVibGVfaSwgYmFzc19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBub3RlX2RhdGEgPSBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsIHRhcmdldClcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdHJlYmxlX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogbm90ZV9kYXRhWzBdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICB2YXIgYmFzc19ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwiYmFzc1wiLCBrZXlzOiBub3RlX2RhdGFbM10sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgIHZhciB0cmVibGVfaW5zdCA9IG5vdGVfZGF0YVs2XVxyXG4gICAgICAgIHZhciBiYXNzX2luc3QgPSBub3RlX2RhdGFbN11cclxuXHJcbiAgICAgICAgLy9GdW5rdGlvIGpvbGxhIHBpaXJyZXTDpMOkbiBudW90aW4gdmllcmVlblxyXG4gICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgcmV0dXJuIG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7IH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPG5vdGVfZGF0YVsxXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVsxXVtpXSkpO1xyXG4gICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkTW9kaWZpZXIoaSwgdmllcmVlbih0cmVibGVfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgICAgICBpZiAobm90ZV9kYXRhWzJdW2ldPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYmFzc19ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVs0XVtpXSkpO1xyXG4gICAgICAgICAgICBiYXNzX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4oYmFzc19pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgIGlmIChub3RlX2RhdGFbNV1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgIGJhc3Nfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0Z1bmt0aW8gam9sbGEgcGlpcnJldMOkw6RuIG51b3RpbiB2aWVyZWVuXHJcbiAgICAgICAgZnVuY3Rpb24gdmllcmVlbihudW0sIHBvcykgeyByZXR1cm4gbmV3IFZGLkZyZXRIYW5kRmluZ2VyKG51bSkuc2V0UG9zaXRpb24ocG9zKTsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRHV1bmF0YWFuIHNvaW50dSwgam9zc2Ega2Frc2kgbnVvdHRpYTpcclxuICAgICAgICB2YXIgbmV3X25vdGUgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBbXCJhLzNcIiwgXCJkLzRcIl0sIGR1cmF0aW9uOiBcImhcIiB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVmFpaGRldGFhbiB5bGVtbcOkbiA9MSB2w6RyaSBwdW5haXNla3NpXHJcbiAgICAgICAgbmV3X25vdGUuc2V0S2V5U3R5bGUoMSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgIG5ld19ub3RlLmFkZE1vZGlmaWVyKDEsIHZpZXJlZW4oJ1NvaXRpbicsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICBuZXdfbm90ZS5hZGRNb2RpZmllcigwLCB2aWVyZWVuKCdUb2luZW4gc29pdGluJywgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgIG5ld19ub3RlLmFkZEFjY2lkZW50YWwoMSwgbmV3IFZGLkFjY2lkZW50YWwoXCJuXCIpKVxyXG4gICAgICAgIG5ld19ub3RlLmFkZEFjY2lkZW50YWwoMCwgbmV3IFZGLkFjY2lkZW50YWwoXCJiXCIpKVxyXG5cclxuICAgICAgICAvL0xpc8OkdMOkw6RuIGxpc3RhYW5cclxuICAgICAgICB2YXIgbmV3X25vdGVzID0gW1xyXG4gICAgICAgICAgICBuZXdfbm90ZSxcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAvLyBDcmVhdGUgYSB2b2ljZSBpbiA0LzQgYW5kIGFkZCB0aGUgbm90ZXMgZnJvbSBhYm92ZVxyXG4gICAgICAgIHZhciB2b2ljZV90ID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgdmFyIHZvaWNlX2IgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICB2b2ljZV90LmFkZFRpY2thYmxlcyhbdHJlYmxlX25vdGVzXSk7XHJcbiAgICAgICAgdm9pY2VfYi5hZGRUaWNrYWJsZXMoW2Jhc3Nfbm90ZXNdKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfdF0pLmZvcm1hdChbdm9pY2VfdF0sIHdpZHRoKTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX2JdKS5mb3JtYXQoW3ZvaWNlX2JdLCB3aWR0aCk7XHJcbiAgICAgICAgdm9pY2VfdC5kcmF3KGNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgIHZvaWNlX2IuZHJhdyhjb250ZXh0LCBzdGF2ZV9iKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlci5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPVwib3V0ZXJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9W1wiYzRcIiwgXCJmIzdcIiwgXCJlMVwiLCBcImdiM1wiXVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKHByb3BzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXM6JywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz1bJ2M0J11cclxuICAgICAgfVxyXG4vL25ldyBWRi5TdGF2ZU5vdGUoKS5zZXRcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRlc3RcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgIHN0YXZlX2xpc3Q9e1tbXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAndmlvbGluJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYy80JywgJ2QvNScsICdmLzYnLCAnYS8zJywgJ2cvNSddfSwgXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICdiYXNzJywgbmFtZTogJ2Jhc3Nvb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MvMycsICdhLzMnLCAnZy8zJ119LCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ3RyZWJsZScsIG5hbWU6ICdqZWJ1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjLzQnLCAnZi80JywgJ2EvMycsICdnLzQnXX0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ3Zpb2xpbicsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYy80JywgJ2YvNCcsICdhLzMnLCAnZy80J119LCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2xlZjogJ2Jhc3MnLCBuYW1lOiAnYmFzc29vbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYy8zJywgJ2EvMycsICdnLzMnXX0sIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ2plYnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MvNCcsICdkLzUnLCAnZi82JywgJ2EvMycsICdnLzUnXX0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAndHJlYmxlJywgbmFtZTogJ3Zpb2xpbicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlczpbJ2MvNCcsICdkLzUnLCAnZi82JywgJ2EvMycsICdnLzUnXX0sIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGVmOiAnYmFzcycsIG5hbWU6ICdiYXNzb29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM6WydjLzMnLCAnYS8zJywgJ2cvMyddfSwgXHJcbiAgICAgICAgICAgICAgICAgICAge2NsZWY6ICd0cmVibGUnLCBuYW1lOiAnamVidScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzOlsnYy80JywgJ2YvNCcsICdhLzMnLCAnZy80J119LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgc3RhdmVfc3BhY2luZz17NzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nYzQvaFtzdGVtPSBcImRvd25cIiwgaWQ9XCJtMmFcIiwgYXJ0aWN1bGF0aW9ucz1cInN0YWNjYXRvLmJlbG93LHRlbnV0b1wiLCBzdHlsZT1cImZpbGxTdHlsZS5ibHVlXCJdLCBlNCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIENsaWNrIG1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8UGlhbm9yb2xsXHJcbiAgICAgIGlkPSd0ZXN0aW5nJ1xyXG4gICAgICBub3Rlcz17W1wiYzRcIiwgXCJmIzdcIiwgXCJlMVwiLCBcImdiM1wiXX1cclxuICAgICAgaW5zdHJ1bWVudHM9e1tdfVxyXG4gICAgICB0YXJnZXQ9e1tdfVxyXG4gICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAvPlxyXG4gICAgICA8TWFza2luZ1xyXG4gICAgICBpZD0nbWFza2luZ19ub3Rlc3RhZmYnXHJcbiAgICAgIG1hc2tpbmdfbm90ZXZhbHVlcz17WzUwLCA2NywgODAsIDk0LCAxMDBdfVxyXG4gICAgICBtYXNraW5nX25vdGVzaXplcz17WzgwLCA3MCwgNzAsIDcwLCA3MF19XHJcbiAgICAgIG1hc2tpbmdfY29sb3JzPXtbJ3JlZCcsICdyZWQnLCAncmVkJywgJ3JlZCcsICdyZWQnXX1cclxuICAgICAgdGFyZ2V0X25vdGV2YWx1ZXM9e1s2MCwgNjQsIDY3LCA3MiwgNzldfVxyXG4gICAgICB0YXJnZXRfbm90ZXNpemVzPXtbNDAsIDQwLCA0MCwgNDAsIDQwXX1cclxuICAgICAgdGFyZ2V0X2NvbG9ycz17WydncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbicsICdncmVlbiddfVxyXG4gICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE9yY2hlc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIGlkPXsnaWQxJ31cclxuICAgICAgICAgICAgICAgIG5vdGVzPXtbXCJjNFwiLCBcImYjN1wiLCBcImUxXCIsIFwiZ2IzXCJdfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtbM119XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50cz17Wyd2aW9saW4nLCAnY2xhcmluZXQnLCAnYmFzc29vbicsICd0cm9tYm9uZSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxPcmNoZXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17J2lkMid9XHJcbiAgICAgICAgICAgICAgICBub3Rlcz17W1wiYzNcIl19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1tdfVxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudHM9e1snJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNjb3JlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YXZlXHJcbiAgICAgICAgICAgICAgICBub3Rlcz0nKGM0IGU0IGc0KS9oLCBhNFtjbGVmPVwiYmFzc1wiXSdcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
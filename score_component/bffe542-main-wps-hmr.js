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
      this.renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      this.renderer.resize(200, 400);
      var context = this.renderer.getContext();
      this.context = context; //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(20, 110, 200);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(this.context).draw();
      var stave_b = new VF.Stave(20, 200, 200);
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
        voice_t.draw(this.context, stave_t);
      }

      var voice_b = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });

      if (Array.isArray(note_data[3]) && note_data[3].length) {
        voice_b.addTickables([bass_notes]);
        var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], 250);
        voice_b.draw(this.context, stave_b);
      } //this.refs.outer.appendChild(svgContainer);

    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupScore();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.notes !== prevProps.notes || this.instruments !== prevProps.instruments || this.target !== prevProps.target) {
        var id = this.props.id;
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
        this.setupScore();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJPcmNoZXN0cmF0aW9uIiwicHJvcHMiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwicmVuZGVyZXIiLCJjb250ZXh0Iiwic3RhdGUiLCJ4IiwieSIsImlkIiwic2V0UHJvcHMiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVuZGVyZXIiLCJCYWNrZW5kcyIsIlNWRyIsInJlc2l6ZSIsImdldENvbnRleHQiLCJzdGF2ZV90IiwiU3RhdmUiLCJhZGRDbGVmIiwic2V0Q29udGV4dCIsImRyYXciLCJzdGF2ZV9iIiwiY29ubmVjdG9yIiwiU3RhdmVDb25uZWN0b3IiLCJzZXRUeXBlIiwidHlwZSIsIlNJTkdMRV9MRUZUIiwiY29ubmVjdG9yMyIsIkJSQUNLRVQiLCJzZXBhcmF0ZSIsImkiLCJ0cmVibGVfbiIsInRyZWJsZV9hIiwidHJlYmxlX3QiLCJ0cmVibGVfaSIsImJhc3NfbiIsImJhc3NfYSIsImJhc3NfdCIsImJhc3NfaSIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwiZW50cnkiLCJuZXdfbm90ZSIsImluc3QiLCJ0Z3QiLCJsZW5ndGgiLCJjb25jYXQiLCJwYXJzZUludCIsInB1c2giLCJqIiwibm90ZV9kYXRhIiwidHJlYmxlX25vdGVzIiwiU3RhdmVOb3RlIiwiY2xlZiIsImtleXMiLCJkdXJhdGlvbiIsImJhc3Nfbm90ZXMiLCJ0cmVibGVfaW5zdCIsImJhc3NfaW5zdCIsInZpZXJlZW4iLCJudW0iLCJwb3MiLCJGcmV0SGFuZEZpbmdlciIsInNldFBvc2l0aW9uIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJhZGRNb2RpZmllciIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJSSUdIVCIsInNldEtleVN0eWxlIiwiZmlsbFN0eWxlIiwiQXJyYXkiLCJpc0FycmF5Iiwidm9pY2VfdCIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsImFkZFRpY2thYmxlcyIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJ2b2ljZV9iIiwic2V0dXBTY29yZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQywrQ0FBRyxDQUFDQyxJQUFmOztJQUVxQkMsYTs7Ozs7QUFFakIseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVyxDQUFYO0FBQ0EsVUFBS0MsTUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLQyxXQUFMLEdBQWlCLENBQWpCO0FBQ0EsVUFBS0MsUUFBTCxHQUFjLENBQWQ7QUFDQSxVQUFLQyxPQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBUGU7QUFZbEI7Ozs7aUNBRVk7QUFDRDtBQURDLHdCQUVrRCxLQUFLUixLQUZ2RDtBQUFBLFVBRU1TLEVBRk4sZUFFTUEsRUFGTjtBQUFBLFVBRVVSLEtBRlYsZUFFVUEsS0FGVjtBQUFBLFVBRWlCQyxNQUZqQixlQUVpQkEsTUFGakI7QUFBQSxVQUV5QkMsV0FGekIsZUFFeUJBLFdBRnpCO0FBQUEsVUFFc0NPLFFBRnRDLGVBRXNDQSxRQUZ0QztBQUdELFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSixFQUF4QixDQUFyQjtBQUNBLFdBQUtSLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBRUEsV0FBS0MsUUFBTCxHQUFnQixJQUFJUixFQUFFLENBQUNrQixRQUFQLENBQWdCSCxZQUFoQixFQUE4QmYsRUFBRSxDQUFDa0IsUUFBSCxDQUFZQyxRQUFaLENBQXFCQyxHQUFuRCxDQUFoQjtBQUNBLFdBQUtaLFFBQUwsQ0FBY2EsTUFBZCxDQUFxQixHQUFyQixFQUEwQixHQUExQjtBQUNBLFVBQUlaLE9BQU8sR0FBRyxLQUFLRCxRQUFMLENBQWNjLFVBQWQsRUFBZDtBQUNBLFdBQUtiLE9BQUwsR0FBZUEsT0FBZixDQVhDLENBYUQ7O0FBRUEsVUFBSWMsT0FBTyxHQUFHLElBQUl2QixFQUFFLENBQUN3QixLQUFQLENBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQUFkO0FBQ0FELGFBQU8sQ0FBQ0UsT0FBUixDQUFnQixRQUFoQixFQWhCQyxDQWdCeUI7O0FBQzFCRixhQUFPLENBQUNHLFVBQVIsQ0FBbUIsS0FBS2pCLE9BQXhCLEVBQWlDa0IsSUFBakM7QUFFQSxVQUFJQyxPQUFPLEdBQUcsSUFBSTVCLEVBQUUsQ0FBQ3dCLEtBQVAsQ0FBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQWQ7QUFDQUksYUFBTyxDQUFDSCxPQUFSLENBQWdCLE1BQWhCLEVBcEJDLENBb0J1Qjs7QUFDeEJHLGFBQU8sQ0FBQ0YsVUFBUixDQUFtQixLQUFLakIsT0FBeEIsRUFBaUNrQixJQUFqQyxHQXJCQyxDQXVCRDs7QUFDQSxVQUFJRSxTQUFTLEdBQUcsSUFBSTdCLEVBQUUsQ0FBQzhCLGNBQVAsQ0FBc0JQLE9BQXRCLEVBQStCSyxPQUEvQixDQUFoQjtBQUNBQyxlQUFTLENBQUNFLE9BQVYsQ0FBa0IvQixFQUFFLENBQUM4QixjQUFILENBQWtCRSxJQUFsQixDQUF1QkMsV0FBekM7QUFDQUosZUFBUyxDQUFDSCxVQUFWLENBQXFCLEtBQUtqQixPQUExQjtBQUNBb0IsZUFBUyxDQUFDRixJQUFWLEdBM0JDLENBNEJEO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUlPLFVBQVUsR0FBRyxJQUFJbEMsRUFBRSxDQUFDOEIsY0FBUCxDQUFzQlAsT0FBdEIsRUFBK0JLLE9BQS9CLENBQWpCO0FBQ0FNLGdCQUFVLENBQUNILE9BQVgsQ0FBbUIvQixFQUFFLENBQUM4QixjQUFILENBQWtCRSxJQUFsQixDQUF1QkcsT0FBMUM7QUFDQUQsZ0JBQVUsQ0FBQ1IsVUFBWCxDQUFzQixLQUFLakIsT0FBM0IsRUFsQ0MsQ0FtQ0Q7O0FBQ0F5QixnQkFBVSxDQUFDUCxJQUFYOztBQUdBLGVBQVNTLFFBQVQsQ0FBa0IvQixLQUFsQixFQUF5QkUsV0FBekIsRUFBcUNELE1BQXJDLEVBQTZDO0FBQ3pDLFlBQUkrQixDQUFKO0FBQ0EsWUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxZQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLFlBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsWUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxZQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFlBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsWUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxZQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFlBQUlDLE9BQUo7QUFDQSxZQUFJQyxVQUFKO0FBQ0EsWUFBSUMsZUFBSjtBQUNBLFlBQUlDLEtBQUo7QUFDQSxZQUFJQyxRQUFKO0FBQ0EsWUFBSUMsSUFBSjtBQUNBLFlBQUlDLEdBQUo7O0FBQ0EsYUFBS2YsQ0FBQyxHQUFDLENBQVAsRUFBVUEsQ0FBQyxHQUFDaEMsS0FBSyxDQUFDZ0QsTUFBbEIsRUFBMEJoQixDQUFDLEVBQTNCLEVBQStCO0FBQzNCWSxlQUFLLEdBQUc1QyxLQUFLLENBQUNnQyxDQUFELENBQWI7QUFDQWMsY0FBSSxHQUFHNUMsV0FBVyxDQUFDOEIsQ0FBRCxDQUFsQjtBQUNBUyxpQkFBTyxHQUFHRyxLQUFLLENBQUMsQ0FBRCxDQUFmO0FBQ0FGLG9CQUFVLEdBQUdFLEtBQUssQ0FBQ0EsS0FBSyxDQUFDSSxNQUFOLEdBQWEsQ0FBZCxDQUFsQjs7QUFDQSxjQUFJSixLQUFLLENBQUNJLE1BQU4sR0FBYSxDQUFqQixFQUFtQjtBQUNmTCwyQkFBZSxHQUFHQyxLQUFLLENBQUMsQ0FBRCxDQUF2QjtBQUNILFdBRkQsTUFFTztBQUNIRCwyQkFBZSxHQUFHLEdBQWxCO0FBQ0g7O0FBQ0ZFLGtCQUFRLEdBQUdKLE9BQU8sQ0FBQ1EsTUFBUixDQUFlLEdBQWYsRUFBbUJQLFVBQW5CLENBQVg7QUFDQUssYUFBRyxHQUFHOUMsTUFBTSxDQUFDK0IsQ0FBRCxDQUFaOztBQUNELGNBQUlrQixRQUFRLENBQUNSLFVBQUQsQ0FBUixJQUF3QixDQUE1QixFQUErQjtBQUMzQlQsb0JBQVEsQ0FBQ2tCLElBQVQsQ0FBY04sUUFBZDtBQUNBWCxvQkFBUSxDQUFDaUIsSUFBVCxDQUFjUixlQUFkO0FBQ0FQLG9CQUFRLENBQUNlLElBQVQsQ0FBY0wsSUFBZCxFQUgyQixDQUszQjtBQUNBOztBQUNBLGdCQUFJQyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxpQkFBSyxJQUFJSyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNuRCxNQUFNLENBQUMrQyxNQUF2QixFQUErQkksQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxrQkFBSW5ELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixLQUFZcEIsQ0FBaEIsRUFBa0I7QUFDZGUsbUJBQUcsR0FBQyxDQUFKO0FBQ0g7QUFDSDs7QUFDRFosb0JBQVEsQ0FBQ2dCLElBQVQsQ0FBY0osR0FBZDtBQUNGLFdBZEQsTUFjTztBQUNIVixrQkFBTSxDQUFDYyxJQUFQLENBQVlOLFFBQVo7QUFDQVAsa0JBQU0sQ0FBQ2EsSUFBUCxDQUFZUixlQUFaO0FBQ0FILGtCQUFNLENBQUNXLElBQVAsQ0FBWUwsSUFBWjtBQUNBLGdCQUFJQyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxpQkFBSyxJQUFJSyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNuRCxNQUFNLENBQUMrQyxNQUF2QixFQUErQkksQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxrQkFBSW5ELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixLQUFZcEIsQ0FBaEIsRUFBa0I7QUFDZGUsbUJBQUcsR0FBQyxDQUFKO0FBQ0g7QUFDSjs7QUFDRFIsa0JBQU0sQ0FBQ1ksSUFBUCxDQUFZSixHQUFaO0FBQ0Q7QUFFRjs7QUFFRCxlQUFPLENBQUNkLFFBQUQsRUFBV0MsUUFBWCxFQUFxQkMsUUFBckIsRUFBK0JFLE1BQS9CLEVBQXVDQyxNQUF2QyxFQUErQ0MsTUFBL0MsRUFBdURILFFBQXZELEVBQWlFSSxNQUFqRSxDQUFQO0FBQ0g7O0FBRUQsVUFBSWEsU0FBUyxHQUFHdEIsUUFBUSxDQUFDLEtBQUsvQixLQUFOLEVBQWEsS0FBS0UsV0FBbEIsRUFBK0IsS0FBS0QsTUFBcEMsQ0FBeEI7QUFFQSxVQUFJcUQsWUFBWSxHQUFHLElBQUkzRCxFQUFFLENBQUM0RCxTQUFQLENBQWlCO0FBQUNDLFlBQUksRUFBRSxRQUFQO0FBQWlCQyxZQUFJLEVBQUVKLFNBQVMsQ0FBQyxDQUFELENBQWhDO0FBQXFDSyxnQkFBUSxFQUFFO0FBQS9DLE9BQWpCLENBQW5CO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLElBQUloRSxFQUFFLENBQUM0RCxTQUFQLENBQWlCO0FBQUNDLFlBQUksRUFBRSxNQUFQO0FBQWVDLFlBQUksRUFBRUosU0FBUyxDQUFDLENBQUQsQ0FBOUI7QUFBbUNLLGdCQUFRLEVBQUU7QUFBN0MsT0FBakIsQ0FBakI7QUFDQSxVQUFJRSxXQUFXLEdBQUdQLFNBQVMsQ0FBQyxDQUFELENBQTNCO0FBQ0EsVUFBSVEsU0FBUyxHQUFHUixTQUFTLENBQUMsQ0FBRCxDQUF6QixDQXpHQyxDQTJHRDs7QUFDQSxlQUFTUyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFBRSxlQUFPLElBQUlyRSxFQUFFLENBQUNzRSxjQUFQLENBQXNCRixHQUF0QixFQUEyQkcsV0FBM0IsQ0FBdUNGLEdBQXZDLENBQVA7QUFBcUQ7O0FBRWxGLFdBQUssSUFBSWhDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ3FCLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUwsTUFBN0IsRUFBcUNoQixDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDc0Isb0JBQVksQ0FBQ2EsYUFBYixDQUEyQm5DLENBQTNCLEVBQThCLElBQUlyQyxFQUFFLENBQUN5RSxVQUFQLENBQWtCZixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFyQixDQUFiLENBQWxCLENBQTlCO0FBQ0FzQixvQkFBWSxDQUFDZSxXQUFiLENBQXlCckMsQ0FBekIsRUFBNEI4QixPQUFPLENBQUNGLFdBQVcsQ0FBQzVCLENBQUQsQ0FBWixFQUFpQnJDLEVBQUUsQ0FBQzJFLFFBQUgsQ0FBWUMsUUFBWixDQUFxQkMsS0FBdEMsQ0FBbkM7O0FBQ0EsWUFBSW5CLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXJCLENBQWIsTUFBa0IsQ0FBdEIsRUFBd0I7QUFDcEJzQixzQkFBWSxDQUFDbUIsV0FBYixDQUF5QnpDLENBQXpCLEVBQTRCO0FBQUMwQyxxQkFBUyxFQUFFO0FBQVosV0FBNUI7QUFDSDtBQUNKOztBQUNELFdBQUssSUFBSTFDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ3FCLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUwsTUFBN0IsRUFBcUNoQixDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDMkIsa0JBQVUsQ0FBQ1EsYUFBWCxDQUF5Qm5DLENBQXpCLEVBQTRCLElBQUlyQyxFQUFFLENBQUN5RSxVQUFQLENBQWtCZixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFyQixDQUFiLENBQWxCLENBQTVCO0FBQ0EyQixrQkFBVSxDQUFDVSxXQUFYLENBQXVCckMsQ0FBdkIsRUFBMEI4QixPQUFPLENBQUNELFNBQVMsQ0FBQzdCLENBQUQsQ0FBVixFQUFlckMsRUFBRSxDQUFDMkUsUUFBSCxDQUFZQyxRQUFaLENBQXFCQyxLQUFwQyxDQUFqQzs7QUFDQSxZQUFJbkIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhckIsQ0FBYixNQUFrQixDQUF0QixFQUF3QjtBQUNwQjJCLG9CQUFVLENBQUNjLFdBQVgsQ0FBdUJ6QyxDQUF2QixFQUEwQjtBQUFDMEMscUJBQVMsRUFBRTtBQUFaLFdBQTFCO0FBQ0g7QUFDSixPQTNIQSxDQTZIQzs7O0FBQ0YsVUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWN2QixTQUFTLENBQUMsQ0FBRCxDQUF2QixLQUErQkEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhTCxNQUFoRCxFQUF1RDtBQUNuRCxZQUFJNkIsT0FBTyxHQUFHLElBQUlsRixFQUFFLENBQUNtRixLQUFQLENBQWE7QUFBQ0MsbUJBQVMsRUFBRSxDQUFaO0FBQWdCQyxvQkFBVSxFQUFFO0FBQTVCLFNBQWIsQ0FBZDtBQUNBSCxlQUFPLENBQUNJLFlBQVIsQ0FBcUIsQ0FBQzNCLFlBQUQsQ0FBckI7QUFDQSxZQUFJNEIsU0FBUyxHQUFHLElBQUl2RixFQUFFLENBQUN3RixTQUFQLEdBQW1CQyxVQUFuQixDQUE4QixDQUFDUCxPQUFELENBQTlCLEVBQXlDUSxNQUF6QyxDQUFnRCxDQUFDUixPQUFELENBQWhELEVBQTJELEdBQTNELENBQWhCO0FBQ0FBLGVBQU8sQ0FBQ3ZELElBQVIsQ0FBYSxLQUFLbEIsT0FBbEIsRUFBMkJjLE9BQTNCO0FBQ0g7O0FBQ0csVUFBSW9FLE9BQU8sR0FBRyxJQUFJM0YsRUFBRSxDQUFDbUYsS0FBUCxDQUFhO0FBQUNDLGlCQUFTLEVBQUUsQ0FBWjtBQUFnQkMsa0JBQVUsRUFBRTtBQUE1QixPQUFiLENBQWQ7O0FBRUosVUFBSUwsS0FBSyxDQUFDQyxPQUFOLENBQWN2QixTQUFTLENBQUMsQ0FBRCxDQUF2QixLQUErQkEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhTCxNQUFoRCxFQUF1RDtBQUNuRHNDLGVBQU8sQ0FBQ0wsWUFBUixDQUFxQixDQUFDdEIsVUFBRCxDQUFyQjtBQUNBLFlBQUl1QixTQUFTLEdBQUcsSUFBSXZGLEVBQUUsQ0FBQ3dGLFNBQVAsR0FBbUJDLFVBQW5CLENBQThCLENBQUNFLE9BQUQsQ0FBOUIsRUFBeUNELE1BQXpDLENBQWdELENBQUNDLE9BQUQsQ0FBaEQsRUFBMkQsR0FBM0QsQ0FBaEI7QUFDQUEsZUFBTyxDQUFDaEUsSUFBUixDQUFhLEtBQUtsQixPQUFsQixFQUEyQm1CLE9BQTNCO0FBQ0gsT0ExSUEsQ0EySUQ7O0FBQ1g7Ozt3Q0FFbUI7QUFDaEIsV0FBS2dFLFVBQUw7QUFDSDs7O3VDQUVrQkMsUyxFQUFXO0FBQzFCLFVBQUksS0FBS3hGLEtBQUwsS0FBZXdGLFNBQVMsQ0FBQ3hGLEtBQXpCLElBQWtDLEtBQUtFLFdBQUwsS0FBcUJzRixTQUFTLENBQUN0RixXQUFqRSxJQUFnRixLQUFLRCxNQUFMLEtBQWdCdUYsU0FBUyxDQUFDdkYsTUFBOUcsRUFBcUg7QUFBQSxZQUM5R08sRUFEOEcsR0FDeEcsS0FBS1QsS0FEbUcsQ0FDOUdTLEVBRDhHO0FBRXJILFlBQUlpRixPQUFPLEdBQUc5RSxRQUFRLENBQUNDLGNBQVQsQ0FBd0JKLEVBQXhCLENBQWQ7QUFDQWlGLGVBQU8sQ0FBQ0MsVUFBUixDQUFtQkMsV0FBbkIsQ0FBK0JGLE9BQS9CO0FBQ0EsYUFBS0YsVUFBTDtBQUNDO0FBQ0E7QUFFTDs7Ozs7Ozs7Ozs7Ozs7OzZCQWdCUztBQUFBLHlCQUNpQyxLQUFLeEYsS0FEdEM7QUFBQSxVQUNDUyxFQURELGdCQUNDQSxFQUREO0FBQUEsVUFDS1IsS0FETCxnQkFDS0EsS0FETDtBQUFBLFVBQ1lFLFdBRFosZ0JBQ1lBLFdBRFo7QUFBQSxVQUN5QkQsTUFEekIsZ0JBQ3lCQSxNQUR6QjtBQUVMLDBCQUFPO0FBQUssVUFBRSxFQUFFTyxFQUFUO0FBQWEsYUFBSyxFQUFFO0FBQ3ZCb0YsZ0JBQU0sRUFBRSxNQURlO0FBRXZCQyxpQkFBTyxFQUFFLENBRmM7QUFHdkJDLHNCQUFZLEVBQUUsQ0FIUztBQUl2QkMsaUJBQU8sRUFBRTtBQUpjO0FBQXBCLFFBQVA7QUFRSDs7OztFQXJNc0NDLCtDOzs7QUF5TTNDbEcsYUFBYSxDQUFDbUcsWUFBZCxHQUE2QixFQUE3QjtBQUVBbkcsYUFBYSxDQUFDb0csU0FBZCxHQUEwQjtBQUN0Qjs7O0FBR0ExRixJQUFFLEVBQUUyRixpREFBUyxDQUFDQyxNQUpROztBQU10Qjs7O0FBR0FwRyxPQUFLLEVBQUVtRyxpREFBUyxDQUFDRSxLQVRLO0FBVXRCcEcsUUFBTSxFQUFFa0csaURBQVMsQ0FBQ0UsS0FWSTtBQVd0Qm5HLGFBQVcsRUFBRWlHLGlEQUFTLENBQUNFLEtBWEQ7O0FBY3RCOzs7O0FBSUE1RixVQUFRLEVBQUUwRixpREFBUyxDQUFDRztBQWxCRSxDQUExQixDIiwiZmlsZSI6ImJmZmU1NDItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JjaGVzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz0wO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0PTA7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cz0wO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXI9MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQ9MDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0dXBTY29yZSgpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aWQsIG5vdGVzLCB0YXJnZXQsIGluc3RydW1lbnRzLCBzZXRQcm9wc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gaW5zdHJ1bWVudHM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc2l6ZSgyMDAsIDQwMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG5cclxuICAgICAgICAgICAgICAgIC8vRG8gVHJlYmxlIGFuZCBCYXNzIENsZWZzXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfdCA9IG5ldyBWRi5TdGF2ZSgyMCwgMTEwLCAyMDApO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdC5hZGRDbGVmKFwidHJlYmxlXCIpIC8vLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZV90LnNldENvbnRleHQodGhpcy5jb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdmVfYiA9IG5ldyBWRi5TdGF2ZSgyMCwgMjAwLCAyMDApO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5hZGRDbGVmKFwiYmFzc1wiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0RvIGNvbm5lY3RvcnNcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGNvbm5lY3RvcjIgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IyLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdG9yMy5zZXRUZXh0KCdPcmNoLicpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9uID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9hID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV90ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9pID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX2EgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc190ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfaSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpPTA7IGk8bm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdCA9IGluc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19rZXkgPSBlbnRyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X29jdGF2ZSA9IGVudHJ5W2VudHJ5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5WzFdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRndCA9IHRhcmdldFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChuZXdfb2N0YXZlKSA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2kucHVzaChpbnN0KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL0FsbGEgb2xldmEgb3R0YWEgdmFpbiBla2FuIGh1b21pb29uLCB0YXJraXN0YSEhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19hLnB1c2gobmV3X2FjY2lkZW50aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX2kucHVzaChpbnN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc190LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cmVibGVfbiwgdHJlYmxlX2EsIHRyZWJsZV90LCBiYXNzX24sIGJhc3NfYSwgYmFzc190LCB0cmVibGVfaSwgYmFzc19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfZGF0YSA9IHNlcGFyYXRlKHRoaXMubm90ZXMsIHRoaXMuaW5zdHJ1bWVudHMsIHRoaXMudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogbm90ZV9kYXRhWzBdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJiYXNzXCIsIGtleXM6IG5vdGVfZGF0YVszXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX2luc3QgPSBub3RlX2RhdGFbNl1cclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX2luc3QgPSBub3RlX2RhdGFbN11cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgcmV0dXJuIG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7IH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMV0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVsxXVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKHRyZWJsZV9pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzRdW2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzc19ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKGJhc3NfaW5zdFtpXSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uUklHSFQpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RlX2RhdGFbNV1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiBcInJlZFwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHZvaWNlIGluIDQvNCBhbmQgYWRkIHRoZSBub3RlcyBmcm9tIGFib3ZlXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlX2RhdGFbMF0pICYmIG5vdGVfZGF0YVswXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2b2ljZV90ID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfdC5hZGRUaWNrYWJsZXMoW3RyZWJsZV9ub3Rlc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfdF0pLmZvcm1hdChbdm9pY2VfdF0sIDI1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfdC5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX2IgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZV9kYXRhWzNdKSAmJiBub3RlX2RhdGFbM10ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV9iLmFkZFRpY2thYmxlcyhbYmFzc19ub3Rlc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfYl0pLmZvcm1hdChbdm9pY2VfYl0sIDI1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVmcy5vdXRlci5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5ub3RlcyAhPT0gcHJldlByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IHByZXZQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gcHJldlByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLypcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbmV4dFByb3BzLm5vdGVzXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBuZXh0UHJvcHMuaW5zdHJ1bWVudHNcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXh0UHJvcHMudGFyZ2V0XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG5cclxuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5wcm9wcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMucHJvcHMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KTtcclxufVxyXG4gICovXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkLCBub3RlcywgaW5zdHJ1bWVudHMsIHRhcmdldH09dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD17aWR9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5PcmNoZXN0cmF0aW9uLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuT3JjaGVzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbm90ZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHRhcmdldDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgaW5zdHJ1bWVudHM6IFByb3BUeXBlcy5hcnJheSxcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdatescore_component("main",{

/***/ "./src/lib/components/Pianoroll.js":
/*!*****************************************!*\
  !*** ./src/lib/components/Pianoroll.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pianoroll; });
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

var Pianoroll = /*#__PURE__*/function (_Component) {
  _inherits(Pianoroll, _Component);

  var _super = _createSuper(Pianoroll);

  function Pianoroll(props) {
    var _this;

    _classCallCheck(this, Pianoroll);

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

  _createClass(Pianoroll, [{
    key: "setupScore",
    value: function setupScore() {
      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          notes = _this$props.notes,
          target = _this$props.target,
          instruments = _this$props.instruments,
          width = _this$props.width,
          setProps = _this$props.setProps; //const svgContainer = document.getElementById(id);

      this.notes = notes;
      this.target = target;
      this.instruments = instruments;
      this.renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      this.renderer.resize(width, 400);
      var context = this.renderer.getContext();
      this.context = context; //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(20, 110, width);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(this.context).draw();
      var stave_b = new VF.Stave(20, 200, width);
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
      var treble_lin = new VF.StaveLine();
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
        treble_notes.addAccidental(i, new VF.Accidental(note_data[1][i])); //treble_notes.addModifier(i, viereen(treble_inst[i], VF.Modifier.Position.RIGHT))

        if (note_data[2][i] === 1) {
          treble_notes.setKeyStyle(i, {
            fillStyle: "red"
          });
        }
      }

      for (var i = 0; i < note_data[3].length; i++) {
        bass_notes.addAccidental(i, new VF.Accidental(note_data[4][i])); //bass_notes.addModifier(i, viereen(bass_inst[i], VF.Modifier.Position.RIGHT))

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
        voice_t.addTickables([treble_notes]).setStrict(false);
        var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], 250);
        voice_t.draw(this.context, stave_t);
      }

      var voice_b = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });

      if (Array.isArray(note_data[3]) && note_data[3].length) {
        voice_b.addTickables([bass_notes]).setStrict(false);
        var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], 250);
        voice_b.draw(this.context, stave_b);
      }

      this.refs.outer3.appendChild(svgContainer);
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
      var element = this.refs.outer3;

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
          target = _this$props2.target,
          width = _this$props2.width;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        ref: "outer3",
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          display: "inline-block"
        }
      });
    }
  }]);

  return Pianoroll;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Pianoroll.defaultProps = {};
Pianoroll.propTypes = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwibm90ZXMiLCJ0YXJnZXQiLCJpbnN0cnVtZW50cyIsInJlbmRlcmVyIiwiY29udGV4dCIsInN0YXRlIiwieCIsInkiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIndpZHRoIiwic2V0UHJvcHMiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJjb25uZWN0b3IzIiwiQlJBQ0tFVCIsInNlcGFyYXRlIiwiaSIsInRyZWJsZV9uIiwidHJlYmxlX2EiLCJ0cmVibGVfdCIsInRyZWJsZV9pIiwiYmFzc19uIiwiYmFzc19hIiwiYmFzc190IiwiYmFzc19pIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJuZXdfYWNjaWRlbnRpYWwiLCJlbnRyeSIsIm5ld19ub3RlIiwiaW5zdCIsInRndCIsImxlbmd0aCIsImNvbmNhdCIsInBhcnNlSW50IiwicHVzaCIsImoiLCJub3RlX2RhdGEiLCJ0cmVibGVfbm90ZXMiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwidHJlYmxlX2xpbiIsIlN0YXZlTGluZSIsImJhc3Nfbm90ZXMiLCJ0cmVibGVfaW5zdCIsImJhc3NfaW5zdCIsInZpZXJlZW4iLCJudW0iLCJwb3MiLCJGcmV0SGFuZEZpbmdlciIsInNldFBvc2l0aW9uIiwiYWRkQWNjaWRlbnRhbCIsIkFjY2lkZW50YWwiLCJzZXRLZXlTdHlsZSIsImZpbGxTdHlsZSIsIkFycmF5IiwiaXNBcnJheSIsInZvaWNlX3QiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJhZGRUaWNrYWJsZXMiLCJzZXRTdHJpY3QiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0Iiwidm9pY2VfYiIsInJlZnMiLCJvdXRlcjMiLCJhcHBlbmRDaGlsZCIsInNldHVwU2NvcmUiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFFcUJDLFM7Ozs7O0FBRWpCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVcsQ0FBWDtBQUNBLFVBQUtDLE1BQUwsR0FBWSxDQUFaO0FBQ0EsVUFBS0MsV0FBTCxHQUFpQixDQUFqQjtBQUNBLFVBQUtDLFFBQUwsR0FBYyxDQUFkO0FBQ0EsVUFBS0MsT0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsT0FBQyxFQUFFLENBRE07QUFFVEMsT0FBQyxFQUFFO0FBRk0sS0FBYjtBQVBlO0FBWWxCOzs7O2lDQUVZO0FBQ0QsVUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFEQyx3QkFFeUQsS0FBS1gsS0FGOUQ7QUFBQSxVQUVNWSxFQUZOLGVBRU1BLEVBRk47QUFBQSxVQUVVWCxLQUZWLGVBRVVBLEtBRlY7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Qjs7O0FBR0EzRixJQUFFLEVBQUU0RixpREFBUyxDQUFDQyxNQUpJOztBQU1sQjs7O0FBR0F4RyxPQUFLLEVBQUV1RyxpREFBUyxDQUFDRSxLQVRDO0FBVWxCeEcsUUFBTSxFQUFFc0csaURBQVMsQ0FBQ0UsS0FWQTtBQVdsQnZHLGFBQVcsRUFBRXFHLGlEQUFTLENBQUNFLEtBWEw7O0FBY2xCOzs7O0FBSUE1RixVQUFRLEVBQUUwRixpREFBUyxDQUFDRztBQWxCRixDQUF0QixDIiwiZmlsZSI6Ijk0ZmI0OTktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm9yb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPTA7XHJcbiAgICAgICAgdGhpcy50YXJnZXQ9MDtcclxuICAgICAgICB0aGlzLmluc3RydW1lbnRzPTA7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcj0wO1xyXG4gICAgICAgIHRoaXMuY29udGV4dD0wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzZXR1cFNjb3JlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aWQsIG5vdGVzLCB0YXJnZXQsIGluc3RydW1lbnRzLCB3aWR0aCwgc2V0UHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgICAgIC8vY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gaW5zdHJ1bWVudHM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgNDAwKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5yZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcblxyXG4gICAgICAgICAgICAgICAgLy9EbyBUcmVibGUgYW5kIEJhc3MgQ2xlZnNcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBzdGF2ZV90ID0gbmV3IFZGLlN0YXZlKDIwLCAxMTAsIHdpZHRoKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlX3QuYWRkQ2xlZihcInRyZWJsZVwiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdC5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX2IgPSBuZXcgVkYuU3RhdmUoMjAsIDIwMCwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5hZGRDbGVmKFwiYmFzc1wiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0RvIGNvbm5lY3RvcnNcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGNvbm5lY3RvcjIgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IyLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdG9yMy5zZXRUZXh0KCdPcmNoLicpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9uID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9hID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV90ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9pID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX2EgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc190ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfaSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpPTA7IGk8bm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdCA9IGluc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19rZXkgPSBlbnRyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X29jdGF2ZSA9IGVudHJ5W2VudHJ5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5WzFdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRndCA9IHRhcmdldFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChuZXdfb2N0YXZlKSA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2kucHVzaChpbnN0KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL0FsbGEgb2xldmEgb3R0YWEgdmFpbiBla2FuIGh1b21pb29uLCB0YXJraXN0YSEhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19hLnB1c2gobmV3X2FjY2lkZW50aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX2kucHVzaChpbnN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc190LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cmVibGVfbiwgdHJlYmxlX2EsIHRyZWJsZV90LCBiYXNzX24sIGJhc3NfYSwgYmFzc190LCB0cmVibGVfaSwgYmFzc19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfZGF0YSA9IHNlcGFyYXRlKHRoaXMubm90ZXMsIHRoaXMuaW5zdHJ1bWVudHMsIHRoaXMudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogbm90ZV9kYXRhWzBdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICAgICAgICAgIHZhciB0cmVibGVfbGluID0gbmV3IFZGLlN0YXZlTGluZSgpXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19ub3RlcyA9IG5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IFwiYmFzc1wiLCBrZXlzOiBub3RlX2RhdGFbM10sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9pbnN0ID0gbm90ZV9kYXRhWzZdXHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzc19pbnN0ID0gbm90ZV9kYXRhWzddXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0Z1bmt0aW8gam9sbGEgcGlpcnJldMOkw6RuIG51b3RpbiB2aWVyZWVuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2aWVyZWVuKG51bSwgcG9zKSB7IHJldHVybiBuZXcgVkYuRnJldEhhbmRGaW5nZXIobnVtKS5zZXRQb3NpdGlvbihwb3MpOyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzFdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuYWRkQWNjaWRlbnRhbChpLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlX2RhdGFbMV1baV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RyZWJsZV9ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKHRyZWJsZV9pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzRdW2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9iYXNzX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4oYmFzc19pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVs1XVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdm9pY2UgaW4gNC80IGFuZCBhZGQgdGhlIG5vdGVzIGZyb20gYWJvdmVcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVswXSkgJiYgbm90ZV9kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX3QgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90LmFkZFRpY2thYmxlcyhbdHJlYmxlX25vdGVzXSkuc2V0U3RyaWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RdKS5mb3JtYXQoW3ZvaWNlX3RdLCAyNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3QuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2b2ljZV9iID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVszXSkgJiYgbm90ZV9kYXRhWzNdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5hZGRUaWNrYWJsZXMoW2Jhc3Nfbm90ZXNdKS5zZXRTdHJpY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfYl0pLmZvcm1hdChbdm9pY2VfYl0sIDI1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMub3V0ZXIzLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vaWYgKHRoaXMubm90ZXMgIT09IHByZXZQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBwcmV2UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IHByZXZQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgIC8vY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXIzXHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLypcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbmV4dFByb3BzLm5vdGVzXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBuZXh0UHJvcHMuaW5zdHJ1bWVudHNcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXh0UHJvcHMudGFyZ2V0XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG5cclxuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5wcm9wcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMucHJvcHMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KTtcclxufVxyXG4gICovXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkLCBub3RlcywgaW5zdHJ1bWVudHMsIHRhcmdldCwgd2lkdGh9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSByZWY9XCJvdXRlcjNcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0gICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuUGlhbm9yb2xsLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuUGlhbm9yb2xsLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBub3RlczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBpbnN0cnVtZW50czogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
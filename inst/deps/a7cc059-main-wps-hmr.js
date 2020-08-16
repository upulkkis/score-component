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
        treble_notes.setXShift(4); //treble_notes.addModifier(i, viereen(treble_inst[i], VF.Modifier.Position.RIGHT))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwibm90ZXMiLCJ0YXJnZXQiLCJpbnN0cnVtZW50cyIsInJlbmRlcmVyIiwiY29udGV4dCIsInN0YXRlIiwieCIsInkiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIndpZHRoIiwic2V0UHJvcHMiLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiZ2V0Q29udGV4dCIsInN0YXZlX3QiLCJTdGF2ZSIsImFkZENsZWYiLCJzZXRDb250ZXh0IiwiZHJhdyIsInN0YXZlX2IiLCJjb25uZWN0b3IiLCJTdGF2ZUNvbm5lY3RvciIsInNldFR5cGUiLCJ0eXBlIiwiU0lOR0xFX0xFRlQiLCJjb25uZWN0b3IzIiwiQlJBQ0tFVCIsInNlcGFyYXRlIiwiaSIsInRyZWJsZV9uIiwidHJlYmxlX2EiLCJ0cmVibGVfdCIsInRyZWJsZV9pIiwiYmFzc19uIiwiYmFzc19hIiwiYmFzc190IiwiYmFzc19pIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJuZXdfYWNjaWRlbnRpYWwiLCJlbnRyeSIsIm5ld19ub3RlIiwiaW5zdCIsInRndCIsImxlbmd0aCIsImNvbmNhdCIsInBhcnNlSW50IiwicHVzaCIsImoiLCJub3RlX2RhdGEiLCJ0cmVibGVfbm90ZXMiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwiYmFzc19ub3RlcyIsInRyZWJsZV9pbnN0IiwiYmFzc19pbnN0IiwidmllcmVlbiIsIm51bSIsInBvcyIsIkZyZXRIYW5kRmluZ2VyIiwic2V0UG9zaXRpb24iLCJhZGRBY2NpZGVudGFsIiwiQWNjaWRlbnRhbCIsInNldFhTaGlmdCIsInNldEtleVN0eWxlIiwiZmlsbFN0eWxlIiwiQXJyYXkiLCJpc0FycmF5Iiwidm9pY2VfdCIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsImFkZFRpY2thYmxlcyIsInNldFN0cmljdCIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJ2b2ljZV9iIiwicmVmcyIsIm91dGVyMyIsImFwcGVuZENoaWxkIiwic2V0dXBTY29yZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJoYXNDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQywrQ0FBRyxDQUFDQyxJQUFmOztJQUVxQkMsUzs7Ozs7QUFFakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVyxDQUFYO0FBQ0EsVUFBS0MsTUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLQyxXQUFMLEdBQWlCLENBQWpCO0FBQ0EsVUFBS0MsUUFBTCxHQUFjLENBQWQ7QUFDQSxVQUFLQyxPQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxPQUFDLEVBQUUsQ0FETTtBQUVUQyxPQUFDLEVBQUU7QUFGTSxLQUFiO0FBUGU7QUFZbEI7Ozs7aUNBRVk7QUFDRCxVQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQURDLHdCQUV5RCxLQUFLWCxLQUY5RDtBQUFBLFVBRU1ZLEVBRk4sZUFFTUEsRUFGTjtBQUFBLFVBRVVYLEtBRlYsZUFFVUEsS0FGVjtBQUFBLFVBRWlCQyxN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QUFDQyxNQUpJOztBQU1sQjs7O0FBR0F2RyxPQUFLLEVBQUVzRyxpREFBUyxDQUFDRSxLQVRDO0FBVWxCdkcsUUFBTSxFQUFFcUcsaURBQVMsQ0FBQ0UsS0FWQTtBQVdsQnRHLGFBQVcsRUFBRW9HLGlEQUFTLENBQUNFLEtBWEw7O0FBY2xCOzs7O0FBSUEzRixVQUFRLEVBQUV5RixpREFBUyxDQUFDRztBQWxCRixDQUF0QixDIiwiZmlsZSI6ImE3Y2MwNTktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm9yb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPTA7XHJcbiAgICAgICAgdGhpcy50YXJnZXQ9MDtcclxuICAgICAgICB0aGlzLmluc3RydW1lbnRzPTA7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcj0wO1xyXG4gICAgICAgIHRoaXMuY29udGV4dD0wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzZXR1cFNjb3JlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aWQsIG5vdGVzLCB0YXJnZXQsIGluc3RydW1lbnRzLCB3aWR0aCwgc2V0UHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgICAgIC8vY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gaW5zdHJ1bWVudHM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgNDAwKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5yZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcblxyXG4gICAgICAgICAgICAgICAgLy9EbyBUcmVibGUgYW5kIEJhc3MgQ2xlZnNcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBzdGF2ZV90ID0gbmV3IFZGLlN0YXZlKDIwLCAxMTAsIHdpZHRoKTtcclxuICAgICAgICAgICAgICAgIHN0YXZlX3QuYWRkQ2xlZihcInRyZWJsZVwiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfdC5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXZlX2IgPSBuZXcgVkYuU3RhdmUoMjAsIDIwMCwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5hZGRDbGVmKFwiYmFzc1wiKSAvLy5hZGRUaW1lU2lnbmF0dXJlKFwiNC80XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdmVfYi5zZXRDb250ZXh0KHRoaXMuY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0RvIGNvbm5lY3RvcnNcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGNvbm5lY3RvcjIgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdG9yMi5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25uZWN0b3IyLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3IzLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdG9yMy5zZXRUZXh0KCdPcmNoLicpO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yMy5kcmF3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShub3RlcywgaW5zdHJ1bWVudHMsdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9uID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9hID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV90ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWJsZV9pID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNzX2EgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzc190ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc3NfaSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpPTA7IGk8bm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdCA9IGluc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19rZXkgPSBlbnRyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X29jdGF2ZSA9IGVudHJ5W2VudHJ5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5WzFdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRndCA9IHRhcmdldFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChuZXdfb2N0YXZlKSA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX2kucHVzaChpbnN0KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL0FsbGEgb2xldmEgb3R0YWEgdmFpbiBla2FuIGh1b21pb29uLCB0YXJraXN0YSEhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtqXT09PWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJlYmxlX3QucHVzaCh0Z3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX24ucHVzaChuZXdfbm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzc19hLnB1c2gobmV3X2FjY2lkZW50aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNzX2kucHVzaChpbnN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8dGFyZ2V0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzc190LnB1c2godGd0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cmVibGVfbiwgdHJlYmxlX2EsIHRyZWJsZV90LCBiYXNzX24sIGJhc3NfYSwgYmFzc190LCB0cmVibGVfaSwgYmFzc19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfZGF0YSA9IHNlcGFyYXRlKHRoaXMubm90ZXMsIHRoaXMuaW5zdHJ1bWVudHMsIHRoaXMudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJ0cmVibGVcIiwga2V5czogbm90ZV9kYXRhWzBdLCBkdXJhdGlvbjogXCJxXCIgfSlcclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJiYXNzXCIsIGtleXM6IG5vdGVfZGF0YVszXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlYmxlX2luc3QgPSBub3RlX2RhdGFbNl1cclxuICAgICAgICAgICAgICAgIHZhciBiYXNzX2luc3QgPSBub3RlX2RhdGFbN11cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vRnVua3RpbyBqb2xsYSBwaWlycmV0w6TDpG4gbnVvdGluIHZpZXJlZW5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZpZXJlZW4obnVtLCBwb3MpIHsgcmV0dXJuIG5ldyBWRi5GcmV0SGFuZEZpbmdlcihudW0pLnNldFBvc2l0aW9uKHBvcyk7IH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbMV0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRBY2NpZGVudGFsKGksIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfZGF0YVsxXVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5zZXRYU2hpZnQoNClcclxuICAgICAgICAgICAgICAgICAgICAvL3RyZWJsZV9ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKHRyZWJsZV9pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVsyXVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVibGVfbm90ZXMuc2V0S2V5U3R5bGUoaSwge2ZpbGxTdHlsZTogXCJyZWRcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzRdW2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9iYXNzX25vdGVzLmFkZE1vZGlmaWVyKGksIHZpZXJlZW4oYmFzc19pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVs1XVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNzX25vdGVzLnNldEtleVN0eWxlKGksIHtmaWxsU3R5bGU6IFwicmVkXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdm9pY2UgaW4gNC80IGFuZCBhZGQgdGhlIG5vdGVzIGZyb20gYWJvdmVcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVswXSkgJiYgbm90ZV9kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZvaWNlX3QgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICAgICAgICAgICAgICB2b2ljZV90LmFkZFRpY2thYmxlcyhbdHJlYmxlX25vdGVzXSkuc2V0U3RyaWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX3RdKS5mb3JtYXQoW3ZvaWNlX3RdLCAyNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlX3QuZHJhdyh0aGlzLmNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2b2ljZV9iID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVszXSkgJiYgbm90ZV9kYXRhWzNdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5hZGRUaWNrYWJsZXMoW2Jhc3Nfbm90ZXNdKS5zZXRTdHJpY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyhbdm9pY2VfYl0pLmZvcm1hdChbdm9pY2VfYl0sIDI1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VfYi5kcmF3KHRoaXMuY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMub3V0ZXIzLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vaWYgKHRoaXMubm90ZXMgIT09IHByZXZQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBwcmV2UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IHByZXZQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgIC8vY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnJlZnMub3V0ZXIzXHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLypcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7ICAgXHJcbiAgICAgICAgaWYgKHRoaXMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbmV4dFByb3BzLm5vdGVzXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBuZXh0UHJvcHMuaW5zdHJ1bWVudHNcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXh0UHJvcHMudGFyZ2V0XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG5cclxuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5wcm9wcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMucHJvcHMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KTtcclxufVxyXG4gICovXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0e2lkLCBub3RlcywgaW5zdHJ1bWVudHMsIHRhcmdldCwgd2lkdGh9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5QaWFub3JvbGwuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5QaWFub3JvbGwucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIG5vdGVzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIGluc3RydW1lbnRzOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
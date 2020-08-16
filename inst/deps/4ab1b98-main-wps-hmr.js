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
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Orchestration, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          notes = _this$props.notes,
          target = _this$props.target,
          instruments = _this$props.instruments,
          setProps = _this$props.setProps;
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(200, 400);
      var context = renderer.getContext(); //Do Treble and Bass Clefs

      var stave_t = new VF.Stave(20, 110, 200);
      stave_t.addClef("treble"); //.addTimeSignature("4/4");

      stave_t.setContext(context).draw();
      var stave_b = new VF.Stave(20, 200, 200);
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

      var note_data = separate(notes, instruments, target);
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
        voice_t.draw(context, stave_t);
      }

      var voice_b = new VF.Voice({
        num_beats: 1,
        beat_value: 4
      });

      if (Array.isArray(note_data[3]) && note_data[3].length) {
        voice_b.addTickables([bass_notes]);
        var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], 250);
        voice_b.draw(context, stave_b);
      }

      this.refs.outer.appendChild(svgContainer);
    } //componentWillReceiveProps(nextProps) {   
    //    if (this.props.notes !== nextProps.notes){
    //        this.net.setNotes( nextProps.notes )
    //    } 
    //}

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.notes !== nextProps.notes || this.props.instruments !== nextProps.instruments || this.props.target !== nextProps.target;
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
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

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: ScoreComponent, Stave, Orchestration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ScoreComponent_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ScoreComponent.react */ "./src/lib/components/ScoreComponent.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return _components_ScoreComponent_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_Stave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Stave */ "./src/lib/components/Stave.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stave", function() { return _components_Stave__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Orchestration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Orchestration */ "./src/lib/components/Orchestration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orchestration", function() { return _components_Orchestration__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* eslint-disable import/prefer-default-export */





/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIk9yY2hlc3RyYXRpb24iLCJwcm9wcyIsInN0YXRlIiwieCIsInkiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm5vdGVzIiwidGFyZ2V0IiwiaW5zdHJ1bWVudHMiLCJzZXRQcm9wcyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJCYWNrZW5kcyIsIlNWRyIsInJlc2l6ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic3RhdmVfdCIsIlN0YXZlIiwiYWRkQ2xlZiIsInNldENvbnRleHQiLCJkcmF3Iiwic3RhdmVfYiIsImNvbm5lY3RvciIsIlN0YXZlQ29ubmVjdG9yIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsImNvbm5lY3RvcjMiLCJCUkFDS0VUIiwic2VwYXJhdGUiLCJpIiwidHJlYmxlX24iLCJ0cmVibGVfYSIsInRyZWJsZV90IiwidHJlYmxlX2kiLCJiYXNzX24iLCJiYXNzX2EiLCJiYXNzX3QiLCJiYXNzX2kiLCJuZXdfa2V5IiwibmV3X29jdGF2ZSIsIm5ld19hY2NpZGVudGlhbCIsImVudHJ5IiwibmV3X25vdGUiLCJpbnN0IiwidGd0IiwibGVuZ3RoIiwiY29uY2F0IiwicGFyc2VJbnQiLCJwdXNoIiwiaiIsIm5vdGVfZGF0YSIsInRyZWJsZV9ub3RlcyIsIlN0YXZlTm90ZSIsImNsZWYiLCJrZXlzIiwiZHVyYXRpb24iLCJiYXNzX25vdGVzIiwidHJlYmxlX2luc3QiLCJiYXNzX2luc3QiLCJ2aWVyZWVuIiwibnVtIiwicG9zIiwiRnJldEhhbmRGaW5nZXIiLCJzZXRQb3NpdGlvbiIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwiYWRkTW9kaWZpZXIiLCJNb2RpZmllciIsIlBvc2l0aW9uIiwiUklHSFQiLCJzZXRLZXlTdHlsZSIsImZpbGxTdHlsZSIsIkFycmF5IiwiaXNBcnJheSIsInZvaWNlX3QiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJhZGRUaWNrYWJsZXMiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJqb2luVm9pY2VzIiwiZm9ybWF0Iiwidm9pY2VfYiIsInJlZnMiLCJvdXRlciIsImFwcGVuZENoaWxkIiwibmV4dFByb3BzIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFFcUJDLGE7Ozs7O0FBRWpCLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsT0FBQyxFQUFFLENBRE07QUFFVEMsT0FBQyxFQUFFO0FBRk0sS0FBYjtBQUhlO0FBUWxCOzs7O3dDQUVtQjtBQUNoQixVQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQURnQix3QkFFbUMsS0FBS04sS0FGeEM7QUFBQSxVQUVUTyxFQUZTLGVBRVRBLEVBRlM7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUVFQyxNQUZGLGVBRUVBLE1BRkY7QUFBQSxVQUVVQyxXQUZWLGVBRVVBLFdBRlY7QUFBQSxVQUV1QkMsUUFGdkIsZUFFdUJBLFFBRnZCO0FBSWhCLFVBQUlDLFFBQVEsR0FBRyxJQUFJaEIsRUFBRSxDQUFDaUIsUUFBUCxDQUFnQlQsWUFB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QTtBQUNBOzs7OzBDQUVzQnVGLFMsRUFBVTtBQUM1QixhQUFRLEtBQUszRixLQUFMLENBQVdRLEtBQVgsS0FBcUJtRixTQUFTLENBQUNuRixLQUEvQixJQUF3QyxLQUFLUixLQUFMLENBQVdVLFdBQVgsS0FBMkJpRixTQUFTLENBQUNqRixXQUE3RSxJQUE0RixLQUFLVixLQUFMLENBQVdTLE1BQVgsS0FBc0JrRixTQUFTLENBQUNsRixNQUFwSTtBQUNQOzs7NkJBRVk7QUFBQSxVQUNFRixFQURGLEdBQ1EsS0FBS1AsS0FEYixDQUNFTyxFQURGO0FBRUwsMEJBQU87QUFBSyxVQUFFLEVBQUVBLEVBQVQ7QUFBYSxXQUFHLEVBQUMsT0FBakI7QUFBeUIsYUFBSyxFQUFFO0FBQ25DcUYsZ0JBQU0sRUFBRSxNQUQyQjtBQUVuQ0MsaUJBQU8sRUFBRSxDQUYwQjtBQUduQ0Msc0JBQVksRUFBRSxDQUhxQjtBQUluQ0MsaUJBQU8sRUFBRTtBQUowQjtBQUFoQyxRQUFQO0FBUUg7Ozs7RUF6S3NDQywrQzs7O0FBNkszQ2pHLGFBQWEsQ0FBQ2tHLFlBQWQsR0FBNkIsRUFBN0I7QUFFQWxHLGFBQWEsQ0FBQ21HLFNBQWQsR0FBMEI7QUFDdEI7OztBQUdBM0YsSUFBRSxFQUFFNEYsaURBQVMsQ0FBQ0MsTUFKUTs7QUFNdEI7OztBQUdBNUYsT0FBSyxFQUFFMkYsaURBQVMsQ0FBQ0UsS0FUSztBQVV0QjVGLFFBQU0sRUFBRTBGLGlEQUFTLENBQUNFLEtBVkk7QUFXdEIzRixhQUFXLEVBQUV5RixpREFBUyxDQUFDRSxLQVhEOztBQWN0Qjs7OztBQUlBMUYsVUFBUSxFQUFFd0YsaURBQVMsQ0FBQ0c7QUFsQkUsQ0FBMUIsQzs7Ozs7Ozs7Ozs7O0FDckxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNGFiMWI5OC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmV4IGZyb20gJ3ZleGZsb3cnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFZGID0gVmV4LkZsb3c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmNoZXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtpZCwgbm90ZXMsIHRhcmdldCwgaW5zdHJ1bWVudHMsIHNldFByb3BzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKDIwMCwgNDAwKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgLy9EbyBUcmVibGUgYW5kIEJhc3MgQ2xlZnNcclxuXHJcbiAgICAgICAgdmFyIHN0YXZlX3QgPSBuZXcgVkYuU3RhdmUoMjAsIDExMCwgMjAwKTtcclxuICAgICAgICBzdGF2ZV90LmFkZENsZWYoXCJ0cmVibGVcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICBzdGF2ZV90LnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG5cclxuICAgICAgICB2YXIgc3RhdmVfYiA9IG5ldyBWRi5TdGF2ZSgyMCwgMjAwLCAyMDApO1xyXG4gICAgICAgIHN0YXZlX2IuYWRkQ2xlZihcImJhc3NcIikgLy8uYWRkVGltZVNpZ25hdHVyZShcIjQvNFwiKTtcclxuICAgICAgICBzdGF2ZV9iLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRG8gY29ubmVjdG9yc1xyXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVfdCwgc3RhdmVfYik7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfTEVGVCk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICAvLyB2YXIgY29ubmVjdG9yMiA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZV90LCBzdGF2ZV9iKTtcclxuICAgICAgICAvLyBjb25uZWN0b3IyLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfUklHSFQpO1xyXG4gICAgICAgIC8vIGNvbm5lY3RvcjIuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAvL2Nvbm5lY3RvcjIuZHJhdygpO1xyXG4gICAgICAgIHZhciBjb25uZWN0b3IzID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlX3QsIHN0YXZlX2IpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgIGNvbm5lY3RvcjMuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAvL2Nvbm5lY3RvcjMuc2V0VGV4dCgnT3JjaC4nKTtcclxuICAgICAgICBjb25uZWN0b3IzLmRyYXcoKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKG5vdGVzLCBpbnN0cnVtZW50cyx0YXJnZXQpIHtcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfbiA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdHJlYmxlX2EgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRyZWJsZV90ID0gW107XHJcbiAgICAgICAgICAgIHZhciB0cmVibGVfaSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19uID0gW107XHJcbiAgICAgICAgICAgIHZhciBiYXNzX2EgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGJhc3NfdCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYmFzc19pID0gW107XHJcbiAgICAgICAgICAgIHZhciBuZXdfa2V5O1xyXG4gICAgICAgICAgICB2YXIgbmV3X29jdGF2ZTtcclxuICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbDtcclxuICAgICAgICAgICAgdmFyIGVudHJ5O1xyXG4gICAgICAgICAgICB2YXIgbmV3X25vdGU7XHJcbiAgICAgICAgICAgIHZhciBpbnN0O1xyXG4gICAgICAgICAgICB2YXIgdGd0XHJcbiAgICAgICAgICAgIGZvciAoaT0wOyBpPG5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeSA9IG5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaW5zdCA9IGluc3RydW1lbnRzW2ldXHJcbiAgICAgICAgICAgICAgICBuZXdfa2V5ID0gZW50cnlbMF07XHJcbiAgICAgICAgICAgICAgICBuZXdfb2N0YXZlID0gZW50cnlbZW50cnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdfYWNjaWRlbnRpYWwgPSBlbnRyeVsxXTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBuZXdfbm90ZSA9IG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpXHJcbiAgICAgICAgICAgICAgIHRndCA9IHRhcmdldFtpXTtcclxuICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobmV3X29jdGF2ZSkgPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICB0cmVibGVfbi5wdXNoKG5ld19ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgdHJlYmxlX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgIHRyZWJsZV9pLnB1c2goaW5zdClcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vVMOkbGzDpCBrYXRzb3RhYW4gb25rbyBqdXVyaSB0w6Rtw6QgdGFyZ2V0bGlzdGFsbGFcclxuICAgICAgICAgICAgICAgICAgLy9BbGxhIG9sZXZhIG90dGFhIHZhaW4gZWthbiBodW9taW9vbiwgdGFya2lzdGEhIVxyXG4gICAgICAgICAgICAgICAgICB2YXIgdGd0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHRhcmdldC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbal09PT1pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGd0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB0cmVibGVfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgYmFzc19uLnB1c2gobmV3X25vdGUpO1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX2EucHVzaChuZXdfYWNjaWRlbnRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICBiYXNzX2kucHVzaChpbnN0KTtcclxuICAgICAgICAgICAgICAgICAgdmFyIHRndCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajx0YXJnZXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W2pdPT09aSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRndD0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhc3NfdC5wdXNoKHRndCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFt0cmVibGVfbiwgdHJlYmxlX2EsIHRyZWJsZV90LCBiYXNzX24sIGJhc3NfYSwgYmFzc190LCB0cmVibGVfaSwgYmFzc19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG5vdGVfZGF0YSA9IHNlcGFyYXRlKG5vdGVzLCBpbnN0cnVtZW50cywgdGFyZ2V0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmVibGVfbm90ZXMgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBcInRyZWJsZVwiLCBrZXlzOiBub3RlX2RhdGFbMF0sIGR1cmF0aW9uOiBcInFcIiB9KVxyXG4gICAgICAgIHZhciBiYXNzX25vdGVzID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJiYXNzXCIsIGtleXM6IG5vdGVfZGF0YVszXSwgZHVyYXRpb246IFwicVwiIH0pXHJcbiAgICAgICAgdmFyIHRyZWJsZV9pbnN0ID0gbm90ZV9kYXRhWzZdXHJcbiAgICAgICAgdmFyIGJhc3NfaW5zdCA9IG5vdGVfZGF0YVs3XVxyXG5cclxuICAgICAgICAvL0Z1bmt0aW8gam9sbGEgcGlpcnJldMOkw6RuIG51b3RpbiB2aWVyZWVuXHJcbiAgICAgICAgZnVuY3Rpb24gdmllcmVlbihudW0sIHBvcykgeyByZXR1cm4gbmV3IFZGLkZyZXRIYW5kRmluZ2VyKG51bSkuc2V0UG9zaXRpb24ocG9zKTsgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8bm90ZV9kYXRhWzFdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdHJlYmxlX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzFdW2ldKSk7XHJcbiAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5hZGRNb2RpZmllcihpLCB2aWVyZWVuKHRyZWJsZV9pbnN0W2ldLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5SSUdIVCkpXHJcbiAgICAgICAgICAgIGlmIChub3RlX2RhdGFbMl1baV09PT0xKXtcclxuICAgICAgICAgICAgICAgIHRyZWJsZV9ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiBcInJlZFwifSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxub3RlX2RhdGFbM10ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBiYXNzX25vdGVzLmFkZEFjY2lkZW50YWwoaSwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9kYXRhWzRdW2ldKSk7XHJcbiAgICAgICAgICAgIGJhc3Nfbm90ZXMuYWRkTW9kaWZpZXIoaSwgdmllcmVlbihiYXNzX2luc3RbaV0sIFZGLk1vZGlmaWVyLlBvc2l0aW9uLlJJR0hUKSlcclxuICAgICAgICAgICAgaWYgKG5vdGVfZGF0YVs1XVtpXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgYmFzc19ub3Rlcy5zZXRLZXlTdHlsZShpLCB7ZmlsbFN0eWxlOiBcInJlZFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAvLyBDcmVhdGUgYSB2b2ljZSBpbiA0LzQgYW5kIGFkZCB0aGUgbm90ZXMgZnJvbSBhYm92ZVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGVfZGF0YVswXSkgJiYgbm90ZV9kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHZhciB2b2ljZV90ID0gbmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDEsICBiZWF0X3ZhbHVlOiA0fSk7XHJcbiAgICAgICAgICAgIHZvaWNlX3QuYWRkVGlja2FibGVzKFt0cmVibGVfbm90ZXNdKTtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV90XSkuZm9ybWF0KFt2b2ljZV90XSwgMjUwKTtcclxuICAgICAgICAgICAgdm9pY2VfdC5kcmF3KGNvbnRleHQsIHN0YXZlX3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZvaWNlX2IgPSBuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogMSwgIGJlYXRfdmFsdWU6IDR9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlX2RhdGFbM10pICYmIG5vdGVfZGF0YVszXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2b2ljZV9iLmFkZFRpY2thYmxlcyhbYmFzc19ub3Rlc10pO1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlX2JdKS5mb3JtYXQoW3ZvaWNlX2JdLCAyNTApO1xyXG4gICAgICAgICAgICB2b2ljZV9iLmRyYXcoY29udGV4dCwgc3RhdmVfYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlci5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHsgICBcclxuICAgIC8vICAgIGlmICh0aGlzLnByb3BzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMpe1xyXG4gICAgLy8gICAgICAgIHRoaXMubmV0LnNldE5vdGVzKCBuZXh0UHJvcHMubm90ZXMgKVxyXG4gICAgLy8gICAgfSBcclxuICAgIC8vfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzOyAgXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5PcmNoZXN0cmF0aW9uLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuT3JjaGVzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgbm90ZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHRhcmdldDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgaW5zdHJ1bWVudHM6IFByb3BUeXBlcy5hcnJheSxcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgU2NvcmVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1Njb3JlQ29tcG9uZW50LnJlYWN0JztcclxuaW1wb3J0IFN0YXZlIGZyb20gJy4vY29tcG9uZW50cy9TdGF2ZSc7XHJcbmltcG9ydCBPcmNoZXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9PcmNoZXN0cmF0aW9uJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBTY29yZUNvbXBvbmVudCxcclxuICAgIFN0YXZlLFxyXG4gICAgT3JjaGVzdHJhdGlvblxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
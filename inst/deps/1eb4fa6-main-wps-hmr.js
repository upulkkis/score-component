webpackHotUpdatescore_component("main",{

/***/ "./src/lib/components/Stave.js":
/*!*************************************!*\
  !*** ./src/lib/components/Stave.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stave; });
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

var Stave = /*#__PURE__*/function (_Component) {
  _inherits(Stave, _Component);

  var _super = _createSuper(Stave);

  function Stave(props) {
    var _this;

    _classCallCheck(this, Stave);

    _this = _super.call(this, props);
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Stave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var svgContainer = document.createElement('div');
      var notes = this.props.notes;
      var vf = new VF.Factory({
        renderer: {
          elementId: svgContainer,
          width: 500,
          height: 300
        }
      });
      var score = vf.EasyScore();
      var annotation = vf.annotation;
      var score2 = vf.EasyScore();
      var s_note = new VF.StaveNote({
        clef: "bass",
        keys: ["c/2", "c#/2", "d/2"],
        duration: "w"
      }); // first bar (with time signature and cleffs)

      var bar1 = score.voice(score.notes(notes)); //var bar2 = score.voice(score.notes('(c#2 d2)/w, {clef: "bass"}'));

      var bar2 = score.voice(score.notes(s_note)); //var beams1 = VF.Beam.applyAndGetBeams(bar1); // autobeam a voice
      //var system = this.makeSystem(vf, 500);

      var system = vf.System();
      system.addStave({
        voices: [bar1]
      }).addClef('treble'); // .addTimeSignature('4/4');
      //system.addStave({voices: [bar2]}).addClef('bass')

      system.addConnector();
      /*          // second bar
              var bar2 = score.voice(score.notes(notes[1]));
              var beams2 = VF.Beam.applyAndGetBeams(bar2);
      
              var system2 = this.makeSystem(vf, 500);
              system2.addStave({
                  voices: [
                      bar2,
                  ]
              });  */

      vf.draw(); //beams1.forEach(function(beam) {
      //    return beam.setContext(vf.getContext()).draw();
      //});
      //beams2.forEach(function(beam) {
      //    return beam.setContext(vf.getContext()).draw();
      //});

      this.refs.outer.appendChild(svgContainer);
    }
  }, {
    key: "makeSystem",
    value: function makeSystem(vf, width) {
      var system = vf.System({
        x: this.state.x,
        y: this.state.y,
        width: width,
        spaceBetweenStaves: 10
      });
      this.setState({
        x: this.state.x + width
      });
      return system;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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

  return Stave;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Stave.defaultProps = {};
Stave.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  notes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RhdmUuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiU3RhdmUiLCJwcm9wcyIsInN0YXRlIiwieCIsInkiLCJzdmdDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJub3RlcyIsInZmIiwiRmFjdG9yeSIsInJlbmRlcmVyIiwiZWxlbWVudElkIiwid2lkdGgiLCJoZWlnaHQiLCJzY29yZSIsIkVhc3lTY29yZSIsImFubm90YXRpb24iLCJzY29yZTIiLCJzX25vdGUiLCJTdGF2ZU5vdGUiLCJjbGVmIiwia2V5cyIsImR1cmF0aW9uIiwiYmFyMSIsInZvaWNlIiwiYmFyMiIsInN5c3RlbSIsIlN5c3RlbSIsImFkZFN0YXZlIiwidm9pY2VzIiwiYWRkQ2xlZiIsImFkZENvbm5lY3RvciIsImRyYXciLCJyZWZzIiwib3V0ZXIiLCJhcHBlbmRDaGlsZCIsInNwYWNlQmV0d2VlblN0YXZlcyIsInNldFN0YXRlIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFFcUJDLEs7Ozs7O0FBRWpCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsT0FBQyxFQUFFLENBRE07QUFFVEMsT0FBQyxFQUFFO0FBRk0sS0FBYjtBQUhlO0FBUWxCOzs7O3dDQUVtQjtBQUdoQixVQUFN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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBjb25zdCB7bm90ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgICAgIHZhciB2ZiA9IG5ldyBWRi5GYWN0b3J5KHtcclxuICAgICAgICAgICAgcmVuZGVyZXI6IHtlbGVtZW50SWQ6IHN2Z0NvbnRhaW5lciwgd2lkdGg6IDUwMCwgaGVpZ2h0OjMwMH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHNjb3JlID0gdmYuRWFzeVNjb3JlKCk7XHJcbiAgICAgICAgdmFyIGFubm90YXRpb24gPSB2Zi5hbm5vdGF0aW9uO1xyXG4gICAgICAgIHZhciBzY29yZTIgPSB2Zi5FYXN5U2NvcmUoKTtcclxuICAgICAgICB2YXIgc19ub3RlID0gbmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogXCJiYXNzXCIsIGtleXM6IFtcImMvMlwiLCBcImMjLzJcIiwgXCJkLzJcIl0sIGR1cmF0aW9uOiBcIndcIiB9KVxyXG4gICAgICAgIC8vIGZpcnN0IGJhciAod2l0aCB0aW1lIHNpZ25hdHVyZSBhbmQgY2xlZmZzKVxyXG4gICAgICAgIHZhciBiYXIxID0gc2NvcmUudm9pY2Uoc2NvcmUubm90ZXMobm90ZXMpKTtcclxuICAgICAgICAvL3ZhciBiYXIyID0gc2NvcmUudm9pY2Uoc2NvcmUubm90ZXMoJyhjIzIgZDIpL3csIHtjbGVmOiBcImJhc3NcIn0nKSk7XHJcbiAgICAgICAgdmFyIGJhcjIgPSBzY29yZS52b2ljZShzY29yZS5ub3RlcyhzX25vdGUpKTtcclxuXHJcbiAgICAgICAgLy92YXIgYmVhbXMxID0gVkYuQmVhbS5hcHBseUFuZEdldEJlYW1zKGJhcjEpOyAvLyBhdXRvYmVhbSBhIHZvaWNlXHJcbiAgICAgICAgLy92YXIgc3lzdGVtID0gdGhpcy5tYWtlU3lzdGVtKHZmLCA1MDApO1xyXG4gICAgICAgIHZhciBzeXN0ZW0gPSB2Zi5TeXN0ZW0oKVxyXG4gICAgICAgIHN5c3RlbS5hZGRTdGF2ZSh7dm9pY2VzOiBbYmFyMV19KS5hZGRDbGVmKCd0cmVibGUnKSAvLyAuYWRkVGltZVNpZ25hdHVyZSgnNC80Jyk7XHJcbiAgICAgICAgLy9zeXN0ZW0uYWRkU3RhdmUoe3ZvaWNlczogW2JhcjJdfSkuYWRkQ2xlZignYmFzcycpXHJcbiAgICAgICAgc3lzdGVtLmFkZENvbm5lY3RvcigpXHJcbi8qICAgICAgICAgIC8vIHNlY29uZCBiYXJcclxuICAgICAgICB2YXIgYmFyMiA9IHNjb3JlLnZvaWNlKHNjb3JlLm5vdGVzKG5vdGVzWzFdKSk7XHJcbiAgICAgICAgdmFyIGJlYW1zMiA9IFZGLkJlYW0uYXBwbHlBbmRHZXRCZWFtcyhiYXIyKTtcclxuXHJcbiAgICAgICAgdmFyIHN5c3RlbTIgPSB0aGlzLm1ha2VTeXN0ZW0odmYsIDUwMCk7XHJcbiAgICAgICAgc3lzdGVtMi5hZGRTdGF2ZSh7XHJcbiAgICAgICAgICAgIHZvaWNlczogW1xyXG4gICAgICAgICAgICAgICAgYmFyMixcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pOyAgKi9cclxuICAgICAgICBcclxuICAgICAgICB2Zi5kcmF3KCk7XHJcblxyXG5cclxuICAgICAgICAvL2JlYW1zMS5mb3JFYWNoKGZ1bmN0aW9uKGJlYW0pIHtcclxuICAgICAgICAvLyAgICByZXR1cm4gYmVhbS5zZXRDb250ZXh0KHZmLmdldENvbnRleHQoKSkuZHJhdygpO1xyXG4gICAgICAgIC8vfSk7XHJcbiAgICAgICAgLy9iZWFtczIuZm9yRWFjaChmdW5jdGlvbihiZWFtKSB7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIGJlYW0uc2V0Q29udGV4dCh2Zi5nZXRDb250ZXh0KCkpLmRyYXcoKTtcclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICB0aGlzLnJlZnMub3V0ZXIuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3lzdGVtKHZmLCB3aWR0aCkge1xyXG4gICAgICAgIGNvbnN0IHN5c3RlbSA9IHZmLlN5c3RlbSh7IHg6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55LCB3aWR0aDogd2lkdGgsIHNwYWNlQmV0d2VlblN0YXZlczogMTAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eDogdGhpcy5zdGF0ZS54ICsgd2lkdGh9KTtcclxuICAgICAgICByZXR1cm4gc3lzdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiByZWY9XCJvdXRlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5TdGF2ZS5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcblN0YXZlLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBub3RlczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
      var svgContainer = document.createElement('div'); //var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);

      var vf = new VF.Factory({
        renderer: {
          elementId: svgContainer,
          width: 500,
          height: 300
        }
      });
      var notes = this.props.notes; // var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG)
      //var system = this.makeSystem(vf, 500);
      // Size our SVG:
      //renderer.resize(500, 500);
      //var context = renderer.getContext();
      //var context = renderer.getContext();
      // var stave = new VF.Stave(10, 40, 400);
      // stave.addClef("treble").addTimeSignature("4/4");   
      //stave.setContext(context).draw();

      var score = vf.EasyScore();
      var annotation = vf.annotation; //var score2 = vf.EasyScore();
      // first bar (with time signature and cleffs)

      var bar1 = score.voice(score.notes(notes)); // var bar2 = score.voice(score.notes(notes));
      //var beams1 = VF.Beam.applyAndGetBeams(bar1); // autobeam a voice
      //var system = this.makeSystem(vf, 500);

      var system = vf.System();
      system.addStave({
        voices: [bar1]
      }).addClef('treble'); // .addTimeSignature('4/4');
      // system.addStave({voices: [bar2]}).addClef('bass')

      system.addConnector(); // second bar
      // var bar2 = score.voice(score.notes(notes[1]));
      // var beams2 = VF.Beam.applyAndGetBeams(bar2);

      /*
              var system2 = this.makeSystem(vf, 500);
              system2.addStave({
                  voices: [
                      bar2,
                  ]
              });  
            */

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
  notes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JjaGVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJWRiIsIlZleCIsIkZsb3ciLCJPcmNoZXN0cmF0aW9uIiwicHJvcHMiLCJzdGF0ZSIsIngiLCJ5Iiwic3ZnQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmYiLCJGYWN0b3J5IiwicmVuZGVyZXIiLCJlbGVtZW50SWQiLCJ3aWR0aCIsImhlaWdodCIsIm5vdGVzIiwic2NvcmUiLCJFYXN5U2NvcmUiLCJhbm5vdGF0aW9uIiwiYmFyMSIsInZvaWNlIiwic3lzdGVtIiwiU3lzdGVtIiwiYWRkU3RhdmUiLCJ2b2ljZXMiLCJhZGRDbGVmIiwiYWRkQ29ubmVjdG9yIiwiZHJhdyIsInJlZnMiLCJvdXRlciIsImFwcGVuZENoaWxkIiwic3BhY2VCZXR3ZWVuU3RhdmVzIiwic2V0U3RhdGUiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLCtDQUFHLENBQUNDLElBQWY7O0lBRXFCQyxhOzs7OztBQUVqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBRSxDQURNO0FBRVRDLE9BQUMsRUFBRTtBQUZNLEtBQWI7QUFIZTtBQVFsQjs7Ozt3Q0FFbUI7QUFFaEIsVUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckIsQ0FGZ0IsQ0FHaEI7O0FBRUEsVUFBSUMsRUFBRSxHQUFHLElBQUlYLEVBQUUsQ0FBQ1ksT0FBUCxDQUFlO0FBQ3BCQyxnQkFBUSxFQUFFO0FBQUNDLG1CQUFTLEVBQUVOLFlBQVo7QUFBMEJPLGVBQUssRUFBRSxHQUFqQztBQUFzQ0MsZ0JBQU0sRUFBQztBQUE3QztBQURVLE9BQWYsQ0FBVDtBQUxnQixVQVNUQyxLQVRTLEdBU0EsS0FBS2IsS0FUTCxDQVNUYSxLQVRTLEVBV2hCO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7QUFHQSxVQUFJQyxLQUFLLEdBQUdQLEVBQUUsQ0FBQ1EsU0FBSCxFQUFaO0FBQ0EsVUFBSUMsVUFBVSxHQUFHVCxFQUFFLENBQUNTLFVBQXBCLENBNUJnQixDQTZCaEI7QUFFQTs7QUFDQSxVQUFJQyxJQUFJLEdBQUdILEtBQUssQ0FBQ0ksS0FBTixDQUFZSixLQUFLLENBQUNELEtBQU4sQ0FBWUEsS0FBWixDQUFaLENBQVgsQ0FoQ2dCLENBaUNoQjtBQUVBO0FBQ0E7O0FBQ0EsVUFBSU0sTUFBTSxHQUFHWixFQUFFLENBQUNhLE1BQUgsRUFBYjtBQUNBRCxZQUFNLENBQUNFLFFBQVAsQ0FBZ0I7QUFBQ0MsY0FBTSxFQUFFLENBQUNMLElBQUQ7QUFBVCxPQUFoQixFQUFrQ00sT0FBbEMsQ0FBMEMsUUFBMUMsRUF0Q2dCLENBc0NvQztBQUNwRDs7QUFDQUosWUFBTSxDQUFDSyxZQUFQLEdBeENnQixDQXlDZDtBQUNGO0FBQ0E7O0FBQ1I7Ozs7Ozs7OztBQVNRakIsUUFBRSxDQUFDa0IsSUFBSCxHQXJEZ0IsQ0F3RGhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFdBQWhCLENBQTRCeEIsWUFBNUI7QUFDSDs7OytCQUdVRyxFLEVBQUlJLEssRUFBTztBQUNsQixVQUFNUSxNQUFNLEdBQUdaLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVO0FBQUVsQixTQUFDLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxDQUFoQjtBQUFtQkMsU0FBQyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0UsQ0FBakM7QUFBb0NRLGFBQUssRUFBRUEsS0FBM0M7QUFBa0RrQiwwQkFBa0IsRUFBRTtBQUF0RSxPQUFWLENBQWY7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFBQzVCLFNBQUMsRUFBRSxLQUFLRCxLQUFMLENBQVdDLENBQVgsR0FBZVM7QUFBbkIsT0FBZDtBQUNBLGFBQU9RLE1BQVA7QUFDSDs7OzZCQUdRO0FBQ0wsMEJBQU87QUFBSyxXQUFHLEVBQUMsT0FBVDtBQUFpQixhQUFLLEVBQUU7QUFDM0JZLGdCQUFNLEVBQUUsTUFEbUI7QUFFM0JDLGlCQUFPLEVBQUUsQ0FGa0I7QUFHM0JDLHNCQUFZLEVBQUUsQ0FIYTtBQUkzQkMsaUJBQU8sRUFBRTtBQUprQjtBQUF4QixRQUFQO0FBT0g7Ozs7RUE5RnNDQywrQzs7O0FBa0czQ3BDLGFBQWEsQ0FBQ3FDLFlBQWQsR0FBNkIsRUFBN0I7QUFFQXJDLGFBQWEsQ0FBQ3NDLFNBQWQsR0FBMEI7QUFDdEI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLE1BSlE7O0FBTXRCOzs7QUFHQTNCLE9BQUssRUFBRTBCLGlEQUFTLENBQUNDLE1BVEs7O0FBWXRCOzs7O0FBSUFDLFVBQVEsRUFBRUYsaURBQVMsQ0FBQ0c7QUFoQkUsQ0FBMUIsQyIsImZpbGUiOiJhZWY0ZDFjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yY2hlc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy92YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB2ZiA9IG5ldyBWRi5GYWN0b3J5KHtcclxuICAgICAgICAgICAgcmVuZGVyZXI6IHtlbGVtZW50SWQ6IHN2Z0NvbnRhaW5lciwgd2lkdGg6IDUwMCwgaGVpZ2h0OjMwMH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qge25vdGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vIHZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRylcclxuICAgICAgICAvL3ZhciBzeXN0ZW0gPSB0aGlzLm1ha2VTeXN0ZW0odmYsIDUwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2l6ZSBvdXIgU1ZHOlxyXG4gICAgICAgIC8vcmVuZGVyZXIucmVzaXplKDUwMCwgNTAwKTtcclxuXHJcbiAgICAgICAgLy92YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgICAvL3ZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG5cclxuICAgICAgICAvLyB2YXIgc3RhdmUgPSBuZXcgVkYuU3RhdmUoMTAsIDQwLCA0MDApO1xyXG5cclxuICAgICAgICAvLyBzdGF2ZS5hZGRDbGVmKFwidHJlYmxlXCIpLmFkZFRpbWVTaWduYXR1cmUoXCI0LzRcIik7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zdGF2ZS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNjb3JlID0gdmYuRWFzeVNjb3JlKCk7XHJcbiAgICAgICAgdmFyIGFubm90YXRpb24gPSB2Zi5hbm5vdGF0aW9uO1xyXG4gICAgICAgIC8vdmFyIHNjb3JlMiA9IHZmLkVhc3lTY29yZSgpO1xyXG5cclxuICAgICAgICAvLyBmaXJzdCBiYXIgKHdpdGggdGltZSBzaWduYXR1cmUgYW5kIGNsZWZmcylcclxuICAgICAgICB2YXIgYmFyMSA9IHNjb3JlLnZvaWNlKHNjb3JlLm5vdGVzKG5vdGVzKSk7XHJcbiAgICAgICAgLy8gdmFyIGJhcjIgPSBzY29yZS52b2ljZShzY29yZS5ub3Rlcyhub3RlcykpO1xyXG5cclxuICAgICAgICAvL3ZhciBiZWFtczEgPSBWRi5CZWFtLmFwcGx5QW5kR2V0QmVhbXMoYmFyMSk7IC8vIGF1dG9iZWFtIGEgdm9pY2VcclxuICAgICAgICAvL3ZhciBzeXN0ZW0gPSB0aGlzLm1ha2VTeXN0ZW0odmYsIDUwMCk7XHJcbiAgICAgICAgdmFyIHN5c3RlbSA9IHZmLlN5c3RlbSgpXHJcbiAgICAgICAgc3lzdGVtLmFkZFN0YXZlKHt2b2ljZXM6IFtiYXIxXX0pLmFkZENsZWYoJ3RyZWJsZScpIC8vIC5hZGRUaW1lU2lnbmF0dXJlKCc0LzQnKTtcclxuICAgICAgICAvLyBzeXN0ZW0uYWRkU3RhdmUoe3ZvaWNlczogW2JhcjJdfSkuYWRkQ2xlZignYmFzcycpXHJcbiAgICAgICAgc3lzdGVtLmFkZENvbm5lY3RvcigpXHJcbiAgICAgICAgICAvLyBzZWNvbmQgYmFyXHJcbiAgICAgICAgLy8gdmFyIGJhcjIgPSBzY29yZS52b2ljZShzY29yZS5ub3Rlcyhub3Rlc1sxXSkpO1xyXG4gICAgICAgIC8vIHZhciBiZWFtczIgPSBWRi5CZWFtLmFwcGx5QW5kR2V0QmVhbXMoYmFyMik7XHJcbi8qXHJcbiAgICAgICAgdmFyIHN5c3RlbTIgPSB0aGlzLm1ha2VTeXN0ZW0odmYsIDUwMCk7XHJcbiAgICAgICAgc3lzdGVtMi5hZGRTdGF2ZSh7XHJcbiAgICAgICAgICAgIHZvaWNlczogW1xyXG4gICAgICAgICAgICAgICAgYmFyMixcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmYuZHJhdygpO1xyXG5cclxuXHJcbiAgICAgICAgLy9iZWFtczEuZm9yRWFjaChmdW5jdGlvbihiZWFtKSB7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIGJlYW0uc2V0Q29udGV4dCh2Zi5nZXRDb250ZXh0KCkpLmRyYXcoKTtcclxuICAgICAgICAvL30pO1xyXG4gICAgICAgIC8vYmVhbXMyLmZvckVhY2goZnVuY3Rpb24oYmVhbSkge1xyXG4gICAgICAgIC8vICAgIHJldHVybiBiZWFtLnNldENvbnRleHQodmYuZ2V0Q29udGV4dCgpKS5kcmF3KCk7XHJcbiAgICAgICAgLy99KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLm91dGVyLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBtYWtlU3lzdGVtKHZmLCB3aWR0aCkge1xyXG4gICAgICAgIGNvbnN0IHN5c3RlbSA9IHZmLlN5c3RlbSh7IHg6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55LCB3aWR0aDogd2lkdGgsIHNwYWNlQmV0d2VlblN0YXZlczogMTAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eDogdGhpcy5zdGF0ZS54ICsgd2lkdGh9KTtcclxuICAgICAgICByZXR1cm4gc3lzdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIm91dGVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbk9yY2hlc3RyYXRpb24uZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5PcmNoZXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBub3RlczogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
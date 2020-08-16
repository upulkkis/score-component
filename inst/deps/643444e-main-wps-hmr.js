webpackHotUpdatescore_component("main",{

/***/ "./src/lib/components/Range.js":
/*!*************************************!*\
  !*** ./src/lib/components/Range.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Range; });
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

var Range = /*#__PURE__*/function (_Component) {
  _inherits(Range, _Component);

  var _super = _createSuper(Range);

  function Range(props) {
    var _this;

    _classCallCheck(this, Range);

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

  _createClass(Range, [{
    key: "setupScore",
    value: function setupScore() {
      function separate(MyNotes) {
        var new_key = MyNotes[0];
        var new_octave = MyNotes[MyNotes.length - 1];

        if (MyNotes.length > 2) {
          var new_accidential = MyNotes[1];
        } else {
          var new_accidential = "n";
        }

        var new_note = new_key.concat("/", new_octave);
        return [new_note, new_accidential];
      }

      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          width = _this$props.width,
          height = _this$props.height,
          notes = _this$props.notes;
      var padding = 30;
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(width + padding, height);
      var vf = new VF.Factory({
        renderer: renderer
      }); //var system = vf.System(renderer.getContext())//.setContext(renderer.getContext())
      //var context = renderer.getContext();
      //var stave = new VF.Stave(padding, 30, width)
      //var firstClef = 'treble'
      //stave.addClef(firstClef)
      //stave.setContext(context).draw();

      var stave = vf.Stave(padding, 30, width).addTrebleGlyph().setWidth(500);
      var note_list = [];
      var lines = []; //var voice=[]
      //var voice = new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2);

      for (var i = 0; i < notes.length; i++) {
        var note = separate(notes[i]);
        var newClef = 'treble'; //var new_note = new VF.StaveNote({clef: newClef, keys: [note[0]], duration: "q"})
        //new_note.addAccidental(0, new VF.Accidental(note[1]))
        //note_list.push(new_note)

        note_list.push(vf.StaveNote({
          keys: [note[0]],
          duration: '4',
          clef: newClef
        }).addAccidental(0, new VF.Accidental(note[1])));
      } //voice.addTickables(note_list);


      var voices = vf.Voice().setMode(2).addTickables(note_list);

      for (var i = 1; i < notes.length; i++) {
        //var line = new VF.StaveLine({from: note_list[i-1], to: note_list[i], first_indices: [0],
        //    last_indices: [0],})
        //line.setNotes({first_note: notes[i-1], last_note: notes[i]})
        lines.push(vf.StaveLine({
          from: note_list[i - 1],
          to: note_list[i],
          first_indices: [0],
          last_indices: [0]
        }));
      } //var formatter = new VF.Formatter().joinVoices([voice]).format([voice], width-padding);


      var formatter = new VF.Formatter().joinVoices([voices]).format([voices], width - padding); //.formatToStave([voices], stave);

      vf.draw(); //voice.draw(context, stave);

      this.refs.outer5.appendChild(svgContainer);
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

      this.setupScore();
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
          width = _this$props2.width,
          height = _this$props2.height,
          notes = _this$props2.notes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        ref: "outer5",
        style: {
          border: "none",
          padding: 0,
          borderRadius: 0,
          display: "inline-block"
        }
      });
    }
  }]);

  return Range;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Range.defaultProps = {};
Range.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  notes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUmFuZ2UuanMiXSwibmFtZXMiOlsiVkYiLCJWZXgiLCJGbG93IiwiUmFuZ2UiLCJwcm9wcyIsIm5vdGVzIiwidGFyZ2V0IiwiaW5zdHJ1bWVudHMiLCJyZW5kZXJlciIsImNvbnRleHQiLCJzdGF0ZSIsIngiLCJ5Iiwic2VwYXJhdGUiLCJNeU5vdGVzIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJsZW5ndGgiLCJuZXdfYWNjaWRlbnRpYWwiLCJuZXdfbm90ZSIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiUmVuZGVyZXIiLCJCYWNrZW5kcyIsIlNWRyIsInJlc2l6ZSIsInZmIiwiRmFjdG9yeSIsInN0YXZlIiwiU3RhdmUiLCJhZGRUcmVibGVHbHlwaCIsInNldFdpZHRoIiwibm90ZV9saXN0IiwibGluZXMiLCJpIiwibm90ZSIsIm5ld0NsZWYiLCJwdXNoIiwiU3RhdmVOb3RlIiwia2V5cyIsImR1cmF0aW9uIiwiY2xlZiIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwidm9pY2VzIiwiVm9pY2UiLCJzZXRNb2RlIiwiYWRkVGlja2FibGVzIiwiU3RhdmVMaW5lIiwiZnJvbSIsInRvIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJkcmF3IiwicmVmcyIsIm91dGVyNSIsImFwcGVuZENoaWxkIiwic2V0dXBTY29yZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJvdXRlcjMiLCJoYXNDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXkiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MsK0NBQUcsQ0FBQ0MsSUFBZjs7SUFFcUJDLEs7Ozs7O0FBRWpCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVcsQ0FBWDtBQUNBLFVBQUtDLE1BQUwsR0FBWSxDQUFaO0FBQ0EsVUFBS0MsV0FBTCxHQUFpQixDQUFqQjtBQUNBLFVBQUtDLFFBQUwsR0FBYyxDQUFkO0FBQ0EsVUFBS0MsT0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsT0FBQyxFQUFFLENBRE07QUFFVEMsT0FBQyxFQUFFO0FBRk0sS0FBYjtBQVBlO0FBWWxCOzs7O2lDQUVZO0FBRVQsZUFBU0MsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFFdkIsWUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUFyQjtBQUNBLFlBQUlFLFVBQVUsR0FBR0YsT0FBTyxDQUFDQSxPQUFPLENBQUNHLE1BQVIsR0FBZSxDQUFoQixDQUF4Qjs7QUFDQSxZQUFJSCxPQUFPLENBQUNHLE1BQVIsR0FBZSxDQUFuQixFQUFxQjtBQUNqQixjQUFJQyxlQUFlLEdBQUdKLE9BQU8sQ0FBQyxDQUFELENBQTdCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsY0FBSUksZUFBZSxHQUFHLEdBQXRCO0FBQ0g7O0FBRUQsWUFBSUMsUUFBUSxHQUFHSixPQUFPLENBQUNLLE1BQVIsQ0FBZSxHQUFmLEVBQW1CSixVQUFuQixDQUFmO0FBRUEsZUFBTyxDQUFDRyxRQUFELEVBQVdELGVBQVgsQ0FBUDtBQUNIOztBQUVELFVBQU1HLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENB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QixDIiwiZmlsZSI6IjY0MzQ0NGUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubm90ZXM9MDtcclxuICAgICAgICB0aGlzLnRhcmdldD0wO1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudHM9MDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyPTA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0PTA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNldHVwU2NvcmUoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShNeU5vdGVzKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3X2tleSA9IE15Tm90ZXNbMF07XHJcbiAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlID0gTXlOb3Rlc1tNeU5vdGVzLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgaWYgKE15Tm90ZXMubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IE15Tm90ZXNbMV07IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3X25vdGUgPSBuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXdfbm90ZSwgbmV3X2FjY2lkZW50aWFsXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBub3Rlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMzA7XHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuICAgICAgICBcclxuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgrcGFkZGluZywgaGVpZ2h0KTtcclxuICAgICAgICB2YXIgdmYgPSBuZXcgVkYuRmFjdG9yeSh7cmVuZGVyZXI6IHJlbmRlcmVyfSk7XHJcbiAgICAgICAgLy92YXIgc3lzdGVtID0gdmYuU3lzdGVtKHJlbmRlcmVyLmdldENvbnRleHQoKSkvLy5zZXRDb250ZXh0KHJlbmRlcmVyLmdldENvbnRleHQoKSlcclxuXHJcbiAgICAgICAgLy92YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgICAvL3ZhciBzdGF2ZSA9IG5ldyBWRi5TdGF2ZShwYWRkaW5nLCAzMCwgd2lkdGgpXHJcbiAgICAgICAgLy92YXIgZmlyc3RDbGVmID0gJ3RyZWJsZSdcclxuICAgICAgICAvL3N0YXZlLmFkZENsZWYoZmlyc3RDbGVmKVxyXG4gICAgICAgIC8vc3RhdmUuc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcbiAgICAgICAgdmFyIHN0YXZlID0gdmYuU3RhdmUocGFkZGluZywgMzAsIHdpZHRoKS5hZGRUcmVibGVHbHlwaCgpLnNldFdpZHRoKDUwMCk7XHJcblxyXG4gICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICB2YXIgbGluZXMgPVtdXHJcbiAgICAgICAgLy92YXIgdm9pY2U9W11cclxuICAgICAgICAvL3ZhciB2b2ljZSA9IG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiA0LCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMik7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxub3Rlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdmFyIG5vdGUgPSBzZXBhcmF0ZShub3Rlc1tpXSlcclxuICAgICAgICAgICAgdmFyIG5ld0NsZWY9J3RyZWJsZSdcclxuICAgICAgICAgICAgLy92YXIgbmV3X25vdGUgPSBuZXcgVkYuU3RhdmVOb3RlKHtjbGVmOiBuZXdDbGVmLCBrZXlzOiBbbm90ZVswXV0sIGR1cmF0aW9uOiBcInFcIn0pXHJcbiAgICAgICAgICAgIC8vbmV3X25vdGUuYWRkQWNjaWRlbnRhbCgwLCBuZXcgVkYuQWNjaWRlbnRhbChub3RlWzFdKSlcclxuICAgICAgICAgICAgLy9ub3RlX2xpc3QucHVzaChuZXdfbm90ZSlcclxuICAgICAgICAgICAgbm90ZV9saXN0LnB1c2godmYuU3RhdmVOb3RlKHtrZXlzOiBbbm90ZVswXV0sIGR1cmF0aW9uOic0JywgY2xlZjogbmV3Q2xlZn0pLmFkZEFjY2lkZW50YWwoMCwgbmV3IFZGLkFjY2lkZW50YWwobm90ZVsxXSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL3ZvaWNlLmFkZFRpY2thYmxlcyhub3RlX2xpc3QpO1xyXG4gICAgICAgIHZhciB2b2ljZXMgPSB2Zi5Wb2ljZSgpLnNldE1vZGUoMikuYWRkVGlja2FibGVzKG5vdGVfbGlzdClcclxuICAgICAgICBmb3IodmFyIGk9MTtpPG5vdGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAvL3ZhciBsaW5lID0gbmV3IFZGLlN0YXZlTGluZSh7ZnJvbTogbm90ZV9saXN0W2ktMV0sIHRvOiBub3RlX2xpc3RbaV0sIGZpcnN0X2luZGljZXM6IFswXSxcclxuICAgICAgICAgICAgLy8gICAgbGFzdF9pbmRpY2VzOiBbMF0sfSlcclxuICAgICAgICAgICAgLy9saW5lLnNldE5vdGVzKHtmaXJzdF9ub3RlOiBub3Rlc1tpLTFdLCBsYXN0X25vdGU6IG5vdGVzW2ldfSlcclxuICAgICAgICAgICAgbGluZXMucHVzaCh2Zi5TdGF2ZUxpbmUoe2Zyb206IG5vdGVfbGlzdFtpLTFdLCB0bzogbm90ZV9saXN0W2ldLCBmaXJzdF9pbmRpY2VzOiBbMF0sXHJcbiAgICAgICAgICAgICAgICBsYXN0X2luZGljZXM6IFswXSx9KSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZV0pLmZvcm1hdChbdm9pY2VdLCB3aWR0aC1wYWRkaW5nKTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc10pLmZvcm1hdChbdm9pY2VzXSwgd2lkdGgtcGFkZGluZyk7Ly8uZm9ybWF0VG9TdGF2ZShbdm9pY2VzXSwgc3RhdmUpO1xyXG5cclxuICAgICAgICB2Zi5kcmF3KClcclxuICAgICAgICAvL3ZvaWNlLmRyYXcoY29udGV4dCwgc3RhdmUpO1xyXG4gICAgICAgIHRoaXMucmVmcy5vdXRlcjUuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5ub3RlcyAhPT0gcHJldlByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IHByZXZQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gcHJldlByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgLy9jb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmcy5vdXRlcjNcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHsgICBcclxuICAgICAgICBpZiAodGhpcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBuZXh0UHJvcHMubm90ZXNcclxuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IG5leHRQcm9wcy5pbnN0cnVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5leHRQcm9wcy50YXJnZXRcclxuXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLnByb3BzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy5wcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpO1xyXG59XHJcbiAgKi9cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBub3Rlc309dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD17aWR9IHJlZj1cIm91dGVyNVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9fSAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5SYW5nZS5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcblJhbmdlLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG5vdGVzOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var _testing_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testing.css */ "./src/lib/components/testing.css");
/* harmony import */ var _testing_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_testing_css__WEBPACK_IMPORTED_MODULE_3__);
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
    _this.onClick = {};
    _this.onHover = {};
    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Pianoroll, [{
    key: "setupScore",
    value: function setupScore() {
      function separate(MyNotes) {
        var note_list = [];
        var accidental_list = []; //for (var i=0; i<MyNotes.length; i++) {

        var entry = MyNotes; //If there is just one note, make it an array

        if (!Array.isArray(entry)) {
          entry = [entry];
        } //go through each note in chord
        // ToDo: Add color information to notes


        var chord_accidentials = [];
        var new_notes = [];

        for (var k = 0; k < entry.length; k++) {
          var new_key = entry[k][0];
          var new_octave = entry[k][entry[k].length - 1];

          if (entry[k].length > 2) {
            var new_accidential = entry[k][1];
          } else {
            var new_accidential = "n";
          } //make a string of notes


          new_notes.push(new_key.concat("/", new_octave)); //make an array of accidentials

          chord_accidentials.push(new_accidential);
        }

        note_list.push(new_notes);
        accidental_list.push(chord_accidentials); //  }

        return [note_list[0], accidental_list];
      }

      var svgContainer = document.createElement('div');
      var _this$props = this.props,
          id = _this$props.id,
          width = _this$props.width,
          height = _this$props.height,
          stave_spacing = _this$props.stave_spacing,
          stave_list = _this$props.stave_list,
          scale = _this$props.scale,
          bar_offset = _this$props.bar_offset;
      var padding = 100;
      var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
      renderer.resize(width + padding, height);
      var context = renderer.getContext();

      for (var bar = 0; bar < stave_list.length; bar++) {
        // if (bar===0){
        //     padding=100
        // } 
        //Create staves
        var staves = [];
        var stave_lines = [];

        for (var i = 0; i < stave_list[bar].length; i++) {
          staves.push(new VF.Stave(padding + bar * (width / stave_list.length), stave_spacing * (i + 1), width / stave_list.length));

          if (bar === 0) {
            staves[i].addClef(stave_list[bar][i].clef);
            staves[i].setText(stave_list[bar][i].name, VF.Modifier.Position.LEFT, {
              shift_x: -60
            });
          } else if (i == 0) {
            staves[i].setText(bar + 1 + bar_offset, VF.Modifier.Position.LEFT, {
              shift_y: -40,
              shift_x: 20
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
        var voices = []; //Go through all bars

        for (var k = 0; k < stave_list[bar].length; k++) {
          note_list.push([]);
          voices.push(new VF.Voice({
            num_beats: 4,
            beat_value: 4
          }).setMode(2)); //Go through all staves

          for (var i = 0; i < stave_list[bar][k].notes.length; i++) {
            var newClef = stave_list[bar][k].clef;
            var note_parts = separate(stave_list[bar][k].notes[i]);
            var prev_parts = [[[]], [[]]]; //Remember to add colors to notes somehow...

            var note_color = 'black';
            var color_list = stave_list[bar][k].colors; //If color property is defined, do something with colors...

            if (typeof color_list !== 'undefined') {
              note_color = color_list[i];
            }

            if (note_parts[0].length) {
              var addNote = new VF.StaveNote({
                clef: newClef,
                keys: note_parts[0],
                duration: "q"
              });
              addNote.setAttribute('id', '_' + bar + '_' + k + '_' + i);
              addNote.note_heads[0].setAttribute('id', 'b' + bar + 'i' + k + 'n' + i);
              console.log(addNote);
              addNote.setStyle({
                strokeStyle: 'none',
                fillStyle: note_color
              });
            } else {
              var addNote = new VF.GhostNote('q');
            } //Remember the previous part for check


            if (i > 0) {
              prev_parts = separate(stave_list[bar][k].notes[i - 1]);
            }

            for (var j = 0; j < note_parts[1][0].length; j++) {
              //Check if the note is the same as previous
              var same_note = note_parts[0][0] === prev_parts[0][0] && note_parts[0][0][0] === prev_parts[0][0][0];

              if (note_parts[1][0][j] !== 'n' && !same_note) {
                addNote.addAccidental(j, new VF.Accidental(note_parts[1][0][j]));
              }
            }

            note_list[k].push(addNote);

            if (i > 0 && same_note) {
              // && note_list[k][i-1] === note_list[k][i]){
              if (addNote.attrs.type !== 'GhostNote') {
                //Gotta do this to prevent errors
                addNote.setStyle({
                  strokeStyle: 'none',
                  fillStyle: 'none'
                });
                addNote.setLedgerLineStyle({
                  strokeStyle: 'none'
                });
                var staveline = new VF.StaveLine({
                  first_note: note_list[k][i - 1],
                  last_note: note_list[k][i],
                  first_indices: 0,
                  last_indices: 0
                });
                staveline.render_options.line_width = 3;
                staveline.render_options.color = note_color;
                staveline.render_options.padding_left = -8;
                staveline.render_options.padding_right = -14;
                stave_lines.push(staveline);
              }
            }
          }

          voices[k].addTickables(note_list[k]);
          var format_width = width / stave_list.length - 30;

          if (bar === 0) {
            format_width = format_width - 20;
          } //console.log(staves[k].setNoteStartX(k*width))


          var formatter = new VF.Formatter().joinVoices([voices[k]]).format([voices[k]], format_width); //voices[k].draw(context, staves[k]);
        } //var formatter = new VF.Formatter().joinVoices(voices).format(voices, 50);
        //var formatter = new VF.Formatter().format(voices, 100);


        for (var k = 0; k < stave_list[bar].length; k++) {
          voices[k].draw(context, staves[k]);
        }

        if (stave_lines) {
          for (var p = 0; p < stave_lines.length; p++) {
            if (typeof stave_lines[p] !== "undefined") {
              stave_lines[p].setContext(context);
              stave_lines[p].draw();
            }
          }
        }
      }

      context.scale(scale, scale);
      this.refs.outer3.appendChild(svgContainer);
      this.refs.outer3.addEventListener("mouseover", this.check.bind(this), false);
      this.refs.outer3.addEventListener("click", this.checkclick.bind(this), false);
      this.refs.outer3.addEventListener("mouseleave", this.cleardiv.bind(this), false); //console.log(this.refs.outer3)

      var div = document.createElement('div');
      div.setAttribute('id', 'pianoroll_tooltip');
      div.setAttribute('style', "position: relative; left: 0px; top: 0px;"); //console.log(div)

      this.refs.outer3.appendChild(div);
    }
  }, {
    key: "check",
    value: function check(event) {
      //if (!event.target.closest('.vf-stavenote')) {return;} 
      if (!event.target.parentElement.closest('.vf-stavenote')) {
        return;
      }

      var _this$props2 = this.props,
          setProps = _this$props2.setProps,
          scale = _this$props2.scale;
      var tt = document.getElementById('pianoroll_tooltip'); //console.log(event)

      /*
      var left = (event.pageX + tt.clientWidth + 10 < document.body.clientWidth)
      ? (event.pageX + 10 + "px")
      : (document.body.clientWidth + 5 - event.clientWidth + "px");
      var top = (event.pageY + tt.clientHeight + 10 < document.body.clientHeight)
      ? (event.pageY + 10 + "px")
      : (document.body.clientHeight + 5 - tt.clientHeight + "px");
      //console.log(event)
      left = event.offsetX+"px"
      top = (event.offsetY+30)+'px' 
      */

      var left = event.offsetX * scale - 35 + 'px';
      var top = event.offsetY * scale - 30 + 'px';
      tt.setAttribute('style', 'padding: 5px;border-width: 2px;border-radius:6px;border-color: black;border-style: solid;position: absolute; left: ' + left + ';' + 'top:' + top + '; background-color: #eed;');
      var msg = '';

      if (event.target.parentElement.className.baseVal === "vf-notehead") {
        //console.log(event.target.parentElement.parentElement.parentElement.id)
        msg = event.target.parentElement.parentElement.parentElement.id;
      } else {
        //console.log(event.target.parentElement.id)
        msg = event.target.parentElement.id;
      }

      var res = msg.split('_');
      var bar = parseInt(res[1]) + 1;
      var inst = parseInt(res[2]) + 1;
      var idx = parseInt(res[3]);
      tt.innerHTML = "bar: " + bar + " instrument: " + inst + " index: " + idx;
      if (setProps) setProps({
        onHover: {
          bar: bar,
          inst: inst,
          idx: idx
        }
      }); //this.note = parseInt(event.target.id)
      //console.log(event.target.id);
      //setProps({note: this.note})
      //console.log(this.note)
    }
  }, {
    key: "checkclick",
    value: function checkclick(event) {
      if (!event.target.parentElement.closest('.vf-stavenote')) {
        return;
      }

      var tt = document.getElementById('pianoroll_tooltip'); //tt.style.animation = '{padding: 2px;} 1s'

      tt.style.padding = '2px'; //console.log(tt)

      var setProps = this.props.setProps;
      var msg = '';

      if (event.target.parentElement.className.baseVal === "vf-notehead") {
        //console.log(event.target.parentElement.parentElement.parentElement.id)
        msg = event.target.parentElement.parentElement.parentElement.id;
      } else {
        //console.log(event.target.parentElement.id)
        msg = event.target.parentElement.id;
      }

      var res = msg.split('_');
      var bar = parseInt(res[1]) + 1;
      var inst = parseInt(res[2]) + 1;
      var idx = parseInt(res[3]); //console.log(msg)

      if (setProps) setProps({
        onClick: {
          bar: bar,
          inst: inst,
          idx: idx
        }
      });
    }
  }, {
    key: "cleardiv",
    value: function cleardiv(event) {
      var tt = document.getElementById('pianoroll_tooltip');
      tt.innerHTML = '';
      tt.setAttribute('style', 'display: none');
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
      var _this$props3 = this.props,
          id = _this$props3.id,
          width = _this$props3.width,
          height = _this$props3.height,
          stave_spacing = _this$props3.stave_spacing,
          stave_list = _this$props3.stave_list;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        ontouchstart: "",
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


Pianoroll.defaultProps = {
  scale: 1,
  bar_offset: 0
};
Pianoroll.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  stave_spacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  bar_offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onHover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
  * A Array containing object to hold bars as [[bar1],[bar2] etc..].
  * Bars containing staves as {clef:'string', name:'string', 'notes':[array or nested array of notenames], colors:[array that matches notes-array]}
  */
  stave_list: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwibm90ZXMiLCJ0YXJnZXQiLCJpbnN0cnVtZW50cyIsInJlbmRlcmVyIiwiY29udGV4dCIsIm9uQ2xpY2siLCJvbkhvdmVyIiwic3RhdGUiLCJ4IiwieSIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5vdGVfbGlzdCIsImFjY2lkZW50YWxfbGlzdCIsImVudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hvcmRfYWNjaWRlbnRpYWxzIiwibmV3X25vdGVzIiwiayIsImxlbmd0aCIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwicHVzaCIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic3RhdmVfbGlzdCIsInNjYWxlIiwiYmFyX29mZnNldCIsInBhZGRpbmciLCJSZW5kZXJlciIsIkJhY2tlbmRzIiwiU1ZHIiwicmVzaXplIiwiZ2V0Q29udGV4dCIsImJhciIsInN0YXZlcyIsInN0YXZlX2xpbmVzIiwiaSIsIlN0YXZlIiwiYWRkQ2xlZiIsImNsZWYiLCJzZXRUZXh0IiwibmFtZSIsIk1vZGlmaWVyIiwiUG9zaXRpb24iLCJMRUZUIiwic2hpZnRfeCIsInNoaWZ0X3kiLCJzZXRDb250ZXh0IiwiZHJhdyIsImNvbm5lY3RvciIsIlN0YXZlQ29ubmVjdG9yIiwic2V0VHlwZSIsInR5cGUiLCJTSU5HTEVfTEVGVCIsIkJSQUNLRVQiLCJ2b2ljZXMiLCJWb2ljZSIsIm51bV9iZWF0cyIsImJlYXRfdmFsdWUiLCJzZXRNb2RlIiwibmV3Q2xlZiIsIm5vdGVfcGFydHMiLCJwcmV2X3BhcnRzIiwibm90ZV9jb2xvciIsImNvbG9yX2xpc3QiLCJjb2xvcnMiLCJhZGROb3RlIiwiU3RhdmVOb3RlIiwia2V5cyIsImR1cmF0aW9uIiwic2V0QXR0cmlidXRlIiwibm90ZV9oZWFkcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdHlsZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiR2hvc3ROb3RlIiwiaiIsInNhbWVfbm90ZSIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwiYXR0cnMiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJzdGF2ZWxpbmUiLCJTdGF2ZUxpbmUiLCJmaXJzdF9ub3RlIiwibGFzdF9ub3RlIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsInJlbmRlcl9vcHRpb25zIiwibGluZV93aWR0aCIsImNvbG9yIiwicGFkZGluZ19sZWZ0IiwicGFkZGluZ19yaWdodCIsImFkZFRpY2thYmxlcyIsImZvcm1hdF93aWR0aCIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJwIiwicmVmcyIsIm91dGVyMyIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrIiwiYmluZCIsImNoZWNrY2xpY2siLCJjbGVhcmRpdiIsImRpdiIsImV2ZW50IiwicGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJzZXRQcm9wcyIsInR0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZWZ0Iiwib2Zmc2V0WCIsInRvcCIsIm9mZnNldFkiLCJtc2ciLCJjbGFzc05hbWUiLCJiYXNlVmFsIiwicmVzIiwic3BsaXQiLCJwYXJzZUludCIsImluc3QiLCJpZHgiLCJpbm5lckhUTUwiLCJzdHlsZSIsInNldHVwU2NvcmUiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIs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SCxpREFBUyxDQUFDRSxNQVZBO0FBV2xCMUgsZUFBYSxFQUFFd0gsaURBQVMsQ0FBQ0UsTUFYUDtBQVlsQnhILE9BQUssRUFBRXNILGlEQUFTLENBQUNFLE1BWkM7QUFhbEJ2SCxZQUFVLEVBQUVxSCxpREFBUyxDQUFDRSxNQWJKO0FBY2xCcEosU0FBTyxFQUFFa0osaURBQVMsQ0FBQ0csTUFkRDtBQWVsQnRKLFNBQU8sRUFBRW1KLGlEQUFTLENBQUNHLE1BZkQ7O0FBaUJkOzs7O0FBSUoxSCxZQUFVLEVBQUV1SCxpREFBUyxDQUFDSSxLQXJCSjs7QUFzQmxCOzs7O0FBSUFqQyxVQUFRLEVBQUU2QixpREFBUyxDQUFDSztBQTFCRixDQUF0QixDIiwiZmlsZSI6IjM3YzQwOTItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAnLi90ZXN0aW5nLmNzcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm9yb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm5vdGVzPTA7XHJcbiAgICAgICAgdGhpcy50YXJnZXQ9MDtcclxuICAgICAgICB0aGlzLmluc3RydW1lbnRzPTA7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcj0wO1xyXG4gICAgICAgIHRoaXMuY29udGV4dD0wO1xyXG4gICAgICAgIHRoaXMub25DbGljaz17fTtcclxuICAgICAgICB0aGlzLm9uSG92ZXI9e307XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNldHVwU2NvcmUoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXBhcmF0ZShNeU5vdGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICAgICAgdmFyIGFjY2lkZW50YWxfbGlzdD1bXVxyXG5cclxuICAgICAgICAgICAgLy9mb3IgKHZhciBpPTA7IGk8TXlOb3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSBNeU5vdGVzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vSWYgdGhlcmUgaXMganVzdCBvbmUgbm90ZSwgbWFrZSBpdCBhbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKXtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeT1bZW50cnldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vZ28gdGhyb3VnaCBlYWNoIG5vdGUgaW4gY2hvcmRcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IEFkZCBjb2xvciBpbmZvcm1hdGlvbiB0byBub3Rlc1xyXG4gICAgICAgICAgICAgICAgdmFyIGNob3JkX2FjY2lkZW50aWFscz1bXVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub3Rlcz1bXVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaz0wOyBrPGVudHJ5Lmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19rZXkgPSBlbnRyeVtrXVswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X29jdGF2ZSA9IGVudHJ5W2tdW2VudHJ5W2tdLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlba10ubGVuZ3RoPjIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gZW50cnlba11bMV07IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBcIm5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIGEgc3RyaW5nIG9mIG5vdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X25vdGVzLnB1c2gobmV3X2tleS5jb25jYXQoXCIvXCIsbmV3X29jdGF2ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtlIGFuIGFycmF5IG9mIGFjY2lkZW50aWFsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNob3JkX2FjY2lkZW50aWFscy5wdXNoKG5ld19hY2NpZGVudGlhbClcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKG5ld19ub3RlcylcclxuICAgICAgICAgICAgICAgICBhY2NpZGVudGFsX2xpc3QucHVzaChjaG9yZF9hY2NpZGVudGlhbHMpXHJcbiAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbm90ZV9saXN0WzBdLCBhY2NpZGVudGFsX2xpc3RdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB7aWQsIHdpZHRoLCBoZWlnaHQsIHN0YXZlX3NwYWNpbmcsIHN0YXZlX2xpc3QsIHNjYWxlLCBiYXJfb2Zmc2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAxMDA7XHJcblxyXG5cclxuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVkYuUmVuZGVyZXIoc3ZnQ29udGFpbmVyLCBWRi5SZW5kZXJlci5CYWNrZW5kcy5TVkcpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgrcGFkZGluZywgaGVpZ2h0KTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuICAgICAgIFxyXG4gICAgZm9yKHZhciBiYXI9MDsgYmFyPHN0YXZlX2xpc3QubGVuZ3RoOyBiYXIrKyl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAvLyAgICAgcGFkZGluZz0xMDBcclxuICAgICAgICAvLyB9IFxyXG4gICAgICAgIC8vQ3JlYXRlIHN0YXZlc1xyXG4gICAgICAgIHZhciBzdGF2ZXM9W11cclxuICAgICAgICB2YXIgc3RhdmVfbGluZXM9W11cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0YXZlcy5wdXNoKG5ldyBWRi5TdGF2ZShwYWRkaW5nK2Jhciood2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgpLCBzdGF2ZV9zcGFjaW5nKihpKzEpLCB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aCkpXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5hZGRDbGVmKHN0YXZlX2xpc3RbYmFyXVtpXS5jbGVmKVxyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLnNldFRleHQoc3RhdmVfbGlzdFtiYXJdW2ldLm5hbWUsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLkxFRlQsIHsgc2hpZnRfeDogLTYwIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoaT09MCl7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uc2V0VGV4dChiYXIrMStiYXJfb2Zmc2V0LCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5MRUZULCB7IHNoaWZ0X3k6IC00MCAsIHNoaWZ0X3g6IDIwfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdmVzW2ldLnNldENvbnRleHQoY29udGV4dCkuZHJhdygpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBWRi5TdGF2ZUNvbm5lY3RvcihzdGF2ZXNbMF0sIHN0YXZlc1tzdGF2ZXMubGVuZ3RoLTFdKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLlNJTkdMRV9MRUZUKTtcclxuICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIGlmKGJhcj09PTApe1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0VHlwZShWRi5TdGF2ZUNvbm5lY3Rvci50eXBlLkJSQUNLRVQpO1xyXG4gICAgICAgICAgICBjb25uZWN0b3Iuc2V0Q29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgIHZhciB2b2ljZXM9W11cclxuICAgICAgICBcclxuICAgICAgICAvL0dvIHRocm91Z2ggYWxsIGJhcnNcclxuICAgICAgICBmb3IodmFyIGsgPSAwOyBrPHN0YXZlX2xpc3RbYmFyXS5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgIG5vdGVfbGlzdC5wdXNoKFtdKVxyXG4gICAgICAgICAgICB2b2ljZXMucHVzaChuZXcgVkYuVm9pY2Uoe251bV9iZWF0czogNCwgIGJlYXRfdmFsdWU6IDR9KS5zZXRNb2RlKDIpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vR28gdGhyb3VnaCBhbGwgc3RhdmVzXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDbGVmID0gc3RhdmVfbGlzdFtiYXJdW2tdLmNsZWZcclxuICAgICAgICAgICAgICAgIHZhciBub3RlX3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ldKVxyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZfcGFydHMgPSBbW1tdXSxbW11dXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdG8gYWRkIGNvbG9ycyB0byBub3RlcyBzb21laG93Li4uXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9jb2xvciA9ICdibGFjaydcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvcl9saXN0PXN0YXZlX2xpc3RbYmFyXVtrXS5jb2xvcnNcclxuICAgICAgICAgICAgICAgIC8vSWYgY29sb3IgcHJvcGVydHkgaXMgZGVmaW5lZCwgZG8gc29tZXRoaW5nIHdpdGggY29sb3JzLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbG9yX2xpc3QgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBub3RlX2NvbG9yPWNvbG9yX2xpc3RbaV1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZV9wYXJ0c1swXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGROb3RlPW5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IG5ld0NsZWYsIGtleXM6IG5vdGVfcGFydHNbMF0sIGR1cmF0aW9uOiBcInFcIn0pXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ18nK2JhcisnXycraysnXycraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5ub3RlX2hlYWRzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAnYicrYmFyKydpJytrKyduJytpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGROb3RlKVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0U3R5bGUoe3N0cm9rZVN0eWxlOiAnbm9uZScsIGZpbGxTdHlsZTogbm90ZV9jb2xvcn0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGROb3RlID0gbmV3IFZGLkdob3N0Tm90ZSgncScpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdGhlIHByZXZpb3VzIHBhcnQgZm9yIGNoZWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaT4wKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ktMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7ajxub3RlX3BhcnRzWzFdWzBdLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlIG5vdGUgaXMgdGhlIHNhbWUgYXMgcHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZV9ub3RlID0gKG5vdGVfcGFydHNbMF1bMF09PT1wcmV2X3BhcnRzWzBdWzBdJiZub3RlX3BhcnRzWzBdWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXVswXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobm90ZV9wYXJ0c1sxXVswXVtqXSE9PSduJyAmJiAhc2FtZV9ub3RlKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLmFkZEFjY2lkZW50YWwoaiwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9wYXJ0c1sxXVswXVtqXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIG5vdGVfbGlzdFtrXS5wdXNoKGFkZE5vdGUpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGk+MCAmJiBzYW1lX25vdGUpeyAvLyAmJiBub3RlX2xpc3Rba11baS0xXSA9PT0gbm90ZV9saXN0W2tdW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihhZGROb3RlLmF0dHJzLnR5cGUhPT0nR2hvc3ROb3RlJyl7IC8vR290dGEgZG8gdGhpcyB0byBwcmV2ZW50IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnLCBmaWxsU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0TGVkZ2VyTGluZVN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXZlbGluZSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2ZpcnN0X25vdGU6IG5vdGVfbGlzdFtrXVtpLTFdLCBsYXN0X25vdGU6IG5vdGVfbGlzdFtrXVtpXSwgZmlyc3RfaW5kaWNlczogMCwgbGFzdF9pbmRpY2VzOjB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5saW5lX3dpZHRoID0gM1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5jb2xvciA9IG5vdGVfY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19sZWZ0ID0gLThcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19yaWdodCA9IC0xNFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzLnB1c2goc3RhdmVsaW5lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2b2ljZXNba10uYWRkVGlja2FibGVzKG5vdGVfbGlzdFtrXSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdF93aWR0aCA9IHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoLTMwXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIGZvcm1hdF93aWR0aD1mb3JtYXRfd2lkdGgtMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXZlc1trXS5zZXROb3RlU3RhcnRYKGsqd2lkdGgpKVxyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc1trXV0pLmZvcm1hdChbdm9pY2VzW2tdXSwgZm9ybWF0X3dpZHRoKTtcclxuICAgICAgICAgICAgLy92b2ljZXNba10uZHJhdyhjb250ZXh0LCBzdGF2ZXNba10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyh2b2ljZXMpLmZvcm1hdCh2b2ljZXMsIDUwKTtcclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuZm9ybWF0KHZvaWNlcywgMTAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF2ZV9saW5lcyl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHA9MDsgcDxzdGF2ZV9saW5lcy5sZW5ndGg7IHArKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHN0YXZlX2xpbmVzW3BdKSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXNbcF0uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzW3BdLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29udGV4dC5zY2FsZShzY2FsZSxzY2FsZSlcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jaGVja2NsaWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLmNsZWFyZGl2LmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlZnMub3V0ZXIzKVxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncGlhbm9yb2xsX3Rvb2x0aXAnKVxyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcInBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogMHB4OyB0b3A6IDBweDtcIilcclxuICAgIC8vY29uc29sZS5sb2coZGl2KVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBcclxuICAgICAgICAvL2lmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy52Zi1zdGF2ZW5vdGUnKSkge3JldHVybjt9IFxyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnLnZmLXN0YXZlbm90ZScpKSB7cmV0dXJuO30gXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzLCBzY2FsZX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIHR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIGxlZnQgPSAoZXZlbnQucGFnZVggKyB0dC5jbGllbnRXaWR0aCArIDEwIDwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aClcclxuICAgICAgICA/IChldmVudC5wYWdlWCArIDEwICsgXCJweFwiKVxyXG4gICAgICAgIDogKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKyA1IC0gZXZlbnQuY2xpZW50V2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgIHZhciB0b3AgPSAoZXZlbnQucGFnZVkgKyB0dC5jbGllbnRIZWlnaHQgKyAxMCA8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KVxyXG4gICAgICAgID8gKGV2ZW50LnBhZ2VZICsgMTAgKyBcInB4XCIpXHJcbiAgICAgICAgOiAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKyA1IC0gdHQuY2xpZW50SGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgIGxlZnQgPSBldmVudC5vZmZzZXRYK1wicHhcIlxyXG4gICAgICAgIHRvcCA9IChldmVudC5vZmZzZXRZKzMwKSsncHgnIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIGxlZnQgPSAoZXZlbnQub2Zmc2V0WCpzY2FsZS0zNSkrJ3B4JztcclxuICAgICAgICB2YXIgdG9wID0gKGV2ZW50Lm9mZnNldFkqc2NhbGUtMzApKydweCc7XHJcbiAgICAgICAgdHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFxyXG4gICAgICAgICdwYWRkaW5nOiA1cHg7Ym9yZGVyLXdpZHRoOiAycHg7Ym9yZGVyLXJhZGl1czo2cHg7Ym9yZGVyLWNvbG9yOiBibGFjaztib3JkZXItc3R5bGU6IHNvbGlkO3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogJytsZWZ0Kyc7JysndG9wOicrdG9wKyc7IGJhY2tncm91bmQtY29sb3I6ICNlZWQ7JylcclxuICAgICAgICB2YXIgbXNnID0gJyc7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsPT09XCJ2Zi1ub3RlaGVhZFwiKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXMgPSBtc2cuc3BsaXQoJ18nKTtcclxuICAgICAgICB2YXIgYmFyID0gcGFyc2VJbnQocmVzWzFdKSsxXHJcbiAgICAgICAgdmFyIGluc3QgPSBwYXJzZUludChyZXNbMl0pKzFcclxuICAgICAgICB2YXIgaWR4ID0gcGFyc2VJbnQocmVzWzNdKVxyXG4gICAgICAgIHR0LmlubmVySFRNTCA9IFwiYmFyOiBcIitiYXIrXCIgaW5zdHJ1bWVudDogXCIraW5zdCtcIiBpbmRleDogXCIraWR4XHJcblxyXG4gICAgICAgIGlmIChzZXRQcm9wcykgc2V0UHJvcHMoe29uSG92ZXI6IHtiYXI6IGJhciwgaW5zdDogaW5zdCwgaWR4OiBpZHh9fSlcclxuICAgICAgICAvL3RoaXMubm90ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pZCk7XHJcbiAgICAgICAgLy9zZXRQcm9wcyh7bm90ZTogdGhpcy5ub3RlfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90ZSlcclxuICAgIH1cclxuICAgIGNoZWNrY2xpY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJy52Zi1zdGF2ZW5vdGUnKSkge3JldHVybjt9IFxyXG4gICAgICAgIHZhciB0dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWFub3JvbGxfdG9vbHRpcCcpXHJcbiAgICAgICAgLy90dC5zdHlsZS5hbmltYXRpb24gPSAne3BhZGRpbmc6IDJweDt9IDFzJ1xyXG4gICAgICAgIHR0LnN0eWxlLnBhZGRpbmcgPSAnMnB4J1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codHQpXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgbXNnID0gJyc7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsPT09XCJ2Zi1ub3RlaGVhZFwiKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXMgPSBtc2cuc3BsaXQoJ18nKTtcclxuICAgICAgICB2YXIgYmFyID0gcGFyc2VJbnQocmVzWzFdKSsxXHJcbiAgICAgICAgdmFyIGluc3QgPSBwYXJzZUludChyZXNbMl0pKzFcclxuICAgICAgICB2YXIgaWR4ID0gcGFyc2VJbnQocmVzWzNdKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobXNnKVxyXG4gICAgICAgIGlmIChzZXRQcm9wcykgc2V0UHJvcHMoe29uQ2xpY2s6IHtiYXI6IGJhciwgaW5zdDogaW5zdCwgaWR4OiBpZHh9fSlcclxuICAgIH1cclxuICAgIGNsZWFyZGl2KGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgICAgICB0dC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvL2lmICh0aGlzLm5vdGVzICE9PSBwcmV2UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gcHJldlByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBwcmV2UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAvL2NvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyM1xyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKClcclxuICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykgeyAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5leHRQcm9wcy5ub3Rlc1xyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gbmV4dFByb3BzLmluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFByb3BzLnRhcmdldFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAqL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWQsIHdpZHRoLCBoZWlnaHQsIHN0YXZlX3NwYWNpbmcsIHN0YXZlX2xpc3R9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSBvbnRvdWNoc3RhcnQ9XCJcIiByZWY9XCJvdXRlcjNcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0gICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuUGlhbm9yb2xsLmRlZmF1bHRQcm9wcyA9IHtzY2FsZToxLCBiYXJfb2Zmc2V0OjB9O1xyXG5cclxuUGlhbm9yb2xsLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHN0YXZlX3NwYWNpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzY2FsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGJhcl9vZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvbkhvdmVyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiBBIEFycmF5IGNvbnRhaW5pbmcgb2JqZWN0IHRvIGhvbGQgYmFycyBhcyBbW2JhcjFdLFtiYXIyXSBldGMuLl0uXHJcbiAgICAgKiBCYXJzIGNvbnRhaW5pbmcgc3RhdmVzIGFzIHtjbGVmOidzdHJpbmcnLCBuYW1lOidzdHJpbmcnLCAnbm90ZXMnOlthcnJheSBvciBuZXN0ZWQgYXJyYXkgb2Ygbm90ZW5hbWVzXSwgY29sb3JzOlthcnJheSB0aGF0IG1hdGNoZXMgbm90ZXMtYXJyYXldfVxyXG4gICAgICovXHJcbiAgICBzdGF2ZV9saXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
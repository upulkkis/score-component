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
    _this.bar = 0;
    _this.inst = 0;
    _this.idx = 0;
    _this.note_index = 0;
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
      var note_index = 0; //Go through bars

      for (var bar = 0; bar < stave_list.length; bar++) {
        //Get overall note index by adding amount of notes in previous bar
        if (bar > 0) {
          note_index += stave_list[bar - 1][0].notes.length;
        } // if (bar===0){
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
        var voices = []; //Go through instruments

        for (var k = 0; k < stave_list[bar].length; k++) {
          note_list.push([]);
          voices.push(new VF.Voice({
            num_beats: 4,
            beat_value: 4
          }).setMode(2)); //Go through notes

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
              }); //addNote.note_heads[0].setAttribute('id', 'b'+bar+'i'+k+'n'+i);
              //console.log(addNote)

              addNote.setStyle({
                strokeStyle: 'none',
                fillStyle: note_color
              });
            } else {
              var addNote = new VF.GhostNote('q');
            } //Store note index information on svg id, note_index consist of number of previous notes + current note index:


            addNote.setAttribute('id', '_' + bar + '_' + k + '_' + i + '_' + (note_index + i)); //Remember the previous part for check

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
      div.setAttribute('id', 'pianoroll_tooltip'); //div.setAttribute('style', "position: relative; left: 0px; top: 0px;")
      //console.log(div)

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

      var left = event.offsetX - 50 + 'px';
      var left = event.clientX - 50 + 'px';
      var top = event.offsetY + 30 + 'px';
      tt.setAttribute('style', 'padding: 5px;color:black;border-width: 2px;border-radius:6px;border-color: black;border-style: solid;position: fixed; left: ' + left + ';' + 'top:' + top + '; background-color: #eed;');
      var msg = '';

      if (event.target.parentElement.className.baseVal === "vf-notehead") {
        //console.log(event.target.parentElement.parentElement.parentElement.id)
        msg = event.target.parentElement.parentElement.parentElement.id;
      } else {
        //console.log(event.target.parentElement.id)
        msg = event.target.parentElement.id;
      }

      var res = msg.split('_');
      this.bar = parseInt(res[1]) + 1;
      this.inst = parseInt(res[2]) + 1;
      this.idx = parseInt(res[3]);
      this.note_index = parseInt(res[4]);
      tt.innerHTML = "bar: " + this.bar + " instrument: " + this.inst + " index: " + this.idx;
      if (setProps) setProps({
        onHover: {
          bar: this.bar,
          inst: this.inst,
          idx: this.idx,
          note_index: this.note_index
        }
      }); //this.note = parseInt(event.target.id)
      //console.log(event.target.id);
      //setProps({note: this.note})
      //console.log(this.note)
    }
  }, {
    key: "checkclick",
    value: function checkclick(event) {
      //if (!event.target.parentElement.closest('.vf-stavenote')) {return;} 
      var tt = document.getElementById('pianoroll_tooltip'); //tt.style.animation = '{padding: 2px;} 1s'

      tt.style.padding = '2px'; //console.log(tt)

      var setProps = this.props.setProps;
      /*
      var msg = '';
      if (event.target.parentElement.className.baseVal==="vf-notehead"){
          //console.log(event.target.parentElement.parentElement.parentElement.id)
          msg = event.target.parentElement.parentElement.parentElement.id
      } else {
          //console.log(event.target.parentElement.id)
          msg = event.target.parentElement.id
      }
      var res = msg.split('_');
      var bar = parseInt(res[1])+1
      var inst = parseInt(res[2])+1
      var idx = parseInt(res[3])
      */
      //console.log(msg)

      if (setProps) setProps({
        onClick: {
          bar: this.bar,
          inst: this.inst,
          idx: this.idx,
          note_index: this.note_index
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwiYmFyIiwiaW5zdCIsImlkeCIsIm5vdGVfaW5kZXgiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwicmVuZGVyZXIiLCJjb250ZXh0Iiwib25DbGljayIsIm9uSG92ZXIiLCJzdGF0ZSIsIngiLCJ5Iiwic2VwYXJhdGUiLCJNeU5vdGVzIiwibm90ZV9saXN0IiwiYWNjaWRlbnRhbF9saXN0IiwiZW50cnkiLCJBcnJheSIsImlzQXJyYXkiLCJjaG9yZF9hY2NpZGVudGlhbHMiLCJuZXdfbm90ZXMiLCJrIiwibGVuZ3RoIiwibmV3X2tleSIsIm5ld19vY3RhdmUiLCJuZXdfYWNjaWRlbnRpYWwiLCJwdXNoIiwiY29uY2F0Iiwic3ZnQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsInN0YXZlX3NwYWNpbmciLCJzdGF2ZV9saXN0Iiwic2NhbGUiLCJiYXJfb2Zmc2V0IiwicGFkZGluZyIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJnZXRDb250ZXh0Iiwic3RhdmVzIiwic3RhdmVfbGluZXMiLCJpIiwiU3RhdmUiLCJhZGRDbGVmIiwiY2xlZiIsInNldFRleHQiLCJuYW1lIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIkxFRlQiLCJzaGlmdF94Iiwic2hpZnRfeSIsInNldENvbnRleHQiLCJkcmF3IiwiY29ubmVjdG9yIiwiU3RhdmVDb25uZWN0b3IiLCJzZXRUeXBlIiwidHlwZSIsIlNJTkdMRV9MRUZUIiwiQlJBQ0tFVCIsInZvaWNlcyIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsInNldE1vZGUiLCJuZXdDbGVmIiwibm90ZV9wYXJ0cyIsInByZXZfcGFydHMiLCJub3RlX2NvbG9yIiwiY29sb3JfbGlzdCIsImNvbG9ycyIsImFkZE5vdGUiLCJTdGF2ZU5vdGUiLCJrZXlzIiwiZHVyYXRpb24iLCJzZXRTdHlsZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiR2hvc3ROb3RlIiwic2V0QXR0cmlidXRlIiwiaiIsInNhbWVfbm90ZSIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwiYXR0cnMiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJzdGF2ZWxpbmUiLCJTdGF2ZUxpbmUiLCJmaXJzdF9ub3RlIiwibGFzdF9ub3RlIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsInJlbmRlcl9vcHRpb25zIiwibGluZV93aWR0aCIsImNvbG9yIiwicGFkZGluZ19sZWZ0IiwicGFkZGluZ19yaWdodCIsImFkZFRpY2thYmxlcyIsImZvcm1hdF93aWR0aCIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJwIiwicmVmcyIsIm91dGVyMyIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrIiwiYmluZCIsImNoZWNrY2xpY2siLCJjbGVhcmRpdiIsImRpdiIsImV2ZW50IiwicGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJzZXRQcm9wcyIsInR0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZWZ0Iiwib2Zmc2V0WCIsImNsaWVudFgiLCJ0b3AiLCJvZmZzZXRZIiwibXNnIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsInJlcyIsInNwbGl0IiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsInNldHVwU2NvcmUiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJl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QmxCOzs7O0FBSUFoQyxVQUFRLEVBQUU0QixpREFBUyxDQUFDSztBQTFCRixDQUF0QixDIiwiZmlsZSI6Ijg2MGZkN2YtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZleCBmcm9tICd2ZXhmbG93JztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAnLi90ZXN0aW5nLmNzcyc7XHJcblxyXG5jb25zdCBWRiA9IFZleC5GbG93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm9yb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmJhcj0wO1xyXG4gICAgICAgIHRoaXMuaW5zdD0wO1xyXG4gICAgICAgIHRoaXMuaWR4PTA7XHJcbiAgICAgICAgdGhpcy5ub3RlX2luZGV4PTA7XHJcbiAgICAgICAgdGhpcy5ub3Rlcz0wO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0PTA7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50cz0wO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXI9MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQ9MDtcclxuICAgICAgICB0aGlzLm9uQ2xpY2s9e307XHJcbiAgICAgICAgdGhpcy5vbkhvdmVyPXt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzZXR1cFNjb3JlKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2VwYXJhdGUoTXlOb3Rlcykge1xyXG4gICAgICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgICAgIHZhciBhY2NpZGVudGFsX2xpc3Q9W11cclxuXHJcbiAgICAgICAgICAgIC8vZm9yICh2YXIgaT0wOyBpPE15Tm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gTXlOb3RlcztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGlzIGp1c3Qgb25lIG5vdGUsIG1ha2UgaXQgYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnk9W2VudHJ5XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBub3RlIGluIGNob3JkXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBBZGQgY29sb3IgaW5mb3JtYXRpb24gdG8gbm90ZXNcclxuICAgICAgICAgICAgICAgIHZhciBjaG9yZF9hY2NpZGVudGlhbHM9W11cclxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm90ZXM9W11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGs9MDsgazxlbnRyeS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfa2V5ID0gZW50cnlba11bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19vY3RhdmUgPSBlbnRyeVtrXVtlbnRyeVtrXS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5W2tdLmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IGVudHJ5W2tdWzFdOyBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2FjY2lkZW50aWFsID0gXCJuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhIHN0cmluZyBvZiBub3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19ub3Rlcy5wdXNoKG5ld19rZXkuY29uY2F0KFwiL1wiLG5ld19vY3RhdmUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBhbiBhcnJheSBvZiBhY2NpZGVudGlhbHNcclxuICAgICAgICAgICAgICAgICAgICBjaG9yZF9hY2NpZGVudGlhbHMucHVzaChuZXdfYWNjaWRlbnRpYWwpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICBub3RlX2xpc3QucHVzaChuZXdfbm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgYWNjaWRlbnRhbF9saXN0LnB1c2goY2hvcmRfYWNjaWRlbnRpYWxzKVxyXG4gICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gW25vdGVfbGlzdFswXSwgYWNjaWRlbnRhbF9saXN0XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBzdGF2ZV9zcGFjaW5nLCBzdGF2ZV9saXN0LCBzY2FsZSwgYmFyX29mZnNldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID0gMTAwO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFZGLlJlbmRlcmVyKHN2Z0NvbnRhaW5lciwgVkYuUmVuZGVyZXIuQmFja2VuZHMuU1ZHKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoK3BhZGRpbmcsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICB2YXIgbm90ZV9pbmRleCA9IDA7XHJcbiAgICAvL0dvIHRocm91Z2ggYmFyc1xyXG4gICAgZm9yKHZhciBiYXI9MDsgYmFyPHN0YXZlX2xpc3QubGVuZ3RoOyBiYXIrKyl7XHJcblxyXG4gICAgICAgIC8vR2V0IG92ZXJhbGwgbm90ZSBpbmRleCBieSBhZGRpbmcgYW1vdW50IG9mIG5vdGVzIGluIHByZXZpb3VzIGJhclxyXG4gICAgICAgIGlmIChiYXI+MCl7XHJcbiAgICAgICAgICAgIG5vdGVfaW5kZXggKz0gc3RhdmVfbGlzdFtiYXItMV1bMF0ubm90ZXMubGVuZ3RoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc9MTAwXHJcbiAgICAgICAgLy8gfSBcclxuICAgICAgICAvL0NyZWF0ZSBzdGF2ZXNcclxuICAgICAgICB2YXIgc3RhdmVzPVtdXHJcbiAgICAgICAgdmFyIHN0YXZlX2xpbmVzPVtdXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGF2ZXMucHVzaChuZXcgVkYuU3RhdmUocGFkZGluZytiYXIqKHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSwgc3RhdmVfc3BhY2luZyooaSsxKSwgd2lkdGgvc3RhdmVfbGlzdC5sZW5ndGgpKVxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uYWRkQ2xlZihzdGF2ZV9saXN0W2Jhcl1baV0uY2xlZilcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRUZXh0KHN0YXZlX2xpc3RbYmFyXVtpXS5uYW1lLCBWRi5Nb2RpZmllci5Qb3NpdGlvbi5MRUZULCB7IHNoaWZ0X3g6IC02MCB9KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGk9PTApe1xyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLnNldFRleHQoYmFyKzErYmFyX29mZnNldCwgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF95OiAtNDAgLCBzaGlmdF94OiAyMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRDb250ZXh0KGNvbnRleHQpLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25uZWN0b3IgPSBuZXcgVkYuU3RhdmVDb25uZWN0b3Ioc3RhdmVzWzBdLCBzdGF2ZXNbc3RhdmVzLmxlbmd0aC0xXSk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5TSU5HTEVfTEVGVCk7XHJcbiAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgY29ubmVjdG9yLmRyYXcoKTtcclxuICAgICAgICBpZihiYXI9PT0wKXtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldFR5cGUoVkYuU3RhdmVDb25uZWN0b3IudHlwZS5CUkFDS0VUKTtcclxuICAgICAgICAgICAgY29ubmVjdG9yLnNldENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBub3RlX2xpc3Q9W11cclxuICAgICAgICB2YXIgdm9pY2VzPVtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9HbyB0aHJvdWdoIGluc3RydW1lbnRzXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBub3RlX2xpc3QucHVzaChbXSlcclxuICAgICAgICAgICAgdm9pY2VzLnB1c2gobmV3IFZGLlZvaWNlKHtudW1fYmVhdHM6IDQsICBiZWF0X3ZhbHVlOiA0fSkuc2V0TW9kZSgyKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0dvIHRocm91Z2ggbm90ZXNcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NsZWYgPSBzdGF2ZV9saXN0W2Jhcl1ba10uY2xlZlxyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGVfcGFydHMgPSBzZXBhcmF0ZShzdGF2ZV9saXN0W2Jhcl1ba10ubm90ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldl9wYXJ0cyA9IFtbW11dLFtbXV1dXHJcblxyXG4gICAgICAgICAgICAgICAgLy9SZW1lbWJlciB0byBhZGQgY29sb3JzIHRvIG5vdGVzIHNvbWVob3cuLi5cclxuICAgICAgICAgICAgICAgIHZhciBub3RlX2NvbG9yID0gJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpc3Q9c3RhdmVfbGlzdFtiYXJdW2tdLmNvbG9yc1xyXG4gICAgICAgICAgICAgICAgLy9JZiBjb2xvciBwcm9wZXJ0eSBpcyBkZWZpbmVkLCBkbyBzb21ldGhpbmcgd2l0aCBjb2xvcnMuLi5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29sb3JfbGlzdCAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVfY29sb3I9Y29sb3JfbGlzdFtpXVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub3RlX3BhcnRzWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZE5vdGU9bmV3IFZGLlN0YXZlTm90ZSh7Y2xlZjogbmV3Q2xlZiwga2V5czogbm90ZV9wYXJ0c1swXSwgZHVyYXRpb246IFwicVwifSkgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9hZGROb3RlLm5vdGVfaGVhZHNbMF0uc2V0QXR0cmlidXRlKCdpZCcsICdiJytiYXIrJ2knK2srJ24nK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYWRkTm90ZSlcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnLCBmaWxsU3R5bGU6IG5vdGVfY29sb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkTm90ZSA9IG5ldyBWRi5HaG9zdE5vdGUoJ3EnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU3RvcmUgbm90ZSBpbmRleCBpbmZvcm1hdGlvbiBvbiBzdmcgaWQsIG5vdGVfaW5kZXggY29uc2lzdCBvZiBudW1iZXIgb2YgcHJldmlvdXMgbm90ZXMgKyBjdXJyZW50IG5vdGUgaW5kZXg6XHJcbiAgICAgICAgICAgICAgICBhZGROb3RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnXycrYmFyKydfJytrKydfJytpKydfJysobm90ZV9pbmRleCtpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdGhlIHByZXZpb3VzIHBhcnQgZm9yIGNoZWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaT4wKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ktMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7ajxub3RlX3BhcnRzWzFdWzBdLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlIG5vdGUgaXMgdGhlIHNhbWUgYXMgcHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZV9ub3RlID0gKG5vdGVfcGFydHNbMF1bMF09PT1wcmV2X3BhcnRzWzBdWzBdJiZub3RlX3BhcnRzWzBdWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXVswXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobm90ZV9wYXJ0c1sxXVswXVtqXSE9PSduJyAmJiAhc2FtZV9ub3RlKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGROb3RlLmFkZEFjY2lkZW50YWwoaiwgbmV3IFZGLkFjY2lkZW50YWwobm90ZV9wYXJ0c1sxXVswXVtqXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIG5vdGVfbGlzdFtrXS5wdXNoKGFkZE5vdGUpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGk+MCAmJiBzYW1lX25vdGUpeyAvLyAmJiBub3RlX2xpc3Rba11baS0xXSA9PT0gbm90ZV9saXN0W2tdW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihhZGROb3RlLmF0dHJzLnR5cGUhPT0nR2hvc3ROb3RlJyl7IC8vR290dGEgZG8gdGhpcyB0byBwcmV2ZW50IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldFN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnLCBmaWxsU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5vdGUuc2V0TGVkZ2VyTGluZVN0eWxlKHtzdHJva2VTdHlsZTogJ25vbmUnfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXZlbGluZSA9IG5ldyBWRi5TdGF2ZUxpbmUoe2ZpcnN0X25vdGU6IG5vdGVfbGlzdFtrXVtpLTFdLCBsYXN0X25vdGU6IG5vdGVfbGlzdFtrXVtpXSwgZmlyc3RfaW5kaWNlczogMCwgbGFzdF9pbmRpY2VzOjB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5saW5lX3dpZHRoID0gM1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlbGluZS5yZW5kZXJfb3B0aW9ucy5jb2xvciA9IG5vdGVfY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19sZWZ0ID0gLThcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMucGFkZGluZ19yaWdodCA9IC0xNFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzLnB1c2goc3RhdmVsaW5lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2b2ljZXNba10uYWRkVGlja2FibGVzKG5vdGVfbGlzdFtrXSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdF93aWR0aCA9IHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoLTMwXHJcbiAgICAgICAgICAgIGlmIChiYXI9PT0wKXtcclxuICAgICAgICAgICAgICAgIGZvcm1hdF93aWR0aD1mb3JtYXRfd2lkdGgtMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXZlc1trXS5zZXROb3RlU3RhcnRYKGsqd2lkdGgpKVxyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXMoW3ZvaWNlc1trXV0pLmZvcm1hdChbdm9pY2VzW2tdXSwgZm9ybWF0X3dpZHRoKTtcclxuICAgICAgICAgICAgLy92b2ljZXNba10uZHJhdyhjb250ZXh0LCBzdGF2ZXNba10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuam9pblZvaWNlcyh2b2ljZXMpLmZvcm1hdCh2b2ljZXMsIDUwKTtcclxuICAgICAgICAvL3ZhciBmb3JtYXR0ZXIgPSBuZXcgVkYuRm9ybWF0dGVyKCkuZm9ybWF0KHZvaWNlcywgMTAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBrID0gMDsgazxzdGF2ZV9saXN0W2Jhcl0ubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF2ZV9saW5lcyl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHA9MDsgcDxzdGF2ZV9saW5lcy5sZW5ndGg7IHArKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHN0YXZlX2xpbmVzW3BdKSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVfbGluZXNbcF0uc2V0Q29udGV4dChjb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzW3BdLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29udGV4dC5zY2FsZShzY2FsZSxzY2FsZSlcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmNoZWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jaGVja2NsaWNrLmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLmNsZWFyZGl2LmJpbmQodGhpcyksIGZhbHNlKVxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlZnMub3V0ZXIzKVxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncGlhbm9yb2xsX3Rvb2x0aXAnKVxyXG4gICAgLy9kaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwicG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAwcHg7IHRvcDogMHB4O1wiKVxyXG4gICAgLy9jb25zb2xlLmxvZyhkaXYpXHJcbiAgICB0aGlzLnJlZnMub3V0ZXIzLmFwcGVuZENoaWxkKGRpdilcclxuICAgIH1cclxuXHJcbiAgICBjaGVjayhldmVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgnLnZmLXN0YXZlbm90ZScpKSB7cmV0dXJuO30gXHJcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbG9zZXN0KCcudmYtc3RhdmVub3RlJykpIHtyZXR1cm47fSBcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHMsIHNjYWxlfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgdHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlhbm9yb2xsX3Rvb2x0aXAnKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgbGVmdCA9IChldmVudC5wYWdlWCArIHR0LmNsaWVudFdpZHRoICsgMTAgPCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKVxyXG4gICAgICAgID8gKGV2ZW50LnBhZ2VYICsgMTAgKyBcInB4XCIpXHJcbiAgICAgICAgOiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCArIDUgLSBldmVudC5jbGllbnRXaWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgdmFyIHRvcCA9IChldmVudC5wYWdlWSArIHR0LmNsaWVudEhlaWdodCArIDEwIDwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpXHJcbiAgICAgICAgPyAoZXZlbnQucGFnZVkgKyAxMCArIFwicHhcIilcclxuICAgICAgICA6IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCArIDUgLSB0dC5jbGllbnRIZWlnaHQgKyBcInB4XCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgbGVmdCA9IGV2ZW50Lm9mZnNldFgrXCJweFwiXHJcbiAgICAgICAgdG9wID0gKGV2ZW50Lm9mZnNldFkrMzApKydweCcgXHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgbGVmdCA9IChldmVudC5vZmZzZXRYLTUwKSsncHgnO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gKGV2ZW50LmNsaWVudFgtNTApKydweCc7XHJcbiAgICAgICAgdmFyIHRvcCA9IChldmVudC5vZmZzZXRZKzMwKSsncHgnO1xyXG4gICAgICAgIHR0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcclxuICAgICAgICAncGFkZGluZzogNXB4O2NvbG9yOmJsYWNrO2JvcmRlci13aWR0aDogMnB4O2JvcmRlci1yYWRpdXM6NnB4O2JvcmRlci1jb2xvcjogYmxhY2s7Ym9yZGVyLXN0eWxlOiBzb2xpZDtwb3NpdGlvbjogZml4ZWQ7IGxlZnQ6ICcrbGVmdCsnOycrJ3RvcDonK3RvcCsnOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVkOycpXHJcbiAgICAgICAgdmFyIG1zZyA9ICcnO1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbD09PVwidmYtbm90ZWhlYWRcIil7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKVxyXG4gICAgICAgICAgICBtc2cgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxyXG4gICAgICAgICAgICBtc2cgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzID0gbXNnLnNwbGl0KCdfJyk7XHJcbiAgICAgICAgdGhpcy5iYXIgPSBwYXJzZUludChyZXNbMV0pKzFcclxuICAgICAgICB0aGlzLmluc3QgPSBwYXJzZUludChyZXNbMl0pKzFcclxuICAgICAgICB0aGlzLmlkeCA9IHBhcnNlSW50KHJlc1szXSlcclxuICAgICAgICB0aGlzLm5vdGVfaW5kZXggPSBwYXJzZUludChyZXNbNF0pXHJcbiAgICAgICAgdHQuaW5uZXJIVE1MID0gXCJiYXI6IFwiK3RoaXMuYmFyK1wiIGluc3RydW1lbnQ6IFwiK3RoaXMuaW5zdCtcIiBpbmRleDogXCIrdGhpcy5pZHhcclxuXHJcbiAgICAgICAgaWYgKHNldFByb3BzKSBzZXRQcm9wcyh7b25Ib3Zlcjoge2JhcjogdGhpcy5iYXIsIGluc3Q6IHRoaXMuaW5zdCwgaWR4OiB0aGlzLmlkeCwgbm90ZV9pbmRleDogdGhpcy5ub3RlX2luZGV4fX0pXHJcbiAgICAgICAgLy90aGlzLm5vdGUgPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQuaWQpO1xyXG4gICAgICAgIC8vc2V0UHJvcHMoe25vdGU6IHRoaXMubm90ZX0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vdGUpXHJcbiAgICB9XHJcbiAgICBjaGVja2NsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgLy9pZiAoIWV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJy52Zi1zdGF2ZW5vdGUnKSkge3JldHVybjt9IFxyXG4gICAgICAgIHZhciB0dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWFub3JvbGxfdG9vbHRpcCcpXHJcbiAgICAgICAgLy90dC5zdHlsZS5hbmltYXRpb24gPSAne3BhZGRpbmc6IDJweDt9IDFzJ1xyXG4gICAgICAgIHR0LnN0eWxlLnBhZGRpbmcgPSAnMnB4J1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codHQpXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICAvKlxyXG4gICAgICAgIHZhciBtc2cgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWw9PT1cInZmLW5vdGVoZWFkXCIpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZClcclxuICAgICAgICAgICAgbXNnID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZClcclxuICAgICAgICAgICAgbXNnID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IG1zZy5zcGxpdCgnXycpO1xyXG4gICAgICAgIHZhciBiYXIgPSBwYXJzZUludChyZXNbMV0pKzFcclxuICAgICAgICB2YXIgaW5zdCA9IHBhcnNlSW50KHJlc1syXSkrMVxyXG4gICAgICAgIHZhciBpZHggPSBwYXJzZUludChyZXNbM10pXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1zZylcclxuICAgICAgICBpZiAoc2V0UHJvcHMpIHNldFByb3BzKHtvbkNsaWNrOiB7YmFyOiB0aGlzLmJhciwgaW5zdDogdGhpcy5pbnN0LCBpZHg6IHRoaXMuaWR4LCBub3RlX2luZGV4OiB0aGlzLm5vdGVfaW5kZXh9fSlcclxuICAgIH1cclxuICAgIGNsZWFyZGl2KGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgICAgICB0dC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvL2lmICh0aGlzLm5vdGVzICE9PSBwcmV2UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gcHJldlByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBwcmV2UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAvL2NvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWZzLm91dGVyM1xyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFNjb3JlKClcclxuICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykgeyAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5vdGVzICE9PSBuZXh0UHJvcHMubm90ZXMgfHwgdGhpcy5pbnN0cnVtZW50cyAhPT0gbmV4dFByb3BzLmluc3RydW1lbnRzIHx8IHRoaXMudGFyZ2V0ICE9PSBuZXh0UHJvcHMudGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5leHRQcm9wcy5ub3Rlc1xyXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gbmV4dFByb3BzLmluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dFByb3BzLnRhcmdldFxyXG5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMucHJvcHMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCk7XHJcbn1cclxuICAqL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWQsIHdpZHRoLCBoZWlnaHQsIHN0YXZlX3NwYWNpbmcsIHN0YXZlX2xpc3R9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSBvbnRvdWNoc3RhcnQ9XCJcIiByZWY9XCJvdXRlcjNcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfX0gICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuUGlhbm9yb2xsLmRlZmF1bHRQcm9wcyA9IHtzY2FsZToxLCBiYXJfb2Zmc2V0OjB9O1xyXG5cclxuUGlhbm9yb2xsLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHN0YXZlX3NwYWNpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzY2FsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGJhcl9vZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvbkhvdmVyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiBBIEFycmF5IGNvbnRhaW5pbmcgb2JqZWN0IHRvIGhvbGQgYmFycyBhcyBbW2JhcjFdLFtiYXIyXSBldGMuLl0uXHJcbiAgICAgKiBCYXJzIGNvbnRhaW5pbmcgc3RhdmVzIGFzIHtjbGVmOidzdHJpbmcnLCBuYW1lOidzdHJpbmcnLCAnbm90ZXMnOlthcnJheSBvciBuZXN0ZWQgYXJyYXkgb2Ygbm90ZW5hbWVzXSwgY29sb3JzOlthcnJheSB0aGF0IG1hdGNoZXMgbm90ZXMtYXJyYXldfVxyXG4gICAgICovXHJcbiAgICBzdGF2ZV9saXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
    _this.stave_list = [];
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
      var padding = 100; //this.stave_list = stave_list;

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
      //var left = (event.offsetX-50)+'px';

      var left = event.pageX - 50 + 'px';
      var top = event.offsetY + 30 + 'px';
      tt.setAttribute('style', 'padding: 5px;color:black;border-width: 2px;border-radius:6px;border-color: black;border-style: solid;position: absolute; left: ' + left + ';' + 'top:' + top + '; background-color: #eed;');
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
      //Compare stringified stave_lists and update if changes:
      if (JSON.stringify(this.stave_list).localeCompare(JSON.stringify(prevProps.stave_list)) !== 0) {
        var element = this.refs.outer3;

        while (element.hasChildNodes()) {
          element.removeChild(element.lastChild);
        }

        this.setupScore(); //}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY29yZV9jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvUGlhbm9yb2xsLmpzIl0sIm5hbWVzIjpbIlZGIiwiVmV4IiwiRmxvdyIsIlBpYW5vcm9sbCIsInByb3BzIiwiYmFyIiwiaW5zdCIsImlkeCIsIm5vdGVfaW5kZXgiLCJub3RlcyIsInRhcmdldCIsImluc3RydW1lbnRzIiwic3RhdmVfbGlzdCIsInJlbmRlcmVyIiwiY29udGV4dCIsIm9uQ2xpY2siLCJvbkhvdmVyIiwic3RhdGUiLCJ4IiwieSIsInNlcGFyYXRlIiwiTXlOb3RlcyIsIm5vdGVfbGlzdCIsImFjY2lkZW50YWxfbGlzdCIsImVudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hvcmRfYWNjaWRlbnRpYWxzIiwibmV3X25vdGVzIiwiayIsImxlbmd0aCIsIm5ld19rZXkiLCJuZXdfb2N0YXZlIiwibmV3X2FjY2lkZW50aWFsIiwicHVzaCIsImNvbmNhdCIsInN2Z0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJzdGF2ZV9zcGFjaW5nIiwic2NhbGUiLCJiYXJfb2Zmc2V0IiwicGFkZGluZyIsIlJlbmRlcmVyIiwiQmFja2VuZHMiLCJTVkciLCJyZXNpemUiLCJnZXRDb250ZXh0Iiwic3RhdmVzIiwic3RhdmVfbGluZXMiLCJpIiwiU3RhdmUiLCJhZGRDbGVmIiwiY2xlZiIsInNldFRleHQiLCJuYW1lIiwiTW9kaWZpZXIiLCJQb3NpdGlvbiIsIkxFRlQiLCJzaGlmdF94Iiwic2hpZnRfeSIsInNldENvbnRleHQiLCJkcmF3IiwiY29ubmVjdG9yIiwiU3RhdmVDb25uZWN0b3IiLCJzZXRUeXBlIiwidHlwZSIsIlNJTkdMRV9MRUZUIiwiQlJBQ0tFVCIsInZvaWNlcyIsIlZvaWNlIiwibnVtX2JlYXRzIiwiYmVhdF92YWx1ZSIsInNldE1vZGUiLCJuZXdDbGVmIiwibm90ZV9wYXJ0cyIsInByZXZfcGFydHMiLCJub3RlX2NvbG9yIiwiY29sb3JfbGlzdCIsImNvbG9ycyIsImFkZE5vdGUiLCJTdGF2ZU5vdGUiLCJrZXlzIiwiZHVyYXRpb24iLCJzZXRTdHlsZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiR2hvc3ROb3RlIiwic2V0QXR0cmlidXRlIiwiaiIsInNhbWVfbm90ZSIsImFkZEFjY2lkZW50YWwiLCJBY2NpZGVudGFsIiwiYXR0cnMiLCJzZXRMZWRnZXJMaW5lU3R5bGUiLCJzdGF2ZWxpbmUiLCJTdGF2ZUxpbmUiLCJmaXJzdF9ub3RlIiwibGFzdF9ub3RlIiwiZmlyc3RfaW5kaWNlcyIsImxhc3RfaW5kaWNlcyIsInJlbmRlcl9vcHRpb25zIiwibGluZV93aWR0aCIsImNvbG9yIiwicGFkZGluZ19sZWZ0IiwicGFkZGluZ19yaWdodCIsImFkZFRpY2thYmxlcyIsImZvcm1hdF93aWR0aCIsImZvcm1hdHRlciIsIkZvcm1hdHRlciIsImpvaW5Wb2ljZXMiLCJmb3JtYXQiLCJwIiwicmVmcyIsIm91dGVyMyIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrIiwiYmluZCIsImNoZWNrY2xpY2siLCJjbGVhcmRpdiIsImRpdiIsImV2ZW50IiwicGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJzZXRQcm9wcyIsInR0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJvZmZzZXRZIiwibXNnIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsInJlcyIsInNwbGl0IiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsInNldHVwU2NvcmUiLCJwcmV2UHJvcHMiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxlQ29tcGFyZSIsImVsZW1lbnQiLCJoYXNDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJv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WUFBVSxFQUFFa0gsaURBQVMsQ0FBQ0UsTUFiSjtBQWNsQmhKLFNBQU8sRUFBRThJLGlEQUFTLENBQUNHLE1BZEQ7QUFlbEJsSixTQUFPLEVBQUUrSSxpREFBUyxDQUFDRyxNQWZEOztBQWlCZDs7OztBQUlKckosWUFBVSxFQUFFa0osaURBQVMsQ0FBQ0ksS0FyQko7O0FBc0JsQjs7OztBQUlBbEMsVUFBUSxFQUFFOEIsaURBQVMsQ0FBQ0s7QUExQkYsQ0FBdEIsQyIsImZpbGUiOiIxNmEyMTBmLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXggZnJvbSAndmV4Zmxvdyc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJy4vdGVzdGluZy5jc3MnO1xyXG5cclxuY29uc3QgVkYgPSBWZXguRmxvdztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5iYXI9MDtcclxuICAgICAgICB0aGlzLmluc3Q9MDtcclxuICAgICAgICB0aGlzLmlkeD0wO1xyXG4gICAgICAgIHRoaXMubm90ZV9pbmRleD0wO1xyXG4gICAgICAgIHRoaXMubm90ZXM9MDtcclxuICAgICAgICB0aGlzLnRhcmdldD0wO1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudHM9MDtcclxuICAgICAgICB0aGlzLnN0YXZlX2xpc3Q9W107XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcj0wO1xyXG4gICAgICAgIHRoaXMuY29udGV4dD0wO1xyXG4gICAgICAgIHRoaXMub25DbGljaz17fTtcclxuICAgICAgICB0aGlzLm9uSG92ZXI9e307XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgc2V0dXBTY29yZSgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNlcGFyYXRlKE15Tm90ZXMpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGVfbGlzdD1bXVxyXG4gICAgICAgICAgICB2YXIgYWNjaWRlbnRhbF9saXN0PVtdXHJcblxyXG4gICAgICAgICAgICAvL2ZvciAodmFyIGk9MDsgaTxNeU5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IE15Tm90ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9JZiB0aGVyZSBpcyBqdXN0IG9uZSBub3RlLCBtYWtlIGl0IGFuIGFycmF5XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5PVtlbnRyeV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9nbyB0aHJvdWdoIGVhY2ggbm90ZSBpbiBjaG9yZFxyXG4gICAgICAgICAgICAgICAgLy8gVG9EbzogQWRkIGNvbG9yIGluZm9ybWF0aW9uIHRvIG5vdGVzXHJcbiAgICAgICAgICAgICAgICB2YXIgY2hvcmRfYWNjaWRlbnRpYWxzPVtdXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X25vdGVzPVtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrPTA7IGs8ZW50cnkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2tleSA9IGVudHJ5W2tdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfb2N0YXZlID0gZW50cnlba11bZW50cnlba10ubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVtrXS5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfYWNjaWRlbnRpYWwgPSBlbnRyeVtrXVsxXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19hY2NpZGVudGlhbCA9IFwiblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgYSBzdHJpbmcgb2Ygbm90ZXNcclxuICAgICAgICAgICAgICAgICAgICBuZXdfbm90ZXMucHVzaChuZXdfa2V5LmNvbmNhdChcIi9cIixuZXdfb2N0YXZlKSlcclxuICAgICAgICAgICAgICAgICAgICAvL21ha2UgYW4gYXJyYXkgb2YgYWNjaWRlbnRpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgY2hvcmRfYWNjaWRlbnRpYWxzLnB1c2gobmV3X2FjY2lkZW50aWFsKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgbm90ZV9saXN0LnB1c2gobmV3X25vdGVzKVxyXG4gICAgICAgICAgICAgICAgIGFjY2lkZW50YWxfbGlzdC5wdXNoKGNob3JkX2FjY2lkZW50aWFscylcclxuICAgICAgICAgICAgICAvLyAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFtub3RlX2xpc3RbMF0sIGFjY2lkZW50YWxfbGlzdF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHtpZCwgd2lkdGgsIGhlaWdodCwgc3RhdmVfc3BhY2luZywgc3RhdmVfbGlzdCwgc2NhbGUsIGJhcl9vZmZzZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgcGFkZGluZyA9IDEwMDtcclxuICAgICAgICAvL3RoaXMuc3RhdmVfbGlzdCA9IHN0YXZlX2xpc3Q7XHJcblxyXG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBWRi5SZW5kZXJlcihzdmdDb250YWluZXIsIFZGLlJlbmRlcmVyLkJhY2tlbmRzLlNWRyk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCtwYWRkaW5nLCBoZWlnaHQpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG4gICAgdmFyIG5vdGVfaW5kZXggPSAwO1xyXG4gICAgLy9HbyB0aHJvdWdoIGJhcnNcclxuICAgIGZvcih2YXIgYmFyPTA7IGJhcjxzdGF2ZV9saXN0Lmxlbmd0aDsgYmFyKyspe1xyXG5cclxuICAgICAgICAvL0dldCBvdmVyYWxsIG5vdGUgaW5kZXggYnkgYWRkaW5nIGFtb3VudCBvZiBub3RlcyBpbiBwcmV2aW91cyBiYXJcclxuICAgICAgICBpZiAoYmFyPjApe1xyXG4gICAgICAgICAgICBub3RlX2luZGV4ICs9IHN0YXZlX2xpc3RbYmFyLTFdWzBdLm5vdGVzLmxlbmd0aFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGJhcj09PTApe1xyXG4gICAgICAgIC8vICAgICBwYWRkaW5nPTEwMFxyXG4gICAgICAgIC8vIH0gXHJcbiAgICAgICAgLy9DcmVhdGUgc3RhdmVzXHJcbiAgICAgICAgdmFyIHN0YXZlcz1bXVxyXG4gICAgICAgIHZhciBzdGF2ZV9saW5lcz1bXVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RhdmVzLnB1c2gobmV3IFZGLlN0YXZlKHBhZGRpbmcrYmFyKih3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aCksIHN0YXZlX3NwYWNpbmcqKGkrMSksIHdpZHRoL3N0YXZlX2xpc3QubGVuZ3RoKSlcclxuICAgICAgICAgICAgaWYgKGJhcj09PTApe1xyXG4gICAgICAgICAgICAgICAgc3RhdmVzW2ldLmFkZENsZWYoc3RhdmVfbGlzdFtiYXJdW2ldLmNsZWYpXHJcbiAgICAgICAgICAgICAgICBzdGF2ZXNbaV0uc2V0VGV4dChzdGF2ZV9saXN0W2Jhcl1baV0ubmFtZSwgVkYuTW9kaWZpZXIuUG9zaXRpb24uTEVGVCwgeyBzaGlmdF94OiAtNjAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChpPT0wKXtcclxuICAgICAgICAgICAgICAgIHN0YXZlc1tpXS5zZXRUZXh0KGJhcisxK2Jhcl9vZmZzZXQsIFZGLk1vZGlmaWVyLlBvc2l0aW9uLkxFRlQsIHsgc2hpZnRfeTogLTQwICwgc2hpZnRfeDogMjB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF2ZXNbaV0uc2V0Q29udGV4dChjb250ZXh0KS5kcmF3KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29ubmVjdG9yID0gbmV3IFZGLlN0YXZlQ29ubmVjdG9yKHN0YXZlc1swXSwgc3RhdmVzW3N0YXZlcy5sZW5ndGgtMV0pO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuU0lOR0xFX0xFRlQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5kcmF3KCk7XHJcbiAgICAgICAgaWYoYmFyPT09MCl7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRUeXBlKFZGLlN0YXZlQ29ubmVjdG9yLnR5cGUuQlJBQ0tFVCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvci5zZXRDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICBjb25uZWN0b3IuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbm90ZV9saXN0PVtdXHJcbiAgICAgICAgdmFyIHZvaWNlcz1bXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR28gdGhyb3VnaCBpbnN0cnVtZW50c1xyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgbm90ZV9saXN0LnB1c2goW10pXHJcbiAgICAgICAgICAgIHZvaWNlcy5wdXNoKG5ldyBWRi5Wb2ljZSh7bnVtX2JlYXRzOiA0LCAgYmVhdF92YWx1ZTogNH0pLnNldE1vZGUoMikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9HbyB0aHJvdWdoIG5vdGVzXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDbGVmID0gc3RhdmVfbGlzdFtiYXJdW2tdLmNsZWZcclxuICAgICAgICAgICAgICAgIHZhciBub3RlX3BhcnRzID0gc2VwYXJhdGUoc3RhdmVfbGlzdFtiYXJdW2tdLm5vdGVzW2ldKVxyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZfcGFydHMgPSBbW1tdXSxbW11dXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vUmVtZW1iZXIgdG8gYWRkIGNvbG9ycyB0byBub3RlcyBzb21laG93Li4uXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZV9jb2xvciA9ICdibGFjaydcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvcl9saXN0PXN0YXZlX2xpc3RbYmFyXVtrXS5jb2xvcnNcclxuICAgICAgICAgICAgICAgIC8vSWYgY29sb3IgcHJvcGVydHkgaXMgZGVmaW5lZCwgZG8gc29tZXRoaW5nIHdpdGggY29sb3JzLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbG9yX2xpc3QgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBub3RlX2NvbG9yPWNvbG9yX2xpc3RbaV1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZV9wYXJ0c1swXS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGROb3RlPW5ldyBWRi5TdGF2ZU5vdGUoe2NsZWY6IG5ld0NsZWYsIGtleXM6IG5vdGVfcGFydHNbMF0sIGR1cmF0aW9uOiBcInFcIn0pICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkTm90ZS5ub3RlX2hlYWRzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAnYicrYmFyKydpJytrKyduJytpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGFkZE5vdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJywgZmlsbFN0eWxlOiBub3RlX2NvbG9yfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZE5vdGUgPSBuZXcgVkYuR2hvc3ROb3RlKCdxJylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1N0b3JlIG5vdGUgaW5kZXggaW5mb3JtYXRpb24gb24gc3ZnIGlkLCBub3RlX2luZGV4IGNvbnNpc3Qgb2YgbnVtYmVyIG9mIHByZXZpb3VzIG5vdGVzICsgY3VycmVudCBub3RlIGluZGV4OlxyXG4gICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ18nK2JhcisnXycraysnXycraSsnXycrKG5vdGVfaW5kZXgraSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1JlbWVtYmVyIHRoZSBwcmV2aW91cyBwYXJ0IGZvciBjaGVja1xyXG4gICAgICAgICAgICAgICAgaWYgKGk+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldl9wYXJ0cyA9IHNlcGFyYXRlKHN0YXZlX2xpc3RbYmFyXVtrXS5ub3Rlc1tpLTFdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wO2o8bm90ZV9wYXJ0c1sxXVswXS5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHRoZSBub3RlIGlzIHRoZSBzYW1lIGFzIHByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVfbm90ZSA9IChub3RlX3BhcnRzWzBdWzBdPT09cHJldl9wYXJ0c1swXVswXSYmbm90ZV9wYXJ0c1swXVswXVswXT09PXByZXZfcGFydHNbMF1bMF1bMF0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5vdGVfcGFydHNbMV1bMF1bal0hPT0nbicgJiYgIXNhbWVfbm90ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5hZGRBY2NpZGVudGFsKGosIG5ldyBWRi5BY2NpZGVudGFsKG5vdGVfcGFydHNbMV1bMF1bal0pKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICBub3RlX2xpc3Rba10ucHVzaChhZGROb3RlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpPjAgJiYgc2FtZV9ub3RlKXsgLy8gJiYgbm90ZV9saXN0W2tdW2ktMV0gPT09IG5vdGVfbGlzdFtrXVtpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWRkTm90ZS5hdHRycy50eXBlIT09J0dob3N0Tm90ZScpeyAvL0dvdHRhIGRvIHRoaXMgdG8gcHJldmVudCBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTm90ZS5zZXRTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJywgZmlsbFN0eWxlOiAnbm9uZSd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROb3RlLnNldExlZGdlckxpbmVTdHlsZSh7c3Ryb2tlU3R5bGU6ICdub25lJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF2ZWxpbmUgPSBuZXcgVkYuU3RhdmVMaW5lKHtmaXJzdF9ub3RlOiBub3RlX2xpc3Rba11baS0xXSwgbGFzdF9ub3RlOiBub3RlX2xpc3Rba11baV0sIGZpcnN0X2luZGljZXM6IDAsIGxhc3RfaW5kaWNlczowfSlcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMubGluZV93aWR0aCA9IDNcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZWxpbmUucmVuZGVyX29wdGlvbnMuY29sb3IgPSBub3RlX2NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfbGVmdCA9IC04XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdmVsaW5lLnJlbmRlcl9vcHRpb25zLnBhZGRpbmdfcmlnaHQgPSAtMTRcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lcy5wdXNoKHN0YXZlbGluZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm9pY2VzW2tdLmFkZFRpY2thYmxlcyhub3RlX2xpc3Rba10pXHJcbiAgICAgICAgICAgIHZhciBmb3JtYXRfd2lkdGggPSB3aWR0aC9zdGF2ZV9saXN0Lmxlbmd0aC0zMFxyXG4gICAgICAgICAgICBpZiAoYmFyPT09MCl7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRfd2lkdGg9Zm9ybWF0X3dpZHRoLTIwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF2ZXNba10uc2V0Tm90ZVN0YXJ0WChrKndpZHRoKSlcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBWRi5Gb3JtYXR0ZXIoKS5qb2luVm9pY2VzKFt2b2ljZXNba11dKS5mb3JtYXQoW3ZvaWNlc1trXV0sIGZvcm1hdF93aWR0aCk7XHJcbiAgICAgICAgICAgIC8vdm9pY2VzW2tdLmRyYXcoY29udGV4dCwgc3RhdmVzW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmpvaW5Wb2ljZXModm9pY2VzKS5mb3JtYXQodm9pY2VzLCA1MCk7XHJcbiAgICAgICAgLy92YXIgZm9ybWF0dGVyID0gbmV3IFZGLkZvcm1hdHRlcigpLmZvcm1hdCh2b2ljZXMsIDEwMCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgayA9IDA7IGs8c3RhdmVfbGlzdFtiYXJdLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWNlc1trXS5kcmF3KGNvbnRleHQsIHN0YXZlc1trXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdmVfbGluZXMpe1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwPTA7IHA8c3RhdmVfbGluZXMubGVuZ3RoOyBwKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzdGF2ZV9saW5lc1twXSkgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXZlX2xpbmVzW3BdLnNldENvbnRleHQoY29udGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzdGF2ZV9saW5lc1twXS5kcmF3KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnRleHQuc2NhbGUoc2NhbGUsc2NhbGUpXHJcbiAgICB0aGlzLnJlZnMub3V0ZXIzLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlZnMub3V0ZXIzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5jaGVjay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2tjbGljay5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIHRoaXMucmVmcy5vdXRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5jbGVhcmRpdi5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5yZWZzLm91dGVyMylcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgIC8vZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcInBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogMHB4OyB0b3A6IDBweDtcIilcclxuICAgIC8vY29uc29sZS5sb2coZGl2KVxyXG4gICAgdGhpcy5yZWZzLm91dGVyMy5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBcclxuICAgICAgICAvL2lmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy52Zi1zdGF2ZW5vdGUnKSkge3JldHVybjt9IFxyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnLnZmLXN0YXZlbm90ZScpKSB7cmV0dXJuO30gXHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzLCBzY2FsZX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIHR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpYW5vcm9sbF90b29sdGlwJylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIGxlZnQgPSAoZXZlbnQucGFnZVggKyB0dC5jbGllbnRXaWR0aCArIDEwIDwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aClcclxuICAgICAgICA/IChldmVudC5wYWdlWCArIDEwICsgXCJweFwiKVxyXG4gICAgICAgIDogKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKyA1IC0gZXZlbnQuY2xpZW50V2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgIHZhciB0b3AgPSAoZXZlbnQucGFnZVkgKyB0dC5jbGllbnRIZWlnaHQgKyAxMCA8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KVxyXG4gICAgICAgID8gKGV2ZW50LnBhZ2VZICsgMTAgKyBcInB4XCIpXHJcbiAgICAgICAgOiAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKyA1IC0gdHQuY2xpZW50SGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgIGxlZnQgPSBldmVudC5vZmZzZXRYK1wicHhcIlxyXG4gICAgICAgIHRvcCA9IChldmVudC5vZmZzZXRZKzMwKSsncHgnIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy92YXIgbGVmdCA9IChldmVudC5vZmZzZXRYLTUwKSsncHgnO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gKGV2ZW50LnBhZ2VYLTUwKSsncHgnO1xyXG4gICAgICAgIHZhciB0b3AgPSAoZXZlbnQub2Zmc2V0WSszMCkrJ3B4JztcclxuICAgICAgICB0dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXHJcbiAgICAgICAgJ3BhZGRpbmc6IDVweDtjb2xvcjpibGFjaztib3JkZXItd2lkdGg6IDJweDtib3JkZXItcmFkaXVzOjZweDtib3JkZXItY29sb3I6IGJsYWNrO2JvcmRlci1zdHlsZTogc29saWQ7cG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAnK2xlZnQrJzsnKyd0b3A6Jyt0b3ArJzsgYmFja2dyb3VuZC1jb2xvcjogI2VlZDsnKVxyXG4gICAgICAgIHZhciBtc2cgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWw9PT1cInZmLW5vdGVoZWFkXCIpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZClcclxuICAgICAgICAgICAgbXNnID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZClcclxuICAgICAgICAgICAgbXNnID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IG1zZy5zcGxpdCgnXycpO1xyXG4gICAgICAgIHRoaXMuYmFyID0gcGFyc2VJbnQocmVzWzFdKSsxXHJcbiAgICAgICAgdGhpcy5pbnN0ID0gcGFyc2VJbnQocmVzWzJdKSsxXHJcbiAgICAgICAgdGhpcy5pZHggPSBwYXJzZUludChyZXNbM10pXHJcbiAgICAgICAgdGhpcy5ub3RlX2luZGV4ID0gcGFyc2VJbnQocmVzWzRdKVxyXG4gICAgICAgIHR0LmlubmVySFRNTCA9IFwiYmFyOiBcIit0aGlzLmJhcitcIiBpbnN0cnVtZW50OiBcIit0aGlzLmluc3QrXCIgaW5kZXg6IFwiK3RoaXMuaWR4XHJcblxyXG4gICAgICAgIGlmIChzZXRQcm9wcykgc2V0UHJvcHMoe29uSG92ZXI6IHtiYXI6IHRoaXMuYmFyLCBpbnN0OiB0aGlzLmluc3QsIGlkeDogdGhpcy5pZHgsIG5vdGVfaW5kZXg6IHRoaXMubm90ZV9pbmRleH19KVxyXG4gICAgICAgIC8vdGhpcy5ub3RlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgICAvL3NldFByb3BzKHtub3RlOiB0aGlzLm5vdGV9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3RlKVxyXG4gICAgfVxyXG4gICAgY2hlY2tjbGljayhldmVudCkge1xyXG4gICAgICAgIC8vaWYgKCFldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbG9zZXN0KCcudmYtc3RhdmVub3RlJykpIHtyZXR1cm47fSBcclxuICAgICAgICB2YXIgdHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlhbm9yb2xsX3Rvb2x0aXAnKVxyXG4gICAgICAgIC8vdHQuc3R5bGUuYW5pbWF0aW9uID0gJ3twYWRkaW5nOiAycHg7fSAxcydcclxuICAgICAgICB0dC5zdHlsZS5wYWRkaW5nID0gJzJweCdcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHR0KVxyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgbXNnID0gJyc7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsPT09XCJ2Zi1ub3RlaGVhZFwiKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXHJcbiAgICAgICAgICAgIG1zZyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXMgPSBtc2cuc3BsaXQoJ18nKTtcclxuICAgICAgICB2YXIgYmFyID0gcGFyc2VJbnQocmVzWzFdKSsxXHJcbiAgICAgICAgdmFyIGluc3QgPSBwYXJzZUludChyZXNbMl0pKzFcclxuICAgICAgICB2YXIgaWR4ID0gcGFyc2VJbnQocmVzWzNdKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhtc2cpXHJcbiAgICAgICAgaWYgKHNldFByb3BzKSBzZXRQcm9wcyh7b25DbGljazoge2JhcjogdGhpcy5iYXIsIGluc3Q6IHRoaXMuaW5zdCwgaWR4OiB0aGlzLmlkeCwgbm90ZV9pbmRleDogdGhpcy5ub3RlX2luZGV4fX0pXHJcbiAgICB9XHJcbiAgICBjbGVhcmRpdihldmVudCkge1xyXG4gICAgICAgIHZhciB0dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWFub3JvbGxfdG9vbHRpcCcpXHJcbiAgICAgICAgdHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdHQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5ub3RlcyAhPT0gcHJldlByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IHByZXZQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gcHJldlByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgLy9jb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgLy9Db21wYXJlIHN0cmluZ2lmaWVkIHN0YXZlX2xpc3RzIGFuZCB1cGRhdGUgaWYgY2hhbmdlczpcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF2ZV9saXN0KS5sb2NhbGVDb21wYXJlKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5zdGF2ZV9saXN0KSkhPT0wKXtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmcy5vdXRlcjNcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBTY29yZSgpXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHsgICBcclxuICAgICAgICBpZiAodGhpcy5ub3RlcyAhPT0gbmV4dFByb3BzLm5vdGVzIHx8IHRoaXMuaW5zdHJ1bWVudHMgIT09IG5leHRQcm9wcy5pbnN0cnVtZW50cyB8fCB0aGlzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBuZXh0UHJvcHMubm90ZXNcclxuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50cyA9IG5leHRQcm9wcy5pbnN0cnVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5leHRQcm9wcy50YXJnZXRcclxuXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMubm90ZXMgIT09IG5leHRQcm9wcy5ub3RlcyB8fCB0aGlzLnByb3BzLmluc3RydW1lbnRzICE9PSBuZXh0UHJvcHMuaW5zdHJ1bWVudHMgfHwgdGhpcy5wcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpO1xyXG59XHJcbiAgKi9cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lkLCB3aWR0aCwgaGVpZ2h0LCBzdGF2ZV9zcGFjaW5nLCBzdGF2ZV9saXN0fT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gb250b3VjaHN0YXJ0PVwiXCIgcmVmPVwib3V0ZXIzXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIH19ICAgICAgICAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblBpYW5vcm9sbC5kZWZhdWx0UHJvcHMgPSB7c2NhbGU6MSwgYmFyX29mZnNldDowfTtcclxuXHJcblBpYW5vcm9sbC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzdGF2ZV9zcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBiYXJfb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25Ib3ZlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICogQSBBcnJheSBjb250YWluaW5nIG9iamVjdCB0byBob2xkIGJhcnMgYXMgW1tiYXIxXSxbYmFyMl0gZXRjLi5dLlxyXG4gICAgICogQmFycyBjb250YWluaW5nIHN0YXZlcyBhcyB7Y2xlZjonc3RyaW5nJywgbmFtZTonc3RyaW5nJywgJ25vdGVzJzpbYXJyYXkgb3IgbmVzdGVkIGFycmF5IG9mIG5vdGVuYW1lc10sIGNvbG9yczpbYXJyYXkgdGhhdCBtYXRjaGVzIG5vdGVzLWFycmF5XX1cclxuICAgICAqL1xyXG4gICAgc3RhdmVfbGlzdDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
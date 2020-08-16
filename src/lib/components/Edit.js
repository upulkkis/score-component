import * as music21 from './music21.debug.js';
import Vex from 'vexflow';
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const VF = Vex.Flow;

export default class Edit extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            movefun: 0,
            note: 60,
            notecont: '',
            x: 0,
            y: 0,

        };
    };

    setup() {
        /*
        const Container = document.createElement('div');
        
        var n = new music21.note.Note("F#");
        var k = new music21.stream.Stream();
        k.append(n);
        //k.appendNewDOM();
        */
        const {note, scale, accidental_margin, hide_toolbar, setProps} = this.props
        const s = new music21.stream.Stream();
        let n = new music21.note.Note(note);
        //n.lyrics = new music21.note.Lyric('mf')
        n.addLyric('')
        var clef = 0;
        //n.pitch.midi = 40
        if (note<=40){
            clef = new music21.clef.Clef('bass', -1);
        } else
        if (note<=59){
            clef = new music21.clef.Clef('bass');
        } else
        if (note<=80){
            clef = new music21.clef.Clef('treble');
        } else
        if (note<=127){
            clef = new music21.clef.Clef('treble', 1);
        }
        s.clef = clef
        
        
        s.append(n);
        s.activeNote = s._elements[1]
        s.activeNote.lyrics[0].style.fontSize = 24
        s.activeNote.lyrics[0].style.fillStyle = 'rgba(0,0,0,0.3)'
        s.activeNote.lyrics[0].style.transform = 'translate(20px,20px)'
        s.activeNote.lyrics[0].y = 20
        //var d2 = s2.editableAccidentalDOM();
        //console.log(s)

        //var s = music21.tinyNotation.TinyNotation(initNote);
        //console.log(s)
        //s.clef = new music21.clef.Clef('treble');
        //console.log(s)
        
        //s.renderOptions.naiveHeight = 200
        //s.renderOptions.top = 100
        //s._naiveOffset = 100
        s.renderOptions.scaleFactor = {x:scale, y:scale}
        var d = s.editableAccidentalDOM();
        d[0].children[0].children[0].style.fontSize = '14px'
        d[0].children[0].children[1].style.fontSize = '14px'
        d[0].children[0].children[2].style.fontSize = '14px'
        d[0].children[0].children[2].style.height = '25px'
        d[0].children[0].children[2].style.verticalAlign = 'top'
        //d[0].children[0].children[2].style.paddingTop = '6px'
        //console.log(s)
        
        //txt[0].y[0].value = 60
        //console.log(d[0].childNodes[2].children[0].childNodes[8].tagNames)
        //d[0].children[2].addEventListener("click", this.check.bind(this), false)
        //document.addEventListener("click", this.check.bind(this), false)

        this.notecont = s
        //this.note = d[0].childNodes[2].children[0].childNodes[8].tagNames
        //console.log()
        //Container.append(k);
        //k.append(Container)'
        //Container.innerHTML = d
        //Container.appendChild(d)
        /*
        var k = new music21.keyboard.Keyboard();
       k.startPitch = 18;
       k.endPitch = 39;
       k.markC = true;
       k.appendKeyboard(Container);
    */
    //Container.append(k)
    var child1 = d[0].children[1]
    d[0].removeChild(child1)
    d[0].children[0].style.display = 'inline-block'
    d[0].children[0].style.verticalAlign = 'top'
    d[0].children[0].style.marginTop = accidental_margin;
    d[0].children[1].style.display = 'inline-block'
    var child0 = d[0].children[0]
    d[0].removeChild(child0)
    //d[0].appendChild(child0)
    let div = document.createElement('div')
    div.style.verticalAlign = 'top'
    div.style.display = 'inline-block'
    div.appendChild(d[0])

       this.refs.outer9.appendChild(div);
       this.refs.outer9.appendChild(child0);

       //var svg = document.getElementsByClassName('streamHolding')
       var svg = this.refs.outer9.getElementsByClassName('streamHolding')

       //console.log(svg)
       let item = this.refs.outer9.firstChild
       var accs =  this.refs.outer9.getElementsByClassName('accidentalToolbar')[0]
       if(hide_toolbar){
       accs.style.display = 'none'
       }
       //console.log(this.refs.outer9)
       /*
       item = this.refs.outer9.firstChild.firstChild
       this.refs.outer9.firstChild.removeChild(item)
       let div = document.createElement('div');
       this.refs.outer9.firstChild.appendChild(div)
       this.refs.outer9.firstChild.firstChild.appendChild(item)
       console.log(item)
        item = this.refs.outer9.firstChild.firstChild
       */

      //this.refs.outer9.addEventListener("mousedown", this.refresh.bind(this), false)
      //this.refs.outer9.addEventListener("touchstart", this.refresh.bind(this), false)

      
    
        item.addEventListener("mousedown", this.check.bind(this), false)
       item.addEventListener("touchstart", this.check.bind(this), false)
       
       //this.refs.outer9.draggable = true

       //this.refs.outer9.addEventListener("drag", this.drag_change.bind(this), false)
       //this.refs.outer9.appendChild(d2[0]);
       //d[0].appendChild(document.createElement('div'))
        //console.log(d)
                // The item (or items) to press and hold on

                let timerID;
                let counter = 0;
        
                let pressHoldEvent = new CustomEvent("pressHold");
        
                // Increase or decreae value to adjust how long
                // one should keep pressing down before the pressHold
                // event fires
                let pressHoldDuration = 5;

                //Threshold of mouse movement
                let changethreshold = 10;
        
                // Listening for the mouse and touch events    
                item.addEventListener("mousedown", pressingDown, false);
                item.addEventListener("mouseup", notPressingDown, false);
                item.addEventListener("mouseleave", notPressingDownRel, false);
        
                item.addEventListener("touchstart", pressingDown, false);
                item.addEventListener("touchend", notPressingDown, false);
        
                 // Listening for our custom pressHold event
                 item.addEventListener("pressHold", doSomething, false);
                let container = this.refs.outer9
        
                 let init_x = 0
                 let init_y = 0
                 let dynamics = 'mf'
        
                // Register touch point when pressing down
                function pressingDown(e) {
                // Start the timer
                requestAnimationFrame(timer);
                item.addEventListener("mousemove", change_note, false); 
                item.addEventListener("touchmove", change_note, false); 
                //console.log(e, e.toString())
                if(e.toString()==="[object MouseEvent]"){
                    init_x = e.x
                    init_y = e.y
                } else 
                if(e.toString()==="[object TouchEvent]"){
                    init_x = e.touches[0].clientX
                    init_y = e.touches[0].clientY
                }
                e.preventDefault();
                //console.log("Pressing!");
                }

                //Send values on click release
                function notPressingDown(e) {
                    // Stop the timer
                    cancelAnimationFrame(timerID);
                    counter = 0;
                    item.removeEventListener("mousemove", change_note, false); 
                    item.removeEventListener("touchmove", change_note, false);  
                    s.activeNote.lyrics[0].text = ''
                    let note_output = s.activeNote.pitch.midi
                    s.redrawDOM(svg)
                    //console.log(note_output, dynamics);
                    if (setProps) setProps({note: note_output, dyn:dynamics})
                  }

                  function notPressingDownRel(e) {
                    // Stop the timer
                    cancelAnimationFrame(timerID);
                    counter = 0;
                    item.removeEventListener("mousemove", change_note, false); 
                    item.removeEventListener("touchmove", change_note, false);  
                  }
              
                  //
                  // Runs at 60fps when you are pressing down
                  //
                  function timer() {
                    //console.log("Timer tick!");
              
                    if (counter < pressHoldDuration) {
                      timerID = requestAnimationFrame(timer);
                      counter++;
                    } else {
                      //console.log("Press threshold reached!");
                      item.dispatchEvent(pressHoldEvent);
                    }
                  }

                  // PRgrammatically click buttons and
                  //var buttons =  document.getElementsByClassName('accidentalToolbar')[0].getElementsByTagName('button')
                  var buttons =  this.refs.outer9.getElementsByClassName('accidentalToolbar')[0].getElementsByTagName('button')
                  function doSomething(e) {
                    dynamics = 'mf'
                    buttons[1].click()
                    s.redrawDOM(svg)
                    //console.log("pressHold event fired!");           
                  }
        
                  // Check mouse movement and change accidentals and dynamics
                  function change_note(e) {

                    let x = 0
                      let y = 0
                    if(e.toString()==="[object MouseEvent]"){
                        x = e.x
                        y = e.y
                    } else 
                    if(e.toString()==="[object TouchEvent]"){
                        x = e.touches[0].clientX
                        y = e.touches[0].clientY
                    }
                    if ((x - init_x) > changethreshold){
                        s.activeNote.lyrics[0].text = 'f'
                        s.redrawDOM(svg)
                        dynamics = 'f'
                    } else if ((x - init_x) < -changethreshold){
                        s.activeNote.lyrics[0].text = 'p'
                        s.redrawDOM(svg)
                        dynamics = 'p'
                    } else {
                        s.activeNote.lyrics[0].text = 'mf'
                        s.redrawDOM(svg)
                        dynamics = 'mf'
                    }
                      if ((y - init_y) > changethreshold){
                          buttons[0].click()
                          s.redrawDOM(svg)
                      } else if ((y - init_y) < -changethreshold){
                        buttons[2].click()
                        s.redrawDOM(svg)
                      } else {
                        buttons[1].click()
                        s.redrawDOM(svg)
                      }
                  }
                }


    componentDidMount() {
        this.setup()

    }

    refresh(e){
        const {setProps} = this.props
        var svg = this.refs.outer9.getElementsByTagName('svg') 
        this.notecont.redrawDOM(svg)
        //if (setProps) setProps({note: this.notecont.activeNote.pitch.midi})
    }

    //Change clef according to note value
    check(event) {
        const {setProps} = this.props
        this.note = this.notecont.activeNote.pitch.midi
        if (this.note<=40){
            this.notecont.clef = new music21.clef.Clef('bass', -1);
        } else
        if (this.note<=59){
            this.notecont.clef = new music21.clef.Clef('bass');
        } else
        if (this.note<=80){
            this.notecont.clef = new music21.clef.Clef('treble');
        } else
        if (this.note<=127){
            this.notecont.clef = new music21.clef.Clef('treble', 1);
        }
        //this.notecont.clef = new music21.clef.Clef('treble', 2);
        //this.movefun = this.drag_change.bind(this)
        //this.refs.outer9.addEventListener("mousemove", this.movefun, false)
        //this.refs.outer9.addEventListener("mouseup", (function(event) {
        //    this.refs.outer9.removeEventListener("mousemove", movefun)
        //}).call(this), false)
        //var svg = document.getElementsByClassName('streamHolding') 

        //if (setProps) setProps({note: this.notecont.activeNote.pitch.midi})
        var svg = this.refs.outer9.getElementsByTagName('svg') 
        this.notecont.redrawDOM(svg)


      
        //setProps({note: this.note})
        //console.log(this.notecont.activeNote.pitch.midi)
    }

    componentDidUpdate(prevProps) {
        /*
        const {setProps, note} = this.props
        this.note = note
        if (this.note<=40){
            this.notecont.clef = new music21.clef.Clef('bass', -1);
        } else
        if (this.note<=60){
            this.notecont.clef = new music21.clef.Clef('bass');
        } else
        if (this.note<=80){
            this.notecont.clef = new music21.clef.Clef('treble');
        } else
        if (this.note<=127){
            this.notecont.clef = new music21.clef.Clef('treble', 1);
        }
        //this.notecont.clef = new music21.clef.Clef('treble', 2);
        var svg = document.getElementsByClassName('streamHolding') 
        this.notecont.redrawDOM(svg)
        setProps({note: this.note})
        */
        //console.log(this.notecont.activeNote.pitch.midi)
        if (this.props.note !== prevProps.note){
        var element = this.refs.outer9
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
        this.setup()
    }
        
    }

    render() {
        const{id}=this.props;
        return <div ref="outer9" id={id} /* onClick= {this.check.bind(this)} */ style={{
            border: "none",
            padding: 0,
            borderRadius: 0,
            verticalAlign: 'top',
            display: "inline-block",
        }}>
        </div>;
    }

}

Edit.defaultProps = {note: 60, dyn: 'mf', scale: 1.5, accidental_margin: 55, hide_toolbar: true};

Edit.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    note: PropTypes.number,
    dyn: PropTypes.string,
    scale: PropTypes.number,
    accidental_margin: PropTypes.number,
    hide_toolbar: PropTypes.bool,
    /**
     * A label that will be printed when this component is rendered.
     */


    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

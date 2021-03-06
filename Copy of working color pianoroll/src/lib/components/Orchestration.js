import Vex from 'vexflow';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const VF = Vex.Flow;

export default class Orchestration extends Component {

    constructor(props) {
        super(props);
        this.notes=0;
        this.target=0;
        this.instruments=0;
        this.renderer=0;
        this.context=0;
        this.state = {
            x: 0,
            y: 0,

        };
    };
    
    setupScore() {
                const svgContainer = document.createElement('div');
                const {id, notes, target, instruments, setProps, width, height, t_score_y, b_score_y} = this.props;
                //const svgContainer = document.getElementById(id);
                this.notes = notes;
                this.target = target;
                this.instruments = instruments;

                this.renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
                this.renderer.resize(width, height);
                var context = this.renderer.getContext();
                this.context = context

                //Do Treble and Bass Clefs
        
                var stave_t = new VF.Stave(20, t_score_y, width);
                stave_t.addClef("treble") //.addTimeSignature("4/4");
                stave_t.setContext(this.context).draw();
        
                var stave_b = new VF.Stave(20, b_score_y, width);
                stave_b.addClef("bass") //.addTimeSignature("4/4");
                stave_b.setContext(this.context).draw();
                
                //Do connectors
                var connector = new VF.StaveConnector(stave_t, stave_b);
                connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
                connector.setContext(this.context);
                connector.draw();
                // var connector2 = new VF.StaveConnector(stave_t, stave_b);
                // connector2.setType(VF.StaveConnector.type.SINGLE_RIGHT);
                // connector2.setContext(context);
                //connector2.draw();
                var connector3 = new VF.StaveConnector(stave_t, stave_b);
                connector3.setType(VF.StaveConnector.type.BRACKET);
                connector3.setContext(this.context);
                //connector3.setText('Orch.');
                connector3.draw();
        
        
                function separate(notes, instruments,target) {
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
                    var tgt
                    for (i=0; i<notes.length; i++) {
                        entry = notes[i];
                        inst = instruments[i]
                        new_key = entry[0];
                        new_octave = entry[entry.length-1];
                        if (entry.length>2){
                            new_accidential = entry[1]; 
                        } else {
                            new_accidential = "n";
                        }
                       new_note = new_key.concat("/",new_octave)
                       tgt = target[i];
                      if (parseInt(new_octave) >= 4) {
                          treble_n.push(new_note);
                          treble_a.push(new_accidential)
                          treble_i.push(inst)
        
                          //Tällä katsotaan onko juuri tämä targetlistalla
                          //Alla oleva ottaa vain ekan huomioon, tarkista!!
                          var tgt = 0;
                          for (var j=0; j<target.length; j++) {
                            if (target[j]===i){
                                tgt=1;
                            }
                         }
                         treble_t.push(tgt);
                      } else {
                          bass_n.push(new_note);
                          bass_a.push(new_accidential);
                          bass_i.push(inst);
                          var tgt = 0;
                          for (var j=0; j<target.length; j++) {
                            if (target[j]===i){
                                tgt=1;
                            }
                        }
                        bass_t.push(tgt);
                      }
                      
                    } 
        
                    return [treble_n, treble_a, treble_t, bass_n, bass_a, bass_t, treble_i, bass_i];
                }
                
                var note_data = separate(this.notes, this.instruments, this.target)
                
                var treble_notes = new VF.StaveNote({clef: "treble", keys: note_data[0], duration: "q" })
                var bass_notes = new VF.StaveNote({clef: "bass", keys: note_data[3], duration: "q" })
                var treble_inst = note_data[6]
                var bass_inst = note_data[7]
        
                //Funktio jolla piirretään nuotin viereen
                function viereen(num, pos) { return new VF.FretHandFinger(num).setPosition(pos); }
        
                for (var i=0; i<note_data[1].length; i++){
                    treble_notes.addAccidental(i, new VF.Accidental(note_data[1][i]));
                    treble_notes.addModifier(i, viereen(treble_inst[i], VF.Modifier.Position.RIGHT))
                    if (note_data[2][i]===1){
                        treble_notes.setKeyStyle(i, {fillStyle: "red"});
                    } 
                }
                for (var i=0; i<note_data[3].length; i++){
                    bass_notes.addAccidental(i, new VF.Accidental(note_data[4][i]));
                    bass_notes.addModifier(i, viereen(bass_inst[i], VF.Modifier.Position.RIGHT))
                    if (note_data[5][i]===1){
                        bass_notes.setKeyStyle(i, {fillStyle: "red"});
                    }
                }
                
                  // Create a voice in 4/4 and add the notes from above
                if (Array.isArray(note_data[0]) && note_data[0].length){
                    var voice_t = new VF.Voice({num_beats: 1,  beat_value: 4});
                    voice_t.addTickables([treble_notes]);
                    var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], width);
                    voice_t.draw(this.context, stave_t);
                }
                    var voice_b = new VF.Voice({num_beats: 1,  beat_value: 4});
                
                if (Array.isArray(note_data[3]) && note_data[3].length){
                    voice_b.addTickables([bass_notes]);
                    var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], width);
                    voice_b.draw(this.context, stave_b);
                }
                this.refs.outer.appendChild(svgContainer);
    }

    componentDidMount() {
        this.setupScore();
    }

    componentDidUpdate(prevProps) {
        //if (this.notes !== prevProps.notes || this.instruments !== prevProps.instruments || this.target !== prevProps.target){
        //const {id} = this.props;
        var element = this.refs.outer
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
        this.setupScore()
        //}
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

    render() {
        const{id, notes, instruments, target}=this.props;
        return <div id={id} ref="outer" style={{
            border: "none",
            padding: 0,
            borderRadius: 0,
            display: "inline-block",
        }}         
        >
        </div>;
    }

}

Orchestration.defaultProps = {width: 200, height: 400, t_score_y: 110, b_score_y: 200};

Orchestration.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    notes: PropTypes.array,
    target: PropTypes.array,
    instruments: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    t_score_y: PropTypes.number,
    b_score_y: PropTypes.number,


    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

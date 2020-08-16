import Vex from 'vexflow';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const VF = Vex.Flow;

export default class Pianoroll extends Component {

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
                
        function separate(MyNotes) {
            var note_list=[]
            var accidental_list=[]

            //for (var i=0; i<MyNotes.length; i++) {
            var entry = MyNotes;

                //If there is just one note, make it an array
                
                if (!Array.isArray(entry)){
                    entry=[entry]
                }
                
                //go through each note in chord
                // ToDo: Add color information to notes
                var chord_accidentials=[]
                var new_notes=[]
                for (var k=0; k<entry.length; k++) {
                    
                    var new_key = entry[k][0];
                    var new_octave = entry[k][entry[k].length-1];
                    if (entry[k].length>2){
                        var new_accidential = entry[k][1]; 
                    } else {
                        var new_accidential = "n";
                    }
                    
                    //make a string of notes
                    new_notes.push(new_key.concat("/",new_octave))
                    //make an array of accidentials
                    chord_accidentials.push(new_accidential)
                 }

                 note_list.push(new_notes)
                 accidental_list.push(chord_accidentials)
              //  }
            
            return [note_list[0], accidental_list]
        }

        const svgContainer = document.createElement('div');
        const {id, width, height, stave_spacing, stave_list, scale, bar_offset} = this.props;
        var padding = 100;


        var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);

        renderer.resize(width+padding, height);
        var context = renderer.getContext();
       
    for(var bar=0; bar<stave_list.length; bar++){

        
        // if (bar===0){
        //     padding=100
        // } 
        //Create staves
        var staves=[]
        var stave_lines=[]
        for(var i = 0; i<stave_list[bar].length; i++){
            staves.push(new VF.Stave(padding+bar*(width/stave_list.length), stave_spacing*(i+1), width/stave_list.length))
            if (bar===0){
                staves[i].addClef(stave_list[bar][i].clef)
                staves[i].setText(stave_list[bar][i].name, VF.Modifier.Position.LEFT, { shift_x: -60 });
            }else if (i==0){
                staves[i].setText(bar+1+bar_offset, VF.Modifier.Position.LEFT, { shift_y: -40 , shift_x: 20});
            }
            staves[i].setContext(context).draw();

        }
        var connector = new VF.StaveConnector(staves[0], staves[staves.length-1]);
        connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
        connector.setContext(context);
        connector.draw();
        if(bar===0){
            connector.setType(VF.StaveConnector.type.BRACKET);
            connector.setContext(context);
            connector.draw();
        }
        var note_list=[]
        var voices=[]
        
        //Go through all bars
        for(var k = 0; k<stave_list[bar].length; k++){
            note_list.push([])
            voices.push(new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2));
            
            //Go through all staves
            for(var i = 0; i<stave_list[bar][k].notes.length; i++){
                var newClef = stave_list[bar][k].clef
                var note_parts = separate(stave_list[bar][k].notes[i])
                var prev_parts = [[[]],[[]]]

                //Remember to add colors to notes somehow...
                var note_color = 'black'
                var color_list=stave_list[bar][k].colors
                //If color property is defined, do something with colors...
                if (typeof color_list !== 'undefined'){
                    note_color=color_list[i]
                }

                if (note_parts[0].length){
                    var addNote=new VF.StaveNote({clef: newClef, keys: note_parts[0], duration: "q"})
                    addNote.setStyle({strokeStyle: 'none', fillStyle: note_color})
                } else {
                    var addNote = new VF.GhostNote('q')
                }

                    //Remember the previous part for check
                if (i>0){
                    prev_parts = separate(stave_list[bar][k].notes[i-1])
                }
                for (var j=0;j<note_parts[1][0].length;j++){
                    //Check if the note is the same as previous
                    var same_note = (note_parts[0][0]===prev_parts[0][0]&&note_parts[0][0][0]===prev_parts[0][0][0])

                    if(note_parts[1][0][j]!=='n' && !same_note){
                    addNote.addAccidental(j, new VF.Accidental(note_parts[1][0][j]))
                    
                } }
                note_list[k].push(addNote)
                
                if(i>0 && same_note){ // && note_list[k][i-1] === note_list[k][i]){
                    
                    
                    if(addNote.attrs.type!=='GhostNote'){ //Gotta do this to prevent errors
                        addNote.setStyle({strokeStyle: 'none', fillStyle: 'none'})
                        addNote.setLedgerLineStyle({strokeStyle: 'none'})
                    

                    var staveline = new VF.StaveLine({first_note: note_list[k][i-1], last_note: note_list[k][i], first_indices: 0, last_indices:0})
                    staveline.render_options.line_width = 3
                    staveline.render_options.color = note_color
                    staveline.render_options.padding_left = -8
                    staveline.render_options.padding_right = -14
                    stave_lines.push(staveline)
                    }
                }             
                
                

            }
            voices[k].addTickables(note_list[k])
            var format_width = width/stave_list.length-30
            if (bar===0){
                format_width=format_width-20
            }
            //console.log(staves[k].setNoteStartX(k*width))
            var formatter = new VF.Formatter().joinVoices([voices[k]]).format([voices[k]], format_width);
            //voices[k].draw(context, staves[k]);
        }
        //var formatter = new VF.Formatter().joinVoices(voices).format(voices, 50);
        //var formatter = new VF.Formatter().format(voices, 100);

        for(var k = 0; k<stave_list[bar].length; k++){
            
            voices[k].draw(context, staves[k]);
        }

        if (stave_lines){
            for (var p=0; p<stave_lines.length; p++){
                if (typeof(stave_lines[p]) !== "undefined"){
                    stave_lines[p].setContext(context)
                    stave_lines[p].draw()
                }
            }
    }
    }

    

    context.scale(scale,scale)
        this.refs.outer3.appendChild(svgContainer);
    }

    componentDidMount() {
        this.setupScore();
    }

    componentDidUpdate(prevProps) {
        //if (this.notes !== prevProps.notes || this.instruments !== prevProps.instruments || this.target !== prevProps.target){
        //const {id} = this.props;
        var element = this.refs.outer3
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
        const {id, width, height, stave_spacing, stave_list}=this.props;
        return <div id={id} ref="outer3" style={{
            border: "none",
            padding: 0,
            borderRadius: 0,
            display: "inline-block",
        }}         
        >
        </div>;
    }

}

Pianoroll.defaultProps = {scale:1, bar_offset:0};

Pianoroll.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    width: PropTypes.number,
    height: PropTypes.number,
    stave_spacing: PropTypes.number,
    scale: PropTypes.number,
    bar_offset: PropTypes.number,

        /**
     * A Array containing object to hold bars as [[bar1],[bar2] etc..].
     * Bars containing staves as {clef:'string', name:'string', 'notes':[array or nested array of notenames], colors:[array that matches notes-array]}
     */
    stave_list: PropTypes.array,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

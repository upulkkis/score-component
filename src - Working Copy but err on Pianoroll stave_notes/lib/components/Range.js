import Vex from 'vexflow';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const VF = Vex.Flow;

export default class Range extends Component {

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
            var new_key = MyNotes[0];
            var new_octave = MyNotes[MyNotes.length-1];
            if (MyNotes.length>2){
                var new_accidential = MyNotes[1]; 
            } else {
                var new_accidential = "n";
            }
            var new_note = new_key.concat("/",new_octave)
            return [new_note, new_accidential]
        }

        const svgContainer = document.createElement('div');
        const {id, width, height, staffY, notes, clefs, colors, annotations, draw_lines} = this.props;
        var padding = 30;
        //var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
        
        //renderer.resize(width+padding, height);
        var vf = new VF.Factory({renderer: {elementId: svgContainer, width: width, height: height}});
        var context=vf.context

        //var system = vf.System(renderer.getContext())//.setContext(renderer.getContext())
        //new VF.Stave().setWidth()
        //var context = renderer.getContext();
        //var stave = new VF.Stave(padding, 30, width)
        //var firstClef = 'treble'
        //stave.addClef(firstClef)
        //stave.setContext(context).draw();
        var stave = vf.Stave().setY(staffY)

        var note_list=[]
        var lines =[]
        var newClef = 'treble'
        //var voice=[]
        //var voice = new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2);
        for(var i=0;i<notes.length;i++){
            var note = separate(notes[i])
            if (clefs[i]!==''){
                newClef=clefs[i]
        }
        var staveNote = vf.StaveNote({keys: [note[0]], duration:'4', clef: newClef}).addAccidental(0, new VF.Accidental(note[1]))
            if (clefs[i]!==''){
                var clefNote = new Vex.Flow.ClefNote(clefs[i], 'small');
                var noteSubGroup = new Vex.Flow.NoteSubGroup([clefNote]);
                staveNote.addModifier(0, noteSubGroup);
        }

        staveNote.addAnnotation(0, 
            new Vex.Flow.Annotation(annotations[i])
            .setJustification(Vex.Flow.Annotation.Justify.LEFT)
            .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)
        )
            note_list.push(staveNote)
        }
        
        //voice.addTickables(note_list);
        var voices = vf.Voice().setMode(2).addTickables(note_list)

        //Draw lines
        if(draw_lines){
        for(var i=1;i<notes.length;i++){
            lines.push(vf.StaveLine({from: note_list[i-1], to: note_list[i], first_indices: [0],
                last_indices: [0],}))
        }
    }

        //var formatter = new VF.Formatter().joinVoices([voice]).format([voice], width-padding);
        var formatter = new VF.Formatter().joinVoices([voices]).format([voices], width-padding);//.formatToStave([voices], stave);
        vf.draw()

        //Draw colored bars below
        for(var i=0;i<notes.length-1;i++){
        //Formatter notehead x coordinate
        var x_coo1 = formatter.voices[0].tickables[i].note_heads[0].x
        var x_coo2 = formatter.voices[0].tickables[i+1].note_heads[0].x
        console.log(x_coo1)

        //Formatter notehead y coordinate
        var y_coo1 = formatter.voices[0].tickables[i].note_heads[0].y
        var y_coo2 = formatter.voices[0].tickables[i+1].note_heads[0].y
        console.log(y_coo1)

        //Stave padding
        var st_x = stave.start_x
        var st_y = stave.y+stave.height

        //Use nested color scale, divide into sections
        var grad = colors[i].length
        for(var j=0;j<grad;j++) {
            var rect_width=(x_coo2-x_coo1)/grad
            context.beginPath() // start recording our pen's moves
            .moveTo((x_coo1+rect_width*j)+st_x, st_y+25) // pickup the pen and set it down at X=0, Y=0. NOTE: Y=0 is the top of the screen.
            .lineTo((x_coo1+rect_width+rect_width*j)+st_x, st_y+25) // now add a line to the right from (0, 0) to (50, 0) to our path
            .lineTo((x_coo1+rect_width+rect_width*j)+st_x, st_y+50) // add a line to the left and down from (50, 0) to (25, 50)
            .lineTo((x_coo1+rect_width*j)+st_x, st_y+50)
            .closePath() // now add a line back to wherever the path started, in this case (0, 0), closing the triangle.
            .fill({ fill: colors[i][j] }); // now fill our triangle in yellow.
            vf.draw()
        }
        }

        //voice.draw(context, stave);
        this.refs.outer5.appendChild(svgContainer);
    }

    componentDidMount() {
        this.setupScore();
    }

    componentDidUpdate(prevProps) {
        //if (this.notes !== prevProps.notes || this.instruments !== prevProps.instruments || this.target !== prevProps.target){
        //const {id} = this.props;
        var element = this.refs.outer5
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
        this.setupScore()
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
        const {id, width, height, notes}=this.props;
        return <div id={id} ref="outer5" style={{
            border: "none",
            padding: 0,
            borderRadius: 0,
            display: "inline-block",
        }}         
        >
        </div>;
    }

}

Range.defaultProps = {width:200, height:100, staffY:30, clefs:[], colors:[[]], annotations:[], draw_lines:true};

Range.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    //Width of the container
    width: PropTypes.number,
    //Height of the container
    height: PropTypes.number,
    //Top padding of the staff
    staffY: PropTypes.number,
    //List of notes to render with line
    notes: PropTypes.array,
    //list of clefs to preceed the note, use '' if not set
    clefs: PropTypes.array,
    //List of lists for colors, i.e. [[black], [white], [red, blue]]
    colors: PropTypes.array,
    //List of annotations
    annotations: PropTypes.array,
    //Draw lines or not
    draw_lines: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

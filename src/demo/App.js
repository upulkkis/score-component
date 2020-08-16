/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import Vex from 'vexflow';
import { ScoreComponent, Stave, Orchestration, Masking, Pianoroll, Range, Edit, Pianoinput} from '../lib';


const VF = Vex.Flow;
class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,

        };
    };

    componentDidMount() {

        const svgContainer = document.createElement('div');
        const {notes} = this.props;
        var width =300
        var height =200
        var padding = 50;
        var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);

        renderer.resize(width+padding, height);
        var context = renderer.getContext();

        var stave = new VF.Stave(padding, 30, width)
        stave.setText('bar: 1', VF.Modifier.Position.LEFT, { shift_y: -40 });
        //const text = new VF.StaveText()//, VF.Modifier.Position.ABOVE, { shift_x: 0, shift_y: 0 });
        stave.setContext(context).draw()

        var voice = new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2)
        var voice2 = new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2)

        var note_list = []
        var stave_lines = []
    for(var bar=0; bar<notes.length; bar++){
        var addNote=new VF.StaveNote({clef: 'treble', keys: [notes[bar]], duration: "q"})
        addNote.setStyle({strokeStyle: 'rgba(0,0,0,0)', fillStyle: 'green'})
        note_list.push(addNote)
        console.log(addNote)
        if (bar > 0){
            var first =   {first_note: note_list[bar], first_indices: [0]}
            var second =   {first_note: note_list[bar-1], first_indices: [0]}
                //    last_note: Note,
                //    first_indices: [n1, n2, n3],
                //    last_indices: [n1, n2, n3]
                //  }
            var staveline = new VF.StaveLine({first_note: note_list[bar], last_note: note_list[bar-1], first_indices: 0, last_indices:0})
            staveline.render_options.line_width = 3
            staveline.render_options.color = 'green'
            staveline.render_options.padding_left = -4
            staveline.render_options.padding_right = -4
            //addNote.addModifier(0, new VF.Modifier(staveline))

            stave_lines.push(staveline)
        }
        
    }
    //note_list[3].stave.modifiers[0].rendered = false
    console.log(note_list[3].setLedgerLineStyle({strokeStyle: 'none'}))
    voice.addTickables(note_list)
        

    
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], width-50);
        var formatter2 = new VF.Formatter().joinVoices([voice2]).format([voice2], width-50);
            //voices[k].draw(context, staves[k]);
    
 
        voice.draw(context, stave);
        for (var k=0; k<stave_lines.length; k++){
            stave_lines[k].setContext(context)
            stave_lines[k].draw()
        }
        //voice2.draw(context, stave);

        


        var sl=[]
        for(var j=0; j<voice.tickables.length; j++){
            if (j > 0){
                //var first =   {first_note: note_list[j], first_indices: [0]}
                //var second =   {first_note: note_list[j-1], first_indices: [0]}
                    //    last_note: Note,
                    //    first_indices: [n1, n2, n3],
                    //    last_indices: [n1, n2, n3]
                    //  }
                var sline = new VF.StaveLine({first_note: voice.tickables[j], last_note: voice.tickables[j-1], first_indices: 0, last_indices:0})

                sl.push(sline)
            }
        }
        //sl.draw(context, stave)

        this.refs.outer8.appendChild(svgContainer);
    }
    
    render() {
        return <div ref="outer8" style={{
            border: "none",
            padding: 0,
            borderRadius: 0,
            display: "inline-block",
        }}>
        </div>;
    }

}

class Lines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,

        };
    };

    componentDidMount() {

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
        const {id, width, height, staffY, notes, clefs, colors} = this.props;
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
            //var new_note = new VF.StaveNote({clef: newClef, keys: [note[0]], duration: "q"})
            //new_note.addAccidental(0, new VF.Accidental(note[1]))
            //note_list.push(new_note)
            note_list.push(staveNote)
        }
        
        //voice.addTickables(note_list);
        var voices = vf.Voice().setMode(2).addTickables(note_list)
        for(var i=1;i<notes.length;i++){
            //var line = new VF.StaveLine({from: note_list[i-1], to: note_list[i], first_indices: [0],
            //    last_indices: [0],})
            //line.setNotes({first_note: notes[i-1], last_note: notes[i]})
            lines.push(vf.StaveLine({from: note_list[i-1], to: note_list[i], first_indices: [0],
                last_indices: [0],}))
        }

        //var formatter = new VF.Formatter().joinVoices([voice]).format([voice], width-padding);
        var formatter = new VF.Formatter().joinVoices([voices]).format([voices], width-padding);//.formatToStave([voices], stave);
        vf.draw()

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

        context.beginPath() // start recording our pen's moves
        .moveTo(x_coo1+st_x, st_y+20) // pickup the pen and set it down at X=0, Y=0. NOTE: Y=0 is the top of the screen.
        .lineTo(x_coo2+st_x, st_y+20) // now add a line to the right from (0, 0) to (50, 0) to our path
        .lineTo(x_coo2+st_x, st_y+40) // add a line to the left and down from (50, 0) to (25, 50)
        .lineTo(x_coo1+st_x, st_y+40)
        .closePath() // now add a line back to wherever the path started, in this case (0, 0), closing the triangle.
        .fill({ fill: colors[i] }); // now fill our triangle in yellow.
        vf.draw()
        }

        //voice.draw(context, stave);
        this.refs.outerA.appendChild(svgContainer);
    }
    

    render() {
        return <div ref="outerA" style={{
            border: "none",
            padding: 0,
            borderRadius: 0,
            display: "inline-block",
        }}>
        </div>;
    }
}

class App extends Component {

    constructor() {
        super();
        this.notes=["c4", "f#7", "e1", "gb3"]
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    handleClick(props) {
        console.log('this is:', this);
        this.notes=['c4']
      }
//new VF.StaveNote().set
    render() {
        return (
            <div>
                <Pianoinput
                />
                <div children='testing' />
                <Edit
                />
                <Edit
                />
                <Test
                notes = {['c/5', 'c/5', 'd/6', 'd/6']}
                />
                                <Lines
                width={400}
                height={250}
                staffY={100}
                notes={['c4', 'b6', 'd4', 'c3', 'a3']}
                clefs={['treble', '', '', 'bass', '']}
                colors={['yellow', 'red', 'gray']}
                />
                <Range
                width={600}
                height={250}
                staffY={100}
                notes={['c4', 'b7', 'd4', 'c5', 'a5']}
                clefs={['treble', '', '', 'bass', '']}
                colors={[['yellow', 'red', 'gray'], ['yellow'], ['gray'], ['black']]}
                annotations={['quiet', 'loud', 'no', 'yes', 'what']}
                />
                <Pianoroll
                width={2000}
                height={500}
                scale={1}
                stave_list={[[
                    {clef: 'treble', name: 'violin', 
                        notes:[['c#4', 'g4'], [], 'f4', 'a4'],
                    colors:['blue', 'blue', 'green', 'green'], 
                    highlights:['red', 'red', 'magenta', 'yellow']}, 
                    {clef: 'bass', name: 'bassoon',
                    notes:[[], [], [], [], 'c#3', 'f3', 'a3']},
                    {clef: 'treble', name: 'jebu',
                    notes:['c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'gb4', 'f4', 'a4']},
                ],
                [
                    {clef: 'treble', name: 'violin', 
                    notes:['c#4', 'gb4', 'f4', 'a4']},
                    {clef: 'bass',
                    notes:[['c#3', 'd3'], ['c#3', 'd3'],'f3', 'a3']},
                    {clef: 'treble', name: 'jebu',
                    notes:['c#4', 'gb4', 'gb4', 'f4', 'a4'],
                    colors:['blue', 'blue', 'green', 'green']},
                ],
                [
                    {clef: 'treble', name: 'violin', 
                    notes:['c#4', 'gb4', 'f4', 'a4','c#4', 'gb4', 'f4', 'a4']},
                    {clef: 'bass', name: 'bassoon',
                    notes:['c#3', 'f3', 'a3']},
                    {clef: 'treble', name: 'jebu',
                    notes:['c#4', 'gb4', 'f4', 'a4']},
                ]
            ]}
                stave_spacing={70}
                />
                <Stave
                notes='c4/h[stem= "down", id="m2a", articulations="staccato.below,tenuto", style="fillStyle.blue"], e4'
                />
                <button onClick={this.handleClick}>
        Click me
      </button>
      <Masking
      id='masking_notestaff'
      masking_notevalues={[50, 67, 80, 94, 100]}
      masking_notesizes={[80, 70, 70, 70, 70]}
      masking_colors={['rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)', 'rgba(80,0,0,0.3)']}
      target_notevalues={[60, 64, 67, 72, 79]}
      target_notesizes={[40, 40, 40, 40, 40]}
      target_colors={['green', 'green', 'green', 'green', 'green']}
      />
                <Orchestration
                id={'id1'}
                notes={["c4", "c#4", "f#7", "e1", "gb3"]}
                target={[3]}
                target_color={'green'}
                instruments={['violin', 'flute','clarinet', 'bassoon', 'trombone']}
                highlights={['', '', 'magenta', 'yellow', 'red']}
                />
                <Orchestration
                id={'id2'}
                notes={["c3"]}
                target={[]}
                instruments={['']}
                />
                <ScoreComponent
                    setProps={this.setProps}
                    {...this.state}
                />
                <Stave
                notes='(c+4 e4 g4)/w[clef="bass"]'
                width={100}
                height={150}
                scale={0.5}
                padding={10}
                clef={'bass'}
                />

            </div>
        )
    }
}

export default App;

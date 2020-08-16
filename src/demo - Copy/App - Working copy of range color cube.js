/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import Vex from 'vexflow';

import { ScoreComponent, Stave, Orchestration, Masking, Pianoroll, Range} from '../lib';


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
        const {notes} = this.props;
        const {width} = this.props;
        const {height} = this.props;
        const {stave_spacing} = this.props;
        const {stave_list} = this.props;
        var padding = 100;

        console.log(height)
        var renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);

        renderer.resize(width+padding, height);
        var context = renderer.getContext();
        console.log(stave_list.length)
    for(var bar=0; bar<stave_list.length; bar++){

        
        // if (bar===0){
        //     padding=100
        // } 
        //Create staves
        var staves=[]
        for(var i = 0; i<stave_list[bar].length; i++){
            staves.push(new VF.Stave(padding+bar*(width/stave_list.length), stave_spacing*(i+1), width/stave_list.length))
            if (bar===0){
                staves[i].addClef(stave_list[bar][i].clef)
                staves[i].setText(stave_list[bar][i].name, VF.Modifier.Position.LEFT, { shift_x: -60 });
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
                var addNote=new VF.StaveNote({clef: newClef, keys: note_parts[0], duration: "q"})
                //Remember the previous part for check
                if (i>0){
                    prev_parts = separate(stave_list[bar][k].notes[i-1])
                }
                for (var j=0;j<note_parts[1][0].length;j++){
                    //Check if the note is the same as previous
                    var same_note = (note_parts[0][0]===prev_parts[0][0]&&note_parts[0][0][0]===prev_parts[0][0][0])

                    if(note_parts[1][0][j]!=='n' && !same_note){
                    addNote.addAccidental(j, new VF.Accidental(note_parts[1][0][j]))
                }

                    //Remember to add colors to notes somehow...
                    var note_color = 'black'

                    var color_list=stave_list[bar][k].colors
                    //If color property is defined, do something with colors...
                    if (typeof color_list != 'undefined'){
                        note_color=color_list[i]
                    }

                    addNote.setStyle({strokeStyle: 'rgba(0,0,0,0)', fillStyle: note_color})
            }
                note_list[k].push(addNote)
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
    }

        this.refs.outer.appendChild(svgContainer);
    }
    
    render() {
        return <div ref="outer" style={{
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
        const {id, width, height, staffY, notes, clefs} = this.props;
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
        //Formatter notehead x coordinate
        var x_coo1 = formatter.voices[0].tickables[1].note_heads[0].x
        var x_coo2 = formatter.voices[0].tickables[2].note_heads[0].x
        console.log(x_coo1)

        //Formatter notehead y coordinate
        var y_coo1 = formatter.voices[0].tickables[1].note_heads[0].y
        var y_coo2 = formatter.voices[0].tickables[2].note_heads[0].y
        console.log(y_coo1)

        //Stave padding
        var st_x = stave.start_x
        var st_y = stave.y+stave.height

        //Create linear gradient

        var gradient = document.createElementNS(svgContainer, 'linearGradient');
// Store an array of stop information for the <linearGradient>
        var stops = [
            {
                "color": "#2121E5",
                "offset": "0%"
            },{
                "color": "#206DFF",
                "offset": "100%"
            }
        ];
// Parses an array of stop information and appends <stop> elements to the <linearGradient>
for (var i = 0, length = stops.length; i < length; i++) {

    // Create a <stop> element and set its offset based on the position of the for loop.
    var stop = document.createElementNS(svgContainer, 'stop');
    stop.setAttribute('offset', stops[i].offset);
    stop.setAttribute('stop-color', stops[i].color);

    // Add the stop to the <lineargradient> element.
    gradient.appendChild(stop);

}
gradient.id = 'Gradient';
gradient.setAttribute('x1', '0');
gradient.setAttribute('x2', '0');
gradient.setAttribute('y1', '1');
gradient.setAttribute('y2', '0');
svgContainer.appendChild(gradient);

        var grad = [{'linearGradient':{'x1':'0%', 'y1':'0%', 'x2':'100%', 'y2':'0%',
    'stop':{'offset':'0%', 'style':{'stop-color':'yello', 'stop-opacity':'1'}},
    'stop':{'offset':'100%', 'style':{'stop-color':'rgb(255,0,0)', 'stop-opacity':'1'}},
}}]
/*
var gr = context.setFillStyle().gradient('linear', function(stop) {
    stop.at(0, '#FFF');
    stop.at(1, '#000');
});
gr.from(0, 0).to(0, 1);
*/console.log(stave)//.getElementsByTagName('svg'))
        context.beginPath() // start recording our pen's moves
        .moveTo(x_coo1+st_x, st_y+20) // pickup the pen and set it down at X=0, Y=0. NOTE: Y=0 is the top of the screen.
        .lineTo(x_coo2+st_x, st_y+20) // now add a line to the right from (0, 0) to (50, 0) to our path
        .lineTo(x_coo2+st_x, st_y+40) // add a line to the left and down from (50, 0) to (25, 50)
        .lineTo(x_coo1+st_x, st_y+40)
        .closePath() // now add a line back to wherever the path started, in this case (0, 0), closing the triangle.
        .fill({ fill: 'yellow' }); // now fill our triangle in yellow.
        vf.draw()

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
                                <Lines
                width={400}
                height={250}
                staffY={100}
                notes={['c4', 'b6', 'd4', 'c3', 'a3']}
                clefs={['treble', '', '', 'bass', '']}
                />
                <Range
                width={400}
                height={250}
                staffY={100}
                notes={['c4', 'b7', 'd4', 'c5', 'a5']}
                clefs={['treble', '', '', 'bass', '']}
                />
                <Pianoroll
                width={800}
                height={500}
                stave_list={[[
                    {clef: 'treble', name: 'violin', 
                        notes:['c#4', 'gb4', 'f4', 'a4'],
                    colors:['blue', 'blue', 'green', 'green']}, 
                    {clef: 'bass', name: 'bassoon',
                    notes:['c#3', 'f3', 'a3']},
                    {clef: 'treble', name: 'jebu',
                    notes:['c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'c#4', 'gb4', 'f4', 'a4']},
                ],
                [
                    {clef: 'treble', name: 'violin', 
                    notes:['c#4', 'gb4', 'f4', 'a4']},
                    {clef: 'bass',
                    notes:[['c#3', 'd3'], ['c#3', 'd3'],'f3', 'a3']},
                    {clef: 'treble', name: 'jebu',
                    notes:['c#4', 'gb4', 'f4', 'a4'],
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
      masking_colors={['red', 'red', 'red', 'red', 'red']}
      target_notevalues={[60, 64, 67, 72, 79]}
      target_notesizes={[40, 40, 40, 40, 40]}
      target_colors={['green', 'green', 'green', 'green', 'green']}
      />
                <Orchestration
                id={'id1'}
                notes={["c4", "f#7", "e1", "gb3"]}
                target={[3]}
                instruments={['violin', 'clarinet', 'bassoon', 'trombone']}
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
                notes='(c4 e4 g4)/h, a4[clef="bass"]'
                />

            </div>
        )
    }
}

export default App;

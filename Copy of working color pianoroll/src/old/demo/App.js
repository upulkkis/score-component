/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import Vex from 'vexflow';

import { ScoreComponent, Stave, Orchestration, Masking, Pianoroll} from '../lib';


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
        
        for(var k = 0; k<stave_list[bar].length; k++){
            note_list.push([])
            voices.push(new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(2));
            for(var i = 0; i<stave_list[bar][k].notes.length; i++){
                var newClef = stave_list[bar][k].clef
                var addNote=new VF.StaveNote({clef: newClef, keys: [stave_list[bar][k].notes[i]], duration: "q"})
                addNote.addAnnotation(0, new VF.Accidental("#").setYShift(-24)).setXShift(-13)
                addNote.setStyle({strokeStyle: 'rgba(0,0,0,0)', fillStyle: 'green'})
                note_list[k].push(addNote)
            }
            voices[k].addTickables(note_list[k])
            var format_width = width/stave_list.length
            if (bar===0){
                format_width=format_width-30
            }
            var formatter = new VF.Formatter().joinVoices([voices[k]]).format([voices[k]], format_width);
            //voices[k].draw(context, staves[k]);
        }
        //var formatter = new VF.Formatter().joinVoices(voices).format(voices, 50);
        //var formatter = new VF.Formatter().format(voices, 100);

        for(var k = 0; k<stave_list[bar].length; k++){
            
            voices[k].draw(context, staves[k]);
        }
    }
/*
        var stave_t = new VF.Stave(20, 110, width);
        stave_t.addClef("treble") //.addTimeSignature("4/4");
        stave_t.setContext(context).draw();

        var stave_b = new VF.Stave(20, 200, 200);
        stave_b.addClef("bass") //.addTimeSignature("4/4");
        stave_b.setContext(context).draw();
        
        //Do connectors
        var connector = new VF.StaveConnector(stave_t, stave_b);
        connector.setType(VF.StaveConnector.type.SINGLE_LEFT);
        connector.setContext(context);
        connector.draw();
        // var connector2 = new VF.StaveConnector(stave_t, stave_b);
        // connector2.setType(VF.StaveConnector.type.SINGLE_RIGHT);
        // connector2.setContext(context);
        //connector2.draw();
        var connector3 = new VF.StaveConnector(stave_t, stave_b);
        connector3.setType(VF.StaveConnector.type.BRACKET);
        connector3.setContext(context);
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
        
        var note_data = separate(notes, instruments, target)
        
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

        //Funktio jolla piirretään nuotin viereen
        function viereen(num, pos) { return new VF.FretHandFinger(num).setPosition(pos); }
        
        //Duunataan sointu, jossa kaksi nuottia:
        var new_note = new VF.StaveNote({clef: "treble", keys: ["a/3", "d/4"], duration: "h" })
        
        //Vaihdetaan ylemmän =1 väri punaiseksi
        new_note.setKeyStyle(1, {fillStyle: "red"});
        new_note.addModifier(1, viereen('Soitin', VF.Modifier.Position.RIGHT))
        new_note.addModifier(0, viereen('Toinen soitin', VF.Modifier.Position.RIGHT))
        new_note.addAccidental(1, new VF.Accidental("n"))
        new_note.addAccidental(0, new VF.Accidental("b"))

        //Lisätään listaan
        var new_notes = [
            new_note,
          ];
        
          // Create a voice in 4/4 and add the notes from above
        var voice_t = new VF.Voice({num_beats: 1,  beat_value: 4});
        var voice_b = new VF.Voice({num_beats: 1,  beat_value: 4});
        voice_t.addTickables([treble_notes]);
        voice_b.addTickables([bass_notes]);
    
        var formatter = new VF.Formatter().joinVoices([voice_t]).format([voice_t], width);
        var formatter = new VF.Formatter().joinVoices([voice_b]).format([voice_b], width);
        voice_t.draw(context, stave_t);
        voice_b.draw(context, stave_b);
        */
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
                <Test
                width={400}
                height={500}
                stave_list={[[
                    {clef: 'treble', name: 'violin', 
                        notes:['c/4', 'd/5', 'f/6', 'a/3', 'g/5']}, 
                    {clef: 'bass', name: 'bassoon',
                        notes:['c/3', 'a/3', 'g/3']}, 
                    {clef: 'treble', name: 'jebu',
                        notes:['c/4', 'f/4', 'a/3', 'g/4']},
                ],
                [
                    {clef: 'treble', name: 'violin', 
                    notes:['c/4', 'f/4', 'a/3', 'g/4']}, 
                    {clef: 'bass', name: 'bassoon',
                        notes:['c/3', 'a/3', 'g/3']}, 
                    {clef: 'treble', name: 'jebu',
                        notes:['c/4', 'd/5', 'f/6', 'a/3', 'g/5']},
                ],
                [
                    {clef: 'treble', name: 'violin', 
                        notes:['c/4', 'd/5', 'f/6', 'a/3', 'g/5']}, 
                    {clef: 'bass', name: 'bassoon',
                        notes:['c/3', 'a/3', 'g/3']}, 
                    {clef: 'treble', name: 'jebu',
                        notes:['c/4', 'f/4', 'a/3', 'g/4']},
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
      <Pianoroll
      id='testing'
      notes={["c4", "f#7", "e1", "gb3"]}
      instruments={[]}
      target={[]}
      width={200}
      />
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

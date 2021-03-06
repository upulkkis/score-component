import Vex from 'vexflow';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const VF = Vex.Flow;

export default class Stave extends Component {

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


        var vf = new VF.Factory({
            renderer: {elementId: svgContainer, width: 150, height:150}
        });

        var score = vf.EasyScore();
        var annotation = vf.annotation;
        var score2 = vf.EasyScore();

        // first bar (with time signature and cleffs)
        var bar1 = score.voice(score.notes(notes));
        //var bar2 = score.voice(score.notes('(c#2 d2)/w {clef: "bass"}'));

        //var beams1 = VF.Beam.applyAndGetBeams(bar1); // autobeam a voice
        //var system = this.makeSystem(vf, 500);
        var system = vf.System()
        system.addStave({voices: [bar1]}).addClef('treble') // .addTimeSignature('4/4');
        //system.addStave({voices: [bar2]}).addClef('bass')
        system.addConnector()
/*          // second bar
        var bar2 = score.voice(score.notes(notes[1]));
        var beams2 = VF.Beam.applyAndGetBeams(bar2);

        var system2 = this.makeSystem(vf, 500);
        system2.addStave({
            voices: [
                bar2,
            ]
        });  */
        
        vf.draw();


        //beams1.forEach(function(beam) {
        //    return beam.setContext(vf.getContext()).draw();
        //});
        //beams2.forEach(function(beam) {
        //    return beam.setContext(vf.getContext()).draw();
        //});

        this.refs.outer.appendChild(svgContainer);
    }

    makeSystem(vf, width) {
        const system = vf.System({ x: this.state.x, y: this.state.y, width: width, spaceBetweenStaves: 10 });
        this.setState({x: this.state.x + width});
        return system;
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

Stave.defaultProps = {};

Stave.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    notes: PropTypes.string.isRequired,


    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

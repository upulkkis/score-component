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

    setup() {


        const svgContainer = document.createElement('div');

        const {notes, clef, width, height, scale, padding} = this.props;


        var vf = new VF.Factory({
            renderer: {elementId: svgContainer, width: width, height:height}
        });
        var context=vf.context
        var score = vf.EasyScore();

        // first bar (with time signature and cleffs)
        var bar1 = score.voice(score.notes(notes));
        bar1.setMode(2)
        //var bar2 = score.voice(score.notes('(c#2 d2)/w {clef: "bass"}'));

        //var beams1 = VF.Beam.applyAndGetBeams(bar1); // autobeam a voice
        //var system = this.makeSystem(vf, 500);
        var system = vf.System()
        system.addStave({voices: [bar1]}).addClef(clef).setY(padding) // .addTimeSignature('4/4');
        //system.addStave({voices: [bar2]}).addClef('bass')
        system.addConnector()
        
        vf.draw();
        context.scale(scale, scale)
        this.refs.outer.appendChild(svgContainer);
    }

    componentDidMount() {
        this.setup()
    }

    makeSystem(vf, width) {
        const system = vf.System({ x: this.state.x, y: this.state.y, width: width, spaceBetweenStaves: 10 });
        this.setState({x: this.state.x + width});
        return system;
    }

    componentDidUpdate(prevProps) {
        var element = this.refs.outer
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
        this.setup()
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

Stave.defaultProps = {clef: 'treble', scale: 1, width: 200, height: 150, padding: 30};

Stave.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    notes: PropTypes.string.isRequired,
    clef: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
    padding: PropTypes.number,


    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

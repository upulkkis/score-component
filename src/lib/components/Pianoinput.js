import * as music21 from './music21.debug.js';
import Vex from 'vexflow';
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const VF = Vex.Flow;

export default class Pianoinput extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            note: '',
            x: 0,
            y: 0,

        };
    };

    setup() {
        const {scale, keywidth} = this.props
        var kd = document.createElement('div');
        var k = new music21.keyboard.Keyboard();
        k.showNames = true;

        k.scaleFactor = scale;
        k.startPitch = 22;
        k.endPitch = k.startPitch + 14;
        k.scrollable = true;
        k.markC = true
        k.showNames = true
        k.showOctaves = true
        k.whiteKeyWidth = keywidth
        
        //k.hideable = true
        //console.log(k)
        k.appendKeyboard(kd);
        //this.note = kd
       this.refs.outer10.appendChild(kd);
       this.refs.outer10.addEventListener("click", this.check.bind(this), false)
       // document.addEventListener('click', function (event) {
       // if (!event.target.closest('.keyboardkey')) {return;} 
       // console.log(event.target.id);
       // }, false);
       // kd.appendChild(document.createElement('div'))

    }

    componentDidMount() {
        this.setup()
    }

    check(event) {
        const {setProps} = this.props
        if (!event.target.closest('.keyboardkey')) {return;} 
        this.note = parseInt(event.target.id)
        //console.log(event.target.id);
        setProps({note: this.note})
        //console.log(this.note)
    }

    /*
    componentDidUpdate(prevProps) {
        var element = this.refs.outer10
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
        this.setup()
        }

        */

    render() {
        const{id}=this.props;
        return <div ref="outer10" id={id} /* onClick= {this.check.bind(this)} */ style={{
            border: "none",
            padding: 0,
            borderRadius: 0,
            display: "inline-block",
        }}>
        </div>;
    }

}

Pianoinput.defaultProps = {note: 60, scale: 0.7, keywidth: 40};

Pianoinput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    note: PropTypes.number,
    scale: PropTypes.number,
    keywidth: PropTypes.number,
    /**
     * A label that will be printed when this component is rendered.
     */


    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

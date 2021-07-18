import React from 'react';
import moment from 'moment-timezone';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degSeconds: 0,
            degMinutes: 0,
            degHours: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        let date = moment().tz(this.props.timeZone),
            seconds = date.second(),
            minutes = date.minute(),
            hours = date.hour();

        this.setState({
            degSeconds: seconds * 360 / 60,
            degMinutes: (minutes + seconds / 60) * 360 / 60,
            degHours: (hours + minutes / 60 + seconds / 60 / 60) * 360 / 12
        });
    }

    render() {
        return (
            <div className="clock">
                <div className="c1">
                    <div className="c2">
                        <div className="pin">
                            <div className="inner" />
                        </div>
                        <div className="sec" style={{ WebkitTransform: `rotate(${this.state.degSeconds}deg)`, MozTransform: `rotate(${this.state.degSeconds}deg)`, msTransform: `rotate(${this.state.degSeconds}deg)`, OTransform: `rotate(${this.state.degSeconds}deg)`, transform: `rotate(${this.state.degSeconds}deg)` }} />
                        <div className="min" style={{ WebkitTransform: `rotate(${this.state.degMinutes}deg)`, MozTransform: `rotate(${this.state.degMinutes}deg)`, msTransform: `rotate(${this.state.degMinutes}deg)`, OTransform: `rotate(${this.state.degMinutes}deg)`, transform: `rotate(${this.state.degMinutes}deg)` }} />
                        <div className="hr" style={{ WebkitTransform: `rotate(${this.state.degHours}deg)`, MozTransform: `rotate(${this.state.degHours}deg)`, msTransform: `rotate(${this.state.degHours}deg)`, OTransform: `rotate(${this.state.degHours}deg)`, transform: `rotate(${this.state.degHours}deg)` }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;
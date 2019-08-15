import React, { Component } from "react";
// import "../App.css";

class Countdown extends Component {
    state = {
        countdown: {
            days: ``,
            hours: ``,
            minutes: ``,
            seconds: ``
        },
    }

    componentDidMount() {
        setTimeout(()=> {
            let countdownTime = new Date(this.props.time);
            return setInterval(() => {
                let currentTime = new Date();
                let difference = countdownTime - currentTime;
                let d = Math.floor(difference / (1000 * 60 * 60 * 24));
                let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                let s = Math.floor((difference % (1000 * 60)) / 1000);
                this.setState({
                  countdown: {
                    days: d,
                    hours: h,
                    minutes: m,
                    seconds: s
                  }
                })
            },1000)
        },500);
      }

    render() {
        return (
            <div className="countdown">
                <div className="datetime-column">
                    <h3>{this.state.countdown.days}</h3>
                    <h4>Days</h4>
                </div>
                <div className="datetime-column">
                    <h3>{this.state.countdown.hours}</h3>
                    <h4>Hours</h4>
                </div>
                <div className="datetime-column">
                    <h3>{this.state.countdown.minutes}</h3>
                    <h4>Mins</h4>
                </div>
                <div className="datetime-column">
                    <h3>{this.state.countdown.seconds}</h3>
                    <h4>Secs</h4>
                </div>
            </div>
        );
    }
}
export default Countdown;
import React, { useState, useEffect } from "react";

const Countdown = props => {
    const [ countdown, setCountdown ] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    })

    useEffect(() => {
        setTimeout(()=> {
            let countdownTime = new Date(props.time);
            return setInterval(() => {
                let currentTime = new Date();
                let difference = countdownTime - currentTime;
                let d = Math.floor(difference / (1000 * 60 * 60 * 24));
                let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                let s = Math.floor((difference % (1000 * 60)) / 1000);
                setCountdown({
                    days: d,
                    hours: h,
                    minutes: m,
                    seconds: s
                })
            },1000)
        },500);
      })

        return (
            <div className="countdown">
                <div className="datetime-column">
                    <h3>{countdown.days}</h3>
                    <h4>Days</h4>
                </div>
                <div className="datetime-column">
                    <h3>{countdown.hours}</h3>
                    <h4>Hours</h4>
                </div>
                <div className="datetime-column">
                    <h3>{countdown.minutes}</h3>
                    <h4>Mins</h4>
                </div>
                <div className="datetime-column">
                    <h3>{countdown.seconds}</h3>
                    <h4>Secs</h4>
                </div>
            </div>
        );
}
export default Countdown;
import React, { useEffect, useState } from "react";
import './css/Timer.css'; 

export default function Board({start}) {
    const [minutes, setMinutes] = useState(0); 
    const [seconds, setSeconds] = useState(0); 
    
    useEffect(() => {
        if(start) {
            if(seconds > 59) {
                setMinutes(minutes + 1); 
                setSeconds(0);
            }
            else {
                setTimeout(() => {setSeconds(seconds + 1)}, 1000);
            }
        }
    }, [start, seconds, minutes]);

    return(
        <div id="timer">
            <p id="digits">
                {minutes.toString().padStart(2, "0")}:
            </p>
            <p id="digits">
                {seconds.toString().padStart(2, "0")}
            </p>
        </div>
    );
}
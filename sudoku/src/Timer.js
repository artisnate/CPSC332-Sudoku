import React, { useEffect} from "react";
import './css/Timer.css'; 

// const date = new Date(); 
// let day = date.getDate();
// let month = date.getMonth() + 1; 
// let year = date.getFullYear();

export default function Board({start, minutes, seconds, setSeconds, setMinutes, gameRecord, setGameRecord}) {    
    useEffect(() => {
        if(start) {
            if(seconds > 59) {
                setMinutes(minutes + 1); 
                setSeconds(0);
            }
            else {
                setTimeout(() => {setSeconds(seconds + 1)}, 1000);
            }

            let newTime = `00:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; 
        
            setGameRecord({...gameRecord, time: newTime});
        }
    }, [start, minutes, seconds, setSeconds, setMinutes, gameRecord, setGameRecord]);

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
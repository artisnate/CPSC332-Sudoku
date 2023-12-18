import { useEffect, useState} from "react";
import './css/GameRecords.css'; 
import axios from 'axios'; 

export default function GameRecords() {
    const [records, setRecords] = useState([])

    useEffect(() => {
      axios.get('http://localhost:8081/records')
      .then(res => setRecords(res.data))
      .catch(err => console.log(err)); 
    }, [])

    return(
        <>
            <table id="records-table">
                <thead>
                    <th id="records-head">Game #</th>
                    <th id="records-head">Time</th>
                    <th id="records-head">Date Completed</th>
                    <th id="records-head">Difficulty</th>
                </thead>
                <tbody>
                    {
                        records.map((d, i) => (
                            <tr key={i} id="row">
                                <td id="record-row"> <p className="item">{d.user}</p> </td>
                                <td id="record-row"> <p className="item">{d.time.substr(3)}</p> </td>
                                <td id="record-row"> <p className="item">{d.date.substr(0,10)}</p> </td>
                                <td id="record-row"> <p className="item">{d.difficulty}</p> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
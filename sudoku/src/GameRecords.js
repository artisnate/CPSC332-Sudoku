import { useEffect, useState} from "react";

export default function GameRecords() {
    const [records, setRecords] = useState([])

    useEffect(() => {
      fetch('http://localhost:8081/records')
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err)); 
    }, [])

    return(
        <>
            <table>
                <thead>
                    <th>Game #</th>
                    <th>Time</th>
                    <th>Date Completed</th>
                    <th>Difficulty</th>
                </thead>
                <tbody>
                    {
                        records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.user}</td>
                                <td>{d.time}</td>
                                <td>{d.date}</td>
                                <td>{d.difficulty}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
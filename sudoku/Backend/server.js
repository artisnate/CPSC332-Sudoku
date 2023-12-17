const express = require('express'); 
const mysql = require('mysql') 
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "cps-database.gonzaga.edu", 
    user: 'nmeshal', 
    password: 'nmeshal26034167', 
    database: 'nmeshal_DB'
})

app.get('/', (re, res) => {
    return res.json("From Backend"); 
})

app.get('/records', (req, res) => {
    const sql = "SELECT * FROM game_record";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data); 
    })
})

app.listen(8081, () => {
    console.log("listening"); 
})
import json from 'json'; 

const express = require('express'); 
const mysql = require('mysql') 
const cors = require('cors')
const fs = require('fs'); 

const configFile = '../config.ini'; 
const config = fs.readFileSync(configFile, 'utf8'); 
const configObject = json.parse(config); 

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: configObject['servername'], 
    user: configObject['username'], 
    password: configObject['password'], 
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
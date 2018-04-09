const express = require ('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'rentals'

});

connection.connect((error) => {
    if(error) {
        console.log('Error');
    } else {
        console.log('Connected');

    }
});

// connection.query('CREATE TABLE test (name varchar(10), dob date);', () => console.log('table created'));
connection.query('SELECT * FROM parent;', (error, rows) => {
    if(error) {
        console.log('An error has occured');
    } 
    console.log(rows[0]); // RETURNS an array of objects
    // rows.forEach((row) => console.log(row.id))
    // let array = [...rows];
    // console.log(array);

});

// connection.query('');

app.post('/', (req, res) => {

    let data = req.body.inputValues;
    
    console.log(data.hardwood);

    res.send('Request delivered');

});

app.listen(3001, () => {
    console.log('Node server listening on port 3001');
});



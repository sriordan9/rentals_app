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
// connection.query('SELECT * FROM parent;', (error, rows) => {
//     if(error) {
//         console.log('An error has occured');
//     } 
    // console.log(rows[0]); 
    
    // RETURNS an array of objects
    // rows.forEach((row) => console.log(row.id))
    // let array = [...rows];
    // console.log(array);
// });

app.post('/', (req, res) => {

    //place query commands into variables so you can reuse the promise function with different commands

    let queryPromise = () => {

        let promise = new Promise((resolve, reject) => {
            connection.query('SELECT * FROM unit;', (error, data) => {
                
                if (error) {
                    return reject(error);
                }
                console.log('before resolve');
                console.log(data[0].id);
                resolve(data);
            });
        });
        return promise;
    }

    queryPromise()
        .then((data) => {
            console.log(`.then data printing:`);
            console.log(data);

            let formData = req.body.inputValues;

            res.send(JSON.stringify(data)); //needs to be in JSON bc axios will auto parse it on front end
    
            console.log(formData.hardwood);  
        })
        .catch((error) => console.log("Sean's error message"));
});

app.listen(3001, () => {
    console.log('Node server listening on port 3001');
});



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
        console.log(`Error encountered: ${error}`);
    } else {
        console.log('Connected');

    }
});

app.post('/', (req, res) => {

    let formData = req.body.inputValues;

    let bedrooms = formData.rooms,      // lower case in order to interact smoothly with db values
        hardwood_floor = formData.hardwood.toLowerCase(),
        wheelchair_access = formData.wheelchair.toLowerCase(),
        pets_allowed = formData.pets.toLowerCase();

    //place query commands into variables so you can reuse the promise function with different commands

    let queryPromise = () => {

        let promise = new Promise((resolve, reject) => {

            connection.query(`SELECT unit.id, unit.floor_level, unit_number, unit.bathrooms
                FROM unit
                INNER JOIN parent ON unit.parent_id = parent.id 
                    AND parent.wheelchair_access = '${wheelchair_access}'
                    AND parent.pets_allowed = '${pets_allowed}'
                    AND unit.bedrooms = '${bedrooms}'
                INNER JOIN user ON unit.id != user.id;`, 
                (error, data) => {
                
                    if (error) {
                        return reject(error);
                    }
                    resolve(data);
            });
        });
        return promise;
    }

    queryPromise()
        .then((data) => {

            res.send(JSON.stringify(data)); //needs to be in JSON bc axios will auto parse it on front end  
        })
        .catch((error) => {
            console.log(`Error encountered`);
            console.log(error);
        });
});

app.listen(3001, () => {
    console.log('Node server listening on port 3001');
});



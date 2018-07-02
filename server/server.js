const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3001, () => {
    console.log('Node server listening on port 3001');
});

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
        console.log('Connected to database');

    }
});

// ---------------------------------------> START show/reserve available apartments

let formData, bedrooms, hardwood_floor, wheelchair_access, pets_allowed;

let filteredPromise = () => {   // user filtered apartments results

    let promise = new Promise((resolve, reject) => {

        connection.query(`SELECT unit.id, unit.floor_level, unit_number, unit.bathrooms
            FROM unit
            INNER JOIN parent ON unit.parent_id = parent.id 
                AND parent.wheelchair_access = '${wheelchair_access}'
                AND parent.pets_allowed = '${pets_allowed}'
                AND unit.bedrooms = '${bedrooms}'
                AND unit.hardwood_floor = '${hardwood_floor}'
            WHERE unit.id IS NOT NULL;`,
            //INNER JOIN user ON unit.id != user.id;`, 
            (error, data) => {

                if (error) {
                    return reject(error);

                } else if(data[0] === undefined || data[0] ==='undefined') {
                    data = [{id: 1, unit_number: 'No matching rooms left'}];
                } 
                resolve(data);
        });
    });
    return promise;
}

let allAvailablePromise = () => {   // user chose not to filter apartments

    let promise = new Promise((resolve, reject) => {

        connection.query(`SELECT unit.id, unit.unit_number, 
            parent.wheelchair_access, parent.pets_allowed
            FROM unit 
            LEFT JOIN parent ON unit.parent_id = parent.id 
            WHERE unit.id IS NOT NULL;`,
            //INNER JOIN user ON unit.id != user.id;`, 
            (error, data) => {

                if (error) {
                    return reject(error);
                }
                resolve(data);
        });
    });
    return promise;
}

app.post('/filtered', (req, res) => {
    formData = req.body.inputValues;

    bedrooms = formData.rooms,      // lower case in order to interact smoothly with db values
    hardwood_floor = formData.hardwood.toLowerCase(),
    wheelchair_access = formData.wheelchair.toLowerCase(),
    pets_allowed = formData.pets.toLowerCase();

    filteredPromise()
        .then((data) => {
            res.send(JSON.stringify(data)); //needs to be in JSON bc axios will auto parse it on front end  
        })
        .catch((error) => {
            console.log(`Error encountered`);
            console.log(error);
        });
});

app.get('/allAvailable', (req, res) => {

    allAvailablePromise()
        .then((data) => {

            res.send(JSON.stringify(data)); //needs to be in JSON bc axios will auto parse it on front end  
        })
        .catch((error) => {
            console.log(`Error encountered`);
            console.log(error);
        });
});

app.post('/reservedApt', (req, res) => { // sends front end the apartments user has reserved
    email = req.body.email;

    let promise = () => {
        return new Promise((resolve, reject) => { // Chain promises to send first query, if no apt reserved then query returns nothing. Then need to send 2nd simple query.
            connection.query(`SELECT unit.unit_number 
                FROM user 
                INNER JOIN unit 
                ON user.id=unit.user_id 
                AND user.email='${email}';`, 
                (error, data) => {
                    
                    if (error) {
                        return reject(error);
                    }
                    resolve(data);      
            });
        })
    };

    promise().then((data) => {
        
        if(data[0] && data[0] !== undefined) {
            res.send(data[0]);

        } else res.send(false);
    });
})

app.post('/reserveAnApt', (req, res) => { // sends front end the apartments user has reserved
    
    info = req.body;
    
    let promise = () => {
        return new Promise((resolve, reject) => { 
            connection.query(`UPDATE unit 
                SET user_id=${info.user_id} 
                WHERE unit_number=${info.selectedApt};`, 
                (error, data) => {
                    
                    if (error) {
                        return reject(error);
                    }
                    resolve(data);      
            });
        })
    };

    promise().then(() => {
       res.send('Apt reserved!')
    });
})

app.post('/unReserveApt', (req, res) => { // sends front end the apartments user has reserved
    
    info = req.body;

    let promise = () => {
        return new Promise((resolve, reject) => { 
            connection.query(`UPDATE unit 
                SET user_id=NULL 
                WHERE unit_number=${info.unit_number};`, 
                (error, data) => {
                    
                    if (error) {
                        return reject(error);
                    }
                    resolve(data);      
            });
        })
    };

    promise().then(() => {
        res.send('Apt removed');
        
    });
})

// ---------------------------------------> END show available apartments

// ---------------------------------------> START login & create acct page

let first_name, last_name, email, password;

// let createAcctPromise = () => {   // user chose not to filter apartments

//     let promise = new Promise((resolve, reject) => {

//         connection.query(`INSERT INTO user (first_name, last_name, email, password)
//             VALUES (${first_name}, ${last_name}, ${email}, ${password};`, 
//             (error, data) => {
            
//                 if (error) {
//                     return reject(error);
//                 }
//                 resolve(data);
//         });
//     });
//     return promise;
// }

app.post('/login', (req, res) => {
    loginData = req.body.login;

    // lower case in order to interact smoothly with db values
    let email = loginData.email.toLowerCase(),
        password = loginData.password;

    let promise = () => {
        return new Promise((resolve, reject) => { 
            
            connection.query(`SELECT password, first_name, email, id 
                FROM user WHERE email='${email}';`, 
                (error, data) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(data);      
            });
        })
    };

    promise().then((data) => {

        if(data[0] !== undefined &&  // if undefined then username doesn't exist in db
            data[0].password === password) { //  check for correct password

                res.send(data[0]); // Send back name of person & email

        } else res.send(false); // Bad login info
    });
        // .catch((error) => {
        //     console.log(`Error encountered`);
        //     console.log(error);
        // });
});

app.post('/createAcct', (req, res) => {
    createData = req.body.createAcct; 

    let first_name = createData.firstName.toLowerCase(), // lower case in order to make more consistent
        last_name = createData.lastName.toLowerCase(), // if ever need to check against db values
        email = createData.email.toLowerCase(), 
        password = createData.password;

    connection.query(`INSERT INTO user (first_name, last_name, email, password)
        VALUES ('${first_name}', '${last_name}', '${email}', '${password}');`,
        (error, results) => {
            if(error) {
                return error;
            }    
        }
    );
});

// * Separate some functions into separate files?
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(session({ // remove if from session package
//     secret: 'passCode',
//     resave: false,
//     cookie: {
//         secure: false
//     },
//     saveUninitialized: true
// }));


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

app.post('/reserveApt', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// ---------------------------------------> END show available apartments

// ---------------------------------------> START login & create acct page

let first_name, last_name, email, password;

let createAcctPromise = () => {   // user chose not to filter apartments

    let promise = new Promise((resolve, reject) => {

        connection.query(`INSERT INTO user (first_name, last_name, email, password)
            VALUES (${first_name}, ${last_name}, ${email}, ${password};`, 
            (error, data) => {
            
                if (error) {
                    return reject(error);
                }
                resolve(data);
        });
    });
    return promise;
}

app.post('/login', (req, res) => {
    loginData = req.body.login;

    // lower case in order to interact smoothly with db values
    let email = loginData.email.toLowerCase(),
        password = loginData.password;

    let promise = () => {
        return new Promise((resolve, reject) => {

            connection.query(`SELECT password, first_name, email FROM user WHERE email = '${email}'`, 
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

                res.send(data[0]); // Send back name of person & reserved rooms for user dashboard

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
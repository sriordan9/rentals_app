const express = require ('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    
    console.log(req.body.inputValues.hardwood);

    res.send('Request delivered');

});

app.listen(3001, () => {
    console.log('Node server listening on port 3001');
});



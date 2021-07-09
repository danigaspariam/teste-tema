const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));


let db = [
    { '1': { numero: '1'} },
    { '2': { numero: '2'} },
    { '3': { numero: '3'} },
  

]

app.get('/', (req, res) => {
    return res.json(db);
})

app.listen(3030, () =>{
    console.log(`express started at http://localhost.3030`);
})

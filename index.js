const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));


let db = [10, 20, 30, 40];

app.get('/', (req, res) => {
    var inteiro = req.params.inteiro;
    return res.json({
        message: `${db.length} é o total de números inteiros`
    });
})

app.listen(3030, () =>{
    console.log(`express started at http://localhost.3030`);
})

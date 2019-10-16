const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://127.0.0.1/data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('Connected to database!')
}).catch(err=>console.log('Cannot connect to db!'));

app.use(cors());


app.use(express.static('public'));

app.use(bodyParser.json());

app.use(require('./routes/api'));




app.listen(process.env.port||4000,()=>{
    console.log('Listening to port 4000!');
})

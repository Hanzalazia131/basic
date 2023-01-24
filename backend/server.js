const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require ('dotenv').config();


const app = express();
app.use(express.json());

const port = process.env.port || 5000;

app.use(cors());

const uri = process.env.ATLAS_URI;

mongoose.set("strictQuery", false); 
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const InfoRouter = require('./routes/Infos');


app.use('/Infos',InfoRouter);

app.listen(port, () => {
    console.log(`server is running on the Port:  ${port}`);
});
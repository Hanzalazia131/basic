const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require ('dotenv').config();


const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.set("strictQuery", false); 
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const InfoRouter = require('./routes/Infos');

app.use('/test',InfoRouter);

app.listen(port, () => {
    console.log(`server is running on the Port:  ${port}`);
});
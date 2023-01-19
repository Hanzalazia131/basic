const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require ('dotenv').config();


const app = express();
const port = process.env.port || 5000;

app.use(cors());
// app.use(express.json());
// app.use(function (req, res, next) {
//     //Enabling CORS
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     next();
// });
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
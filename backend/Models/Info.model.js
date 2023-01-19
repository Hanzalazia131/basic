const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    Name : { type: String},
    CNIC : { type: String},
    DOB : { type: String}
},
{
    timestamps: true,
})

const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;

const mongoose = require("mongoose")
const BooksSchema = mongoose.Schema({
Book_Name: String,
Book_rate:{type: Number,
min: 10,
max: 500,
required: true} ,
Author: {type:String},
})
module.exports = mongoose.model("Books",BooksSchema)
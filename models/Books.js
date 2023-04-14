
const mongoose = require("mongoose")
const BooksSchema = mongoose.Schema({
Book_Name: String,
Book_rate: Number,
Author: String
})
module.exports = mongoose.model("Books",BooksSchema)
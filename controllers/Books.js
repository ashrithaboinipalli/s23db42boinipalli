var Books = require('../models/Books');
// List of all Books
//exports.Books_list = function(req, res) {
//res.send('NOT IMPLEMENTED: Books list');
// List of all Books
exports.Books_list = async function(req, res) {
    try{
    theBooks = await Books.find();
    res.send(theBooks);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
//};
// for a specific Books.
//exports.Books_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: Books detail: ' + req.params.id);
//};
exports.Books_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Books.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Books create on POST.
//exports.Books_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: Books create POST');
//Handle Books create on POST.
exports.Books_create_post = async function(req, res) {
console.log(req.body)
let document = new Books();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"Books_type":"goat", "cost":12, "size":"large"}
document.Book_Name = req.body.Book_Name;
document.Book_rate = req.body.Book_rate;
document.Author = req.body.Author;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

//};
// Handle Books delete form on DELETE.
exports.Books_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Books delete DELETE ' + req.params.id);
};
// Handle Books update form on PUT.
//exports.Books_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: Books update PUT' + req.params.id);
//};
//Handle Books update form on PUT.
exports.Books_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Books.findById( req.params.id)
// Do updates of properties
if(req.body.Book_Name)
toUpdate.Book_Name = req.body.Book_Name;
if(req.body.Book_rate) toUpdate.Book_rate = req.body.Book_rate;
if(req.body.Author) toUpdate.Author = req.body.Author;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// VIEWS
// Handle a show all view
exports.Books_view_all_Page = async function(req, res) {
    try{
    theBooks = await Books.find();
    res.render('Books', { title: 'Books Search Results', results: theBooks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Books delete on DELETE.
exports.Books_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Books.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

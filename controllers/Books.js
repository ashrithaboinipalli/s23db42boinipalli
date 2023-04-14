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
exports.Books_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Books detail: ' + req.params.id);
};
// Handle Books create on POST.
exports.Books_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Books create POST');
};
// Handle Books delete form on DELETE.
exports.Books_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Books delete DELETE ' + req.params.id);
};
// Handle Books update form on PUT.
exports.Books_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Books update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.Books_view_all_Page = async function(req, res) {
    try{
    theBooks = await Costume.find();
    res.render('Books', { title: 'Costume Search Results', results: theBooks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
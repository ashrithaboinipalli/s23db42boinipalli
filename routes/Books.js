var express = require('express');
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
const Books_controlers= require('../controllers/Books');
var router = express.Router();
/* GET Books */
router.get('/', Books_controlers.Books_view_all_Page );
module.exports = router;

/* GET detail Books page */
router.get('/detail', Books_controlers.Books_view_one_Page);
/* GET create Books page */
router.get('/create',secured, Books_controlers.Books_create_Page);
/* GET create update page */
router.get('/update', Books_controlers.Books_update_Page);
/* GET delete Books page */
router.get('/delete', secured, Books_controlers.Books_delete_Page);
/* GET update Books page */
router.get('/update', secured, Books_controlers.Books_update_Page);

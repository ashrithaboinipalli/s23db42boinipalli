var express = require('express');
const Books_controlers= require('../controllers/Books');
var router = express.Router();
/* GET Books */
router.get('/', Books_controlers.Books_view_all_Page );
/* GET detail Books page */
router.get('/detail', Books_controlers.Books_view_one_Page);
module.exports = router;

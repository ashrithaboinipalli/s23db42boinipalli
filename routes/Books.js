var express = require('express');
const Books_controlers= require('../controllers/Books');
var router = express.Router();
/* GET Books */
router.get('/', Books_controlers.Books_view_all_Page );
module.exports = router;

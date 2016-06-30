var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/wanger',function(req,res,next) {
    res.send('我不好');
})
module.exports = router;

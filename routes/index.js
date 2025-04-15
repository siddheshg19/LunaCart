var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Luna Cart', name:null });
});
router.get('/loyalty', function(req, res, next) {
  res.render('loyaltyProgram', { title: 'Luna Cart', name:null });
});
router.get('/myOrders', function(req, res, next) {
  res.render('myOrders', { title: 'Luna Cart', name:null });
});



module.exports = router;

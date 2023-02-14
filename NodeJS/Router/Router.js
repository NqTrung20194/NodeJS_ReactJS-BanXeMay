const express = require('express');
const router = express.Router();

const api_Categories = require('../Controller/api_Categories');
router.use('/api/categories',api_Categories);

const api_Products = require('../Controller/api_Products');
router.use('/api/products', api_Products);

module.exports = router;
const express = require('express');
const router = express.Router();

const api_Categories = require('../Controller/api_Categories');
router.use('/api/categories',api_Categories);


module.exports = router;
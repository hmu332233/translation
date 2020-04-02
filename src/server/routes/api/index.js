const express = require('express');
const router = express.Router();

router.use('/v1/translation', require('./translation'));

module.exports = router;
const router = require('express').Router();

router.use('/', require('./users'));
router.use('/', require('./todo'));

module.exports = router;
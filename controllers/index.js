const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./view/viewRoutes.js');

router.use('/', viewRoutes);
router.use('/api', apiRoutes);

module.exports = router;
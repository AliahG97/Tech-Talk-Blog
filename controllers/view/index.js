const router = require('express').Router();
const dashboardRoutes = require('./dashboard.js');
const commentRoutes = require('./comment');
const homeRoutes = require('./home.js');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
module.exports = router;

const router = require('express').Router();

const userRoutes = require('./user-routes');
const dashboardRoutes = require('./dashboard');
const BlogPostRoutes = require('./BlogPost');
const homeRoutes = require('./home');

router.use('/api/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/BlogPost', BlogPostRoutes);
router.use('/', homeRoutes);

module.exports = router;
const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get homepage
router.get('/', (req, res) => {
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

//GET dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{
                model: User,
                attributes: ['id', 'username'],
            }],
        });

        const accounts = userData.map((account) => account.get({ plain: true }));
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            accounts
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

//Get login
router.get('/login', (req, res) => {
    // If sessions exits, redirect the request to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

//Get Account
router.get('/account', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{
                model: User,
                attributes: ['id', 'username'],
            },
            ],

        });

        const accounts = userData.map((account) => account.get)({ plain: true });
        res.render('account', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
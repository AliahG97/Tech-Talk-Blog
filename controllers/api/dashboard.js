const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//dashboard route -- ADD 'withAuth,' between async
router.get('/', withAuth, async (req, res) => {
    try {
        //fetch User's posts from database
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model:Post }],
        });
        // Serialize data to pass to template
        const user = userData.get({ plain:true});

        // Render dashboard template with user's posts
        res.render('dashboard', {
            ...user,
            loggedIn: true,
        
        });
    }catch (err) {
        //if an error occurs, log the error message and  render the error template
         console.error(err);
         res.status(500).json(err);
    }
});

module.exports = router;
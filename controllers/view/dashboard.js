const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        console.log(req.session)
        const { title, content } = req.body;

        await BlogPost.create({
            title: title,
            content: content,
            userId:req.session.user_id
        });

        const userData = await User.findByPk(req.session.user_id, {
            include:[{ model: BlogPost }],
        });

        const user = userData.get({ plain:true});
        res.render('dashboard', {
            ...user,
            loggedIn: true,

        }); 

        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/Post/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await Post.findByPk(req.params.id);

        if (blogPostData) {

            await blogPostData.destroy();
            res.redirect('/');
        } else {
            res.status(404).json({ message: 'Post not found'});
        }
    }catch (err) {
        console.error(err);
        res.status(500).json(err);
    }

});



//dashboard route -- ADD 'withAuth,' between async
router.get('/', withAuth, async (req, res) => {
    try {
        //fetch User's posts from database
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model:BlogPost }],
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
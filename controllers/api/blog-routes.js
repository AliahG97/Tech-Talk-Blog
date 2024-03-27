const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Get All comments
router.get('/comment/:id', async (req, res) => {
    try {
        const comments = await Comment.findAll({
            where: {
                postId: req.params.id
            }
        });
        res.json(comments);
    } catch (e) {
        console.log(e)
    }
});

// Put (update posts)
router.put('/', withAuth, async (req, res) => {
    try {
        console.log("hey we are in the put request!!!!!!")
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
        res.render('updateBlog', {
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

module.exports = router;
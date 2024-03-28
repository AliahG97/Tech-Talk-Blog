const router = require('express').Router();
const { Comment, BlogPost } = require('../../models');
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
        console.log("AAAAAAAAAAAA")
        console.log(req.body)
        
        //we need to use update method on the BlogPost
    
        // TODO: fix this! checkout the CRUD activities in Sequalized Module 13
        let updateBlog = await BlogPost.update({id: req.body.id}, req.body);
       
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
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
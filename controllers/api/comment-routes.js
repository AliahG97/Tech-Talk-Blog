const express = require('express');
const router = express.Router();
const { BlogPost, Comment } = require('../../models');

router.get('/:id', async (req,res) => {
    try {
        //fetch blog post data for specific ID
        const blogPostData = await BlogPost.findByPk(req.params.id, { include:Comment});
        if (!blogPostData) {
            res.status(404).send('Blog post not found');
            return;
        }
        const blogPost = blogPostData.get({ plain:true });

        res.render('single-post', { blogPost, loggedIn: req.session.loggedIn });
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).send('Internal Server Error');
    }
});

//Route handler for submitting Comment
router.post('/:id', async (req,res) => {
    console.log(req.body)
    try {
         // create a new comment
         const newComment = await Comment.create({
            content: req.body.content,
            postId:req.params.id,
            userId: req.session.userId
         });
         res.redirect('/');
    }catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).send('Internal Sever Error');
    }
});

module.exports = router;
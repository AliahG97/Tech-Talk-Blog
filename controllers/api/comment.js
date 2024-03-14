const express = require('express');
const router = express.Router();
const { BlogPost, Comment } = require('../../models');

Router.get('/:id', async (req,res) => {
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
route.post('/:id/comment', async (req,res) => {
    try {
         // create a new comment
         const newComment = await Comment.create({
            content: req.nody.content,
            postId:req.params.id,
            userId: req.session.userId
         });
         req.redirect(`/blog${req.params.id}`);
    }catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).send('Internal Sever Error');
    }
});

module.exports = router;
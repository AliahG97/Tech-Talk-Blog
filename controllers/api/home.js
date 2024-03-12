const express = require('express');
const router = express.Router();
const { BlogPost } = require('../../models');
// Define a route handler for the home route
router.get('/', async (req, res) => {
    try {
        // Fetch the blog post data
        const blogPostData = await BlogPost.findAll();
      
        // Serialize data so the template can read it
        const blogPost = blogPostData.map((project) => project.get({ plain: true }));
        console.log(blogPost);

        // Render the homepage template with the blog post data
        res.render('homepage', { blogPost, loggedIn: req.session.loggedIn });
    } catch (error) {
        // Handle any errors
        console.error('Error fetching blog posts:', error);
        res.status(500).send('Internal Server Error');
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

module.exports = router;

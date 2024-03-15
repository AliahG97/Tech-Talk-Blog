const express = require('express');
const router = express.Router();
const { BlogPost } = require('../../models');

// Get homepage
router.get('/', async (req, res) => {
    try { 
        const BlogPostData = await BlogPost.findAll();
        const data= BlogPostData.map((x) => x.get({plain:true}));
        console.log('data: ', data);
        res.render('homepage',{ 
            loggedIn: req.session.loggedIn,
            blogPost: data
        });
    }catch (error) {
        console.error('Error fetching tech talk data:', error);
        res.status(500).send('internal sever error');

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

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;

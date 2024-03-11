
const express = require('express');
const { BlogPost } = require('../../models');
const router = express.Router();

const { BlogPost } = require('./BlogPost');

//Homeroute
router.get('/', async (req, res) => {
    try {
        const BlogPost = await BlogPost();

        res.render('homepage', {BlogPost});
    }catch (error){
        console.error('Error fetching blog posts, error');
        res.status(500).send('Internal Sever Error');
    }
});

exports.BlogPost = async (req,res) => {
    try {
        const BlogPost = await BlogPost.find();
        res.json(BlogPost);
    } catch (error) {
        console.error('Error fetching blog posts', error);
        res.status(500).json({ message: 'Internal server Error'});
    }
};


module.exports = router;